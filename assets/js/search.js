/*
 * Site-wide instant search.
 *
 * Self-injecting: builds its own trigger button and modal, so a page
 * only needs to load this one script. Works at any directory depth by
 * deriving the site root from its own <script src>.
 *
 * Index is assets/search-index.json, regenerated with
 * `python3 tools/build-search-index.py` whenever content changes.
 *
 * Open with Cmd/Ctrl-K or "/", navigate with arrows, Enter to jump,
 * Esc to close. Results deep-link to the matching section heading.
 */
(function () {
  const script = document.currentScript;
  const ROOT = script.src.replace(/assets\/js\/search\.js.*$/, "");

  let index = null;
  let loading = null;
  let results = [];
  let active = 0;

  /* ---------- markup ---------- */

  const trigger = document.createElement("button");
  trigger.type = "button";
  trigger.className = "search-trigger";
  trigger.setAttribute("aria-label", "Search the site");
  trigger.innerHTML =
    '<span class="search-trigger-icon" aria-hidden="true">⌕</span>' +
    '<span class="search-trigger-label">Search</span>' +
    '<span class="search-trigger-key" aria-hidden="true">⌘K</span>';

  const overlay = document.createElement("div");
  overlay.className = "search-overlay";
  overlay.hidden = true;
  overlay.innerHTML = `
    <div class="search-panel" role="dialog" aria-modal="true" aria-label="Search">
      <div class="search-input-row">
        <span class="search-input-icon" aria-hidden="true">⌕</span>
        <input type="text" class="search-input" placeholder="Search lectures, cases, questions…"
               autocomplete="off" spellcheck="false" aria-label="Search query">
        <button type="button" class="search-close" aria-label="Close search">Esc</button>
      </div>
      <div class="search-results" role="listbox"></div>
      <div class="search-footer">
        <span><kbd>↑</kbd><kbd>↓</kbd> navigate</span>
        <span><kbd>↵</kbd> open</span>
        <span><kbd>esc</kbd> close</span>
      </div>
    </div>`;

  document.addEventListener("DOMContentLoaded", () => {
    const header = document.querySelector(".site-header .header-inner");
    if (header) header.appendChild(trigger);
    document.body.appendChild(overlay);
  });

  const input = () => overlay.querySelector(".search-input");
  const list = () => overlay.querySelector(".search-results");

  /* ---------- index ---------- */

  function loadIndex() {
    if (index) return Promise.resolve(index);
    if (loading) return loading;
    loading = fetch(ROOT + "assets/search-index.json")
      .then((r) => r.json())
      .then((data) => {
        index = data.entries.map((e) =>
          Object.assign({}, e, {
            _t: e.t.toLowerCase(),
            _p: e.p.toLowerCase(),
            _x: e.x.toLowerCase()
          })
        );
        return index;
      })
      .catch(() => {
        index = [];
        return index;
      });
    return loading;
  }

  /* ---------- scoring ---------- */

  // Ordered-subsequence test, so "hypoca" finds "hypocalcemia" and
  // "thystorm" finds "thyroid storm".
  function subsequence(needle, hay) {
    let i = 0;
    for (let j = 0; j < hay.length && i < needle.length; j++) {
      if (hay[j] === needle[i]) i++;
    }
    return i === needle.length;
  }

  // Word matching, ranked by tightness:
  //   2 = whole word  ("feca" in "FeCa)")
  //   1 = word prefix ("feca" in "fecal")
  //   0 = no hit at a word boundary
  // Without the distinction, a search for FeCa ranks "renal + fecal
  // excretion" alongside the actual fractional-excretion section.
  function wordHit(word, hay) {
    let from = 0;
    let best = 0;
    for (;;) {
      const i = hay.indexOf(word, from);
      if (i === -1) return best;
      const before = i === 0 ? " " : hay[i - 1];
      if (!/[a-z0-9]/.test(before)) {
        const after = hay[i + word.length];
        if (after === undefined || !/[a-z0-9]/.test(after)) return 2;
        best = 1;
      }
      from = i + 1;
    }
  }

  function scoreEntry(entry, q, words) {
    let score = 0;
    const t = entry._t;

    if (t === q) score += 1200;
    else if (t.startsWith(q)) score += 700;
    else score += wordHit(q, t) * 250; // 500 whole-word, 250 prefix
    if (!score && t.includes(q)) score += 200;

    score += wordHit(q, entry._x) * 130; // 260 whole-word, 130 prefix
    score += wordHit(q, entry._p) * 60;

    // Every query word must land somewhere, or this isn't a match.
    let missing = 0;
    words.forEach((w) => {
      const inTitle = wordHit(w, t);
      const inBody = wordHit(w, entry._x);
      if (inTitle) score += inTitle * 60;
      else if (t.includes(w)) score += 55;
      else if (wordHit(w, entry._p)) score += 45;
      else if (inBody) score += inBody * 22;
      else if (entry._x.includes(w)) score += 12;
      else missing++;
    });
    if (missing) return 0; // all words must appear somewhere

    if (entry.u.includes("#")) score += 15; // prefer a specific section
    if (entry.k === "lecture") score += 10;

    return score;
  }

  function search(query) {
    const q = query.trim().toLowerCase();
    if (!q) return [];
    const words = q.split(/\s+/).filter(Boolean);
    const scored = (index || [])
      .map((e) => ({ e, s: scoreEntry(e, q, words) }))
      .filter((r) => r.s > 0);

    // Only fall back to loose subsequence matching when nothing
    // matched properly — otherwise it outranks real hits.
    if (!scored.length && q.length >= 3) {
      return (index || [])
        .filter((e) => subsequence(q, e._t))
        .slice(0, 12);
    }

    return scored
      .sort((a, b) => b.s - a.s)
      .slice(0, 24)
      .map((r) => r.e);
  }

  /* ---------- rendering ---------- */

  function escapeHtml(s) {
    return s.replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
  }

  function snippet(entry, q) {
    const text = entry.x;
    const i = entry._x.indexOf(q.toLowerCase());
    let start = 0;
    if (i > 60) start = i - 60;
    let out = text.slice(start, start + 160).trim();
    if (start > 0) out = "… " + out;
    if (start + 160 < text.length) out += " …";
    return out;
  }

  function highlight(text, words) {
    let out = escapeHtml(text);
    words
      .slice()
      .sort((a, b) => b.length - a.length)
      .forEach((w) => {
        if (w.length < 2) return;
        const rx = new RegExp("(" + w.replace(/[.*+?^${}()|[\]\\]/g, "\\$&") + ")", "ig");
        out = out.replace(rx, "<mark>$1</mark>");
      });
    return out;
  }

  const KIND_LABEL = { lecture: "Lecture", case: "Daily Case", exam: "Exam", page: "Page" };

  function render(query) {
    const el = list();
    const words = query.trim().toLowerCase().split(/\s+/).filter(Boolean);

    if (!query.trim()) {
      el.innerHTML =
        '<div class="search-empty">Search across every lecture, Daily Case and exam question.</div>';
      return;
    }
    if (!results.length) {
      el.innerHTML =
        '<div class="search-empty">No matches for <strong>' +
        escapeHtml(query) +
        "</strong>.</div>";
      return;
    }

    el.innerHTML = results
      .map((e, i) => {
        const where = [KIND_LABEL[e.k] || "Page", e.c].filter(Boolean).join(" · ");
        return (
          '<a class="search-hit' +
          (i === active ? " is-active" : "") +
          '" role="option" href="' +
          ROOT +
          e.u +
          '" data-i="' +
          i +
          '">' +
          '<div class="search-hit-main">' +
          '<div class="search-hit-title">' +
          highlight(e.t, words) +
          "</div>" +
          '<div class="search-hit-snippet">' +
          highlight(snippet(e, query), words) +
          "</div>" +
          "</div>" +
          '<div class="search-hit-where">' +
          escapeHtml(where) +
          "</div>" +
          "</a>"
        );
      })
      .join("");
  }

  function setActive(next) {
    if (!results.length) return;
    active = (next + results.length) % results.length;
    const nodes = list().querySelectorAll(".search-hit");
    nodes.forEach((n, i) => n.classList.toggle("is-active", i === active));
    const el = nodes[active];
    if (el) el.scrollIntoView({ block: "nearest" });
  }

  /* ---------- open / close ---------- */

  function open() {
    overlay.hidden = false;
    document.body.style.overflow = "hidden";
    loadIndex().then(() => {
      if (input().value) {
        results = search(input().value);
        render(input().value);
      }
    });
    input().focus();
    input().select();
  }

  function close() {
    overlay.hidden = true;
    document.body.style.overflow = "";
  }

  /* ---------- events ---------- */

  overlay.addEventListener("click", (e) => {
    if (e.target === overlay) close();
  });

  document.addEventListener("click", (e) => {
    if (e.target.closest(".search-trigger")) open();
    if (e.target.closest(".search-close")) close();
  });

  overlay.addEventListener("input", (e) => {
    if (!e.target.classList.contains("search-input")) return;
    const q = e.target.value;
    active = 0;
    loadIndex().then(() => {
      results = search(q);
      render(q);
    });
  });

  document.addEventListener("keydown", (e) => {
    const typing = /^(INPUT|TEXTAREA)$/.test(document.activeElement.tagName);

    if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
      e.preventDefault();
      overlay.hidden ? open() : close();
      return;
    }
    if (e.key === "/" && !typing && overlay.hidden) {
      e.preventDefault();
      open();
      return;
    }
    if (overlay.hidden) return;

    if (e.key === "Escape") {
      e.preventDefault();
      close();
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      setActive(active + 1);
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setActive(active - 1);
    } else if (e.key === "Enter") {
      const el = list().querySelectorAll(".search-hit")[active];
      if (el) {
        e.preventDefault();
        window.location.href = el.getAttribute("href");
      }
    }
  });

  // Warm the index on idle so the first open feels instant.
  if ("requestIdleCallback" in window) requestIdleCallback(loadIndex);
})();

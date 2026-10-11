/*
 * Topics to review.
 *
 * One list, kept in localStorage under "pom2-topics", shared by every
 * page on the site (same origin). Two parts:
 *
 *  - On every page, a "+ Review" button in the header opens a small
 *    popover that adds the current page (and the section you're reading)
 *    to the list.
 *  - On topics/index.html (#tp-app), the full list: add with page
 *    suggestions from the search index, tick off, star, edit, delete
 *    with undo, filter, and export/import a JSON backup.
 *
 * A topic is { id, text, unit, note, href, star, done, created, doneAt }.
 * href is relative to the site root, so it works from any page.
 */
(function () {
  const KEY = "pom2-topics";
  const script = document.currentScript;
  const ROOT = script.src.replace(/assets\/js\/topics\.js.*$/, "");
  const UNITS = ["Endocrinology", "Female Reproductive", "Musculoskeletal", "Emerg", "Other"];

  function load() {
    try {
      const v = JSON.parse(localStorage.getItem(KEY));
      return Array.isArray(v) ? v : [];
    } catch (e) {
      return [];
    }
  }
  function save(list) {
    try {
      localStorage.setItem(KEY, JSON.stringify(list));
      return true;
    } catch (e) {
      return false;
    }
  }
  function uid() {
    return Date.now().toString(36) + Math.random().toString(36).slice(2, 7);
  }
  function esc(s) {
    return String(s == null ? "" : s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  }
  // Guess the unit from a root-relative path.
  function unitFor(path) {
    if (/^units\/endocrinology\//.test(path)) return "Endocrinology";
    if (/^units\/female-reproductive\//.test(path)) return "Female Reproductive";
    if (/^units\/musculoskeletal\//.test(path)) return "Musculoskeletal";
    if (/^emerg\//.test(path)) return "Emerg";
    return "Other";
  }
  function addTopic(t) {
    const list = load();
    list.push(Object.assign({ id: uid(), text: "", unit: "Other", note: "", href: "", star: false, done: false, created: Date.now(), doneAt: 0 }, t));
    return save(list);
  }

  /* ---------- Quick add, on every page except the list itself ---------- */
  function quickAdd() {
    const header = document.querySelector(".site-header .header-inner");
    if (!header || document.getElementById("tp-app")) return;
    const here = location.href.split("#")[0];
    const rel = here.indexOf(ROOT) === 0 ? here.slice(ROOT.length) : "";

    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "tp-quick-btn";
    btn.title = "Add this page to Topics to Review";
    btn.innerHTML = '<span aria-hidden="true">＋</span><span class="tp-quick-label">Review</span>';
    header.appendChild(btn);

    const pop = document.createElement("div");
    pop.className = "tp-pop";
    pop.hidden = true;
    pop.innerHTML =
      '<div class="tp-pop-head">Add to Topics to Review</div>' +
      '<input class="tp-pop-text" type="text" maxlength="200" aria-label="Topic">' +
      '<label class="tp-pop-link"><input type="checkbox" checked> Link to <span class="tp-pop-where"></span></label>' +
      '<textarea class="tp-pop-note" rows="2" maxlength="600" placeholder="Note (optional): what to focus on"></textarea>' +
      '<div class="tp-pop-actions"><button type="button" class="tp-btn tp-pop-add">Add</button>' +
      '<button type="button" class="tp-btn is-ghost tp-pop-cancel">Cancel</button>' +
      '<a class="tp-pop-view" href="' + ROOT + 'topics/index.html">Open the list &rarr;</a></div>' +
      '<div class="tp-pop-msg" hidden></div>';
    document.body.appendChild(pop);

    const text = pop.querySelector(".tp-pop-text");
    const note = pop.querySelector(".tp-pop-note");
    const linkBox = pop.querySelector(".tp-pop-link input");
    const where = pop.querySelector(".tp-pop-where");
    const msg = pop.querySelector(".tp-pop-msg");
    let anchor = "";

    // The section you're reading: the last h2 with an id (or in a section
    // with an id) that has scrolled past the top third of the screen.
    function currentSection() {
      const heads = Array.from(document.querySelectorAll("article section[id] > h2, article h2[id]"));
      let best = null;
      heads.forEach((h) => {
        if (h.getBoundingClientRect().top < window.innerHeight / 3) best = h;
      });
      if (!best) return null;
      const id = best.id || best.parentElement.id;
      return { id, title: best.textContent.replace(/^\s*\d+\s+/, "").trim() };
    }

    // The header scrolls away, so you scroll back up to reach the button.
    // Remember the last section you were reading below the header instead.
    let lastSec = null;
    let ticking = false;
    window.addEventListener("scroll", () => {
      if (ticking) return;
      ticking = true;
      setTimeout(() => {
        ticking = false;
        if (window.scrollY > 200) lastSec = currentSection() || lastSec;
      }, 120);
    }, { passive: true });

    function place() {
      const r = btn.getBoundingClientRect();
      pop.style.top = window.scrollY + r.bottom + 8 + "px";
      const left = Math.min(window.scrollX + r.right - pop.offsetWidth, window.scrollX + document.documentElement.clientWidth - pop.offsetWidth - 8);
      pop.style.left = Math.max(8, left) + "px";
    }

    function openPop() {
      const h1 = document.querySelector("article h1, main h1");
      const page = (h1 ? h1.textContent : document.title.split("|")[0]).trim();
      const sec = (window.scrollY > 200 ? currentSection() : null) || lastSec;
      anchor = sec ? "#" + sec.id : "";
      text.value = sec && sec.title !== page ? page + " — " + sec.title : page;
      where.textContent = sec ? "this section" : "this page";
      note.value = "";
      msg.hidden = true;
      pop.hidden = false;
      place();
      text.focus();
      text.select();
    }
    function closePop() {
      pop.hidden = true;
    }
    function add() {
      const t = text.value.trim();
      if (!t) {
        text.focus();
        return;
      }
      const ok = addTopic({ text: t, note: note.value.trim(), unit: unitFor(rel), href: linkBox.checked && rel ? rel + anchor : "" });
      msg.hidden = false;
      msg.textContent = ok ? "Added ✓" : "Couldn't save: this browser is blocking storage.";
      if (ok) setTimeout(closePop, 900);
    }

    btn.addEventListener("click", () => (pop.hidden ? openPop() : closePop()));
    pop.querySelector(".tp-pop-add").addEventListener("click", add);
    pop.querySelector(".tp-pop-cancel").addEventListener("click", closePop);
    text.addEventListener("keydown", (e) => {
      if (e.key === "Enter") add();
      if (e.key === "Escape") closePop();
    });
    note.addEventListener("keydown", (e) => {
      if (e.key === "Escape") closePop();
    });
    document.addEventListener("click", (e) => {
      if (!pop.hidden && !pop.contains(e.target) && !btn.contains(e.target)) closePop();
    });
    window.addEventListener("resize", () => !pop.hidden && place());
  }

  /* ---------- The full list on topics/index.html ---------- */
  function app(root) {
    const form = root.querySelector(".tp-add");
    const input = form.querySelector(".tp-add-text");
    const unitSel = form.querySelector(".tp-add-unit");
    const noteIn = form.querySelector(".tp-add-note");
    const chip = form.querySelector(".tp-add-chip");
    const sugBox = form.querySelector(".tp-sug");
    const listEl = root.querySelector(".tp-list");
    const countEl = root.querySelector(".tp-count");
    const toast = root.querySelector(".tp-toast");
    let filter = "todo";
    let unitFilter = "";
    let editing = null;
    let linked = null; // { href, label, unit } picked from the suggestions
    let index = null;
    let sugs = [];
    let sugAt = -1;
    let undo = null;

    unitSel.innerHTML = '<option value="">Unit: auto</option>' + UNITS.map((u) => `<option>${u}</option>`).join("");

    /* Suggestions from the search index: pages and their sections. */
    function getIndex() {
      if (index) return Promise.resolve(index);
      return fetch(ROOT + "assets/search-index.json")
        .then((r) => r.json())
        .then((d) => {
          const seen = new Set();
          index = (d.entries || []).filter((e) => {
            if (e.k === "page" || seen.has(e.u)) return false;
            seen.add(e.u);
            return true;
          }).map((e) => ({ t: e.t, p: e.p, c: e.c, u: e.u, hay: (e.t + " " + e.p + " " + e.c).toLowerCase(), body: (e.x || "").toLowerCase() }));
          return index;
        })
        .catch(() => (index = []));
    }
    function suggest() {
      const q = input.value.trim().toLowerCase();
      if (q.length < 2 || linked) return hideSug();
      getIndex().then((ix) => {
        const words = q.split(/\s+/);
        // Title matches first, then sections that mention it in their text.
        const score = (e) => (words.every((w) => e.hay.includes(w)) ? 2 + e.t.toLowerCase().startsWith(q) : words.every((w) => e.hay.includes(w) || e.body.includes(w)) ? 1 : 0);
        sugs = ix.map((e) => [score(e), e]).filter(([n]) => n)
          .sort((a, b) => b[0] - a[0])
          .slice(0, 7).map(([, e]) => e);
        sugAt = -1;
        if (!sugs.length) return hideSug();
        sugBox.innerHTML = sugs.map((e, i) =>
          `<button type="button" class="tp-sug-item" data-i="${i}"><span class="tp-sug-t">${esc(e.t === e.p ? e.p : e.p + " — " + e.t)}</span><span class="tp-sug-c">${esc(e.c)}</span></button>`
        ).join("");
        sugBox.hidden = false;
      });
    }
    function hideSug() {
      sugBox.hidden = true;
      sugs = [];
      sugAt = -1;
    }
    function pick(i) {
      const e = sugs[i];
      if (!e) return;
      linked = { href: e.u, label: e.t === e.p ? e.p : e.p + " — " + e.t, unit: unitFor(e.u) };
      // Keep what was typed, unless it was just the start of the page's name.
      const typed = input.value.trim().toLowerCase();
      if (!typed || linked.label.toLowerCase().includes(typed)) input.value = linked.label;
      showChip();
      hideSug();
      input.focus();
    }
    function showChip() {
      if (!linked) {
        chip.hidden = true;
        return;
      }
      chip.hidden = false;
      chip.innerHTML = `Linked to <strong>${esc(linked.label)}</strong> <button type="button" class="tp-chip-x" aria-label="Remove link">×</button>`;
    }

    function submit(e) {
      e.preventDefault();
      const t = input.value.trim();
      if (!t) return input.focus();
      const unit = unitSel.value || (linked ? linked.unit : "Other");
      if (!addTopic({ text: t, unit, note: noteIn.value.trim(), href: linked ? linked.href : "" })) {
        flash("Couldn't save: this browser is blocking storage.");
        return;
      }
      input.value = "";
      noteIn.value = "";
      unitSel.value = "";
      linked = null;
      showChip();
      hideSug();
      if (filter === "done") filter = "todo";
      render();
      input.focus();
    }

    function flash(text, action) {
      toast.innerHTML = esc(text) + (action ? ' <button type="button" class="tp-toast-btn">Undo</button>' : "");
      toast.hidden = false;
      clearTimeout(flash.t);
      flash.t = setTimeout(() => {
        toast.hidden = true;
        undo = null;
      }, 6000);
    }

    function update(id, fn) {
      const list = load();
      const t = list.find((x) => x.id === id);
      if (!t) return;
      fn(t, list);
      save(list);
      render();
    }

    function render() {
      const list = load();
      const todo = list.filter((t) => !t.done).length;
      const done = list.length - todo;
      countEl.textContent = list.length ? `${todo} to review · ${done} done` : "";
      root.querySelectorAll(".tp-tab").forEach((b) => {
        const f = b.dataset.f;
        b.classList.toggle("is-on", f === filter);
        b.querySelector("span").textContent = f === "todo" ? todo : f === "done" ? done : list.length;
      });
      // Unit chips only for units in use.
      const used = UNITS.filter((u) => list.some((t) => t.unit === u));
      if (unitFilter && !used.includes(unitFilter)) unitFilter = "";
      root.querySelector(".tp-units").innerHTML = used.length > 1
        ? ['<button type="button" class="tp-unit' + (unitFilter ? "" : " is-on") + '" data-u="">All units</button>']
            .concat(used.map((u) => `<button type="button" class="tp-unit${unitFilter === u ? " is-on" : ""}" data-u="${esc(u)}">${esc(u)}</button>`)).join("")
        : "";

      let shown = list.filter((t) => (filter === "all" || (filter === "done") === !!t.done) && (!unitFilter || t.unit === unitFilter));
      shown.sort((a, b) => (a.done - b.done) || (b.done ? b.doneAt - a.doneAt : (b.star - a.star) || (b.created - a.created)));

      if (!shown.length) {
        listEl.innerHTML = `<li class="tp-empty">${
          !list.length ? "Nothing here yet. Add a topic above, or press <strong>＋ Review</strong> in the header of any lecture or cheat sheet."
          : filter === "done" ? "Nothing ticked off yet." : "All caught up. Nice."
        }</li>`;
        return;
      }
      listEl.innerHTML = shown.map((t) => {
        if (editing === t.id) {
          return `<li class="tp-item is-editing" data-id="${t.id}">
            <div class="tp-edit">
              <input class="tp-edit-text" type="text" maxlength="200" value="${esc(t.text)}" aria-label="Topic">
              <select class="tp-edit-unit" aria-label="Unit">${UNITS.map((u) => `<option${u === t.unit ? " selected" : ""}>${u}</option>`).join("")}</select>
              <textarea class="tp-edit-note" rows="2" maxlength="600" placeholder="Note (optional)">${esc(t.note)}</textarea>
              <div class="tp-edit-actions"><button type="button" class="tp-btn" data-act="save">Save</button><button type="button" class="tp-btn is-ghost" data-act="cancel">Cancel</button></div>
            </div></li>`;
        }
        const when = new Date(t.done ? t.doneAt : t.created).toLocaleDateString(undefined, { month: "short", day: "numeric" });
        return `<li class="tp-item${t.done ? " is-done" : ""}${t.star ? " is-star" : ""}" data-id="${t.id}">
          <input type="checkbox" class="tp-check" data-act="done" ${t.done ? "checked" : ""} aria-label="Mark reviewed">
          <div class="tp-body">
            <div class="tp-text">${esc(t.text)}</div>
            <div class="tp-meta"><span class="tp-pill">${esc(t.unit)}</span>${t.href ? `<a href="${ROOT}${esc(t.href)}">Open &rarr;</a>` : ""}<span>${t.done ? "Reviewed " : "Added "}${when}</span></div>
            ${t.note ? `<div class="tp-note">${esc(t.note)}</div>` : ""}
          </div>
          <div class="tp-acts">
            <button type="button" class="tp-icon${t.star ? " is-on" : ""}" data-act="star" title="${t.star ? "Unstar" : "Star: high priority"}" aria-label="Star">${t.star ? "★" : "☆"}</button>
            <button type="button" class="tp-icon" data-act="edit" title="Edit" aria-label="Edit">✎</button>
            <button type="button" class="tp-icon" data-act="del" title="Delete" aria-label="Delete">🗑</button>
          </div></li>`;
      }).join("");
      const ed = listEl.querySelector(".tp-edit-text");
      if (ed) ed.focus();
    }

    listEl.addEventListener("click", (e) => {
      const el = e.target.closest("[data-act]");
      if (!el) return;
      const id = el.closest(".tp-item").dataset.id;
      const act = el.dataset.act;
      if (act === "done") update(id, (t) => { t.done = !t.done; t.doneAt = t.done ? Date.now() : 0; });
      if (act === "star") update(id, (t) => { t.star = !t.star; });
      if (act === "edit") { editing = id; render(); }
      if (act === "cancel") { editing = null; render(); }
      if (act === "save") {
        const li = el.closest(".tp-item");
        const text = li.querySelector(".tp-edit-text").value.trim();
        if (!text) return li.querySelector(".tp-edit-text").focus();
        editing = null;
        update(id, (t) => { t.text = text; t.unit = li.querySelector(".tp-edit-unit").value; t.note = li.querySelector(".tp-edit-note").value.trim(); });
      }
      if (act === "del") {
        const list = load();
        const i = list.findIndex((x) => x.id === id);
        if (i < 0) return;
        const [gone] = list.splice(i, 1);
        save(list);
        undo = { item: gone, at: i };
        render();
        flash("Deleted “" + (gone.text.length > 40 ? gone.text.slice(0, 40) + "…" : gone.text) + "”.", true);
      }
    });
    listEl.addEventListener("keydown", (e) => {
      if (!e.target.closest(".is-editing")) return;
      if (e.key === "Escape") { editing = null; render(); }
      if (e.key === "Enter" && e.target.matches(".tp-edit-text")) e.target.closest(".tp-item").querySelector('[data-act="save"]').click();
    });
    toast.addEventListener("click", (e) => {
      if (!e.target.closest(".tp-toast-btn") || !undo) return;
      const list = load();
      list.splice(undo.at, 0, undo.item);
      save(list);
      undo = null;
      toast.hidden = true;
      render();
    });

    root.querySelectorAll(".tp-tab").forEach((b) => b.addEventListener("click", () => { filter = b.dataset.f; render(); }));
    root.querySelector(".tp-units").addEventListener("click", (e) => {
      const b = e.target.closest(".tp-unit");
      if (b) { unitFilter = b.dataset.u; render(); }
    });

    form.addEventListener("submit", submit);
    input.addEventListener("input", suggest);
    input.addEventListener("keydown", (e) => {
      if (sugBox.hidden) return;
      const items = sugBox.querySelectorAll(".tp-sug-item");
      if (e.key === "ArrowDown" || e.key === "ArrowUp") {
        e.preventDefault();
        sugAt = (sugAt + (e.key === "ArrowDown" ? 1 : -1) + items.length) % items.length;
        items.forEach((it, i) => it.classList.toggle("is-on", i === sugAt));
      } else if (e.key === "Enter" && sugAt >= 0) {
        e.preventDefault();
        pick(sugAt);
      } else if (e.key === "Escape") hideSug();
    });
    sugBox.addEventListener("mousedown", (e) => {
      const it = e.target.closest(".tp-sug-item");
      if (it) { e.preventDefault(); pick(+it.dataset.i); }
    });
    input.addEventListener("blur", () => setTimeout(hideSug, 150));
    chip.addEventListener("click", (e) => {
      if (e.target.closest(".tp-chip-x")) { linked = null; showChip(); input.focus(); }
    });

    /* Backup: export to a file, import (merge) from one. */
    root.querySelector(".tp-export").addEventListener("click", () => {
      const blob = new Blob([JSON.stringify({ app: "pom2-topics", saved: new Date().toISOString(), topics: load() }, null, 2)], { type: "application/json" });
      const a = document.createElement("a");
      a.href = URL.createObjectURL(blob);
      a.download = "topics-to-review-" + new Date().toISOString().slice(0, 10) + ".json";
      document.body.appendChild(a);
      a.click();
      setTimeout(() => { URL.revokeObjectURL(a.href); a.remove(); }, 0);
    });
    const file = root.querySelector(".tp-import-file");
    root.querySelector(".tp-import").addEventListener("click", () => file.click());
    file.addEventListener("change", () => {
      const f = file.files[0];
      if (!f) return;
      f.text().then((txt) => {
        let incoming;
        try {
          const d = JSON.parse(txt);
          incoming = Array.isArray(d) ? d : d.topics;
          if (!Array.isArray(incoming)) throw 0;
        } catch (err) {
          flash("That file isn't a topics backup.");
          return;
        }
        const list = load();
        const have = new Set(list.map((t) => t.id));
        let n = 0;
        incoming.forEach((t) => {
          if (!t || typeof t.text !== "string" || have.has(t.id)) return;
          list.push(Object.assign({ id: uid(), unit: "Other", note: "", href: "", star: false, done: false, created: Date.now(), doneAt: 0 }, t));
          n++;
        });
        save(list);
        render();
        flash(n ? `Imported ${n} topic${n === 1 ? "" : "s"}.` : "Nothing new in that file.");
      }).finally(() => (file.value = ""));
    });

    // Keep tabs in sync if the list changes in another tab.
    window.addEventListener("storage", (e) => { if (e.key === KEY) render(); });
    render();
  }

  document.addEventListener("DOMContentLoaded", () => {
    const root = document.getElementById("tp-app");
    if (root) app(root);
    quickAdd();
  });
})();

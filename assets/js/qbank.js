/*
 * Question bank.
 *
 * Data (loaded before this file):
 *   window.QB_LECTURES = [{ id, unit, unitLabel, week, num, title, href }]
 *   window.QB = [{ id, lec, q, options: [...], a: index | [indices],
 *                  why, img?, alt?, src?: { t, u? }, ref?: "#section" }]
 *   A question whose `a` is an array is select-all-that-apply, scored
 *   all-or-nothing. Options are shuffled each time a block is built.
 *
 * Views (hash-routed so the back button works):
 *   #home              pick lectures/weeks, filters, count, mode
 *   #block             the running block, one question at a time
 *   #results           score, per-lecture breakdown, review list
 *   #lec=<id>          home with that lecture preselected
 *
 * Progress lives in localStorage ("pom2-qbank-v1"): the last result,
 * attempts, flag and a Leitner box + due date per question, plus the
 * running block so a refresh resumes it. Everything still works without
 * storage; it just isn't kept. Export/import moves it between browsers.
 */
(function () {
  "use strict";
  const LECS = window.QB_LECTURES || [];
  const BANK = (window.QB || []).filter((q) => q && q.id && q.lec);
  const root = document.getElementById("qb-app");
  if (!root) return;

  const KEY = "pom2-qbank-v1";
  const PREFS = "pom2-qbank-prefs";
  const DAY = 86400000;
  const BOX_DAYS = [0, 1, 3, 7, 16, 35];
  const EXAM_SECONDS = 90;

  const byId = new Map(BANK.map((q) => [q.id, q]));
  const lecById = new Map(LECS.map((l) => [l.id, l]));
  const qsByLec = new Map();
  BANK.forEach((q) => {
    if (!qsByLec.has(q.lec)) qsByLec.set(q.lec, []);
    qsByLec.get(q.lec).push(q);
  });

  /* ------------------------------------------------------------ storage */
  function load(key, fallback) {
    try {
      const raw = localStorage.getItem(key);
      return raw ? JSON.parse(raw) : fallback;
    } catch (e) {
      return fallback;
    }
  }
  function save() {
    try {
      localStorage.setItem(KEY, JSON.stringify(S));
    } catch (e) { /* storage blocked: keep going in memory */ }
  }
  function savePrefs() {
    try {
      localStorage.setItem(PREFS, JSON.stringify(P));
    } catch (e) { /* ignore */ }
  }
  const S = load(KEY, null) || { q: {}, history: [], block: null };
  S.q = S.q || {};
  S.history = S.history || [];
  const P = Object.assign({ unit: "endocrinology", sel: [], filter: "unused", count: 40, mode: "tutor" }, load(PREFS, {}));

  /* ------------------------------------------------------------ helpers */
  const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
  const strip = (s) => String(s).replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim();
  const isMulti = (q) => Array.isArray(q.a);
  const answerSet = (q) => (isMulti(q) ? q.a.slice().sort() : [q.a]);
  const pct = (a, b) => (b ? Math.round((100 * a) / b) : 0);
  function shuffle(arr) {
    const a = arr.slice();
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }
  function fmtTime(sec) {
    sec = Math.max(0, Math.round(sec));
    const h = Math.floor(sec / 3600);
    const m = Math.floor((sec % 3600) / 60);
    const s = sec % 60;
    return (h ? h + ":" + String(m).padStart(2, "0") : m) + ":" + String(s).padStart(2, "0");
  }
  const rel = (href) => (href ? "../" + href : null);
  function lecLabel(l) {
    return l ? l.num + " · " + l.title : "";
  }
  function stat(id) {
    return S.q[id] || null;
  }
  function status(id) {
    const s = stat(id);
    if (!s || !s.n) return "unused";
    return s.ok ? "right" : "wrong";
  }
  function isDue(id, now) {
    const s = stat(id);
    return !!(s && s.n && s.due && s.due <= now);
  }

  function lecStats(lecId) {
    const list = qsByLec.get(lecId) || [];
    let used = 0, right = 0;
    list.forEach((q) => {
      const s = stat(q.id);
      if (s && s.n) {
        used++;
        if (s.ok) right++;
      }
    });
    return { total: list.length, used, right };
  }

  function heat(p, used) {
    if (!used) return "qb-heat-none";
    if (p >= 80) return "qb-heat-4";
    if (p >= 70) return "qb-heat-3";
    if (p >= 55) return "qb-heat-2";
    return "qb-heat-1";
  }

  const UNITS = [];
  LECS.forEach((l) => {
    if (!UNITS.some((u) => u.id === l.unit)) UNITS.push({ id: l.unit, label: l.unitLabel });
  });
  if (!UNITS.some((u) => u.id === P.unit) && UNITS.length) P.unit = UNITS[0].id;

  /* ------------------------------------------------------------ pool */
  function pool(lecIds, filter) {
    const now = Date.now();
    const set = new Set(lecIds);
    return BANK.filter((q) => {
      if (!set.has(q.lec)) return false;
      const s = stat(q.id);
      switch (filter) {
        case "unused": return !s || !s.n;
        case "wrong": return !!(s && s.n && !s.ok);
        case "flagged": return !!(s && s.flag);
        case "guessed": return !!(s && s.guess);
        case "due": return isDue(q.id, now);
        default: return true;
      }
    });
  }

  function makeBlock(ids, mode, label) {
    const items = ids.map((id) => {
      const q = byId.get(id);
      return { id, order: shuffle(q.options.map((_, i) => i)), pick: [], struck: [], done: false, guess: false, flag: !!(stat(id) && stat(id).flag), t: 0 };
    });
    S.block = { mode, label, items, cur: 0, start: Date.now(), elapsed: 0, limit: mode === "exam" ? items.length * EXAM_SECONDS : 0, submitted: false };
    save();
    if (location.hash === "#block") renderBlock();
    else location.hash = "block";
  }

  /* ------------------------------------------------------------ record */
  function record(item, correct) {
    const s = S.q[item.id] || { n: 0, r: 0, box: 0 };
    s.n += 1;
    if (correct) s.r += 1;
    s.ok = correct;
    s.guess = !!item.guess && correct;
    s.last = Date.now();
    if (!correct || item.guess) s.box = 1;
    else s.box = Math.min((s.box || 0) + 1, BOX_DAYS.length - 1);
    s.due = s.last + BOX_DAYS[s.box] * DAY;
    s.flag = !!item.flag;
    S.q[item.id] = s;
  }

  function judge(item) {
    const q = byId.get(item.id);
    const want = answerSet(q).join(",");
    const got = item.pick.slice().sort().join(",");
    return want === got;
  }

  /* ------------------------------------------------------------ HOME */
  function renderHome(preLec) {
    stopTimer();
    if (preLec && lecById.has(preLec)) {
      const l = lecById.get(preLec);
      P.unit = l.unit;
      P.sel = [preLec];
      P.filter = lecStats(preLec).used >= lecStats(preLec).total ? "all" : P.filter;
      savePrefs();
    }
    const now = Date.now();
    const total = BANK.length;
    let used = 0, right = 0, due = 0, flagged = 0;
    BANK.forEach((q) => {
      const s = stat(q.id);
      if (s && s.n) {
        used++;
        if (s.ok) right++;
        if (s.due && s.due <= now) due++;
      }
      if (s && s.flag) flagged++;
    });

    const unitLecs = LECS.filter((l) => l.unit === P.unit);
    const weeks = [...new Set(unitLecs.map((l) => l.week))];
    const sel = new Set(P.sel.filter((id) => lecById.has(id)));

    let h = "";
    if (S.block && !S.block.submitted) {
      const b = S.block;
      const doneN = b.items.filter((i) => i.done || i.pick.length).length;
      h += `<div class="qb-resume"><div><strong>Block in progress</strong> · ${esc(b.label)} · ${doneN}/${b.items.length} answered</div>
        <div class="qb-resume-actions"><button class="qb-btn" data-act="resume">Resume</button><button class="qb-btn qb-btn-ghost" data-act="discard">Discard</button></div></div>`;
    }

    h += `<div class="qb-stats">
      <div class="qb-stat"><span class="qb-stat-num">${used}<small>/${total}</small></span><span class="qb-stat-label">answered</span></div>
      <div class="qb-stat"><span class="qb-stat-num ${used ? heat(pct(right, used), used).replace("qb-heat", "qb-ink") : ""}">${used ? pct(right, used) + "%" : "–"}</span><span class="qb-stat-label">correct (last try)</span></div>
      <div class="qb-stat"><span class="qb-stat-num">${due}</span><span class="qb-stat-label">due for review</span></div>
      <div class="qb-stat"><span class="qb-stat-num">${flagged}</span><span class="qb-stat-label">flagged</span></div>
    </div>`;

    h += `<div class="qb-quick">
      <button class="qb-quick-btn" data-act="due" ${due ? "" : "disabled"}><strong>Review what's due</strong><span>${due} question${due === 1 ? "" : "s"} you missed, guessed or haven't seen in a while</span></button>
      <button class="qb-quick-btn" data-act="weak" ${used ? "" : "disabled"}><strong>Hit my weak spots</strong><span>40 from your lowest-scoring lectures, unseen first</span></button>
      <button class="qb-quick-btn" data-act="mock"><strong>Mock progress test</strong><span>100 questions across Endo + Repro, timed at 90 s each</span></button>
    </div>`;

    h += `<div class="qb-tabs" role="tablist">` + UNITS.map((u) => {
      const n = BANK.filter((q) => (lecById.get(q.lec) || {}).unit === u.id).length;
      return `<button role="tab" class="qb-tab${u.id === P.unit ? " is-active" : ""}" data-unit="${u.id}" aria-selected="${u.id === P.unit}">${esc(u.label)} <span>${n}</span></button>`;
    }).join("") + `</div>`;

    h += `<div class="qb-layout"><div class="qb-tree">`;
    weeks.forEach((w) => {
      const wl = unitLecs.filter((l) => l.week === w);
      const st = wl.reduce((a, l) => { const s = lecStats(l.id); a.t += s.total; a.u += s.used; a.r += s.right; return a; }, { t: 0, u: 0, r: 0 });
      const allSel = wl.every((l) => sel.has(l.id) || !lecStats(l.id).total);
      h += `<section class="qb-week">
        <header class="qb-week-head">
          <label class="qb-check"><input type="checkbox" data-week="${w}" ${allSel && wl.some((l) => sel.has(l.id)) ? "checked" : ""}><span>Week ${w}</span></label>
          <span class="qb-week-meta">${st.t} Q · ${st.u} done${st.u ? ` · <b class="${heat(pct(st.r, st.u), st.u).replace("qb-heat", "qb-ink")}">${pct(st.r, st.u)}%</b>` : ""}</span>
          <button class="qb-mini" data-act="week" data-week="${w}" ${st.t ? "" : "disabled"}>Practise week</button>
        </header>
        <ul class="qb-lecs">`;
      wl.forEach((l) => {
        const s = lecStats(l.id);
        const p = pct(s.right, s.used);
        h += `<li class="qb-lec${s.total ? "" : " is-empty"}">
          <label class="qb-check"><input type="checkbox" data-lec="${l.id}" ${sel.has(l.id) ? "checked" : ""} ${s.total ? "" : "disabled"}>
            <span class="qb-lec-num">${esc(l.num)}</span><span class="qb-lec-title">${esc(l.title)}</span></label>
          <span class="qb-lec-bar" title="${s.used}/${s.total} answered"><i style="width:${pct(s.used, s.total)}%"></i></span>
          <span class="qb-chip ${heat(p, s.used)}" title="${s.used ? s.right + " of " + s.used + " right on the last try" : "not started"}">${s.used ? p + "%" : s.total + " Q"}</span>
          <button class="qb-mini" data-act="lec" data-lec="${l.id}" ${s.total ? "" : "disabled"} aria-label="Practise ${esc(l.title)}">▶</button>
        </li>`;
      });
      h += `</ul></section>`;
    });
    h += `</div>`;

    // builder
    const selIds = [...sel];
    const counts = {};
    ["unused", "all", "wrong", "guessed", "flagged", "due"].forEach((f) => { counts[f] = pool(selIds, f).length; });
    const avail = counts[P.filter] || 0;
    const n = Math.min(P.count, avail);
    h += `<aside class="qb-builder">
      <h2>Build a block</h2>
      <p class="qb-muted">${selIds.length ? `${selIds.length} lecture${selIds.length === 1 ? "" : "s"} selected` : "Tick lectures or whole weeks in the list."}</p>
      <div class="qb-field"><span class="qb-field-label">Questions</span>
        <div class="qb-seg qb-seg-wrap">
          ${[["unused", "Unused"], ["all", "All"], ["wrong", "Missed"], ["guessed", "Guessed"], ["flagged", "Flagged"], ["due", "Due"]].map(([f, t]) =>
            `<button class="qb-seg-btn${P.filter === f ? " is-on" : ""}" data-filter="${f}">${t} <span>${counts[f]}</span></button>`).join("")}
        </div></div>
      <div class="qb-field"><label class="qb-field-label" for="qb-count">How many</label>
        <div class="qb-count"><input type="range" id="qb-count" min="1" max="${Math.max(1, Math.min(150, avail))}" value="${Math.max(1, n)}" ${avail ? "" : "disabled"}><output>${n}</output></div></div>
      <div class="qb-field"><span class="qb-field-label">Mode</span>
        <div class="qb-seg">
          <button class="qb-seg-btn${P.mode === "tutor" ? " is-on" : ""}" data-mode="tutor">Tutor</button>
          <button class="qb-seg-btn${P.mode === "exam" ? " is-on" : ""}" data-mode="exam">Timed exam</button>
        </div>
        <p class="qb-muted qb-small">${P.mode === "tutor" ? "Marked as you go, with the full explanation." : `Nothing marked until you submit. ${EXAM_SECONDS} s a question, like the progress test.`}</p></div>
      <button class="qb-btn qb-btn-big" data-act="start" ${n ? "" : "disabled"}>Start ${n || ""} question${n === 1 ? "" : "s"}</button>
      ${selIds.length ? `<button class="qb-btn qb-btn-ghost qb-small" data-act="clear">Clear selection</button>` : ""}
      <div class="qb-search">
        <label class="qb-field-label" for="qb-q">Search the bank</label>
        <input id="qb-q" type="search" placeholder="e.g. denosumab, HELLP, 21-hydroxylase" autocomplete="off">
        <div class="qb-search-out" aria-live="polite"></div>
      </div>
      <details class="qb-data"><summary>Progress &amp; backup</summary>
        <p class="qb-muted qb-small">Saved automatically in this browser. Export a file to move it to another device.</p>
        <div class="qb-data-row"><button class="qb-btn qb-btn-ghost qb-small" data-act="export">Export</button>
        <label class="qb-btn qb-btn-ghost qb-small">Import<input type="file" accept="application/json" data-act="import" hidden></label>
        <button class="qb-btn qb-btn-ghost qb-small" data-act="reset">Reset all</button></div>
      </details>
    </aside></div>`;

    if (S.history.length) {
      h += `<h2 class="qb-h2">Recent blocks</h2><ul class="qb-history">` + S.history.slice(-8).reverse().map((b) =>
        `<li><span>${new Date(b.date).toLocaleDateString(undefined, { month: "short", day: "numeric" })}</span><span>${esc(b.label)}</span><span class="${heat(pct(b.right, b.total), b.total).replace("qb-heat", "qb-ink")}">${b.right}/${b.total} · ${pct(b.right, b.total)}%</span></li>`).join("") + `</ul>`;
    }

    root.innerHTML = h;
    bindHome();
  }

  function bindHome() {
    root.querySelectorAll("[data-unit]").forEach((b) => b.addEventListener("click", () => { P.unit = b.dataset.unit; savePrefs(); renderHome(); }));
    root.querySelectorAll("input[data-lec]").forEach((c) => c.addEventListener("change", () => {
      const set = new Set(P.sel);
      c.checked ? set.add(c.dataset.lec) : set.delete(c.dataset.lec);
      P.sel = [...set]; savePrefs(); renderHome();
    }));
    root.querySelectorAll("input[data-week]").forEach((c) => c.addEventListener("change", () => {
      const w = +c.dataset.week;
      const ids = LECS.filter((l) => l.unit === P.unit && l.week === w && lecStats(l.id).total).map((l) => l.id);
      const set = new Set(P.sel);
      ids.forEach((id) => (c.checked ? set.add(id) : set.delete(id)));
      P.sel = [...set]; savePrefs(); renderHome();
    }));
    root.querySelectorAll("[data-filter]").forEach((b) => b.addEventListener("click", () => { P.filter = b.dataset.filter; savePrefs(); renderHome(); }));
    root.querySelectorAll("[data-mode]").forEach((b) => b.addEventListener("click", () => { P.mode = b.dataset.mode; savePrefs(); renderHome(); }));
    const range = root.querySelector("#qb-count");
    if (range) {
      range.addEventListener("input", () => {
        range.nextElementSibling.textContent = range.value;
        const btn = root.querySelector('[data-act="start"]');
        btn.textContent = `Start ${range.value} question${range.value === "1" ? "" : "s"}`;
      });
      range.addEventListener("change", () => { P.count = +range.value; savePrefs(); });
    }
    const search = root.querySelector("#qb-q");
    if (search) search.addEventListener("input", () => runSearch(search.value));

    root.querySelectorAll("[data-act]").forEach((el) => {
      if (el.tagName === "INPUT") {
        el.addEventListener("change", () => importFile(el.files[0]));
        return;
      }
      el.addEventListener("click", () => homeAction(el.dataset.act, el));
    });
  }

  function homeAction(act, el) {
    if (act === "resume") { location.hash = "block"; return; }
    if (act === "discard") { if (confirm("Discard the block in progress? Answers you already submitted stay saved.")) { S.block = null; save(); renderHome(); } return; }
    if (act === "clear") { P.sel = []; savePrefs(); renderHome(); return; }
    if (act === "start") {
      const range = root.querySelector("#qb-count");
      const n = range ? +range.value : P.count;
      P.count = n; savePrefs();
      const ids = shuffle(pool(P.sel, P.filter)).slice(0, n).map((q) => q.id);
      if (ids.length) makeBlock(ids, P.mode, blockLabel(P.sel));
      return;
    }
    if (act === "lec") {
      const id = el.dataset.lec;
      let list = pool([id], "unused");
      if (!list.length) list = pool([id], "all");
      makeBlock(shuffle(list).map((q) => q.id), "tutor", lecLabel(lecById.get(id)));
      return;
    }
    if (act === "week") {
      const w = +el.dataset.week;
      const ids = LECS.filter((l) => l.unit === P.unit && l.week === w).map((l) => l.id);
      let list = pool(ids, "unused");
      if (!list.length) list = pool(ids, "all");
      makeBlock(shuffle(list).slice(0, 40).map((q) => q.id), "tutor", "Week " + w);
      return;
    }
    if (act === "due") {
      const now = Date.now();
      const list = BANK.filter((q) => isDue(q.id, now));
      list.sort((a, b) => (stat(a.id).box - stat(b.id).box) || (stat(a.id).due - stat(b.id).due));
      makeBlock(list.slice(0, 50).map((q) => q.id), "tutor", "Due review");
      return;
    }
    if (act === "weak") {
      const ranked = LECS.map((l) => ({ l, s: lecStats(l.id) })).filter((x) => x.s.used >= 3)
        .sort((a, b) => pct(a.s.right, a.s.used) - pct(b.s.right, b.s.used)).slice(0, 6);
      if (!ranked.length) return;
      const ids = ranked.map((x) => x.l.id);
      let list = shuffle(pool(ids, "unused"));
      if (list.length < 40) list = list.concat(shuffle(pool(ids, "wrong")).filter((q) => !list.includes(q)));
      if (list.length < 40) list = list.concat(shuffle(pool(ids, "all")).filter((q) => !list.includes(q)));
      makeBlock(list.slice(0, 40).map((q) => q.id), "tutor", "Weak spots: " + ranked.map((x) => x.l.num).join(", "));
      return;
    }
    if (act === "mock") {
      const units = ["endocrinology", "female-reproductive"];
      const ids = [];
      units.forEach((u) => {
        const lecIds = LECS.filter((l) => l.unit === u).map((l) => l.id);
        const unused = shuffle(pool(lecIds, "unused"));
        const rest = shuffle(pool(lecIds, "all")).filter((q) => !unused.includes(q));
        unused.concat(rest).slice(0, 50).forEach((q) => ids.push(q.id));
      });
      makeBlock(shuffle(ids), "exam", "Mock progress test");
      return;
    }
    if (act === "export") {
      const blob = new Blob([JSON.stringify({ app: "pom2-qbank", v: 1, saved: new Date().toISOString(), data: S })], { type: "application/json" });
      const a = document.createElement("a");
      a.href = URL.createObjectURL(blob);
      a.download = "pom2-qbank-progress-" + new Date().toISOString().slice(0, 10) + ".json";
      document.body.appendChild(a); a.click(); a.remove();
      return;
    }
    if (act === "reset") {
      if (confirm("Erase every answer, flag and block history in this browser? Export first if you might want it back.")) {
        S.q = {}; S.history = []; S.block = null; save(); renderHome();
      }
    }
  }

  function importFile(file) {
    if (!file) return;
    const r = new FileReader();
    r.onload = () => {
      try {
        const j = JSON.parse(r.result);
        if (!j || j.app !== "pom2-qbank" || !j.data || !j.data.q) throw new Error("not a qbank file");
        S.q = j.data.q; S.history = j.data.history || []; S.block = j.data.block || null;
        save(); renderHome();
      } catch (e) {
        alert("That file isn't a POM2 qbank export.");
      }
    };
    r.readAsText(file);
  }

  function blockLabel(ids) {
    if (ids.length === 1) return lecLabel(lecById.get(ids[0]));
    const weeks = [...new Set(ids.map((id) => (lecById.get(id) || {}).week))].sort((a, b) => a - b);
    return (weeks.length === 1 ? "Week " + weeks[0] : "Weeks " + weeks.join(", ")) + ` · ${ids.length} lectures`;
  }

  function runSearch(text) {
    const out = root.querySelector(".qb-search-out");
    const t = text.trim().toLowerCase();
    if (t.length < 3) { out.innerHTML = ""; return; }
    const hits = BANK.filter((q) => strip(q.q + " " + q.options.join(" ") + " " + (q.why || "")).toLowerCase().includes(t));
    if (!hits.length) { out.innerHTML = `<p class="qb-muted qb-small">No questions mention “${esc(text)}”.</p>`; return; }
    out.innerHTML = `<p class="qb-small"><b>${hits.length}</b> question${hits.length === 1 ? "" : "s"} · <button class="qb-link" data-search-start>Practise ${Math.min(hits.length, 60)}</button></p>
      <ul class="qb-search-list">${hits.slice(0, 6).map((q) => `<li><span class="qb-lec-num">${esc((lecById.get(q.lec) || {}).num || "")}</span> ${esc(strip(q.q).slice(0, 110))}…</li>`).join("")}</ul>`;
    out.querySelector("[data-search-start]").addEventListener("click", () => makeBlock(shuffle(hits).slice(0, 60).map((q) => q.id), "tutor", `Search: “${text.trim()}”`));
  }

  /* ------------------------------------------------------------ BLOCK */
  let timer = null;
  let tick = 0;
  function stopTimer() {
    if (timer) clearInterval(timer);
    timer = null;
  }
  function startTimer() {
    stopTimer();
    tick = Date.now();
    timer = setInterval(() => {
      const b = S.block;
      if (!b) return stopTimer();
      const now = Date.now();
      const dt = (now - tick) / 1000;
      tick = now;
      b.elapsed += dt;
      const it = b.items[b.cur];
      if (it && !it.done) it.t += dt;
      const el = root.querySelector(".qb-timer");
      if (el) {
        if (b.mode === "exam") {
          const left = b.limit - b.elapsed;
          el.textContent = fmtTime(left) + " left";
          el.classList.toggle("is-low", left < 300);
          if (left <= 0) { submitBlock(true); return; }
        } else {
          el.textContent = fmtTime(b.elapsed);
        }
      }
      if (Math.round(b.elapsed) % 10 === 0) save();
    }, 1000);
  }

  function renderBlock() {
    const b = S.block;
    if (!b) { location.hash = "home"; return; }
    if (b.submitted && b.mode === "exam" && !b.review) { location.hash = "results"; return; }
    const it = b.items[b.cur];
    const q = byId.get(it.id);
    if (!q) { b.items.splice(b.cur, 1); b.cur = Math.min(b.cur, b.items.length - 1); save(); return renderBlock(); }
    const l = lecById.get(q.lec);
    const reveal = it.done && (b.mode === "tutor" || b.submitted);
    const multi = isMulti(q);
    const letters = "ABCDEFGH";

    let h = `<div class="qb-bar">
      <button class="qb-btn qb-btn-ghost qb-small" data-b="home">← Bank</button>
      <span class="qb-bar-title">${esc(b.label)}</span>
      <span class="qb-timer">${b.mode === "exam" ? fmtTime(b.limit - b.elapsed) + " left" : fmtTime(b.elapsed)}</span>
      <button class="qb-btn qb-btn-ghost qb-small" data-b="grid" aria-expanded="false">Q ${b.cur + 1}/${b.items.length} ▾</button>
      ${b.submitted ? `<button class="qb-btn qb-small" data-b="results">Results</button>` : `<button class="qb-btn qb-small" data-b="end">${b.mode === "exam" ? "Submit block" : "End block"}</button>`}
    </div>
    <div class="qb-grid" hidden>${b.items.map((x, i) => {
      let cls = "";
      if (x.done && (b.mode === "tutor" || b.submitted)) cls = judge(x) ? "is-right" : "is-wrong";
      else if (x.pick.length) cls = "is-answered";
      return `<button class="qb-grid-cell ${cls}${i === b.cur ? " is-cur" : ""}${x.flag ? " is-flag" : ""}" data-go="${i}">${i + 1}</button>`;
    }).join("")}</div>
    <div class="qb-track"><i style="width:${pct(b.items.filter((x) => x.done || (b.mode === "exam" && x.pick.length)).length, b.items.length)}%"></i></div>`;

    h += `<article class="qb-card">
      <div class="qb-card-top">
        <span class="qb-tag">${esc(l ? "Week " + l.week + " · " + lecLabel(l) : q.lec)}</span>
        <button class="qb-flag${it.flag ? " is-on" : ""}" data-b="flag" title="Flag (F)">⚑ ${it.flag ? "Flagged" : "Flag"}</button>
      </div>
      <div class="qb-stem">${q.q}</div>
      ${q.img ? `<figure class="qb-fig"><img src="${esc(rel(q.img))}" alt="${esc(q.alt || "")}"></figure>` : ""}
      ${multi ? `<p class="qb-multi">Select all that apply.</p>` : ""}
      <div class="qb-opts" role="${multi ? "group" : "radiogroup"}">`;
    it.order.forEach((k, i) => {
      const picked = it.pick.includes(k);
      let cls = picked ? " is-picked" : "";
      if (it.struck.includes(k)) cls += " is-struck";
      if (reveal) {
        const right = answerSet(q).includes(k);
        if (right) cls += " is-right";
        else if (picked) cls += " is-wrong";
      }
      h += `<button class="qb-opt${cls}" data-k="${k}" ${reveal ? "disabled" : ""} role="${multi ? "checkbox" : "radio"}" aria-checked="${picked}">
        <span class="qb-opt-key">${letters[i]}</span><span class="qb-opt-text">${q.options[k]}</span></button>`;
    });
    h += `</div>`;

    if (!reveal) {
      h += `<div class="qb-actions">
        <label class="qb-guess"><input type="checkbox" data-b="guess" ${it.guess ? "checked" : ""}> I'm guessing <kbd>G</kbd></label>
        <span class="qb-spacer"></span>
        ${b.cur > 0 ? `<button class="qb-btn qb-btn-ghost" data-b="prev">← Back</button>` : ""}
        ${b.mode === "tutor"
          ? `<button class="qb-btn" data-b="check" ${it.pick.length ? "" : "disabled"}>Check <kbd>↵</kbd></button>`
          : `<button class="qb-btn" data-b="next">${b.cur < b.items.length - 1 ? "Next →" : "Review &amp; submit"}</button>`}
      </div>
      <p class="qb-hint">Keys: <kbd>A</kbd>–<kbd>E</kbd> pick · right-click an option to cross it out · <kbd>F</kbd> flag · <kbd>←</kbd><kbd>→</kbd> move</p>`;
    } else {
      const ok = judge(it);
      const src = q.src ? (q.src.u ? `<a href="${esc(q.src.u)}" target="_blank" rel="noopener">${esc(q.src.t)}</a>` : esc(q.src.t)) : "POM2 original";
      const lecHref = l && l.href ? rel(l.href) + (q.ref || "") : null;
      h += `<div class="qb-why ${ok ? "is-right" : "is-wrong"}">
        <div class="qb-verdict">${ok ? (it.guess ? "Right, but you guessed: it'll come back tomorrow." : "Right.") : it.pick.length ? "Not quite." : "Not answered."}
          <span class="qb-time">${fmtTime(it.t)}</span></div>
        <div class="qb-why-body">${q.why || ""}</div>
        <div class="qb-why-foot">
          ${lecHref ? `<a class="qb-lec-link" href="${esc(lecHref)}" target="_blank" rel="noopener">Review ${esc(lecLabel(l))} →</a>` : `<span class="qb-muted">${esc(lecLabel(l))}</span>`}
          <span class="qb-src">Source: ${src}</span>
        </div>
      </div>
      <div class="qb-actions"><span class="qb-spacer"></span>
        ${b.cur > 0 ? `<button class="qb-btn qb-btn-ghost" data-b="prev">← Back</button>` : ""}
        ${b.cur < b.items.length - 1 ? `<button class="qb-btn" data-b="next">Next <kbd>↵</kbd></button>` : `<button class="qb-btn" data-b="${b.submitted ? "results" : "end"}">See results</button>`}
      </div>`;
    }
    h += `</article>`;
    root.innerHTML = h;
    bindBlock();
    if (!b.submitted) startTimer(); else stopTimer();
  }

  function bindBlock() {
    const b = S.block;
    const it = b.items[b.cur];
    root.querySelectorAll(".qb-opt").forEach((o) => {
      o.addEventListener("click", () => pick(+o.dataset.k));
      o.addEventListener("contextmenu", (e) => { e.preventDefault(); strike(+o.dataset.k); });
    });
    root.querySelectorAll("[data-go]").forEach((g) => g.addEventListener("click", () => go(+g.dataset.go)));
    root.querySelectorAll("[data-b]").forEach((el) => {
      const act = el.dataset.b;
      if (act === "guess") { el.addEventListener("change", () => { it.guess = el.checked; save(); }); return; }
      el.addEventListener("click", () => blockAction(act, el));
    });
  }

  function blockAction(act, el) {
    const b = S.block;
    const it = b.items[b.cur];
    if (act === "home") { save(); location.hash = "home"; return; }
    if (act === "grid") {
      const g = root.querySelector(".qb-grid");
      g.hidden = !g.hidden;
      el.setAttribute("aria-expanded", String(!g.hidden));
      return;
    }
    if (act === "flag") {
      it.flag = !it.flag;
      const s = S.q[it.id];
      if (s) s.flag = it.flag;
      else if (it.flag) S.q[it.id] = { n: 0, r: 0, box: 0, flag: true };
      save(); renderBlock(); return;
    }
    if (act === "check") return check();
    if (act === "next") return go(b.cur + 1);
    if (act === "prev") return go(b.cur - 1);
    if (act === "end") return submitBlock(false);
    if (act === "results") { location.hash = "results"; }
  }

  function pick(k) {
    const b = S.block;
    const it = b.items[b.cur];
    if (it.done && (b.mode === "tutor" || b.submitted)) return;
    const q = byId.get(it.id);
    if (isMulti(q)) {
      it.pick = it.pick.includes(k) ? it.pick.filter((x) => x !== k) : it.pick.concat(k);
    } else {
      it.pick = [k];
    }
    it.struck = it.struck.filter((x) => x !== k);
    save();
    renderBlock();
  }

  function strike(k) {
    const it = S.block.items[S.block.cur];
    if (it.done) return;
    it.struck = it.struck.includes(k) ? it.struck.filter((x) => x !== k) : it.struck.concat(k);
    if (it.struck.includes(k)) it.pick = it.pick.filter((x) => x !== k);
    save();
    renderBlock();
  }

  function check() {
    const b = S.block;
    const it = b.items[b.cur];
    if (!it.pick.length || it.done) return;
    it.done = true;
    record(it, judge(it));
    save();
    renderBlock();
    const why = root.querySelector(".qb-why");
    if (why && why.getBoundingClientRect().top > window.innerHeight * 0.7) why.scrollIntoView({ behavior: "smooth", block: "nearest" });
  }

  function go(i) {
    const b = S.block;
    if (i < 0) return;
    if (i >= b.items.length) {
      if (b.mode === "exam" && !b.submitted) return submitBlock(false);
      if (b.submitted) { location.hash = "results"; return; }
      if (b.items.every((x) => x.done)) return submitBlock(false);
      return;
    }
    b.cur = i;
    save();
    renderBlock();
    window.scrollTo({ top: root.offsetTop - 12, behavior: "auto" });
  }

  function submitBlock(timeUp) {
    const b = S.block;
    if (b.submitted) { location.hash = "results"; return; }
    const unanswered = b.items.filter((x) => !(x.done || (b.mode === "exam" && x.pick.length))).length;
    if (!timeUp && unanswered) {
      const msg = b.mode === "exam"
        ? `${unanswered} question${unanswered === 1 ? " is" : "s are"} unanswered and will be marked wrong. Submit anyway?`
        : `End the block? The ${unanswered} question${unanswered === 1 ? "" : "s"} you haven't checked won't count.`;
      if (!confirm(msg)) return;
    }
    if (b.mode === "exam") {
      b.items.forEach((x) => {
        x.done = true;
        record(x, judge(x));
      });
    } else {
      b.items = b.items.filter((x) => x.done);
      b.cur = 0;
    }
    b.submitted = true;
    stopTimer();
    const right = b.items.filter((x) => judge(x)).length;
    if (b.items.length) S.history.push({ date: Date.now(), label: b.label, total: b.items.length, right, mode: b.mode, secs: Math.round(b.elapsed) });
    if (S.history.length > 60) S.history = S.history.slice(-60);
    save();
    location.hash = b.items.length ? "results" : "home";
  }

  /* ------------------------------------------------------------ RESULTS */
  function renderResults() {
    stopTimer();
    const b = S.block;
    if (!b || !b.submitted) { location.hash = b ? "block" : "home"; return; }
    const total = b.items.length;
    const right = b.items.filter((x) => judge(x)).length;
    const guessed = b.items.filter((x) => x.guess && judge(x)).length;
    const p = pct(right, total);
    const per = new Map();
    b.items.forEach((x) => {
      const q = byId.get(x.id);
      if (!per.has(q.lec)) per.set(q.lec, { t: 0, r: 0 });
      const s = per.get(q.lec);
      s.t++;
      if (judge(x)) s.r++;
    });
    const rows = [...per.entries()].map(([id, s]) => ({ l: lecById.get(id), s })).sort((a, c) => pct(a.s.r, a.s.t) - pct(c.s.r, c.s.t));

    let h = `<div class="qb-bar"><button class="qb-btn qb-btn-ghost qb-small" data-r="home">← Bank</button><span class="qb-bar-title">${esc(b.label)}</span></div>
    <div class="qb-score">
      <div class="qb-ring ${heat(p, total).replace("qb-heat", "qb-ring")}" style="--p:${p}"><span>${p}%</span></div>
      <div>
        <h2>${right} of ${total} right</h2>
        <p>${p >= 70 ? "Above the 70% progress test pass mark." : "Below the 70% progress test pass mark: the lectures at the top of the list are where to look."}</p>
        <p class="qb-muted qb-small">${fmtTime(b.elapsed)} total · ${fmtTime(b.elapsed / Math.max(1, total))} a question${guessed ? ` · ${guessed} right by guessing (they'll come back tomorrow)` : ""}</p>
        <div class="qb-res-actions">
          <button class="qb-btn" data-r="review">Review answers</button>
          ${right < total ? `<button class="qb-btn qb-btn-ghost" data-r="misses">Redo my ${total - right} miss${total - right === 1 ? "" : "es"}</button>` : ""}
        </div>
      </div>
    </div>
    <h2 class="qb-h2">By lecture</h2>
    <table class="qb-table"><tbody>${rows.map(({ l, s }) => `<tr><td>${esc(l ? l.num : "")}</td><td>${l && l.href ? `<a href="${esc(rel(l.href))}" target="_blank" rel="noopener">${esc(l.title)}</a>` : esc(l ? l.title : "")}</td>
      <td class="qb-num">${s.r}/${s.t}</td><td class="qb-bar-cell"><span class="qb-lec-bar"><i class="${heat(pct(s.r, s.t), s.t)}" style="width:${pct(s.r, s.t)}%"></i></span></td></tr>`).join("")}</tbody></table>
    <h2 class="qb-h2">Every question</h2>
    <ol class="qb-res-list">${b.items.map((x, i) => {
      const q = byId.get(x.id);
      const ok = judge(x);
      return `<li class="${ok ? "is-right" : "is-wrong"}"><button class="qb-link" data-open="${i}"><span class="qb-res-mark">${ok ? "✓" : "✗"}</span> ${esc(strip(q.q).slice(0, 140))}${strip(q.q).length > 140 ? "…" : ""}</button></li>`;
    }).join("")}</ol>`;
    root.innerHTML = h;
    root.querySelectorAll("[data-r]").forEach((el) => el.addEventListener("click", () => {
      const a = el.dataset.r;
      if (a === "home") { location.hash = "home"; return; }
      if (a === "review") { b.review = true; b.cur = 0; save(); location.hash = "block"; renderBlock(); return; }
      if (a === "misses") {
        const ids = b.items.filter((x) => !judge(x)).map((x) => x.id);
        makeBlock(shuffle(ids), "tutor", "Misses · " + b.label);
      }
    }));
    root.querySelectorAll("[data-open]").forEach((el) => el.addEventListener("click", () => {
      b.review = true; b.cur = +el.dataset.open; save(); location.hash = "block"; renderBlock();
    }));
  }

  /* ------------------------------------------------------------ keys */
  document.addEventListener("keydown", (e) => {
    if (location.hash.replace("#", "") !== "block" || !S.block) return;
    if (e.target.matches("input[type=search], input[type=text], textarea")) return;
    if (e.metaKey || e.ctrlKey || e.altKey) return;
    const b = S.block;
    const it = b.items[b.cur];
    const key = e.key.toLowerCase();
    const letters = "abcdefgh";
    const revealed = it.done && (b.mode === "tutor" || b.submitted);
    if (!revealed && (letters.includes(key) || /^[1-8]$/.test(key)) && key.length === 1) {
      const idx = letters.includes(key) ? letters.indexOf(key) : +key - 1;
      if (idx < it.order.length) { e.preventDefault(); pick(it.order[idx]); }
      return;
    }
    if (key === "enter") {
      e.preventDefault();
      if (b.mode === "tutor" && !it.done && !b.submitted) return check();
      return go(b.cur + 1);
    }
    if (key === "arrowright") return go(b.cur + 1);
    if (key === "arrowleft") return go(b.cur - 1);
    if (key === "f") return blockAction("flag");
    if (key === "g" && !revealed) { it.guess = !it.guess; save(); renderBlock(); }
  });

  /* ------------------------------------------------------------ router */
  function route() {
    const h = location.hash.replace("#", "");
    if (h === "block") return renderBlock();
    if (h === "results") return renderResults();
    if (h.startsWith("lec=")) return renderHome(decodeURIComponent(h.slice(4)));
    return renderHome();
  }
  window.addEventListener("hashchange", route);
  window.addEventListener("beforeunload", save);
  route();
})();

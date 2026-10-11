/*
 * Review modules.
 *
 * A module is one page split into steps: a warm-up quiz, a run of topic
 * panels, and a final quiz. Only one step shows at a time; the step bar
 * and the Back/Next pager move between them, and the URL hash names the
 * step so the browser's back button works.
 *
 * Quizzes ask one question at a time and mark it on the spot, with the
 * reason and a link to the lecture section it came from. The warm-up's
 * per-topic score is written onto the step bar and into each topic
 * panel so you can see where to spend the time.
 *
 * Data: window.REVIEW = { id, topics: [{id, label, step}], quizzes:
 * { warmup: [...], final: [...] } }. A question is { id, topic, q, img?,
 * alt?, options: [...], a: index of the right option, why, link: {href,
 * label} }. Options are shuffled per attempt.
 *
 * Progress is kept in localStorage when the browser allows it; the page
 * works the same without it.
 *
 * A page can also hold a lone quiz with no step panels (the Emerg cheat
 * sheets end with one): it then skips the step navigation, answers keys
 * only while the quiz is on screen, and links that start with "#" stay
 * on the page. window.REVIEW.verdicts = [high, mid, low] can replace the
 * exam-pass wording on the results card.
 *
 * window.REVIEW.exam = { minutesPerQuestion } adds an exam mode to the
 * page's quizzes: nothing is marked until the test is submitted, answers
 * can be changed (Back / Next) until then, and a timer shows time used
 * against the pace budget. Practice mode (marked as you go) stays on offer,
 * and "redo my misses" always runs as practice.
 */
(function () {
  const R = window.REVIEW;
  const root = document.getElementById("rv-module");
  if (!R || !root) return;

  const KEY = "pom2-" + R.id;
  let state = {};
  try {
    state = JSON.parse(localStorage.getItem(KEY)) || {};
  } catch (e) {
    state = {};
  }
  function save() {
    try {
      localStorage.setItem(KEY, JSON.stringify(state));
    } catch (e) {
      /* private window or blocked storage: keep going without it */
    }
  }

  const panels = Array.from(root.querySelectorAll(".rv-panel"));
  const steps = panels.map((p) => p.dataset.step);
  const stepBtns = Array.from(root.querySelectorAll(".rv-step"));
  const topicById = {};
  R.topics.forEach((t) => (topicById[t.id] = t));
  const LETTERS = ["A", "B", "C", "D", "E"];
  const EXAM = R.exam || null;

  function isExam(s) {
    return !!(s && s.mode === "exam");
  }
  function clock(ms) {
    const t = Math.max(0, Math.round(ms / 1000));
    const h = Math.floor(t / 3600);
    const m = Math.floor((t % 3600) / 60);
    const sec = t % 60;
    const mm = (h ? String(m).padStart(2, "0") : String(m)) + ":" + String(sec).padStart(2, "0");
    return h ? h + ":" + mm : mm;
  }

  function shuffle(arr) {
    const a = arr.slice();
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }
  // "Select all that apply": a question whose `a` is an array of option
  // indexes. It only counts as right when exactly that set is picked.
  function isMulti(q) {
    return Array.isArray(q.a);
  }
  function isRight(q, ans) {
    if (ans === undefined) return false;
    if (!isMulti(q)) return ans === q.a;
    return Array.isArray(ans) && ans.length === q.a.length && q.a.every((k) => ans.includes(k));
  }
  function answerText(q) {
    return isMulti(q) ? q.a.map((k) => q.options[k]).join("; ") : q.options[q.a];
  }
  function yourText(q, ans) {
    if (ans === undefined) return "—";
    if (Array.isArray(ans)) return ans.length ? ans.map((k) => q.options[k]).join("; ") : "nothing selected";
    return q.options[ans];
  }


  function linkHtml(link) {
    if (!link) return "";
    const ext = link.href.charAt(0) === "#" ? "" : ' target="_blank" rel="noopener"';
    return `<a class="rv-link" href="${link.href}"${ext}>📖 ${link.label} →</a>`;
  }

  function tier(pct) {
    if (pct >= 80) return "is-good";
    if (pct >= 60) return "is-ok";
    return "is-weak";
  }

  /* ---------------- step navigation ---------------- */

  let current = null;

  function go(step, opts) {
    opts = opts || {};
    if (!steps.includes(step)) step = steps[0];
    current = step;
    panels.forEach((p) => (p.hidden = p.dataset.step !== step));
    stepBtns.forEach((b) => {
      const on = b.dataset.step === step;
      b.classList.toggle("is-current", on);
      b.setAttribute("aria-current", on ? "step" : "false");
      if (on && b.parentElement) {
        // centre the current step in the (horizontally scrolling) bar
        const bar = b.parentElement;
        bar.scrollLeft = b.offsetLeft - bar.clientWidth / 2 + b.clientWidth / 2;
      }
    });
    state.seen = state.seen || {};
    state.seen[step] = true;
    state.step = step;
    save();
    paintSteps();
    paintPager();
    if (!opts.silent && location.hash !== "#" + step) {
      history.pushState(null, "", "#" + step);
    }
    if (!opts.noScroll) {
      const top = root.getBoundingClientRect().top + window.scrollY - 8;
      window.scrollTo({ top: top, behavior: "smooth" });
    }
  }

  stepBtns.forEach((b) => b.addEventListener("click", () => go(b.dataset.step)));
  window.addEventListener("hashchange", () => {
    if (!steps.length) return;
    const s = location.hash.slice(1);
    if (steps.includes(s) && s !== current) go(s, { silent: true });
  });

  const pager = root.querySelector(".rv-pager");
  function paintPager() {
    if (!pager) return;
    const i = steps.indexOf(current);
    const label = (s) => {
      const b = stepBtns.find((x) => x.dataset.step === s);
      return b ? b.querySelector(".rv-step-label").textContent : s;
    };
    pager.innerHTML = "";
    if (i > 0) {
      const back = document.createElement("button");
      back.type = "button";
      back.className = "rv-btn rv-btn-ghost";
      back.textContent = "← " + label(steps[i - 1]);
      back.addEventListener("click", () => go(steps[i - 1]));
      pager.appendChild(back);
    } else {
      pager.appendChild(document.createElement("span"));
    }
    if (i < steps.length - 1) {
      const next = document.createElement("button");
      next.type = "button";
      next.className = "rv-btn";
      next.textContent = label(steps[i + 1]) + " →";
      next.addEventListener("click", () => go(steps[i + 1]));
      pager.appendChild(next);
    }
  }

  /* Step bar badges: a tick once seen, the warm-up score on topic steps,
     the score itself on the two quiz steps. */
  function paintSteps() {
    const warm = topicScores("warmup");
    stepBtns.forEach((b) => {
      const s = b.dataset.step;
      const badge = b.querySelector(".rv-step-badge");
      b.classList.toggle("is-seen", !!(state.seen && state.seen[s]));
      badge.className = "rv-step-badge";
      badge.textContent = "";
      const quizName = b.dataset.quiz;
      if (quizName) {
        const res = quizResult(quizName);
        if (res) {
          badge.textContent = res.right + "/" + res.total;
          badge.classList.add(tier(res.pct));
        }
        return;
      }
      const topic = R.topics.find((t) => t.step === s);
      if (topic && warm && warm[topic.id]) {
        const w = warm[topic.id];
        badge.textContent = w.right + "/" + w.total;
        badge.classList.add(tier(w.pct));
      }
    });

    // "Focus here" banners inside each topic panel.
    root.querySelectorAll(".rv-focus").forEach((el) => {
      const w = warm && warm[el.dataset.topic];
      if (!w) {
        el.hidden = true;
        return;
      }
      el.hidden = false;
      el.className = "rv-focus " + tier(w.pct);
      const msg =
        w.pct >= 80
          ? "You know this — skim it and move on."
          : w.pct >= 60
            ? "Patchy — read the tables and the traps."
            : "Weak spot — go through this one properly.";
      el.innerHTML = `<strong>Warm-up: ${w.right}/${w.total}</strong> ${msg}`;
    });
  }

  /* ---------------- scores ---------------- */

  function quizResult(name) {
    const s = state[name];
    if (!s || !s.done) return null;
    const bank = R.quizzes[name];
    let right = 0;
    bank.forEach((q) => {
      if (isRight(q, s.ans[q.id])) right++;
    });
    return { right: right, total: bank.length, pct: Math.round((right / bank.length) * 100) };
  }

  function topicScores(name) {
    const s = state[name];
    if (!s || !s.done) return null;
    const out = {};
    R.quizzes[name].forEach((q) => {
      const t = (out[q.topic] = out[q.topic] || { right: 0, total: 0 });
      t.total++;
      if (isRight(q, s.ans[q.id])) t.right++;
    });
    Object.values(out).forEach((t) => (t.pct = Math.round((t.right / t.total) * 100)));
    return out;
  }

  /* ---------------- quiz engine ---------------- */

  function onScreen(el) {
    const r = el.getBoundingClientRect();
    return r.bottom > 80 && r.top < window.innerHeight - 80;
  }

  function Quiz(el, name) {
    const bank = R.quizzes[name];
    const byId = {};
    bank.forEach((q) => (byId[q.id] = q));
    let retry = null; // a "redo my misses" pass, never saved

    function session() {
      return retry || state[name];
    }

    function budgetMs(n) {
      return EXAM ? n * EXAM.minutesPerQuestion * 60000 : 0;
    }

    // Exam timer: counts time on the question screen, saved as it goes.
    let tick = null;
    function stopTimer() {
      if (tick) clearInterval(tick);
      tick = null;
    }
    function startTimer(s) {
      stopTimer();
      let last = Date.now();
      let n = 0;
      tick = setInterval(() => {
        const now = Date.now();
        s.elapsed = (s.elapsed || 0) + (now - last);
        last = now;
        const t = el.querySelector(".rv-q-timer");
        if (t) {
          t.textContent = "⏱ " + clock(s.elapsed) + " / " + clock(budgetMs(s.order.length));
          t.classList.toggle("is-over", s.elapsed > budgetMs(s.order.length));
        }
        if (++n % 10 === 0) save();
      }, 1000);
    }

    function begin(ids, isRetry, mode) {
      const s = {
        order: shuffle(ids),
        perm: {},
        ans: {},
        i: 0,
        done: false,
        mode: isRetry ? "practice" : mode || "practice",
        elapsed: 0,
      };
      s.order.forEach((id) => (s.perm[id] = shuffle(byId[id].options.map((_, k) => k))));
      if (isRetry) {
        retry = s;
      } else {
        retry = null;
        state[name] = s;
        save();
      }
      renderQuestion();
    }

    function renderIntro() {
      const s = state[name];
      const counts = {};
      bank.forEach((q) => (counts[q.topic] = (counts[q.topic] || 0) + 1));
      const chips = R.topics
        .filter((t) => counts[t.id])
        .map((t) => `<span class="rv-chip">${t.label} · ${counts[t.id]}</span>`)
        .join("");
      stopTimer();
      const inProgress = s && !s.done && (s.i > 0 || Object.keys(s.ans).length > 0);
      const startBtns = EXAM
        ? `<button type="button" class="rv-btn ${inProgress ? "rv-btn-ghost" : ""}" data-act="start" data-mode="exam">${inProgress ? "Start the test over" : "Start the test · " + bank.length + " questions"}</button>
           <button type="button" class="rv-btn rv-btn-ghost" data-act="start" data-mode="practice">Practice mode (marked as you go)</button>`
        : `<button type="button" class="rv-btn ${inProgress ? "rv-btn-ghost" : ""}" data-act="start">${inProgress ? "Start over" : "Start · " + bank.length + " questions"}</button>`;
      const hint = EXAM
        ? `Exam conditions: nothing is marked until you submit, and you can go back and change answers until then. Pace: ${EXAM.minutesPerQuestion} min a question, ${clock(budgetMs(bank.length))} for all ${bank.length}. Keys: <kbd>1</kbd>–<kbd>5</kbd> to answer, <kbd>Enter</kbd> next, <kbd>←</kbd> back.`
        : `Click an answer or press <kbd>1</kbd>–<kbd>4</kbd>. <kbd>Enter</kbd> goes to the next question.`;
      el.innerHTML = `
        <div class="rv-q-card rv-intro">
          <p class="rv-intro-lead">${el.dataset.lead || ""}</p>
          <div class="rv-chips">${chips}</div>
          <div class="rv-intro-actions">
            ${inProgress ? `<button type="button" class="rv-btn" data-act="resume">Resume${isExam(s) ? " the test" : ""} · question ${s.i + 1} of ${bank.length}</button>` : ""}
            ${startBtns}
          </div>
          <p class="rv-hint">${hint}</p>
        </div>`;
      el.querySelectorAll('[data-act="start"]').forEach((b) =>
        b.addEventListener("click", () => begin(bank.map((q) => q.id), false, b.dataset.mode))
      );
      const r = el.querySelector('[data-act="resume"]');
      if (r) r.addEventListener("click", renderQuestion);
    }

    function renderExamQuestion(s) {
      const q = byId[s.order[s.i]];
      const perm = s.perm[q.id];
      const ans = s.ans[q.id];
      const picked = ans === undefined ? [] : Array.isArray(ans) ? ans : [ans];
      const answered = Object.keys(s.ans).length;
      const topic = topicById[q.topic];
      const last = s.i === s.order.length - 1;
      el.innerHTML = `
        <div class="rv-q-top">
          <span class="rv-q-count">Question ${s.i + 1} of ${s.order.length} · ${answered} answered</span>
          <span class="rv-q-timer${s.elapsed > budgetMs(s.order.length) ? " is-over" : ""}">⏱ ${clock(s.elapsed || 0)} / ${clock(budgetMs(s.order.length))}</span>
        </div>
        <div class="rv-q-track"><div class="rv-q-fill" style="width:${(s.i / s.order.length) * 100}%"></div></div>
        <div class="rv-q-card">
          <span class="rv-q-tag">${topic ? topic.label : ""}</span>
          <div class="rv-q-text">${q.q}</div>
          ${isMulti(q) ? `<p class="rv-multi-hint">Select all that apply.</p>` : ""}
          ${q.img ? `<figure class="rv-q-fig"><img src="${q.img}" alt="${q.alt || ""}"></figure>` : ""}
          <div class="rv-opts" role="group" aria-label="Answer options">
            ${perm
              .map(
                (k, n) => `<button type="button" class="rv-opt${picked.includes(k) ? " is-picked" : ""}" data-k="${k}" aria-pressed="${picked.includes(k)}">
                  <span class="rv-opt-key">${LETTERS[n]}</span><span class="rv-opt-text">${q.options[k]}</span></button>`
              )
              .join("")}
          </div>
          <div class="rv-q-nav">
            ${s.i > 0 ? `<button type="button" class="rv-btn rv-btn-ghost rv-back">← Back</button>` : ""}
            <button type="button" class="rv-btn rv-next" ${picked.length ? "" : "disabled"}>${last ? "Submit the test" : "Next question"} →</button>
          </div>
        </div>`;
      el.querySelectorAll(".rv-opt").forEach((b) => b.addEventListener("click", () => examPick(Number(b.dataset.k))));
      el.querySelector(".rv-next").addEventListener("click", next);
      const back = el.querySelector(".rv-back");
      if (back) back.addEventListener("click", goBack);
      if (!tick) startTimer(s);
    }

    function examPick(k) {
      const s = session();
      const q = byId[s.order[s.i]];
      if (isMulti(q)) {
        const cur = Array.isArray(s.ans[q.id]) ? s.ans[q.id].slice() : [];
        const at = cur.indexOf(k);
        if (at >= 0) cur.splice(at, 1);
        else cur.push(k);
        if (cur.length) s.ans[q.id] = cur.sort((x, y) => x - y);
        else delete s.ans[q.id];
      } else {
        s.ans[q.id] = k;
      }
      save();
      const picked = s.ans[q.id] === undefined ? [] : [].concat(s.ans[q.id]);
      el.querySelectorAll(".rv-opt").forEach((b) => {
        const on = picked.includes(Number(b.dataset.k));
        b.classList.toggle("is-picked", on);
        b.setAttribute("aria-pressed", on);
      });
      el.querySelector(".rv-next").disabled = !picked.length;
      el.querySelector(".rv-q-count").textContent = `Question ${s.i + 1} of ${s.order.length} · ${Object.keys(s.ans).length} answered`;
    }

    function goBack() {
      const s = session();
      if (s.i === 0) return;
      s.i--;
      save();
      renderQuestion();
      el.scrollIntoView({ block: "start", behavior: "smooth" });
    }

    function renderQuestion() {
      const s = session();
      if (s.i >= s.order.length) return finish();
      if (isExam(s)) return renderExamQuestion(s);
      const q = byId[s.order[s.i]];
      const perm = s.perm[q.id];
      const answered = s.ans[q.id] !== undefined;
      const rightSoFar = s.order.slice(0, s.i + (answered ? 1 : 0)).filter((id) => isRight(byId[id], s.ans[id])).length;
      const doneSoFar = s.i + (answered ? 1 : 0);
      const topic = topicById[q.topic];

      el.innerHTML = `
        <div class="rv-q-top">
          <span class="rv-q-count">Question ${s.i + 1} of ${s.order.length}${retry ? " · redoing misses" : ""}</span>
          <span class="rv-q-score">${rightSoFar}/${doneSoFar} right</span>
        </div>
        <div class="rv-q-track"><div class="rv-q-fill" style="width:${(s.i / s.order.length) * 100}%"></div></div>
        <div class="rv-q-card">
          <span class="rv-q-tag">${topic ? topic.label : ""}</span>
          <div class="rv-q-text">${q.q}</div>
          ${isMulti(q) ? `<p class="rv-multi-hint">Select all that apply, then check your answer.</p>` : ""}
          ${q.img ? `<figure class="rv-q-fig"><img src="${q.img}" alt="${q.alt || ""}"></figure>` : ""}
          <div class="rv-opts" role="group" aria-label="Answer options">
            ${perm
              .map(
                (k, n) => `<button type="button" class="rv-opt" data-k="${k}">
                  <span class="rv-opt-key">${LETTERS[n]}</span><span class="rv-opt-text">${q.options[k]}</span></button>`
              )
              .join("")}
          </div>
          <div class="rv-why" hidden></div>
          <div class="rv-q-nav">${isMulti(q) && !answered ? `<button type="button" class="rv-btn rv-check" disabled>Check answer</button>` : ""}<button type="button" class="rv-btn rv-next" disabled>${
            s.i === s.order.length - 1 ? "See results" : "Next question"
          } →</button></div>
        </div>`;

      el.querySelectorAll(".rv-opt").forEach((b) =>
        b.addEventListener("click", () => choose(Number(b.dataset.k)))
      );
      el.querySelector(".rv-next").addEventListener("click", next);
      const checkBtn = el.querySelector(".rv-check");
      if (checkBtn) checkBtn.addEventListener("click", check);
      if (answered) mark(q, s.ans[q.id]);
    }

    function choose(k) {
      const s = session();
      const q = byId[s.order[s.i]];
      if (s.ans[q.id] !== undefined) return;
      if (isMulti(q)) {
        const b = el.querySelector(`.rv-opt[data-k="${k}"]`);
        b.classList.toggle("is-picked");
        el.querySelector(".rv-check").disabled = !el.querySelector(".rv-opt.is-picked");
        return;
      }
      s.ans[q.id] = k;
      if (!retry) save();
      mark(q, k);
      // refresh the running score
      const rightSoFar = s.order.slice(0, s.i + 1).filter((id) => isRight(byId[id], s.ans[id])).length;
      el.querySelector(".rv-q-score").textContent = `${rightSoFar}/${s.i + 1} right`;
    }

    function check() {
      const s = session();
      const q = byId[s.order[s.i]];
      if (s.ans[q.id] !== undefined) return;
      s.ans[q.id] = Array.from(el.querySelectorAll(".rv-opt.is-picked")).map((b) => Number(b.dataset.k)).sort((x, y) => x - y);
      if (!retry) save();
      const c = el.querySelector(".rv-check");
      if (c) c.remove();
      mark(q, s.ans[q.id]);
      const rightSoFar = s.order.slice(0, s.i + 1).filter((id) => isRight(byId[id], s.ans[id])).length;
      el.querySelector(".rv-q-score").textContent = `${rightSoFar}/${s.i + 1} right`;
    }

    function mark(q, k) {
      const ok = isRight(q, k);
      const right = isMulti(q) ? q.a : [q.a];
      const picked = Array.isArray(k) ? k : [k];
      el.querySelectorAll(".rv-opt").forEach((b) => {
        const bk = Number(b.dataset.k);
        b.disabled = true;
        b.classList.remove("is-picked");
        if (right.includes(bk)) b.classList.add("is-right");
        else if (picked.includes(bk)) b.classList.add("is-wrong");
        if (isMulti(q) && picked.includes(bk)) b.classList.add("was-picked");
      });
      const why = el.querySelector(".rv-why");
      why.hidden = false;
      why.className = "rv-why " + (ok ? "is-right" : "is-wrong");
      why.innerHTML = `
        <strong class="rv-why-verdict">${ok ? "✓ Correct" : "✗ Not quite — " + (isMulti(q) ? "the answer is: " : "") + answerText(q)}</strong>
        <div class="rv-why-text">${q.why}</div>
        ${linkHtml(q.link)}`;
      const nextBtn = el.querySelector(".rv-next");
      nextBtn.disabled = false;
      nextBtn.focus({ preventScroll: true });
    }

    function next() {
      const s = session();
      s.i++;
      if (!retry) save();
      if (s.i >= s.order.length) finish();
      else {
        renderQuestion();
        el.scrollIntoView({ block: "start", behavior: "smooth" });
      }
    }

    function finish() {
      const s = session();
      stopTimer();
      if (retry) return renderRetryResults();
      s.done = true;
      save();
      paintSteps();
      renderResults();
      el.scrollIntoView({ block: "start", behavior: "smooth" });
    }

    function barRows(scores, compare) {
      return R.topics
        .filter((t) => scores[t.id])
        .map((t) => {
          const v = scores[t.id];
          const c = compare && compare[t.id];
          return `<div class="rv-bar-row">
            <div class="rv-bar-label">${t.label}</div>
            <div class="rv-bar-tracks">
              ${c ? `<div class="rv-bar-track"><div class="rv-bar-fill is-before" style="width:${c.pct}%"></div><span class="rv-bar-val">warm-up ${c.pct}%</span></div>` : ""}
              <div class="rv-bar-track"><div class="rv-bar-fill ${tier(v.pct)}" style="width:${v.pct}%"></div><span class="rv-bar-val">${c ? "final " : ""}${v.right}/${v.total} · ${v.pct}%</span></div>
            </div>
          </div>`;
        })
        .join("");
    }

    function missList(s) {
      const misses = s.order.filter((id) => !isRight(byId[id], s.ans[id]));
      if (!misses.length) return `<p class="rv-allright">No misses. Nothing to redo.</p>`;
      return misses
        .map((id) => {
          const q = byId[id];
          const yours = yourText(q, s.ans[id]);
          return `<details class="rv-miss">
            <summary><span class="rv-q-tag">${topicById[q.topic].label}</span> ${q.q.replace(/<\/p>/g, " ").replace(/<[^>]+>/g, "").trim()}</summary>
            <p><span class="rv-miss-wrong">You: ${yours}</span><br><span class="rv-miss-right">Answer: ${answerText(q)}</span></p>
            <div class="rv-why-text">${q.why}</div>
            ${linkHtml(q.link)}
          </details>`;
        })
        .join("");
    }

    function renderResults() {
      const s = state[name];
      const res = quizResult(name);
      const scores = topicScores(name);
      const compare = name === "final" ? topicScores("warmup") : null;
      const V = R.verdicts;
      const verdict = V
        ? res.pct >= 85 ? V[0] : res.pct >= 70 ? V[1] : V[2]
        : res.pct >= 85
          ? "Exam-ready on this material."
          : res.pct >= 70
            ? "Above the 70% pass mark — tighten your lowest topics below."
            : "Below the 70% pass mark — work through your lowest topics first.";
      const weakest = R.topics
        .filter((t) => scores[t.id])
        .sort((a, b) => scores[a.id].pct - scores[b.id].pct)[0];
      const misses = s.order.filter((id) => !isRight(byId[id], s.ans[id])).length;

      el.innerHTML = `
        <div class="rv-q-card rv-results">
          <div class="rv-score ${tier(res.pct)}">
            <div class="rv-score-num">${res.right}<span>/${res.total}</span></div>
            <div class="rv-score-pct">${res.pct}%</div>
          </div>
          <p class="rv-verdict">${verdict}</p>
          ${isExam(s) ? `<p class="rv-time">Time: ${clock(s.elapsed || 0)} against a pace of ${clock(budgetMs(s.order.length))}${s.elapsed > budgetMs(s.order.length) ? " (over pace)" : ""}.</p>` : ""}
          <h3 class="rv-sub">By topic${compare ? " — warm-up vs final" : ""}</h3>
          <div class="rv-bars">${barRows(scores, compare)}</div>
          <div class="rv-intro-actions">
            ${
              name === "warmup"
                ? `<button type="button" class="rv-btn" data-act="study">Start the review${weakest && scores[weakest.id].pct < 80 ? " — weakest first: " + weakest.label : ""} →</button>`
                : misses
                  ? `<button type="button" class="rv-btn" data-act="retry">Redo my ${misses} miss${misses === 1 ? "" : "es"}</button>`
                  : ""
            }
            <button type="button" class="rv-btn rv-btn-ghost" data-act="again">Retake all ${res.total}</button>
          </div>
          <h3 class="rv-sub">Your misses</h3>
          <div class="rv-misses">${missList(s)}</div>
        </div>`;

      const study = el.querySelector('[data-act="study"]');
      if (study)
        study.addEventListener("click", () => {
          const target = weakest && scores[weakest.id].pct < 80 ? weakest.step : steps[1];
          go(target);
        });
      const retryBtn = el.querySelector('[data-act="retry"]');
      if (retryBtn)
        retryBtn.addEventListener("click", () =>
          begin(s.order.filter((id) => !isRight(byId[id], s.ans[id])), true)
        );
      el.querySelector('[data-act="again"]').addEventListener("click", () => begin(bank.map((q) => q.id), false, s.mode));
    }

    function renderRetryResults() {
      const s = retry;
      const fixed = s.order.filter((id) => isRight(byId[id], s.ans[id])).length;
      el.innerHTML = `
        <div class="rv-q-card rv-results">
          <p class="rv-verdict"><strong>Fixed ${fixed} of ${s.order.length}.</strong> Your saved final score doesn't change.</p>
          <div class="rv-intro-actions">
            <button type="button" class="rv-btn" data-act="back">Back to my final results</button>
          </div>
          <h3 class="rv-sub">Still wrong</h3>
          <div class="rv-misses">${missList(s)}</div>
        </div>`;
      el.querySelector('[data-act="back"]').addEventListener("click", () => {
        retry = null;
        renderResults();
      });
    }

    // Keyboard: 1–5 or A–E to answer, Enter / → for next. Only while
    // this quiz's panel is the one showing.
    document.addEventListener("keydown", (e) => {
      const panel = el.closest(".rv-panel");
      if (panel ? panel.hidden : !onScreen(el)) return;
      if (e.target.closest && e.target.closest("input, textarea, select")) return;
      const s = session();
      if (!s || s.done || !el.querySelector(".rv-opts")) return;
      const opts = Array.from(el.querySelectorAll(".rv-opt"));
      let n = -1;
      if (/^[1-5]$/.test(e.key)) n = Number(e.key) - 1;
      else if (/^[a-eA-E]$/.test(e.key)) n = e.key.toUpperCase().charCodeAt(0) - 65;
      if (n >= 0 && n < opts.length && !opts[n].disabled) {
        e.preventDefault();
        opts[n].click();
      } else if (e.key === "ArrowLeft" && isExam(s) && el.querySelector(".rv-back")) {
        e.preventDefault();
        goBack();
      } else if (e.key === "Enter" && el.querySelector(".rv-check") && !el.querySelector(".rv-check").disabled) {
        e.preventDefault();
        check();
      } else if ((e.key === "Enter" || e.key === "ArrowRight") && !el.querySelector(".rv-next").disabled) {
        e.preventDefault();
        next();
      }
    });

    // First paint.
    const s = state[name];
    if (s && s.done) renderResults();
    else renderIntro();
  }

  root.querySelectorAll(".rv-quiz").forEach((el) => Quiz(el, el.dataset.quiz));

  /* ---------------- corrected-calcium calculator ---------------- */

  root.querySelectorAll(".rv-calc").forEach((box) => {
    const ca = box.querySelector('[name="ca"]');
    const alb = box.querySelector('[name="alb"]');
    const out = box.querySelector(".rv-calc-out");
    function run() {
      const c = parseFloat(ca.value);
      const a = parseFloat(alb.value);
      if (isNaN(c) || isNaN(a)) {
        out.innerHTML = "Enter both values.";
        return;
      }
      const corr = Math.round((c + 0.02 * (40 - a)) * 100) / 100;
      let flag = "Normal (2.15–2.55).";
      if (corr > 3) flag = "Hypercalcemia > 3.0: admit and treat.";
      else if (corr > 2.55) flag = "Hypercalcemia (> 2.55).";
      else if (corr < 1.9) flag = "Below 1.9: IV calcium gluconate if there are neuro or cardiac symptoms.";
      else if (corr < 2.15) flag = "Hypocalcemia (< 2.15).";
      out.innerHTML = `<strong>${corr.toFixed(2)} mmol/L</strong> = ${c} + 0.02 × (40 − ${a}) <span>${flag}</span>`;
    }
    ca.addEventListener("input", run);
    alb.addEventListener("input", run);
    run();
  });

  /* ---------------- start ---------------- */

  if (!steps.length) return; // a lone quiz: no steps to show

  const fromHash = location.hash.slice(1);
  go(steps.includes(fromHash) ? fromHash : state.step || steps[0], { silent: true, noScroll: true });
  // Re-centre the step bar once layout has settled.
  requestAnimationFrame(() => {
    const b = stepBtns.find((x) => x.dataset.step === current);
    if (b) b.parentElement.scrollLeft = Math.max(0, b.offsetLeft - (b.parentElement.clientWidth - b.clientWidth) / 2);
  });
})();

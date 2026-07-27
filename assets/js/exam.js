/*
 * Local exam engine. Draws a randomized 30-question set from a larger
 * per-objective bank (window.EXAM_DATA), covering every objective, mixing
 * multiple-choice and free-text questions. No API key, no network calls.
 *
 * Free-text answers are graded by a local concept-matching heuristic
 * (gradeFreeText), NOT true semantic understanding — it checks whether the
 * answer mentions enough of the expected key concepts, so exact wording
 * doesn't matter but the grading is approximate. To upgrade to real AI
 * question generation + grading, replace buildExamSet() and gradeFreeText()
 * with calls to your own backend (never call an LLM provider directly from
 * client-side JS with a secret key).
 */
document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("exam-root");
  if (!root || !window.EXAM_DATA) return;

  const data = window.EXAM_DATA;
  const TOTAL_QUESTIONS = 30;

  const introEl = document.getElementById("exam-intro");
  const activeEl = document.getElementById("exam-active");
  const resultsEl = document.getElementById("exam-results");

  const startBtn = document.getElementById("exam-start-btn");
  const retakeBtn = document.getElementById("exam-retake-btn");
  const nextBtn = document.getElementById("exam-next-btn");

  const progressFill = document.getElementById("exam-progress-fill");
  const progressLabel = document.getElementById("exam-progress-label");
  const questionTag = document.getElementById("exam-question-tag");
  const questionText = document.getElementById("exam-question-text");
  const answerArea = document.getElementById("exam-answer-area");

  let examSet = [];
  let currentIndex = 0;
  let currentAnswer = null;

  function shuffle(arr) {
    const copy = arr.slice();
    for (let i = copy.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [copy[i], copy[j]] = [copy[j], copy[i]];
    }
    return copy;
  }

  function shuffleOptions(q) {
    if (q.type !== "mcq") return q;
    const correctText = q.options[q.correctIndex];
    const newOptions = shuffle(q.options);
    return Object.assign({}, q, {
      options: newOptions,
      correctIndex: newOptions.indexOf(correctText)
    });
  }

  function buildExamSet() {
    const objectives = data.objectives;
    const n = objectives.length;
    const base = Math.floor(TOTAL_QUESTIONS / n);
    let remainder = TOTAL_QUESTIONS - base * n;
    const bonusObjectives = new Set(shuffle(objectives.map((o) => o.id)).slice(0, remainder));

    let selected = [];
    objectives.forEach((obj) => {
      const pool = shuffle(data.bank.filter((q) => q.objective === obj.id));
      const count = base + (bonusObjectives.has(obj.id) ? 1 : 0);
      selected = selected.concat(pool.slice(0, Math.min(count, pool.length)));
    });

    // If pools were short anywhere, top up randomly from the remaining bank.
    if (selected.length < TOTAL_QUESTIONS) {
      const usedIds = new Set(selected.map((q) => q.id));
      const leftover = shuffle(data.bank.filter((q) => !usedIds.has(q.id)));
      selected = selected.concat(leftover.slice(0, TOTAL_QUESTIONS - selected.length));
    }

    selected = shuffle(selected).slice(0, TOTAL_QUESTIONS).map(shuffleOptions);
    return selected;
  }

  function normalize(str) {
    return str.toLowerCase().replace(/[^a-z0-9\s]/g, " ").replace(/\s+/g, " ").trim();
  }

  function gradeFreeText(answer, q) {
    const normalized = normalize(answer);
    const matched = q.keyPoints.filter((group) =>
      group.some((term) => normalized.includes(term.toLowerCase()))
    ).length;
    return matched >= q.minKeyPoints;
  }

  function showScreen(screen) {
    introEl.hidden = screen !== "intro";
    activeEl.hidden = screen !== "active";
    resultsEl.hidden = screen !== "results";
  }

  function renderQuestion() {
    const q = examSet[currentIndex];
    currentAnswer = null;
    nextBtn.disabled = true;
    nextBtn.textContent = currentIndex === examSet.length - 1 ? "Finish Exam" : "Next";

    progressFill.style.width = `${(currentIndex / examSet.length) * 100}%`;
    progressLabel.textContent = `Question ${currentIndex + 1} of ${examSet.length}`;

    const obj = data.objectives.find((o) => o.id === q.objective);
    questionTag.textContent = obj ? obj.label : "";
    questionText.textContent = q.question;

    answerArea.innerHTML = "";

    if (q.type === "mcq") {
      const wrap = document.createElement("div");
      wrap.className = "exam-options";
      q.options.forEach((optionText) => {
        const btn = document.createElement("button");
        btn.type = "button";
        btn.className = "exam-option";
        btn.textContent = optionText;
        btn.addEventListener("click", () => {
          wrap.querySelectorAll(".exam-option").forEach((b) => b.classList.remove("is-selected"));
          btn.classList.add("is-selected");
          currentAnswer = optionText;
          nextBtn.disabled = false;
        });
        wrap.appendChild(btn);
      });
      answerArea.appendChild(wrap);
    } else {
      const textarea = document.createElement("textarea");
      textarea.className = "exam-text-input";
      textarea.placeholder = "Type your answer — exact wording doesn't matter.";
      textarea.addEventListener("input", () => {
        currentAnswer = textarea.value;
        nextBtn.disabled = textarea.value.trim().length === 0;
      });
      answerArea.appendChild(textarea);
      const hint = document.createElement("div");
      hint.className = "exam-answer-feedback";
      hint.textContent = "Short-answer questions are graded on key concepts, not exact phrasing.";
      answerArea.appendChild(hint);
    }
  }

  function recordAndAdvance() {
    const q = examSet[currentIndex];
    let isCorrect;
    if (q.type === "mcq") {
      isCorrect = currentAnswer === q.options[q.correctIndex];
    } else {
      isCorrect = gradeFreeText(currentAnswer || "", q);
    }
    q.userAnswer = currentAnswer;
    q.isCorrect = isCorrect;

    if (currentIndex < examSet.length - 1) {
      currentIndex++;
      renderQuestion();
    } else {
      progressFill.style.width = "100%";
      showResults();
    }
  }

  function showResults() {
    const totalCorrect = examSet.filter((q) => q.isCorrect).length;
    const pct = Math.round((totalCorrect / examSet.length) * 100);

    const scoreSummary = document.getElementById("exam-score-summary");
    scoreSummary.innerHTML = `
      <div class="exam-score-number">${totalCorrect}/${examSet.length}</div>
      <div class="exam-score-label">${pct}% correct</div>
    `;

    const perObjective = {};
    data.objectives.forEach((obj) => {
      perObjective[obj.id] = { correct: 0, total: 0, label: obj.label, text: obj.text };
    });
    examSet.forEach((q) => {
      const bucket = perObjective[q.objective];
      bucket.total++;
      if (q.isCorrect) bucket.correct++;
    });

    const chart = document.getElementById("objective-chart-body");
    chart.innerHTML = "";
    const focusList = [];
    const strongList = [];

    data.objectives.forEach((obj) => {
      const bucket = perObjective[obj.id];
      if (bucket.total === 0) return;
      const objPct = Math.round((bucket.correct / bucket.total) * 100);
      let tier = "is-developing";
      if (objPct >= 80) tier = "is-strong";
      else if (objPct < 50) tier = "is-needs-focus";

      if (objPct >= 80) strongList.push(obj.text);
      if (objPct < 60) focusList.push(obj.text);

      const row = document.createElement("div");
      row.className = "objective-bar-row";
      row.innerHTML = `
        <div class="objective-bar-label">${obj.label}: ${obj.text}</div>
        <div class="objective-bar-track"><div class="objective-bar-fill ${tier}" style="width:${objPct}%"></div></div>
        <div class="objective-bar-pct">${objPct}%</div>
      `;
      chart.appendChild(row);
    });

    const recs = document.getElementById("exam-recommendations-body");
    recs.innerHTML = "";
    if (focusList.length) {
      const h = document.createElement("h3");
      h.className = "recommend-focus";
      h.textContent = "Focus on next";
      const ul = document.createElement("ul");
      focusList.forEach((t) => {
        const li = document.createElement("li");
        li.textContent = t;
        ul.appendChild(li);
      });
      recs.appendChild(h);
      recs.appendChild(ul);
    }
    if (strongList.length) {
      const h = document.createElement("h3");
      h.className = "recommend-strong";
      h.textContent = "Doing well";
      const ul = document.createElement("ul");
      strongList.forEach((t) => {
        const li = document.createElement("li");
        li.textContent = t;
        ul.appendChild(li);
      });
      recs.appendChild(h);
      recs.appendChild(ul);
    }

    showScreen("results");
  }

  function startExam() {
    examSet = buildExamSet();
    currentIndex = 0;
    showScreen("active");
    renderQuestion();
  }

  startBtn.addEventListener("click", startExam);
  retakeBtn.addEventListener("click", startExam);
  nextBtn.addEventListener("click", recordAndAdvance);
});

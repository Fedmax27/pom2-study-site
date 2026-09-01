/*
 * Local exam engine. Draws a randomized 30-question set from a larger
 * per-objective bank (window.EXAM_DATA), covering every objective, mixing
 * multiple-choice and fill-in-the-blank questions. No API key, no network
 * calls.
 *
 * Fill-in-the-blank answers are graded by a local match against a short
 * list of accepted answers (gradeBlank) — the typed answer just needs to
 * contain one of them, so minor wording/pluralization doesn't matter but
 * the grading isn't true semantic understanding. The correct answer is
 * revealed immediately after each question, and a running score tracker
 * at the top of the exam updates as you go.
 */
document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("exam-root");
  if (!root || !window.EXAM_DATA) return;

  const data = window.EXAM_DATA;
  const TOTAL_QUESTIONS = data.totalQuestions || 30;

  const introEl = document.getElementById("exam-intro");
  const activeEl = document.getElementById("exam-active");
  const resultsEl = document.getElementById("exam-results");

  const startBtn = document.getElementById("exam-start-btn");
  const retakeBtn = document.getElementById("exam-retake-btn");
  const nextBtn = document.getElementById("exam-next-btn");

  const scoreTrackerValue = document.getElementById("exam-score-tracker-value");
  const progressFill = document.getElementById("exam-progress-fill");
  const progressLabel = document.getElementById("exam-progress-label");
  const questionTag = document.getElementById("exam-question-tag");
  const questionText = document.getElementById("exam-question-text");
  const answerArea = document.getElementById("exam-answer-area");

  let examSet = [];
  let currentIndex = 0;
  let currentAnswer = null;
  let answered = false;

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

  function gradeBlank(answer, q) {
    const normalized = normalize(answer);
    if (!normalized) return false;
    return q.answers.some((accepted) => normalized.includes(normalize(accepted)));
  }

  function showScreen(screen) {
    introEl.hidden = screen !== "intro";
    activeEl.hidden = screen !== "active";
    resultsEl.hidden = screen !== "results";
  }

  function updateScoreTracker() {
    const answeredSoFar = examSet.slice(0, currentIndex).filter((q) => q.isCorrect !== undefined);
    const correctSoFar = answeredSoFar.filter((q) => q.isCorrect).length;
    const currentGraded = examSet[currentIndex] && examSet[currentIndex].isCorrect !== undefined;
    const total = answeredSoFar.length + (currentGraded ? 1 : 0);
    const correct = correctSoFar + (currentGraded && examSet[currentIndex].isCorrect ? 1 : 0);
    scoreTrackerValue.textContent = `${correct}/${total}`;
  }

  function renderQuestion() {
    const q = examSet[currentIndex];
    currentAnswer = null;
    answered = false;
    nextBtn.disabled = true;
    nextBtn.textContent = currentIndex === examSet.length - 1 ? "Finish Exam" : "Next";

    progressFill.style.width = `${(currentIndex / examSet.length) * 100}%`;
    progressLabel.textContent = `Question ${currentIndex + 1} of ${examSet.length}`;
    updateScoreTracker();

    const obj = data.objectives.find((o) => o.id === q.objective);
    questionTag.textContent = obj ? obj.label : "";
    questionText.textContent = q.type === "blank" ? q.prompt : q.question;

    answerArea.innerHTML = "";

    const feedback = document.createElement("div");
    feedback.className = "exam-answer-feedback";

    if (q.type === "mcq") {
      const wrap = document.createElement("div");
      wrap.className = "exam-options";
      q.options.forEach((optionText) => {
        const btn = document.createElement("button");
        btn.type = "button";
        btn.className = "exam-option";
        btn.textContent = optionText;
        btn.addEventListener("click", () => {
          if (answered) return;
          currentAnswer = optionText;
          checkAnswer(wrap, feedback);
        });
        wrap.appendChild(btn);
      });
      answerArea.appendChild(wrap);
      answerArea.appendChild(feedback);
    } else {
      const input = document.createElement("input");
      input.type = "text";
      input.className = "exam-blank-input";
      input.placeholder = "Type the missing word or phrase…";
      input.autocomplete = "off";
      input.addEventListener("input", () => {
        currentAnswer = input.value;
      });
      input.addEventListener("keydown", (e) => {
        if (e.key === "Enter" && !answered && input.value.trim().length > 0) {
          e.preventDefault();
          checkAnswer(null, feedback, input, checkBtn);
        }
      });
      answerArea.appendChild(input);

      const checkBtn = document.createElement("button");
      checkBtn.type = "button";
      checkBtn.className = "exam-check-btn";
      checkBtn.textContent = "Check Answer";
      checkBtn.addEventListener("click", () => checkAnswer(null, feedback, input, checkBtn));
      answerArea.appendChild(checkBtn);

      answerArea.appendChild(feedback);
    }
  }

  function checkAnswer(optionsWrap, feedback, blankInput, checkBtn) {
    if (answered) return;
    const q = examSet[currentIndex];

    if (blankInput && blankInput.value.trim().length === 0) return;

    let isCorrect;
    let correctText;
    if (q.type === "mcq") {
      correctText = q.options[q.correctIndex];
      isCorrect = currentAnswer === correctText;
      optionsWrap.querySelectorAll(".exam-option").forEach((btn) => {
        btn.disabled = true;
        if (btn.textContent === currentAnswer) btn.classList.add("is-selected");
        if (btn.textContent === correctText) btn.classList.add("correct");
        else if (btn.textContent === currentAnswer) btn.classList.add("incorrect");
      });
    } else {
      correctText = q.answers[0];
      isCorrect = gradeBlank(currentAnswer || "", q);
      blankInput.disabled = true;
      blankInput.classList.add(isCorrect ? "correct" : "incorrect");
      if (checkBtn) checkBtn.disabled = true;
    }

    q.userAnswer = currentAnswer;
    q.isCorrect = isCorrect;
    answered = true;

    feedback.textContent = isCorrect
      ? "Correct!"
      : q.type === "mcq"
        ? "Not quite — the correct answer is highlighted above."
        : `Not quite — the correct answer is: ${correctText}`;
    feedback.classList.add(isCorrect ? "correct" : "incorrect");

    updateScoreTracker();
    nextBtn.disabled = false;
  }

  function recordAndAdvance() {
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

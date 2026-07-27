/*
 * Local, offline stand-in for an AI tutor. No API key, no network calls.
 * Each topic page sets `window.AI_TUTOR_DATA` (title, greeting, fallback,
 * a keyword-matched knowledgeBase, and a questionBank) before loading this
 * script. To wire up a real model later, replace `respondTo()` below with
 * a call to your own backend endpoint (see README notes in that function).
 */
document.addEventListener("DOMContentLoaded", () => {
  const root = document.querySelector(".ai-tutor");
  if (!root || !window.AI_TUTOR_DATA) return;

  const data = window.AI_TUTOR_DATA;
  const log = root.querySelector(".ai-chat-log");
  const form = root.querySelector(".ai-chat-form");
  const input = root.querySelector(".ai-chat-input");
  const generateBtn = root.querySelector(".ai-generate-question");
  const questionArea = root.querySelector(".ai-generated-question");

  let lastQuestionIndex = -1;

  function addMessage(text, sender) {
    const msg = document.createElement("div");
    msg.className = `ai-chat-message ai-chat-${sender}`;
    msg.textContent = text;
    log.appendChild(msg);
    log.scrollTop = log.scrollHeight;
  }

  function respondTo(userText) {
    // Swap this function out to call a real LLM API via your own backend
    // (never call a provider directly from client-side JS with a secret key).
    const lower = userText.toLowerCase();
    const match = data.knowledgeBase.find((entry) =>
      entry.keywords.some((kw) => lower.includes(kw))
    );
    return match ? match.answer : data.fallback;
  }

  if (data.greeting) {
    addMessage(data.greeting, "ai");
  }

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const text = input.value.trim();
    if (!text) return;
    addMessage(text, "user");
    input.value = "";
    setTimeout(() => addMessage(respondTo(text), "ai"), 250);
  });

  function renderQuestion() {
    const pool = data.questionBank;
    let index;
    do {
      index = Math.floor(Math.random() * pool.length);
    } while (pool.length > 1 && index === lastQuestionIndex);
    lastQuestionIndex = index;
    const q = pool[index];

    questionArea.innerHTML = "";
    const box = document.createElement("div");
    box.className = "quiz-box ai-quiz-box";

    const question = document.createElement("div");
    question.className = "quiz-question";
    question.textContent = q.question;
    box.appendChild(question);

    const options = document.createElement("div");
    options.className = "quiz-options";

    const feedback = document.createElement("div");
    feedback.className = "quiz-feedback";

    q.options.forEach((optionText, i) => {
      const btn = document.createElement("button");
      btn.type = "button";
      btn.className = "quiz-option";
      btn.textContent = optionText;
      btn.addEventListener("click", () => {
        if (box.classList.contains("answered")) return;
        box.classList.add("answered");
        const isCorrect = i === q.correctIndex;
        btn.classList.add(isCorrect ? "correct" : "incorrect");
        if (!isCorrect) {
          options.children[q.correctIndex].classList.add("correct");
        }
        feedback.textContent = isCorrect
          ? `Correct.${q.explanation ? " " + q.explanation : ""}`
          : `Not quite.${q.explanation ? " " + q.explanation : ""}`;
        feedback.classList.add(isCorrect ? "correct" : "incorrect");
      });
      options.appendChild(btn);
    });

    box.appendChild(options);
    box.appendChild(feedback);
    questionArea.appendChild(box);
  }

  generateBtn.addEventListener("click", renderQuestion);
  renderQuestion();
});

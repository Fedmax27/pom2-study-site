document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".quiz-box").forEach((box) => {
    const correctAnswer = box.dataset.correct;
    const feedback = box.querySelector(".quiz-feedback");

    box.querySelectorAll(".quiz-option").forEach((option) => {
      option.addEventListener("click", () => {
        const alreadyAnswered = box.classList.contains("answered");
        if (alreadyAnswered) return;
        box.classList.add("answered");

        const isCorrect = option.dataset.value === correctAnswer;
        option.classList.add(isCorrect ? "correct" : "incorrect");

        if (!isCorrect) {
          box.querySelector(`[data-value="${correctAnswer}"]`).classList.add("correct");
        }

        feedback.textContent = isCorrect
          ? "Correct!"
          : "Not quite — the correct answer is highlighted above.";
        feedback.classList.add(isCorrect ? "correct" : "incorrect");
      });
    });
  });
});

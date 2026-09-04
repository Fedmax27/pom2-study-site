document.addEventListener("DOMContentLoaded", () => {
  const deck = document.querySelector(".slideshow");
  if (!deck) return;

  const slides = Array.from(deck.querySelectorAll(".slide"));
  const counter = document.querySelector(".slide-counter");
  const dotsWrap = document.querySelector(".slide-dots");
  const progressFill = document.querySelector(".slide-progress-fill");
  const prevBtn = document.querySelector(".slide-prev");
  const nextBtn = document.querySelector(".slide-next");
  if (slides.length === 0) return;

  let idx = 0;

  const dots = slides.map((_, i) => {
    const dot = document.createElement("button");
    dot.type = "button";
    dot.className = "slide-dot";
    dot.setAttribute("aria-label", `Go to slide ${i + 1}`);
    dot.addEventListener("click", () => goTo(i));
    if (dotsWrap) dotsWrap.appendChild(dot);
    return dot;
  });

  function render() {
    slides.forEach((s, i) => s.classList.toggle("is-active", i === idx));
    dots.forEach((d, i) => d.classList.toggle("is-active", i === idx));
    if (counter) counter.textContent = `${idx + 1} / ${slides.length}`;
    if (progressFill) progressFill.style.width = `${((idx + 1) / slides.length) * 100}%`;
    if (prevBtn) prevBtn.disabled = idx === 0;
    if (nextBtn) {
      nextBtn.textContent = idx === slides.length - 1 ? "Finish ✓" : "Next →";
    }
    deck.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  function goTo(i) {
    idx = Math.max(0, Math.min(slides.length - 1, i));
    render();
  }

  if (prevBtn) prevBtn.addEventListener("click", () => goTo(idx - 1));
  if (nextBtn) nextBtn.addEventListener("click", () => goTo(idx + 1));

  document.addEventListener("keydown", (e) => {
    const tag = (document.activeElement && document.activeElement.tagName) || "";
    if (tag === "INPUT" || tag === "TEXTAREA") return;
    if (e.key === "ArrowRight") goTo(idx + 1);
    if (e.key === "ArrowLeft") goTo(idx - 1);
  });

  render();

  // Short typed-answer checkpoints: lenient substring match against a
  // pipe-separated accepted-answers list, feedback + explanation always shown.
  document.querySelectorAll(".type-answer-box").forEach((box) => {
    const input = box.querySelector("input");
    const btn = box.querySelector(".type-answer-check");
    const feedback = box.querySelector(".type-answer-feedback");
    const explain = box.querySelector(".type-answer-explain");
    const accepted = (box.dataset.answers || "")
      .split("|")
      .map((s) => s.trim().toLowerCase())
      .filter(Boolean);
    const display = box.dataset.display || accepted[0] || "";

    function check() {
      const val = input.value.trim().toLowerCase();
      const isCorrect = val.length > 0 && accepted.some((a) => val === a || val.includes(a) || a.includes(val));
      feedback.textContent = isCorrect ? "That's it." : `Close enough to move on — the term is "${display}".`;
      feedback.classList.remove("correct", "incorrect");
      feedback.classList.add(isCorrect ? "correct" : "incorrect");
      box.classList.add("answered");
      if (explain) explain.hidden = false;
    }

    if (btn) btn.addEventListener("click", check);
    if (input) {
      input.addEventListener("keydown", (e) => {
        if (e.key === "Enter") {
          e.preventDefault();
          check();
        }
      });
    }
  });

  // Open-ended reveal boxes: no grading, just self-check against a model answer.
  document.querySelectorAll(".reveal-box").forEach((box) => {
    const btn = box.querySelector(".reveal-btn");
    const panel = box.querySelector(".reveal-panel");
    if (!btn || !panel) return;
    btn.addEventListener("click", () => {
      panel.hidden = false;
      btn.hidden = true;
    });
  });

  // Clinical score calculators (e.g. Burch-Wartofsky). Each .score-group is a
  // radio-style band; the running total and its interpretation band update live.
  // Bands come from data-bands: "cut:class:label|cut:class:label", ascending,
  // where cut is the minimum score for that band.
  document.querySelectorAll(".score-calc").forEach((calc) => {
    const readoutNum = calc.querySelector(".score-readout-num");
    const readoutBand = calc.querySelector(".score-readout-band");
    const explain = calc.querySelector(".score-explain");
    const groups = Array.from(calc.querySelectorAll(".score-group"));

    const bands = (calc.dataset.bands || "")
      .split("|")
      .map((b) => b.split(":"))
      .filter((p) => p.length === 3)
      .map(([cut, cls, label]) => ({ cut: Number(cut), cls, label }));

    function bandFor(score) {
      let match = null;
      bands.forEach((b) => {
        if (score >= b.cut) match = b;
      });
      return match;
    }

    function update() {
      let total = 0;
      let answered = 0;
      groups.forEach((g) => {
        const picked = g.querySelector(".score-opt.is-picked");
        if (picked) {
          total += Number(picked.dataset.points || 0);
          answered += 1;
        }
      });

      if (readoutNum) readoutNum.textContent = total;

      const complete = answered === groups.length;
      if (readoutBand) {
        if (!complete) {
          readoutBand.textContent = `${answered} of ${groups.length} categories scored`;
          readoutBand.className = "score-readout-band";
        } else {
          const b = bandFor(total);
          readoutBand.textContent = b ? b.label : "";
          readoutBand.className = "score-readout-band " + (b ? b.cls : "");
        }
      }
      if (explain) explain.hidden = !complete;
    }

    calc.querySelectorAll(".score-opt").forEach((opt) => {
      opt.addEventListener("click", () => {
        const group = opt.closest(".score-group");
        if (!group) return;
        group
          .querySelectorAll(".score-opt")
          .forEach((o) => o.classList.remove("is-picked"));
        opt.classList.add("is-picked");
        update();
      });
    });

    update();
  });
});

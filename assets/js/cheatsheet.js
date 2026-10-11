/*
 * Decision-rule calculators on the Emerg cheat sheets.
 *
 * A .cs-calc holds yes/no items (checkboxes with data-points) and
 * single-choice groups (.cs-calc-group > .cs-calc-opt[data-points]).
 * The running total and its band update as you tap. Bands come from
 * data-bands="cut:class:label|cut:class:label", ascending, where cut
 * is the lowest score in that band. A .cs-calc-reset button clears it.
 */
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".cs-calc").forEach((calc) => {
    const totalEl = calc.querySelector(".cs-calc-total");
    const bandEl = calc.querySelector(".cs-calc-band");

    const bands = (calc.dataset.bands || "")
      .split("|")
      .map((b) => b.split(":"))
      .filter((p) => p.length >= 3)
      .map(([cut, cls, ...label]) => ({ cut: Number(cut), cls, label: label.join(":") }));

    function update() {
      let sum = 0;
      calc.querySelectorAll('input[type="checkbox"][data-points]').forEach((cb) => {
        const item = cb.closest(".cs-calc-item");
        if (item) item.classList.toggle("is-on", cb.checked);
        if (cb.checked) sum += Number(cb.dataset.points);
      });
      calc.querySelectorAll(".cs-calc-opt.is-picked").forEach((opt) => {
        sum += Number(opt.dataset.points);
      });
      sum = Math.round(sum * 10) / 10;

      if (totalEl) totalEl.textContent = sum;
      let match = null;
      bands.forEach((b) => {
        if (sum >= b.cut) match = b;
      });
      if (bandEl) {
        bandEl.textContent = match ? match.label : "";
        bandEl.className = "cs-calc-band" + (match ? " " + match.cls : "");
      }
    }

    calc.addEventListener("change", update);

    calc.querySelectorAll(".cs-calc-opt").forEach((opt) => {
      opt.addEventListener("click", () => {
        const group = opt.closest(".cs-calc-group");
        const wasPicked = opt.classList.contains("is-picked");
        if (group) group.querySelectorAll(".cs-calc-opt").forEach((o) => o.classList.remove("is-picked"));
        if (!wasPicked) opt.classList.add("is-picked");
        update();
      });
    });

    const reset = calc.querySelector(".cs-calc-reset");
    if (reset) {
      reset.addEventListener("click", () => {
        calc.querySelectorAll('input[type="checkbox"]').forEach((cb) => (cb.checked = false));
        calc.querySelectorAll(".cs-calc-opt").forEach((o) => o.classList.remove("is-picked"));
        update();
      });
    }

    update();
  });
});

/*
 * Step-through cases on the Emerg cheat sheets.
 *
 * A .cs-case holds .cs-case-stage blocks. Only the first shows at the
 * start. A stage can hold one .cs-q: a question with .cs-q-opt buttons
 * (the right one carries data-right) and a .cs-q-why that stays hidden
 * until an option is picked. Once the stage's question is answered (or
 * straight away, if it has none) a Continue button opens the next
 * stage. The last stage gets a "Start the case again" button.
 */
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".cs-case").forEach((box) => {
    const stages = Array.from(box.querySelectorAll(".cs-case-stage"));
    if (!stages.length) return;

    function addNext(stage, i) {
      if (stage.querySelector(".cs-case-next")) return;
      const btn = document.createElement("button");
      btn.type = "button";
      btn.className = "cs-case-next";
      if (i < stages.length - 1) {
        btn.textContent = "Continue →";
        btn.addEventListener("click", () => {
          btn.remove();
          open(i + 1);
          stages[i + 1].scrollIntoView({ block: "start", behavior: "smooth" });
        });
      } else {
        btn.textContent = "↺ Start the case again";
        btn.classList.add("is-ghost");
        btn.addEventListener("click", reset);
      }
      stage.appendChild(btn);
    }

    function open(i) {
      const stage = stages[i];
      stage.hidden = false;
      const q = stage.querySelector(".cs-q");
      if (!q || q.classList.contains("is-answered")) addNext(stage, i);
    }

    function reset() {
      box.querySelectorAll(".cs-case-next").forEach((b) => b.remove());
      box.querySelectorAll(".cs-q").forEach((q) => {
        q.classList.remove("is-answered");
        q.querySelectorAll(".cs-q-opt").forEach((o) => {
          o.disabled = false;
          o.classList.remove("is-right", "is-wrong");
        });
        const why = q.querySelector(".cs-q-why");
        if (why) why.hidden = true;
      });
      stages.forEach((s, k) => (s.hidden = k > 0));
      open(0);
      box.scrollIntoView({ block: "start", behavior: "smooth" });
    }

    stages.forEach((stage, i) => {
      const q = stage.querySelector(".cs-q");
      if (!q) return;
      const why = q.querySelector(".cs-q-why");
      q.querySelectorAll(".cs-q-opt").forEach((opt) => {
        opt.addEventListener("click", () => {
          if (q.classList.contains("is-answered")) return;
          q.classList.add("is-answered");
          q.querySelectorAll(".cs-q-opt").forEach((o) => {
            o.disabled = true;
            if (o.hasAttribute("data-right")) o.classList.add("is-right");
          });
          if (!opt.hasAttribute("data-right")) opt.classList.add("is-wrong");
          if (why) {
            const ok = opt.hasAttribute("data-right");
            let verdict = why.querySelector(".cs-q-verdict");
            if (!verdict) {
              verdict = document.createElement("strong");
              verdict.className = "cs-q-verdict";
              why.prepend(verdict);
            }
            verdict.textContent = ok ? "\u2713 Correct" : "\u2717 Not quite";
            why.hidden = false;
            why.classList.toggle("is-wrong", !ok);
          }
          addNext(stage, i);
        });
      });
    });

    stages.forEach((s, k) => (s.hidden = k > 0));
    open(0);
  });
});

/*
 * Sim-lab interactions for Daily Case workshops.
 *
 * Three components, all independent of each other and of slideshow.js:
 *
 *   .order-panel     Investigation ordering. You pick tests, run them,
 *                    and only the tests you actually ordered come back.
 *                    Scored on whether you found the discriminating
 *                    test and whether you shotgunned low-yield ones —
 *                    the Choosing Wisely idea, made playable.
 *
 *   .calc-box        A worked calculation with a tolerance band, so
 *                    rounding doesn't fail you, plus a shown solution.
 *
 *   .sequence-box    Put steps in the right order. Used where the
 *                    ordering itself is the teaching point (fluids
 *                    before a loop diuretic, not after).
 *
 * Live unit conversion is handled inline by [data-convert].
 */
document.addEventListener("DOMContentLoaded", () => {

  /* ---------------- investigation ordering ---------------- */

  document.querySelectorAll(".order-panel").forEach((panel) => {
    const runBtn = panel.querySelector(".order-run");
    const resultsEl = panel.querySelector(".order-results");
    const verdictEl = panel.querySelector(".order-verdict");
    if (!runBtn || !resultsEl) return;

    const store = panel.querySelector(".order-result-store");

    runBtn.addEventListener("click", () => {
      const boxes = Array.from(panel.querySelectorAll(".order-item input"));
      const picked = boxes.filter((b) => b.checked);
      if (!picked.length) {
        verdictEl.hidden = false;
        verdictEl.className = "order-verdict is-warn";
        verdictEl.textContent = "Order at least one investigation.";
        return;
      }

      // Render only what was ordered, in the panel's own listed order.
      resultsEl.innerHTML = "";
      boxes.forEach((b) => {
        if (!b.checked) return;
        const src = store && store.querySelector(`[data-for="${b.dataset.id}"]`);
        const row = document.createElement("div");
        row.className = "order-result-row";
        row.innerHTML = src
          ? src.innerHTML
          : `<div class="order-result-name">${b.parentElement.textContent.trim()}</div>`;
        resultsEl.appendChild(row);
      });
      resultsEl.hidden = false;

      // Score: did they get the discriminating test, and how much
      // low-yield did they order alongside it?
      const keyTotal = boxes.filter((b) => b.dataset.tier === "key").length;
      const keyGot = picked.filter((b) => b.dataset.tier === "key").length;
      const lowYield = picked.filter((b) => b.dataset.tier === "low").length;

      let cls = "is-good";
      let msg;
      if (keyGot < keyTotal) {
        cls = "is-warn";
        const missed = boxes
          .filter((b) => b.dataset.tier === "key" && !b.checked)
          .map((b) => b.dataset.label || b.dataset.id);
        msg = `You have results, but not the answer. Missing the test that actually discriminates here: <strong>${missed.join(", ")}</strong>.`;
      } else if (lowYield > 1) {
        cls = "is-warn";
        msg = `You found the discriminating test &mdash; but ordered ${lowYield} investigations that could not change management at this point. Least invasive, highest yield, first.`;
      } else {
        msg = "Efficient. You ordered the test that changes the diagnosis, without shotgunning around it.";
      }
      verdictEl.hidden = false;
      verdictEl.className = `order-verdict ${cls}`;
      verdictEl.innerHTML = msg;

      panel.classList.add("is-run");
      runBtn.disabled = true;
      boxes.forEach((b) => (b.disabled = true));
    });
  });

  /* ---------------- calculators ---------------- */

  document.querySelectorAll(".calc-box").forEach((box) => {
    const input = box.querySelector(".calc-answer");
    const btn = box.querySelector(".calc-check");
    const feedback = box.querySelector(".calc-feedback");
    const work = box.querySelector(".calc-work");
    if (!input || !btn) return;

    const answer = parseFloat(box.dataset.answer);
    const tol = parseFloat(box.dataset.tolerance || "0.05");
    const unit = box.dataset.unit || "";

    function check() {
      if (box.classList.contains("answered")) return;
      const val = parseFloat(input.value.replace(/[^0-9.\-]/g, ""));
      const ok = !isNaN(val) && Math.abs(val - answer) <= tol;
      box.classList.add("answered");
      feedback.className = `calc-feedback ${ok ? "correct" : "incorrect"}`;
      feedback.innerHTML = ok
        ? "Correct."
        : `Not quite &mdash; it works out to <strong>${answer} ${unit}</strong>.`;
      if (work) work.hidden = false;
      input.disabled = true;
      btn.disabled = true;
    }

    btn.addEventListener("click", check);
    input.addEventListener("keydown", (e) => {
      if (e.key === "Enter") {
        e.preventDefault();
        check();
      }
    });
  });

  /* ---------------- live unit conversion ---------------- */

  document.querySelectorAll("[data-convert]").forEach((wrap) => {
    const input = wrap.querySelector("input");
    const out = wrap.querySelector(".convert-out");
    const factor = parseFloat(wrap.dataset.factor);
    const dp = parseInt(wrap.dataset.dp || "2", 10);
    if (!input || !out) return;
    const update = () => {
      const v = parseFloat(input.value);
      out.textContent = isNaN(v) ? "—" : (v * factor).toFixed(dp);
    };
    input.addEventListener("input", update);
    update();
  });

  /* ---------------- ordering a sequence ---------------- */

  document.querySelectorAll(".sequence-box").forEach((box) => {
    const correct = (box.dataset.order || "").split(",").map((s) => s.trim());
    const pool = box.querySelector(".sequence-pool");
    const slots = box.querySelector(".sequence-slots");
    const checkBtn = box.querySelector(".sequence-check");
    const feedback = box.querySelector(".sequence-feedback");
    const explain = box.querySelector(".sequence-explain");
    if (!pool || !slots || !checkBtn) return;

    const chosen = [];

    // Kept separate from slot rendering: once answered, the slots show
    // the marked-up correct order and must not be rebuilt from `chosen`.
    function syncPool() {
      pool.querySelectorAll(".seq-opt").forEach((b) => {
        b.disabled = chosen.includes(b.dataset.id) || box.classList.contains("answered");
        b.classList.toggle("is-used", chosen.includes(b.dataset.id));
      });
      checkBtn.disabled =
        box.classList.contains("answered") || chosen.length !== correct.length;
    }

    function render() {
      if (box.classList.contains("answered")) {
        syncPool();
        return;
      }
      slots.innerHTML = "";
      chosen.forEach((id, i) => {
        const src = pool.querySelector(`[data-id="${id}"]`);
        const li = document.createElement("li");
        li.className = "seq-slot";
        li.innerHTML = `<span class="seq-slot-n">${i + 1}</span><span>${src.textContent}</span>`;
        li.addEventListener("click", () => {
          if (box.classList.contains("answered")) return;
          chosen.splice(i, 1);
          render();
        });
        slots.appendChild(li);
      });
      syncPool();
    }

    pool.querySelectorAll(".seq-opt").forEach((b) => {
      b.addEventListener("click", () => {
        if (box.classList.contains("answered")) return;
        if (!chosen.includes(b.dataset.id)) chosen.push(b.dataset.id);
        render();
      });
    });

    checkBtn.addEventListener("click", () => {
      if (box.classList.contains("answered")) return;
      box.classList.add("answered");
      const right = chosen.every((id, i) => id === correct[i]);
      // Mark each placed step against where it should have been.
      slots.querySelectorAll(".seq-slot").forEach((li, i) => {
        li.classList.add(chosen[i] === correct[i] ? "is-right" : "is-wrong");
      });
      feedback.className = `sequence-feedback ${right ? "correct" : "incorrect"}`;
      feedback.innerHTML = right
        ? "That's the order."
        : "Not the order &mdash; the correct sequence is numbered below.";
      if (!right) {
        slots.innerHTML = "";
        correct.forEach((id, i) => {
          const src = pool.querySelector(`[data-id="${id}"]`);
          const li = document.createElement("li");
          li.className = "seq-slot is-right";
          li.innerHTML = `<span class="seq-slot-n">${i + 1}</span><span>${src.textContent}</span>`;
          slots.appendChild(li);
        });
      }
      if (explain) explain.hidden = false;
      render();
      checkBtn.disabled = true;
    });

    render();
  });
});

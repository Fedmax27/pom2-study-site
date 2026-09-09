/*
 * Interactive lecture figures.
 *
 * Three components, all progressive enhancement — the underlying SVG
 * and the panel text are in the HTML, so the figure still reads with
 * JavaScript off. All colour comes from CSS variables so every
 * component follows the light/dark theme without extra work.
 *
 *   .hotspot-fig   A labelled diagram where each region is clickable.
 *                  Regions carry [data-hotspot="id"], the side panel
 *                  carries matching [data-hotspot-panel="id"] blocks.
 *                  Used for the hypothalamic nuclei map, where the
 *                  point is *where* a thing sits, not just what it is.
 *
 *   .pulse-sim     GnRH pulse-frequency demonstrator. Radio inputs
 *                  each describe one frequency regimen; the spike
 *                  train, the LH/FSH output bars and the explanatory
 *                  panel all redraw from the selected input's data.
 *
 *   .axis-sim      HPA axis state simulator. One drawing of the axis;
 *                  each radio input describes where the lesion sits
 *                  and what the four hormones do. Used to hold the
 *                  primary/secondary/Cushing patterns side by side
 *                  rather than as four separate diagrams.
 */
document.addEventListener("DOMContentLoaded", () => {

  /* ---------------- clickable diagram ---------------- */

  document.querySelectorAll(".hotspot-fig").forEach((fig) => {
    const spots = Array.from(fig.querySelectorAll("[data-hotspot]"));
    const panels = Array.from(fig.querySelectorAll("[data-hotspot-panel]"));
    const empty = fig.querySelector(".hotspot-empty");
    if (!spots.length || !panels.length) return;

    function select(id) {
      spots.forEach((s) => s.classList.toggle("is-active", s.dataset.hotspot === id));
      panels.forEach((p) => (p.hidden = p.dataset.hotspotPanel !== id));
      if (empty) empty.hidden = true;
    }

    spots.forEach((s) => {
      // Keyboard reachable: SVG groups are not focusable by default.
      s.setAttribute("tabindex", "0");
      s.setAttribute("role", "button");
      s.addEventListener("click", () => select(s.dataset.hotspot));
      s.addEventListener("keydown", (e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          select(s.dataset.hotspot);
        }
      });
    });

    // Start on whichever panel the author left un-hidden, if any.
    const preset = panels.find((p) => !p.hidden);
    if (preset) select(preset.dataset.hotspotPanel);
    else panels.forEach((p) => (p.hidden = true));
  });

  /* ---------------- GnRH pulse-frequency simulator ---------------- */

  document.querySelectorAll(".pulse-sim").forEach((sim) => {
    const inputs = Array.from(sim.querySelectorAll(".pulse-opt input"));
    const train = sim.querySelector(".pulse-train");
    const lhBar = sim.querySelector(".pulse-bar-lh");
    const fshBar = sim.querySelector(".pulse-bar-fsh");
    const lhVal = sim.querySelector(".pulse-val-lh");
    const fshVal = sim.querySelector(".pulse-val-fsh");
    const panels = Array.from(sim.querySelectorAll("[data-pulse-panel]"));
    if (!inputs.length || !train) return;

    // Plot geometry, in the SVG's own user units.
    const X0 = 52;       // left edge of the trace
    const X1 = 588;      // right edge
    const BASE = 96;     // baseline y
    const PEAK = 26;     // top of a full-height spike
    const HOURS = 6;     // window shown on the x axis
    const SPAN = X1 - X0;

    function draw(intervalMin, amplitude) {
      const parts = [];

      if (intervalMin === 0) {
        // Continuous infusion — a raised plateau, no pulses at all.
        const y = BASE - (BASE - PEAK) * 0.42;
        parts.push(
          `<path class="pulse-plateau" d="M ${X0},${BASE} L ${X0 + 16},${y} L ${X1},${y}"/>`
        );
      } else {
        const stepH = intervalMin / 60;
        const px = (SPAN / HOURS) * stepH;
        const top = BASE - (BASE - PEAK) * amplitude;
        let d = `M ${X0},${BASE}`;
        for (let x = X0 + px * 0.45; x < X1; x += px) {
          // Fast rise, slower decay — the shape of a real LH pulse.
          d += ` L ${(x - 5).toFixed(1)},${BASE} L ${x.toFixed(1)},${top.toFixed(1)}`;
          d += ` L ${Math.min(x + px * 0.42, X1).toFixed(1)},${BASE}`;
        }
        d += ` L ${X1},${BASE}`;
        parts.push(`<path class="pulse-trace" d="${d}"/>`);
      }

      train.innerHTML = parts.join("");
    }

    function apply(input) {
      draw(parseInt(input.dataset.interval, 10), parseFloat(input.dataset.amp || "1"));

      const lh = parseInt(input.dataset.lh, 10);
      const fsh = parseInt(input.dataset.fsh, 10);
      if (lhBar) lhBar.style.width = lh + "%";
      if (fshBar) fshBar.style.width = fsh + "%";
      if (lhVal) lhVal.textContent = input.dataset.lhLabel || "";
      if (fshVal) fshVal.textContent = input.dataset.fshLabel || "";

      panels.forEach((p) => (p.hidden = p.dataset.pulsePanel !== input.value));
      sim.querySelectorAll(".pulse-opt").forEach((o) =>
        o.classList.toggle("is-on", o.contains(input))
      );
    }

    inputs.forEach((i) => i.addEventListener("change", () => apply(i)));
    apply(inputs.find((i) => i.checked) || inputs[0]);
    (inputs.find((i) => i.checked) || inputs[0]).checked = true;
  });

  /* ---------------- HPA axis state simulator ---------------- */

  document.querySelectorAll(".axis-sim").forEach((sim) => {
    const inputs = Array.from(sim.querySelectorAll(".axis-opt input"));
    const slots = Array.from(sim.querySelectorAll("[data-axis-slot]"));
    const flag = sim.querySelector(".axis-flag");
    const panels = Array.from(sim.querySelectorAll("[data-axis-panel]"));
    if (!inputs.length || !slots.length) return;

    // Where the lesion marker parks for each level of the axis, in the
    // SVG's own user units. Every position is on the same x so the
    // marker reads as sliding up and down one rail.
    const LESION_Y = { hypo: 70, pit: 178, ectopic: 231, adrenal: 296, exog: 452 };

    // Chip colour follows the arrow glyph, so the two can never
    // disagree — and the glyph carries the meaning on its own.
    function toneOf(symbol) {
      if (symbol.indexOf("\u2191") === 0) return "is-high";
      if (symbol.indexOf("\u2193") === 0) return "is-low";
      return "is-normal";
    }

    function apply(input) {
      slots.forEach((slot) => {
        const key = slot.dataset.axisSlot;
        const symbol = input.dataset[key];
        // A state that says nothing about this hormone leaves the
        // chip out of the picture entirely rather than guessing.
        if (!symbol) {
          slot.style.display = "none";
          return;
        }
        slot.style.display = "";
        slot.classList.remove("is-high", "is-low", "is-normal");
        slot.classList.add(toneOf(symbol));
        const val = slot.querySelector(".axis-chip-val");
        const word = slot.querySelector(".axis-chip-word");
        if (val) val.textContent = symbol;
        if (word) word.textContent = input.dataset[key + "Word"] || "";
      });

      if (flag) {
        const at = input.dataset.lesion;
        if (!at || at === "none") {
          flag.classList.add("is-off");
        } else {
          flag.classList.remove("is-off");
          flag.setAttribute("transform", `translate(560, ${LESION_Y[at] || 178})`);
          const label = flag.querySelector(".axis-flag-text");
          if (label) label.textContent = input.dataset.lesionLabel || "";
        }
      }

      panels.forEach((p) => (p.hidden = p.dataset.axisPanel !== input.value));
      sim.querySelectorAll(".axis-opt").forEach((o) =>
        o.classList.toggle("is-on", o.contains(input))
      );
    }

    inputs.forEach((i) => i.addEventListener("change", () => apply(i)));
    const start = inputs.find((i) => i.checked) || inputs[0];
    start.checked = true;
    apply(start);
  });
});

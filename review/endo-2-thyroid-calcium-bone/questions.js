/*
 * Endo 2 · Thyroid, Calcium & Bone. Question bank for assets/js/review.js.
 * Questions were moved verbatim from the original day-based Reviews 1-3
 * (regrouped by system on 2026-10-08), written in the style of the P2 Elentra
 * weekly quizzes: named patients, labs with reference ranges, "what next",
 * select-all-that-apply (a is an array), twin vignettes. Facts come from the
 * site's lecture pages (linked on each question). Options shuffle when it runs.
 */
(function () {
  const U = "../../units/endocrinology/";
  const PCD = U + "week-2/parathyroid-calcium-disorders/index.html#";
  const TP = U + "week-1/thyroid-parathyroid/index.html#";
  const VD = U + "week-1/vitamin-d-calcium/index.html#";
  const MBD = U + "week-2/metabolic-bone-disease/index.html#";
  const OP = U + "week-2/osteoporosis/index.html#";
  const HPG = U + "week-2/hpg-axis/index.html#";
  const IMG_R1 = "../../assets/images/review/2026-10-03-endo/";
  const TDY = U + "week-2/thyroid-dysfunction/index.html#";
  const NOD = U + "week-2/thyroid-nodule-pathology/index.html#";

  window.REVIEW = {
    id: "review-endo-2-thyroid-calcium-bone-v1",
    topics: [
      { id: "thyroid", label: "Thyroid function", step: "thyroid" },
      { id: "nodules", label: "Thyroid nodules & cancer", step: "nodules" },
      { id: "ca", label: "Calcium & PTH", step: "calcium" },
      { id: "vitd", label: "Vitamin D & bone drugs", step: "drugs" },
      { id: "mbd", label: "Osteomalacia, Paget's & OI", step: "bone" },
      { id: "op", label: "Osteoporosis", step: "osteoporosis" },
    ],
    quizzes: {
      /* ------------------------------------------------ WARM-UP · 22 */
      warmup: [
        /* ---- thyroid function */
        { id: "w1", topic: "thyroid",
          q: "Margaret, 58, has 6 months of fatigue, constipation and weight gain. TSH 14.2 mU/L (0.35–5.0), free T4 7 pmol/L (10–23). What is the most appropriate next step?",
          options: ["Diagnose primary hypothyroidism and start levothyroxine", "Call it subclinical hypothyroidism and recheck in 6 months", "Order a pituitary MRI for central hypothyroidism", "Check anti-TPO antibodies before deciding on treatment", "Order a thyroid ultrasound"],
          a: 0,
          why: "A high TSH with a low free T4 is overt primary hypothyroidism (Hashimoto by far the commonest cause). Antibodies and ultrasound don't change the decision: the treatment is levothyroxine either way.",
          link: { href: TDY + "hypo-differential", label: "2.1 · Hypothyroidism differential" } },
        { id: "w2", topic: "thyroid",
          q: "Raj, 50, had a pituitary macroadenoma removed last year and already takes hydrocortisone. He now has fatigue, cold intolerance and constipation. His TSH is 1.2 mU/L (0.35–5.0). What should you do next?",
          options: ["Order a free T4", "Reassure him that his thyroid is normal", "Repeat the TSH in 6 weeks", "Order a thyroid ultrasound", "Start levothyroxine without further testing"],
          a: 0,
          why: "In pituitary disease the TSH can be normal (or low) while the thyroid is under-stimulated: central hypothyroidism. TSH alone misses it, so check a free T4.",
          link: { href: TDY + "function-tests", label: "2.1 · The trap in the central patterns" } },
        { id: "w3", topic: "thyroid",
          q: "Chloe, 31, has Graves disease and is starting methimazole. Which of the following should you do? (select all that apply)",
          options: ["Get a baseline CBC and liver enzymes", "Do a pregnancy test", "Tell her to seek care urgently for a fever or sore throat", "Tell her she should feel normal within 2–3 days", "Arrange radioactive iodine at the same time"],
          a: [0, 1, 2],
          why: "Antithyroid drugs can cause agranulocytosis, liver injury and birth defects, so get baselines, check for pregnancy (it changes the drug) and teach that fever or sore throat means come in. Euthyroidism takes about 4–6 weeks.",
          link: { href: TDY + "hyper-treatment", label: "2.1 · Before you start an antithyroid drug" } },

        /* ---- thyroid nodules & cancer */
        { id: "w4", topic: "nodules",
          q: "Sandra, 45, has a 3 cm solitary thyroid nodule. TSH is normal and the FNA reports a follicular lesion of undetermined significance. She asks why surgery is being offered. What is the best explanation?",
          options: ["Only the whole nodule shows whether there is capsular or vascular invasion, which is what separates adenoma from carcinoma", "The FNA has already shown that it is a carcinoma", "Follicular lesions are always malignant", "She needs surgery so that radioactive iodine can be given", "The FNA was inadequate and should simply be repeated"],
          a: 0,
          why: "Follicular adenoma and carcinoma have identical cells; carcinoma is defined by invasion at the edge of the lesion, which a needle can't sample. A hemithyroidectomy is diagnostic as well as therapeutic.",
          link: { href: NOD + "follicular", label: "2.3 · Adenoma vs carcinoma" } },
        { id: "w5", topic: "nodules",
          q: "Tom, 39, has a thyroid nodule. FNA shows medullary thyroid carcinoma and his calcitonin is raised. A total thyroidectomy is planned. Which test is most important before the operation?",
          options: ["Plasma or urine metanephrines", "A radioactive iodine uptake scan", "Serum thyroglobulin", "Anti-TPO antibodies", "TSH-receptor antibodies"],
          a: 0,
          why: "A quarter of medullary carcinomas are part of MEN 2, so exclude a pheochromocytoma first; an unrecognised one can cause a hypertensive crisis in the operating room. Medullary tumours come from C cells and don't take up iodine.",
          link: { href: NOD + "aggressive", label: "2.3 · Medullary carcinoma" } },
        { id: "w6", topic: "nodules",
          q: "Which features are typical of papillary thyroid carcinoma? (select all that apply)",
          options: ["It is diagnosed on nuclear features, which FNA shows well", "It spreads by lymphatics, and a neck node may be the first sign", "It is often multifocal", "It mainly spreads through the blood to bone and lung", "It does not take up radioactive iodine"],
          a: [0, 1, 2],
          why: "Papillary carcinoma is defined by its nuclei (grooves, clearing, inclusions), spreads to neck nodes and is often multifocal. Blood-borne spread is follicular carcinoma; both differentiated cancers take up iodine.",
          link: { href: NOD + "papillary", label: "2.3 · Papillary carcinoma" } },

        /* ---- calcium & pth */
        {
          id: "w7", topic: "ca",
          q: "Measured calcium <b>2.10 mmol/L</b>, albumin <b>25 g/L</b>. What is the corrected calcium?",
          options: ["2.40 mmol/L", "1.80 mmol/L", "2.10 mmol/L", "2.60 mmol/L"], a: 0,
          why: "2.10 + 0.02 × (40 − 25) = 2.10 + 0.30 = <b>2.40</b>. Low albumin drags the total down while the active ionized calcium is unchanged, so she isn't truly hypocalcemic.",
          link: { href: PCD + "corrected-calcium", label: "2.2 · Corrected calcium" },
        },
        {
          id: "w8", topic: "ca",
          q: "Hypercalcemia with a PTH at the top of the normal range. 24-hour urine: fractional excretion of calcium <b>0.006</b>. Most likely diagnosis?",
          options: ["Familial hypocalciuric hypercalcemia (FHH)", "Primary hyperparathyroidism", "Humoral hypercalcemia of malignancy", "Vitamin D intoxication"], a: 0,
          why: "FeCa <b>&lt; 0.01 = FHH</b>: an inactivating calcium-sensing receptor mutation means the kidney \"thinks\" calcium is normal and keeps reabsorbing it. FeCa &gt; 0.02 = primary hyperPTH. Both have a high or inappropriately normal PTH, so only the urine separates them.",
          link: { href: PCD + "fhh-case", label: "2.2 · FHH vs primary hyperPTH" },
        },
        {
          id: "w9", topic: "ca",
          q: "Three weeks after a total thyroidectomy: <b>low calcium, high phosphate, low PTH</b>. Diagnosis?",
          options: ["Hypoparathyroidism (post-surgical)", "Vitamin D deficiency", "Pseudohypoparathyroidism type 1a", "Familial hypocalciuric hypercalcemia"], a: 0,
          why: "No PTH → no renal phosphate wasting, so phosphate climbs as calcium falls. Post-surgical is ~75% of hypoparathyroidism (called permanent only after 6 months). Vitamin D deficiency gives <b>low</b> phosphate and <b>high</b> PTH; PHP 1a has a <b>high</b> PTH.",
          link: { href: PCD + "hypocalcemia-etiology", label: "2.2 · Hypocalcemia by lab pattern" },
        },
        {
          id: "w10", topic: "ca",
          q: "Corrected calcium <b>3.4 mmol/L</b>. She is confused, with dry mucous membranes and a BP of 98/60. First step?",
          options: ["IV normal saline", "IV furosemide", "IV zoledronate", "Calcitonin alone"], a: 0,
          why: "Volume first. Hypercalcemia causes a nephrogenic-DI-type polyuria, and the dehydration cuts renal calcium clearance further. Furosemide only once she's well hydrated. Zoledronate is the definitive fix but takes 2–4 days; calcitonin is a bridge, not monotherapy.",
          link: { href: PCD + "acute-hypercalcemia-tx", label: "2.2 · Treating acute hypercalcemia" },
        },
        {
          id: "w11", topic: "ca",
          q: "Which ECG change does <b>hypercalcemia</b> cause?",
          options: ["Short QT interval", "Prolonged QT interval", "Peaked T waves", "Delta waves"], a: 0,
          why: "High extracellular calcium speeds phase 2 of the cardiac action potential, shortening the ST segment and therefore the QT. Hypocalcemia does the reverse: a long QT.",
          link: { href: PCD + "hypercalcemia-overview", label: "2.2 · Hypercalcemia presentation" },
        },
        {
          id: "w12", topic: "ca",
          q: "A BP cuff is inflated above systolic pressure for 3 minutes and her hand does this. Which statement is true?",
          img: IMG_R1 + "trousseau.jpg", alt: "Hand in carpal spasm: wrist flexed, fingers extended, thumb drawn into the palm.",
          options: ["Trousseau's sign — more specific for hypocalcemia than Chvostek's", "Chvostek's sign — the most specific bedside test for hypocalcemia", "Trousseau's sign — it indicates hypercalcemia", "A normal response to arm ischemia"], a: 0,
          why: "Carpal spasm (wrist and MCPs flexed, fingers extended, thumb in the palm — the \"obstetrician's hand\") = <b>Trousseau's</b>. More specific than Chvostek's (tap the facial nerve in front of the ear), which is positive in a fair number of people with normal calcium.",
          link: { href: PCD + "hypocalcemia-symptoms", label: "2.2 · Symptoms of hypocalcemia" },
        },

        /* ---- vitamin d & bone drugs */
        {
          id: "w13", topic: "vitd",
          q: "Which vitamin D level do you order to assess a patient's vitamin D <b>stores</b>?",
          options: ["25-OH vitamin D (calcidiol)", "1,25-(OH)₂ vitamin D (calcitriol)", "Cholecalciferol (D3)", "24,25-(OH)₂ vitamin D"], a: 0,
          why: "Calcidiol is long-lived (t½ ~19 days) and unregulated, so it reflects true stores. Calcitriol is defended by the PTH loop and can look normal even when stores are low.",
          link: { href: VD + "vitamin-d-metabolism", label: "Wk 1 · Vitamin D metabolism" },
        },
        {
          id: "w14", topic: "vitd",
          q: "Denosumab works by:",
          options: ["Binding RANKL, blocking osteoclast differentiation and activation", "Inhibiting the mevalonate pathway, driving osteoclasts to apoptosis", "Blocking sclerostin to increase bone formation", "Mimicking intermittent PTH to stimulate osteoblasts"], a: 0,
          why: "Denosumab = monoclonal antibody against <b>RANKL</b>, given SC. Mevalonate pathway = bisphosphonates; anti-sclerostin = romosozumab; intermittent PTH = teriparatide.",
          link: { href: VD + "rankl-inhibitor", label: "Wk 1 · Denosumab" },
        },
        {
          id: "w15", topic: "vitd",
          q: "PTH causes bone loss in hyperparathyroidism, yet teriparatide (rhPTH 1–34) <b>builds</b> bone. Why?",
          options: ["Short daily peaks favour formation; continuous exposure favours resorption", "Teriparatide blocks the PTH receptor", "Teriparatide is converted to calcitriol", "Teriparatide drives osteoclast apoptosis"], a: 0,
          why: "PTH's effect depends on the exposure pattern: continuous (hyperparathyroidism) → resorption; intermittent once-daily SC peaks → formation.",
          link: { href: VD + "anabolic-agents", label: "Wk 1 · Teriparatide & romosozumab" },
        },

        /* ---- osteomalacia, paget's & oi */
        {
          id: "w16", topic: "mbd",
          q: "Which lab pattern fits <b>osteomalacia</b>?",
          options: ["↓ calcium, ↓ phosphate, ↑ ALP, ↓ urine calcium", "Normal calcium, phosphate and ALP", "Normal calcium and phosphate, very high ALP", "↑ calcium, ↓ phosphate, ↑ PTH, ↑ urine calcium"], a: 0,
          why: "Osteomalacia: low Ca and PO₄, high ALP (osteoblasts busy making matrix that never mineralises), low urine Ca. All normal = osteoporosis. Isolated very high ALP = Paget's. High Ca with high PTH = primary hyperPTH.",
          link: { href: MBD + "osteomalacia-workup", label: "2.4 · Osteomalacia work-up" },
        },
        {
          id: "w17", topic: "mbd",
          q: "A 72-year-old man has an isolated ALP 3× the upper limit, <b>normal calcium and phosphate</b>, and a warm, bowed tibia. Best treatment?",
          options: ["IV zoledronate", "Teriparatide", "Denosumab", "Ergocalciferol 50,000 IU"], a: 0,
          why: "Paget's disease → <b>zoledronate</b>: potent IV bisphosphonate, first-line, durable remission. Teriparatide is contraindicated in Paget's (osteosarcoma risk). Denosumab isn't a Paget's drug. Vitamin D is for osteomalacia.",
          link: { href: MBD + "paget-treatment", label: "2.4 · Paget's treatment" },
        },
        {
          id: "w18", topic: "mbd",
          q: "Osteogenesis imperfecta is most often caused by mutations in:",
          options: ["COL1A1 / COL1A2 (type 1 collagen)", "FGFR3", "GNAS", "The calcium-sensing receptor"], a: 0,
          why: "85–90% are type 1 collagen mutations. Collagen is everywhere, so you get blue sclerae, hearing loss, dentinogenesis imperfecta and aortic root dilatation as well as the fractures.",
          link: { href: MBD + "oi", label: "2.4 · Osteogenesis imperfecta" },
        },
        {
          id: "w19", topic: "mbd",
          q: "A 23-year-old with celiac disease has falls and proximal muscle weakness. The arrows mark:",
          img: IMG_R1 + "q-pseudofractures.jpg", alt: "Pelvis and femur radiographs with arrows on lucent bands in the pubic ramus and femoral neck.",
          options: ["Pseudofractures (Looser zones) from vitamin D deficiency", "Atypical femoral fractures from a bisphosphonate", "Osteoporotic fragility fractures", "Paget's fissure fractures"], a: 0,
          why: "Transverse lucent bands of unmineralised osteoid, often bilateral = <b>Looser zones</b> of osteomalacia. Celiac (malabsorption) + proximal myopathy is the classic stem. Atypical femoral fractures are subtrochanteric, after years on a bisphosphonate.",
          link: { href: MBD + "osteomalacia-workup", label: "2.4 · Pseudofractures" },
        },

        /* ---- osteoporosis */
        {
          id: "w20", topic: "op",
          q: "A 68-year-old woman falls from standing height and breaks her <b>wrist</b>. T-score −1.8. Does she have osteoporosis?",
          options: ["Yes — a fragility fracture alone establishes it", "No — the T-score must be below −2.5", "Only if her 10-year fracture risk is > 20%", "Only if her Z-score is also low"], a: 0,
          why: "Three doors, any one is enough: a fragility fracture (not skull, hands, feet, ankles or real trauma), T-score &lt; −2.5, or 10-year risk &gt; 20%. A wrist fracture from standing height counts.",
          link: { href: OP + "definition", label: "2.5 · Three doors in" },
        },
        {
          id: "w21", topic: "op",
          q: "What does a markedly <b>low Z-score</b> suggest?",
          options: ["A secondary cause of bone loss", "Normal age-related bone loss", "Osteoporosis by the densitometric criterion", "Low fracture risk"], a: 0,
          why: "Z compares her with her own age and sex, so a low Z means she's losing bone faster than her peers → look for a secondary cause. T compares with a young adult and makes the diagnosis (&lt; −2.5).",
          link: { href: OP + "assessment", label: "2.5 · T vs Z score" },
        },
        {
          id: "w22", topic: "op",
          q: "70-year-old woman, T-score −2.9, no fractures, normal renal function. First-line drug?",
          options: ["An oral bisphosphonate (e.g. alendronate)", "Teriparatide", "Raloxifene", "Calcium and vitamin D alone"], a: 0,
          why: "A bisphosphonate first for almost everyone (2023 Osteoporosis Canada). Anabolic first only for severe or multiple vertebral fractures with T ≤ −2.5. Raloxifene is second line. Calcium and vitamin D are the floor, not a treatment.",
          link: { href: OP + "pharmacotherapy", label: "2.5 · Choosing a drug" },
        },
      ],

      /* ------------------------------------------------ FINAL · 44 */
      final: [
        /* ---- thyroid function */
        { id: "f1", topic: "thyroid",
          q: "A patient's thyrotoxicosis is confirmed, and the radioiodine uptake is LOW. Which causes fit this result? (select all that apply)",
          options: ["Subacute (post-viral) thyroiditis", "Postpartum thyroiditis", "Taking more levothyroxine than prescribed", "Graves disease", "Toxic multinodular goitre"],
          a: [0, 1, 2],
          why: "Low uptake means the gland isn't making new hormone: either a damaged gland is leaking it (thyroiditis) or it's coming from outside. Graves and toxic nodules make more hormone, so uptake is high.",
          link: { href: TDY + "thyrotoxicosis-differential", label: "2.1 · Mechanism decides everything" } },
        { id: "f2", topic: "thyroid",
          q: "Kevin, 45, has taken the same dose of levothyroxine for years. Since bariatric surgery he has lost 35 kg, and now has palpitations and poor sleep. TSH < 0.05 mU/L (0.35–5.0); free T4 26 pmol/L (10–23). What should you do?",
          options: ["Lower the levothyroxine dose and recheck TSH in 4–6 weeks", "Start methimazole", "Order a radioiodine uptake scan", "Keep the dose and recheck in 1 week", "Stop levothyroxine permanently"],
          a: 0,
          why: "Levothyroxine need is weight-based (about 1.5 mcg/kg/day), so after big weight loss the same dose over-replaces him. Reduce it, then wait 4–6 weeks before rechecking: the half-life is about a week.",
          link: { href: TDY + "hypo-treatment", label: "2.1 · Treating hypothyroidism" } },
        { id: "f3", topic: "thyroid",
          q: "Hailey, 36, is thyrotoxic. Which finding points specifically to Graves disease, rather than thyrotoxicosis from any cause?",
          options: ["Proptosis with double vision", "Lid lag", "A staring look with lid retraction", "Fine tremor", "Warm, moist skin"],
          a: 0,
          why: "Stare, lid retraction and lid lag are adrenergic and occur with any thyrotoxicosis. True orbitopathy (proptosis, periorbital swelling, diplopia, visual loss) and pretibial myxedema are specific to Graves.",
          link: { href: TDY + "narrowing", label: "2.1 · Eye signs" } },
        { id: "f4", topic: "thyroid",
          q: "Ruth, 47, has fatigue. TSH 7.8 mU/L (0.35–5.0), free T4 normal, anti-TPO negative. After a 3-month trial of levothyroxine her TSH is 2.1, but she feels exactly the same. What is the best next step?",
          options: ["Stop the levothyroxine and monitor her TSH", "Increase the dose until her symptoms improve", "Add liothyronine (T3)", "Continue levothyroxine for life", "Check reverse T3"],
          a: 0,
          why: "Subclinical hypothyroidism has no proven treatment benefit outside pregnancy. A therapeutic trial that normalises the TSH without helping tells you the symptoms weren't thyroid: stop it and watch for progression.",
          link: { href: TDY + "subclinical-hypo", label: "2.1 · How a therapeutic trial ends" } },
        { id: "f5", topic: "thyroid",
          q: "Felix, 52, is starting levothyroxine. He also takes a calcium supplement and an iron pill. Which instructions should you give? (select all that apply)",
          options: ["Take it on an empty stomach, an hour before or two hours after food", "Separate it from calcium and iron by at least 4 hours", "Any consistent time of day, including bedtime, is fine", "Take it with breakfast and the calcium so you don't forget", "Recheck the TSH in one week to adjust the dose"],
          a: [0, 1, 2],
          why: "Food, calcium, iron and magnesium bind levothyroxine and blunt absorption, so it needs separation; any consistent time works. With a one-week half-life, TSH is rechecked at 4–6 weeks.",
          link: { href: TDY + "hypo-treatment", label: "2.1 · Patient instructions" } },
        { id: "f6", topic: "thyroid",
          q: "Walter, 74, has a TSH of 0.02 mU/L (0.35–5.0) on two occasions, with normal free T4 and free T3. Which statements are correct? (select all that apply)",
          options: ["It is associated with atrial fibrillation", "It is associated with bone loss", "Treating is reasonable given his age and fully suppressed TSH", "It is harmless and needs no follow-up", "It is diagnosed by a high free T4"],
          a: [0, 1, 2],
          why: "Subclinical hyperthyroidism (low TSH, normal free hormones) isn't benign. Treat if the patient is older and/or the TSH is clearly suppressed; monitor if younger with a borderline TSH.",
          link: { href: TDY + "subclinical-hyper", label: "2.1 · Subclinical hyperthyroidism" } },

        /* ---- thyroid nodules & cancer */
        { id: "f7", topic: "nodules",
          q: "Elsie, 78, has a hard neck mass that has grown quickly over 6 weeks, with hoarseness and new noisy breathing. The mass is fixed to surrounding tissue. What is the most likely diagnosis?",
          options: ["Anaplastic thyroid carcinoma", "Papillary thyroid carcinoma", "Follicular adenoma", "Multinodular goitre", "Hashimoto thyroiditis"],
          a: 0,
          why: "A rapidly enlarging, invasive neck mass in an older patient is the anaplastic picture: a differentiated cancer that has lost its differentiation. It's usually unresectable and doesn't take up radioiodine.",
          link: { href: NOD + "aggressive", label: "2.3 · Anaplastic carcinoma" } },
        { id: "f8", topic: "nodules",
          q: "Ahmed, 55, had a hemithyroidectomy; pathology showed a follicular tumour with tumour inside a capsular vessel. A year later he has back pain, and a spine lesion is found. Which best explains this?",
          options: ["Follicular carcinoma spreads through the blood", "Papillary carcinoma spreads to bone through lymphatics", "Angioinvasion is a benign finding in follicular adenoma", "Medullary carcinoma has developed", "The lesion is unrelated, as thyroid cancers don't spread to bone"],
          a: 0,
          why: "Angioinvasion is what makes a follicular tumour a carcinoma, and it is also the route of spread: haematogenous, to bone and lung. Papillary carcinoma spreads by lymphatics to neck nodes.",
          link: { href: NOD + "follicular", label: "2.3 · Follicular carcinoma" } },
        { id: "f9", topic: "nodules",
          q: "Lena, 33, was diagnosed with Hashimoto thyroiditis. Before she became hypothyroid, she had a few weeks of palpitations with a low TSH. What is the best explanation?",
          options: ["Destruction of follicles released stored hormone", "She had Graves disease that turned into Hashimoto", "Her anti-TPO antibodies stimulated the TSH receptor", "A toxic adenoma developed", "Her TSH result was a lab error"],
          a: 0,
          why: "Immune destruction breaks open follicles and releases the colloid's preformed hormone, so early Hashimoto can look thyrotoxic before the gland fails. Anti-TPO antibodies block synthesis; it's Graves antibodies that stimulate the receptor.",
          link: { href: NOD + "hashimoto", label: "2.3 · Hashimoto thyroiditis" } },
        { id: "f10", topic: "nodules",
          q: "Tom, 39, has had a total thyroidectomy for medullary thyroid carcinoma. Which statements are correct? (select all that apply)",
          options: ["The tumour came from the parafollicular (C) cells", "Serum calcitonin is used to watch for recurrence", "His relatives may benefit from RET mutation testing", "Postoperative radioactive iodine is the main adjuvant treatment", "Thyroglobulin is the best marker for recurrence"],
          a: [0, 1, 2],
          why: "Medullary carcinoma comes from C cells, makes calcitonin (the tumour marker) and is linked to RET point mutations, which can be acted on in relatives. It isn't follicular, so it ignores iodine and doesn't make thyroglobulin.",
          link: { href: NOD + "aggressive", label: "2.3 · Medullary carcinoma" } },
        { id: "f11", topic: "nodules",
          q: "A thyroidectomy specimen from a patient with Graves disease shows hyperplastic follicle cells forming papillary projections into the follicles, with uniform round nuclei. What is the correct interpretation?",
          options: ["Diffuse hyperplasia from Graves; papillary cancer needs its nuclear features", "Papillary thyroid carcinoma arising in Graves disease", "Follicular carcinoma", "Hashimoto thyroiditis", "Anaplastic transformation"],
          a: 0,
          why: "Papillary architecture alone doesn't make papillary carcinoma: the diagnosis rests on nuclear features (grooves, clearing, inclusions). In Graves, the folds are a hyperplastic response without atypia.",
          link: { href: NOD + "hyperplasia", label: "2.3 · Graves disease" } },
        { id: "f12", topic: "nodules",
          q: "Which of the following is NOT a usual reason to operate on a multinodular goitre?",
          options: ["It is present but asymptomatic, stable in size and benign on FNA", "It compresses the trachea or esophagus", "It is growing over time", "Ultrasound or FNA shows worrisome features", "It is disfiguring"],
          a: 0,
          why: "Multinodular goitre is the commonest cause of nodules and is usually benign. Surgery is for symptoms, worrisome features, change in size or disfigurement.",
          link: { href: NOD + "hyperplasia", label: "2.3 · Multinodular goitre" } },

        /* ---- calcium & pth */
        {
          id: "f13", topic: "ca",
          q: "<p>65F, osteoporosis work-up.</p><p class=\"rv-labs\">Ca 2.73 mmol/L · albumin 45 g/L · phosphate 0.69 (low-normal) · PTH 14 pmol/L (ref 1.6–6.9) · 25-OH-D 70 nmol/L</p><p>Before calling this primary hyperparathyroidism, which test separates it from FHH?</p>",
          options: ["24-hour urine fractional excretion of calcium", "PTHrP", "Serum 1,25-(OH)₂ vitamin D", "Repeat albumin"], a: 0,
          why: "Corrected Ca = 2.73 + 0.02 × (40 − 45) = <b>2.63</b>, still high (the correction runs both ways). High PTH + low-normal PO₄ fits primary hyperPTH, but FHH also has a high or \"normal\" PTH. FeCa &gt; 0.02 = primary hyperPTH; &lt; 0.01 = FHH.",
          link: { href: PCD + "fhh-case", label: "2.2 · The lecture's own case" },
        },
        {
          id: "f14", topic: "ca",
          q: "The most common cause of primary hyperparathyroidism is:",
          options: ["A single parathyroid adenoma", "Four-gland hyperplasia", "Parathyroid carcinoma", "A MEN syndrome"], a: 0,
          why: "Adenoma ~<b>80%</b>. Then hyperplasia; carcinoma is rare; familial syndromes (MEN, hyperparathyroidism–jaw tumour) are a minority.",
          link: { href: PCD + "hypercalcemia-etiology", label: "2.2 · Etiology" },
        },
        {
          id: "f15", topic: "ca",
          q: "62-year-old smoker with a lung mass. Ca 3.1 mmol/L, <b>PTH suppressed</b>. Most likely mechanism?",
          options: ["Tumour PTHrP acting on the PTH receptor", "A parathyroid adenoma", "An inactivating CaSR mutation", "Thiazide-induced calcium retention"], a: 0,
          why: "PTH-independent hypercalcemia + tumour = humoral hypercalcemia of malignancy. <b>PTHrP</b> (lung, kidney, adult T-cell leukemia) activates the same receptor PTH does, so the parathyroids switch off. Malignancy + primary hyperPTH = &gt; 90% of hypercalcemia.",
          link: { href: PCD + "hypercalcemia-etiology", label: "2.2 · PTH-mediated vs independent" },
        },
        {
          id: "f16", topic: "ca",
          q: "Why does sarcoidosis cause hypercalcemia?",
          options: ["Granuloma macrophages make their own 1α-hydroxylase → calcitriol outside PTH control", "Granulomas secrete PTHrP", "Granulomas erode bone directly", "Sarcoid shifts the CaSR set-point"], a: 0,
          why: "Extra-renal <b>1α-hydroxylase</b> → excess calcitriol → more gut calcium absorption. Glucocorticoids suppress that enzyme, which is why prednisone is the cause-specific step here.",
          link: { href: PCD + "hypercalcemia-etiology", label: "2.2 · Minor causes" },
        },
        {
          id: "f17", topic: "ca",
          q: "Why is calcitonin added to IV zoledronate in severe hypercalcemia instead of being used alone?",
          options: ["It works within hours but loses effect within ~48 h; zoledronate takes 2–4 days", "It's more potent than zoledronate", "It prevents the hypocalcemia zoledronate causes", "It replaces the need for IV fluids"], a: 0,
          why: "Calcitonin = fast bridge with tachyphylaxis by 48 h. Zoledronate = definitive but slow. Fluids come first, always.",
          link: { href: PCD + "acute-hypercalcemia-tx", label: "2.2 · Acute treatment steps" },
        },
        {
          id: "f18", topic: "ca",
          q: "Asymptomatic primary hyperparathyroidism, age 64. Which finding <b>alone</b> is an indication for parathyroidectomy?",
          options: ["T-score −2.7 at the 1/3 radius", "Serum calcium 0.1 mmol/L above the upper limit", "Creatinine clearance 75 mL/min", "24-hour urine calcium 6 mmol/day"], a: 0,
          why: "Surgery if: Ca &gt; 0.25 above ULN · T &lt; −2.5 at spine, femoral neck, total hip or 1/3 radius · vertebral fracture · CrCl &lt; 60 · urine Ca &gt; 10 mmol/day with stone risk · stones or nephrocalcinosis · age &lt; 50.",
          link: { href: PCD + "primary-hpt-tx", label: "2.2 · Indications for surgery" },
        },
        {
          id: "f19", topic: "ca",
          q: "Mild primary hyperparathyroidism, being monitored. Which of her medications should be <b>stopped</b>?",
          options: ["Hydrochlorothiazide", "Furosemide", "Cinacalcet", "Alendronate"], a: 0,
          why: "Avoid <b>thiazides</b> (less renal calcium excretion) and <b>lithium</b> (shifts the CaSR set-point, raising PTH). Cinacalcet (a calcimimetic) and bisphosphonates are treatment options.",
          link: { href: PCD + "primary-hpt-tx", label: "2.2 · Treating primary hyperPTH" },
        },
        {
          id: "f20", topic: "ca",
          q: "Low calcium, high phosphate, <b>high PTH</b>, short stature, round face, and this hand. Which parent most likely passed on the GNAS mutation?",
          img: IMG_R1 + "aho-fist.jpg", alt: "Clenched fist with a dimple where the fourth knuckle should be (short fourth metacarpal).",
          options: ["Mother", "Father", "Either — imprinting doesn't matter", "Neither — it's always de novo"], a: 0,
          why: "Pseudohypoparathyroidism 1a. GNAS is imprinted in the renal tubule, where only the <b>maternal</b> copy works. Maternal mutation → PTH resistance. Paternal mutation → the same Albright phenotype (short 4th/5th metacarpals) with normal calcium = pseudopseudohypoparathyroidism.",
          link: { href: PCD + "pseudohypoparathyroidism", label: "2.2 · Pseudohypoparathyroidism" },
        },
        {
          id: "f21", topic: "ca",
          q: "Hypocalcemia in a patient with alcohol use disorder won't correct despite IV calcium gluconate. Next step?",
          options: ["Check and replace magnesium", "Switch to IV calcium chloride through a peripheral line", "Start calcitriol and wait", "Give IV zoledronate"], a: 0,
          why: "<b>Magnesium</b> is needed for PTH release and for PTH's receptor to signal. Calcium won't hold until Mg is replete. Calcium chloride is reserved for central lines (extravasation causes necrosis).",
          link: { href: PCD + "hypocalcemia-tx", label: "2.2 · Treating hypocalcemia" },
        },
        {
          id: "f22", topic: "ca",
          q: "Which lab pattern fits hypocalcemia from <b>vitamin D deficiency</b>?",
          options: ["↓ Ca, ↓ phosphate, ↑ PTH", "↓ Ca, ↑ phosphate, ↓ PTH", "↓ Ca, ↑ phosphate, ↑ PTH", "↓ Ca, normal phosphate, ↓ PTH"], a: 0,
          why: "Calcitriol absorbs both Ca and PO₄, so both fall, and the compensatory secondary hyperPTH wastes what phosphate is left. High PO₄ + low PTH = hypoparathyroidism. High PO₄ + high PTH = PTH resistance (PHP).",
          link: { href: PCD + "hypocalcemia-etiology", label: "2.2 · Why phosphate splits it" },
        },
        {
          id: "f23", topic: "ca",
          q: "PTH's direct action at the kidney is to:",
          options: ["↑ calcium reabsorption in the distal tubule and ↓ phosphate reabsorption", "↑ calcium and ↑ phosphate reabsorption", "↓ calcium reabsorption and ↑ phosphate reabsorption", "Nothing directly — it works only through vitamin D"], a: 0,
          why: "PTH raises calcium three ways: bone resorption, DCT reabsorption, and (via renal 1α-hydroxylase → calcitriol) gut absorption, while wasting phosphate. Calcitriol, by contrast, raises both Ca and PO₄.",
          link: { href: TP + "pth-actions", label: "Wk 1 · PTH's actions" },
        },

        // Vitamin D & bone drugs · 6

        /* ---- vitamin d & bone drugs */
        {
          id: "f24", topic: "vitd",
          q: "Advanced CKD with secondary hyperparathyroidism. Which vitamin D form works <b>without</b> kidney activation?",
          options: ["Calcitriol (1,25-(OH)₂D₃)", "Cholecalciferol (D3)", "Ergocalciferol (D2)", "Calcifediol (25-OH-D₃)"], a: 0,
          why: "Calcitriol is already active and skips both hydroxylations. D2 and D3 need liver then kidney. Calcifediol still needs the renal 1α step (it's used in stage 3–4 CKD with a low 25-OH-D).",
          link: { href: VD + "vitamin-d-metabolism", label: "Wk 1 · Forms of vitamin D" },
        },
        {
          id: "f25", topic: "vitd",
          q: "Which hormone raises <b>both</b> serum calcium and serum phosphate?",
          options: ["Calcitriol", "PTH", "Calcitonin", "PTHrP"], a: 0,
          why: "Calcitriol increases gut absorption and renal reabsorption of both. PTH (and PTHrP, on the same receptor) raises calcium but lowers phosphate.",
          link: { href: VD + "vitamin-d-actions", label: "Wk 1 · Vitamin D actions" },
        },
        {
          id: "f26", topic: "vitd",
          q: "Alendronate is contraindicated in which patient?",
          options: ["Creatinine clearance 25 mL/min", "Age 82", "A previous hip fracture", "Osteopenia on DXA"], a: 0,
          why: "Bisphosphonates: avoid with CrCl &lt; 30 or esophageal abnormalities. Oral doses go on an empty stomach because they bind dietary calcium.",
          link: { href: VD + "bisphosphonates", label: "Wk 1 · Bisphosphonates" },
        },
        {
          id: "f27", topic: "vitd",
          q: "78-year-old with osteoporosis and <b>CrCl 22 mL/min</b>. Calcium and 25-OH-D are normal. Which drug avoids the renal problem?",
          options: ["Denosumab", "Zoledronic acid", "Alendronate", "Teriparatide"], a: 0,
          why: "Denosumab isn't renally cleared. Bisphosphonates and teriparatide are both contraindicated at CrCl &lt; 30. Check calcium first: denosumab is contraindicated in hypocalcemia, and stopping it causes rebound bone loss.",
          link: { href: VD + "comparison", label: "Wk 1 · The classes compared" },
        },
        {
          id: "f28", topic: "vitd",
          q: "Which drug's distinctive warning is <b>cardiovascular events</b> (MI, stroke)?",
          options: ["Romosozumab", "Denosumab", "Teriparatide", "Risedronate"], a: 0,
          why: "Romosozumab: anti-sclerostin, SC monthly; raises formation and lowers resorption, but carries CV events, ONJ and atypical femoral fracture. Teriparatide's warning is osteosarcoma in rats (use ≤ 2 years).",
          link: { href: VD + "comparison", label: "Wk 1 · The classes compared" },
        },
        {
          id: "f29", topic: "vitd",
          q: "Teriparatide is contraindicated in which patient?",
          options: ["A 17-year-old with open epiphyses", "A 70-year-old with multiple vertebral fractures", "A woman with a T-score of −3.5", "A man on long-term glucocorticoids"], a: 0,
          why: "Baseline osteosarcoma risk: avoid with <b>open epiphyses</b>, Paget's disease and unexplained high ALP; also CrCl &lt; 30 and hypercalcemia. Severe vertebral osteoporosis is exactly when it's used.",
          link: { href: MBD + "paget-treatment", label: "2.4 · Why not teriparatide" },
        },

        // Osteomalacia, Paget's & OI · 8

        /* ---- osteomalacia, paget's & oi */
        {
          id: "f30", topic: "mbd",
          q: "Rickets vs osteomalacia: what decides which name applies?",
          options: ["Whether the growth plates are still open", "Whether calcium is low", "Whether the cause is dietary", "Whether pseudofractures are present"], a: 0,
          why: "Same mineralisation defect. Open growth plates → <b>rickets</b> (bowing at the growing ends). Closed → <b>osteomalacia</b> (pain, weakness, fractures).",
          link: { href: MBD + "osteomalacia", label: "2.4 · What osteomalacia is" },
        },
        {
          id: "f31", topic: "mbd",
          q: "Osteomalacia with a 25-OH vitamin D of <b>22 nmol/L</b>. Treatment?",
          options: ["50,000 IU ergocalciferol for 12 weeks, then 800–2000 IU daily", "800–2000 IU daily, recheck in 3 months", "IV zoledronate first, then vitamin D", "Calcium supplements alone"], a: 0,
          why: "&lt; 30 nmol/L → 50,000 IU ergocalciferol for 12 weeks, then 800–2000 IU daily. 30–75 → 800–2000 IU daily. Recheck in 3 months either way. Never a bisphosphonate first: it can drive calcium lower still.",
          link: { href: MBD + "osteomalacia-workup", label: "2.4 · Treatment table" },
        },
        {
          id: "f32", topic: "mbd",
          q: "How does phenytoin cause osteomalacia?",
          options: ["It induces hepatic enzymes that speed vitamin D catabolism", "It blocks renal 1α-hydroxylase", "It causes intestinal calcium malabsorption", "It inhibits PTH release"], a: 0,
          why: "The four routes to deficiency: (1) less vitamin D available, (2) liver disease (25-hydroxylation), (3) renal failure (1α-hydroxylation), (4) <b>anticonvulsant enzyme induction</b>.",
          link: { href: MBD + "vitamin-d", label: "2.4 · Four routes to deficiency" },
        },
        {
          id: "f33", topic: "mbd",
          q: "Known Paget's of the femur. New marked bone pain, a new lytic lesion and a <b>rising ALP</b>. The concern is:",
          options: ["Osteosarcoma", "Hypercalcemia of immobility", "High-output heart failure", "A pseudofracture"], a: 0,
          why: "<b>Osteosarcoma</b> in 1–3% of Paget's, signalled by marked pain, a new lytic lesion and a rising ALP. New pain in known Paget's is never dismissed.",
          link: { href: MBD + "paget-complications", label: "2.4 · Paget's complications" },
        },
        {
          id: "f34", topic: "mbd",
          q: "Why can extensive Paget's disease cause high-output heart failure?",
          options: ["Pagetic bone is highly vascular and acts as a low-resistance shunt", "Hypercalcemia shortens the QT", "Calcium deposits in the valves", "Expanded vertebrae compress the cord"], a: 0,
          why: "The same vascularity explains the warmth over the bone and the bleeding at surgery. Zoledronate lowers turnover and so lowers the vascularity.",
          link: { href: MBD + "paget-complications", label: "2.4 · Paget's complications" },
        },
        {
          id: "f35", topic: "mbd",
          q: "A 70-year-old with this skull film and a raised ALP has <b>no symptoms</b>. Should he be treated?",
          img: IMG_R1 + "q-paget-skull.jpg", alt: "Lateral and frontal skull radiographs: enlarged vault with patchy cotton-wool densities.",
          options: ["Yes — skull involvement is an indication to treat", "No — asymptomatic Paget's is never treated", "Only if his calcium is high", "Only with teriparatide"], a: 0,
          why: "Cotton-wool skull = Paget's. Treat asymptomatic active disease in the <b>skull, long bones, spine or bone next to a joint</b>, before surgery at a pagetic site, or with heart failure. Each prevents something irreversible: deafness, cord compression, OA, bleeding, high-output failure.",
          link: { href: MBD + "paget-treatment", label: "2.4 · Who to treat" },
        },
        {
          id: "f36", topic: "mbd",
          q: "17-year-old with OI type 1: five long-bone fractures in the last year, normal vitamin D, regular periods. Best treatment?",
          options: ["IV zoledronate", "Teriparatide", "Raloxifene", "Denosumab"], a: 0,
          why: "IV bisphosphonates are the mainstay, and &gt; 3 fractures a year is an indication. Teriparatide: open epiphyses (osteosarcoma). Raloxifene: postmenopausal only. Denosumab: not the mainstay, and stopping it causes rebound fractures.",
          link: { href: MBD + "oi-management", label: "2.4 · OI management" },
        },
        {
          id: "f37", topic: "mbd",
          q: "This patient has had many fractures since childhood. Why does she need a routine <b>echocardiogram</b>?",
          img: IMG_R1 + "blue-sclerae.jpg", alt: "Both eyes with distinctly blue sclerae.",
          options: ["Type 1 collagen in vessels → aortic root dilatation and valve insufficiency", "Bisphosphonates cause cardiomyopathy", "High-output failure from vascular bone", "Hypocalcemia prolongs the QT"], a: 0,
          why: "Blue sclerae (thin collagen lets the choroid show through) + fractures = OI. Collagen is in vessel walls too, so she gets an echo every 2 years, along with a hearing test, BMD and ECG.",
          link: { href: MBD + "oi", label: "2.4 · Why the aorta is involved" },
        },

        // Osteoporosis · 7

        /* ---- osteoporosis */
        {
          id: "f38", topic: "op",
          q: "Who meets criteria for a BMD scan?",
          options: ["A 66-year-old woman who currently smokes", "A 52-year-old woman with no risk factors", "A 60-year-old woman whose only risk factor is a BMI of 24", "A 45-year-old woman with no risk factors"], a: 0,
          why: "≥ 70: everyone. 65–69: one risk factor (current smoking counts). 50–64: a prior fracture or ≥ 2 risk factors. The BMI risk factor is &lt; 20, not 24.",
          link: { href: OP + "assessment", label: "2.5 · Who gets a scan" },
        },
        {
          id: "f39", topic: "op",
          q: "One year after a hip fracture, roughly what proportion of patients have died?",
          options: ["29%", "3%", "12%", "50%"], a: 0,
          why: "<b>29%</b> at one year. 40% can't walk independently and 80% can't do more than one IADL. Lifetime hip fracture risk over 50 is 12.1%.",
          link: { href: OP + "treatment-gap", label: "2.5 · What undertreatment costs" },
        },
        {
          id: "f40", topic: "op",
          q: "The osteoporosis treatment gap: after a fragility fracture, roughly how many patients are treated?",
          options: ["15% — vs ~80% on a beta blocker after an MI", "80% — the same as after an MI", "50%", "Nearly all"], a: 0,
          why: "A fracture is the MI of osteoporosis, but only <b>15%</b> are treated. The gap widened as fear of the rare harms (ONJ, atypical femoral fracture) grew.",
          link: { href: OP + "treatment-gap", label: "2.5 · The treatment gap" },
        },
        {
          id: "f41", topic: "op",
          q: "After 2 years of teriparatide for multiple vertebral fractures, what next?",
          options: ["Switch to an antiresorptive (e.g. a bisphosphonate or denosumab)", "Stop — the bone gained is permanent", "Continue teriparatide indefinitely", "Calcium and vitamin D only"], a: 0,
          why: "Anabolic therapy is never the endpoint: follow it with an <b>antiresorptive</b> or the gains are lost. Teriparatide is limited to ≤ 2 years anyway.",
          link: { href: OP + "pharmacotherapy", label: "2.5 · Treatment pathway" },
        },
        {
          id: "f42", topic: "op",
          q: "On alendronate for 6 years, she develops a dull ache in <b>both thighs</b>. Concern?",
          options: ["Atypical femoral fracture", "Osteonecrosis of the jaw", "Paget's disease", "Osteosarcoma"], a: 0,
          why: "Atypical femoral fracture: subtrochanteric, often with prodromal thigh or groin pain, often bilateral. Risk rises with duration, which is why drug holidays exist. ONJ is the jaw (exposed bone after an extraction).",
          link: { href: OP + "adverse", label: "2.5 · The two harms" },
        },
        {
          id: "f43", topic: "op",
          q: "A 60-year-old woman asks about calcium. What's her target, and when should she take a supplement?",
          options: ["1200 mg/day — supplement only if her diet falls short", "1000 mg/day — always supplement", "1200 mg/day — always supplement", "800 mg/day — diet only"], a: 0,
          why: "Women &gt; 50 and men &gt; 70: <b>1200 mg/day</b>; men 50–70: 1000 mg. If diet meets it, supplements don't prevent fractures. Vitamin D: 600 IU (51–70) or 800 IU (&gt; 70), with at least 400 IU as a supplement.",
          link: { href: OP + "lifestyle", label: "2.5 · Lifestyle first" },
        },
        {
          id: "f44", topic: "op",
          q: "Which exam finding suggests unrecognised <b>vertebral fractures</b>?",
          options: ["Rib-to-pelvis distance under 2 finger-breadths", "Occiput-to-wall distance under 5 cm", "Historical height loss of 2 cm", "Blue sclerae"], a: 0,
          why: "Thresholds: prospective height loss &gt; 2 cm, historical &gt; 6 cm, rib–pelvis &lt; 2 finger-breadths, occiput–wall &gt; 5 cm. All stand in for lost vertebral height.",
          link: { href: OP + "presentation", label: "2.5 · Physical signs" },
        },

        // HPG axis · 8
      ],
    },
  };
})();

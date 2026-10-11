/*
 * Endo 3 · Pituitary, Adrenal & Growth. Question bank for assets/js/review.js.
 * Questions were moved verbatim from the original day-based Reviews 1-3
 * (regrouped by system on 2026-10-08), written in the style of the P2 Elentra
 * weekly quizzes: named patients, labs with reference ranges, "what next",
 * select-all-that-apply (a is an array), twin vignettes. Facts come from the
 * site's lecture pages (linked on each question). Options shuffle when it runs.
 */
(function () {
  const U = "../../units/endocrinology/";
  const ADR = U + "week-3/adrenal-gland/index.html#";
  const PIT = U + "week-3/pituitary/index.html#";
  const ABN = U + "week-3/puberty-abnormalities/index.html#";
  const GRO = U + "week-3/growth-disorders/index.html#";

  window.REVIEW = {
    id: "review-endo-3-pituitary-adrenal-growth-v1",
    topics: [
      { id: "pit", label: "Pituitary", step: "pituitary" },
      { id: "adr", label: "Adrenal", step: "adrenal" },
      { id: "growth", label: "Growth & puberty", step: "growth" },
    ],
    quizzes: {
      /* ------------------------------------------------ WARM-UP · 11 */
      warmup: [
        /* ---- pituitary */
        {
          id: "w1", topic: "pit",
          q: "Michael, 50, has a pituitary macroadenoma with bitemporal field loss, fatigue and cold intolerance. Free T4 <b>6 pmol/L</b> (10–24), TSH <b>2.8 mIU/L</b> (0.3–4.2), 8 AM cortisol <b>70 nmol/L</b> (low). What is the best plan?",
          options: ["Start hydrocortisone first, then levothyroxine", "Start levothyroxine and recheck his TSH in 6 weeks", "No thyroid treatment, because his TSH is normal", "Start levothyroxine now and hydrocortisone only if he becomes unwell"],
          a: 0,
          why: "The TSH is <b>inappropriately normal</b> for a free T4 of 6, so this is central hypothyroidism, followed by free T4 rather than TSH. Cortisol must be replaced <b>first</b>: thyroid hormone alone can precipitate an adrenal crisis.",
          link: { href: PIT + "pit-management", label: "3.2 · Replacement" },
        },
        {
          id: "w2", topic: "pit",
          q: "Sofia, 27, has had no period for 6 months and has nipple discharge. Her pregnancy test is negative, TSH is normal, prolactin is <b>140 µg/L</b> (&lt; 25) and MRI shows a 7 mm pituitary adenoma. What is the most appropriate management?",
          options: ["Cabergoline", "Transsphenoidal surgery", "A combined oral contraceptive", "Repeat the MRI in a year without treatment"],
          a: 0,
          why: "A prolactinoma is the one pituitary tumour treated <b>medically first</b>: a dopamine agonist lowers the prolactin and shrinks the tumour. Cabergoline is better tolerated than bromocriptine. Surgery is for failure or intolerance.",
          link: { href: PIT + "prolactin-treatment", label: "3.2 · Prolactinoma treatment" },
        },
        {
          id: "w3", topic: "pit",
          q: "Dana, 30, has irregular periods and nipple discharge. Prolactin is <b>mildly raised</b>, her pregnancy test is negative, and TSH is <b>18 mIU/L</b> (0.3–5.0). What is the best next step?",
          options: ["Treat her hypothyroidism and recheck the prolactin", "Start cabergoline", "Order an urgent pituitary MRI", "Refer for transsphenoidal surgery"],
          a: 0,
          why: "A high TSH means <b>primary hypothyroidism</b>: low thyroid hormone drives TRH up, and TRH stimulates prolactin. Treating the thyroid may fix the prolactin without any tumour work-up.",
          link: { href: PIT + "prolactin-physiology", label: "3.2 · Prolactin" },
        },
        {
          id: "w4", topic: "pit",
          q: "Victor, 45, says his wedding ring no longer fits and gaps have appeared between his teeth. He was recently diagnosed with hypertension and type 2 diabetes. IGF-1 is three times the upper limit of normal. What is the next investigation?",
          options: ["Oral glucose tolerance test with growth hormone levels", "A random growth hormone level", "1 mg overnight dexamethasone suppression test", "Formal visual field testing"],
          a: 0,
          why: "IGF-1 is the screen; the <b>OGTT</b> confirms: glucose should suppress GH, and in acromegaly it doesn't. A random GH is unreliable because GH is pulsatile. MRI then localises the adenoma.",
          link: { href: PIT + "acromegaly-workup", label: "3.2 · Acromegaly work-up" },
        },

        /* ---- adrenal */
        {
          id: "w5", topic: "adr",
          q: "Helen, 41, has months of fatigue, weight loss and salt craving. Na <b>129</b> (135–145), K <b>5.8</b> (3.5–5.0), 8 AM cortisol <b>60 nmol/L</b> (low), ACTH <b>markedly elevated</b>. What is the most likely diagnosis?",
          options: ["Primary adrenal insufficiency (Addison's disease)", "Secondary adrenal insufficiency", "Primary hyperaldosteronism", "Syndrome of inappropriate ADH"],
          a: 0,
          why: "Low cortisol with a <b>high ACTH</b> means the gland itself has failed: <b>primary</b>. The high potassium fits, because aldosterone is lost too. In secondary disease ACTH is low and potassium is normal.",
          link: { href: ADR + "ai-labs", label: "3.1 · The screening labs" },
        },
        {
          id: "w6", topic: "adr",
          q: "Sam, 34, with known Addison's disease, has had gastroenteritis for two days and couldn't keep his tablets down. He arrives confused, with a BP of 78/40. Which of the following should be done now? (select all that apply)",
          options: ["Start IV access and give normal saline with dextrose", "Give IV hydrocortisone", "Check his glucose and electrolytes", "Wait for a cortisol result before giving any steroid", "Give him his usual oral hydrocortisone dose"],
          a: [0, 1, 2],
          why: "This is an <b>adrenal crisis</b>: fluids with dextrose, IV hydrocortisone and bloods, without waiting for a result. Oral tablets are useless while he's vomiting, which is how he got here.",
          link: { href: ADR + "ai-treatment", label: "3.1 · The adrenal crisis" },
        },
        {
          id: "w7", topic: "adr",
          q: "Carla, 46, has a BP of 168/102 on amlodipine, ramipril and hydrochlorothiazide. Potassium is <b>3.2</b> (3.5–5.0) and she has no edema. What is the most appropriate next investigation?",
          options: ["Aldosterone : renin ratio", "CT of the adrenal glands", "Renal artery Doppler ultrasound", "24-hour urine cortisol"],
          a: 0,
          why: "Hypertension resistant to three drugs with a low potassium suggests <b>primary hyperaldosteronism</b>. Screen with the <b>aldosterone : renin ratio</b>. Adrenal imaging comes only after the diagnosis is confirmed.",
          link: { href: ADR + "hyperaldo", label: "3.1 · When to consider it" },
        },
        {
          id: "w8", topic: "adr",
          q: "Raj, 38, has spells of pounding headache, palpitations and sweating. His plasma free metanephrines are markedly elevated and CT shows a 4 cm adrenal mass. Surgery is planned. What should be done first?",
          options: ["Start an alpha-blocker, then add a beta-blocker later if needed", "Start a beta-blocker to control his heart rate", "Arrange a CT-guided biopsy to confirm the diagnosis", "Start labetalol alone"],
          a: 0,
          why: "<b>Alpha first.</b> A beta-blocker on its own leaves alpha vasoconstriction unopposed and can cause a hypertensive crisis; labetalol acts mostly as a beta-blocker. A suspected pheochromocytoma is never biopsied.",
          link: { href: ADR + "pheo", label: "3.1 · Preoperative blockade" },
        },

        /* ---- growth & puberty */
        { id: "w9", topic: "growth",
          q: "Ethan, 8, is referred because his height is on the 3rd percentile. He has tracked along it since age 2, growing 5.5 cm a year. His mother is 155 cm and his father 168 cm. Bone age matches his chronological age. What is the most likely explanation?",
          options: ["Familial short stature", "Constitutional delay of growth and puberty", "Growth hormone deficiency", "Hypothyroidism", "Celiac disease"],
          a: 0,
          why: "His mid-parental height is (155 + 168 + 13) ÷ 2 ≈ 168 cm, a low target. A normal growth velocity means a normal variant, and a bone age equal to his real age points to familial short stature rather than constitutional delay.",
          link: { href: GRO + "variants", label: "3.5 · FSS vs constitutional delay" } },
        { id: "w10", topic: "growth",
          q: "Owen, 14½, has no signs of puberty (testes 2 mL each). He has always been on the 3rd percentile for height with a normal growth rate. His bone age is 12 years, and his father didn't start puberty until 16. He smells normally and has no other symptoms. What is the most likely diagnosis?",
          options: ["Constitutional delay of growth and puberty", "Klinefelter syndrome", "Kallmann syndrome", "Growth hormone deficiency", "Primary testicular failure"],
          a: 0,
          why: "Short but growing normally, a delayed bone age and a late-blooming parent: constitutional delay, the commonest cause of delayed puberty in boys. Growth is still available, so final height is normal.",
          link: { href: ABN + "delayed", label: "3.4 · The normal variant" } },
        { id: "w11", topic: "growth",
          q: "Leo, 6, has 4 months of pubic hair, acne and rapid growth. His bone age is advanced by 3 years. Both testes are 2 mL. Random LH is < 0.1 IU/L (pubertal > 0.3). Where is the testosterone most likely coming from?",
          options: ["Outside the testes, e.g. the adrenals (CAH) or an exogenous source", "A central (GnRH-dependent) early puberty", "A Leydig cell tumour", "Isolated premature pubarche", "A hypothalamic hamartoma"],
          a: 0,
          why: "Low LH with virilization is peripheral precocious puberty, and small testes mean they aren't the source: think CAH, an adrenal tumour or exogenous testosterone. A Leydig cell tumour enlarges one testis; benign pubarche doesn't advance the bone age.",
          link: { href: ABN + "central-peripheral", label: "3.4 · The testicle is the clue" } },
      ],

      /* ------------------------------------------------ FINAL · 22 */
      final: [
        /* ---- pituitary */
        {
          id: "f1", topic: "pit",
          q: "A large pituitary adenoma is pressing up on the optic chiasm. Which visual field defect would you expect, and why?",
          options: ["Bitemporal hemianopia, because the crossing nasal fibres are compressed", "Left homonymous hemianopia, because the optic tract is compressed", "A central scotoma, because the optic nerve is compressed", "A binasal hemianopia, because the temporal fibres are compressed"],
          a: 0,
          why: "The chiasm carries the <b>crossing nasal retinal fibres</b>, which see the <b>temporal fields</b>. Compress it and both temporal fields go.",
          link: { href: PIT + "mass-effect", label: "3.2 · Mass effect" },
        },
        {
          id: "f2", topic: "pit",
          q: "Greg, 60, has a 3 cm non-functioning pituitary mass. Prolactin is <b>45 µg/L</b> (&lt; 20), and LH, FSH, TSH and cortisol are all low. Which statement best explains his prolactin?",
          options: ["The mass compresses the stalk, so dopamine can no longer hold prolactin down", "The mass is a prolactinoma", "Low cortisol stimulates prolactin release", "Low LH and FSH remove the brake on prolactin"],
          a: 0,
          why: "Prolactin is held down by <b>dopamine</b> from the hypothalamus. Compress the stalk and the releasing hormones stop arriving (the others fall), but so does the dopamine, so prolactin rises <b>modestly</b>. A prolactinoma this size would give a far higher level.",
          link: { href: PIT + "prolactin-physiology", label: "3.2 · Dopamine is the brake" },
        },
        {
          id: "f3", topic: "pit",
          q: "Which of the following is NOT a cause of a raised prolactin?",
          options: ["Treatment with a dopamine agonist", "Pregnancy", "Primary hypothyroidism", "Metoclopramide"],
          a: 0,
          why: "Dopamine <b>agonists lower</b> prolactin; they're the treatment. Pregnancy, primary hypothyroidism (via TRH) and dopamine <em>antagonists</em> such as metoclopramide all raise it.",
          link: { href: PIT + "prolactin-causes", label: "3.2 · Causes of high prolactin" },
        },
        {
          id: "f4", topic: "pit",
          q: "Hannah, 33, takes haloperidol for schizophrenia. She has missed periods for 4 months and has nipple discharge, and her prolactin is raised. Which should be part of the initial work-up? (select all that apply)",
          options: ["A pregnancy test", "A TSH", "A review of her medications", "An IGF-1 level", "A 24-hour urine cortisol"],
          a: [0, 1, 2],
          why: "Exclude <b>pregnancy</b> and <b>primary hypothyroidism</b>, and look at her <b>drugs</b>: haloperidol is a dopamine antagonist and a classic cause. IGF-1 and urine cortisol test for other tumours.",
          link: { href: PIT + "prolactin-causes", label: "3.2 · The work-up" },
        },
        {
          id: "f5", topic: "pit",
          q: "Which statement best explains how a high prolactin causes amenorrhea?",
          options: ["Prolactin suppresses GnRH, so LH and FSH don't rise and the ovary isn't stimulated", "Prolactin directly destroys ovarian follicles", "Prolactin raises estrogen so high that ovulation stops", "Prolactin blocks the endometrium from responding to estrogen"],
          a: 0,
          why: "Prolactin inhibits <b>GnRH</b>, so LH and FSH stay low and estradiol falls: a <b>secondary</b> hypogonadism. The higher the prolactin, the further down the axis it shuts things off.",
          link: { href: PIT + "prolactin-clinical", label: "3.2 · The mechanism" },
        },
        {
          id: "f6", topic: "pit",
          q: "Daniel, 52, has headaches and bitemporal field loss. MRI shows a 3 cm pituitary mass and his prolactin is <b>several thousand µg/L</b>. What is the first-line treatment?",
          options: ["A dopamine agonist such as cabergoline", "Urgent transsphenoidal surgery", "Radiotherapy", "Observation with repeat visual fields"],
          a: 0,
          why: "A prolactin this high with a big mass is a <b>macroprolactinoma</b>, and a dopamine agonist is first-line <b>even with field loss</b>: it shrinks the tumour and the fields recover. Surgery is for failure or intolerance.",
          link: { href: PIT + "prolactin-treatment", label: "3.2 · Medicine before surgery" },
        },
        {
          id: "f7", topic: "pit",
          q: "Which of the following are true about acromegaly? (select all that apply)",
          options: ["Diabetes and hypertension are common complications", "Transsphenoidal surgery is the primary treatment", "IGF-1 is the screening test", "A random growth hormone level is the best screening test", "A dopamine agonist is the first-line treatment"],
          a: [0, 1, 2],
          why: "GH opposes insulin and drives cardiovascular disease, so <b>diabetes and hypertension</b> are common. <b>IGF-1</b> screens, and <b>surgery</b> is primary. Random GH is unreliable, and medicine-first is the prolactinoma rule.",
          link: { href: PIT + "acromegaly-workup", label: "3.2 · Acromegaly" },
        },
        {
          id: "f8", topic: "pit",
          q: "Rina, 39, has Cushing syndrome confirmed on two screening tests. Her plasma ACTH is <b>suppressed</b>. Where is the problem, and what imaging comes next?",
          options: ["The adrenal gland; adrenal CT", "The pituitary; pituitary MRI", "An ectopic ACTH-secreting tumour; CT of the chest", "The hypothalamus; brain MRI"],
          a: 0,
          why: "A <b>suppressed ACTH</b> means the adrenal is making cortisol on its own (ACTH-independent), so image the <b>adrenals</b>. A normal or high ACTH points to the pituitary or an ectopic source.",
          link: { href: PIT + "cushing-cause", label: "3.2 · Where is it coming from?" },
        },
        // Diabetes drugs & insulin (8)

        /* ---- adrenal */
        {
          id: "f9", topic: "adr",
          q: "Priya, 52, stopped long-term prednisone abruptly and now feels weak and dizzy. Na <b>131</b> (135–145), K <b>4.3</b> (3.5–5.0), morning cortisol <b>low</b>, ACTH <b>low</b>. Her skin is a normal colour. What is the most likely cause?",
          options: ["Secondary adrenal insufficiency from suppression of the axis", "Primary adrenal insufficiency", "Primary hyperaldosteronism", "Cushing syndrome"],
          a: 0,
          why: "Low cortisol with a <b>low ACTH</b> and a normal potassium is <b>secondary</b>: the steroids switched the axis off, and it takes time to recover. Aldosterone is spared, so there's no high potassium and no darkening of the skin.",
          link: { href: ADR + "ai-types", label: "3.1 · Primary vs secondary" },
        },
        {
          id: "f10", topic: "adr",
          q: "Grace, 45, is fatigued and is being tested for adrenal insufficiency as an outpatient. She is clinically stable and on no medications. Her 8 AM cortisol is <b>300 nmol/L</b> (the lab's indeterminate range). What is the next step?",
          options: ["A cosyntropin (ACTH) stimulation test", "Start hydrocortisone for adrenal insufficiency", "Reassure her that adrenal insufficiency is excluded", "Repeat a random cortisol at midnight"],
          a: 0,
          why: "A morning cortisol in the <b>indeterminate</b> range neither confirms nor excludes it, so ask the gland directly with a <b>cosyntropin stimulation test</b>. A midnight level tests the rhythm, which is for Cushing's.",
          link: { href: ADR + "ai-diagnosis", label: "3.1 · Cortisol first" },
        },
        {
          id: "f11", topic: "adr",
          q: "You are teaching Lucas, newly diagnosed with Addison's disease, how to stay safe. Which advice should you give?",
          options: ["All of the above", "Increase your hydrocortisone dose when you are sick with a fever", "Use your injectable hydrocortisone kit if you are vomiting", "Wear a medical alert identifier"],
          a: 0,
          why: "All three prevent a crisis: <b>stress dosing</b> when ill, an <b>injection</b> when tablets won't stay down, and a <b>medical alert</b> so others know. Prevention lives with the patient.",
          link: { href: ADR + "ai-treatment", label: "3.1 · Stress dosing and follow-up" },
        },
        {
          id: "f12", topic: "adr",
          q: "Which of the following are true about primary hyperaldosteronism? (select all that apply)",
          options: ["Renin is suppressed", "Potassium is often low", "A raised aldosterone : renin ratio still needs a confirmatory test", "Marked peripheral edema is typical", "Adrenal CT is the first test to order"],
          a: [0, 1, 2],
          why: "Aldosterone escapes renin control, so <b>renin is suppressed</b> and potassium is lost. The ratio is a <b>screen</b>, so confirm, then image. Aldosterone escape prevents edema, and imaging first is the classic error.",
          link: { href: ADR + "hyperaldo-workup", label: "3.1 · Screen, confirm, localise" },
        },
        {
          id: "f13", topic: "adr",
          q: "Nadia, 49, has resistant hypertension and a potassium of 3.3. Her aldosterone : renin ratio comes back <b>normal</b> while she is taking ramipril and hydrochlorothiazide. What is the best interpretation?",
          options: ["Her drugs raise renin, so the ratio may be falsely normal", "Her drugs suppress renin, so the ratio may be falsely high", "Antihypertensives don't affect the ratio", "A normal ratio rules out primary hyperaldosteronism"],
          a: 0,
          why: "Renin is the denominator. <b>ACE inhibitors, ARBs and diuretics raise renin</b>, which lowers the ratio and can give a <b>false negative</b>. Beta-blockers and NSAIDs suppress renin and give false positives.",
          link: { href: ADR + "hyperaldo-workup", label: "3.1 · Drugs that lie" },
        },
        {
          id: "f14", topic: "adr",
          q: "Nadia's primary hyperaldosteronism is confirmed with a saline suppression test. CT shows a 1 cm nodule in the left adrenal. What is the next step?",
          options: ["Adrenal vein sampling", "Left adrenalectomy", "Lifelong spironolactone, with no further testing", "Repeat the CT in 6 months"],
          a: 0,
          why: "A nodule on CT isn't proof that it's the source: non-functioning nodules are common. <b>Adrenal vein sampling</b> shows which side is making the aldosterone. Unilateral disease → adrenalectomy; bilateral → a mineralocorticoid receptor antagonist.",
          link: { href: ADR + "hyperaldo-workup", label: "3.1 · Localisation" },
        },
        {
          id: "f15", topic: "adr",
          q: "Joe, 61, has a 3 cm adrenal mass found on a CT done for kidney stones. Which investigations are appropriate? (select all that apply)",
          options: ["1 mg overnight dexamethasone suppression test", "Plasma metanephrines", "Blood pressure and potassium, with an aldosterone : renin ratio if indicated", "CT-guided biopsy of the mass", "No work-up, because it was found by chance"],
          a: [0, 1, 2],
          why: "Every incidentaloma is checked for <b>cortisol, catecholamine and aldosterone excess</b>, and its CT appearance is assessed for malignancy. <b>Never biopsy</b> an adrenal mass before pheochromocytoma has been excluded.",
          link: { href: ADR + "incidentaloma", label: "3.1 · The incidentaloma" },
        },
        {
          id: "f16", topic: "adr",
          q: "Linda, 48, on no medications, has easy bruising, trouble rising from a chair, new hypertension and new diabetes. Her 1 mg overnight dexamethasone suppression test shows that cortisol does not suppress. What is the next step?",
          options: ["A second screening test, such as a 24-hour urine cortisol or a late-night salivary cortisol", "An ACTH level to find the source", "A pituitary MRI", "An adrenal CT"],
          a: 0,
          why: "Cushing syndrome needs <b>two positive screening tests</b> before you look for the cause, because each test has false positives. Only then does ACTH decide whether to image the adrenal or the pituitary.",
          link: { href: ADR + "cushing-diagnosis", label: "3.1 · Diagnosing Cushing" },
        },
        // Pituitary (8)

        /* ---- growth & puberty */
        { id: "f17", topic: "growth",
          q: "Zoe, 11, has dropped from the 50th to the 10th percentile for height over 2 years, while her weight has stayed on the 75th. She has dry skin, constipation and brittle hair. Which cause is most likely?",
          options: ["Primary hypothyroidism", "Celiac disease", "Familial short stature", "Constitutional delay", "Anorexia nervosa"],
          a: 0,
          why: "Height falling off while weight is kept (the short, chubby child) is the endocrine pattern, and her symptoms fit hypothyroidism. In nutritional or chronic illness the weight falls first.",
          link: { href: GRO + "pattern", label: "3.5 · Read the weight line" } },
        { id: "f18", topic: "growth",
          q: "Ben, 6, has loose stools. His weight fell from the 50th to the 5th percentile over a year, and his height has now started to slip too. Which first investigations are appropriate? (select all that apply)",
          options: ["CBC, ESR and albumin", "Celiac screen (tTG)", "Renal panel", "Growth hormone stimulation tests", "Karyotype"],
          a: [0, 1, 2],
          why: "Weight falling first points to nutrition or chronic illness, so screen for those first (CBC, ESR, renal panel, albumin, calcium, phosphate, celiac antibodies). GH testing is for the endocrine pattern; a karyotype is routine in short girls.",
          link: { href: GRO + "evaluation", label: "3.5 · Evaluating a short child" } },
        { id: "f19", topic: "growth",
          q: "Ruby, 12, is referred for short stature (below the 3rd percentile) and has no breast development. No dysmorphic features were noticed. Her karyotype is 45,X. What should be arranged? (select all that apply)",
          options: ["Cardiac assessment for coarctation of the aorta", "Renal ultrasound", "TSH and a celiac screen", "Hearing assessment", "No further tests, since she has no other features"],
          a: [0, 1, 2, 3],
          why: "Turner syndrome brings congenital heart disease (especially coarctation), renal anomalies such as horseshoe kidney, autoimmune disease (thyroid, celiac, type 1 diabetes) and hearing problems. Many girls are found by short stature alone.",
          link: { href: GRO + "turner-features", label: "3.5 · The rest of Turner syndrome" } },
        { id: "f20", topic: "growth",
          q: "Jacob, 16, has no signs of puberty and testes of 2 mL. He says he has never been able to smell. LH and FSH are low and testosterone is low. What is the most likely diagnosis?",
          options: ["Kallmann syndrome", "Klinefelter syndrome", "Constitutional delay", "Anorchia", "Turner syndrome"],
          a: 0,
          why: "Low gonadotropins mean the brain isn't asking. GnRH neurons migrate with the olfactory nerves, so in Kallmann both fail: no puberty and no sense of smell.",
          link: { href: ABN + "secondary-hypogonadism", label: "3.4 · Why Kallmann can't smell" } },
        { id: "f21", topic: "growth",
          q: "Noah, 16, is tall for his family, has incomplete puberty with small testes, and has had learning and coordination difficulties. LH and FSH are high; testosterone is low-normal. What is the best next test?",
          options: ["Karyotype", "MRI of the pituitary", "Smell testing", "Bone age only, then observe", "Serum prolactin"],
          a: 0,
          why: "High gonadotropins mean the testes have failed (primary). Tall, small testes and learning difficulties suggest Klinefelter syndrome (47,XXY), which a karyotype diagnoses.",
          link: { href: ABN + "primary-hypogonadism", label: "3.4 · Klinefelter syndrome" } },
        { id: "f22", topic: "growth",
          q: "Sam, 7, has pubic hair, a growth spurt and an advanced bone age. Both testes are 6 mL. His LH is in the pubertal range. What is the most appropriate next step?",
          options: ["MRI of the head", "CT of the adrenal glands", "Reassure: it's usually idiopathic", "Measure 17-hydroxyprogesterone", "Ultrasound of the testes for a Leydig tumour"],
          a: 0,
          why: "Bilaterally enlarged testes with a pubertal LH is central precocious puberty. Unlike in girls, less than half of central cases in boys are idiopathic, so every boy needs a careful CNS assessment.",
          link: { href: ABN + "precocious-causes", label: "3.4 · Central causes" } },
      ],
    },
  };
})();

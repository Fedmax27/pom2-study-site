/* Week 2 · Endocrinology. Adapted from the class qbank (src = their id) unless null. */
(function () {
  const L = {
    tdy: "w2-thyroid-dysfunction",
    pth: "w2-parathyroid-calcium-disorders",
    nod: "w2-thyroid-nodule-pathology",
    mbd: "w2-metabolic-bone-disease",
    op: "w2-osteoporosis",
    hpg: "w2-hpg-axis",
    hist: "w2-gyn-histology-embryogenesis",
  };

  /* ---------------------------------------------------- 2.1 Thyroid dysfunction */
  qb(L.tdy, "#thyrotoxicosis-differential", ["weekly-endo-Q22", "Weekly quiz"],
    "A 43-year-old has 3 weeks of fatigue, cold intolerance and constipation. TSH 34 mIU/L (0.3–5.0), free T4 7 pmol/L (11–22). Eight weeks ago he had a sore throat with a tender lower neck, tremor, palpitations, loose stools and 5 lb weight loss, all of which settled with ibuprofen. Most likely diagnosis?",
    ["Subacute (de Quervain) thyroiditis", "Hashimoto thyroiditis", "Graves disease", "Toxic multinodular goitre", "Papillary thyroid carcinoma"],
    0,
    "A <b>painful, tender thyroid after a viral illness</b>, then a short thyrotoxic phase (stored hormone leaking out), then <b>hypothyroidism</b> as the damaged gland can't make hormone. That's the classic triphasic course of subacute thyroiditis, and most patients recover. Hashimoto is painless with no thyrotoxic lead-in; Graves and toxic nodules don't turn into hypothyroidism on their own.");

  qb(L.tdy, "#narrowing", ["weekly-endo-Q23", "Weekly quiz"],
    "A 64-year-old has 6 months of weight loss, tremor and palpitations. TSH 0.02, free T4 32 (11–22). 24-hour radioiodine uptake 45% (high), and the scan shows <b>several patchy hot areas</b>. Diagnosis?",
    ["Toxic multinodular goitre", "Graves disease", "Subacute thyroiditis", "Toxic adenoma", "Exogenous thyroid hormone"],
    0,
    "High uptake = the gland is <b>making</b> hormone. The pattern names the cause: <b>diffuse</b> → Graves; <b>one hot spot</b> (rest suppressed) → toxic adenoma; <b>several patchy spots</b> → toxic MNG (typical of older patients). Low uptake means leakage (thyroiditis) or hormone from a bottle.");

  qb(L.tdy, "#diagnostic-pathway", ["module-endo-Q99", "Module case"],
    "A 48-year-old has tremor and heat intolerance. The thyroid is mildly enlarged, more on the right, with no definite nodule, no tenderness and no eye signs. No family history of autoimmunity. TSH &lt; 0.01, FT4 28 (11–22), FT3 11.0 (3.5–6.5). What test do you order next?",
    ["Radioactive iodine uptake and scan", "Thyroid ultrasound", "Anti-TPO antibodies", "Pituitary MRI", "Fine needle aspiration"],
    0,
    "The labs already prove overt thyrotoxicosis; the question is <b>why</b>, and <b>RAI uptake and scan</b> is the best single test for that. Here you can't diagnose Graves clinically: the goitre is asymmetric, there are no eye signs, no family history, so autonomous nodular tissue is possible. Ultrasound describes structure, not function; anti-TPO is a Hashimoto marker; and a suppressed TSH rules out a pituitary cause.");

  qb(L.tdy, "#hyper-treatment", ["module-endo-Q102", "Module case"],
    "A 38-year-old has a tender thyroid and pain on swallowing 3 weeks after a cold. She has heat intolerance, tremor and bothersome palpitations; she is hemodynamically stable. What treatment?",
    ["Beta-blocker and an NSAID", "Methimazole, beta-blocker and an NSAID", "Beta-blocker until radioactive iodine ablation", "Total thyroidectomy", "No treatment"],
    0,
    "Subacute thyroiditis is a <b>leakage</b> thyrotoxicosis: the gland releases preformed hormone, it isn't making new hormone, so <b>thionamides do nothing</b> and RAI wouldn't even be taken up. Treatment is supportive: <b>beta-blocker</b> for adrenergic symptoms, <b>NSAID</b> for pain (prednisone if severe). Then watch for a hypothyroid phase.");

  qb(L.tdy, "#function-tests", ["module-endo-Q103", "Module case"],
    "A healthy 24-year-old's fitness tracker shows a resting heart rate in the 50s. His mother has hypothyroidism and he's worried. TSH is 2.0 (0.3–4.5). He has no pituitary symptoms. What do you suggest?",
    ["Reassure; periodic TSH checks given his family history", "Anti-TPO antibodies", "Thyroid ultrasound", "Free T4 to rule out central hypothyroidism", "A trial of low-dose levothyroxine"],
    0,
    "A <b>normal TSH rules out primary thyroid dysfunction</b>, and that ends the work-up in someone without pituitary disease. His family history justifies an occasional TSH. Anti-TPO changes nothing in a euthyroid person; ultrasound answers a structural question he doesn't have. Central hypothyroidism is the exception to 'stop at a normal TSH', but only when there's a reason to suspect the pituitary.");

  qb(L.tdy, "#hypo-differential", ["hippo-endo-Q26", "HippoNotes"],
    "A 50-year-old has bradycardia, cold intolerance and weight gain. TSH high, free T4 low. No previous thyroid disease, surgery, radioiodine or neck radiation, no lithium or amiodarone, and no features of pituitary disease. What next?",
    ["Diagnose Hashimoto thyroiditis and start levothyroxine", "Order anti-TPO and anti-thyroglobulin antibodies", "Order a radioactive iodine uptake scan", "Order a free T3", "Order a thyroid ultrasound"],
    0,
    "Once past treatment, drugs and pituitary disease are excluded, primary hypothyroidism in Canada is <b>Hashimoto until proven otherwise</b>: treat it. Antibodies are sensitive but almost never change management; free T3 isn't needed for hypothyroidism; RAI scans are for working up a <i>low</i> TSH; ultrasound only if there's a nodule.");

  qb(L.tdy, "#hypo-treatment", ["reviews-endo-Q45", "Written from review slides"],
    "A 79-year-old with stable angina and a previous MI has primary hypothyroidism: TSH 24, free T4 low. How should levothyroxine be started?",
    ["Low dose, titrated up slowly, with TSH rechecked every 4–6 weeks",
     "Full replacement (~1.6 mcg/kg/day) from day one",
     "Liothyronine (T3) for a faster response",
     "Hold off until TSH exceeds 50",
     "Full dose with weekly TSH checks"],
    0,
    "Full replacement is about 1.5–1.6 mcg/kg/day for a healthy young adult, but in the <b>elderly or with coronary disease, start low and go slow</b>: a sudden rise in metabolic demand can provoke ischemia. Levothyroxine's half-life is about a week, so <b>steady state takes ~6 weeks</b>: recheck TSH at 4–6 weeks, not sooner.");

  qb(L.tdy, "#thyrotoxicosis-differential", ["new-endo-Q74", "DSSG cases"],
    "A 70-year-old has thyrotoxicosis with a suppressed TSH. Which history items are worth asking about specifically because they can cause it? <i>(Select all that apply.)</i>",
    ["Amiodarone, even if stopped months ago", "CT scan with iodinated contrast in the past few weeks", "'Natural' thyroid or glandular supplements bought online", "Recent pregnancy or delivery", "Lithium for 10 years"],
    [0, 1, 2, 3],
    "Causes of thyrotoxicosis sort into <b>synthesis</b> (Graves, toxic adenoma, MNG), <b>leakage</b> (postpartum, subacute, painless thyroiditis) and <b>exogenous</b> hormone (over-replacement, unregulated animal-thyroid supplements). An <b>iodine load</b> (contrast, amiodarone, which lingers for months) can trigger hyperthyroidism in a nodular gland or cause thyroiditis. Lithium mostly causes <i>hypo</i>thyroidism.");

  qb(L.tdy, "#thyrotoxicosis-differential", ["new-endo-Q84", "DSSG cases"],
    "A 26-year-old, 10 weeks postpartum, had palpitations and tremor that are already improving. Her thyroid is barely enlarged and non-tender; TSH is suppressed with a high-normal free T4. You diagnose postpartum thyroiditis. What follow-up is needed?",
    ["Check TSH over the coming months for a hypothyroid phase",
     "None once the palpitations stop",
     "Monthly free T4 and T3 indefinitely",
     "Repeat radioiodine scans",
     "Start methimazole to prevent recurrence"],
    0,
    "Thyroiditis leaks a finite store of hormone, so it <b>burns out → hypothyroid phase</b> (sometimes permanent). Follow <b>TSH</b> to catch it; that phase arrives months later, when fatigue gets blamed on the new baby. Methimazole has nothing to block. Note: RAI scans are avoided while breastfeeding.");

  qb(L.tdy, "#function-tests", ["new-endo-Q87", "DSSG cases"],
    "A 68-year-old in the ICU has TSH 1.0 (0.3–4.5), free T4 8.0 (9–22), free T3 1.5 (3.5–6.5). The resident calls it non-thyroidal illness. What other diagnosis must you consider?",
    ["Central hypothyroidism", "Primary hypothyroidism", "Subclinical hypothyroidism", "Subacute thyroiditis", "Thyroid hormone resistance"],
    0,
    "A pituitary looking at a free T4 of 8 should be pumping out TSH; a 'normal' 1.0 is <b>inappropriately normal</b>. In central disease <b>TSH moves with the hormone (or not at all)</b>. Sick euthyroid can look identical, so correlate with pituitary history and recheck after recovery. Primary hypothyroidism needs a high TSH.");

  qb(L.tdy, "#hyper-treatment", ["new-endo-Q190", "Weekly Rounds"],
    "Two weeks after abdominal surgery, a 57-year-old with 6 months of weight loss despite a big appetite is confused, febrile to 39.5 °C, HR 132, BP 110/52, SpO₂ 88%. He has a symmetric non-tender goitre and brisk reflexes. Labs are pending. What should happen now in the ED?",
    ["Oxygen, IV fluids, cooling and a beta-blocker; look for and treat the precipitant",
     "Start levothyroxine",
     "Antipyretics and observation until the thyroid results return",
     "Emergency total thyroidectomy",
     "Radioactive iodine ablation"],
    0,
    "This is <b>thyroid storm</b> until proven otherwise (fever, tachycardia, delirium, GI symptoms) in someone with untreated Graves features, precipitated by surgery or infection. Don't wait for the TSH: supportive care plus a <b>beta-blocker</b> now, cultures, and treat the trigger. Definitive blocking therapy follows (a thionamide, then iodine, plus steroids). Surgery and RAI aren't emergency treatments.");

  /* ---------------------------------------------------- 2.2 Parathyroid & calcium */
  qb(L.pth, "#hypocalcemia-etiology", ["new-endo-Q93", "DSSG cases"],
    "Five days after total thyroidectomy for Graves, a 47-year-old has perioral tingling and a seizure. Calcium 1.71 mmol/L (2.12–2.62), albumin 40. Which tests pin down the cause?",
    ["PTH, phosphate and magnesium", "Calcitonin and thyroglobulin", "24-hour urine calcium", "TSH and free T4", "PTH alone"],
    0,
    "In hypocalcemia, <b>phosphate is the branch point</b>: PTH <i>deficiency</i> → low Ca, <b>high phosphate</b>, low PTH (expected here: post-surgical hypoparathyroidism); PTH <i>resistance</i> → high phosphate, high PTH; vitamin D problems → <b>low phosphate</b>, high PTH. <b>Magnesium</b> is mandatory: low (or very high) Mg causes functional hypoparathyroidism, and calcium won't correct until Mg does.");

  qb(L.pth, "#hypocalcemia-tx", ["new-endo-Q95", "DSSG cases"],
    "Six months after thyroidectomy, she has permanent hypoparathyroidism. Which long-term regimen is right?",
    ["Calcitriol, oral calcium, a thiazide, and levothyroxine",
     "Cholecalciferol alone",
     "A loop diuretic to raise calcium",
     "Recombinant PTH as standard first line",
     "Calcium alone"],
    0,
    "Without PTH she can't activate vitamin D, so give it <b>already activated: calcitriol</b>, plus elemental calcium. A <b>thiazide</b> reduces urinary calcium and stone risk (the reverse of its role in hypercalcemia, where it's avoided); loop diuretics lower calcium. She has no thyroid, so she needs levothyroxine too. Aim for low-normal calcium to limit hypercalciuria.");

  /* ---------------------------------------------------- 2.3 Thyroid nodules */
  qb(L.nod, "#management", ["module-endo-Q87", "Module case"],
    "Akio, 41, has a 2 cm palpable, enlarging thyroid nodule. TSH is normal. His father had thyroid cancer. What is the next step?",
    ["Thyroid ultrasound", "Radioactive iodine scan", "Needle core biopsy", "CT of the neck", "Re-examine in 2 months"],
    0,
    "Sequence: <b>TSH first</b> → if low, RAI scan (a hot nodule is essentially never cancer); if normal or high, <b>ultrasound with TI-RADS</b> → FNA if size and score meet the threshold. Enlargement and family history mean you don't just watch. Core biopsy (bleeding, seeding) and CT (can't guide sampling, costly) aren't first line.");

  qb(L.nod, "#management", ["reviews-endo-Q46", "Written from review slides"],
    "A 46-year-old has a 2.5 cm thyroid nodule and mild heat intolerance. TSH 0.05 mIU/L. What is the most appropriate next investigation?",
    ["Radioactive iodine uptake and scan", "Ultrasound-guided FNA", "Hemithyroidectomy", "Serum calcitonin", "Repeat TSH in 6 months"],
    0,
    "A <b>low TSH diverts the pathway to a radioiodine scan</b>. A hot (autonomous) nodule is benign: treat the hyperthyroidism (often with RAI), no FNA. A cold nodule goes back to ultrasound and TI-RADS. Biopsying a hot nodule is the error this sequence prevents (its cytology can look worrying).");

  qb(L.nod, "#nodule-framework", ["module-endo-Q110", "Elentra module"],
    "An ultrasound report gives a nodule a TI-RADS category. Which features feed into the TI-RADS <b>score</b>?",
    ["Composition, echogenicity, shape, margin and echogenic foci, but not size",
     "Size and margin only",
     "Composition and size only",
     "Vascularity and size",
     "Patient age and family history"],
    0,
    "TI-RADS scores what the nodule <b>looks like</b>: composition, echogenicity, taller-than-wide shape, margins, echogenic foci (microcalcifications). <b>Size enters afterwards</b>, as the threshold for whether that category gets FNA or follow-up. A small TR5 can need biopsy while a large TR3 is followed.");

  qb(L.nod, "#management", ["new-endo-Q89", "DSSG cases"],
    "A 35-year-old's enlarging nodule is reported as '2.3 cm solid hypoechoic, normal shape and margins, no microcalcifications: ACR TI-RADS 4.' What do you recommend?",
    ["Fine needle aspiration", "Repeat ultrasound in 12 months", "Clinical follow-up only", "Total thyroidectomy", "Radioactive iodine scan"],
    0,
    "TI-RADS sets biopsy thresholds by risk <b>and</b> size: TR3 FNA ≥ 2.5 cm; <b>TR4 FNA ≥ 1.5 cm</b>; TR5 ≥ 1.0 cm (higher suspicion, smaller threshold). She's TR4 at 2.3 cm. The reassuring features are already counted in the score, so don't count them twice. TI-RADS decides whether to sample, not whether to operate.");

  qb(L.nod, "#nodule-framework", ["module-endo-Q89", "Module case"],
    "Kiara has a 2.7 cm, mildly symptomatic nodule with normal TSH. Ultrasound: mixed cystic nodule, TI-RADS 2. FNA drains clear fluid and the nodule disappears; it hasn't come back at follow-up. Most likely diagnosis?",
    ["Benign cyst", "Cystic papillary carcinoma", "Follicular adenoma", "Thyroid abscess", "Lymphoma"],
    0,
    "Clear fluid, complete collapse, low-suspicion ultrasound and <b>no recurrence</b> = benign cyst. Cystic papillary carcinoma leaves a solid component and grows back; an adenoma leaves solid tissue; an abscess yields pus with inflammation; lymphoma is firm and solid.");

  qb(L.nod, "#nodule-framework", ["module-endo-Q189", "Module"],
    "Which are <b>common</b> causes of a thyroid nodule or mass? <i>(Select all that apply.)</i>",
    ["Nodular hyperplasia (multinodular goitre)", "Cyst", "Follicular adenoma", "Hashimoto thyroiditis (nodules and pseudonodules)", "Carcinoma", "Lymphoma"],
    [0, 1, 2, 3],
    "Most nodules are benign: <b>hyperplasia, cysts, adenomas, Hashimoto</b>. Carcinoma (papillary, follicular, poorly differentiated, medullary) belongs in the 'life-threatening' column and anaplastic carcinoma and lymphoma in the 'urgent' column: important, but not common.");

  qb(L.nod, "#follicular", ["new-endo-Q90", "DSSG cases"],
    "FNA of a growing 2.3 cm nodule reads 'Bethesda IV: follicular neoplasm'. What does that mean and what next?",
    ["Indeterminate (roughly a quarter to a third malignant); molecular testing or diagnostic hemithyroidectomy",
     "Benign; discharge",
     "Non-diagnostic; repeat the FNA",
     "Malignant; total thyroidectomy and neck dissection",
     "Medullary carcinoma; check calcitonin"],
    0,
    "Bethesda IV is <b>indeterminate</b>. Follicular adenoma and carcinoma have <b>identical nuclei</b>; only <b>capsular or vascular invasion</b> separates them, and that is only visible in the resected specimen, so repeating the FNA can't settle it. Options are molecular testing or a <b>diagnostic hemithyroidectomy</b> (which also cures an adenoma). Papillary carcinoma is the opposite: its nuclei <i>are</i> the diagnosis on FNA.");

  qb(L.nod, "#papillary", ["module-endo-Q86", "Module case"],
    "A patient's sister just had a hemithyroidectomy showing papillary thyroid carcinoma. She asks about the prognosis. What do you say?",
    ["It's a cancer, but it usually has an excellent prognosis",
     "It's benign and she's cured",
     "It's aggressive with a poor prognosis",
     "It has a good prognosis only if she has radioactive iodine",
     "It has a good prognosis only if she has a completion thyroidectomy"],
    0,
    "Papillary carcinoma is the most common thyroid cancer and usually indolent (~93% 10-year survival). Whether she needs completion surgery or RAI depends on the <b>pathology report and ATA risk category</b>, which you don't have, so don't attach conditions to the prognosis. Anaplastic carcinoma is the one with a dismal outlook.");

  qb(L.nod, "#management", ["new-endo-Q100", "CBL cases"],
    "After surgery for papillary thyroid cancer, what decides whether a patient gets radioactive iodine?",
    ["Her ATA recurrence-risk category (size, extrathyroidal extension, nodes, histology, completeness of resection, metastases)",
     "Everyone with papillary cancer gets RAI",
     "No one with papillary cancer needs RAI",
     "Only whether her TSH is suppressed",
     "Her serum calcitonin"],
    0,
    "RAI is <b>risk-adapted</b>: low risk (small, intrathyroidal, no aggressive features) generally no RAI; intermediate (nodes, minor extension, aggressive histology) generally favoured; high (gross extrathyroidal extension, incomplete resection, distant metastases) recommended. Calcitonin is the medullary marker; thyroglobulin is the follow-up marker for differentiated cancer.");

  qb(L.nod, "#aggressive", ["new-endo-Q106", "CBL cases"],
    "Which presentations of a thyroid mass are <b>urgent</b>? <i>(Select all that apply.)</i>",
    ["Shortness of breath or stridor", "Difficulty swallowing", "Unexplained persistent pain", "Symptoms of metastases (bone pain, cough)", "Heat intolerance and tremor"],
    [0, 1, 2, 3],
    "Thyroid cancers are usually <b>euthyroid</b>, so urgency is <b>structural or metastatic</b>: airway compression, dysphagia, pain, distant disease, often with rapid growth (anaplastic carcinoma, lymphoma). Thyrotoxic symptoms point to function, not malignancy.");

  qb(L.nod, "#aggressive", ["new-endo-Q108", "CBL cases"],
    "A woman in her late 50s has a rapidly growing neck mass. Ultrasound shows a large thyroid mass with abnormal nodes. The differential is lymphoma vs anaplastic vs poorly differentiated carcinoma. What is the best next step?",
    ["Tissue sampling (FNA or core) with flow cytometry, and ask the lab to rush it",
     "Repeat ultrasound in 6 weeks",
     "Start radiotherapy empirically",
     "Total thyroidectomy before any sampling",
     "Levothyroxine suppression and review in 3 months"],
    0,
    "Rapid growth is an urgent presentation. You need tissue fast, and because <b>lymphoma</b> is on the list (treated with chemotherapy, not surgery), the sample needs <b>flow cytometry</b>. Here a core biopsy is acceptable. Talk to the pathologist and rush it: anaplastic cancer can outgrow a slow work-up.");

  /* ---------------------------------------------------- 2.4 Metabolic bone disease */
  qb(L.mbd, "#paget-complications", ["hippo-endo-Q34", "HippoNotes"],
    "Which statement about metabolic bone disease is correct?",
    ["Hearing loss can occur in both Paget disease and osteogenesis imperfecta",
     "Paget disease is a mineralization defect; osteomalacia is a remodelling defect",
     "A 'cotton-wool' skull is typical of osteogenesis imperfecta",
     "Teriparatide is a good treatment for Paget disease",
     "Osteomalacia has a normal calcium, phosphate and ALP"],
    0,
    "Skull involvement in <b>Paget</b> (nerve compression, ossicles) and abnormal ossicles in <b>OI</b> both cause hearing loss. Osteomalacia is the <b>mineralization</b> defect (low Ca and PO₄, high ALP); Paget is disordered <b>remodelling</b> (cotton-wool skull, very high ALP, normal Ca and PO₄). Bone-forming drugs are contraindicated in Paget's.");

  /* ---------------------------------------------------- 2.5 Osteoporosis */
  qb(L.op, "#pharmacotherapy", ["workbook-endo-Q13", "Workbook · Endocrine"],
    "A 75-year-old has had a hip fracture and a wrist fracture; secondary causes are excluded. Which drugs have been shown to reduce <b>hip</b> fracture risk? <i>(Select all that apply.)</i>",
    ["Risedronate", "Zoledronic acid", "Denosumab", "Raloxifene", "Teriparatide"],
    [0, 1, 2],
    "Risedronate, alendronate, zoledronic acid and denosumab (and estrogen) have <b>hip</b> fracture data. <b>Raloxifene and teriparatide don't</b> (raloxifene reduces vertebral fractures only). With a hip fracture behind her, choose an agent proven at the hip.");

  qb(L.op, "#assessment", ["module-endo-Q92", "Slide concept check"],
    "Which of these is <b>not</b> an input to the FRAX fracture-risk calculator?",
    ["Parental history of vertebral fracture", "Personal history of fragility fracture", "Current smoking", "Alcohol ≥ 3 units/day", "Height and weight"],
    0,
    "FRAX asks about a parent's <b>hip</b> fracture, not vertebral. Other inputs: age, sex, BMI, prior fracture, smoking, alcohol, glucocorticoids, rheumatoid arthritis, secondary osteoporosis, and (optionally) femoral neck BMD. Classic trick: one word swapped in a real risk factor.");

  qb(L.op, "#definition", ["new-endo-Q111", "CBL cases"],
    "A 69-year-old has a lumbar spine T-score of −2.7 and a femoral neck T-score of −2.4. No fractures. Does she have osteoporosis?",
    ["Yes: the lowest site counts, and her spine is below −2.5",
     "No: her femoral neck is above −2.5",
     "No: she hasn't had a fragility fracture",
     "Only if her 10-year fracture risk is above 20%",
     "Only if her Z-score is also low"],
    0,
    "Three independent routes to the diagnosis: <b>T-score ≤ −2.5 at any site</b>, a <b>fragility fracture</b>, or <b>10-year risk > 20%</b>. Any one is enough. A normal-ish hip doesn't cancel an osteoporotic spine. The Z-score (age-matched) flags secondary causes; it isn't the diagnostic number in postmenopausal women.");

  qb(L.op, "#pharmacotherapy", ["new-endo-Q114", "CBL cases"],
    "Same patient, 2 years later: spine T −2.9, femoral neck −2.7, FRAX major fracture risk 15%, hip 4.4%. Still no fractures, healthy, good calcium and vitamin D. Treat?",
    ["It's a shared decision: she's in the moderate-risk band with no fragility fracture",
     "Must treat: her 10-year risk went up from 12% to 15%",
     "Must treat: any T-score below −2.5 mandates drug therapy",
     "Never treat at moderate risk",
     "Treat only once her risk exceeds 30%"],
    0,
    "Risk bands: &lt; 10% low, <b>10–20% moderate</b>, > 20% high. In the moderate band, treatment is <b>individualized</b> and is strongly favoured by a <b>hip or vertebral fracture or > 2 other fragility fractures</b> (especially within 2 years). She has none, so deferring is reasonable. (High-risk patients clearly get treated.)");

  qb(L.op, "#adverse", ["new-endo-Q116", "CBL cases"],
    "Three months into oral alendronate, a 70-year-old has intolerable upper GI pain despite taking it correctly. What are good alternatives?",
    ["Denosumab (SC every 6 months) or IV zoledronic acid (yearly)",
     "Halve the alendronate dose",
     "Stop all osteoporosis treatment",
     "Raloxifene",
     "Teriparatide as first-line replacement"],
    0,
    "The problem is the <b>oral route</b> (esophagus, stomach), not the bisphosphonate class. Bypass the gut with <b>IV zoledronic acid</b> (still a bisphosphonate) or <b>SC denosumab</b>. Anabolic agents are reserved for very high risk or treatment failure.");

  qb(L.op, "#pharmacotherapy", ["module-endo-Q94", "Module case"],
    "A woman took denosumab on schedule for 5 years and has now broken her hip anyway. She has no contraindications. Best option?",
    ["Switch to a bone-forming agent (e.g., romosozumab or teriparatide), then follow with an antiresorptive",
     "Continue denosumab",
     "Switch to risedronate",
     "Switch to raloxifene",
     "Stop all treatment"],
    0,
    "A fracture <b>despite adherent antiresorptive therapy</b> is treatment failure, one of the indications for <b>anabolic</b> therapy (with recent severe vertebral fracture, or > 2 vertebral fractures with a T-score below −2.5). Raloxifene has no hip data. Anabolic courses must be <b>followed by an antiresorptive</b> (after 1 year of romosozumab, 2 of teriparatide) or the gain is lost; stopping denosumab without follow-on therapy causes rebound vertebral fractures.");

  qb(L.op, "#adverse", ["module-endo-Q95", "Module case"],
    "After 10 years of alendronate, a 65-year-old had 6 months of aching thigh pain and then an atypical femoral fracture, now repaired. Her fracture risk remains high. Which agent would you use?",
    ["Teriparatide", "Denosumab", "Risedronate", "Zoledronic acid", "No further treatment"],
    0,
    "Atypical femoral fractures are a complication of <b>both bisphosphonates and denosumab</b>, so all antiresorptives are out (bisphosphonates also persist in bone). <b>Teriparatide</b> is anabolic and doesn't carry AFF risk. The prodrome of thigh or groin ache (most patients have it) should prompt femoral imaging in anyone on long-term antiresorptives.");

  qb(L.op, "#pharmacotherapy", ["hippo-endo-Q33", "HippoNotes"],
    "A patient with osteoporosis and a prior hip fracture has had 6 months of romosozumab without problems. How do you continue?",
    ["Complete 12 months of romosozumab, then switch to an antiresorptive such as zoledronic acid",
     "Continue romosozumab indefinitely while it's working",
     "Add teriparatide",
     "Switch to raloxifene after 12 months",
     "Stop at 6 months; the gain is permanent"],
    0,
    "Romosozumab (anti-sclerostin) is given for <b>12 months</b> and must be <b>followed by an antiresorptive</b>, or the bone gained is lost. Pick one with hip data (bisphosphonate or denosumab), not raloxifene. Romosozumab's key warning is cardiovascular events (avoid after recent MI or stroke).");

  /* ---------------------------------------------------- 2.6 HPG axis */
  qb(L.hpg, "#gonadotropins", ["module-endo-Q134", "Elentra module"],
    "Which statement about FSH secretion is correct?",
    ["FSH surges together with LH at mid-cycle",
     "Inhibin from Sertoli or granulosa cells increases FSH",
     "Pulsatile GnRH every 2 hours suppresses FSH",
     "FSH falls after menopause",
     "FSH stays high throughout the follicular phase"],
    0,
    "Rising estradiol flips to <b>positive feedback</b> at mid-cycle, producing the LH (and smaller FSH) surge. <b>Inhibin selectively suppresses FSH</b>; physiological GnRH <b>pulses stimulate</b> (it's <i>continuous</i> GnRH that shuts the axis down); FSH is <b>highest after menopause</b> (no estradiol or inhibin feedback); and FSH falls through the late follicular phase as estradiol rises, which is how a single dominant follicle gets selected.");

  qb(L.hpg, "#gonadotropins", ["workbook-repro-Q5", "Workbook · Reproduction"],
    "Why does only one follicle usually ovulate, while the rest of the cohort becomes atretic?",
    ["Rising estradiol lowers FSH, and only the follicle with the most FSH receptors (most sensitive) keeps growing",
     "LH selectively destroys the smaller follicles",
     "GnRH acts directly on the dominant follicle",
     "Progesterone from the dominant follicle kills the others",
     "The dominant follicle secretes hCG"],
    0,
    "As estradiol and inhibin rise, <b>FSH falls</b>. Follicles that can't keep up lose their FSH support and undergo <b>atresia</b>; the most FSH-sensitive follicle (most receptors, and it acquires LH receptors) stays dominant and responds to the LH surge. That's also why exogenous FSH in IVF produces multiple follicles.");

  qb(L.hpg, "#steroids", ["module-endo-Q137", "Elentra module"],
    "Which statement correctly contrasts spermatogenesis with oogenesis?",
    ["Spermatogenesis runs continuously from puberty and gives four haploid cells; oocytes are arrested in meiosis before birth",
     "Spermatogenesis happens in the epididymis",
     "Spermatocytes arrest in prophase I until fertilization",
     "Spermatogenesis is completed before birth",
     "Both produce one gamete per meiosis"],
    0,
    "Spermatogenesis occurs in the <b>seminiferous tubules</b> (testosterone and FSH via Sertoli cells), starts at <b>puberty</b>, runs without arrest and yields <b>four haploid spermatids</b> per spermatocyte (spermiogenesis then matures them; the epididymis stores and matures sperm). Oocytes are laid down <b>before birth</b>, arrested in prophase I until ovulation and in metaphase II until fertilization, and each meiosis yields one ovum plus polar bodies.");

  /* ---------------------------------------------------- 2.7 Histology & embryology */
  qb(L.hist, "#tract", ["module-endo-Q111", "Elentra module"],
    "Which pairing of vulvar site and epithelium is correct?",
    ["Labia majora: keratinized squamous epithelium with hair and glands; labia minora: non-keratinized squamous, usually without adnexa",
     "Labia majora: non-keratinized squamous; labia minora: keratinized with hair follicles",
     "Labia majora: urothelium",
     "Labia minora: ciliated columnar",
     "Both: glandular columnar epithelium"],
    0,
    "The labia majora are <b>skin</b> (keratinized, with hair follicles, sebaceous, eccrine and apocrine glands), so they get skin diseases (lichen sclerosus, squamous carcinoma). The minora are <b>non-keratinized</b> with usually no adnexa.");

  qb(L.hist, "#tract", ["module-endo-Q112", "Elentra module"],
    "What are the layers of the vaginal wall, from inside out?",
    ["Mucosa (non-keratinized squamous), muscularis, adventitia",
     "Mucosa, muscularis, serosa",
     "Endometrium, myometrium, serosa",
     "Mucosa, myometrium, serosa",
     "Keratinized epidermis, dermis, fascia"],
    0,
    "The vagina isn't covered by peritoneum, so its outer layer is <b>adventitia</b> (loose connective tissue anchoring it), not serosa. Endometrium and myometrium are uterine terms.");

  qb(L.hist, "#endometrium", ["module-endo-Q116", "Elentra module"],
    "In a 28-day cycle, the menstrual endometrium (days 1–7) belongs to which phase?",
    ["Follicular phase", "Luteal phase", "Ovulatory phase", "Secretory phase", "Implantation window"],
    0,
    "Day 1 of bleeding is <b>day 1 of the cycle</b>, the start of the follicular phase. Menstruation is caused by the end of the previous luteal phase (corpus luteum regresses, estrogen and progesterone fall). Follicular = estrogen = proliferative (straight tubular glands); luteal = progesterone = secretory (coiled glands with secretions).");

  qb(L.hist, "#tract", ["module-endo-Q117", "Elentra module"],
    "On histology, the epithelium of the fallopian tube has which surface specialization, and why does it matter clinically?",
    ["Cilia, which move the ovum toward the uterus; damage to them raises ectopic pregnancy risk",
     "Microvilli for absorption",
     "Keratin for protection",
     "Stereocilia for sperm capacitation",
     "None: it's smooth squamous epithelium"],
    0,
    "Tubal mucosa is ciliated and secretory columnar epithelium. <b>Cilia plus peristalsis</b> move the conceptus toward the uterus. After salpingitis (chlamydia, gonorrhea) or tubal surgery, transport fails and the embryo implants in the tube: <b>ectopic pregnancy</b>.");

  qb(L.hist, "#tract", ["module-endo-Q119", "Elentra module"],
    "Where does fertilization most commonly occur, and where do most ectopic pregnancies implant?",
    ["Ampulla; the fallopian tube", "Isthmus; the ovary", "Uterine cavity; the cervix", "Infundibulum; the abdominal cavity", "Fimbriae; the broad ligament"],
    0,
    "Fertilization happens in the <b>ampulla</b> (the widest segment). The conceptus only reaches the uterus if tubal transport works, so <b>~96–98% of ectopics are tubal</b>. Order from uterus outward: intramural → isthmus (narrowest) → ampulla → infundibulum → fimbriae.");

  qb(L.hist, "#ovary", ["module-endo-Q123", "Elentra module"],
    "Ovarian tumours are named by their cell of origin. Which cell gives rise to a <b>germ cell</b> tumour such as a dermoid (mature teratoma)?",
    ["Oocyte", "Granulosa cell", "Theca cell", "Surface epithelium", "Ovarian stroma"],
    0,
    "<b>Oocytes → germ cell tumours</b> (teratoma, dysgerminoma, yolk sac tumour). Granulosa and theca cells → <b>sex cord-stromal</b> tumours (often hormonally active: granulosa cell tumours make estrogen). Surface epithelium → <b>epithelial</b> tumours, the most common ovarian malignancies.");

  qb(L.hist, "#week1", ["module-endo-Q125", "Elentra module"],
    "At the 4-cell stage, each blastomere is separated, cultured to a blastocyst and transferred into a separate uterus. What would you expect?",
    ["Four genetically identical babies", "One baby", "Four genetically different babies", "Four babies with major malformations", "No births"],
    0,
    "Early blastomeres are <b>totipotent</b> (each can still form a whole embryo plus membranes) and they're <b>clones</b> (mitosis from one zygote). That's the basis of <b>monozygotic twinning</b>, and the reason the 'all or nothing' rule holds in weeks 1–2: lost cells can be replaced.");

  qb(L.hist, "#week3", ["module-endo-Q128", "Elentra module"],
    "Gastrulation in week 3 forms the three germ layers. Which layers come from the <b>epiblast</b>?",
    ["Ectoderm, mesoderm and endoderm", "Ectoderm only", "Ectoderm and mesoderm only", "Endoderm only", "Mesoderm and endoderm only"],
    0,
    "In gastrulation, epiblast cells migrate through the primitive streak: first displacing the hypoblast to form <b>definitive endoderm</b>, then forming <b>mesoderm</b>; those left behind become <b>ectoderm</b>. All three are epiblast-derived; the hypoblast contributes to the yolk sac, not the embryo.");

  qb(L.hist, "#week3", ["module-endo-Q129", "Elentra module"],
    "Which structure arises from the same embryonic primordium as the kidney, which is why urinary and genital anomalies often travel together?",
    ["Gonads", "Epidermis", "Liver", "Adrenal medulla", "Mammary gland"],
    0,
    "Kidneys and gonads both come from <b>intermediate mesoderm</b> (the urogenital ridge), so a Müllerian anomaly should prompt a look for renal agenesis. Epidermis and breast are surface ectoderm; liver is endoderm; the adrenal medulla is <b>neural crest</b> (its cortex is mesoderm).");

  qb(L.hist, "#teratogens", ["module-endo-Q130", "Module case"],
    "A newborn has bilateral cataracts and sensorineural deafness. Which maternal exposure do you suspect?",
    ["Rubella infection early in pregnancy", "Alcohol", "Diagnostic X-ray", "Smoking", "Undernutrition"],
    0,
    "<b>Congenital rubella</b>: cataracts, sensorineural deafness and heart defects (PDA). The risk is greatest in the first trimester, while eye and inner ear are forming, which is why rubella immunity is checked before or early in pregnancy. Alcohol gives the facial and neurodevelopmental picture of FASD; diagnostic X-ray doses are rarely teratogenic.");

  qb(L.hist, "#week4", ["module-endo-Q131", "Module case"],
    "A 20-week ultrasound shows spina bifida. When did this defect most likely arise?",
    ["Week 4", "Weeks 1–2", "Weeks 9–11", "Weeks 12–15", "Weeks 16–19"],
    0,
    "The neural tube closes in <b>week 4</b>: the cranial neuropore around day 24 (failure → <b>anencephaly</b>) and the caudal neuropore around day 26 (failure → <b>spina bifida</b>). Weeks 1–2 are 'all or nothing'; the fetal period (week 9 onwards) gives minor morphological or functional defects. Folic acid works only if it's on board <i>before</i> week 4, hence pre-conception.");

  qb(L.hist, "#teratogens", ["module-endo-Q132", "Module case"],
    "A 26-year-old has binge-drunk most weekends. She has now missed two periods and is pregnant (~8 weeks). Should you be concerned about the exposure so far?",
    ["Yes: weeks 3–8 are the embryonic period, the most sensitive window for major malformations",
     "No: it's too early in development to matter",
     "No: she isn't dependent on alcohol",
     "No: early exposures are always 'all or nothing'",
     "Only if she keeps drinking after 20 weeks"],
    0,
    "'All or nothing' applies to <b>weeks 1–2 only</b>. <b>Weeks 3–8</b> (organogenesis) are the <b>critical period</b> for major structural anomalies, and she has been drinking through it. There's no known safe amount or pattern of alcohol in pregnancy; binge drinking gives high peak levels. Advise stopping now; ongoing exposure still affects brain development.");

  qb(L.hist, "#week3", ["module-endo-Q127", "Elentra module"],
    "Which process converts the bilaminar embryonic disc into the trilaminar disc in week 3?",
    ["Gastrulation", "Neurulation", "Cleavage", "Lateral folding", "Implantation"],
    0,
    "<b>Gastrulation</b> (week 3, primitive streak) creates ectoderm, mesoderm and endoderm. <b>Neurulation</b> comes next (notochord induces ectoderm → neural tube). Cleavage makes the morula (week 1); folding turns the flat disc into a tube-shaped body (week 4).");
})();

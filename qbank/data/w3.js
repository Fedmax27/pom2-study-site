/* Week 3 · Endocrinology. Adapted from the class qbank (src = their id) unless null. */
(function () {
  const L = {
    adr: "w3-adrenal-gland",
    pit: "w3-pituitary",
    pm: "w3-puberty-menstruation",
    pa: "w3-puberty-abnormalities",
    gro: "w3-growth-disorders",
    pel: "w3-female-pelvic-anatomy",
    dev: "w3-female-tract-development",
    tg: "w3-transgender-care",
    dsd: "w3-sex-development-disorders",
    pmos: "w3-pmos",
  };

  /* ---------------------------------------------------- 3.1 Adrenal */
  qb(L.adr, "#pheo", ["workbook-endo-Q39", "Workbook · Endocrine"],
    "A 48-year-old with newly diagnosed pheochromocytoma is booked for adrenalectomy next week. HR 112, BP 160/90; otherwise well and on no medications. What is the next step?",
    ["Start an alpha-blocker (e.g., doxazosin or prazosin)", "Start metoprolol", "Start hydrochlorothiazide", "No treatment until surgery", "Admit for IV nitroprusside"],
    0,
    "Every pheo needs <b>alpha-blockade first</b> (for about 1–2 weeks, with liberal salt and fluid to re-expand volume) so anesthesia and tumour handling don't trigger a hypertensive crisis. A <b>beta-blocker is added only after alpha-blockade</b>, for tachycardia. Beta-blocking first leaves alpha receptors unopposed → severe vasoconstriction and crisis.");

  qb(L.adr, "#ai-treatment", ["new-endo-Q130", "CBL cases"],
    "A 19-year-old with years of weight loss, nausea, orthostatic presyncope and hypothyroidism is in the ICU with streptococcal urosepsis and hypotension that responds poorly to fluids and pressors. Adrenal crisis is suspected. What should happen?",
    ["Draw cortisol and ACTH, then give hydrocortisone 100 mg IV immediately without waiting for results",
     "Draw cortisol and ACTH and withhold steroids until the results return",
     "Do a cosyntropin stimulation test first",
     "Start fludrocortisone, since mineralocorticoid deficiency drives the hypotension",
     "Correct the sodium and potassium before any steroid"],
    0,
    "In suspected adrenal crisis, <b>treatment can't wait for tests</b>: send cortisol and ACTH, then give <b>hydrocortisone 100 mg IV</b> plus saline and dextrose. A dose given to someone who turns out not to need it is almost harmless; an hour's delay in someone who does can kill. At that dose hydrocortisone also covers the mineralocorticoid need, so fludrocortisone waits until she's stable.");

  qb(L.adr, "#ai-causes", ["reviews-endo-Q24", "Review practice question"],
    "A 19-year-old had a sore throat, then 24 hours of high fever. He is confused, BP 80/55, with extensive purpura. Na 115, K 5.3, glucose 3.2, creatinine 156. What explains the electrolytes and hypotension?",
    ["Acute primary adrenal insufficiency from adrenal hemorrhage in meningococcal sepsis",
     "Secondary adrenal insufficiency from pituitary apoplexy",
     "SIADH from meningitis",
     "Thyroid storm",
     "Pheochromocytoma crisis"],
    0,
    "Fulminant meningococcemia can cause <b>bilateral adrenal hemorrhage</b> (Waterhouse–Friderichsen). Loss of the whole cortex gives the <b>primary pattern</b>: hyponatremia, <b>hyperkalemia</b> (no aldosterone), hypoglycemia and prerenal azotemia. Secondary (pituitary) insufficiency spares aldosterone, so potassium stays normal. Treat with hydrocortisone, fluids and antibiotics.");

  qb(L.adr, "#cushing-diagnosis", ["new-endo-Q165", "DSSG cases"],
    "Which conditions can cause a <b>false-positive</b> screening test for Cushing syndrome (raised cortisol without true Cushing)? <i>(Select all that apply.)</i>",
    ["Depression", "Alcohol use disorder", "Severe obesity", "Acute illness or hospitalization", "Cyclic Cushing syndrome tested between phases"],
    [0, 1, 2, 3],
    "These states raise cortisol physiologically: <b>pseudo-Cushing</b>. Stress itself does it, so testing an acutely ill inpatient is a set-up for a false positive. Cyclic Cushing tested between active phases gives a false <i>negative</i>, as do enzyme-inducing drugs that speed dexamethasone clearance (on the suppression test). (Oral estrogen raises cortisol-binding globulin, so total cortisol and the dexamethasone test read falsely high.) Night-shift workers make late-night salivary cortisol unreliable.");

  /* ---------------------------------------------------- 3.2 Pituitary */
  qb(L.pit, "#approach", ["weekly-endo-Q32", "Weekly quiz"],
    "A 72-year-old has a 2.1 cm pituitary mass found on an MRI done for a TIA. Prolactin, cortisol, TSH, free T4, testosterone, LH and IGF-1 are all normal, ruling out hormone excess or deficiency. What is the next step?",
    ["Formal visual field testing", "Thyroid ultrasound", "Repeat TSH and free T3", "Radioactive iodine uptake scan", "Anti-TPO antibodies"],
    0,
    "Work up every pituitary mass on three fronts: <b>too much hormone, too little hormone, and mass effect</b>. The first two are done. A <b>macroadenoma (≥ 1 cm)</b> can compress the optic chiasm, so formal fields (looking for bitemporal hemianopia) are next. The rest are thyroid tests for a problem he doesn't have.");

  qb(L.pit, "#prolactin-clinical", ["new-endo-Q136", "CBL cases"],
    "A 41-year-old man has a thoracic vertebral collapse without trauma. Lumbar T-score −2.6. He has low libido and fatigue; testosterone is low twice (5 and 7.8 nmol/L), LH and FSH are 1 IU/L, and prolactin is 3,145 µg/L. Why is his bone density low?",
    ["Hypogonadotropic hypogonadism from a prolactinoma",
     "Primary testicular failure",
     "Hyperthyroidism",
     "Vitamin D deficiency",
     "Low peak bone mass with no secondary cause"],
    0,
    "Osteoporosis in a young man needs a cause, and <b>hypogonadism</b> is a classic one: testosterone maintains male bone. Low testosterone with <b>low (not high) LH/FSH</b> is secondary, and a prolactin in the thousands = <b>macroprolactinoma</b> suppressing GnRH. Treatment is a dopamine agonist (cabergoline), which shrinks the tumour and usually restores the gonadal axis; surgery isn't first line for prolactinomas.");

  /* ---------------------------------------------------- 3.3 Puberty & menstrual cycle */
  qb(L.pm, "#cycle", ["module-endo-Q136", "Elentra module"],
    "Daily blood tests show estradiol has peaked and stayed high for about a day, while progesterone has not yet risen. What is most likely to happen in the next 1–3 days?",
    ["Ovulation", "Menstruation", "Regression of the corpus luteum", "A fall in basal body temperature", "Atresia of the dominant follicle"],
    0,
    "A <b>sustained estradiol peak</b> (high enough, for long enough: ~36–48 h) flips feedback from negative to <b>positive</b> → LH surge → ovulation ~36 h later. Progesterone not yet rising tells you ovulation hasn't happened (it climbs once the corpus luteum forms, along with the temperature). Corpus luteum regression and menses come ~2 weeks later.");

  qb(L.pm, "#cycle", ["workbook-repro-Q9", "Workbook · Reproduction"],
    "Maureen, 25, has had unpredictable cycles every 20–40 days since menarche. Which phase of her cycle is most likely varying?",
    ["The follicular phase", "The luteal phase", "Menstruation", "The ovulatory phase", "All phases equally"],
    0,
    "The <b>luteal phase is fixed</b> at about 14 days (the corpus luteum's lifespan). Variation in cycle length comes from the <b>follicular phase</b>, the time it takes to recruit and grow a dominant follicle. That's also why ovulation is ~14 days <i>before</i> the next period, not 14 days after the last one.");

  qb(L.pm, "#menstruation", ["workbook-repro-Q28", "Workbook · Reproduction"],
    "Which statement about the endometrium is <b>incorrect</b>?",
    ["The basalis layer is shed during menstruation",
     "The functionalis layer is shed during menstruation",
     "The endometrium becomes receptive to implantation in the secretory phase",
     "Estrogen thickens the vaginal epithelium",
     "Abnormal uterine bleeding can be an indication for endometrial biopsy"],
    0,
    "Only the <b>functionalis</b> is shed. The <b>basalis</b> stays behind as the regenerative layer from which the functionalis regrows each cycle. Damage the basalis (aggressive curettage, infection) and you get Asherman syndrome: intrauterine adhesions with scant or absent periods.");

  qb(L.pm, "#brake-accelerator", ["module-endo-Q207", "Module"],
    "Why doesn't puberty normally begin before age 8?",
    ["GnRH secretion is restrained and non-pulsatile; puberty needs kisspeptin-driven pulsatile GnRH",
     "The gonads can't respond to LH and FSH",
     "Target tissues can't respond to sex steroids",
     "The pituitary can't make gonadotropins",
     "The pineal gland secretes a gonad-blocking hormone"],
    0,
    "The limiting step is the <b>hypothalamus</b>: a central 'brake' (GABA and others) keeps GnRH quiet. Puberty starts when <b>kisspeptin</b> releases the brake and GnRH becomes <b>pulsatile</b> (first at night). The gonads and pituitary work fine (mini-puberty in infancy proves it), and target tissues respond to steroids at any age (peripheral precocious puberty proves that).");

  qb(L.pm, "#menopause", ["reviews-endo-Q64", "Written from review slides"],
    "A 51-year-old's last period was 8 months ago and she has hot flushes. When is she, by definition, postmenopausal?",
    ["After 12 consecutive months without a period",
     "Now, after 6 months of amenorrhea",
     "When one FSH level is above 10 IU/L",
     "At age 53, the average age of menopause",
     "When one estradiol level is low"],
    0,
    "Menopause is diagnosed <b>retrospectively after 12 consecutive months of amenorrhea</b> (in the right age group, with no other cause). Single hormone levels fluctuate wildly in perimenopause and aren't needed to diagnose it in a woman over 45. Average age is ~51–53, an average, not a definition. She may still ovulate occasionally, so she still needs contraception.");

  /* ---------------------------------------------------- 3.4 Abnormal puberty */
  qb(L.pa, "#precocious-causes", ["weekly-endo-Q37", "Weekly quiz"],
    "A 6½-year-old girl has 6–12 months of breast development and a growth spurt (height 97th percentile; mid-parental 50th). Breast Tanner 3, pubic hair Tanner 2. LH 4.3 and FSH 5.5 (both pubertal), estradiol 120 pmol/L (prepubertal &lt; 30). Bone age 10 years. Most likely diagnosis?",
    ["Idiopathic central precocious puberty", "Premature thelarche", "Ovarian cyst or tumour", "Congenital adrenal hyperplasia", "McCune–Albright syndrome"],
    0,
    "<b>Pubertal LH and FSH = central</b> (the HPG axis has switched on early). Peripheral causes (ovarian cyst, CAH, McCune–Albright) suppress gonadotropins. A growth spurt and advanced bone age rule out benign premature thelarche. In <b>girls, central precocious puberty is usually idiopathic</b>; in <b>boys</b> fewer than half are, so every boy (and young or neurologically abnormal girls) gets a brain MRI.");

  qb(L.pa, "#central-peripheral", ["new-endo-Q145", "CHSG cases"],
    "John, 7, has Tanner 3 pubic hair, moderate acne and a deep voice. His testes are <b>2 mL on the right and 6 mL on the left</b>. What is the most important next step?",
    ["Testicular ultrasound", "MRI of the head", "GnRH stimulation test", "Bone age only", "Reassurance: this is premature adrenarche"],
    0,
    "Only LH enlarges both testes symmetrically. <b>One enlarged testis</b> with virilization points to a <b>Leydig cell tumour</b> making testosterone autonomously (peripheral precocity; LH will be suppressed). Ultrasound now looks for it. Symmetric enlargement (≥ 4 mL both sides) suggests central puberty → MRI; small testes both sides suggest an adrenal source.");

  qb(L.pa, "#delayed", ["hippo-endo-Q51", "HippoNotes"],
    "At what age is the absence of puberty considered delayed?",
    ["No breast development by 13 in girls; no testicular enlargement by 14 in boys",
     "No breast development by 15 in girls; no testicular enlargement by 16 in boys",
     "No menarche by 13",
     "No pubic hair by 12 in either sex",
     "No growth spurt by 16"],
    0,
    "Delayed puberty = no signs at an age <b>2–2.5 SD above the mean</b>: no <b>thelarche by 13</b> (girls) or <b>testicular volume ≥ 4 mL by 14</b> (boys). Stalled or incomplete puberty counts too. Primary amenorrhea is defined separately (no menarche by 15, or 3 years after thelarche).");

  qb(L.pa, "#delayed", ["module-endo-Q197", "Module"],
    "Which finding best fits <b>constitutional delay of growth and puberty</b> in a 15-year-old boy?",
    ["Bone age delayed compared with his chronological age, with a normal growth velocity",
     "Bone age advanced compared with his chronological age",
     "High LH and FSH",
     "Falling growth velocity with rising weight",
     "Anosmia"],
    0,
    "CDGP is the most common cause of delayed puberty in boys: short, growing at a <b>normal velocity</b>, with a <b>delayed bone age</b> (lots of growth left), often a parent who was a late bloomer, and normal adult height. Reassurance (sometimes a short course of testosterone). High LH/FSH means primary gonadal failure; anosmia means Kallmann; slowing growth with weight gain suggests an endocrine cause.");

  qb(L.pa, "#primary-hypogonadism", ["workbook-endo-Q11", "Workbook · Endocrine"],
    "A 14-year-old girl has some breast development and pubic hair but no periods. She has always been short; her parents are average height. What should you do?",
    ["Order a karyotype for Turner syndrome",
     "Reassure: this is constitutional delay",
     "Order a head MRI first",
     "Start estrogen therapy",
     "Wait until 16 before investigating"],
    0,
    "Short stature out of keeping with her parents plus incomplete puberty → <b>Turner syndrome until proven otherwise</b>. Short stature is its most consistent feature, and some girls (especially mosaics) start breast development before ovarian failure. Early diagnosis matters for GH therapy, estrogen timing, and cardiac and renal screening.");

  /* ---------------------------------------------------- 3.5 Growth */
  qb(L.gro, "#ghd", ["reviews-endo-Q61", "Written from review slides"],
    "A 7-year-old is below the 3rd percentile, growing 3.5 cm/year, with a delayed bone age. A random GH level in clinic is low. What is needed to diagnose GH deficiency?",
    ["An inadequate GH response on two different provocative (stimulation) tests",
     "The random low GH is already diagnostic",
     "A single overnight GH level",
     "A normal karyotype",
     "A response to a trial of GH"],
    0,
    "GH is secreted in <b>pulses</b> (mostly in deep sleep), so a random level means nothing. Screen with <b>IGF-1 (and IGFBP-3)</b>; confirm with a subnormal peak on <b>two</b> stimulation tests (e.g., arginine, clonidine, glucagon), alongside slow growth velocity and delayed bone age. Then image the pituitary.");

  /* ---------------------------------------------------- 3.6 Pelvic anatomy */
  qb(L.pel, "#lymph", ["module-endo-Q168", "Module case"],
    "A 48-year-old has cervical cancer. Which lymph nodes are the first to assess for spread?",
    ["Internal and external iliac (and obturator) nodes on the pelvic sidewall", "Superficial inguinal nodes", "Para-aortic (lumbar) nodes", "Sacral nodes only", "Axillary nodes"],
    0,
    "The cervix and lower uterine body drain <b>laterally to the iliac/obturator nodes</b>, then up to common iliac and para-aortic nodes. The ovaries, tubes and fundus follow the gonadal vessels straight to the <b>para-aortic</b> nodes. The vulva and lower vagina go to the <b>superficial inguinal</b> nodes.");

  qb(L.pel, "#pain-line", ["module-endo-Q169", "Module case"],
    "In labour, pain from contraction of the uterine <b>fundus</b> travels along which route?",
    ["Visceral afferents running with the sympathetics to T11–L2",
     "Parasympathetic pelvic splanchnics to S2–S4",
     "Pudendal nerve to S2–S4",
     "Sympathetics to S2–S4",
     "Ilioinguinal nerve to L1"],
    0,
    "The <b>pelvic pain line</b> is the lower edge of the peritoneum. Organs <b>above</b> it (fundus, body, tubes, ovaries) send pain back with the <b>sympathetics to T11–L2</b> (felt in the lower trunk and back; blocked by a lumbar epidural). <b>Below</b> it (cervix, upper vagina) pain travels with the <b>parasympathetics to S2–S4</b>; the perineum is pudendal (S2–S4).");

  qb(L.pel, "#hemorrhoids", ["module-endo-Q178", "Module"],
    "A woman at 32 weeks has painless bright red bleeding with bowel movements; exam shows an internal hemorrhoid. Why is it painless?",
    ["It's above the pectinate line, where the mucosa has visceral (autonomic) innervation",
     "It's below the pectinate line, with somatic innervation",
     "It's above the pectinate line, with somatic innervation",
     "Pregnancy blocks somatic pain fibres",
     "Hemorrhoids have no sensory supply at all"],
    0,
    "The <b>pectinate line</b> splits the anal canal: above it is hindgut endoderm with <b>visceral</b> sensation (stretch, not pain), so internal hemorrhoids bleed painlessly; below it is ectoderm supplied by the <b>inferior rectal nerve (pudendal)</b>, so external hemorrhoids and fissures hurt. Pregnancy raises pelvic venous pressure, hence the hemorrhoids.");

  qb(L.pel, "#sexual-function", ["module-endo-Q179", "Module"],
    "Which pairing of sexual response and autonomic division is correct?",
    ["Erection (and clitoral engorgement) is parasympathetic; ejaculation (emission) is sympathetic",
     "Erection is sympathetic; ejaculation is parasympathetic",
     "Both are parasympathetic",
     "Both are sympathetic",
     "Erection is somatic motor via the pudendal nerve"],
    0,
    "'<b>Point and shoot</b>': <b>parasympathetic</b> S2–S4 (pelvic splanchnics → cavernous nerves) dilates the erectile arteries; <b>sympathetic</b> T11–L2 drives emission and ejaculation. The pudendal nerve carries the sensory trigger and the bulbospongiosus contraction at the end. Damage to the pelvic plexus in pelvic surgery is a cause of erectile dysfunction.");

  /* ---------------------------------------------------- 3.7 Tract development */
  qb(L.dev, "#ovary", ["module-endo-Q150", "Module"],
    "In pure gonadal dysgenesis (46,XX, streak gonads), primordial germ cells fail to reach the gonadal ridges. Where do these cells originate?",
    ["The wall of the yolk sac (endoderm), migrating along the hindgut mesentery", "Intermediate mesoderm", "Neural crest", "Paraxial mesoderm", "Surface ectoderm"],
    0,
    "Primordial germ cells arise in the <b>yolk sac wall</b> and migrate along the dorsal mesentery of the hindgut into the gonadal ridges (weeks 4–6). Without them the gonad doesn't develop properly: <b>streak gonads</b>. The ridges themselves are intermediate mesoderm. Germ cells that stray can give extragonadal germ cell tumours.");

  qb(L.dev, "#uterine-anomalies", ["module-endo-Q158", "Module"],
    "A woman with recurrent second-trimester losses has a normal, smoothly contoured fundus on MRI but a midline wall dividing the uterine cavity. Which developmental failure explains it?",
    ["Failure of the septum between the fused paramesonephric ducts to regress (septate uterus)",
     "Incomplete fusion of the paramesonephric ducts (bicornuate uterus)",
     "No fusion of the ducts (uterus didelphys)",
     "Failure of one duct to develop (unicornuate uterus)",
     "Failure of canalization of the vaginal plate"],
    0,
    "The paramesonephric ducts must <b>fuse</b>, then the <b>septum between them must regress</b>. Failure to regress = <b>septate</b> (smooth outer contour). Incomplete fusion = <b>bicornuate</b> (heart-shaped outside). No fusion = <b>didelphys</b> (two uteri, two cervices). One duct missing = <b>unicornuate</b>. HSG only shows the cavity, so you need the outer contour (ultrasound or MRI). Bicornuate and septate uteri are linked to preterm birth and pregnancy loss.");

  qb(L.dev, "#uterine-anomalies", ["module-endo-Q160", "Module"],
    "Imaging of a 24-year-old shows a single uterine horn with one fallopian tube, and only one kidney. What happened in development?",
    ["One paramesonephric duct failed to develop (unicornuate uterus)",
     "The septum failed to regress",
     "The ducts failed to fuse",
     "The vaginal plate failed to canalize",
     "Excess anti-Müllerian hormone"],
    0,
    "A <b>unicornuate uterus</b> is one Müllerian duct that never formed. The Müllerian duct needs the neighbouring mesonephric duct to develop, and the same faulty mesonephric duct can cost the kidney on that side, which is why <b>renal agenesis travels with unicornuate uteri and didelphys</b>. Image the kidneys whenever you find a Müllerian anomaly.");

  /* ---------------------------------------------------- 3.8 Transgender care */
  qb(L.tg, "#adult-risks", ["weekly-endo-Q38", "Weekly quiz"],
    "A trans woman on estradiol asks about side effects. Which is <b>not</b> an effect of feminizing (estrogen) therapy?",
    ["Erythrocytosis", "Venous thromboembolism", "Raised liver enzymes", "Hyperprolactinemia", "Worsening migraine"],
    0,
    "<b>Erythrocytosis</b> is a risk of <b>testosterone</b> (masculinizing) therapy, which drives red cell production; estrogen does the opposite. Estrogen risks include VTE, gallstones, raised liver enzymes, hypertriglyceridemia, weight gain, migraine and hyperprolactinemia.");

  qb(L.tg, "#adult-regimens", ["hippo-endo-Q58", "HippoNotes"],
    "A trans man is starting testosterone. Does he also need a drug to block his own estrogen?",
    ["No: testosterone at therapeutic levels suppresses LH and FSH and so ovarian estradiol",
     "Yes: spironolactone is always added",
     "Yes: a GnRH agonist is mandatory",
     "Yes: an aromatase inhibitor is needed to stop feminization",
     "Only if he has had a hysterectomy"],
    0,
    "Gender-affirming regimens <b>suppress the endogenous hormone and replace the affirmed one</b>. For trans men, testosterone does both: it feeds back on the HPG axis and suppresses ovarian function, so no separate blocker is needed. Trans women usually need an anti-androgen (spironolactone, cyproterone) or GnRH agonist alongside estradiol, because estradiol alone doesn't suppress testosterone enough.");

  /* ---------------------------------------------------- 3.9 DSD & CAH */
  qb(L.dsd, "#xy", ["reviews-endo-Q16", "Review practice question"],
    "A 46,XY baby has ambiguous external genitalia and internal testes. At puberty, marked virilization occurs. Which diagnosis fits?",
    ["5α-reductase deficiency", "Complete androgen insensitivity", "Congenital adrenal hyperplasia", "Klinefelter syndrome", "Turner syndrome"],
    0,
    "<b>DHT</b> (made from testosterone by 5α-reductase) builds the external male genitalia, so its absence gives undervirilized genitalia at birth. At puberty, <b>testosterone itself</b> rises and virilizes. Diagnose with a high testosterone:DHT ratio after hCG stimulation. Complete AIS looks typically female and doesn't virilize; 21-hydroxylase CAH virilizes 46,XX babies.");

  qb(L.dsd, "#cah-management", ["new-endo-Q195", "CBL cases"],
    "Tyler, 3 weeks old, normal male genitalia, has a week of vomiting, poor feeding and hyperpigmentation. HR 150, BP 50 systolic. Na 110, K 8.4, glucose 2.5, cortisol 40 nmol/L (119–618). 17-OHP very high. What is the acute management?",
    ["Fluid bolus with dextrose–saline (no potassium), IV hydrocortisone, then fludrocortisone",
     "Potassium-containing maintenance fluid and oral hydrocortisone tomorrow",
     "Insulin and dextrose for the potassium; steroids once results are back",
     "Normal saline alone until the karyotype returns",
     "Fludrocortisone alone"],
    0,
    "Salt-wasting <b>21-hydroxylase CAH</b> in a boy shows up at 1–3 weeks with an adrenal crisis because the genitals looked normal. Resuscitate with <b>dextrose–saline</b> (covers hyponatremia and hypoglycemia), <b>no added potassium</b>, and give <b>stress-dose IV hydrocortisone</b> (which also lowers K), then fludrocortisone and salt for the aldosterone deficiency. Steroids can't wait for confirmatory results.");

  /* ---------------------------------------------------- 3.10 PMOS */
  qb(L.pmos, "#treatment", ["module-endo-Q188", "Module"],
    "Which treatments can be appropriate in PMOS (PCOS), depending on what the patient wants treated? <i>(Select all that apply.)</i>",
    ["Combined oral contraceptive", "Spironolactone or cyproterone (with contraception)", "Letrozole for ovulation induction", "Ovarian drilling in selected subfertility cases", "Topical testosterone"],
    [0, 1, 2, 3],
    "Treat the problem that bothers her: <b>cycle control and endometrial protection</b> → COCP (or cyclic progestin, ≥ 4 bleeds a year); <b>hirsutism or alopecia</b> → anti-androgens (teratogenic, so contraception is required); <b>subfertility</b> → lifestyle, then <b>letrozole</b> (first-line ovulation induction), with ovarian drilling now rarely used. Adding testosterone worsens an androgen-excess syndrome.");

  qb(L.pmos, "#mimics", ["workbook-repro-Q59", "Workbook · Reproduction"],
    "A 33-year-old has always had irregular periods and now wants to conceive. Which finding should make you look for a cause other than PMOS?",
    ["Cushingoid features (purple striae, proximal weakness, easy bruising)",
     "Normal body weight",
     "Two previous pregnancies",
     "Absence of nipple discharge",
     "A retroverted uterus"],
    0,
    "PMOS is a diagnosis of <b>exclusion</b>: rule out pregnancy, thyroid disease, hyperprolactinemia, non-classic CAH (17-OHP), Cushing syndrome and androgen-secreting tumours. Cushingoid features point to hypercortisolism. Normal weight doesn't exclude PMOS (lean PMOS exists); the others don't point anywhere.");
})();

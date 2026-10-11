/* Week 4 · Female Reproductive. Adapted from the class qbank (src = their id) unless null. */
(function () {
  const L = {
    amen: "w4-amenorrhea",
    ab: "w4-abortion-in-canada",
    inf: "w4-fertilization-infertility",
    aub: "w4-abnormal-uterine-bleeding",
  };

  /* ---------------------------------------------------- 4.0 Amenorrhea */
  qb(L.amen, "", ["new-repro-Q136", "DSSG cases"],
    "Which definitions of primary and secondary amenorrhea were taught?",
    ["Primary: no menses by 13 without breast development, or by 15 with it (or 3 years after thelarche). Secondary: no period for ≥ 3 months after regular cycles (≥ 6 months if irregular)",
     "Primary: no menses by 16 regardless of development. Secondary: any missed period",
     "Primary: no menses by 15 without development, or 18 with it. Secondary: 12 months without a period",
     "Primary: no menses by 13 with development, or 15 without. Secondary: 6 months after regular cycles",
     "Primary: no menses by 12. Secondary: 1 missed period"],
    0,
    "The earlier cut-off (13) belongs to the girl with <b>no</b> secondary sex characteristics, because nothing has started at all. With development, wait until 15 (or 3 years after thelarche). Some sources (e.g., the workbook) use 'no period by 16'; the lecture uses 13/15. Either way, <b>pregnancy is ruled out first</b>.");

  qb(L.amen, "", ["weekly-repro-Q27", "Weekly quiz"],
    "Nameera, 15, has never had a period. You're speaking with her by phone; her β-hCG is negative. What is the most important next step?",
    ["A physical exam: growth chart, Tanner staging, and looking for a uterus, cervix or imperforate hymen",
     "TSH and prolactin",
     "LH and FSH",
     "Pelvic ultrasound",
     "Karyotype"],
    0,
    "In primary amenorrhea the <b>exam decides which branch</b> you're on: no breast development (hypothalamic/pituitary vs ovarian failure → FSH), development but no uterus (Müllerian agenesis vs androgen insensitivity → karyotype), or an outflow obstruction (imperforate hymen, transverse septum). Labs come after you've seen her.");

  qb(L.amen, "", ["workbook-repro-Q40", "Workbook · Reproduction"],
    "A 15-year-old with primary amenorrhea has no breast development (delayed puberty). What is the next step?",
    ["Measure FSH and LH", "Pelvic exam and ultrasound", "Karyotype", "Serum testosterone", "Prolactin and TSH only"],
    0,
    "Gonadotropins <b>localize the lesion</b>: <b>high FSH/LH</b> = the ovary has failed (hypergonadotropic: Turner, gonadal dysgenesis) → karyotype next; <b>low or normal</b> = the problem is central (constitutional delay, low weight or exercise, illness, Kallmann, pituitary). Imaging the uterus matters more when puberty is normal but menses are absent.");

  qb(L.amen, "", ["new-repro-Q73", "CHSG cases"],
    "Erika, 14, has never menstruated and is being bullied for not 'developing'. Breasts Tanner 1, pubic hair Tanner 2; she has subtle dysmorphic features and is on a low height centile. FSH and LH are very high. What test confirms the diagnosis?",
    ["Karyotype", "Bone age", "Repeat FSH and LH", "Pelvic ultrasound", "Estradiol level"],
    0,
    "High FSH = <b>primary ovarian failure</b>. Short stature, dysmorphic features and absent breast development with adrenarche intact = <b>Turner syndrome</b> (45,X or mosaic), the most common cause of primary amenorrhea. A karyotype confirms it, and also identifies XY gonadal dysgenesis, whose gonads must be removed because of malignancy risk.");

  qb(L.amen, "", ["new-repro-Q78", "CHSG cases"],
    "Jennifer, 16, has primary amenorrhea. She exercises 6–7 days a week. Tanner 5 breasts and pubic hair, normal genital exam and ultrasound. β-hCG negative; FSH and LH low; prolactin, TSH, testosterone and DHEA-S normal; karyotype 46,XX. Most likely diagnosis?",
    ["Functional hypothalamic amenorrhea from exercise", "Turner syndrome", "Androgen insensitivity", "Congenital adrenal hyperplasia", "Prolactinoma"],
    0,
    "Everything else is excluded: Turner gives <b>high</b> FSH; AIS is 46,XY with scant pubic hair; CAH is hyperandrogenic. Low energy availability (exercise, eating disorder, stress) <b>suppresses GnRH pulses</b> → low LH/FSH → low estrogen. Watch for the relative energy deficiency triad (low energy availability, amenorrhea, low bone density).");

  qb(L.amen, "", ["new-repro-Q138", "DSSG cases"],
    "An 18-year-old has secondary amenorrhea. Which investigation sequence fits best?",
    ["β-hCG first; then FSH, LH, prolactin, TSH/free T4 and androgens (testosterone, DHEA-S, 17-OHP); ultrasound as needed",
     "Karyotype and pituitary MRI before any hormone levels",
     "FSH and LH alone: if normal, no further cause is possible",
     "Day-21 progesterone on two consecutive cycles only",
     "Pelvic MRI first"],
    0,
    "<b>Pregnancy first, always.</b> Then FSH (high = ovarian insufficiency; low = hypothalamic/pituitary), prolactin and TSH (hypothyroidism raises TRH, which raises prolactin), and androgens if hyperandrogenic (PMOS, non-classic CAH, tumour). Karyotype only when FSH is high; MRI isn't first line.");

  qb(L.amen, "", ["new-repro-Q61", "CHSG cases"],
    "A 15-year-old has infrequent periods, a BMI of 35 and acne. What laboratory abnormality is most likely?",
    ["Elevated free testosterone", "Elevated FSH", "Elevated prolactin", "Elevated TSH", "Low estradiol"],
    0,
    "Obesity, acne and infrequent (not absent) cycles = <b>normogonadotropic anovulation</b>, PMOS territory, with hyperandrogenism (raised free testosterone, partly because insulin resistance lowers SHBG). High FSH would mean ovarian failure with absent periods and hot flushes; prolactin and TSH are part of the exclusions.");

  qb(L.amen, "", ["hippo-endo-Q46", "HippoNotes"],
    "A woman with untreated primary hypothyroidism has amenorrhea and galactorrhea. Which relationship explains it?",
    ["TRH stimulates prolactin as well as TSH",
     "Dopamine inhibits TSH",
     "Somatostatin inhibits prolactin",
     "GnRH stimulates GH",
     "T4 directly stimulates the breast"],
    0,
    "Low T4 → ↑ <b>TRH</b> → ↑ TSH <b>and ↑ prolactin</b> → prolactin suppresses GnRH pulsatility → anovulation, amenorrhea, galactorrhea. That's why <b>TSH is checked with prolactin</b>: treat the hypothyroidism and the prolactin settles. Dopamine is the main brake on prolactin; somatostatin inhibits GH and TSH.");

  /* ---------------------------------------------------- 4.15 AUB (adolescent) */
  qb(L.aub, "#approach-by-age", ["new-repro-Q62", "CHSG cases"],
    "A 16-year-old has very heavy periods. Which feature of her history most suggests von Willebrand disease?",
    ["Heavy flow since her very first period", "Irregular, anovulatory-looking cycles", "Bleeding between periods", "Previous oral contraceptive use", "Pelvic tenderness on exam"],
    0,
    "An inherited bleeding disorder has always been there, so the periods have been <b>heavy since menarche</b> (often with nosebleeds, easy bruising, bleeding after dental work or surgery, family history). It's the 'C' (coagulopathy) in PALM-COEIN and should be screened for in adolescents with heavy bleeding. Anovulation is the commonest cause of <i>irregular</i> bleeding in the first years after menarche.");

  /* ---------------------------------------------------- 4.1 Abortion */
  qb(L.ab, "#medical-vs-surgical", ["hippo-repro-Q23", "HippoNotes"],
    "Which is <b>not</b> a first-trimester abortion method?",
    ["Misoprostol after intracardiac KCl or digoxin", "Mifepristone then misoprostol", "Methotrexate then misoprostol", "Manual vacuum aspiration", "Suction dilation and curettage"],
    0,
    "First trimester: <b>medical</b> (mifepristone + misoprostol, the standard in Canada up to ~10 weeks; methotrexate + misoprostol is older and less effective) or <b>surgical</b> aspiration (MVA in the office, D&C). Feticidal injection (KCl or digoxin) is a <b>second-trimester</b> step before induction or D&E.");

  /* ---------------------------------------------------- 4.2 Fertility */
  qb(L.inf, "#ovulation", ["workbook-repro-Q22", "Workbook · Reproduction"],
    "Which findings indicate that ovulation has occurred (or is about to)? <i>(Select all that apply.)</i>",
    ["A rise in basal body temperature of about 0.5 °C in the second half of the cycle", "A mid-luteal serum progesterone in the ovulatory range", "Secretory endometrium on biopsy", "Thin, clear, stretchy cervical mucus at mid-cycle", "Proliferative endometrium on biopsy"],
    [0, 1, 2, 3],
    "Ovulation is proven by the effects of <b>progesterone</b> from the corpus luteum: temperature rise, mid-luteal (day ~21 of a 28-day cycle) progesterone, secretory endometrium. Thin, stretchy, clear mucus (and an LH surge on urine kits) shows ovulation is imminent. Proliferative endometrium and rising estrogen are <i>pre</i>-ovulatory and prove nothing.");

  qb(L.inf, "#male", ["workbook-repro-Q54", "Workbook · Reproduction"],
    "Which belong in the <b>initial</b> work-up of the male partner of an infertile couple? <i>(Select all that apply.)</i>",
    ["Semen analysis", "LH and FSH", "Testosterone", "Karyotype", "Testicular biopsy"],
    [0, 1, 2],
    "Start with a <b>semen analysis</b> (repeated if abnormal) plus a hormone screen (testosterone, LH, FSH). Karyotype (and Y-microdeletions, CFTR) are second line, driven by results such as severe oligospermia or azoospermia with high FSH (primary testicular failure: Klinefelter). Biopsy is for selected azoospermic men.");

  qb(L.inf, "#workup", ["workbook-repro-Q133", "Workbook · Reproduction"],
    "A couple has been trying for a year; you suspect the woman is anovulatory. Which test does <b>not</b> help assess ovulation or its causes?",
    ["Hysterosalpingogram", "Mid-luteal progesterone", "FSH and LH", "TSH and prolactin", "Pelvic ultrasound"],
    0,
    "An <b>HSG</b> checks <b>tubal patency and the uterine cavity</b>, a mechanical question. Ovulation and its causes are assessed with progesterone, FSH/LH (with estradiol), TSH and prolactin (both inhibit ovulation) and ultrasound (PCO morphology, cysts).");

  qb(L.inf, "#sperm", ["hippo-repro-Q19", "HippoNotes"],
    "Where does sperm capacitation normally take place?",
    ["In the female reproductive tract (uterus and fallopian tube)", "In the epididymis", "In the seminiferous tubules", "In the vagina only", "In the prostate"],
    0,
    "Ejaculated sperm can't fertilize yet. <b>Capacitation</b> happens in the female tract (mainly the tube): membrane changes that allow hypermotility, zona pellucida binding and the acrosome reaction. For IVF, sperm are capacitated in the lab. The epididymis matures and stores sperm, but capacitation comes later.");

  qb(L.inf, "#age", ["new-repro-Q125", "DSSG cases"],
    "Krista, 40, has had irregular cycles since her teens and asks about her chances of pregnancy. Which counselling is accurate?",
    ["Pregnancy is possible, but fertility falls from around 30 and miscarriage (mostly aneuploidy) climbs steeply after 40, so she shouldn't wait",
     "Her fertility is unchanged until menopause",
     "Pregnancy is impossible at 40; IVF restores egg quality",
     "An AMH level will tell her how likely natural conception is",
     "Irregular cycles mean she cannot ovulate at all"],
    0,
    "Fertility declines from about <b>30</b> and faster after 35; miscarriage rises to <b>~50–60% over 40</b>, mainly from aneuploid embryos. IVF can't fix egg age. <b>AMH reflects ovarian reserve, not natural fertility.</b> At 40 (and with likely PMOS), evaluate early rather than after a year of trying (after 6 months from age 35).");

  qb(L.inf, "#workup", ["new-repro-Q127", "DSSG cases"],
    "Krista, 40, has years of irregular bleeding and has never been sexually active. She declines a pelvic exam. How do you assess her pelvis?",
    ["Respect her decision and arrange a transabdominal pelvic ultrasound",
     "Examine her anyway; a bimanual exam is required",
     "No assessment is needed in someone never sexually active",
     "CT of the pelvis",
     "Refer straight for hysterectomy"],
    0,
    "Consent is paramount; a <b>transabdominal ultrasound</b> (full bladder) gives a non-invasive view of the uterus, endometrium and ovaries. She still needs assessment: years of anovulatory bleeding at 40 raise concern for <b>endometrial hyperplasia</b>, so she will likely need an endometrial biopsy as well, discussed with her. CT is poor for the endometrium.");
})();

(function () {
  const C = "w4-contraception";
  const D = "w4-gynecology-drugs";

  /* ---------------------------------------------------- 4.3 Contraception */
  qb(C, "#mec", ["workbook-repro-Q12", "Workbook · Reproduction"],
    "A 36-year-old who has smoked for 10 years asks for the contraceptive patch. What do you advise?",
    ["The patch is contraindicated; offer a progestin-only or non-hormonal method (e.g., LNG-IUS, implant, DMPA, copper IUD)",
     "No contraindication; start the patch",
     "The patch is contraindicated, but the combined pill is fine",
     "The vaginal ring is fine because its estrogen acts only locally",
     "No hormonal method is safe for her at all"],
    0,
    "Smoking (especially ≥ 15 cigarettes a day) <b>over age 35</b> is a contraindication to <b>every estrogen-containing</b> method: pill, patch and ring (the ring's estrogen is absorbed systemically). <b>Progestin-only</b> methods (LNG-IUS, implant, DMPA, POP) and the copper IUD remain fine.");

  qb(C, "#choice", ["workbook-repro-Q16", "Workbook · Reproduction"],
    "Which contraceptive has the lowest pregnancy rate in typical use?",
    ["Levonorgestrel IUS", "Copper IUD", "Female sterilization", "Depot medroxyprogesterone", "Combined pill"],
    0,
    "The <b>LNG-IUS and the etonogestrel implant</b> are the most effective methods (about 1–2 per 1,000 in the first year), even better than tubal sterilization. They also have the highest continuation rates. User-dependent methods (pill, patch, ring, DMPA) fail far more in typical use, mostly from missed or late doses.");

  qb(C, "#combined", ["workbook-repro-Q17", "Workbook · Reproduction"],
    "Julie, 20, has only used condoms and wants better protection, but wants to avoid unpredictable spotting. Which method fits best?",
    ["The combined vaginal ring", "LNG-IUS", "Progestin-only pill", "Diaphragm", "Etonogestrel implant"],
    0,
    "Progestin-only methods (IUS, implant, POP, DMPA) commonly cause <b>irregular bleeding and spotting</b>, especially early on. A <b>combined</b> method (ring, pill, patch) gives predictable withdrawal bleeds. A diaphragm doesn't affect bleeding but is much less effective. Remind her that none of them protect against STIs.");

  qb(C, "#mec", ["workbook-repro-Q18", "Workbook · Reproduction"],
    "Which contraceptive can you prescribe for someone with migraine <b>with aura</b>?",
    ["LNG-IUS", "Combined pill", "Transdermal patch", "Vaginal ring", "Extended-cycle combined pill"],
    0,
    "Migraine with aura raises ischemic stroke risk, and <b>estrogen multiplies it</b>, so every combined method is MEC category 4. Progestin-only methods and the copper IUD are fine. Migraine <i>without</i> aura is not an absolute contraindication.");

  qb(C, "#mec", ["workbook-repro-Q19", "Workbook · Reproduction"],
    "Which is an absolute contraindication to <b>starting</b> the combined pill?",
    ["Unexplained abnormal vaginal bleeding", "Adenomyosis", "Functional ovarian cysts", "Well-controlled hypertension", "Irregular cycles"],
    0,
    "Never start hormones on top of <b>bleeding you haven't explained</b> (it could be pregnancy, cancer or infection); investigate first. Adenomyosis, irregular cycles and cysts are reasons to <i>use</i> the pill. Hypertension becomes a contraindication when uncontrolled (≥ 160/100).");

  qb(C, "#combined", ["workbook-repro-Q20", "Workbook · Reproduction"],
    "Which method should <b>not</b> be started immediately postpartum?",
    ["Combined vaginal ring", "Copper IUD", "LNG-IUS", "Progestin-only pill", "DMPA injection"],
    0,
    "VTE risk is highest in the weeks after delivery, so <b>estrogen-containing</b> methods are avoided early postpartum (generally the first 3–6 weeks, longer with risk factors; estrogen can also reduce milk supply). Progestin-only methods and IUDs (immediately after the placenta or at the postpartum visit) are fine, including while breastfeeding.");

  qb(C, "#ec", ["workbook-repro-Q63", "Workbook · Reproduction"],
    "A young woman in the ED had unprotected sex 3 days ago and wants emergency contraception. She's healthy. What is the first step?",
    ["A pregnancy test", "Insert a copper IUD", "Send her to a pharmacy for levonorgestrel", "Prescribe the Yuzpe regimen", "Reassure her that it's too late"],
    0,
    "The most effective EC is the <b>copper IUD</b> (up to 7 days, failure ~0.1%), but you must exclude an <b>existing pregnancy</b> before placing a device. Pills: <b>ulipristal</b> to 120 h (better than levonorgestrel, especially later); <b>levonorgestrel</b> best within 72 h (less effective at higher weights); Yuzpe is the least effective.");

  qb(C, "#ec", ["reviews-repro-Q10", "Written from review slides"],
    "A 22-year-old had unprotected intercourse <b>6 days</b> ago. Pregnancy test negative. Which emergency contraception can still work?",
    ["Copper IUD", "Levonorgestrel 1.5 mg", "Ulipristal 30 mg", "Yuzpe regimen", "Progestin-only pill"],
    0,
    "Pill windows end at <b>5 days</b> (ulipristal, and levonorgestrel at its outer limit). The <b>copper IUD</b> works up to <b>7 days</b> after intercourse (by impairing sperm and implantation), is the most effective EC, and then becomes ongoing contraception.");

  qb(C, "#iud", ["reviews-repro-Q11", "Written from review slides"],
    "Which is a contraindication to inserting an IUD today?",
    ["Current mucopurulent cervicitis", "Nulliparity", "PID treated 3 years ago", "Well-controlled HIV", "Age 17"],
    0,
    "IUD contraindications: pregnancy, <b>current</b> PID or cervicitis (treat first), immediately after septic abortion, a distorted cavity, unexplained bleeding, certain gestational trophoblastic disease, pelvic TB (and current breast cancer for the hormonal IUD). Nulliparity, adolescence, HIV and a <b>past</b> PID are not contraindications.");

  qb(C, "#mec", ["new-repro-Q1", "Module case"],
    "Clarise, 18, wants contraception and is worried about weight gain. Her mother had a postoperative DVT and her sister a PE after starting the pill. Which options suit her best?",
    ["A progestin-only pill, copper IUD or LNG-IUS",
     "A combined pill, since she has no clots herself",
     "DMPA injections",
     "The combined patch, since it avoids first-pass metabolism",
     "The combined ring"],
    0,
    "First-degree relatives with VTE (one on the pill) raise concern for an inherited <b>thrombophilia</b> (e.g., factor V Leiden), so avoid estrogen until it's evaluated. <b>DMPA</b> is the method most linked to <b>weight gain</b>. The patch and ring carry at least the pill's VTE risk (bypassing first-pass metabolism doesn't make them safer).");

  qb(C, "#iud", ["new-repro-Q2", "Module case"],
    "Beth, 41, G2P2, is done having children. Her periods are regular and light. She has no drug coverage and often goes 2–3 months without contraception because she can't afford the pill. What fits best?",
    ["A copper IUD, or permanent contraception",
     "LNG-IUS",
     "DMPA every 3 months",
     "A continuous combined pill",
     "Condoms alone"],
    0,
    "Her real risk is the <b>gaps</b> caused by cost. A <b>copper IUD</b> is cheap up front and then free for years (her light periods leave room for its main downside, heavier bleeding), and tubal sterilization or vasectomy is covered and permanent. Ongoing-cost methods keep recreating the gaps.");

  qb(C, "#iud", ["new-repro-Q4", "Module case"],
    "Tara, 36, smokes a pack a day, injects drugs, is HIV and hepatitis C positive and non-adherent to her medications, and has very heavy regular periods. She had PID 2 years ago and doesn't want to be pregnant. Which method fits best?",
    ["An LNG-IUS, inserted the same day (at no cost if possible)",
     "A progestin-only pill starting today",
     "A combined pill once her smoking is addressed",
     "Condoms alone",
     "No method until her PID history is investigated"],
    0,
    "She can't take anything daily, so choose a <b>LARC</b>; the <b>LNG-IUS</b> also treats her heavy bleeding. Combined methods are out (smoker over 35). A <b>past</b> PID isn't a contraindication to an IUD; only current infection is (screen at insertion). Encourage condoms <i>as well</i> for STI and HIV protection.");

  qb(C, "#combined", ["workbook-repro-Q72", "Workbook · Reproduction"],
    "You start a combined pill. Which symptom should make her stop it and seek care immediately?",
    ["Severe pain and swelling in one leg", "Missing a withdrawal bleed", "Breast tenderness", "Breakthrough spotting in the first 3 months", "Mild nausea"],
    0,
    "Teach the warning signs of <b>thrombosis</b> ('ACHES'): severe Abdominal pain, Chest pain or shortness of breath, Headache (severe, or new focal symptoms), Eye problems, and Severe leg pain or swelling. Spotting in the first months, nausea and breast tenderness are common and settle.");

  qb(C, "#combined", ["workbook-repro-Q74", "Workbook · Reproduction"],
    "ET's acne has worsened on a levonorgestrel-containing combined pill. When choosing another brand, what matters most?",
    ["Choose a less androgenic or anti-androgenic progestin (e.g., drospirenone, cyproterone)",
     "Lower the estrogen dose",
     "Switch to a triphasic formulation",
     "Switch to a progestin-only pill",
     "Stop hormonal contraception entirely"],
    0,
    "Progestins differ in <b>androgenic activity</b>. Levonorgestrel is relatively androgenic; <b>drospirenone</b> (a spironolactone derivative) and <b>cyproterone</b> are anti-androgenic and help acne and hirsutism (with a somewhat higher VTE risk). Estrogen raises SHBG, which helps too, so lowering it won't.");

  qb(C, "#progestin", ["hippo-repro-Q17", "HippoNotes"],
    "Why must the progestin-only pill (norethindrone 0.35 mg) be taken at the same time every day?",
    ["It works mainly through local effects (thick cervical mucus) that wear off within ~27 hours; ovulation is suppressed in only about half of cycles",
     "It suppresses ovulation completely, but only for 12 hours",
     "Its estrogen component has a short half-life",
     "Late doses cause thrombosis",
     "Timing doesn't matter for the POP"],
    0,
    "The POP relies on <b>cervical mucus thickening</b> and endometrial and tubal effects rather than reliable ovulation suppression (about 50%). Those effects fade quickly, so a dose more than <b>3 hours late</b> needs 48 hours of backup. It's the least forgiving pill, a poor choice for shift workers or erratic schedules.");

  qb(C, "#barrier", ["hippo-repro-Q21", "HippoNotes"],
    "Which contraceptive should <b>not</b> be used by someone at high risk of HIV?",
    ["Nonoxynol-9 spermicide", "Condoms", "Copper IUD", "Tubal ligation", "LNG-IUS"],
    0,
    "<b>Nonoxynol-9</b> damages the vaginal epithelium with frequent use and <b>increases HIV transmission</b>, so it's contraindicated in people at high risk. Condoms remain the only methods that also protect against STIs, which is why 'dual protection' (condom plus an effective method) is advised.");

  qb(C, "#progestin", ["weekly-repro-Q12", "Weekly quiz"],
    "DMPA (Depo-Provera) carries a boxed warning. About what?",
    ["Loss of bone mineral density", "Breast cancer", "Diabetes", "Suicidality", "Permanent infertility"],
    0,
    "DMPA suppresses estrogen, causing <b>BMD loss</b> that is largest in the first 2 years, then plateaus and <b>recovers after stopping</b>; it hasn't been shown to raise fracture risk. Counsel about it, plus calcium, vitamin D and exercise. Other downsides: weight gain, irregular bleeding, and a delayed return of fertility (up to ~10–18 months), but no permanent infertility.");

  qb(C, "#mec", ["weekly-repro-Q23", "Weekly quiz"],
    "Which is an absolute contraindication to combined hormonal contraception (pill, patch or ring)?",
    ["A current thrombotic state (e.g., acute DVT, known high-risk thrombophilia)", "Breast fibroadenoma", "Tension headaches", "Smoking at age 25", "Therapeutic anticoagulation for a past DVT"],
    0,
    "Absolute contraindications cluster around <b>VTE</b> (current or past VTE, known thrombophilia, major surgery with immobilization), <b>arterial disease</b> (stroke, MI, migraine with aura, uncontrolled hypertension, smoker ≥ 35) and <b>estrogen-sensitive cancer or liver disease</b>, plus unexplained bleeding. Smoking matters from age 35; fibroadenomas and tension headaches don't count. Fully anticoagulated patients are sometimes managed with hematology input.");

  /* ---------------------------------------------------- 4.4 Gynecology drugs */
  qb(D, "#physiology", ["module-repro-Q1", "Elentra module"],
    "Which actions are shared by <b>both</b> estrogen and progesterone? <i>(Select all that apply.)</i>",
    ["Stimulating proliferation of breast tissue", "Altering LH and FSH release", "Stimulating endometrial proliferation", "Increasing uterine contractility", "Reducing bone resorption"],
    [0, 1],
    "They oppose each other in many tissues: estrogen <b>proliferates</b> the endometrium, while progesterone <b>differentiates</b> it (secretory change) and quiets uterine contractility. Both are proliferative in the <b>breast</b> and both feed back on gonadotropins (estrogen on amplitude, progesterone on pulse frequency). Bone protection is mainly estrogen's.");

  qb(D, "#contraceptive-moa", ["new-repro-Q47", "CBL cases"],
    "How do Yasmin (ethinyl estradiol + drospirenone) and Micronor (norethindrone 0.35 mg) differ in how they prevent pregnancy?",
    ["Yasmin works centrally (suppresses GnRH and the LH surge, so ovulation); Micronor works mainly locally (cervical mucus, endometrium, tubes)",
     "Both mainly suppress ovulation; they differ only in estrogen dose",
     "Yasmin works on cervical mucus; Micronor suppresses ovulation",
     "Both act only locally",
     "Micronor is a selective progesterone receptor modulator"],
    0,
    "Combined methods reliably <b>suppress ovulation</b> (estrogen suppresses FSH, progestin suppresses the LH surge). The <b>progestin-only pill</b> suppresses ovulation in only ~50% of cycles and relies on <b>thick cervical mucus</b>, a thin endometrium and reduced tubal motility. Drospirenone adds anti-androgenic and anti-mineralocorticoid effects.");

  qb(D, "#components", ["module-repro-Q15", "Slide concept check"],
    "Why aren't estrogen-only preparations used as contraceptives (or as HRT in someone with a uterus)?",
    ["Unopposed estrogen drives endometrial hyperplasia and cancer; the progestin protects the endometrium",
     "Estrogen isn't absorbed orally",
     "Estrogen alone causes more breast cancer than combined pills",
     "Estrogen has no effect on ovulation",
     "Estrogen causes hypercalcemia"],
    0,
    "Estrogen proliferates the endometrium; a <b>progestin opposes it</b>. That's why combined hormonal contraception <b>lowers endometrial (and ovarian) cancer risk</b>, and why women with a uterus on estrogen therapy need a progestin. Breast cancer risk goes the other way: combined estrogen plus progestin raises it slightly.");

  qb(D, "#serious", ["module-repro-Q7", "Elentra module"],
    "Which is an absolute contraindication to <b>combined</b> contraceptives but generally <b>not</b> to progestin-only methods?",
    ["Active or past venous thromboembolism", "Current breast cancer", "Undiagnosed vaginal bleeding", "Severe liver failure", "Pregnancy"],
    0,
    "The <b>estrogen</b> component raises clotting factors and VTE risk. Progestin-only methods carry little or no VTE risk (the anti-androgenic progestins drospirenone and cyproterone are the exception, in combined pills). Breast cancer, unexplained bleeding and severe liver disease contraindicate both.");

  qb(D, "#modulators", ["workbook-repro-Q10", "Workbook · Reproduction"],
    "A 58-year-old has been on tamoxifen for ER-positive breast cancer for 3 years and now has postmenopausal bleeding. Why is this particularly concerning?",
    ["Tamoxifen is an estrogen agonist in the endometrium and raises the risk of hyperplasia and endometrial cancer",
     "Tamoxifen causes vaginal atrophy only",
     "Tamoxifen is an estrogen antagonist everywhere",
     "Bleeding is an expected side effect that needs no work-up",
     "Tamoxifen causes osteoporosis, which bleeds"],
    0,
    "<b>SERMs</b> act as agonists in some tissues and antagonists in others. Tamoxifen: <b>antagonist in breast</b>, <b>agonist in endometrium</b> (polyps, hyperplasia, cancer) and bone; it also raises VTE risk. Any bleeding on tamoxifen needs an endometrial assessment. Raloxifene is an antagonist in both breast and endometrium and is used for osteoporosis.");

  qb(D, "#period-drugs", ["module-repro-Q11", "Elentra module"],
    "Why do NSAIDs relieve primary dysmenorrhea?",
    ["They inhibit COX and reduce endometrial prostaglandin synthesis, decreasing uterine contractions",
     "They reduce progesterone synthesis",
     "They reduce uterine blood flow",
     "They block estrogen receptors",
     "They relax the cervix"],
    0,
    "As progesterone falls at the end of the cycle, the endometrium releases <b>prostaglandins (PGF2α)</b> that cause strong contractions and ischemic pain. NSAIDs block COX, cutting prostaglandin production, and work best started at or just before the onset of bleeding. They also reduce menstrual blood loss. Second line: combined hormonal contraception.");

  qb(D, "#modulators", ["module-repro-Q13", "Elentra module"],
    "A 34-year-old with endometriosis has been on a GnRH agonist (leuprolide) for 6 months. Which adverse effect limits how long it can be continued?",
    ["Bone loss from the hypoestrogenic state", "Weight loss", "Improved libido", "Fewer hot flashes", "Increased muscle mass"],
    0,
    "Continuous GnRH agonist → initial flare, then <b>receptor down-regulation</b> → a medical menopause: hot flashes, vaginal dryness, mood change and <b>BMD loss</b>. 'Add-back' estrogen plus progestin (or norethindrone) protects bone and symptoms while keeping estrogen low enough to treat the disease.");

  qb(D, "#serious", ["new-repro-Q51", "CBL cases"],
    "Patricia, 49, perimenopausal and in a new relationship, wants contraception. She's a non-smoker, BMI 24, with hypertension controlled on enalapril (130/80), and no migraine or VTE history. Is combined hormonal contraception contraindicated?",
    ["No: controlled hypertension isn't an absolute contraindication; weigh the benefits against age-related VTE risk",
     "Yes: any hypertension is an absolute contraindication",
     "Yes: age over 45 rules out all hormonal methods",
     "Yes: she needs to stop enalapril first",
     "No, and her hypertension is irrelevant to the choice"],
    0,
    "Contraindications are graded by <b>Medical Eligibility Criteria</b>. Hypertension becomes category 4 at <b>≥ 160 systolic or ≥ 100 diastolic</b>; controlled hypertension is category 3 for combined methods (risks usually outweigh benefits), so it's not automatically ruled out, though progestin-only or IUD options are often preferred. Combined methods would help her cycles, acne and perimenopausal symptoms. (Contraception is needed until 12 months after the last period, or age 50–55.)");

  qb(D, "#components", ["new-repro-Q53", "CBL cases"],
    "Does the delivery route of combined hormonal contraception (pill vs patch vs ring) matter?",
    ["Yes: the patch and ring bypass first-pass metabolism but don't lower VTE risk (the patch gives higher estrogen exposure), and adherence demands differ",
     "No: all routes deliver the same exposure",
     "Yes: bypassing the liver removes the VTE risk",
     "Only the pill can cause VTE",
     "Route matters only for cost"],
    0,
    "Non-oral combined methods avoid first-pass metabolism, but the <b>patch delivers more total estrogen</b> and VTE risk is <b>no lower</b> (possibly higher). Route changes <b>adherence</b> (daily vs weekly vs monthly) and other effects. The patch may also be less effective above ~90 kg.");

  qb(D, "#period-drugs", ["new-repro-Q54", "CBL cases"],
    "A 37-year-old with heavy menstrual bleeding and iron-deficiency anemia is given tranexamic acid and naproxen while awaiting investigations. How does each work?",
    ["Tranexamic acid blocks plasminogen activation (antifibrinolytic); naproxen inhibits COX and prostaglandin synthesis",
     "Both inhibit COX",
     "Tranexamic acid inhibits COX; naproxen stabilizes clots",
     "Both thin the endometrium",
     "Both are progestins"],
    0,
    "<b>Tranexamic acid</b> blocks the lysine-binding site on plasminogen, so clots in the endometrium aren't broken down (cuts flow ~40%; symptomatic only, taken during menses). <b>NSAIDs</b> lower prostaglandins, reducing flow (~25%) and cramps. Neither treats the cause: that's what the investigations are for.");

  qb(D, "#period-drugs", ["new-repro-Q55", "CBL cases"],
    "The same patient takes a combined oral contraceptive. What interaction matters most with tranexamic acid?",
    ["Additive thrombotic risk: an antifibrinolytic on top of an estrogen-containing pill",
     "Tranexamic acid makes the pill ineffective",
     "Naproxen and tranexamic acid together cause renal failure in everyone",
     "Iron deficiency is an absolute contraindication to both",
     "There is no relevant concern"],
    0,
    "Tranexamic acid is contraindicated with <b>active or past VTE</b>, and using it with <b>combined hormonal contraception</b> adds to thrombotic risk, so it's a caution worth naming. NSAIDs are avoided with severe kidney disease, peptic ulcer and bleeding disorders.");

  qb(D, "#modulators", ["new-repro-Q56", "CBL cases"],
    "Ultrasound shows three fibroids. Which drugs can actually <b>shrink</b> them?",
    ["GnRH agonists (leuprolide) and GnRH antagonists (relugolix), by inducing a hypoestrogenic state",
     "Tranexamic acid and ibuprofen",
     "The LNG-IUS",
     "Combined oral contraceptives",
     "Iron supplements"],
    0,
    "Fibroids are estrogen- and progesterone-dependent. <b>GnRH analogues</b> suppress the axis and shrink them (useful before surgery or as a bridge to menopause; regrowth after stopping). Tranexamic acid, NSAIDs, the LNG-IUS and the COCP reduce bleeding but not size. Ulipristal (an SPRM) also shrinks fibroids but has liver-injury warnings.");

  qb(D, "#modulators", ["new-repro-Q57", "CBL cases"],
    "She's started on relugolix combined with low-dose estradiol and norethindrone. Why are the estradiol and norethindrone included?",
    ["'Add-back' to prevent bone loss and hot flashes from the hypoestrogenic state, with the progestin protecting the endometrium",
     "To provide contraception",
     "To boost fibroid shrinkage",
     "To prevent a flare, which antagonists cause",
     "To raise her hemoglobin"],
    0,
    "GnRH antagonists cause <b>no flare</b> but do produce a menopausal state. Low-dose <b>add-back</b> restores enough estrogen to protect bone and limit vasomotor symptoms without feeding the fibroids; the progestin prevents unopposed-estrogen endometrial hyperplasia. She should stop her separate combined pill (duplicate hormones, extra VTE risk) and use non-hormonal contraception.");

  qb(D, "#modulators", ["new-repro-Q48", "CBL cases"],
    "How do levonorgestrel and ulipristal differ as emergency contraceptives?",
    ["Both delay ovulation by blunting the LH surge; ulipristal (an SPRM) still works closer to ovulation and up to 120 h, while levonorgestrel is best within 72 h",
     "Both terminate an implanted pregnancy",
     "Both prevent implantation only, with identical windows",
     "Levonorgestrel works to 120 h and ulipristal to 72 h",
     "Ulipristal is a GnRH antagonist"],
    0,
    "Oral EC works <b>before ovulation</b>, by delaying it; neither disrupts an established pregnancy (mifepristone is the abortion drug). <b>Ulipristal</b> (a selective progesterone receptor modulator) can still delay follicle rupture after the LH rise has started, so it's more effective, especially from 72–120 h. Levonorgestrel may be less effective at higher BMI. Wait 5 days after ulipristal before restarting hormonal contraception.");

  qb(D, "#contraceptive-moa", ["new-repro-Q50", "CBL cases"],
    "Caroline, a night-shift nurse, keeps missing her combined pill and has gained weight. Which longer-term option fits best?",
    ["A long-acting method: LNG-IUS, etonogestrel implant or copper IUD",
     "Switch to the progestin-only pill",
     "Same pill with a phone alarm",
     "The combined patch",
     "Levonorgestrel EC after each episode"],
    0,
    "Her failure is <b>adherence</b>, so remove the daily step: <b>LARC</b>. The POP is the <i>least</i> forgiving pill (3-hour window); the patch may be less effective at higher body weight and still needs weekly changes; repeated EC isn't ongoing contraception.");
})();

(function () {
  const VD = "w4-vaginal-discharge", STI = "w4-sti-approach", PH = "w4-public-health-stis", CX = "w4-cervical-cancer-screening";

  /* ---------------------------------------------------- 4.5 Vaginal discharge */
  qb(VD, "#bv", ["hippo-repro-Q15", "HippoNotes"],
    "A 26-year-old with a Mirena IUD has a grey, fishy-smelling discharge. Vaginal pH 5.7, positive whiff test, clue cells 22% of epithelial cells on wet mount. Diagnosis?",
    ["Bacterial vaginosis", "Trichomoniasis", "Candidiasis", "Atrophic vaginitis", "Physiologic discharge"],
    0,
    "<b>Amsel criteria</b> (any 3 of 4): thin homogeneous grey-white discharge, <b>pH > 4.5</b>, positive <b>whiff</b> (amine) test, <b>clue cells > 20%</b>. She has all four. Candida: pH &lt; 4.5, whiff negative, hyphae. Trichomonas: frothy yellow-green discharge, motile trichomonads, strawberry cervix.");

  qb(VD, "#bv", ["reviews-repro-Q7", "Written from review slides"],
    "A 27-year-old with a new partner has a fishy odour worse after sex, a thin grey discharge, pH 5.0 and clue cells. Which statement is correct?",
    ["It isn't an STI, but it raises the risk of acquiring one; treat her with metronidazole (partner not treated)",
     "It's an STI: treat her partners",
     "Culture is required to confirm it",
     "Oral fluconazole is first line",
     "It's only treated in pregnancy"],
    0,
    "<b>BV</b> is a shift in vaginal flora (loss of lactobacilli, overgrowth of anaerobes like <i>Gardnerella</i>). It's the most common infectious vaginitis and is <b>not an STI</b>, but it raises the risk of acquiring STIs and HIV and of pregnancy complications. Treat symptomatic women with <b>metronidazole</b> (oral or vaginal; clindamycin is an alternative). Culture isn't used.");

  qb(VD, "#trich", ["reviews-repro-Q6", "Written from review slides"],
    "A 24-year-old has a profuse yellow-green, malodorous, frothy discharge with vulvar itch; pH 5.5; NAAT positive for <i>Trichomonas vaginalis</i>. Treatment?",
    ["Oral metronidazole, and treat her partners", "Metronidazole vaginal gel", "Single-dose oral fluconazole", "Clindamycin cream", "Boric acid suppositories"],
    0,
    "Trichomoniasis <b>is an STI</b>: oral metronidazole (single dose or 7 days) and <b>treat partners</b>, or she'll be reinfected; screen for other STIs. Vaginal metronidazole gel doesn't reach the urethra and periurethral glands, so it's ineffective for trich. Classic exam finding: '<b>strawberry cervix</b>' (punctate hemorrhages).");

  qb(VD, "#candida", ["reviews-repro-Q8", "Written from review slides"],
    "A 30-year-old finishing amoxicillin has intense vulvar itch and burning with a thick white 'cottage cheese' discharge. pH 4.0, whiff test negative. Best treatment?",
    ["A topical (intravaginal) azole or a single dose of oral fluconazole", "Oral metronidazole for 7 days", "Treat her partner too", "Vaginal estrogen", "IM ceftriaxone"],
    0,
    "<b>Vulvovaginal candidiasis</b>: itch, burning, thick curd-like discharge, <b>normal pH (≤ 4.5)</b>, whiff negative, hyphae on KOH. Antibiotics, pregnancy, diabetes and immunosuppression predispose. Azoles by any route work (use topical in pregnancy). It's not an STI, so partners aren't treated.");

  qb(VD, "#cycle", ["weekly-repro-Q25", "Weekly quiz"],
    "A 17-year-old notices discharge that changes through the month from watery to thicker or mucousy. No itch, no odour; speculum exam is normal. What is it?",
    ["Physiologic discharge", "Bacterial vaginosis", "Trichomoniasis", "Candidiasis", "Chlamydial cervicitis"],
    0,
    "Physiologic discharge <b>varies with the cycle</b>: clear, stretchy and copious around ovulation (estrogen), thicker and stickier in the luteal phase (progesterone). No itch, odour or inflammation. Infections tend to be persistent and come with odour, itch or colour change. Reassure her and avoid douching.");

  qb(VD, "#the-four", ["workbook-repro-Q30", "Workbook · Reproduction"],
    "On speculum exam the cervix has punctate red hemorrhages ('strawberry cervix'). Which organism is most likely?",
    ["<i>Trichomonas vaginalis</i>", "<i>Gardnerella</i> (bacterial vaginosis)", "<i>Candida albicans</i>", "<i>Chlamydia trachomatis</i>", "HSV-2"],
    0,
    "Strawberry cervix (colpitis macularis) is classic for <b>trichomoniasis</b>. Match the clues: fishy odour and clue cells → BV; thick adherent white plaques → candida; mucopurulent discharge with a friable cervix → chlamydia or gonorrhea; thin, pale, easily bleeding mucosa → atrophic vaginitis.");

  /* ---------------------------------------------------- 4.6 STIs */
  qb(STI, "#gonorrhea", ["workbook-repro-Q31", "Workbook · Reproduction"],
    "Sarah, 19, has dysuria, frequency and a purulent discharge; her swab is positive for <i>Neisseria gonorrhoeae</i>. What is the treatment principle?",
    ["IM ceftriaxone plus treatment covering chlamydia (doxycycline or azithromycin), and test of cure",
     "Oral amoxicillin alone",
     "Oral metronidazole",
     "IM penicillin G benzathine",
     "Single-dose azithromycin alone"],
    0,
    "Gonorrhea: <b>ceftriaxone IM</b> (resistance limits oral options), plus <b>chlamydia co-treatment</b> unless chlamydia has been excluded, since co-infection is common. Treat partners, test of cure for gonorrhea (resistance is rising), report to public health. Penicillin is for syphilis; metronidazole for trich and BV.");

  qb(STI, "#syphilis", ["module-repro-Q26", "Elentra module"],
    "Which findings describe <b>secondary</b> syphilis?",
    ["A non-itchy rash including the palms and soles, condylomata lata and diffuse lymphadenopathy",
     "A single painless ulcer (chancre)",
     "Gummas and aortitis",
     "No symptoms, with only positive serology",
     "Neurosyphilis with tabes dorsalis"],
    0,
    "<b>Primary</b>: painless chancre (heals in weeks). <b>Secondary</b> (weeks to months later): systemic illness, <b>rash on the palms and soles</b>, <b>condylomata lata</b> (flat, moist, highly infectious; not HPV's cauliflower condylomata acuminata), lymphadenopathy. <b>Latent</b>: serology only. <b>Tertiary</b>: gummas, cardiovascular, neurosyphilis. Treatment is <b>penicillin G benzathine</b>.");

  qb(STI, "#extras", ["workbook-repro-Q33", "Workbook · Reproduction"],
    "Janet, 32, has fever, malaise, headache and very painful genital vesicles that have broken down into shallow ulcers. Best treatment?",
    ["Oral acyclovir (or valacyclovir)", "IM ceftriaxone + azithromycin", "Oral amoxicillin", "Oral metronidazole", "IM penicillin G benzathine"],
    0,
    "Painful grouped vesicles → shallow ulcers, with systemic symptoms at first episode = <b>genital herpes</b> (HSV-2 or HSV-1). Antivirals shorten the episode; suppressive therapy for frequent recurrences and late in pregnancy. Contrast: syphilitic chancre is <b>painless</b>.");

  qb(STI, "#pid-presentation", ["new-repro-Q6", "Module case"],
    "Sara, 17, has fevers, chills, nausea, diffuse pelvic pain, dyspareunia and a foul discharge. WBC 22; β-hCG negative. On bimanual exam she jumps with cervical movement ('chandelier sign'). Diagnosis?",
    ["Pelvic inflammatory disease", "Ovarian torsion", "Ruptured ectopic pregnancy", "Bacterial vaginosis", "Appendicitis"],
    0,
    "Lower abdominal pain plus <b>cervical motion, uterine or adnexal tenderness</b> in a sexually active young woman = PID, treat empirically (fever, discharge and raised WBC support it). A negative β-hCG excludes ectopic; torsion gives sudden, one-sided pain without discharge; BV doesn't cause peritoneal signs.");

  qb(STI, "#pid-treatment", ["reviews-repro-Q12", "Written from review slides"],
    "A 21-year-old has PID (fever 38.4 °C, cervical motion tenderness, β-hCG negative) and is well enough for outpatient care. Which regimen?",
    ["Ceftriaxone IM once plus doxycycline for 14 days (± metronidazole)",
     "Azithromycin 1 g once",
     "Metronidazole alone for 7 days",
     "Penicillin G benzathine IM",
     "Doxycycline for 7 days alone"],
    0,
    "PID is <b>polymicrobial</b> (chlamydia and gonorrhea are found in fewer than half of cases), so cover gonorrhea (ceftriaxone), chlamydia (doxycycline 14 days) and often anaerobes (metronidazole). <b>Admit</b> for pregnancy, severe illness, tubo-ovarian abscess, uncertain diagnosis or failed oral therapy. Treat partners. An IUD can usually stay in.");

  qb(STI, "#pid-definition", ["workbook-repro-Q38", "Workbook · Reproduction"],
    "Which is <b>not</b> a long-term complication of PID?",
    ["Pelvic abscess", "Ectopic pregnancy", "Tubal factor infertility", "Chronic pelvic pain", "Need for hysterectomy and BSO in severe cases"],
    0,
    "Tubal scarring after PID causes <b>infertility</b>, <b>ectopic pregnancy</b> and <b>chronic pelvic pain</b> (adhesions; perihepatic adhesions are Fitz-Hugh–Curtis). A (tubo-ovarian) <b>abscess</b> is an <i>acute</i> complication of active infection. Each episode raises the risk, which is why early empirical treatment matters.");

  qb(STI, "#hiv", ["hippo-repro-Q9", "HippoNotes"],
    "Which STIs are diagnosed mainly by <b>blood serology</b> rather than a swab or urine NAAT?",
    ["Syphilis, hepatitis B and HIV", "Chlamydia and gonorrhea", "Chlamydia, syphilis and HIV", "Gonorrhea and hepatitis B", "Trichomonas and HSV"],
    0,
    "Mucosal infections (<b>chlamydia, gonorrhea</b>, trich) are diagnosed by <b>NAAT</b> on a vaginal or cervical swab or first-catch urine (plus throat or rectal swabs by exposure). Systemic, bloodborne infections (<b>syphilis, hepatitis B, HIV</b>, hepatitis C) are diagnosed by <b>serology</b>. HSV lesions are swabbed for PCR.");

  qb(STI, "#chlamydia", ["module-repro-Q25", "Elentra module"],
    "When is a <b>test of cure</b> recommended after treating chlamydia?",
    ["In pregnancy (and when adherence or reinfection is a concern)", "Always, 2 weeks after treatment", "Only if she was asymptomatic", "Only if she had PID", "Never"],
    0,
    "Chlamydia test of cure (NAAT ~3–4 weeks after treatment, since earlier tests can detect dead DNA) is done in <b>pregnancy</b>, when adherence is uncertain, with a non-first-line regimen, or when reinfection is likely; all patients get <b>repeat screening ~3–6 months</b> later because reinfection is common. Gonorrhea gets a test of cure more broadly.");

  /* ---------------------------------------------------- 4.7 Public health */
  qb(PH, "#local-trends", ["weekly-repro-Q24", "Weekly quiz"],
    "What is the most commonly reported bacterial STI among young Canadians (and in London–Middlesex)?",
    ["Chlamydia", "Gonorrhea", "Syphilis", "HIV", "Hepatitis B"],
    0,
    "<b>Chlamydia</b>, by a wide margin, mostly asymptomatic in people under 25, which is why sexually active youth are screened. Gonorrhea and infectious syphilis are rising locally (including congenital syphilis); HIV rates are comparatively stable. All are reportable to public health.");

  qb(PH, "#risk", ["hippo-repro-Q12", "HippoNotes"],
    "Which of the following are recognized risk factors for STIs? <i>(Select all that apply.)</i>",
    ["Age under 25 and sexually active", "Injection drug use", "Previous STI", "Relying only on non-barrier contraception", "A new partner or multiple partners"],
    [0, 1, 2, 3, 4],
    "All of them. STIs and bloodborne infections share risk factors (hence 'STBBI'): young age, new or multiple partners, previous STI, condomless sex, substance use (injection drug use), sex work, and contact with someone who has an STI. Non-barrier methods prevent pregnancy, not infection.");

  qb(PH, "#framework", ["weekly-repro-Q26", "Weekly quiz"],
    "A colleague tells you she thinks she was sexually assaulted 2 days ago. After listening and supporting her, what is the best advice?",
    ["Connect her with local sexual-assault resources (including time-sensitive medical care), leaving every decision about reporting to her",
     "Tell her to report it to the police today",
     "Tell her to tell her partner for support",
     "Wait a few weeks before deciding anything",
     "Tell her nothing can be done after 48 hours"],
    0,
    "Support autonomy: the decisions (police, forensic exam, telling others) are <b>hers</b>. A sexual-assault treatment centre offers medical care that is time-sensitive: emergency contraception (copper IUD up to 7 days, ulipristal up to 5), STI prophylaxis, <b>HIV PEP within 72 hours</b>, and optional evidence collection, plus counselling. Pointing her to resources keeps every option open.");

  /* ---------------------------------------------------- 4.8 Cervical screening */
  qb(CX, "#hpv-types", ["workbook-repro-Q50", "Workbook · Reproduction"],
    "Which statement about HPV types is correct?",
    ["HPV 6 and 11 are low-risk types that cause genital warts and low-grade changes, not cancer",
     "HPV 18 is non-oncogenic",
     "HPV 16 only produces low-grade lesions",
     "HPV 6 commonly causes high-grade lesions and cancer",
     "All HPV infections persist for life"],
    0,
    "<b>Low-risk</b> HPV 6 and 11 → condylomata acuminata (~90% of warts) and LSIL, but not HSIL or cancer. <b>High-risk</b> HPV <b>16 and 18</b> cause ~70% of cervical cancers (16 also causes most HPV-related oropharyngeal cancers) and can produce LSIL or HSIL. Most infections clear within 1–2 years; <b>persistence</b> of a high-risk type is what drives progression.");

  qb(CX, "#eligibility", ["new-repro-Q111", "DSSG cases"],
    "Meera, 22, has been sexually active for 4 years. Under Ontario's current program, when and how does her cervical screening start?",
    ["At about 25, with a primary HPV test repeated every 5 years if negative",
     "Now, with cytology every 3 years",
     "At 21, with HPV testing every 3 years",
     "At 25 with cytology, using HPV testing only after an abnormal result",
     "Only once she has had 5 years of sexual activity"],
    0,
    "Ontario has moved to <b>primary HPV testing</b> starting at <b>25</b> for anyone with a cervix who has ever been sexually active, every <b>5 years</b> if negative (cytology is used only as triage for a positive HPV test). Screening younger finds transient infections and leads to overtreatment, which harms future pregnancies (preterm birth after excisional treatment).");

  qb(CX, "#algorithm", ["new-repro-Q114", "DSSG cases"],
    "At 30, Meera's HPV test is positive for <b>HPV 16</b> and her reflex cytology shows ASC-US. What next? And what if it had been a different high-risk type with ASC-US?",
    ["HPV 16/18: colposcopy regardless of cytology. Other high-risk type with normal, ASC-US or LSIL cytology: repeat HPV in 1 year",
     "Repeat HPV in 1 year either way",
     "Colposcopy for both",
     "Repeat cytology in 6–12 months for both",
     "Back to routine 5-year screening for both"],
    0,
    "Under HPV-based screening, <b>HPV 16 or 18 → colposcopy</b> whatever the cytology shows (highest risk). <b>Other high-risk types</b>: high-grade cytology (ASC-H, HSIL, AGC) → colposcopy; normal, ASC-US or LSIL → <b>repeat HPV in 1 year</b>, since most of these clear.");

  qb(CX, "#cytology", ["hippo-repro-Q7", "HippoNotes"],
    "A 43-year-old with postcoital bleeding has cervical cytology showing HSIL. Next step?",
    ["Colposcopy (and biopsy)", "HPV test", "Repeat cytology in 12 months", "Repeat cytology now", "Hysterectomy"],
    0,
    "<b>High-grade</b> cytology (HSIL, ASC-H, AGC, or carcinoma) goes <b>straight to colposcopy</b>. Separately, <b>postcoital bleeding is a symptom</b>: a visible lesion needs a biopsy and colposcopy regardless of screening results. Screening tests are for people without symptoms.");

  qb(CX, "#vaccination", ["new-repro-Q113", "DSSG cases"],
    "Meera, now 25, missed the school HPV vaccine and has been sexually active for years. She is on an immunosuppressant for Crohn disease. Can she be vaccinated, and does she still need screening?",
    ["Yes, she can be vaccinated (3-dose schedule because she's immunosuppressed), and she still needs screening",
     "No: the vaccine is only useful before sexual debut",
     "Yes, and once vaccinated she can stop screening",
     "Yes, a single dose is enough and screening can be every 10 years",
     "No: immunosuppression is a contraindication"],
    0,
    "The 9-valent vaccine still helps after sexual debut (she likely hasn't met every type it covers) and is offered into adulthood. <b>Immunocompromised</b> people get <b>3 doses</b>. Vaccination <b>doesn't replace screening</b>: it doesn't cover every oncogenic type or clear existing infection.");

  qb(CX, "#natural-history", ["weekly-repro-Q22", "Weekly quiz"],
    "Which statement about HPV is true?",
    ["Low-risk HPV types do not cause HSIL or cancer",
     "All HPV infections cause irreversible cervical changes",
     "Vaccinated women no longer need screening",
     "High-risk HPV types never cause LSIL",
     "A 40-year-old with past abnormal screening can't benefit from vaccination"],
    0,
    "Most HPV infections (and most LSILs) <b>regress on their own</b>. High-risk types can cause LSIL, HSIL and cancer; low-risk types cause warts and LSIL only. Vaccinated people still screen, and older or previously exposed people can still benefit from types they haven't had.");
})();

(function () {
  const EP = "w4-early-pregnancy-complications", AUB = "w4-abnormal-uterine-bleeding", VUL = "w4-vulvar-lesions", APP = "w4-acute-pelvic-pain";

  /* ---------------------------------------------------- 4.9 Early pregnancy complications */
  qb(EP, "#sa-types", ["reviews-repro-Q25", "Written from review slides"],
    "At 9 weeks, a woman has heavy bleeding and cramps. The cervical os is open with tissue in the canal; ultrasound shows retained tissue and no fetal heartbeat. Classification?",
    ["Incomplete abortion", "Threatened abortion", "Missed abortion", "Complete abortion", "Inevitable abortion with a live embryo"],
    0,
    "Classify by the <b>os</b> and what's in the uterus: <b>threatened</b> (closed os, live embryo); <b>inevitable</b> (open os, products still inside); <b>incomplete</b> (open os, some products passed, some retained); <b>complete</b> (os closing, uterus empty); <b>missed</b> (closed os, non-viable pregnancy retained). Remove tissue sitting in the os (it causes vagal symptoms and bleeding), then choose expectant, medical or surgical management.");

  qb(EP, "#sa-management", ["hippo-repro-Q52", "HippoNotes"],
    "Which statement about managing spontaneous abortion is <b>false</b>?",
    ["Mifepristone plus misoprostol is first-line for a threatened abortion",
     "Septic abortion needs IV broad-spectrum antibiotics and uterine evacuation",
     "Misoprostol commonly causes nausea, diarrhea and fever or chills",
     "Rh-negative women may need anti-D immune globulin",
     "Missed abortion can be managed expectantly, medically or surgically"],
    0,
    "A <b>threatened</b> abortion may still continue, so management is <b>expectant</b> (and treat BV if present). Medications that empty the uterus are for non-viable pregnancies (missed or incomplete). <b>Septic</b> abortion: antibiotics plus prompt evacuation of the source.");

  qb(EP, "#ep-investigations", ["module-repro-Q46", "Slide concept check"],
    "Above roughly what β-hCG level should a normal intrauterine gestational sac be visible on <b>transvaginal</b> ultrasound?",
    ["About 1,500 IU/L (the discriminatory zone)", "About 100 IU/L", "About 500 IU/L", "About 6,500 IU/L", "About 25 IU/L"],
    0,
    "The <b>discriminatory zone</b> (~1,500–2,000 IU/L transvaginally; much higher transabdominally): above it, an empty uterus raises strong concern for <b>ectopic</b>; below it with nothing seen it's a <b>pregnancy of unknown location</b> → repeat β-hCG in 48 h. A viable IUP usually rises by at least ~35–50% in 48 h.");

  qb(EP, "#ep-epi", ["module-repro-Q47", "Slide concept check"],
    "A woman with an IUD in place has a positive pregnancy test. What must you rule out first?",
    ["Ectopic pregnancy", "Missed abortion", "Molar pregnancy", "PID", "Twin pregnancy"],
    0,
    "IUDs prevent intrauterine pregnancy very effectively, so although the absolute ectopic risk is <b>low</b>, a pregnancy that does occur is <b>disproportionately ectopic</b>. Rule: <b>IUD + positive pregnancy test = ectopic until proven otherwise</b>, as is pain plus bleeding plus a positive β-hCG.");

  qb(EP, "#ep-why", ["hippo-repro-Q49", "HippoNotes"],
    "What is the most important risk factor for ectopic pregnancy?",
    ["Previous pelvic inflammatory disease or other tubal damage", "Adenomyosis", "Uterine fibroids", "Previous cesarean section", "Combined pill use"],
    0,
    "Anything that damages tubal transport: <b>previous PID</b> (chlamydia), <b>previous ectopic</b>, tubal surgery or ligation, IVF, smoking, endometriosis and conception with an IUD in place. Fibroids and adenomyosis don't meaningfully raise the risk.");

  qb(EP, "#ep-management", ["reviews-repro-Q26", "Written from review slides"],
    "A stable woman has an unruptured 2.5 cm tubal ectopic, β-hCG 1,800, no cardiac activity. Which finding is an <b>absolute</b> contraindication to methotrexate?",
    ["She is breastfeeding", "She had a previous ectopic", "She conceived with a copper IUD in place", "Her β-hCG is under 2,000", "She is nulliparous"],
    0,
    "Methotrexate (a folate antagonist) is contraindicated with <b>breastfeeding</b>, a <b>viable intrauterine pregnancy</b> (heterotopic), liver, kidney or lung disease, blood dyscrasias, immunodeficiency, peptic ulcer, and inability to follow up; success falls with β-hCG > 5,000, a mass > 3.5–4 cm, or cardiac activity. Prior ectopic and IUD are risk factors, not contraindications; a low β-hCG favours success.");

  qb(EP, "#ep-management", ["new-repro-Q85", "CBL cases"],
    "A stable 34-year-old with mild pain has a 2 cm right adnexal mass with a possible gestational sac, no intrauterine pregnancy, no free fluid. β-hCG 684. She can return for follow-up. What do you recommend?",
    ["Methotrexate with serial β-hCG", "Laparoscopic salpingectomy", "Expectant management only", "Repeat β-hCG in 1 week before deciding", "Dilation and curettage"],
    0,
    "Ideal methotrexate candidate: <b>stable, unruptured, low β-hCG, small mass, no cardiac activity, reliable follow-up</b>. Follow β-hCG on days 4 and 7 (expect a ≥ 15% fall) and then weekly to zero. Expectant management is reserved for very low and falling levels (e.g., &lt; 200). Surgery for instability, rupture or failure.");

  qb(EP, "#ep-management", ["new-repro-Q83", "CBL cases"],
    "A 27-year-old at 6 weeks has worsening lower abdominal pain, shoulder-tip pain, tenesmus and orthostatic vitals. β-hCG 8,962; Hb 122 falling to 105 over 6 hours; ultrasound shows an adnexal mass with cardiac activity and free fluid. Management?",
    ["Laparoscopic surgery", "Methotrexate", "Expectant management", "Repeat β-hCG in 48 hours", "Admit for observation only"],
    0,
    "<b>Surgery</b>: hemoperitoneum (shoulder-tip pain from diaphragmatic irritation, tenesmus from pelvic blood), a <b>falling Hb</b>, β-hCG <b>> 5,000</b> and <b>cardiac activity</b> all rule out medical or expectant care. Salpingectomy if the other tube is normal; salpingotomy if preserving the tube matters. She's O positive, so no anti-D is needed.");

  qb(EP, "#ep-management", ["new-repro-Q84", "CBL cases"],
    "A tubal ectopic was removed by <b>salpingotomy</b> (the tube was opened and kept). What follow-up is needed?",
    ["Serial β-hCG until undetectable, since trophoblast can persist", "None: the pregnancy has been removed", "Ultrasound at 6 weeks only", "HSG before the next pregnancy", "Methotrexate for everyone"],
    0,
    "Salpingotomy can leave <b>persistent trophoblast</b> in the tube, so follow β-hCG to zero (methotrexate if it plateaus or rises). Salpingectomy avoids this. Either way, future ectopic risk is higher, so she needs an <b>early ultrasound</b> in her next pregnancy.");

  qb(EP, "#ep-pul", ["new-repro-Q82", "CBL cases"],
    "After IVF, a woman at 7 weeks has a live intrauterine pregnancy on ultrasound but persistent unilateral pelvic pain and a little free fluid. What diagnosis must still be considered?",
    ["Heterotopic pregnancy (a coexisting ectopic)", "Pregnancy of unknown location", "Molar pregnancy", "Threatened abortion", "Corpus luteum cyst only"],
    0,
    "A visible IUP normally all but excludes an ectopic, but in <b>heterotopic</b> pregnancy (much more common after <b>assisted reproduction</b>) both exist. Keep looking at the adnexa. Methotrexate is contraindicated (it would end the wanted IUP), so the ectopic is managed surgically or by local injection.");

  /* ---------------------------------------------------- 4.15 AUB */
  qb(AUB, "#workup", ["new-repro-Q117", "DSSG cases"],
    "Jackie, 32, G3P3, has heavy menstrual bleeding; vitals and pelvic exam are normal. Which investigations do you start with?",
    ["CBC (with ferritin) and β-hCG; ultrasound, TSH and coagulation studies as indicated",
     "Endometrial biopsy for everyone with heavy bleeding",
     "CA-125 and CT pelvis",
     "No tests: a normal exam means it's functional",
     "Hysteroscopy first"],
    0,
    "First: <b>pregnancy test</b> and <b>CBC/ferritin</b> (how much blood has she lost?). Then targeted tests: <b>pelvic ultrasound</b> for structural causes (PALM), <b>TSH</b> and prolactin, and <b>coagulation/vWD</b> screening if the history suggests it. <b>Endometrial biopsy</b> if ≥ 40, or younger with risk factors for hyperplasia (obesity, anovulation/PMOS, tamoxifen, Lynch) or failed treatment. Ultrasound beats CT for the pelvis.");

  qb(AUB, "#palm-coein", ["new-repro-Q116", "DSSG cases"],
    "Which medical conditions can cause heavy or abnormal uterine bleeding? <i>(Select all that apply.)</i>",
    ["Von Willebrand disease", "Hypothyroidism", "Liver disease", "Polycystic ovary syndrome", "Thrombocytopenia or leukemia"],
    [0, 1, 2, 3, 4],
    "PALM-COEIN's <b>C</b> (coagulopathy: vWD, thrombocytopenia, liver disease, anticoagulants, leukemia) and <b>O/E</b> (ovulatory dysfunction and endocrine: PMOS, thyroid, prolactin, Cushing). vWD is often 'unmasked' at menarche; look for bruising and a family history.");

  qb(AUB, "#treatment", ["new-repro-Q118", "DSSG cases"],
    "What is the general approach to treating heavy menstrual bleeding without a sinister cause?",
    ["Start conservatively (iron, tranexamic acid, NSAIDs), then hormonal options (COCP, LNG-IUS, progestins), then ablation or embolization, with hysterectomy last",
     "Hysterectomy first if she's finished childbearing",
     "GnRH agonist first line for everyone",
     "Tranexamic acid alone long-term fixes timing and regularity",
     "Observation only once anemia is excluded"],
    0,
    "<b>Escalate from least to most invasive</b>. The <b>LNG-IUS</b> is the most effective medical therapy for heavy bleeding; tranexamic acid and NSAIDs reduce volume only. Endometrial <b>ablation</b> requires completed childbearing. <b>Hysterectomy</b> is the only definitive cure, offered when other measures fail or the patient chooses it.");

  qb(AUB, "#treatment", ["workbook-repro-Q61", "Workbook · Reproduction"],
    "A 48-year-old has had worsening heavy periods and now has the worst bleed of her life. After stabilization and a negative pregnancy test, what is the <b>definitive</b> treatment for her recurrent heavy bleeding?",
    ["Hysterectomy", "Combined pill", "Tranexamic acid", "Endometrial ablation", "Clomiphene"],
    0,
    "Only <b>removing the uterus</b> is definitive. Acute management is resuscitation, a negative β-hCG, then tranexamic acid, high-dose estrogen or progestin, or tamponade; and at 48 she needs an <b>endometrial biopsy</b> to exclude hyperplasia or cancer before any long-term plan. Clomiphene induces ovulation and has no role.");

  qb(AUB, "#workup", ["workbook-repro-Q26", "Workbook · Reproduction"],
    "A healthy 31-year-old hasn't had a period in 2 months; pregnancy is excluded. Which test is <b>not</b> indicated now?",
    ["Endometrial biopsy", "Prolactin", "TSH", "FSH and LH", "Hemoglobin"],
    0,
    "This is a secondary amenorrhea work-up (prolactin, TSH, FSH/LH, androgens if hyperandrogenic). <b>Endometrial biopsy</b> is indicated for AUB at <b>≥ 40</b>, or younger with risk factors (obesity, chronic anovulation, tamoxifen, Lynch) or persistent bleeding despite treatment. She has none yet.");

  qb(AUB, "#treatment", ["module-repro-Q43", "Elentra module"],
    "A 42-year-old with heavy menstrual bleeding wants only <b>non-hormonal</b> options. Which is <b>not</b> one?",
    ["Dienogest", "Ibuprofen", "Tranexamic acid", "Iron supplementation", "Mefenamic acid"],
    0,
    "<b>Dienogest</b> (Visanne) is a <b>progestin</b>, so it's hormonal. Non-hormonal options: NSAIDs (ibuprofen, naproxen, mefenamic acid), the antifibrinolytic <b>tranexamic acid</b>, and iron to replace losses.");

  qb(AUB, "#palm-coein", ["workbook-repro-Q134", "Workbook · Reproduction"],
    "A 37-year-old, para 2, has had progressively heavier but painless periods for a year; her mother had the same. Exam shows a bulky, irregular uterus. Most likely cause?",
    ["Leiomyomas (fibroids)", "Adenomyosis", "Endometrial carcinoma", "Endometrial polyp", "Pregnancy"],
    0,
    "<b>Fibroids</b>: very common (most women by 50), run in families, more common in Black women, and cause <b>heavy bleeding</b> (especially submucosal), pressure symptoms and an <b>irregularly enlarged</b> uterus. <b>Adenomyosis</b> classically gives heavy bleeding <b>plus dysmenorrhea</b> with a uniformly enlarged, boggy, tender uterus.");

  qb(AUB, "#approach-by-age", ["new-repro-Q68", "CHSG cases"],
    "Patricia, 13, started her periods 3 months ago; they last 7–9 days and she changes a pad every 2–3 hours. She has petechiae on her legs. Most appropriate first test?",
    ["CBC (platelets and hemoglobin)", "FSH and LH", "TSH", "Pelvic ultrasound", "Endometrial biopsy"],
    0,
    "Heavy bleeding from menarche raises a <b>bleeding disorder</b>, and <b>petechiae</b> point to a <b>platelet</b> problem (ITP, leukemia). A CBC gives the platelet count and how much blood she has lost. Then coagulation and vWD studies. Anovulation is the commonest cause in early adolescence, but it doesn't cause petechiae.");

  qb(AUB, "#workup", ["module-repro-Q42", "Elentra module"],
    "Which blood tests belong in the initial work-up of abnormal uterine bleeding? <i>(Select all that apply.)</i>",
    ["β-hCG", "CBC", "TSH", "Electrolytes", "CA-125"],
    [0, 1, 2],
    "Rule out <b>pregnancy</b>, measure <b>anemia</b> (CBC, ferritin), check <b>TSH</b> (± prolactin), and add coagulation studies if the history suggests a bleeding disorder. Electrolytes and CA-125 have no routine role.");

  /* ---------------------------------------------------- 4.11 Vulvar lesions */
  qb(VUL, "#lichen-simplex-chronicus", ["new-repro-Q19", "Module case"],
    "A 36-year-old with hay fever has an intensely itchy vulvar rash, worse with heat and friction, that keeps her up scratching at night. The skin is thickened (lichenified) without scarring. Diagnosis?",
    ["Lichen simplex chronicus", "Lichen sclerosus", "Lichen planus", "Vulvar candidiasis", "Vulvar intraepithelial neoplasia"],
    0,
    "<b>LSC</b> is the end stage of the <b>itch–scratch cycle</b>: thickened, leathery skin, intense itch, <b>no scarring</b>, often on an atopic or irritant background. Treat by breaking the cycle: remove irritants, potent topical steroid, antihistamine at night, cover the hands. LS and LP both <b>scar</b>.");

  qb(VUL, "#lichen-sclerosus", ["new-repro-Q20", "Module case"],
    "A 60-year-old with hypothyroidism has white, waxy, crinkled 'cellophane' plaques around the vulva and anus in a figure-of-eight, with loss of the labia minora. Diagnosis and key management?",
    ["Lichen sclerosus: ultrapotent topical steroid (clobetasol) and long-term follow-up because of SCC risk",
     "Lichen simplex chronicus: antihistamines only",
     "Lichen planus: oral antivirals",
     "Atrophic vaginitis: vaginal estrogen",
     "Vitiligo: no treatment"],
    0,
    "<b>Lichen sclerosus</b>: an autoimmune disease (linked to thyroid disease) with white, thin, crinkled skin in a <b>figure-of-eight</b> around the vulva and anus, causing <b>architectural loss</b> (resorbed labia minora, buried clitoris). Treat with <b>clobetasol</b>, and follow lifelong: there is a small risk of <b>vulvar SCC</b>, so biopsy anything that doesn't respond.");

  qb(VUL, "#lichen-planus", ["new-repro-Q21", "Module case"],
    "A 50-year-old has burning vulvar pain and dyspareunia. Exam shows glazed red erosions with a white lacy border extending into the vagina. What else must you examine?",
    ["Her mouth (oral mucosa), since erosive lichen planus often involves it",
     "Her nails only",
     "Her breasts",
     "Nothing: it's a vulva-only condition",
     "Her eyes for uveitis only"],
    0,
    "Erosive <b>lichen planus</b>: painful (more than itchy), with erosions and white lacy (Wickham) striae, and it can involve the <b>vagina</b> (scarring, synechiae) and <b>mouth</b> (vulvovaginal–gingival syndrome). Always examine the vulva, vagina and mouth. Treat with potent topical steroids; it scars and carries a small SCC risk.");

  qb(VUL, "#aphthae", ["new-repro-Q22", "Module case"],
    "A 17-year-old has had three episodes, years apart, of a small, very painful vulvar ulcer appearing a day or two after a viral or strep throat illness. She isn't sexually active. Most likely diagnosis?",
    ["Aphthous ulcer (Lipschütz ulcer)", "Primary herpes", "Syphilitic chancre", "Vulvar melanoma", "Molluscum contagiosum"],
    0,
    "Non-sexually acquired <b>vulvar aphthae</b> occur in girls and young women <b>after a viral illness</b> (EBV, influenza, strep), are often large and painful, and heal on their own. Oral aphthae may occur at other times. Exclude HSV; ask about Crohn and Behçet if recurrent. Treat with analgesia (and topical steroid).");

  qb(VUL, "#vulvar-cancer", ["new-repro-Q44", "DSSG cases"],
    "Bea, 82 and bedbound, has a firm, painless, 4 cm left groin node. FNA shows <b>squamous cell carcinoma</b>. Where is the primary most likely to be?",
    ["Vulva (or lower vagina, anus or perianal skin)", "Endometrium", "Ovary", "Stomach or colon", "Cervix (upper)"],
    0,
    "Inguinal nodes drain the <b>vulva, lower vagina, anal canal, perianal skin and lower limb</b>. Squamous histology plus that territory points to <b>vulvar SCC</b>. The non-HPV type in older women is often a solitary lesion on lichen sclerosus and can go unnoticed in someone bedbound. The cervix, upper vagina and uterus drain to the pelvic nodes.");

  qb(VUL, "#vulvar-cancer", ["new-repro-Q46", "DSSG cases"],
    "Bea's exam shows an ulcerated vulvar lesion. What are the next steps?",
    ["Biopsy the vulvar lesion, stage with imaging, and refer to gynecologic oncology (tailoring treatment to her goals and frailty)",
     "Immediate radical vulvectomy with bilateral node dissection",
     "Chemoradiation without biopsy since the node shows carcinoma",
     "Topical clobetasol and recheck in 3 months",
     "Antibiotics for a presumed infected node"],
    0,
    "The FNA diagnosed the <b>node</b>; the <b>primary still needs its own biopsy</b> (histology and depth guide surgery), then staging and <b>gyne-oncology</b> referral. Treatment ranges from wide excision with node assessment to radiation or chemoradiation; at 82 and bedbound, her goals and fitness shape what's offered, including palliative options.");

  /* ---------------------------------------------------- 4.15 Acute pelvic pain */
  qb(APP, "#case-1-ectopic", ["new-repro-Q5", "Module case"],
    "Katie, 25, has sudden RLQ pain, vaginal bleeding, shoulder-tip pain, light-headedness and tenesmus. β-hCG 2,345; Hb 82. Diagnosis?",
    ["Ruptured ectopic pregnancy with hemoperitoneum", "PID with tubo-ovarian abscess", "Ruptured hemorrhagic ovarian cyst", "Incomplete spontaneous abortion", "Appendicitis"],
    0,
    "Positive β-hCG + pain + bleeding = <b>ectopic until proven otherwise</b>. Shoulder-tip pain (blood irritating the diaphragm), tenesmus (blood in the pouch of Douglas), light-headedness and an Hb of 82 mean <b>rupture with hemoperitoneum</b> → resuscitate, crossmatch, and take her to the OR. A hemorrhagic cyst can bleed but doesn't raise β-hCG.");
})();

(function () {
  const PA = "w4-pathology-aub-pelvic-pain", EN = "w4-endometriosis", CPP = "w4-chronic-pelvic-pain", APP = "w4-acute-pelvic-pain";

  /* ---------------------------------------------------- 4.12 Pathology of AUB & pelvic pain */
  qb(PA, "#adenomyosis", ["workbook-repro-Q34", "Workbook · Reproduction"],
    "A 50-year-old has pelvic pain and heavy bleeding. Which feature would argue <b>against</b> adenomyosis?",
    ["She is nulliparous", "A tender, symmetrically enlarged, boggy uterus", "Heavy menstrual bleeding", "She is perimenopausal", "An endometrial biopsy that shows nothing abnormal"],
    0,
    "<b>Adenomyosis</b> = endometrial glands and stroma <b>within the myometrium</b> with smooth-muscle hypertrophy: a diffusely enlarged, boggy, tender uterus with heavy painful periods in <b>parous</b> women in their 40s. It's uncommon in nulliparous women. An endometrial biopsy doesn't reach deep enough to show it (MRI or ultrasound suggest it; hysterectomy confirms it).");

  qb(PA, "#endometriosis", ["new-repro-Q16", "Module case"],
    "Adele, 35, has a year of infertility, worsening dysmenorrhea and premenstrual pelvic pain. Exam: tender nodules in the rectovaginal septum and a fixed uterus. Biopsy of a peritoneal lesion at laparoscopy would show what?",
    ["Endometrial glands and stroma with hemosiderin, outside the uterus",
     "Endometrial glands and stroma deep in the myometrium",
     "A well-circumscribed whorled smooth-muscle nodule",
     "Dilated endometrial glands on a fibrovascular stalk",
     "Atypical endometrial glands crowding out stroma"],
    0,
    "<b>Endometriosis</b> is diagnosed histologically by <b>2 of 3</b>: endometrial glands, endometrial stroma, <b>hemosiderin</b> (from repeated bleeding), <b>outside the uterus</b>. Old lesions can 'burn out' to fibrosis. Glands in the myometrium = adenomyosis; whorled smooth muscle = leiomyoma; a stalk = polyp; crowded atypical glands = hyperplasia or carcinoma.");

  qb(PA, "#the-framework", ["new-repro-Q14", "Module case"],
    "Alexa, 40, has intermenstrual spotting with regular cycles. Exam is normal except a soft, fleshy 2 cm mass protruding from the cervical os. What is the most likely cause, and next step?",
    ["A structural lesion (most likely an endometrial or cervical polyp, or a prolapsing submucosal fibroid): remove it and send it all for pathology",
     "Dysfunctional bleeding: start the pill",
     "A coagulopathy: check von Willebrand studies",
     "Routine cervical screening only",
     "Observe for 6 months"],
    0,
    "A visible lesion moves you to the <b>structural</b> causes. Fleshy masses at the os are usually <b>polyps</b> (endocervical or endometrial) or a <b>prolapsing pedunculated submucosal fibroid</b>, but malignancy must be excluded: remove and send the <b>entire</b> specimen. At 40 with AUB she also needs an endometrial biopsy. Screening tests are for people without symptoms.");

  qb(PA, "#leiomyoma", ["hippo-repro-Q31", "HippoNotes"],
    "What is the most common benign neoplasm of the female genital tract?",
    ["Leiomyoma", "Endometrial polyp", "Adenomyosis", "Endometrial hyperplasia", "Serous cystadenoma"],
    0,
    "<b>Leiomyomas (fibroids)</b>: benign monoclonal smooth-muscle tumours, clinically apparent in ~25% of reproductive-age women and on imaging in most by 50. Estrogen- and progesterone-dependent (they grow in pregnancy and shrink after menopause), and <b>not premalignant</b>. Rapid growth after menopause raises concern for leiomyosarcoma.");

  qb(PA, "#leiomyoma", ["module-repro-Q36", "Elentra module"],
    "Which features can be associated with <b>leiomyomas</b>? <i>(Select all that apply.)</i>",
    ["Heavy or abnormal uterine bleeding", "Pelvic pressure or mass effects (urinary frequency, constipation)", "Infertility or pregnancy loss", "Hormone-dependent growth", "Malignant transformation in most cases"],
    [0, 1, 2, 3],
    "Fibroids cause problems by <b>location</b>: <b>submucosal</b> → heavy bleeding, infertility and miscarriage; <b>intramural</b> → bleeding and bulk; <b>subserosal</b> → pressure symptoms on the bladder and bowel. They grow under estrogen and progesterone. Degeneration (especially in pregnancy) causes acute pain. They are benign, with very rare sarcoma.");

  qb(PA, "#adenomyosis", ["module-repro-Q37", "Elentra module"],
    "Which features are typical of <b>adenomyosis</b>? <i>(Select all that apply.)</i>",
    ["Heavy menstrual bleeding", "Dysmenorrhea", "Hormone-responsive tissue", "Discrete pelvic mass effects", "Neoplasm"],
    [0, 1, 2],
    "Adenomyosis is <b>not a neoplasm</b>: it's misplaced endometrium in the myometrium, which still responds to hormones and bleeds into the muscle, giving <b>heavy, painful periods</b> and a uniformly enlarged uterus (no discrete mass). Hormonal suppression (LNG-IUS, progestins, GnRH analogues) helps; hysterectomy is definitive.");

  qb(PA, "#endometriosis", ["module-repro-Q39", "Elentra module"],
    "Which features are typical of <b>endometriosis</b>? <i>(Select all that apply.)</i>",
    ["Cyclic pelvic pain, dysmenorrhea and deep dyspareunia", "Subfertility", "Adnexal masses (endometriomas)", "Heavy menstrual bleeding as the main symptom", "Neoplasm"],
    [0, 1, 2],
    "Endometriosis presents with <b>pain</b> (cyclic pain that often starts before menses, deep dyspareunia, dyschezia), <b>subfertility</b> (adhesions, tubal distortion, an inflammatory pelvis) and <b>endometriomas</b> ('chocolate cysts'). It isn't a neoplasm, and heavy bleeding isn't its signature; that points to fibroids, polyps or adenomyosis.");

  qb(PA, "#endometrial-polyp", ["weekly-repro-Q29", "Weekly quiz"],
    "A thin, nulliparous 40-year-old has an incidental 5 cm well-circumscribed <b>submucosal</b> solid nodule. She's asymptomatic. Which symptom is she most likely to develop?",
    ["Heavy menstrual bleeding", "Urinary frequency", "Constipation", "Back pain", "Amenorrhea"],
    0,
    "<b>Submucosal</b> lesions (fibroids, polyps) bulge into the cavity and enlarge the bleeding surface, so <b>menorrhagia</b> (and subfertility) is the typical symptom. Pressure symptoms (frequency, constipation, back pain) come from large <b>subserosal</b> or intramural fibroids pressing outward.");

  qb(PA, "#the-framework", ["new-repro-Q119", "DSSG cases"],
    "A woman with heavy bleeding has a friable area on her cervix that bleeds on contact. How does this change your approach?",
    ["It's a structural finding: test for cervicitis and biopsy it (colposcopy) rather than rely on routine screening",
     "Nothing changes; continue the AUB work-up",
     "Wait for her next routine HPV test",
     "Order an endometrial biopsy only",
     "Start the combined pill"],
    0,
    "A visible bleeding lesion could be <b>cervicitis</b> (chlamydia, gonorrhea) or <b>neoplasia</b> (CIN, cancer). Swab for STIs and <b>biopsy</b> it, usually via colposcopy. Screening tests are for asymptomatic people; <b>symptoms or a lesion need diagnostic evaluation</b>, whatever the screening history.");

  /* ---------------------------------------------------- 4.13 Endometriosis */
  qb(EN, "#pain-and-severity", ["reviews-repro-Q14", "Written from review slides"],
    "A 29-year-old has severe cyclic pelvic pain starting 2 days before her period, and deep dyspareunia. Her pelvic exam is normal. Which statement is correct?",
    ["Endometriosis is definitively diagnosed by laparoscopy with biopsy, and a normal exam doesn't exclude it",
     "A normal exam rules out endometriosis",
     "Pain severity reflects how extensive the disease is",
     "Hysterectomy is first line",
     "Pelvic ultrasound reliably diagnoses all endometriosis"],
    0,
    "Endometriosis is often a <b>clinical</b> diagnosis treated empirically; the gold standard is <b>laparoscopy with biopsy</b>. The exam is often normal; ultrasound finds endometriomas and some deep disease but not superficial implants. <b>Pain doesn't correlate with stage.</b> First line: NSAIDs plus hormonal suppression.");

  qb(EN, "#treatment", ["module-repro-Q30", "Elentra module"],
    "Which treatment is <b>not</b> first line for endometriosis-associated pain?",
    ["Hysterectomy", "NSAIDs", "Combined hormonal contraception (continuous)", "A progestin such as dienogest or the LNG-IUS", "Regular exercise and heat as adjuncts"],
    0,
    "First line: <b>NSAIDs</b> plus <b>hormonal suppression</b> (continuous COCP, progestins such as dienogest, norethindrone or the LNG-IUS). Second line: GnRH agonists or antagonists with add-back. Surgery (excision or ablation) for refractory pain, endometriomas or fertility; <b>hysterectomy ± BSO</b> is definitive but last.");

  qb(EN, "#complications", ["module-repro-Q31", "Elentra module"],
    "A 26-year-old newly diagnosed with endometriosis asks whether she will be infertile. What is accurate?",
    ["Most women with endometriosis have normal fertility, although it's more common among infertile women",
     "Almost all women with endometriosis are infertile",
     "Endometriosis prevents ovulation",
     "She needs IVF to conceive",
     "Fertility isn't affected at all"],
    0,
    "Endometriosis is found in many women being investigated for infertility (adhesions, tubal distortion, inflammatory pelvic environment), but <b>most women with it conceive normally</b>. It doesn't primarily stop ovulation. Severe disease and endometriomas lower fertility more, so fertility is factored into treatment choices.");

  qb(EN, "#pain-and-severity", ["module-repro-Q28", "Elentra module"],
    "Which statement about the presentation of endometriosis is true?",
    ["Dyspareunia is common, but many women won't mention it unless asked",
     "It's usually diagnosed at the first presentation with pain",
     "Pain always correlates with disease severity",
     "It doesn't occur in teenagers",
     "It mainly causes heavy menstrual bleeding"],
    0,
    "Average <b>diagnostic delay is years</b>: symptoms are normalized ('periods are supposed to hurt'). Ask directly about <b>deep dyspareunia</b>, dyschezia and dysuria. It can start in adolescence (consider it when dysmenorrhea fails NSAIDs and hormones), and severity doesn't track pain.");

  qb(EN, "#the-case", ["workbook-repro-Q37", "Workbook · Reproduction"],
    "A 21-year-old, sexually active, has bilateral lower abdominal pain radiating to the back, deep dyspareunia and discharge. Which finding would <b>rule out</b> PID?",
    ["None of these: absent fever, CMT, leukocytosis or mass doesn't exclude PID",
     "Absence of fever",
     "Absence of cervical motion tenderness",
     "A normal white count",
     "No adnexal mass on ultrasound"],
    0,
    "PID has a wide clinical spectrum and <b>no single finding excludes it</b>; minimum criteria (pelvic or lower abdominal pain plus cervical motion, uterine or adnexal tenderness) are enough to treat. Because missing it causes infertility and ectopic pregnancy, the threshold for empirical treatment is low. Always check β-hCG to exclude ectopic.");

  /* ---------------------------------------------------- 4.14 Chronic pelvic pain */
  qb(CPP, "#case-1-dysmenorrhea", ["new-repro-Q9", "Module case"],
    "Jessica, 19, has regular cycles with severe cramps radiating to her back, worst on the first 2 days of bleeding and easing after. Exam is normal. Diagnosis?",
    ["Primary dysmenorrhea", "Endometriosis", "Adenomyosis", "Myofascial pelvic pain", "PID"],
    0,
    "<b>Primary dysmenorrhea</b>: pain <b>with</b> (not before) menses, worst on days 1–2, in teens and 20s, with a normal exam. Cause: endometrial <b>prostaglandins</b> → contractions → ischemia. Clinical diagnosis; treat with NSAIDs ± hormonal contraception. Red flags for secondary causes: onset after 25, pain starting before menses, dyspareunia, abnormal exam, failure of treatment.");

  qb(CPP, "#case-2-endometriosis", ["new-repro-Q10", "Module case"],
    "Jessica is now 25. Her pain now starts 2 days <b>before</b> her period, keeps her home for a day, radiates down her leg, and she has new deep dyspareunia. What do you suspect?",
    ["Endometriosis", "Worsening primary dysmenorrhea", "Adenomyosis", "Degenerating submucosal fibroid", "Interstitial cystitis"],
    0,
    "The change in timing (<b>premenstrual onset</b>), escalation and <b>deep dyspareunia</b> point to <b>endometriosis</b>. Primary dysmenorrhea doesn't move earlier in the cycle and usually eases with age. Adenomyosis belongs to older, parous women with heavy bleeding.");

  qb(CPP, "#case-3-adenomyosis", ["new-repro-Q11", "Module case"],
    "At 42, after three pregnancies, Jessica's periods are <b>less painful but much heavier</b>, flooding despite continuous OCPs, with a heavy pelvic sensation. Most likely cause now?",
    ["Adenomyosis", "Recurrent endometriosis", "Endometrial hyperplasia", "Perimenopausal anovulation", "Cervical polyp"],
    0,
    "A parous woman in her 40s with <b>menorrhagia</b>, pelvic heaviness and an enlarged uterus fits <b>adenomyosis</b> (more endometrium plus a poorly contracting myometrium). Don't anchor on the old diagnosis. At 42 with AUB she still needs an <b>endometrial biopsy</b> to exclude hyperplasia.");

  qb(CPP, "#case-4-fibroids", ["new-repro-Q12", "Module case"],
    "Erica, 35, wants to conceive. She has heavy periods and increasing abdominal girth; β-hCG negative. The uterus is <b>20-week size, firm, irregular and mobile</b>. Likely diagnosis?",
    ["Uterine fibroids", "Adenomyosis", "Ovarian cancer", "Molar pregnancy", "Endometriosis"],
    0,
    "A large, <b>irregular, mobile</b> uterus with heavy bleeding = <b>fibroids</b>. Adenomyosis rarely enlarges the uterus beyond ~12-week size and is smooth and boggy; malignancy and advanced endometriosis tend to fix the pelvis. With fertility goals, a <b>myomectomy</b> (not hysterectomy) is the surgical option if needed.");

  qb(CPP, "#case-5-myofascial", ["new-repro-Q13", "Module case"],
    "Mya, 23, has 5 years of debilitating pelvic pain with <b>no relation to her cycle</b>. Her pelvis is globally tender; the uterus is midline and mobile with no masses; a speculum exam isn't tolerated. Diagnosis?",
    ["Myofascial pelvic pain (high-tone pelvic floor)", "Deep endometriosis", "Interstitial cystitis", "Chronic PID", "Ovarian cyst"],
    0,
    "<b>Non-cyclic</b> pain points away from gynecologic causes. Global tenderness with a normal uterus and adnexa fits <b>myofascial pain</b>: high resting tone in the levator ani and piriformis. Treat with <b>pelvic floor physiotherapy</b> (with or without trigger-point injections) and a multidisciplinary approach; screen for mood disorders and past trauma, which are common in chronic pelvic pain.");

  qb(CPP, "#approach", ["new-repro-Q121", "DSSG cases"],
    "Melissa, 23, has years of worsening pelvic pain. How should you judge how much it's affecting her?",
    ["Ask what it stops her doing (work, school, sex, sleep, mood): chronic pelvic pain is defined by functional impact",
     "Rely on her pain score: it reflects tissue damage",
     "Stage endometriosis at laparoscopy",
     "Count missed work shifts only",
     "Order a pelvic MRI"],
    0,
    "Chronic pelvic pain = pain below the umbilicus for <b>≥ 6 months</b> severe enough to cause <b>functional disability or need treatment</b>. Intensity doesn't track tissue damage, and the treatment goal is pain reduction <b>and improved function</b>, so assess daily activities, relationships, sleep and mood.");

  qb(CPP, "#approach", ["new-repro-Q122", "DSSG cases"],
    "Why does Melissa's sexual history matter in her chronic pelvic pain work-up? <i>(Select all that apply.)</i>",
    ["STI exposure raises the risk of PID and its chronic sequelae", "Superficial vs deep dyspareunia helps localize the cause", "A history of sexual abuse is common in chronic pelvic pain and changes management", "It determines whether endometriosis is possible"],
    [0, 1, 2],
    "<b>STIs → PID</b> → adhesions and chronic pain. <b>Superficial</b> dyspareunia suggests vulvodynia, atrophy, skin disease or vaginismus; <b>deep</b> suggests endometriosis, masses, adhesions or pelvic floor causes. <b>Abuse</b> is over-represented in CPP and needs a trauma-informed approach. Endometriosis doesn't depend on sexual activity.");

  qb(CPP, "#differential", ["new-repro-Q123", "DSSG cases"],
    "Match the pelvic exam finding to its likely cause. Which pairing is correct?",
    ["Uterosacral nodularity with a fixed uterus → endometriosis",
     "Tender, enlarged, boggy uterus → fibroids",
     "Cervical motion tenderness → adenomyosis",
     "Firm, irregular, mobile enlarged uterus → endometriosis",
     "A normal exam → excludes endometriosis"],
    0,
    "<b>Uterosacral or cul-de-sac nodularity</b>, a fixed retroverted uterus or an endometrioma → <b>endometriosis</b> (though the exam is often normal). Boggy, tender, uniformly enlarged → <b>adenomyosis</b>. Firm, irregular, mobile → <b>fibroids</b>. CMT, cervicitis and discharge → <b>PID</b>. Globally tender with normal organs → myofascial.");

  qb(CPP, "#case-4-fibroids", ["weekly-repro-Q28", "Weekly quiz"],
    "A 38-year-old multigravida has progressively heavier periods and dysmenorrhea. The uterus is bulky, nodular and <b>asymmetrically</b> enlarged. Most likely diagnosis?",
    ["Leiomyomas", "Adenomyosis", "Endometriosis", "Pelvic abscess", "Dysfunctional uterine bleeding"],
    0,
    "<b>Nodular, asymmetric</b> enlargement = <b>fibroids</b>; adenomyosis gives a <b>symmetric</b>, boggy uterus. Endometriosis doesn't typically cause heavy bleeding; an abscess is exquisitely tender with fever; 'DUB' is a diagnosis of exclusion once structural causes are ruled out.");

  /* ---------------------------------------------------- 4.15 Acute pelvic pain */
  qb(APP, "#case-3-torsion", ["new-repro-Q7", "Module case"],
    "Helen, 45, had sudden sharp LLQ pain radiating to her back during a golf swing, vomited and collapsed. HR 110, T 37.5, β-hCG negative, Hb 128 and stable. A tender 9 cm adnexal mass is palpable. Diagnosis?",
    ["Ovarian torsion", "Ruptured ectopic pregnancy", "Diverticulitis", "Degenerating pedunculated fibroid", "Ruptured hemorrhagic cyst"],
    0,
    "<b>Torsion</b>: sudden severe unilateral pain with <b>nausea and vomiting</b>, often during exertion or intercourse, with an <b>enlarged ovary</b> (a cyst or mass acts like a pendulum). Stable Hb and negative β-hCG separate it from rupture and ectopic. Doppler flow can be falsely reassuring; it's a <b>surgical emergency</b> (laparoscopic detorsion to save the ovary).");

  qb(APP, "#case-4-ruptured-cyst", ["new-repro-Q8", "Module case"],
    "Lisa, 33, trying to conceive, has sudden RLQ pain after intercourse, about 2 weeks after her LMP. Tenesmus, shoulder pain lying flat, orthostatic hypotension; Hb 110 → 78. β-hCG negative. Diagnosis?",
    ["Ruptured hemorrhagic ovarian (corpus luteum) cyst with hemoperitoneum", "Ruptured ectopic pregnancy", "Ovarian torsion", "PID with tubo-ovarian abscess", "Appendicitis"],
    0,
    "Hemoperitoneum signs (shoulder-tip pain, tenesmus, falling Hb, orthostasis) <b>without pregnancy</b> = a ruptured <b>hemorrhagic cyst</b>, typically mid-to-late cycle (follicle or corpus luteum), often triggered by intercourse or exercise. Most settle on their own, but an unstable patient with ongoing bleeding needs surgery. Torsion causes ischemia, not hemoperitoneum.");

  qb(APP, "#approach", ["new-repro-Q79", "CBL cases"],
    "A 27-year-old presents with a day of RLQ pain. What is the single most important piece of history to get first?",
    ["Her last menstrual period, so you can decide on a pregnancy test (then bleeding, contraception and shoulder-tip pain)",
     "Her appetite and relationship of pain to fatty meals",
     "Her cervical screening history",
     "Her family history of ovarian cancer",
     "Her bowel habits only"],
    0,
    "In any person who could be pregnant with abdominal pain, <b>LMP and a β-hCG</b> come first; keep a low threshold, since missing an ectopic kills. Then: bleeding, contraception, sexual and STI history, prior PID or ectopic, shoulder-tip pain and dizziness (hemoperitoneum), GI and GU symptoms.");
})();

(function () {
  const GS = "w4-genetic-screening", AMEN = "w4-amenorrhea", PA = "w4-pathology-aub-pelvic-pain";

  /* ---------------------------------------------------- 4.16 Genetic screening */
  qb(GS, "#nt", ["workbook-repro-Q104", "Workbook · Reproduction"],
    "A first-trimester ultrasound shows an increased nuchal translucency. What does it suggest?",
    ["An increased risk of aneuploidy (e.g., trisomy 21) and of structural problems such as heart defects, though many such pregnancies turn out normal",
     "A neural tube defect",
     "A confirmed diagnosis of Down syndrome",
     "Nothing: NT is a normal variant",
     "Placenta previa"],
    0,
    "NT (measured at ~11–14 weeks) is a <b>screening</b> marker: thickening raises the risk of <b>trisomies</b>, Turner, <b>congenital heart disease</b> and genetic syndromes, so it prompts NIPT or diagnostic testing and a detailed anatomy scan (± fetal echo). It doesn't detect NTDs (those come from the anatomy scan or AFP). Many fetuses with increased NT are normal.");

  qb(GS, "#invasive", ["workbook-repro-Q105", "Workbook · Reproduction"],
    "Which of these is a <b>diagnostic</b> (not screening) prenatal test?",
    ["Amniocentesis", "Nuchal translucency", "Enhanced first-trimester screen", "NIPT (cell-free DNA)", "Soft markers on the anatomy scan"],
    0,
    "<b>Screening</b> gives a <b>risk</b>: NT, serum screens (eFTS, IPS), NIPT and soft markers. <b>Diagnosis</b> requires fetal cells: <b>CVS</b> (11–13+6 weeks) or <b>amniocentesis</b> (15–20+ weeks). Even a high-risk NIPT must be confirmed invasively before any irreversible decision.");

  qb(GS, "#invasive", ["workbook-repro-Q106", "Workbook · Reproduction"],
    "Which patient should be offered invasive prenatal diagnosis directly?",
    ["A 31-year-old whose partner carries a balanced translocation",
     "A 24-year-old with one previous early miscarriage",
     "A 29-year-old with a family history of type 2 diabetes",
     "A 19-year-old with a normal prenatal screen",
     "A 35-year-old with no other risk factors"],
    0,
    "Indications include a <b>parent with a balanced translocation</b> (or other structural rearrangement), a <b>previous child with a chromosomal abnormality</b>, a known familial single-gene disorder, a <b>positive screen</b> or <b>abnormal ultrasound</b>, and advanced maternal age (by most programs ~40; younger patients are offered screening first). One early loss and T2DM aren't indications.");

  qb(GS, "#invasive", ["weekly-repro-Q14", "Weekly quiz"],
    "Alice, 29, has neurofibromatosis type 1 with a known <i>NF1</i> pathogenic variant (autosomal dominant, 50% recurrence). She's pregnant and wants to know if the baby is affected. What should be offered, and when?",
    ["Amniocentesis (15–20 weeks) or CVS (11–14 weeks), testing for the known familial variant",
     "NIPT for NF1",
     "Enhanced first-trimester screen",
     "A detailed anatomy ultrasound for NF1 features",
     "Testing in the first week of life only"],
    0,
    "A <b>known familial mutation</b> can only be answered with <b>fetal DNA</b>: CVS (11–14 weeks) or amniocentesis (15–20 weeks), running the specific variant test. Standard NIPT and serum screens look at aneuploidy, not single-gene disorders, and NF1 has no reliable prenatal ultrasound features. Preimplantation genetic testing is an option for future pregnancies.");

  qb(GS, "#case", ["new-repro-Q17", "Module case"],
    "Doris, 29, has an 18-week anatomy scan showing an omphalocele and bilateral cleft lip and palate. What are her diagnostic options now?",
    ["Amniocentesis for karyotype or microarray (NIPT may be offered as a screen, but it's not diagnostic)",
     "CVS",
     "NIPT alone, since it detects > 99% of trisomies",
     "Repeat the anatomy ultrasound at 22 weeks",
     "Maternal serum AFP"],
    0,
    "Multiple midline defects suggest <b>aneuploidy, especially trisomy 13</b>. At 18 weeks the <b>CVS window has closed</b>; <b>amniocentesis</b> is diagnostic. NIPT is a screen: a positive result still needs confirmation. Imaging describes the anomalies but can't give a genetic diagnosis.");

  qb(GS, "#case", ["new-repro-Q18", "Module case"],
    "Doris's fetus has translocation trisomy 13; Doris herself carries a balanced Robertsonian translocation (13;21). What are the implications?",
    ["Increased risk of unbalanced pregnancies in future; offer prenatal diagnosis or PGT, and genetic counselling for her relatives who may also be carriers",
     "None beyond this pregnancy",
     "Her siblings can't be carriers since she is healthy",
     "A 25% recurrence risk, as in autosomal recessive conditions",
     "Her partner must also be a carrier"],
    0,
    "A balanced carrier is healthy but can pass on <b>unbalanced</b> combinations, which means recurrent losses or affected pregnancies. Offer <b>prenatal diagnosis</b> or <b>preimplantation genetic testing</b> next time, and <b>cascade testing</b> for her relatives (siblings and children may carry it). The partner needn't be involved; one carrier parent is enough.");

  qb(GS, "#nipt", ["hippo-repro-Q59", "HippoNotes"],
    "In Ontario, which patient qualifies for publicly funded NIPT?",
    ["A pregnant patient whose previous child had trisomy 21",
     "Any patient over 35",
     "Any first pregnancy",
     "Nuchal translucency of 3.0 mm with a low-risk screen",
     "A family history of diabetes"],
    0,
    "Funded NIPT indications include: a <b>positive serum screen</b> (eFTS), a <b>previous pregnancy with a trisomy</b>, maternal age <b>≥ 40</b> at delivery, twin pregnancy, and NT ≥ 3.5 mm (which usually leads to diagnostic testing instead). Others can pay privately. Remember NIPT is still a <b>screen</b>.");

  qb(GS, "#invasive", ["reviews-repro-Q22", "Written from review slides"],
    "A 38-year-old at 12 weeks wants a <b>diagnostic</b> test for trisomy 21 as early as possible. Which test, and what is the procedure-related miscarriage risk?",
    ["CVS, now; roughly 0.5–1%", "Amniocentesis now; ~0.5%", "NIPT; no risk", "eFTS; no risk", "Amniocentesis at 12 weeks; ~1%"],
    0,
    "At 11–14 weeks the diagnostic option is <b>CVS</b> (placental sampling; small risk of <b>confined placental mosaicism</b> and maternal cell contamination). <b>Amniocentesis</b> is from 15 weeks (risk ~0.1–0.5%; early amnio causes more loss and clubfoot). NIPT and eFTS are screens.");

  /* ---------------------------------------------------- 4.0 Amenorrhea (CHSG) */
  qb(AMEN, "", ["new-repro-Q64", "CHSG cases"],
    "Jessica, 14, hasn't started her period. What is the most important first finding to guide the work-up?",
    ["Whether she has breast development", "Whether she has pubic hair", "LH and FSH", "Growth velocity", "Pelvic ultrasound"],
    0,
    "<b>Breast development = estrogen exposure</b>, which splits the differential: no thelarche at 14 → she's past the 13-year threshold and the problem is ovarian or central (check FSH); thelarche present → she's within the window until 15 (or 3 years after thelarche), and anatomy/outflow becomes the question. Pubic hair is <b>adrenal</b> (adrenarche) and can be normal in ovarian failure or AIS (where it's scant).");

  qb(AMEN, "", ["new-repro-Q65", "CHSG cases"],
    "Kaitlyn, 16, with type 1 diabetes, hasn't had a period for 3 months; exam is normal. What must be ruled out first?",
    ["Pregnancy", "PMOS", "Anovulation", "Hypothyroidism", "Primary ovarian insufficiency"],
    0,
    "<b>Pregnancy first, always</b>, regardless of history. Type 1 diabetes does raise the likelihood of autoimmune thyroid disease, poor control, and autoimmune ovarian insufficiency, but those come after the β-hCG. Three months without menses after regular cycles meets the definition of secondary amenorrhea.");

  qb(AMEN, "", ["new-repro-Q66", "CHSG cases"],
    "Maggie, 16, has primary amenorrhea with a normal exam and investigations so far. A progestin challenge produces a withdrawal bleed. What does this tell you?",
    ["She has enough estrogen to prime the endometrium, a working uterus and a patent outflow tract, so the problem is anovulation",
     "She is estrogen deficient",
     "She has a progesterone excess",
     "She has Asherman syndrome",
     "She has androgen insensitivity"],
    0,
    "A withdrawal bleed proves three things: <b>estrogen</b> has proliferated the endometrium, the <b>uterus</b> works, and the <b>outflow tract</b> is patent. What's missing is ovulation (hence no progesterone): think PMOS or mild hypothalamic dysfunction. No bleed means low estrogen or an outflow or endometrial problem.");

  qb(AMEN, "", ["new-repro-Q69", "CHSG cases"],
    "Jackie, 16, has irregular periods. What is the most important thing to establish first?",
    ["How long ago menarche was", "Secondary sexual characteristics", "Growth velocity", "FSH, LH, TSH and prolactin", "Pelvic ultrasound"],
    0,
    "In the <b>first 1–2 years after menarche</b>, cycles are often anovulatory and irregular because the HPO axis is still maturing: reassure and follow. Cycles that were regular and then became irregular, or that stay very irregular years after menarche, need a cause (PMOS, thyroid, prolactin, weight change, pregnancy).");

  qb(AMEN, "", ["new-repro-Q70", "CHSG cases"],
    "Sonya, 17, menarche at 13, has infrequent periods. BMI 29, acne on her face and back, velvety dark skin on the back of her neck, Tanner 5. Never sexually active. Most likely diagnosis?",
    ["Polycystic ovary syndrome (PMOS)", "Hyperprolactinemia", "Hypothyroidism", "Turner syndrome", "Functional hypothalamic amenorrhea"],
    0,
    "<b>Acanthosis nigricans</b> (insulin resistance) + oligomenorrhea + acne (hyperandrogenism) + fully developed = classic <b>PMOS</b>, the commonest cause of secondary amenorrhea and oligomenorrhea. It's a clinical diagnosis; labs (β-hCG, TSH, prolactin, 17-OHP, testosterone) exclude mimics and look at metabolic risk.");

  qb(AMEN, "", ["new-repro-Q67", "CHSG cases"],
    "Lisa, 16, has PMOS with irregular periods and uses only condoms. Which contraceptive is the best choice for her?",
    ["LNG-IUS (most effective, and it protects the endometrium)", "Diaphragm", "DMPA", "Withdrawal method", "Fertility awareness methods"],
    0,
    "Irregular cycles don't mean she can't conceive. A <b>LARC</b> is the most effective option for a teen, and the <b>LNG-IUS</b> also protects the endometrium from <b>unopposed estrogen</b> in anovulation. A combined pill is also excellent in PMOS (cycle control, acne, hirsutism); keep condoms for STI protection. Fertility awareness methods are unreliable with irregular cycles.");

  qb(AMEN, "", ["new-repro-Q75", "CHSG cases"],
    "Jennifer, 16, has primary amenorrhea despite full Tanner 5 development. Her β-hCG is negative. What is the next most useful step?",
    ["Pelvic exam and ultrasound to confirm a uterus and a patent outflow tract",
     "FSH, LH and karyotype",
     "Testosterone and DHEA-S",
     "MRI of the head",
     "Progestin challenge test"],
    0,
    "With <b>normal breast development</b> the axis has worked, so the next question in primary amenorrhea is <b>anatomy</b>: is there a uterus (Müllerian agenesis/MRKH vs <b>androgen insensitivity</b>, which has scant pubic hair and a blind vagina), and can blood get out (imperforate hymen, transverse septum)? Then hormones if the anatomy is normal.");

  /* ---------------------------------------------------- 4.12 Pathology: fibroid DSSG */
  qb(PA, "#leiomyoma", ["new-repro-Q24", "DSSG cases"],
    "Avalynn, 40, has heavy painful periods, urinary frequency, anemia, three unexplained pregnancy losses, and an <b>asymmetrically enlarged bulky uterus</b>. What are the top two diagnoses?",
    ["Leiomyomas, then adenomyosis", "Endometrial carcinoma and hyperplasia", "Endometrial polyp and endometritis", "Ovarian carcinoma and tubo-ovarian abscess", "Endometriosis and PID"],
    0,
    "A structurally enlarged uterus with heavy bleeding in a premenopausal woman = <b>fibroids</b> or <b>adenomyosis</b>. Asymmetry, pressure symptoms and pregnancy loss (submucosal fibroids distort the cavity) favour <b>fibroids</b>. Work-up: β-hCG, CBC, pelvic ultrasound; at 40 with AUB, an endometrial biopsy too.");

  qb(PA, "#leiomyoma", ["new-repro-Q26", "DSSG cases"],
    "Fibroids are classified by location. Which location is most associated with heavy bleeding and infertility?",
    ["Submucosal", "Subserosal", "Intramural", "Pedunculated subserosal", "Cervical"],
    0,
    "<b>Submucosal</b> (bulging into the cavity): heaviest bleeding, subfertility and miscarriage, removable hysteroscopically. <b>Intramural</b>: the most common; bleeding and bulk. <b>Subserosal</b>/pedunculated: pressure symptoms (bladder, bowel) and torsion. Fibroids bleed by enlarging the endometrial surface, distorting the cavity and impairing contraction.");

  qb(PA, "#the-framework", ["module-repro-Q32", "Elentra module"],
    "Alexa, 40, has intermenstrual spotting and a 2 cm fleshy mass at the cervical os, with no bleeding-disorder or infection clues. Which investigations come next? <i>(Select all that apply.)</i>",
    ["β-hCG", "Pelvic ultrasound", "Tissue sampling of the lesion (and endometrial biopsy at her age)", "PT and PTT", "Serum CA-125"],
    [0, 1, 2],
    "A <b>pregnancy test</b> before sampling anything in a reproductive-age patient; <b>ultrasound</b> to look at the endometrium and uterus; <b>remove or biopsy</b> the lesion and sample the endometrium (she's 40 with AUB). Coagulation tests only if the history suggests a bleeding disorder; CA-125 isn't part of the AUB work-up.");
})();

/* ---------------------------------------------------- Week 4 · POM2 originals (written from the lecture pages) */
(function () {
  const AB = "w4-abortion-in-canada", FI = "w4-fertilization-infertility", VD = "w4-vaginal-discharge", STI = "w4-sti-approach",
        PH = "w4-public-health-stis", CS = "w4-cervical-cancer-screening", VL = "w4-vulvar-lesions", EN = "w4-endometriosis",
        AP = "w4-acute-pelvic-pain", GS = "w4-genetic-screening";

  /* 4.1 Abortion */
  qb(AB, "#medical-protocol", null,
    "Priya, 22, is 7 weeks pregnant with an intrauterine pregnancy confirmed on ultrasound. She wants a medication abortion at home. Which regimen do you prescribe?",
    ["Mifepristone 200 mg, then misoprostol 800 µg buccally 24–48 h later", "Methotrexate 50 mg/m² IM, then misoprostol 5–7 days later", "Misoprostol alone, one dose", "Mifepristone alone", "High-dose oral progesterone"],
    0,
    "<b>Mifegymiso</b> is used up to <b>70 days (10 weeks)</b> and is 95–98% effective. Mifepristone blocks the progesterone receptor (decidual necrosis, softer cervix, prostaglandin sensitivity), then misoprostol (PGE1) ripens the cervix and contracts the uterus; 90% pass the pregnancy within 24 h of the misoprostol. Methotrexate plus misoprostol is the older regimen (to 49 days, less effective, <b>teratogenic</b>), kept for when mifepristone can't be used. Progesterone doesn't 'reverse' anything: the receptor is blocked.");

  qb(AB, "#medical-protocol", null,
    "A week after taking Mifegymiso, Priya had cramping and bleeding that settled days ago. Her β-hCG is essentially unchanged from baseline, and ultrasound still shows a gestational sac. What now?",
    ["Treatment failure: a second dose of misoprostol 800 µg, or uterine aspiration", "Reassure her: it will pass on its own", "Repeat the β-hCG in 4 weeks", "Start methotrexate", "Ultrasound in 6 weeks"],
    0,
    "Success = β-hCG down <b>≥50% by day 3</b> or <b>≥80% by 7–14 days</b>. A <b>plateau</b> means failure (up to ~5%, typically ~3%). More than half complete with a second 800 µg misoprostol dose; the rest need <b>aspiration</b>. Don't confuse this with a thick endometrium on an early scan after a falling β-hCG, which the uterus clears on its own.");

  qb(AB, "#pre-procedure", null,
    "Which are required before a first-trimester abortion? <i>(Select all that apply.)</i>",
    ["Confirming an intrauterine pregnancy and the gestational age", "Rh status, so Rh-negative patients get anti-D", "Informed consent and contraception counselling", "A referral from her family doctor", "Her partner's consent"],
    [0, 1, 2],
    "Most clinics are <b>self-referral</b>, so no referral is needed. A partner has <b>no veto</b> (Tremblay v Daigle, 1989). Confirm the site and dating (usually ultrasound; early medication abortion can be 'no-touch' with a good history), check <b>Rh</b> (WinRho if negative), and counsel about the procedure and contraception.");

  qb(AB, "#dnc", null,
    "Two hours after an uncomplicated 10-week suction D&C, a patient has severe, worsening cramping. The uterus is enlarging and very tender, there is little vaginal bleeding, and she can't void. What is the diagnosis and management?",
    ["Hematometra (post-abortal syndrome): re-evacuate the uterus immediately", "Uterine perforation: laparotomy", "Endometritis: IV antibiotics", "Normal post-procedure cramping: NSAIDs", "Cervical shock: lie her flat"],
    0,
    "<b>Hematometra</b> is blood trapped in the cavity: excruciating pain, an <b>enlarging uterus</b>, <b>little external bleeding</b>, often urinary retention. Treatment is immediate re-aspiration. Cervical shock is a vasovagal reaction during the block that lasts minutes. Perforation happens during dilatation or suction and is managed under ultrasound or laparoscopic guidance. 98% of abortions have no complication; the commonest are hemorrhage, infection and retained products.");

  qb(AB, "#contraception", null,
    "Amira, 30, is having a suction D&C under sedation; the pregnancy happened despite condoms. She wants a hormonal IUD. When should it go in?",
    ["At the end of the procedure, today", "At her 6-week check", "After her first period", "Never: an IUD is contraindicated after an abortion", "Once her β-hCG is negative"],
    0,
    "<b>Ovulation can return within 2 weeks</b>, so contraception starts immediately. An IUD or implant can be placed during a surgical abortion (painless under sedation); expulsion is slightly higher (~3.8%) but still under 5%. After a <b>medical</b> abortion, the IUD goes in once completion is confirmed (~2 weeks); pills, patch, ring or Depo can start the same day. Abortion is not a contraindication to any method.");

  qb(AB, "#second-trimester", null,
    "At 21 weeks, a couple chooses termination after the anatomy scan shows a lethal skeletal dysplasia. They want an autopsy and genetic testing on the intact fetus and time to hold their baby. Which method fits?",
    ["Induction of labour with misoprostol (usually after intracardiac KCl or digoxin)", "Dilation and evacuation (D&E)", "Manual vacuum aspiration", "Mifepristone alone", "Methotrexate"],
    0,
    "<b>Induction</b> delivers the fetus <b>intact</b> for autopsy and genetics and allows memory-making, at the cost of a long process (24 h+), bleeding, and retained placenta (5–10% need a D&C or D&E anyway). <b>D&E</b> has the fewest complications and is much quicker, but doesn't give an intact specimen. MVA is for up to 10 weeks.");

  qb(AB, "#fertility", null,
    "A week after an uncomplicated first-trimester suction D&C, a 24-year-old asks whether it will affect her ability to have children, or her risk of breast cancer or depression. What do you tell her?",
    ["None of these is increased; relief is the most common emotional reaction", "Infertility risk is about 30% after one procedure", "Breast cancer risk rises because the pregnancy ended before term", "Most women develop depression afterwards", "She should avoid pregnancy for 2 years"],
    0,
    "A safe abortion carries <b>no more fertility risk than a D&C for miscarriage</b>, and there's no link to breast cancer or mental illness. <b>Asherman syndrome</b> (intrauterine adhesions → secondary amenorrhea) is linked to <b>repeated curettage</b> and sharp curettage (the slide quotes up to 30% after a third consecutive procedure). After a single uncomplicated procedure, the risk is very low.");

  /* 4.2 Fertilization & infertility */
  qb(FI, "#age", null,
    "Sofia, 36, has regular 28-day cycles and has been trying to conceive for 7 months. Her partner is healthy. What do you do?",
    ["Start the infertility work-up for both partners now", "Reassure her and reassess at 12 months", "Reassess at 2 years, since 93% conceive by then", "Investigate only her partner", "Refer straight to IVF without testing"],
    0,
    "Work up at <b>1 year if under 35</b>, at <b>6 months if 35 or older</b>, and immediately if there's a known problem (irregular cycles, known tubal or male factor). Infertility is about half female and half male (including combined), so <b>always test both partners</b>; semen analysis is cheap and comes first.");

  qb(FI, "#workup", null,
    "A 33-year-old's AMH comes back low. She asks whether this means she can't get pregnant naturally. What is accurate?",
    ["AMH reflects ovarian reserve (how many eggs are left, and response to IVF stimulation), not her chance of natural conception this cycle", "Low AMH means she's infertile", "Low AMH proves she isn't ovulating", "AMH is the test that confirms ovulation", "AMH predicts tubal patency"],
    0,
    "<b>AMH</b> (from small antral follicles) estimates the <b>egg reserve</b> and helps plan IVF dosing. It's not a test of natural fertility. Ovulation is confirmed by a <b>day-21 (mid-luteal) progesterone</b>; tubes and cavity by <b>sonohysterogram/HSG</b>; day 2–4 bloods include FSH, LH, estradiol, prolactin and TSH.");

  qb(FI, "#male", null,
    "Her husband's semen analysis shows low-volume azoospermia. On exam, neither vas deferens can be felt. Which test is most important next?",
    ["CFTR (cystic fibrosis) mutation testing for him, and carrier screening for her", "Repeat semen analysis in 1 year", "Testicular ultrasound only", "Karyotype for her", "Serum testosterone only"],
    0,
    "<b>Congenital bilateral absence of the vas deferens</b> is a CF-spectrum condition: most men carry CFTR mutations. Sperm can often be retrieved surgically for IVF/ICSI, so test <b>both partners</b> to know the risk of CF in their children (and offer PGT if both carry). This is one of the 'infertility' red flags on a genetic history.");

  /* 4.5 Vaginal discharge */
  qb(VD, "#atrophic", null,
    "A 62-year-old has vaginal dryness, a thin yellowish discharge and pain with intercourse. Vaginal pH 6.5; the mucosa is pale, thin and smooth; the wet mount shows many white cells and immature (parabasal) cells, no clue cells and no trichomonads. Treatment?",
    ["Vaginal estrogen (and a lubricant or moisturizer)", "Oral metronidazole", "Fluconazole", "Treat her partner", "Clindamycin cream"],
    0,
    "<b>Atrophic vaginitis</b> (genitourinary syndrome of menopause): with no estrogen there's no glycogen, so fewer lactobacilli, <b>pH rises</b>, and the epithelium thins. Low-dose <b>vaginal estrogen</b> treats it. Postmenopausal bleeding still needs its own work-up. BV and trich also raise the pH, but BV has clue cells and a whiff, and trich has motile organisms.");

  qb(VD, "#ph-whiff", null,
    "A 25-year-old has vulvar itch and discharge. Vaginal pH is 4.0 and the whiff test is negative. Which diagnosis fits best?",
    ["Vulvovaginal candidiasis (confirm with KOH mount)", "Bacterial vaginosis", "Trichomoniasis", "Atrophic vaginitis", "Desquamative inflammatory vaginitis"],
    0,
    "Normal vaginal pH is <b>< 4.5</b>. <b>Candida</b> leaves it normal; <b>BV, trich and atrophy raise it</b>. A positive whiff (fishy amines with KOH) means BV (sometimes trich). Use all four bedside tests: pH, whiff, saline mount (clue cells, trichomonads), KOH mount (hyphae). Colour alone doesn't make the diagnosis.");

  qb(VD, "#exam", null,
    "A 45-year-old has had a watery, blood-tinged discharge for 3 months and bleeding after intercourse. Her last screen was 12 years ago. pH and wet mount are normal. What is the key next step?",
    ["Look at the cervix on speculum exam and biopsy (or refer to colposcopy) any visible lesion", "Empiric metronidazole", "HPV screening test and wait for the result", "Reassure: the bedside tests are normal", "Fluconazole"],
    0,
    "Watery or bloody discharge with <b>postcoital bleeding</b> can be the presenting complaint of <b>cervical cancer</b>, so always look at the cervix. She's <b>symptomatic</b>, so this isn't screening: a visible lesion is biopsied or sent to colposcopy directly, regardless of any screening result.");

  /* 4.6 Approach to STI */
  qb(STI, "#chlamydia", null,
    "A 20-year-old's routine NAAT is positive for chlamydia. She has no symptoms, isn't pregnant, and has had two partners in the last 2 months. Which plan is best?",
    ["Doxycycline 100 mg twice daily for 7 days, notify and treat partners from the last 60 days, no sex for 7 days, and retest in about 6 months", "No treatment, since she's asymptomatic", "Ceftriaxone IM only", "A 14-day course of doxycycline plus metronidazole", "Test of cure at 1 week"],
    0,
    "Most chlamydia is <b>asymptomatic</b> and up to 30% untreated leads to PID (infertility, ectopic). Uncomplicated infection: <b>doxycycline × 7 days</b> (azithromycin 1 g is the alternative, used in pregnancy). Treat partners, and <b>retest for reinfection</b> at ~6 months. A test of cure is only for pregnancy, poor adherence or an alternative regimen. 14 days is the PID course.");

  qb(STI, "#syphilis", null,
    "At 14 weeks, a pregnant patient screens positive for early latent syphilis. She had hives with amoxicillin as a child. What is the treatment?",
    ["Penicillin desensitization, then benzathine penicillin G", "Doxycycline", "Azithromycin", "Ceftriaxone", "Delay treatment until after delivery"],
    0,
    "<b>Penicillin G</b> is the only reliable treatment for syphilis, and it's the only drug proven to prevent <b>congenital syphilis</b>. With a penicillin allergy, the satisfactory answer is <b>desensitize, then give penicillin</b>. Doxycycline is contraindicated in pregnancy. Syphilis is reportable.");

  /* 4.7 Public health and STIs */
  qb(PH, "#reportable", null,
    "In Ontario, which of these must you report to public health? <i>(Select all that apply.)</i>",
    ["Chlamydia", "Gonorrhea", "Infectious syphilis", "Bacterial vaginosis", "Recurrent genital herpes in an adult"],
    [0, 1, 2],
    "Reportable STBBIs: <b>chlamydia, gonorrhea, syphilis, HIV, hepatitis B and C</b>. Reporting is a <b>legal obligation</b>. It drives surveillance, lets public health trace and treat contacts (and use the Medical Officer of Health's authority), and meets Canada's International Health Regulations duties. BV isn't an STI; adult genital HSV isn't reportable.");

  qb(PH, "#global", null,
    "Why is gonorrhea now treated with an injection of ceftriaxone instead of a single tablet?",
    ["Resistance developed in turn to penicillin, tetracyclines and fluoroquinolones, leaving third-generation cephalosporins as the reliable class", "Gonorrhea is always disseminated", "Tablets cause too many side effects", "Injections are cheaper", "Ceftriaxone also treats syphilis reliably"],
    0,
    "The <b>gonorrhea escalator</b>: penicillin and tetracyclines (resistance in the 1980s) → fluoroquinolones (resistance in the 2000s) → <b>third-generation cephalosporins</b> since the mid-2000s. There's little runway left, which is why every case is reported, contacts are treated, and test of cure is emphasized.");

  qb(PH, "#framework", null,
    "A 34-year-old man with HIV has had an undetectable viral load on ART for over a year. He asks whether he can pass HIV to his partner through sex without condoms. What do you tell him?",
    ["Undetectable = untransmittable: with a sustained undetectable viral load, sexual transmission doesn't occur", "The risk is the same as without treatment", "He must always use condoms, whatever his viral load", "Only his partner's PrEP prevents transmission", "Undetectable means he's cured"],
    0,
    "<b>U = U</b>: ART that keeps the viral load undetectable stops sexual transmission. That's why <b>testing is prevention</b>: find it, treat it, suppress it. It isn't a cure, adherence matters, and condoms still prevent other STIs.");

  /* 4.8 Cervical cancer screening */
  qb(CS, "#eligibility", null,
    "Under Ontario's program, which of these people should be screened? <i>(Select all that apply.)</i>",
    ["A 26-year-old sexually active trans man with a cervix", "A 30-year-old woman who has only ever had sex with women", "A 35-year-old fully vaccinated with Gardasil 9", "A 28-year-old who has never been sexually active", "A 45-year-old after total hysterectomy for fibroids, with no history of dysplasia"],
    [0, 1, 2],
    "Eligible: <b>asymptomatic, ever sexually active, has a cervix, from age 25</b>. HPV spreads through any sexual contact, so sex between women counts. <b>Vaccinated people are still screened</b> (the vaccine doesn't cover every high-risk type). No sexual activity means nothing to find; no cervix (benign total hysterectomy) means screening stops.");

  qb(CS, "#algorithm", null,
    "Meera, 33, has a primary HPV test positive for a high-risk type <b>other than 16/18</b>. Reflex cytology is NILM. What is the next step?",
    ["Repeat the HPV test in 1 year", "Colposcopy now", "Return to routine screening in 5 years", "Repeat cytology in 6 months", "LEEP"],
    0,
    "Ontario's HPV-first pathway: <b>negative → 5 years</b>; <b>16/18 → colposcopy</b> whatever the cytology; <b>other high-risk type</b> → reflex cytology: HSIL, ASC-H or glandular → colposcopy; <b>NILM, ASC-US or LSIL → repeat HPV in 1 year</b>. At that repeat: negative → back to 5-yearly screening; 16/18 → colposcopy; another positive → cytology again.");

  qb(CS, "#self-sampling", null,
    "An under-screened 50-year-old does an HPV self-swab at home. Which is the correct next step for each result? Pick the true statement.",
    ["Other high-risk type: she comes in for a clinician-collected sample so cytology can be done", "HPV 16/18: cytology on the self-sample first, then colposcopy if abnormal", "HPV negative: repeat in 1 year", "Other high-risk type: straight to colposcopy", "HPV 16/18: repeat the self-swab in 1 year"],
    0,
    "A self-swab is <b>vaginal</b>, so no cytology can be made from it. <b>HPV 16/18 → colposcopy directly.</b> <b>Other high-risk type → she returns for a provider-collected cervical sample</b> for cytology, then enters the usual loop. Negative → 5 years. It improves reach to never- and under-screened people, where most of Canada's remaining cervical cancer occurs.");

  /* 4.11 Vulvar lesions */
  qb(VL, "#lichen-sclerosus", null,
    "A 7-year-old has months of vulvar itch. Exam shows thin, white, crinkled skin in a figure-of-eight around the vulva and anus, with small fissures and bruising. Diagnosis and treatment?",
    ["Lichen sclerosus: an ultrapotent topical steroid (clobetasol ointment)", "Pinworms: mebendazole", "Candida: topical azole", "Lichen simplex chronicus: antihistamines only", "Vitiligo: no treatment"],
    0,
    "About <b>15% of lichen sclerosus is in children</b>. White atrophic 'cellophane' skin in a <b>figure-of-eight</b>, with fissures and purpura from fragile skin. Purpura can be mistaken for abuse; consider it carefully, but recognize LS. Treat with <b>clobetasol 0.05% ointment</b>.");

  qb(VL, "#lichen-sclerosus", null,
    "Three months after starting clobetasol, a 60-year-old with biopsy-proven lichen sclerosus has no itch and the whiteness has faded. She asks to stop the cream. What do you advise?",
    ["Keep going long term at maintenance (about twice weekly), with regular reviews and an annual TSH", "Stop: she's cured", "Stop and restart only if symptoms come back", "Switch to a vulvectomy to remove the cancer risk", "Switch to an antifungal"],
    0,
    "<b>Treat forever</b>, symptoms or not: ongoing treatment lowers the <b>~4% lifetime vulvar SCC risk</b> and prevents scarring (buried clitoris, resorbed labia minora, narrowed introitus). Daily until signs resolve, then <b>maintenance 1–3×/week</b>; review every 3 months, then every 6 months. Lichen sclerosus is associated with <b>hypothyroidism</b>: annual TSH. Biopsy anything that doesn't respond.");

  qb(VL, "#bartholin", null,
    "A 28-year-old has 3 days of a painful, warm, fluctuant 4 cm swelling in the lower inner left labium majus at about 5 o'clock, near the vestibule. She can barely sit or walk. Best management?",
    ["Incision and drainage with a Word catheter left in place (marsupialization if recurrent)", "Oral antibiotics alone", "Excise the gland urgently", "Needle aspiration only", "Reassure: Bartholin cysts never need treatment"],
    0,
    "A <b>Bartholin abscess</b> is diagnosed clinically by <b>location</b> (gland at 4 and 8 o'clock, duct opening into the vestibule); the common ER error is confusing it with a labial skin abscess. Drain it, and leave a <b>Word catheter</b> so a tract epithelializes (otherwise it re-seals and recurs). <b>Marsupialization</b> for recurrence. Gland carcinoma is rare but exists.");

  /* 4.13 Endometriosis */
  qb(EN, "#treatment", null,
    "A 24-year-old has painful periods starting 2 days before bleeding, mid-cycle pain and deep dyspareunia. Her pelvic exam and ultrasound are normal. She doesn't want pregnancy for several years. What is the best next step?",
    ["Empiric NSAIDs plus hormonal suppression (e.g., continuous combined pill, LNG-IUS or dienogest)", "Diagnostic laparoscopy before any treatment", "Reassure her: a normal exam rules out endometriosis", "GnRH agonist as first line", "Hysterectomy"],
    0,
    "The commonest exam finding in endometriosis is <b>none at all</b>, so treat clinically. First line is <b>pain control plus 'pseudopregnancy'</b> (OCP, ring, patch, Depo, hormonal IUS, <b>dienogest/Visanne</b>): anything that suppresses ovulation and thins the endometrium shrinks the lesions. Laparoscopy is for diagnostic doubt, infertility, or refractory disease.");

  qb(EN, "#treatment", null,
    "Laparoscopic excision 2 years ago confirmed endometriosis in a 29-year-old. Her pain is back despite continuous OCP and then dienogest. She plans to have children in about 5 years. Which is the most appropriate next option?",
    ["A GnRH agonist (e.g., leuprolide) for a 'pseudomenopause', usually with add-back hormones", "Repeat excision every time pain recurs", "Hysterectomy with bilateral oophorectomy", "Stop all treatment", "Danazol as the long-term first choice"],
    0,
    "Second line is <b>pseudomenopause</b>: GnRH agonists (Lupron, Zoladex) or the oral GnRH <b>antagonist</b> elagolix, with add-back to limit menopausal symptoms and bone loss. Danazol works but androgenic effects limit it. <b>Repeated surgery isn't recommended</b> (lesions recur, and each operation adds scarring). Hysterectomy is last and only once childbearing is complete.");

  /* 4.15 Acute pelvic pain */
  qb(AP, "#case-1-ectopic", null,
    "A stable 28-year-old has a 2.8 cm unruptured right tubal ectopic, no fetal cardiac activity, normal liver and renal function, and lives 10 minutes from the hospital. Which single finding would rule out methotrexate?",
    ["β-hCG of 6,200 IU/L", "Mass size of 2.8 cm", "No fetal heartbeat", "Mild pain with stable vitals", "A previous chlamydia infection"],
    0,
    "Methotrexate needs <b>all</b> of: <b>clinically stable</b>, mass <b>< 3–4 cm</b>, <b>no fetal heartbeat</b>, <b>β-hCG < 5,000</b>, normal liver and renal function, and a reliable patient with emergency access. Fail one (here the β-hCG) → <b>surgery</b> (salpingectomy or salpingostomy). An unstable or ruptured ectopic goes straight to the OR.");

  qb(AP, "#approach", null,
    "Which finding in a woman with acute pelvic pain most strongly points to blood in the peritoneum?",
    ["Shoulder-tip pain (with postural drop in BP)", "Colicky pain that comes in waves", "Dysuria", "Fever of 38.5 °C", "Foul vaginal discharge"],
    0,
    "Blood irritating the <b>diaphragm</b> refers pain to the <b>shoulder tip</b> (phrenic nerve, C3–C5); blood in the cul-de-sac causes <b>tenesmus</b>. Add <b>postural vital changes</b> and a falling hemoglobin. Check β-hCG to separate ruptured ectopic from a ruptured hemorrhagic cyst, and a bedside <b>FAST</b> for free fluid.");

  qb(AP, "#case-3-torsion", null,
    "At laparoscopy for suspected torsion, a 30-year-old's right ovary is enlarged, dusky and twisted twice on its pedicle around a 7 cm cyst. What is the right approach?",
    ["Untwist it, assess it, and preserve the ovary where possible, dealing with the underlying cyst", "Remove the ovary routinely, since a dusky ovary is always dead", "Close and treat with analgesia", "Untwist it only; ignore the cyst", "Bilateral oophorectomy"],
    0,
    "Torsion is a <b>surgical emergency</b> aiming to <b>save the ovary</b>: venous outflow is blocked first, then the ovary swells and arterial inflow fails (ischemia, then necrosis). Many dusky ovaries recover after <b>detorsion</b>. An enlarged ovary is a 'weighted pendulum', so torsion is usually a symptom of a <b>mass</b>: deal with it and establish benign versus malignant.");

  qb(AP, "#case-4-ruptured-cyst", null,
    "A 26-year-old has sudden RLQ pain 2 weeks after her LMP. β-hCG is negative; vitals are normal and stay normal on standing; ultrasound shows a small amount of free fluid; hemoglobin is 124, then 122 four hours later. She isn't trying to conceive. Management?",
    ["Analgesia and observation with repeat CBC; later consider the pill to suppress ovulation and prevent recurrence", "Emergency laparoscopy", "Methotrexate", "IV ceftriaxone and doxycycline", "Interventional radiology embolization"],
    0,
    "A <b>ruptured corpus luteum cyst</b> (mid-cycle, often after intercourse or exercise) usually bleeds little and settles. Surgery only for <b>ongoing bleeding or instability</b> (falling Hb, postural vitals); IR in selected cases. <b>Ovulatory suppression</b> prevents recurrence, but not if she's trying to conceive: ask her goals.");

  /* 4.16 Genetic screening */
  qb(GS, "#fragile-x", null,
    "Lina, 34, has had no periods for 8 months; FSH is in the menopausal range on two occasions. Her nephew has intellectual disability, and her 66-year-old father was recently diagnosed with 'Parkinson's' because of a tremor and unsteady gait. Which test explains all three?",
    ["FMR1 CGG-repeat analysis (fragile X premutation)", "Karyotype for Turner mosaicism", "Anti-adrenal antibodies", "Prolactin and MRI", "BRCA testing"],
    0,
    "The <b>FMR1 premutation</b> (~55–200 CGG repeats) causes <b>premature ovarian insufficiency</b> in women and <b>FXTAS</b> (tremor, ataxia) in older men. Expansion to a full mutation (>200) when passed through a woman causes fragile X syndrome in boys. That's why a 3-generation pedigree matters, and her pregnancies need counselling about expansion.");

  qb(GS, "#ethnicity", null,
    "At her first prenatal visit, a 27-year-old of Vietnamese descent has hemoglobin 112, MCV 66 and normal ferritin. What next?",
    ["Hemoglobin electrophoresis (± DNA testing for alpha thalassemia); if she's a carrier, test her partner", "Iron supplements and recheck in 3 months", "NIPT for thalassemia", "No action: mild anemia is normal in pregnancy", "Amniocentesis now"],
    0,
    "Microcytosis with <b>normal iron</b> suggests <b>thalassemia trait</b>; carrier screening is by ancestry (Mediterranean, Middle Eastern, Asian, African). Start with the mother; if she carries, test the partner. Two carriers → risk of an affected fetus (e.g., hydrops with alpha-thal major) → offer CVS or amniocentesis. NIPT doesn't screen single-gene disease.");

  qb(GS, "#nipt", null,
    "At 12 weeks, NIPT reports a high risk of trisomy 21. The patient says she will terminate if it's confirmed and asks whether she can arrange that now. What do you advise?",
    ["Confirm with CVS (now) or amniocentesis (from 15 weeks) before any irreversible decision", "NIPT is diagnostic, so no further testing is needed", "Repeat NIPT in 4 weeks", "Wait for the 20-week anatomy scan instead", "Maternal serum screen to confirm"],
    0,
    "<b>Screening isn't diagnosis.</b> NIPT tests <b>placental</b> cell-free DNA: about 99% detection with <1% false positives, but a positive result can still be wrong (e.g., confined placental mosaicism), so confirm with an <b>invasive diagnostic test</b>. CVS (11–13 weeks) is earlier; amniocentesis (15–20 weeks) samples fetal cells and avoids the mosaicism problem.");
})();

/* Week 5 · Female Reproductive. Adapted from the class qbank (src = their id) unless null. */
(function () {
  const PMB = "w5-post-menopausal-bleeding", PM = "w5-pelvic-mass", MEN = "w5-menopause", DC = "w5-dilation-curettage", HY = "w5-hysterectomy";

  /* ---------------------------------------------------- 5.1 Postmenopausal bleeding */
  qb(PMB, "#pathway", ["reviews-repro-Q16", "Written from review slides"],
    "A 63-year-old, 11 years past menopause and not on HRT, has had two episodes of light spotting. The vaginal mucosa looks atrophic; last year's screening was normal. What is the most important next investigation?",
    ["Transvaginal ultrasound and endometrial biopsy", "Repeat cervical screening", "FSH and estradiol", "CA-125", "Reassure: atrophy explains it"],
    0,
    "<b>Every postmenopausal bleed needs endometrial cancer excluded</b>, even if atrophy is visible (the most common cause, but a diagnosis of exclusion). Do a speculum exam, <b>TVUS</b> (endometrium ≤ 4 mm is reassuring if not on HRT) and an <b>endometrial biopsy</b>. A normal cervical screen doesn't assess the endometrium. ~90% of endometrial cancers present with bleeding, and that's why it's usually caught early.");

  qb(PMB, "#four-biopsies", ["new-repro-Q31", "DSSG cases"],
    "Karen, 60, has postmenopausal bleeding; TVUS shows a 10 mm endometrium. The office biopsy reports 'insufficient tissue for diagnosis'. Next step?",
    ["Repeat sampling, ideally by hysteroscopy with D&C: a thick endometrium plus a failed biopsy hasn't excluded cancer",
     "Reassure: insufficient tissue means atrophy",
     "Observe and repeat the ultrasound in a year",
     "Hysterectomy without a tissue diagnosis",
     "Start vaginal estrogen"],
    0,
    "A 10 mm stripe is <b>abnormal</b> after menopause, and an insufficient sample is a <b>failed test, not a negative one</b>. Get tissue: repeat biopsy or <b>hysteroscopy with D&C</b> (sees and samples focal lesions such as polyps). By contrast, 'scant atrophic endometrium' with a thin stripe is a genuine benign result.");

  qb(PMB, "#hyperplasia", ["new-repro-Q32", "DSSG cases"],
    "A postmenopausal woman's endometrial biopsy shows <b>atypical hyperplasia</b> (endometrial intraepithelial neoplasia). What is the management?",
    ["Total hysterectomy with bilateral salpingo-oophorectomy",
     "LNG-IUS with repeat biopsy in 3–6 months",
     "Repeat biopsy in 6 months",
     "Vaginal estrogen",
     "Observation"],
    0,
    "Atypical hyperplasia carries a high risk of progression, and <b>~30–40% already have a coexisting carcinoma</b> missed by sampling, so it's managed <b>surgically</b>: hysterectomy ± BSO. Progestins (LNG-IUS, megestrol) are for hyperplasia <b>without</b> atypia, or for atypia when fertility must be preserved or surgery isn't possible, with close re-sampling.");

  qb(PMB, "#four-biopsies", ["module-repro-Q74", "Module case"],
    "A postmenopausal woman with bleeding has a thin endometrium on TVUS; the biopsy shows 'scant fragments of atrophic endometrium'. What do you tell her?",
    ["It's benign (atrophy); offer local treatment and ask her to return if bleeding persists or recurs",
     "The biopsy must be repeated",
     "She needs a hysterectomy",
     "It's cancer until proven otherwise",
     "She should restart systemic HRT"],
    0,
    "Scant atrophic tissue that matches a <b>thin endometrium</b> is a <b>benign</b> result: atrophy is the most common cause of postmenopausal bleeding. Treat if bothersome (vaginal estrogen, moisturizers). <b>Recurrent bleeding reopens the work-up</b> (thin-stripe biopsies miss some cancers, so persistent bleeding goes to hysteroscopy).");

  qb(PMB, "#carcinoma", ["module-repro-Q76", "Module case"],
    "A postmenopausal biopsy returns 'endometrioid adenocarcinoma'. What do you tell the patient?",
    ["It's a cancer (the most common endometrial type); she needs referral for hysterectomy, BSO and staging",
     "'Endometrioid' means benign",
     "The biopsy must be repeated to confirm",
     "It will regress with progestins alone in all cases",
     "Observe with annual ultrasound"],
    0,
    "<b>Endometrioid</b> = the histologic type (not 'endometrial-like and benign'); it's the commonest, estrogen-driven <b>type 1</b> endometrial cancer, with hyperplasia as its precursor. Treatment: total hysterectomy, BSO and nodal assessment (± adjuvant therapy by stage and grade), usually with a good prognosis because bleeding brings it to attention early.");

  qb(PMB, "#carcinoma", ["hippo-repro-Q41", "HippoNotes"],
    "Which statement about endometrial cancer types is <b>incorrect</b>?",
    ["Type 2 (e.g., serous) endometrial cancer is driven by unopposed estrogen",
     "Type 1 (endometrioid) is more common than type 2",
     "Endometrial carcinoma must be excluded in all postmenopausal bleeding",
     "PCOS and granulosa cell tumours are sources of excess estrogen",
     "Type 2 tumours tend to be higher grade with worse prognosis"],
    0,
    "<b>Type 1</b> (endometrioid, ~80–90%): estrogen-dependent, arises from hyperplasia, younger and obese women, Lynch syndrome, good prognosis. <b>Type 2</b> (serous, clear cell): <b>not</b> estrogen-related, arises in atrophic endometrium in older women, p53-mutated, aggressive. Excess estrogen sources: obesity, PCOS, tamoxifen, unopposed HRT, granulosa cell tumours.");

  qb(PMB, "#causes", ["new-repro-Q34", "DSSG cases"],
    "Karen, 60, has endometrial cancer. She is obese, had infertility, and her brother had colon cancer at 58 and her sister endometrial cancer at 55. Which risk factors are relevant? <i>(Select all that apply.)</i>",
    ["Obesity (peripheral estrogen)", "Infertility/nulliparity (unopposed estrogen)", "A family history suggesting Lynch syndrome", "Combined oral contraceptive use", "Smoking"],
    [0, 1, 2],
    "Type 1 risk = <b>unopposed estrogen</b>: obesity, chronic anovulation (PCOS), nulliparity or infertility, early menarche, late menopause, estrogen-only HRT, tamoxifen. Her family history (young colon and endometrial cancers) suggests <b>Lynch syndrome</b> → genetics referral and family screening. The COCP and smoking actually <b>lower</b> endometrial cancer risk.");

  qb(PMB, "#causes", ["new-repro-Q130", "DSSG cases"],
    "Grace, 60, presents with 'vaginal bleeding'. Which sites could the blood be coming from? <i>(Select all that apply.)</i>",
    ["Endometrium", "Cervix", "Vagina or vulva", "Urinary tract or bowel (including a fistulizing malignancy)", "Ovary as direct bleeding into the vagina"],
    [0, 1, 2, 3],
    "Postmenopausal 'vaginal' bleeding can arise anywhere along the tract (vulva, vagina, cervix, endometrium) or from the <b>urinary tract or rectum</b>, so ask about hematuria and rectal bleeding and examine carefully. Atrophy is the commonest cause; <b>endometrial cancer must be excluded</b>. A speculum exam may find a cervical or vaginal lesion.");

  /* ---------------------------------------------------- 5.2 Pelvic mass */
  qb(PM, "#presentation", ["new-repro-Q37", "DSSG cases"],
    "Adella, 55, has weeks of bloating, increasing girth, early satiety, urinary frequency and constipation. Exam: bilateral adnexal masses. What is the diagnostic pathway?",
    ["Pelvic ultrasound, CA-125, CT chest/abdomen/pelvis, and gynecologic oncology referral before surgery",
     "Laparoscopic cystectomy to get tissue first",
     "Serial ultrasound in 3 and 6 months",
     "Endometrial biopsy and hysteroscopy",
     "Reassure: these are symptoms of aging"],
    0,
    "Vague abdominal symptoms plus <b>bilateral complex masses</b> in a peri- or postmenopausal woman = ovarian cancer until proven otherwise. Image (US then CT for spread), CA-125, and refer to <b>gyne-oncology</b>: outcomes are better when the first operation is a proper staging and debulking. Avoid rupturing a possibly malignant cyst laparoscopically.");

  qb(PM, "#malignant-epithelial", ["new-repro-Q38", "DSSG cases"],
    "Adella's CA-125 is high; imaging shows bilateral complex solid–cystic masses, omental caking and ascites. At surgery there are bilateral tubo-ovarian masses with surface involvement. Most likely diagnosis and treatment principle?",
    ["High-grade serous carcinoma: maximal cytoreduction (debulking) plus carboplatin–paclitaxel",
     "Mucinous cystadenoma: cystectomy alone",
     "Metastatic gastric cancer: gastrectomy first",
     "Endometrioma: hormonal suppression",
     "Granulosa cell tumour: observation"],
    0,
    "<b>High-grade serous carcinoma</b> (often arising in the fallopian tube) is the commonest ovarian cancer: bilateral, surface involvement, omental disease, ascites, and usually <b>stage III at diagnosis</b> because symptoms are vague. Treatment is surgical staging with <b>debulking</b> (residual disease predicts survival) and platinum-taxane chemotherapy (± neoadjuvant), plus <b>BRCA testing</b> (PARP inhibitors, family implications).");

  qb(PM, "#malignant-epithelial", ["new-repro-Q40", "DSSG cases"],
    "Which factors <b>reduce</b> the risk of epithelial ovarian cancer? <i>(Select all that apply.)</i>",
    ["Combined oral contraceptive use", "Pregnancy and breastfeeding", "Bilateral salpingectomy (or tubal ligation)", "Nulliparity", "BRCA1 mutation"],
    [0, 1, 2],
    "Anything that <b>suppresses ovulation</b> protects (COCP use lowers risk substantially, plus pregnancy and breastfeeding), and so does removing or interrupting the <b>tubes</b>, where most high-grade serous cancers start (opportunistic salpingectomy). Risk factors: age, nulliparity, infertility, endometriosis (clear cell and endometrioid), <b>BRCA1/2</b>, Lynch.");

  qb(PM, "#germ-cell", ["workbook-repro-Q131", "Workbook · Reproduction"],
    "A 26-year-old has a pelvic mass with pressure symptoms and markedly raised LDH. Which germ cell tumour is most likely?",
    ["Dysgerminoma", "Yolk sac tumour", "Choriocarcinoma", "Mature cystic teratoma", "Serous carcinoma"],
    0,
    "Malignant germ cell tumours affect <b>young women</b>, and the marker names the tumour: <b>dysgerminoma → LDH</b> (ovarian counterpart of seminoma; radiosensitive), <b>yolk sac → AFP</b> (Schiller–Duval bodies), <b>choriocarcinoma → β-hCG</b>. Send LDH, AFP and β-hCG for any solid ovarian mass in a girl or young woman.");

  qb(PM, "#borderline", ["new-repro-Q90", "Module case"],
    "A 52-year-old's resected ovarian cyst has papillary excrescences; histology shows complex branching papillae with stratified, atypical cells but <b>no stromal invasion</b>. Diagnosis?",
    ["Serous borderline tumour", "Serous cystadenoma", "Low-grade serous carcinoma", "High-grade serous carcinoma", "Serous cystadenofibroma"],
    0,
    "<b>Borderline</b> (low malignant potential) = complex architecture + atypia but <b>no invasion</b>. Excellent prognosis with surgery; complications include peritoneal implants, recurrence, and progression to <b>low-grade</b> serous carcinoma (not high-grade, which arises via a separate p53 pathway). Cystadenomas are bland single-layered cysts; carcinomas invade stroma.");

  qb(PM, "#teratoma", ["new-repro-Q91", "Module case"],
    "A 25-year-old's unilateral ovarian cyst contains hair, sebaceous material and a tooth; histology shows only mature tissues (skin, cartilage). Diagnosis?",
    ["Mature cystic teratoma (dermoid)", "Immature teratoma", "Dysgerminoma", "Yolk sac tumour", "Endometrioma"],
    0,
    "<b>Dermoid</b>: the most common ovarian neoplasm in young women, benign, all mature tissue (often from all three germ layers). Risk: <b>torsion</b> (heavy cyst). Rarely, a squamous carcinoma arises in older women. <b>Immature</b> teratoma contains primitive neural tissue and is malignant.");

  qb(PM, "#benign-epithelial", ["new-repro-Q89", "Module case"],
    "A 45-year-old has an enormous multiloculated ovarian cyst full of thick jelly-like fluid, lined by tall mucin-filled columnar cells without invasion. Diagnosis?",
    ["Mucinous cystadenoma", "Serous cystadenoma", "Mucinous carcinoma", "Serous borderline tumour", "Mature teratoma"],
    0,
    "<b>Mucinous</b> tumours are typically <b>unilateral</b>, multiloculated and can become <b>huge</b>. Benign = no atypia or invasion. Serous cystadenomas contain clear fluid with bland cuboidal lining. A <b>bilateral</b> mucinous carcinoma should make you look for a GI primary (appendix).");

  qb(PM, "#sex-cord", ["new-repro-Q93", "Module case"],
    "A 63-year-old with postmenopausal bleeding has atypical hyperplasia and endometrial carcinoma in her uterus and a yellow solid–cystic ovarian mass of small cells forming microfollicles (Call-Exner bodies). What is the ovarian tumour, and how are the findings linked?",
    ["Granulosa cell tumour, which makes estrogen that drove the endometrial pathology",
     "Fibroma, which makes androgens",
     "Serous carcinoma metastatic to the endometrium",
     "Mature teratoma",
     "Krukenberg tumour"],
    0,
    "<b>Adult granulosa cell tumour</b> (sex cord-stromal): produces <b>estrogen</b>, causing endometrial hyperplasia or carcinoma and postmenopausal bleeding (or precocious puberty in girls). Marker: <b>inhibin</b>. Malignant but slow-growing, with <b>late recurrence (> 10 years)</b>, and prone to rupture with hemoperitoneum.");

  qb(PM, "#metastatic", ["new-repro-Q95", "Module case"],
    "A 60-year-old has ascites and <b>bilateral</b> ovarian masses composed of invasive mucinous glands, with gelatinous mucin throughout the abdomen. What should you look for?",
    ["A primary in the appendix (or elsewhere in the GI tract): this is likely metastatic with pseudomyxoma peritonei",
     "Nothing: this is a primary ovarian mucinous carcinoma",
     "A breast primary",
     "A thyroid primary",
     "A uterine leiomyosarcoma"],
    0,
    "Primary ovarian mucinous carcinoma is usually <b>unilateral</b>, so <b>bilateral</b> mucinous tumours are metastatic until proven otherwise, most often from the <b>appendix</b> (pseudomyxoma peritonei) or GI tract. <b>Krukenberg</b> tumours are bilateral signet-ring metastases, classically from the stomach. 'Check the appendix.'");

  qb(PM, "#metastatic", ["new-repro-Q96", "Module case"],
    "Both ovaries are enlarged, solid and white; histology shows mucin-filled cells with nuclei pushed to one side, infiltrating the stroma. What is this?",
    ["Krukenberg tumour (metastatic signet-ring carcinoma, typically gastric)", "Fibroma", "Primary mucinous carcinoma", "Dysgerminoma", "Brenner tumour"],
    0,
    "<b>Signet-ring cells</b> in bilateral solid ovaries = <b>Krukenberg tumour</b>, metastatic usually from the <b>stomach</b> (also breast, colon). Look for the primary (endoscopy). Fibromas are bland spindle cells (sometimes with ascites and pleural effusion: Meigs syndrome).");

  /* ---------------------------------------------------- 5.3 Menopause */
  qb(MEN, "#perimenopause", ["workbook-repro-Q55", "Workbook · Reproduction"],
    "Which statement about perimenopause is <b>false</b>?",
    ["FSH levels fall", "Progesterone levels are lower (more anovulatory cycles)", "Cycles become irregular", "Follicular depletion accelerates", "Inhibin falls"],
    0,
    "As follicles run out, <b>inhibin B falls → FSH rises</b> (often fluctuating wildly), cycles become irregular and more anovulatory (lower progesterone), and estrogen swings up and down, which is why single hormone levels are unreliable for diagnosis in perimenopause. After menopause, both FSH and LH are high and estradiol and progesterone are low.");

  qb(MEN, "#mht", ["new-repro-Q108", "Module case"],
    "Ms. Thomas, 50, last period 14 months ago, has hot flashes that impair her work. She's healthy, with no personal history of breast cancer, VTE, stroke or liver disease. Her cousin had endometrial cancer. Is she a candidate for menopausal hormone therapy?",
    ["Yes: she's under 60 and within 10 years of menopause with no contraindication; MHT is the most effective treatment",
     "No: a relative's endometrial cancer is a contraindication",
     "Only after failing an SSRI first",
     "Only vaginal estrogen",
     "No: MHT is never started after 12 months of amenorrhea"],
    0,
    "<b>Estrogen is the most effective treatment for vasomotor symptoms</b> (~75% reduction). For healthy women <b>under 60 or within 10 years of menopause</b>, benefits usually outweigh risks. Contraindications are about <b>her own</b> history: breast or endometrial cancer, VTE, stroke or CAD, active liver disease, unexplained bleeding. A cousin's cancer doesn't count. Non-hormonal options (SSRI/SNRI, gabapentin, fezolinetant) are for those who can't or won't take estrogen.");

  qb(MEN, "#mht", ["new-repro-Q109", "Module case"],
    "Ms. Thomas, who still has her uterus, starts MHT. How do you address her worry about endometrial cancer?",
    ["Add a progestogen to protect the endometrium, use the lowest effective dose, and reassess yearly",
     "Use estrogen alone: the progestogen is what causes endometrial cancer",
     "Choose transdermal estrogen, which removes the endometrial risk",
     "Do an endometrial biopsy every year",
     "Avoid MHT completely"],
    0,
    "<b>With a uterus, estrogen must be opposed</b> by a progestogen (oral or LNG-IUS) to prevent hyperplasia and cancer. Estrogen alone is only for women after hysterectomy. Transdermal estrogen lowers VTE risk, not endometrial risk. Biopsy only if there's <b>unexpected bleeding</b>.");

  qb(MEN, "#mht", ["new-repro-Q86", "Module case"],
    "A 53-year-old wants hormone therapy for hot flashes. Which item in her history is a contraindication to systemic estrogen?",
    ["A previous DVT", "Hot flashes waking her nightly", "Vaginal dryness and dyspareunia", "Her last period was 14 months ago", "Mild hypertension, controlled"],
    0,
    "<b>Past or active VTE</b> (also breast cancer, stroke or MI, active liver disease, unexplained bleeding) contraindicates systemic estrogen. Vasomotor and genitourinary symptoms are the indications, and 12+ months of amenorrhea just dates her menopause. Transdermal estrogen has a lower VTE risk than oral but is still avoided after a VTE in most cases.");

  qb(MEN, "#gsm-treatment", ["new-repro-Q110", "Module case"],
    "On systemic MHT her hot flashes are better, but she now has vaginal dryness and tearing pain with intercourse. What is your approach?",
    ["History and pelvic exam (atrophy vs lichen sclerosus), then local vaginal estrogen alongside her MHT if it's GSM",
     "Stop her MHT",
     "Double her systemic estrogen",
     "Start ospemifene without an exam",
     "Refer for sex therapy only"],
    0,
    "Systemic MHT doesn't always treat <b>genitourinary syndrome of menopause</b> fully. Examine the vulva and vagina to exclude other causes (<b>lichen sclerosus</b>, infection), then start lubricants or moisturizers and <b>low-dose vaginal estrogen</b> (safe to combine with MHT; minimal systemic absorption). Lichen sclerosus needs a potent topical steroid instead.");

  qb(MEN, "#mht", ["workbook-repro-Q62", "Workbook · Reproduction"],
    "Which is <b>not</b> a benefit of menopausal hormone therapy?",
    ["Lower breast cancer risk", "Relief of vasomotor symptoms", "Prevention of osteoporotic fractures", "Improved genitourinary symptoms", "Better sleep and quality of life"],
    0,
    "Combined estrogen-progestin therapy slightly <b>increases</b> breast cancer risk with longer use (estrogen alone after hysterectomy does not, or barely). Benefits: vasomotor relief, <b>bone protection</b>, genitourinary symptoms and quality of life. Other risks: VTE (lower with transdermal), and stroke when started in older women.");

  qb(MEN, "#assessment", ["new-repro-Q87", "Module case"],
    "A 53-year-old with no abnormal bleeding comes to discuss menopause. Does she need cervical screening or an endometrial biopsy before starting MHT?",
    ["Cervical screening only if she's due on the usual schedule; an endometrial biopsy only if there's abnormal bleeding",
     "Both are required before any MHT",
     "Endometrial biopsy routinely at her age",
     "Neither ever again after menopause",
     "A mammogram and endometrial biopsy are both mandatory"],
    0,
    "Menopause doesn't change the <b>cervical screening</b> schedule (HPV-based, until ~65–70). <b>Endometrial sampling</b> is driven by <b>abnormal or postmenopausal bleeding</b>, not routinely before MHT. Do take a careful bleeding history: irregular perimenopausal bleeding over 40 may need a biopsy.");

  qb(MEN, "#mht", ["hippo-repro-Q44", "HippoNotes"],
    "Which statements about menopause are true? <i>(Select all that apply.)</i>",
    ["After hysterectomy, estrogen-only therapy is appropriate", "In perimenopause, cycle length and flow commonly change", "Periods often become lighter and further apart before stopping", "Local (vaginal) estrogen effectively treats hot flashes", "Systemic estrogen is required for genitourinary symptoms"],
    [0, 1, 2],
    "The progestogen in MHT is there only to protect the endometrium, so <b>no uterus = estrogen alone</b>. Local vaginal estrogen treats <b>genitourinary</b> symptoms but has negligible systemic effect on hot flashes. GSM usually responds to local therapy; systemic estrogen isn't required.");

  /* ---------------------------------------------------- 5.4 D&C */
  qb(DC, "#complications", ["hippo-repro-Q54", "HippoNotes"],
    "Shortly after a D&C for missed abortion, a patient has severe cramping lower abdominal pain, a tender enlarged uterus and urinary retention, but <b>no vaginal bleeding</b>. Most likely complication?",
    ["Hematometra (post-abortal syndrome)", "Uterine perforation", "Cervical shock", "Endometritis", "Asherman syndrome"],
    0,
    "<b>Hematometra</b>: blood collects in a uterus that can't empty (cervix closed or uterus not contracting), so there's pain <b>without bleeding</b>, a large tender uterus, sometimes retention. Treat with <b>re-evacuation</b> and uterotonics. Cervical shock is a vasovagal event during dilation; perforation causes peritoneal signs.");

  qb(DC, "#complications", ["workbook-repro-Q129", "Workbook · Reproduction"],
    "Two days after a D&C at 8 weeks, a 34-year-old has abdominal pain, fever 39 °C, HR 120, guarding and rebound. What complication should you suspect?",
    ["Uterine perforation with peritonitis (possibly bowel injury)", "Cervical shock", "Hematometra", "Retained products alone", "Asherman syndrome"],
    0,
    "Peritoneal signs with fever after uterine instrumentation = <b>perforation</b>, with possible bowel or bladder injury and infection, until proven otherwise: urgent imaging and surgical assessment. Cervical shock is immediate and transient (vagal); endometritis gives uterine tenderness and discharge but not usually generalized peritonitis.");

  qb(DC, "#complications", ["reviews-repro-Q20", "Written from review slides"],
    "A 33-year-old had three D&Cs in a year for retained products. She now has amenorrhea; β-hCG negative, FSH, prolactin and TSH normal. What most likely caused this, and how is it confirmed?",
    ["Asherman syndrome (intrauterine adhesions from repeated curettage), confirmed by hysteroscopy",
     "Premature ovarian insufficiency",
     "Hypothalamic amenorrhea",
     "Prolactinoma",
     "Sheehan syndrome"],
    0,
    "Curettage, especially <b>repeated or sharp</b> curettage in a recently pregnant or infected uterus, damages the <b>basalis</b> → adhesions → amenorrhea or hypomenorrhea, infertility, and placental problems. Normal hormones point to the uterus. <b>No withdrawal bleed</b> after estrogen plus progestin supports it; <b>hysteroscopy</b> diagnoses and treats it (adhesiolysis). Medical management of retained products reduces the risk.");

  qb(DC, "#what", ["reviews-repro-Q19", "Written from review slides"],
    "Which patient having a suction D&C should routinely receive antibiotic prophylaxis?",
    ["Therapeutic (induced) abortion at 10 weeks", "Missed abortion at 9 weeks", "Incomplete miscarriage at 8 weeks", "Inevitable abortion at 7 weeks", "None of them"],
    0,
    "Prophylactic antibiotics (e.g., doxycycline) are recommended for <b>surgical induced abortion</b>, which reduces post-abortion infection. Guidance differs for D&C after <b>pregnancy loss</b>, where routine prophylaxis isn't recommended. Treat any known STI or BV, and give anti-D if Rh negative.");

  qb(DC, "#what", ["module-repro-Q102", "Elentra module"],
    "For which condition is a suction D&C an appropriate treatment?",
    ["Missed abortion in the first trimester", "Tubal ectopic pregnancy", "Endometritis", "Second-trimester termination at 20 weeks", "Placenta previa"],
    0,
    "Suction D&C evacuates the uterus in <b>first-trimester pregnancy loss</b> (missed, incomplete, inevitable) and <b>induced abortion</b> under ~14 weeks. An ectopic has nothing in the cavity; endometritis is treated with antibiotics (unless retained products are the cause); later terminations use D&E or induction.");

  /* ---------------------------------------------------- 5.5 Hysterectomy */
  qb(HY, "#vocabulary", ["reviews-repro-Q18", "Written from review slides"],
    "A patient asks what a 'total' hysterectomy removes compared with a 'subtotal' one.",
    ["Total removes the uterus and cervix; subtotal removes the uterus but leaves the cervix",
     "Total removes the uterus and ovaries; subtotal keeps the ovaries",
     "Total is abdominal; subtotal is vaginal",
     "Total includes the tubes; subtotal keeps them",
     "Total includes lymph nodes"],
    0,
    "<b>Total</b> = uterus + cervix; <b>subtotal (supracervical)</b> = uterus only (she still needs cervical screening). Removing the tubes (salpingectomy) or ovaries (oophorectomy) is a separate decision, and the route (vaginal, laparoscopic, abdominal) is a different question again. 'Partial hysterectomy' is ambiguous lay language; clarify what's meant.");

  qb(HY, "#approaches", ["hippo-repro-Q46", "HippoNotes"],
    "Which hysterectomy route is usually needed for a very large uterus (e.g., huge fibroids)?",
    ["Abdominal hysterectomy", "Vaginal hysterectomy", "Laparoscopic-assisted vaginal hysterectomy", "Total laparoscopic hysterectomy", "Robotic hysterectomy in all cases"],
    0,
    "<b>Vaginal</b> is preferred when anatomy allows (fastest recovery), then <b>laparoscopic or robotic</b>. A <b>very large uterus</b>, complex malignancy or adhesions push toward <b>abdominal</b> (laparotomy), which means a 2–3 day stay; all the minimally invasive routes are usually same-day or short-stay.");

  qb(HY, "#approaches", ["module-repro-Q84", "Elentra module"],
    "Which hysterectomy approach is <b>not</b> planned as a same-day discharge?",
    ["Abdominal hysterectomy", "Vaginal hysterectomy", "Robotic hysterectomy", "Laparoscopic-assisted vaginal hysterectomy", "Total laparoscopic hysterectomy"],
    0,
    "All minimally invasive routes are planned as short-stay or same-day. <b>Abdominal hysterectomy</b> (laparotomy incision) needs a <b>2–3 day</b> admission and longer recovery, so it's reserved for when minimally invasive surgery isn't feasible.");
})();

(function () {
  const BP = "w5-breast-pathology", BR = "w5-breast-problems", OB = "w5-ob-care-providers", TER = "w5-teratogenesis",
    US1 = "w5-first-trimester-ultrasound", EPP = "w5-early-pregnancy-pathology";

  /* ---------------------------------------------------- 5.6 Breast pathology */
  qb(BP, "#papilloma", ["hippo-repro-Q3", "HippoNotes"],
    "Which pairing of benign breast lesion and presentation is <b>incorrect</b>?",
    ["Fat necrosis: bloody nipple discharge", "Fibroadenoma: mobile rubbery lump in a woman in her 20s", "Mastitis: hot, tense, painful breast", "Fibrocystic change: lumpiness that fluctuates with the cycle", "Intraductal papilloma: bloody nipple discharge"],
    0,
    "Bloody single-duct discharge = <b>intraductal papilloma</b> (excise to exclude carcinoma). <b>Fat necrosis</b> is a firm, irregular, sometimes fixed lump often after trauma or surgery, and can mimic cancer clinically and on imaging (calcifications, skin retraction). Fibroadenomas are the classic young-woman mobile 'breast mouse'.");

  qb(BP, "#risk-tiers", ["hippo-repro-Q4", "HippoNotes"],
    "Which is <b>not</b> a risk factor for breast cancer?",
    ["Having several children", "Early menarche", "Alcohol", "Never breastfeeding", "Late menopause"],
    0,
    "Breast cancer risk tracks <b>lifetime estrogen exposure</b>: early menarche, late menopause, nulliparity or late first pregnancy, not breastfeeding, combined MHT, obesity after menopause, alcohol, plus family history, BRCA, prior chest radiation and atypical hyperplasia. <b>Multiparity</b> (especially early first pregnancy) and breastfeeding are protective.");

  qb(BP, "#two-manifestations", ["module-repro-Q55", "Elentra module"],
    "Which statements about inflammatory breast carcinoma are true? <i>(Select all that apply.)</i>",
    ["It presents like diffuse acute mastitis (red, warm, swollen breast)", "A skin punch biopsy can confirm it (tumour emboli in dermal lymphatics)", "It carries a poor prognosis", "Peau d'orange must be present to make the diagnosis", "It responds to antibiotics within a week"],
    [0, 1, 2],
    "Inflammatory carcinoma is a <b>clinical</b> diagnosis: a breast that looks like mastitis (erythema over a third or more, edema, warmth), caused by tumour blocking <b>dermal lymphatics</b>. Peau d'orange is common but not required. It's aggressive (stage T4d). Any 'mastitis' in a non-lactating woman, or one that doesn't respond to antibiotics, needs imaging and biopsy.");

  qb(BP, "#two-manifestations", ["reviews-repro-Q4", "Written from review slides"],
    "A 61-year-old has a red, scaly, eroded rash of one nipple and areola that hasn't improved after 6 weeks of topical steroid. No palpable mass. What does it imply?",
    ["Paget disease of the nipple, with an underlying carcinoma (DCIS or invasive)", "Contact dermatitis", "Nipple psoriasis", "Duct ectasia", "Inflammatory carcinoma"],
    0,
    "<b>Paget disease of the nipple</b>: malignant cells spreading up the ducts into the nipple epidermis, so it looks like eczema that starts on the <b>nipple</b> (true eczema usually starts on the areola, is bilateral and responds to steroids). There's almost always an <b>underlying carcinoma</b> → imaging and nipple biopsy.");

  qb(BP, "#fibrocystic", ["reviews-repro-Q5", "Written from review slides"],
    "A 34-year-old has bilateral lumpy, tender breasts with no discrete mass, worst before each period and settling afterwards. Diagnosis?",
    ["Fibrocystic change", "Fibroadenoma", "Intraductal papilloma", "Fat necrosis", "Phyllodes tumour"],
    0,
    "<b>Fibrocystic change</b> is a physiological, cyclical response to hormones (cysts, fibrosis, lumpiness, pain), non-proliferative with no meaningful cancer risk. A discrete mobile lump suggests a fibroadenoma; a rapidly growing large 'fibroadenoma' raises phyllodes tumour.");

  qb(BP, "#prognosis", ["workbook-repro-Q48", "Workbook · Reproduction"],
    "Which are common sites of distant (hematogenous) breast cancer metastasis? <i>(Select all that apply.)</i>",
    ["Bone", "Lungs and pleura", "Liver", "Brain", "Pectoralis muscle"],
    [0, 1, 2, 3],
    "Breast cancer spreads to <b>bone</b> (most common: back pain, hypercalcemia), <b>lung and pleura</b>, <b>liver</b> and <b>brain</b> (also lobular carcinoma's odd sites: GI tract, peritoneum, ovaries). Pectoralis involvement is <b>local extension</b>, not hematogenous metastasis. <b>Axillary node status</b> is the strongest prognostic factor once distant disease is excluded.");

  qb(BP, "#presentation-sampling", ["workbook-repro-Q64", "Workbook · Reproduction"],
    "A breast lump is fixed and doesn't move over the chest wall. What does that suggest?",
    ["Invasion into the retromammary space, deep fascia or pectoralis major", "Involvement of axillary nodes", "Involvement of the lactiferous sinuses", "A simple cyst", "Fibroadenoma"],
    0,
    "The breast normally glides on the <b>retromammary space</b> over the pectoral fascia. <b>Fixation</b> means tumour has infiltrated deep structures. Skin tethering, dimpling or nipple retraction means involvement of the <b>suspensory (Cooper) ligaments</b>; peau d'orange means lymphatic obstruction.");

  qb(BP, "#in-situ", ["weekly-repro-Q11", "Weekly quiz"],
    "Which statements about DCIS and LCIS are true? <i>(Select all that apply.)</i>",
    ["DCIS is a non-obligate precursor of invasive carcinoma and is usually found as mammographic calcifications", "LCIS has no reliable mammographic correlate and is usually an incidental finding", "LCIS is a marker of increased risk in both breasts", "LCIS must always be excised to clear margins", "DCIS can metastasize to lymph nodes"],
    [0, 1, 2],
    "<b>DCIS</b>: malignant cells confined to ducts; usually <b>calcifications</b> on mammography; a precursor treated with excision (± radiation and endocrine therapy). <b>LCIS</b>: no mammographic sign, found incidentally; a <b>risk marker</b> (both breasts) more than a direct precursor, managed with surveillance or risk reduction rather than wide excision (pleomorphic LCIS is the exception). In-situ disease doesn't metastasize.");

  /* ---------------------------------------------------- 5.7 Breast problems */
  qb(BR, "#mastitis-clinical", ["reviews-repro-Q3", "Written from review slides"],
    "A woman 3 weeks postpartum and breastfeeding has a red, hot, painful wedge of her breast and a temperature of 38.4 °C. No fluctuant mass. Management?",
    ["Antibiotics covering <i>S. aureus</i> (e.g., cephalexin or cloxacillin) and keep breastfeeding or emptying the breast",
     "Stop breastfeeding and bind the breasts",
     "Urgent incision and drainage",
     "Mammogram to exclude cancer",
     "Cabergoline to suppress lactation"],
    0,
    "<b>Lactational mastitis</b> (usually <i>S. aureus</i>): antibiotics, analgesia, and <b>keep emptying the breast</b> (feeding is safe for the baby; stopping causes engorgement and abscess). A fluctuant mass means <b>abscess</b> → ultrasound-guided aspiration or drainage. Mastitis in a non-lactating woman, or one that doesn't settle, needs imaging to exclude inflammatory carcinoma.");

  qb(BR, "#lump-investigations", ["reviews-repro-Q1", "Written from review slides"],
    "A 29-year-old has a 1.5 cm smooth, mobile lump that persists after her next period. No family history of breast or ovarian cancer. First imaging test?",
    ["Breast ultrasound", "Diagnostic mammogram", "Breast MRI", "Galactogram", "CT chest"],
    0,
    "Imaging splits at about <b>35</b>: younger women have dense breasts and lower risk, so <b>ultrasound first</b>; at 35 or over, <b>mammogram (± ultrasound)</b>. MRI is for selected high-risk women. Any suspicious lesion on imaging gets a <b>core biopsy</b> (the 'triple test': exam, imaging and pathology must agree).");

  qb(BR, "#lumps", ["module-repro-Q51", "Module case"],
    "A 25-year-old, 3 weeks after her last period, found a 1 cm tender, mobile, cystic-feeling lump in the upper outer quadrant 2 days ago. No lymphadenopathy, no family history. Best management now?",
    ["Re-examine after her next period", "Core biopsy", "Mammogram", "FNA today", "Excision"],
    0,
    "In a <b>premenopausal, low-risk</b> woman with a benign-feeling lump found in the <b>luteal phase</b> (when cyclical swelling peaks), re-examine early in the next cycle (days 5–10). If it persists, ultrasound. Postmenopausal women, high-risk women, or lumps with worrisome features are investigated straight away.");

  qb(BR, "#worrisome", ["reviews-repro-Q2", "Written from review slides"],
    "Which features of a palpable breast lump are most concerning for malignancy? <i>(Select all that apply.)</i>",
    ["Hard and fixed", "Irregular borders", "Skin dimpling or peau d'orange", "Smooth, rubbery and mobile", "Tender only before periods"],
    [0, 1, 2],
    "Worrisome: <b>hard, fixed, irregular</b>, larger, with skin changes (dimpling, peau d'orange), nipple retraction, bloody single-duct discharge, or axillary nodes. Smooth, mobile, rubbery lumps (fibroadenoma) and cyclical tenderness (fibrocystic change) are reassuring, though imaging still decides.");

  qb(BR, "#exam", ["module-repro-Q50", "Module case"],
    "Myrna, 55, has a new breast lump. Which lymph node region is most important to examine?",
    ["Axillary", "Parasternal", "Cervical", "Inguinal", "Popliteal"],
    0,
    "Most breast lymph drains to the <b>axilla</b> (plus the axillary tail is breast tissue), and axillary status is the key prognostic factor. Examine the supra- and infraclavicular nodes in the same sweep. Internal mammary nodes drain the medial breast but aren't palpable. At 55 she goes straight to diagnostic mammogram ± ultrasound.");

  qb(BR, "#lump-investigations", ["hippo-repro-Q5", "HippoNotes"],
    "A 38-year-old has a hard, fixed, irregular 2.5 cm breast lump. What is the next best investigation?",
    ["Diagnostic mammogram (with ultrasound)", "Ultrasound alone", "MRI", "Reassess after next period", "Tumour markers"],
    0,
    "She's <b>over 35</b> with <b>worrisome features</b>: diagnostic <b>mammogram</b> (usually with targeted ultrasound), then <b>core biopsy</b>. Don't wait a cycle with a suspicious lump. Tumour markers have no diagnostic role.");

  qb(BR, "#recommendations", ["workbook-repro-Q47", "Workbook · Reproduction"],
    "Janet, 35, asks about breast screening. Her maternal grandmother had breast cancer at 68; no other family history. What do you advise?",
    ["She's average risk: no screening mammograms yet (routine screening from 50 per the lecture; Ontario now allows self-referral from 40)",
     "Annual mammograms from now",
     "Mammograms every 2 years from now",
     "Annual MRI",
     "Breast ultrasound now"],
    0,
    "A single <b>second-degree</b> relative diagnosed late doesn't make her high risk. High risk includes: a first-degree relative under 50, two first-degree relatives, ovarian or male breast cancer in the family, BRCA, chest radiation before 30, or atypia/LCIS on biopsy. Average-risk screening is a mammogram every 2 years (lecture: 50–74).");

  /* ---------------------------------------------------- 5.8 OB care providers */
  qb(OB, "#comparison", ["hippo-repro-Q72", "HippoNotes"],
    "Which is <b>not</b> usually within the scope of a family physician providing obstetrical care?",
    ["Managing all degrees of postpartum hemorrhage independently, including those needing surgery", "Antenatal, intrapartum and postpartum care for low-risk pregnancies", "Using oxytocin in labour", "Vacuum-assisted vaginal birth (with training)", "Routine newborn care"],
    0,
    "Family physicians manage <b>low-risk</b> pregnancies and births, augment labour, do outlet vacuums (with training), manage initial PPH, and care for newborns. <b>Severe or refractory PPH</b>, cesarean section and high-risk pregnancies need an <b>obstetrician</b> (consult early).");

  qb(OB, "#comparison", ["hippo-repro-Q73", "HippoNotes"],
    "Which statement about midwifery care in Canada is <b>false</b>?",
    ["All midwives can independently manage epidurals and oxytocin augmentation", "Midwifery regulation and scope vary by province", "Midwives emphasize informed choice", "Midwives can provide home births and home visits", "Midwives care for low-risk pregnancies and consult or transfer care when risk arises"],
    0,
    "Midwives provide primary care for <b>low-risk</b> pregnancies (home or hospital birth, longer visits, postpartum home visits) with a philosophy of informed choice. <b>Epidurals and oxytocin augmentation</b> generally require <b>transfer of care</b> or consultation with physicians, and scope varies by province.");

  /* ---------------------------------------------------- 5.9 Teratogenesis */
  qb(TER, "#timing", ["hippo-repro-Q63", "HippoNotes"],
    "Which exposure poses the greatest risk of a structural malformation?",
    ["Heavy smoking from conception until the pregnancy is discovered at 10 weeks", "Influenza at 20 weeks despite vaccination", "Rubella at 25 weeks", "Starting to smoke at 36 weeks", "A single dental X-ray with shielding at 30 weeks"],
    0,
    "Major malformations arise during <b>organogenesis</b> (roughly weeks 3–8 after conception, through ~10 weeks' gestation). Later exposures mainly affect growth and function (smoking → growth restriction; rubella after 20 weeks rarely causes defects). Weeks 1–2 after conception are 'all or nothing'.");

  qb(TER, "#examples", ["hippo-repro-Q64", "HippoNotes"],
    "Which of these is <b>not</b> considered a teratogen?",
    ["Acetaminophen", "Maternal hyperthermia (high fever) in early pregnancy", "Toxoplasmosis", "Zika virus", "Isotretinoin"],
    0,
    "<b>Acetaminophen</b> is the analgesic and antipyretic of choice in pregnancy. Teratogens include <b>hyperthermia</b> (neural tube defects; treat fever), TORCH infections and <b>Zika</b> (microcephaly), <b>isotretinoin</b>, valproate, warfarin, ACE inhibitors (2nd and 3rd trimester), methotrexate, mycophenolate, lithium and alcohol.");

  qb(TER, "#counselling", ["workbook-repro-Q85", "Workbook · Reproduction"],
    "Which statement about medications in pregnancy is <b>false</b>?",
    ["The best time to discuss a drug's teratogenicity is at about 8 weeks, before organogenesis starts",
     "Poorly controlled maternal disease often harms the pregnancy more than the drugs used to treat it",
     "Clearance of many drugs increases in pregnancy",
     "Well-studied older drugs are generally preferred over newer ones",
     "Use the fewest drugs at the lowest effective dose"],
    0,
    "Counselling belongs <b>at the time of prescribing</b> to anyone who could become pregnant, or pre-conception, because organogenesis is <b>largely done by 8–10 weeks</b>, often before the pregnancy is recognized. Untreated epilepsy, depression or hypertension can be more dangerous than the treatment.");

  qb(TER, "#case", ["new-repro-Q98", "Module case"],
    "A 30-year-old with a kidney transplant on <b>mycophenolate</b> is planning pregnancy. What is the best pre-conception step?",
    ["Switch to a safer immunosuppressant (e.g., azathioprine or tacrolimus) well before conception, at the lowest effective doses",
     "Stop all immunosuppression until 8 weeks of pregnancy",
     "Increase the mycophenolate dose now",
     "Wait until after delivery to change anything",
     "Advise that pregnancy is impossible after transplant"],
    0,
    "Mycophenolate is a potent <b>teratogen</b> (high rates of miscarriage and malformations, e.g., ear, facial and limb defects). Pre-conception: <b>optimize the disease, switch to a safer alternative</b> with time to confirm graft stability, minimize drugs and doses, and give folic acid. Stopping immunosuppression risks rejection.");

  /* ---------------------------------------------------- 5.10 First-trimester ultrasound */
  qb(US1, "#rise", ["hippo-repro-Q47", "HippoNotes"],
    "How does hCG behave in a normal intrauterine pregnancy?",
    ["It rises rapidly early (roughly doubling every ~2 days), peaks around 8–10 weeks, then falls to a lower plateau",
     "It rises steadily until delivery",
     "It only starts rising in the second trimester",
     "It stays constant throughout pregnancy",
     "It peaks at term"],
    0,
    "hCG (from syncytiotrophoblast) rescues the corpus luteum. It rises steeply (a minimum ~35–50% rise in 48 h for a viable pregnancy), <b>peaks at ~8–10 weeks</b> (~100,000), then declines to a plateau. A suboptimal rise suggests a failing or ectopic pregnancy; very high levels suggest molar or multiple pregnancy.");

  qb(US1, "#yolk-crl", ["reviews-repro-Q21", "Written from review slides"],
    "A woman with an uncertain LMP has ultrasounds at 6 weeks (CRL 4 mm) and 8 weeks (CRL 16 mm). Which should set her due date?",
    ["The CRL at 8 weeks", "The CRL at 6 weeks", "Her LMP", "Mean sac diameter at 6 weeks", "Biparietal diameter at 20 weeks"],
    0,
    "Once an embryo is visible, <b>CRL</b> is the most accurate dating method (± ~5–7 days), more reliable from ~7 weeks (CRL ≥ 10 mm). Use the <b>earliest reliable</b> CRL. Once set, the due date isn't changed by later scans (those measure growth). Mean sac diameter is only used before an embryo is seen.");

  /* ---------------------------------------------------- 5.11 Pathology of first-trimester bleeding */
  qb(EPP, "#sa-types", ["workbook-repro-Q91", "Workbook · Reproduction"],
    "What is the most common identifiable cause of first-trimester spontaneous abortion?",
    ["Fetal chromosomal abnormalities (especially trisomies)", "Maternal infection", "Uterine anomalies", "Maternal malnutrition", "Medication use"],
    0,
    "About 15–20% of recognized pregnancies miscarry, and roughly <b>half have chromosomal abnormalities</b> (trisomy 16 most common, then triploidy, monosomy X). That's why a single miscarriage isn't investigated and isn't caused by stress or exercise; recurrent loss (≥ 2–3) is worked up.");

  qb(EPP, "#mole-comparison", ["workbook-repro-Q94", "Workbook · Reproduction"],
    "Products of conception show diffusely swollen hydropic villi with marked circumferential trophoblast proliferation and no fetal tissue. Diagnosis?",
    ["Complete hydatidiform mole", "Partial hydatidiform mole", "Hydropic spontaneous abortion", "Ectopic pregnancy", "Choriocarcinoma"],
    0,
    "<b>Complete mole</b>: 46,XX (or XY), <b>all paternal</b> (an empty egg fertilized), with no fetus, all villi hydropic, marked trophoblast proliferation, very high hCG, and ~15–20% risk of persistent gestational trophoblastic neoplasia. <b>Partial mole</b>: triploid (69, two paternal sets), fetal parts present, patchy villous change, lower risk.");

  qb(EPP, "#gtd", ["hippo-repro-Q50", "HippoNotes"],
    "Which statement about gestational trophoblastic disease is true?",
    ["A 'snowstorm' uterus without a fetus on ultrasound suggests a complete mole",
     "Choriocarcinoma most often metastasizes first to the liver",
     "Partial moles contain only paternal chromosomes",
     "After a mole, pregnancy can be attempted as soon as hCG first becomes normal",
     "Moles are managed with expectant miscarriage"],
    0,
    "Complete mole: <b>snowstorm</b> pattern, uterus large for dates, very high hCG, hyperemesis, early pre-eclampsia, hyperthyroidism, theca lutein cysts. Treatment is <b>suction evacuation</b>, then weekly <b>hCG until normal</b> and monthly for months (reliable contraception meanwhile; a new pregnancy would confound the hCG). Choriocarcinoma spreads first to the <b>lungs</b>; partial moles are triploid.");

  qb(EPP, "#gtd", ["module-repro-Q82", "Module case"],
    "Kim, 21, has a week of vomiting and 2 days of vaginal bleeding; LMP 9 weeks ago. She's hypertensive and her uterus is the size of a 14–16 week pregnancy. What is the most likely diagnosis?",
    ["Hydatidiform mole", "Ectopic pregnancy", "Threatened abortion", "Twin pregnancy with hyperemesis", "Placental abruption"],
    0,
    "Bleeding, <b>hyperemesis</b>, <b>early hypertension</b> (pre-eclampsia before 20 weeks is a mole until proven otherwise) and a uterus <b>large for dates</b> are classic for a <b>complete mole</b> (driven by very high hCG). Confirm with quantitative β-hCG and ultrasound ('snowstorm'), then suction evacuation and hCG follow-up.");

  qb(EPP, "#ectopic", ["module-repro-Q81", "Module case"],
    "Fatima has a tubal ectopic pregnancy removed. If her endometrium were sampled, what would it show?",
    ["Decidualized (progesterone-primed) endometrium with no chorionic villi", "Proliferative endometrium", "Chronic endometritis with plasma cells", "Chorionic villi in the endometrium", "Atrophic endometrium"],
    0,
    "The endometrium responds to the pregnancy's progesterone wherever the embryo is, so it shows <b>decidual change</b> (sometimes Arias-Stella reaction) <b>without villi or trophoblast</b>. Finding villi in uterine curettings confirms an intrauterine pregnancy; their absence with a positive hCG raises suspicion for ectopic.");
})();

(function () {
  const FTC = "w5-first-trimester-care", SH = "w5-sexual-health", AN = "w5-antenatal-care", US2 = "w5-second-trimester-ultrasound",
    HTN = "w5-hypertension-in-pregnancy", PHY = "w5-pregnancy-physiology";

  /* ---------------------------------------------------- 5.12 First-trimester care */
  qb(FTC, "#first-12-weeks", ["new-repro-Q141", "Module case"],
    "A woman at 8 weeks has nausea and vomiting most of the day, but is keeping fluids down, isn't dehydrated and hasn't lost weight. Diet changes haven't helped. First-line medication?",
    ["Doxylamine–pyridoxine (Diclectin)", "Ondansetron", "Omeprazole", "IV fluids and admission", "Metoclopramide IV"],
    0,
    "<b>Nausea and vomiting of pregnancy</b> is very common, peaks ~9 weeks and settles by ~16–20 weeks. First line after diet changes (small frequent meals, ginger): <b>doxylamine-pyridoxine</b>. <b>Hyperemesis gravidarum</b> = dehydration, ketosis, electrolyte disturbance or > 5% weight loss → IV fluids (thiamine before dextrose) and antiemetics; check for molar or multiple pregnancy and thyroid.");

  qb(FTC, "#first-12-weeks", ["new-repro-Q143", "Module case"],
    "At 29 weeks, a patient has burning retrosternal pain after meals; vitals, fetal heart rate and contractions are normal. Lifestyle changes and antacids haven't helped. Next treatment?",
    ["A proton pump inhibitor (or H2 blocker)", "Doxylamine-pyridoxine", "Acetaminophen", "Immediate delivery", "Magnesium sulfate"],
    0,
    "<b>Heartburn</b> is common in pregnancy (progesterone relaxes the lower esophageal sphincter; the uterus pushes up on the stomach). Steps: small meals, no late eating, head of bed up, antacids, then <b>H2 blocker or PPI</b> (safe). Always make sure epigastric or RUQ pain isn't <b>pre-eclampsia or HELLP</b> (check BP, urine and labs).");

  qb(FTC, "#first-12-weeks", ["weekly-repro-Q5", "Weekly quiz"],
    "A pregnant coffee drinker asks how much caffeine is safe.",
    ["Up to about 300 mg/day (about two cups of coffee)", "None at all", "Unlimited", "It only matters in the first trimester", "Up to 1,000 mg/day"],
    0,
    "Moderate caffeine, <b>≤ 300 mg/day</b> (~2 cups of coffee), is considered acceptable. High intakes are associated with miscarriage and low birth weight. Also counsel: no alcohol, no smoking or cannabis, food safety (listeria, toxoplasma), folic acid.");

  qb(FTC, "#first-12-weeks", ["workbook-repro-Q86", "Workbook · Reproduction"],
    "Maria, 24, has depression well controlled on fluoxetine for 6 years and has just found out she's pregnant. What should you advise?",
    ["Continue fluoxetine at the same dose, with monitoring",
     "Stop immediately: antidepressants are contraindicated",
     "Switch to a newer antidepressant with no birth defect data",
     "Taper off and stay drug-free for the pregnancy",
     "Switch to valproate"],
    0,
    "Untreated depression in pregnancy harms mother and baby (poor self-care, preterm birth, postpartum depression, suicide). Fluoxetine has extensive data without a meaningful malformation signal, so <b>continue what works</b>. Prefer well-studied drugs over new ones. Warn about transient neonatal adaptation symptoms. Valproate is a major teratogen.");

  qb(FTC, "#investigations", ["hippo-repro-Q57", "HippoNotes"],
    "A patient is confirmed to be 11 weeks pregnant. Which test is <b>not</b> part of first-trimester investigations?",
    ["75 g glucose tolerance test for gestational diabetes (routinely done at 24–28 weeks)", "Rubella immunity", "Blood group and antibody screen", "HIV, syphilis and hepatitis B serology", "Offering prenatal genetic screening (e.g., eFTS)"],
    0,
    "Booking bloodwork: CBC, <b>group and screen</b>, rubella (and varicella) immunity, <b>HIV, syphilis, hepatitis B</b> (± hepatitis C), urine culture, chlamydia and gonorrhea, cervical screening if due, and offer aneuploidy screening. GDM screening is at <b>24–28 weeks</b> (earlier only for high-risk women, e.g., with A1c).");

  qb(FTC, "#investigations", ["module-repro-Q91", "Elentra module"],
    "Which is <b>not</b> part of routine prenatal bloodwork?",
    ["Herpes simplex serology", "Hepatitis B surface antigen", "HIV", "Syphilis", "Group and type"],
    0,
    "Routine prenatal screening targets infections where knowing changes management: <b>HIV, syphilis and hepatitis B</b> (treat or prevent transmission). <b>HSV serology isn't routine</b>: antibodies don't tell you who will shed at delivery. Instead, ask about a history of genital herpes and offer suppressive acyclovir from 36 weeks.");

  qb(FTC, "#diagnosis", ["module-repro-Q90", "Elentra module"],
    "From about what gestational age does the symphysis-fundal height in cm roughly match gestational age in weeks?",
    ["20 weeks", "12 weeks", "28 weeks", "36 weeks", "8 weeks"],
    0,
    "The fundus is at the pubic symphysis at ~12 weeks and the <b>umbilicus at ~20 weeks</b>; from then on, SFH (cm) ≈ weeks (± 2 cm). A lag of > 2–3 cm prompts a growth ultrasound (small fetus, oligohydramnios); excess suggests macrosomia, polyhydramnios, multiples or wrong dates.");

  qb(FTC, "#gtpal", ["new-repro-Q100", "Module case"],
    "A pregnant woman's history: a miscarriage at 10 weeks, twins born alive at 36 weeks, and a liveborn singleton at 41 weeks. What is her GTPAL?",
    ["G4 T1 P1 A1 L3", "G5 T1 P2 A1 L3", "G4 T1 P2 A1 L3", "G4 T2 P1 A1 L3", "G3 T1 P1 A1 L3"],
    0,
    "<b>G</b> counts pregnancies including this one (4; the twins are one pregnancy). <b>T</b> = births ≥ 37 weeks (1). <b>P</b> = births 20–36+6 weeks (1: the twin pregnancy counts once). <b>A</b> = losses before 20 weeks (1). <b>L</b> = living children (3).");

  qb(FTC, "#gtpal", ["new-repro-Q101", "Module case"],
    "A pregnant woman has had three term births at 39–40 weeks; one of those babies died at 10 days of a congenital anomaly. What is her GTPAL?",
    ["G4 T3 P0 A0 L2", "G4 T3 P0 A0 L3", "G4 T2 P0 A1 L2", "G3 T3 P0 A0 L2", "G4 T2 P1 A0 L2"],
    0,
    "Four pregnancies including the current one; all three deliveries were <b>term</b> (T3), whatever happened to the baby later. A neonatal death reduces <b>L</b> (2 living), not T or A ('abortion' = loss before 20 weeks).");

  /* ---------------------------------------------------- 5.13 Sexual health */
  qb(SH, "#response-cycle", ["hippo-repro-Q1", "HippoNotes"],
    "Which pairing of sexual response phase and feature is <b>incorrect</b>?",
    ["Resolution: women have a refractory period, while men can ejaculate repeatedly without one",
     "Excitement: penile erection; vaginal lubrication, breast enlargement and nipple erection",
     "Plateau: coronal ridge enlarges; uterus fully elevates and the outer third of the vagina engorges",
     "Orgasm: rhythmic contractions of the prostate, seminal vesicles and pelvic floor; rhythmic vaginal and uterine contractions",
     "Excitement: clitoral engorgement mediated by nitric oxide"],
    0,
    "It's reversed: <b>men</b> have a refractory period after ejaculation, while <b>women</b> can have multiple orgasms without one. The Masters & Johnson stages are excitement, plateau, orgasm and resolution; Basson's circular model emphasizes that desire often follows arousal and intimacy, especially in long relationships.");

  qb(SH, "#response-cycle", ["workbook-repro-Q14", "Workbook · Reproduction"],
    "Which statement about the sexual response cycle is <b>incorrect</b>?",
    ["Increased testicular volume is a feature of the resolution phase",
     "Clitoral engorgement in the excitement phase is mediated mainly by nitric oxide",
     "The uterus elevates during excitement and plateau",
     "During orgasm, the internal urethral sphincter contracts to prevent retrograde ejaculation",
     "Blood pressure and heart rate rise during the plateau phase"],
    0,
    "Testicular swelling and elevation happen in <b>excitement and plateau</b>; in resolution everything returns to baseline. Vasocongestion is NO-mediated (hence PDE5 inhibitors). Contraction of the internal sphincter during emission prevents retrograde ejaculation (lost after some prostate surgery or with alpha-blockers).");

  qb(SH, "#safe-space", ["new-repro-Q135", "DSSG cases"],
    "Darlene, 18, attends with her mother about absent periods; she's quiet while her mother answers. How do you take a confidential sexual history?",
    ["Explain confidentiality early, spend part of the visit with her alone, build rapport and ask permission before sensitive questions",
     "Take the history from her mother, who is more reliable",
     "Postpone the sexual history to a later visit",
     "Give her a questionnaire to complete in front of her mother",
     "Skip it, since she's in high school"],
    0,
    "Assure <b>confidentiality</b> (and its limits) early, and see adolescents and young adults <b>alone</b> for part of the visit. Use open, non-judgmental, inclusive language (the 5 Ps: partners, practices, protection from STIs, past STIs, pregnancy prevention) and respect her right not to answer. Here a sexual history matters immediately: pregnancy has to be excluded.");

  /* ---------------------------------------------------- 5.14 Antenatal care */
  qb(AN, "#vaccines", ["reviews-repro-Q23", "Written from review slides"],
    "At her first prenatal visit, a woman is found to be non-immune to rubella. Which vaccine plan is correct?",
    ["MMR postpartum; Tdap at about 27–32 weeks (every pregnancy); influenza (and COVID/RSV per season and guidance) during pregnancy",
     "MMR now in the first trimester",
     "MMR at 28 weeks",
     "No vaccines until after delivery",
     "Tdap only if she had pertussis before"],
    0,
    "<b>Live vaccines</b> (MMR, varicella) are avoided in pregnancy, so MMR is given <b>postpartum</b> (safe while breastfeeding). <b>Tdap in every pregnancy</b> at ~27–32 weeks gives the newborn passive antibody against pertussis. Inactivated vaccines (influenza in any trimester) are safe and recommended.");

  qb(AN, "#rh", ["reviews-repro-Q24", "Written from review slides"],
    "A 27-year-old is Rh(D)-negative with a negative antibody screen and no bleeding. When does she routinely get Rh immune globulin?",
    ["At ~28 weeks, and again within 72 h of delivering an Rh-positive baby (plus after any sensitizing event)",
     "At the first visit only",
     "At 16 weeks only",
     "At 36 weeks only",
     "Never, if she had no bleeding"],
    0,
    "Rh-negative, unsensitized: <b>RhIG at 28 weeks</b> and <b>postpartum</b> (if baby is Rh positive), and after <b>sensitizing events</b>: bleeding, miscarriage or abortion, ectopic, amniocentesis or CVS, abdominal trauma, external version. It's <b>prophylaxis only</b>: useless once anti-D antibodies exist.");

  qb(AN, "#alloimmunization", ["module-repro-Q94", "Elentra module"],
    "Which can sensitize a woman to produce red cell antibodies? <i>(Select all that apply.)</i>",
    ["Amniocentesis", "Blood transfusion", "Sharing needles for injection drug use", "Antepartum hemorrhage", "Taking folic acid"],
    [0, 1, 2, 3],
    "Any route that mixes foreign red cells with hers can cause <b>alloimmunization</b>: fetal-maternal hemorrhage (bleeding, procedures, trauma, delivery), transfusion, or shared needles. Antibodies (anti-D, anti-Kell, others) can cross the placenta and cause <b>fetal hemolytic disease</b>, which is why every pregnancy gets an antibody screen.");

  qb(AN, "#nutrition", ["hippo-repro-Q55", "HippoNotes"],
    "Which supplements are most commonly needed in pregnancy?",
    ["Folic acid and iron", "Vitamin C and zinc", "Calcium and vitamin E", "Zinc and folic acid", "Vitamin A and iron"],
    0,
    "<b>Folic acid</b> (0.4 mg routinely, started before conception; higher dose for higher NTD risk) and <b>iron</b> (demands rise for maternal red cell expansion and the fetus) are the key ones, usually in a prenatal vitamin. Avoid high-dose <b>vitamin A</b> (teratogenic).");

  /* ---------------------------------------------------- 5.15 Second-trimester ultrasound */
  qb(US2, "#five-jobs", ["module-repro-Q56", "Elentra module"],
    "Who should be offered an 18–22 week fetal anatomy ultrasound?",
    ["Every pregnant person, regardless of risk", "Only those over 35", "Only those with a high-risk screen", "Only those with previous anomalies", "Only those with bleeding"],
    0,
    "The detailed anatomy scan is <b>universal screening</b>: congenital anomalies affect ~2–3% of pregnancies, most in low-risk women. It checks anatomy, growth (and dating if not done), <b>placental location</b>, amniotic fluid and soft markers. Findings direct counselling, further testing, and where and how delivery is planned.");

  qb(US2, "#five-jobs", ["module-repro-Q57", "Elentra module"],
    "Which is <b>not</b> part of the standard 18–22 week anatomy scan?",
    ["A biophysical profile", "Placental location", "Fetal biometry (size)", "Soft markers for aneuploidy", "Survey of fetal anatomy"],
    0,
    "The <b>biophysical profile</b> (movement, tone, breathing, fluid ± NST) assesses fetal <b>well-being</b> in the <b>third trimester</b>. The anatomy scan's jobs: anatomy, size and dating, placenta (previa, cord insertion), fluid, and soft markers.");

  qb(US2, "#placenta", ["weekly-repro-Q17", "Weekly quiz"],
    "Trea, 40, at 28 weeks, wakes with painless bright red vaginal bleeding; the baby is active and fetal heart is normal. Looking at her 18–20 week ultrasound report, what matters most?",
    ["Placental location (previa?)", "The anatomy survey", "Cord insertion", "Placental size", "Fetal sex"],
    0,
    "<b>Painless bright red bleeding</b> in the second or third trimester = <b>placenta previa until proven otherwise</b>, so check where the placenta was. <b>No digital vaginal exam</b> until previa is excluded (it can provoke torrential bleeding). Painful bleeding with a tender, firm uterus suggests abruption.");

  qb(US2, "#five-jobs", ["weekly-repro-Q18", "Weekly quiz"],
    "Which statement about routine low-risk prenatal care is correct?",
    ["The anatomy and placental-location ultrasound is best done at 18–20 weeks",
     "GBS screening is done at 24–28 weeks",
     "Most women first feel fetal movement at 24–28 weeks",
     "Fetal growth is tracked by symphysis-xiphisternum height",
     "Syphilis screening is done because it's very common in pregnancy"],
    0,
    "18–20 weeks is late enough to see most anatomy and early enough for decisions. <b>GBS</b> swab at <b>35–37 weeks</b>; <b>quickening</b> ~18–20 weeks (earlier in multiparas); growth by <b>symphysis-fundal</b> height; syphilis screening is universal because it's devastating, treatable and resurging.");

  /* ---------------------------------------------------- 5.16 Hypertension in pregnancy */
  qb(HTN, "#classification", ["reviews-repro-Q27", "Written from review slides"],
    "A 30-year-old with normal first-trimester BP has 146/94 at 30 weeks, confirmed 20 minutes later. Urine protein is negative; she's asymptomatic with normal bloodwork. Diagnosis?",
    ["Gestational hypertension", "Pre-existing (chronic) hypertension", "Pre-eclampsia", "HELLP syndrome", "White-coat hypertension"],
    0,
    "Hypertension = BP <b>≥ 140/90</b> on two readings ≥ 15 minutes apart. <b>Before 20 weeks</b> → pre-existing; <b>after 20 weeks</b> → gestational; plus <b>proteinuria or an adverse condition</b> (symptoms, abnormal labs, fetal growth restriction) → <b>pre-eclampsia</b>. Gestational hypertension can progress to pre-eclampsia, so follow closely.");

  qb(HTN, "#management", ["reviews-repro-Q28", "Written from review slides"],
    "A woman at 24 weeks with chronic hypertension needs an oral antihypertensive. Which is appropriate?",
    ["Labetalol (or nifedipine XL, methyldopa)", "Ramipril", "Losartan", "Hydrochlorothiazide as first line", "Atenolol as first line"],
    0,
    "First-line oral agents in pregnancy: <b>labetalol, nifedipine XL, methyldopa</b>. <b>ACE inhibitors and ARBs are contraindicated</b> (fetal renal damage, oligohydramnios, skull defects in the 2nd and 3rd trimesters), so switch pre-conception or as soon as pregnancy is known. Atenolol is linked to growth restriction. Severe BP (≥ 160/110) needs urgent IV labetalol or hydralazine, or oral nifedipine.");

  qb(HTN, "#complications", ["reviews-repro-Q29", "Written from review slides"],
    "A woman at 35 weeks has severe pre-eclampsia with headache and hyperreflexia; the team decides to deliver. What prevents eclamptic seizures?",
    ["IV magnesium sulfate", "IV phenytoin", "IV lorazepam", "Oral nifedipine", "Repeated IV hydralazine"],
    0,
    "<b>Magnesium sulfate</b> is the drug for eclampsia prophylaxis and treatment (load then infusion, continued ~24 h postpartum). Monitor reflexes, respiration and urine output (toxicity: loss of reflexes, then respiratory depression; antidote calcium gluconate). Antihypertensives control BP but don't prevent seizures. <b>Delivery</b> is the definitive treatment.");

  qb(HTN, "#complications", ["hippo-repro-Q92", "HippoNotes"],
    "A woman in the third trimester has headache, blurred vision, nausea, malaise and RUQ discomfort. Labs: hemolysis, elevated liver enzymes, platelets 70. BP is 130/82. Which diagnosis must not be missed?",
    ["HELLP syndrome", "Viral gastroenteritis", "Acute fatty liver only if BP is high", "Molar pregnancy", "Theca lutein cyst"],
    0,
    "<b>HELLP</b> (Hemolysis, Elevated Liver enzymes, Low Platelets) is a severe variant of pre-eclampsia that can occur with <b>normal or only mildly raised BP</b>. RUQ or epigastric pain, nausea and malaise are classic, and often misattributed to GI illness. Risks: liver hematoma or rupture, DIC, abruption. Manage with magnesium, BP control and <b>delivery</b>.");

  qb(HTN, "#physiology", ["workbook-repro-Q77", "Workbook · Reproduction"],
    "In pre-eclampsia, defective remodeling of the uterine spiral arteries leads most directly to which fetal complication?",
    ["Fetal growth restriction", "Macrosomia", "Lower risk of abruption", "Lower risk of preterm birth", "Polyhydramnios"],
    0,
    "Failed trophoblast invasion leaves spiral arteries narrow and high-resistance → <b>placental hypoperfusion</b> → <b>fetal growth restriction</b> and oligohydramnios, plus release of anti-angiogenic factors (sFlt-1) causing maternal endothelial dysfunction. Pre-eclampsia <b>increases</b> abruption and (iatrogenic) preterm birth. Low-dose ASA started before 16 weeks lowers the risk in high-risk women.");

  qb(HTN, "#management", ["weekly-repro-Q19", "Weekly quiz"],
    "Renee, 42, IVF pregnancy, 32 weeks, feels well. She has gained 4 kg in 2 weeks; BP 130/90; SFH 30 cm. What do you do now? <i>(Select all that apply.)</i>",
    ["Repeat the BP at this visit", "Check urine protein (protein:creatinine ratio) and pre-eclampsia bloodwork", "Arrange a growth ultrasound for the small SFH", "Arrange close follow-up (within days to a week)", "Reassure: a diastolic of 90 is normal at 32 weeks"],
    [0, 1, 2, 3],
    "Diastolic ≥ 90 needs <b>confirmation</b> (two readings ≥ 15 min apart). Rapid weight gain suggests fluid retention, so assess for <b>pre-eclampsia</b> (urine PCR, CBC, creatinine, liver enzymes, symptoms). An SFH 2 cm behind dates in a hypertensive pregnancy needs a <b>growth scan</b> for placental insufficiency. Treat if BP is persistently ≥ 140/90 in this context.");

  qb(HTN, "#definitions", ["workbook-repro-Q100", "Workbook · Reproduction"],
    "How does blood pressure normally change across pregnancy?",
    ["It falls in the first and second trimesters (lowest mid-pregnancy) and returns toward baseline by term",
     "It rises steadily from conception",
     "It's unchanged throughout",
     "It falls in the first trimester and becomes hypertensive at term",
     "It rises in the first trimester then falls at term"],
    0,
    "Progesterone and placental vasodilators drop <b>systemic vascular resistance</b>, so BP falls (nadir ~20–24 weeks) despite rising cardiac output, then drifts back to pre-pregnancy levels by term. A <b>rise to ≥ 140/90</b> is never normal, and an early-pregnancy rise often means pre-existing hypertension masked earlier.");

  /* ---------------------------------------------------- 5.17 Physiologic changes in pregnancy */
  qb(PHY, "", ["workbook-repro-Q81", "Workbook · Reproduction"],
    "Which is a normal physiological adaptation to pregnancy?",
    ["Increased red cell mass (with a larger rise in plasma volume, causing dilutional anemia)", "Increased blood viscosity", "Decreased oxygen consumption", "Decreased skin blood flow", "Decreased clotting factors"],
    0,
    "Plasma volume rises ~40–50% and red cell mass ~20–30%, giving <b>physiological (dilutional) anemia</b> and lower viscosity. Clotting factors (fibrinogen, VII, VIII, X) <b>rise</b> (a hypercoagulable state, so VTE risk goes up). Oxygen consumption rises ~20%; blood flow to the skin, kidneys, uterus and breasts increases.");

  qb(PHY, "", ["workbook-repro-Q82", "Workbook · Reproduction"],
    "How does pregnancy affect thyroid function tests?",
    ["hCG stimulates the TSH receptor (TSH can dip in the first trimester) and TBG rises, so total T4 rises while free T4 stays roughly normal",
     "TBG falls, raising free T4",
     "Most pregnant women develop clinical thyroid disease",
     "Levothyroxine is contraindicated in pregnancy",
     "T3 exceeds T4 because of protein changes"],
    0,
    "<b>hCG</b> shares a subunit with TSH, so it mildly stimulates the thyroid; TSH is often low-normal in the first trimester. Estrogen raises <b>TBG</b>, so <b>total</b> T4 and T3 rise while free levels stay normal (use trimester-specific ranges). Hypothyroid women usually need a <b>~25–30% higher levothyroxine dose</b> as soon as they're pregnant.");

  qb(PHY, "", ["weekly-repro-Q21", "Weekly quiz"],
    "A healthy woman at 28 weeks has mild exertional breathlessness and fatigue; exam is normal. Which change best explains it?",
    ["Increased cardiac output and progesterone-driven increase in tidal volume (physiological breathlessness)",
     "A higher respiratory rate",
     "Elevated blood glucose",
     "Decreased renal blood flow",
     "Decreased cardiac output"],
    0,
    "Cardiac output rises ~40% (stroke volume, then heart rate); <b>progesterone</b> raises minute ventilation through <b>tidal volume</b> (respiratory rate barely changes), causing a mild respiratory alkalosis and the sensation of breathlessness. Red flags that aren't physiological: breathlessness at rest, chest pain, tachycardia > 100, hypoxia, orthopnea.");
})();

/* ---------------------------------------------------- Week 5 · POM2 originals (written from the lecture pages) */
(function () {
  const PM = "w5-post-menopausal-bleeding", MN = "w5-menopause", DC = "w5-dilation-curettage", HY = "w5-hysterectomy",
        BP = "w5-breast-pathology", BR = "w5-breast-problems", OB = "w5-ob-care-providers", TR = "w5-teratogenesis",
        FT = "w5-first-trimester-ultrasound", EP = "w5-early-pregnancy-pathology", SH = "w5-sexual-health",
        AN = "w5-antenatal-care", SU = "w5-second-trimester-ultrasound", HT = "w5-hypertension-in-pregnancy", PP = "w5-pregnancy-physiology";

  /* 5.1 Postmenopausal bleeding */
  qb(PM, "#pathway", null,
    "Joan, 58, had one episode of postmenopausal spotting; speculum exam was normal and TVUS showed a 3 mm endometrium, so she was reassured. Two months later she's had two more episodes. Next step?",
    ["Endometrial biopsy, despite the thin endometrium", "Reassure her again: < 5 mm excludes cancer", "Repeat TVUS in a year", "Start vaginal estrogen and review in 3 months", "CA-125"],
    0,
    "A thin endometrium (< 5 mm) is reassuring for a <b>single</b> episode, but <b>recurrent bleeding needs tissue</b>: skipping biopsy in that group misses cancer ~4% of the time (type 2 serous cancers can arise in a thin, atrophic endometrium). Atrophy is the commonest cause, but it's a <b>diagnosis of exclusion</b>. Hysteroscopy and D&C if office biopsy fails or is non-diagnostic.");

  qb(PM, "#hyperplasia", null,
    "Rhonda, 56, BMI 41, has postmenopausal bleeding. Endometrial biopsy shows hyperplasia <b>without</b> atypia. Management?",
    ["Progestin therapy (LNG-IUS or oral) with repeat sampling, plus weight management", "Hysterectomy and bilateral salpingo-oophorectomy now", "No treatment: it's benign", "Estrogen-only HRT", "Radiation therapy"],
    0,
    "<b>Atypia decides it.</b> Without atypia: ~1–3% progression risk → <b>medical management</b> with a progestin (LNG-IUS works well), correct the unopposed estrogen (obesity → peripheral aromatization), and re-biopsy. <b>With atypia</b> (EIN): up to ~29% progression and 30–40% already have cancer → <b>hysterectomy</b> (progestin only if fertility-sparing is needed).");

  /* 5.3 Menopause */
  qb(MN, "#poi", null,
    "Tess, 36, has had irregular then absent periods for 8 months, with hot flashes. FSH is 68 and 74 IU/L a month apart; β-hCG negative. After the work-up (karyotype, FMR1, TSH, autoimmune screen), what is the key treatment principle?",
    ["Hormone replacement until about the average age of menopause (~51), for bone, heart and symptoms", "No hormones: her risks equal a 60-year-old's", "Only treat if hot flashes are severe", "Bisphosphonate alone", "Tell her pregnancy is impossible, so no contraception is needed"],
    0,
    "<b>POI</b> = menopause-range FSH (> 25 in the ASRM criteria) with irregular or absent menses before 40. Early menopause raises <b>coronary disease, stroke, cognitive decline and fracture</b>; starting HRT before 50 is linked to lower all-cause mortality. So she's <b>replacing a hormone she should still have</b>, not making a lifestyle choice. Ovarian function can be intermittent, and spontaneous pregnancy occasionally occurs.");

  qb(MN, "#non-hormonal", null,
    "Diane, 54, finished treatment for ER-positive breast cancer 2 years ago and has disruptive hot flashes. Which option is most appropriate?",
    ["Venlafaxine (an SNRI) or gabapentin", "Oral estradiol plus micronized progesterone", "Transdermal estradiol patch", "Tibolone", "Combined oral contraceptive"],
    0,
    "Systemic estrogen is contraindicated after breast cancer. Non-hormonal first line: <b>SNRIs/SSRIs</b> (27–61% reduction, at lower doses than for depression) and <b>gabapentinoids</b> (45–71%). Others: clonidine, oxybutynin, and the new <b>NK3 receptor antagonists</b> (fezolinetant) that calm the KNDy neuron. (Avoid paroxetine with tamoxifen: CYP2D6 interaction.)");

  qb(MN, "#definitions", null,
    "Lisa, 48, has irregular cycles with hot flashes and poor sleep. She asks for a blood test to 'prove' she's in menopause. What do you tell her?",
    ["It's a clinical diagnosis: FSH swings widely in perimenopause, so a level won't change management", "An FSH > 25 confirms she's postmenopausal and can stop contraception", "Estradiol is the diagnostic test", "Menopause is diagnosed after 6 months without a period", "AMH confirms menopause"],
    0,
    "Menopause is a <b>retrospective</b> diagnosis: <b>12 months without a period</b> (average age 51–52). In <b>perimenopause</b> she's still bleeding and hormones fluctuate cycle to cycle, so one FSH can be normal or high. Treat the symptoms; she still needs <b>contraception</b> until menopause is established.");

  /* 5.4 D&C */
  qb(DC, "#cervical-prep", null,
    "At 9 weeks, a woman has heavy bleeding and cramping; the cervical os is open with tissue visible. She's stable and having a suction D&C. Does she need cervical preparation?",
    ["No: the cervix is already open (inevitable or incomplete abortion)", "Yes: misoprostol 3 h before, always", "Yes: laminaria for 24 h", "Yes: mechanical dilation to 14 mm", "No D&C is possible with an open os"],
    0,
    "Cervical prep (misoprostol, or osmotic laminaria/Dilapan) makes dilation safer and gentler, but it's unnecessary when the os is <b>already open</b>. Dilate to about the gestational age in mm (9 weeks ≈ 9 mm) and use suction alone. <b>Sharp curettage</b> adds Asherman risk.");

  qb(DC, "#steps", null,
    "Before a suction D&C for a 10-week missed abortion, the bimanual exam finds a markedly retroverted uterus. Why does this matter?",
    ["Instruments must follow the axis of the uterus, or they can perforate the wall", "Retroversion means the pregnancy is ectopic", "A retroverted uterus can't be aspirated", "It means she needs a hysterectomy", "It changes the antibiotic choice"],
    0,
    "The bimanual exam confirms <b>size</b> (matches dates?) and <b>direction</b>, so dilators and cannula follow the cavity. Wrong direction → <b>perforation</b>. If perforation is suspected, finish under ultrasound or laparoscopic guidance and assess stability. Antibiotic prophylaxis is for therapeutic abortion, not missed abortion.");

  /* 5.5 Hysterectomy */
  qb(HY, "#vocabulary", null,
    "Grace, 44, needs a hysterectomy for fibroids and heavy bleeding that failed medical management. She asks for a 'partial hysterectomy' because she's afraid of going into menopause. What is she really asking, and what do you tell her?",
    ["Whether she can keep her ovaries: removing the uterus alone stops periods but not ovarian hormones", "To keep her cervix, which prevents menopause", "A subtotal hysterectomy prevents menopause", "Any hysterectomy causes immediate surgical menopause", "To remove only the fibroids"],
    0,
    "<b>Total</b> = uterus + cervix; <b>subtotal</b> = cervix kept. Neither causes menopause: only removing the <b>ovaries</b> (oophorectomy) does. 'Partial hysterectomy' isn't a surgical term; patients usually mean 'keep my ovaries'. Answer that question. (Opportunistic salpingectomy is often added to lower ovarian cancer risk.)");

  qb(HY, "#approaches", null,
    "A 47-year-old, three prior vaginal births, needs a hysterectomy for AUB that failed medical treatment. The uterus is 10-week size, mobile, with good descent; no prior surgery. Best approach?",
    ["Vaginal hysterectomy", "Abdominal hysterectomy via midline laparotomy", "Robotic hysterectomy", "Total laparoscopic hysterectomy", "Subtotal abdominal hysterectomy"],
    0,
    "<b>Vaginal hysterectomy is the gold-standard minimally invasive route</b>: no abdominal incision, same-day discharge. The order is vaginal → LAVH → TLH/robotic → abdominal, moving down only when anatomy forces you (large uterus, poor descent, narrow introitus, scarring, adnexa to remove). TLH and robotic replace an <b>abdominal</b> hysterectomy, not a vaginal one.");

  qb(HY, "#approaches", null,
    "A nulliparous 50-year-old with a BMI of 48 needs a hysterectomy. Her uterus is 14-week size with poor descent. Which approach best avoids a large incision?",
    ["Robotic-assisted laparoscopic hysterectomy", "Vaginal hysterectomy", "Abdominal hysterectomy via Pfannenstiel", "LAVH", "No surgery is possible at this BMI"],
    0,
    "Poor descent and a larger uterus make vaginal and LAVH difficult. <b>Robotic</b> articulating instruments handle a larger uterus and are an excellent option in <b>morbid obesity</b>, where a laparotomy carries high wound and medical morbidity. Abdominal hysterectomy (2–3 days in hospital) is for very large uteri, complex cancer, or failed minimally invasive attempts.");

  /* 5.6 Breast pathology */
  qb(BP, "#risk-tiers", null,
    "A 46-year-old's core biopsy of a calcification cluster shows atypical ductal hyperplasia. Her mother had breast cancer at 50. What does this mean?",
    ["Her risk is substantially raised (~4–5×, more with her family history); the lesion is excised and she needs enhanced surveillance and risk reduction", "It's non-proliferative: no change in risk", "It's DCIS and needs radiation", "It's an invasive cancer", "It only raises risk in the other breast"],
    0,
    "Benign epithelial lesions come in three risk tiers: <b>non-proliferative ×1</b>, <b>proliferative without atypia ×1.5–2</b>, <b>atypical hyperplasia ×4–5</b> (about ×9–10 with a family history). ADH on core is usually <b>excised</b> because adjacent DCIS or cancer is sometimes found, and she's a candidate for high-risk assessment and risk-reducing medication.");

  qb(BP, "#prognosis", null,
    "A 48-year-old's invasive breast carcinoma (no special type) is ER-negative, PR-negative and HER2-amplified. Which statement is correct?",
    ["HER2 amplification means a worse prognosis, but predicts benefit from trastuzumab", "HER2 amplification means a better prognosis", "She'll benefit most from tamoxifen", "HER2 is prognostic only, not predictive", "ER status has no clinical use"],
    0,
    "<b>Prognostic</b> = outcome; <b>predictive</b> = response to a specific therapy. <b>ER/PR+</b>: better prognosis and predicts <b>endocrine therapy</b>. <b>HER2+</b>: worse prognosis but predicts <b>anti-HER2</b> therapy (trastuzumab). Triple negative does worst and has neither target.");

  qb(BP, "#fat-necrosis", null,
    "Two months after a car crash with a seat-belt bruise across her chest, a 62-year-old has a firm, irregular breast lump with slight skin dimpling. What is the right approach?",
    ["Fat necrosis is likely, but it mimics carcinoma, so image and biopsy it", "Reassure: trauma explains it", "Antibiotics for mastitis", "Repeat exam in a year", "Mastectomy"],
    0,
    "<b>Fat necrosis</b> (interlobular stroma) follows trauma or surgery and can be hard, irregular, fixed, with skin retraction or calcifications: a classic <b>mimic of cancer</b>. A trauma history doesn't excuse a worrisome lump in a 62-year-old; use the triple test (exam, imaging, biopsy).");

  /* 5.7 Approach to breast problems */
  qb(BR, "#discharge", null,
    "Sandra, 52, has spontaneous bloody discharge from a single duct of her left nipple, staining her bra. No palpable mass. Most likely cause and next step?",
    ["Intraductal papilloma most likely; diagnostic mammogram and ultrasound, and referral for duct evaluation or excision", "Physiologic discharge: reassure", "Prolactinoma: MRI of the pituitary", "Cytology of the discharge alone, and stop if negative", "Duct ectasia: warm compresses"],
    0,
    "<b>Pathologic discharge</b>: unilateral, <b>single duct</b>, <b>spontaneous</b>, bloody or serous, with a mass, or age > 50. The commonest cause is an <b>intraductal papilloma</b>; malignancy is only 5–10%, but it must be excluded with imaging and duct evaluation. Discharge cytology is unreliable.");

  qb(BR, "#discharge", null,
    "A 29-year-old has milky discharge from both nipples, only when she squeezes, from multiple ducts. Her periods have become irregular. Which tests come first?",
    ["β-hCG, prolactin and TSH, and a medication review", "Mammogram and ductogram", "Core biopsy", "Breast MRI", "Reassure: no tests needed"],
    0,
    "Bilateral, multi-duct, <b>expressed</b> milky discharge is <b>galactorrhea</b>, not breast disease. Think <b>pregnancy</b>, <b>hyperprolactinemia</b> (prolactinoma; dopamine-blocking drugs such as antipsychotics, metoclopramide, domperidone), and <b>hypothyroidism</b> (TRH stimulates prolactin). Her irregular cycles fit high prolactin suppressing GnRH.");

  qb(BR, "#pain", null,
    "A 37-year-old has bilateral, diffuse breast tenderness in the week before each period. Exam is normal with no focal findings. Best management?",
    ["Reassurance, a well-fitting supportive bra, and NSAIDs or acetaminophen", "Urgent mammogram and ultrasound", "Core biopsy of the most tender area", "Tamoxifen", "Danazol as first line"],
    0,
    "<b>Cyclic, bilateral, diffuse</b> mastalgia is hormonal and very common (> 45% of women). Normal exam → reassurance and simple measures. Image a <b>focal, persistent, non-cyclic</b> pain or any associated lump (about 8% of cancers present with pain). Danazol and tamoxifen work but have significant side effects.");

  qb(BR, "#recommendations", null,
    "Natalie, 31, carries a BRCA1 pathogenic variant and has no symptoms. What breast screening should she have?",
    ["Annual breast MRI plus mammogram (Ontario's high-risk program, from age 30)", "Mammogram every 2 years from 50", "Annual ultrasound only", "Monthly clinical breast exams only", "No screening until 40"],
    0,
    "<b>High risk</b> (BRCA carrier, untested first-degree relative of a carrier, ≥25% lifetime risk, chest radiation before 30) → <b>annual MRI + mammogram</b>. MRI is more sensitive in dense young breasts but has more false positives. Average risk: <b>OBSP biennial mammogram, ages 50–74</b> (self-referral). Discuss risk-reducing surgery too.");

  /* 5.8 OB care providers */
  qb(OB, "#when-to-consult", null,
    "A family physician provides obstetrical care. Which situations warrant an obstetrics consultation? <i>(Select all that apply.)</i>",
    ["A booking visit for a woman who had pre-eclampsia in her last pregnancy", "An abnormal biophysical profile at 36 weeks", "A fourth-degree tear after delivery", "A low-risk woman in active labour who wants an epidural", "A GBS-positive woman in normal labour"],
    [0, 1, 2],
    "Consult for: <b>medically complex</b> pregnancies (diabetes, hypertension, prior pre-eclampsia, high BMI, SLE), fetal anomalies (MFM), <b>abnormal fetal surveillance</b>, dystocia, operative or cesarean delivery, pre-eclampsia, significant PPH, <b>3rd or 4th-degree tears</b>. A consult isn't always a handover: co-care is common. Epidurals and GBS prophylaxis are routine low-risk care.");

  qb(OB, "#comparison", null,
    "A healthy, low-risk primip wants to give birth at home, have long appointments, and get lots of breastfeeding support with home visits in the first week. Which provider best fits?",
    ["A registered midwife", "An obstetrician", "A maternal–fetal medicine specialist", "Any walk-in clinic physician", "A family physician who doesn't do deliveries"],
    0,
    "<b>Midwives</b> specialize in low-risk pregnancy: 30–90-minute visits, birth at <b>home, a birth centre or hospital</b>, <b>three visits in the first postpartum week</b> (often at home), care of parent and baby to 6 weeks, and strong lactation training. Obstetricians manage complicated pregnancies and operative births, and hand the baby off at birth.");

  qb(OB, "#comparison", null,
    "A midwifery client at 41+3 weeks, fully informed of the risks, declines the recommended induction and chooses to wait a few more days with monitoring. How does midwifery's model frame this?",
    ["Informed choice: clients may choose outside the usual recommendation after full information, and the midwife continues care (consulting as needed)", "The midwife must transfer care immediately", "She's breaching informed consent", "The midwife must induce anyway", "It isn't allowed in Ontario"],
    0,
    "Midwives work under <b>informed choice</b>: the client gets full information and decides, sometimes outside the standard recommendation. That's within the model; the midwife documents, offers surveillance, and <b>consults an obstetrician</b> when the clinical picture calls for it.");

  /* 5.9 Teratogenesis */
  qb(TR, "#timing", null,
    "A woman learns she's pregnant at 5 weeks from her LMP. Ten days after conception (before her missed period), she had a CT of the abdomen and pelvis after a fall. What do you tell her about malformation risk?",
    ["Exposures in the first 2 weeks after conception are 'all or nothing': loss or normal development, with no added malformation risk", "The highest-risk period for malformations has passed", "She should terminate", "Risk of a major anomaly is about 50%", "Malformations are certain, but mild"],
    0,
    "<b>Weeks 1–2 after conception</b>: a ball of undifferentiated cells; an insult either ends the pregnancy or the cells replace the damage. <b>Weeks 3–8</b> (organogenesis) is when <b>structural</b> malformations happen; after that, mostly <b>functional</b> defects and growth restriction. (Diagnostic CT doses are also well below teratogenic thresholds.)");

  qb(TR, "#examples", null,
    "At 6 weeks, a pregnant woman has influenza with fever of 39.5 °C for 3 days. Beyond antivirals, what is important?",
    ["Treat the fever with acetaminophen: maternal hyperthermia in early pregnancy is linked to neural tube defects", "Avoid all antipyretics in pregnancy", "Hot baths to sweat it out are safe", "Fever only matters in the third trimester", "Ibuprofen is preferred throughout pregnancy"],
    0,
    "<b>Hyperthermia</b> is a <b>physical teratogen</b>: miscarriage, <b>neural tube</b>, cardiac and abdominal wall defects, especially during organogenesis. Treat fever with <b>acetaminophen</b>, avoid hot tubs and saunas, and give the <b>influenza vaccine</b> (any trimester). NSAIDs are best avoided, especially after ~20 weeks.");

  qb(TR, "#examples", null,
    "Amelia, 29, has type 1 diabetes with an A1c of 9.8%. She wants to start trying for a baby now. What is the best advice?",
    ["Delay conception (with effective contraception) until her A1c is optimized, and start folic acid", "Start trying now; tighten control once pregnant", "Diabetes doesn't affect fetal development", "Switch insulin to metformin before conceiving", "Stop insulin during the first trimester"],
    0,
    "Poorly controlled diabetes is a <b>teratogen</b>: neural tube, CNS, spine, <b>cardiac</b> and limb defects (and caudal regression), with risk rising with A1c at conception. Pre-conception: optimize A1c (target ≤ 7%, ideally ≤ 6.5% if safe), folic acid, review drugs (statins, ACE inhibitors), and screen for retinopathy and nephropathy.");

  qb(TR, "#counselling", null,
    "Rana, seizure-free for 3 years on lamotrigine, is now 16 weeks pregnant and has had two auras this week. What is the most likely reason?",
    ["Pregnancy speeds up lamotrigine clearance, so levels fall; check a level and raise the dose", "Lamotrigine stops working in pregnancy", "It's eclampsia", "Her epilepsy is progressing", "Her folic acid is interfering"],
    0,
    "Pregnancy changes pharmacokinetics (larger plasma volume, higher renal and hepatic clearance; estrogen induces lamotrigine glucuronidation). <b>Antenatal doses often need to go up</b>, and back down postpartum. Uncontrolled seizures are dangerous to mother and fetus. Pre-conception: choose the safest drug (avoid valproate), lowest effective dose, and folic acid.");

  /* 5.10 First-trimester bleeding & ultrasound */
  qb(FT, "#discriminatory", null,
    "A stable 30-year-old with light bleeding has a β-hCG of 2,400. Transvaginal ultrasound shows no intrauterine pregnancy, no adnexal mass and no free fluid. What is the best next step?",
    ["Repeat β-hCG (± ultrasound) in 48 hours", "Methotrexate for presumed ectopic", "Misoprostol for presumed miscarriage", "Diagnostic laparoscopy", "Discharge with no follow-up"],
    0,
    "This is a <b>pregnancy of unknown location</b>. Dr. Vilos's point: raise the discriminatory zone to <b>2,000–3,000</b> in stable patients, since early viable IUPs can be slow. At this level the most likely diagnosis is a <b>non-viable IUP</b> (about twice as likely as ectopic), with a small chance of viable IUP, so <b>don't treat on one value</b>. Treat on trend, imaging and stability.");

  qb(FT, "#rise", null,
    "In a stable woman with a pregnancy of unknown location, β-hCG rises from 1,000 to 1,580 over 48 hours. Which statement is correct?",
    ["The rise (58%) is consistent with a viable IUP, but it does not exclude an ectopic", "Any rise under 100% in 48 h means ectopic", "A normal rise proves an intrauterine pregnancy", "The rise predicts low rupture risk", "She can be discharged"],
    0,
    "The minimum rise for a viable IUP is <b>~53% in 48 h</b> (99% CI), not the old 66% or 'doubling'. But <b>ectopics can rise normally too</b> (about 1 in 5 do). Follow until an IUP is seen or hCG resolves. <b>No β-hCG level predicts rupture</b>; manage by symptoms and stability.");

  qb(FT, "#decline", null,
    "A woman with a pregnancy of unknown location has β-hCG fall from 1,200 to 650 over 48 hours, with lighter bleeding. What follow-up is needed?",
    ["Serial β-hCG until < 5 IU/L, since a resolving ectopic can still rupture", "None: a falling hCG excludes ectopic", "One repeat in 6 months", "Immediate laparoscopy", "Methotrexate now"],
    0,
    "A falling hCG with no IUP on ultrasound = a <b>non-viable pregnancy</b>, most often a failing IUP (expected fall 12–32% over 48 h depending on the starting level, faster at higher levels). But some ectopics decline the same way and <b>can still rupture</b>, so follow to <b>< 5 IU/L</b> and re-evaluate if the decline is slower than expected.");

  qb(FT, "#indications", null,
    "Mei, 28, has regular 28-day cycles and is sure of her LMP. She asks if she really needs a dating ultrasound. What do you advise?",
    ["Yes: offer it to everyone, ideally at 7–12 weeks; a first-trimester crown–rump length dates more accurately than the LMP", "No: a certain LMP is more accurate than ultrasound", "Only if she has bleeding", "Only after 20 weeks", "Only if she's over 35"],
    0,
    "LMP dating assumes a 28-day cycle, mid-cycle ovulation and accurate recall, and ovulation-to-implantation varies by up to 11 days. A <b>CRL at 7–12 weeks</b> (accurate to ~3–8 days) is the best basis for the due date, and routine early dating has <b>reduced post-term inductions</b>. Once set by the first scan, the due date doesn't change.");

  qb(FT, "#hcg-basics", null,
    "Why does an early pregnancy (before ~8–10 weeks) depend on β-hCG?",
    ["hCG from the syncytiotrophoblast keeps the corpus luteum producing progesterone until the placenta takes over", "hCG directly forms the gestational sac", "hCG is produced by the corpus luteum to maintain itself", "hCG causes uterine contractions", "hCG suppresses fetal growth"],
    0,
    "The <b>syncytiotrophoblast</b> secretes hCG (detectable ~8 days after ovulation). It rescues the <b>corpus luteum</b>, whose <b>progesterone</b> maintains the decidua until the <b>luteal–placental shift</b> (~7–10 weeks). That's why early corpus luteum removal needs progesterone support, and why <b>mifepristone</b> (progesterone receptor blocker) ends early pregnancy.");

  /* 5.11 Pathology of first-trimester bleeding */
  qb(EP, "#ectopic", null,
    "A D&C for a presumed incomplete miscarriage returns decidualized endometrium only: no chorionic villi, trophoblast or fetal tissue. What does this mean?",
    ["An intrauterine pregnancy hasn't been proven; ectopic must be excluded (serial β-hCG and ultrasound)", "It confirms a completed miscarriage", "It confirms a molar pregnancy", "It's a normal result after any D&C", "It proves the pregnancy was ectopic"],
    0,
    "Only <b>products of conception</b> (chorionic villi, trophoblast, implantation site, fetal tissue) prove an intrauterine gestation. <b>Decidua alone</b> occurs with any pregnancy, including an <b>ectopic</b> (or an Arias-Stella reaction). Follow β-hCG to zero and image the adnexa.");

  qb(EP, "#mole-comparison", null,
    "Products of conception from a 12-week missed abortion show some swollen villi with patchy trophoblast proliferation and fetal parts. Karyotype is 69,XXY. Diagnosis?",
    ["Partial hydatidiform mole", "Complete hydatidiform mole", "Choriocarcinoma", "Normal miscarriage of a trisomy", "Placental site trophoblastic tumour"],
    0,
    "<b>Partial mole</b>: <b>triploid</b> (two paternal + one maternal sets), focal villous swelling, <b>fetal tissue may be present</b>, hCG low to normal, lower malignant potential. <b>Complete mole</b>: 46,XX or XY, all paternal, <b>no fetal tissue</b>, diffuse hydropic villi, very high hCG, 'snowstorm' ultrasound, 2–3% progress to choriocarcinoma.");

  qb(EP, "#choriocarcinoma", null,
    "Six weeks after evacuation of a complete mole, a 24-year-old's β-hCG has plateaued then started rising. She has a new cough with blood-streaked sputum. What is the likely diagnosis and outlook?",
    ["Gestational trophoblastic neoplasia (e.g., choriocarcinoma) with lung metastases: chemotherapy, with a high cure rate", "Pneumonia: antibiotics", "A new normal pregnancy", "Persistent benign mole: repeat D&C only", "Untreatable metastatic cancer"],
    0,
    "A <b>plateau or rise</b> in hCG after molar evacuation = <b>GTN</b>. Choriocarcinoma (malignant trophoblast, no villi, hemorrhage and necrosis) spreads by blood: <b>> 90% have lung metastases</b> at diagnosis. It's highly chemosensitive (~80%+ survival). Hence serial hCG to baseline and <b>reliable contraception</b> during follow-up, so a new pregnancy doesn't mask a rising hCG.");

  /* 5.13 Sexual health */
  qb(SH, "#five-ps", null,
    "You're taking a sexual history from a 34-year-old new patient. Which opening question about partners is best?",
    ["'How many partners have you had in the past year, and what are their genders?'", "'Are you monogamous with your husband?'", "'You're not at risk, are you?'", "'Do you have a boyfriend?'", "'Do you practise safe sex, like normal people?'"],
    0,
    "Use the <b>5 Ps</b> (Partners, Practices, Protection, Past STIs, Pregnancy plans ± Pleasure). Ask permission, assure confidentiality early, use neutral terms ('partner') until you know more, and ask <b>open, non-assumptive</b> questions. 'Are you monogamous?' assumes the answer.");

  qb(SH, "#response-cycle", null,
    "Karen, 45, in a long, happy relationship, says she rarely feels like sex out of the blue, but once things start she gets aroused and enjoys it. She isn't distressed, just curious whether that's normal. What do you tell her?",
    ["That's normal 'responsive desire', as in Basson's circular model, where arousal can come before desire", "She has a sexual desire disorder needing medication", "It suggests low testosterone", "Desire must always come before arousal (Masters and Johnson)", "It's a sign of depression"],
    0,
    "<b>Basson's circular model</b>: many women (especially in long-term relationships) start from intimacy or other motives; desire is often <b>responsive</b>, triggered by arousal, not spontaneous. That's normal. A disorder needs <b>distress</b>. Linear models (Masters & Johnson, Kaplan) put desire first.");

  qb(SH, "#why", null,
    "At a blood pressure follow-up, a 60-year-old man with type 2 diabetes says, 'By the way, things haven't been working downstairs.' What is the best response?",
    ["Explore it: erectile dysfunction is common and rises with age, and it can flag vascular disease, so take a focused sexual and cardiovascular history", "Reassure him it's normal at his age and move on", "Prescribe a PDE5 inhibitor without further history", "Refer to urology without discussion", "Tell him to raise it at another visit"],
    0,
    "Concerns often come through the <b>side door</b>, tacked onto another visit. ED affects ~half of men aged 40–70 and moderate-to-severe ED rises each decade, so <b>re-ask with age</b>. Diabetes, hypertension and smoking damage the same endothelium as coronary arteries, so <b>ED is a cardiovascular warning sign</b>. If there isn't time, book a longer visit.");

  /* 5.14 Antenatal care */
  qb(AN, "#vaccines", null,
    "Jess is 30 weeks pregnant in October. She's not rubella-immune and has never had chickenpox. Which vaccines should she get today? <i>(Select all that apply.)</i>",
    ["Tdap", "Inactivated influenza", "MMR", "Varicella", "Live attenuated (nasal) influenza"],
    [0, 1],
    "<b>Tdap at 27–32 weeks every pregnancy</b> (maternal IgG crosses the placenta and protects the newborn from pertussis) and <b>inactivated flu vaccine</b> at any gestation in season. <b>Live vaccines</b> (MMR, varicella, nasal flu, BCG) wait until <b>postpartum</b>. The risk is theoretical, so an accidental dose isn't an indication for termination.");

  qb(AN, "#rh", null,
    "An Rh-negative woman (antibody screen negative) had Rh immunoglobulin at 28 weeks. At 34 weeks she's in a car crash, with mild abdominal pain and a reassuring tracing. What about Rh prophylaxis?",
    ["Give another dose of Rh immunoglobulin, with a Kleihauer–Betke test to check whether more is needed", "Nothing: the 28-week dose covers it", "Wait until delivery", "Only if the baby is later found to be Rh-negative", "Give IVIG instead"],
    0,
    "Rh immunoglobulin is given at <b>28–30 weeks</b>, <b>postpartum</b> if the baby is Rh-positive, and after any sensitizing event from 8–10 weeks: <b>bleeding, invasive procedures, abdominal trauma</b>. A large fetomaternal bleed can exceed a standard dose, so a <b>Kleihauer–Betke</b> sizes it. Monitor for abruption after trauma.");

  qb(AN, "#alloimmunization", null,
    "At 22 weeks, a woman sensitized in a previous pregnancy has an anti-D titre of 1:32 (it was 1:8 a month ago). What is the next step?",
    ["Serial middle cerebral artery peak systolic velocity Doppler to detect fetal anemia", "Repeat the titre every 2 weeks", "Give Rh immunoglobulin", "Deliver now", "Reassure: a titre only matters above 1:256"],
    0,
    "A titre <b>≥ 1:8 is critical</b>. Above it, more titres add nothing; <b>watch the fetus</b> instead. An anemic fetus pumps blood faster to its brain, so <b>rising MCA peak systolic velocity</b> tracks anemia. Severe anemia before ~34–35 weeks → <b>intrauterine transfusion</b>; later → deliver; stable → deliver at 37–38 weeks. Rh immunoglobulin is useless once she's sensitized.");

  qb(AN, "#nutrition", null,
    "A pregnant woman at 22 weeks asks if she should be 'eating for two'. What is the best advice?",
    ["About 350–450 extra kcal/day in the second half of pregnancy, focusing on healthy eating, plus a daily prenatal vitamin", "Double her calories from conception", "No extra calories at all", "A low-carbohydrate diet to limit weight gain", "Stop all supplements once the first trimester is over"],
    0,
    "Energy needs rise modestly (~<b>350–450 kcal/day</b>; less with a high BMI, more if underweight). Focus on healthy eating rather than specific foods. <b>Everyone</b> takes a prenatal multivitamin; the most commonly needed extras are <b>folic acid and iron</b> (iron needs rise by half: 18 → 27 mg). After gastric bypass, also watch zinc, calcium, vitamins C and D.");

  /* 5.15 Second-trimester ultrasound */
  qb(SU, "#soft-markers", null,
    "Meg, 31, had a low-risk first-trimester screen. Her 20-week scan is otherwise normal but shows an echogenic intracardiac focus. She's terrified her baby has a heart defect. What do you tell her?",
    ["It's a soft marker, not a heart defect: it slightly raises the chance of trisomy 21 above her low prior risk, and she can choose NIPT or simply be reassured", "The baby has congenital heart disease", "She needs an amniocentesis immediately", "It confirms trisomy 18", "It means the baby will need surgery"],
    0,
    "<b>Soft markers</b> (echogenic intracardiac focus, thickened nuchal fold, choroid plexus cyst) are <b>not anomalies</b>. They're seen more often with trisomy 21 or 18 and adjust the prior risk. With a <b>low prior risk</b> and an isolated marker, reassurance or NIPT is reasonable. The same marker after a high-risk screen means something different.");

  qb(SU, "#placenta", null,
    "At the 20-week anatomy scan, the placenta's edge is 1 cm from the internal os. No bleeding. What do you advise?",
    ["Repeat the ultrasound in the third trimester (~32 weeks): most low-lying placentas move away from the os; report any bleeding", "Book a cesarean now", "Admit to hospital until delivery", "Strict bed rest", "Nothing: a low placenta doesn't matter"],
    0,
    "<b>Placental location</b> is one of the anatomy scan's five jobs. A placenta within 2 cm of the os is <b>low-lying</b>; covering it is <b>previa</b>. As the lower segment forms, most 'migrate' away, so rescan at ~32 weeks. If it persists: planned delivery (cesarean for previa), no digital exams, and urgent assessment for any bleeding.");

  qb(SU, "#anatomy", null,
    "The 20-week scan shows a gastroschisis. Beyond counselling, what is the main purpose of finding this antenatally?",
    ["Planning delivery at a centre with neonatal intensive care and pediatric surgery, plus serial growth scans", "Starting in-utero repair at 21 weeks", "Inducing labour at 24 weeks", "No change to care", "Mandatory termination"],
    0,
    "Finding an anomaly before birth allows <b>counselling</b>, <b>further testing</b>, <b>planning where and how to deliver</b> (level of care), and the option of termination for severe anomalies. Gastroschisis needs <b>neonatal surgery soon after birth</b>, so deliver where that's available; growth restriction is common, so follow growth.");

  /* 5.16 Hypertension in pregnancy */
  qb(HT, "#classification", null,
    "At her first prenatal visit at 11 weeks, a 36-year-old's BP is 150/96, and 148/94 fifteen minutes later. She's never had her BP checked. How do you classify it?",
    ["Chronic (pre-existing) hypertension", "Gestational hypertension", "Pre-eclampsia", "White-coat effect: normal for pregnancy", "HELLP syndrome"],
    0,
    "<b>20 weeks</b> is the dividing line: hypertension <b>before 20 weeks</b> is <b>chronic</b> (it was there before pregnancy), and BP normally <b>falls</b> from 8–12 weeks, so early high readings understate it. New hypertension after 20 weeks = gestational; plus proteinuria or end-organ dysfunction = <b>pre-eclampsia</b> (chronic hypertension raises that risk).");

  qb(HT, "#management", null,
    "At 33 weeks, a woman's BP is 168/112 and 166/110 fifteen minutes later. She has a headache. What is the immediate priority?",
    ["Lower the BP urgently (IV labetalol, short-acting oral nifedipine or IV hydralazine) to below 160/110, and start magnesium sulfate", "Repeat the BP in 4 hours", "Start oral methyldopa and recheck next week", "Give furosemide", "Give an ACE inhibitor"],
    0,
    "<b>Severe hypertension</b> (≥ 160 or ≥ 110) is treated <b>urgently</b> because the main maternal danger is <b>stroke</b>. Headache = severe features → <b>MgSO₄</b> to prevent eclampsia (4 g load then 1–2 g/h), steroids if preterm, and plan delivery (the only cure). Avoid dropping the BP too far: placental perfusion depends on it.");

  qb(HT, "#management", null,
    "Six hours into a magnesium sulfate infusion, a woman with pre-eclampsia has absent patellar reflexes, a respiratory rate of 9 and low urine output. What do you do?",
    ["Stop the magnesium and give IV calcium gluconate", "Increase the magnesium for better seizure control", "Give IV labetalol", "Give naloxone", "Give furosemide and continue"],
    0,
    "<b>Magnesium toxicity</b>: loss of <b>deep tendon reflexes</b> first, then <b>respiratory depression</b>, then cardiac arrest. Magnesium is renally cleared, so <b>oliguria</b> raises levels. Monitor reflexes, respiratory rate and urine output hourly; for toxicity, <b>stop the infusion</b> and give <b>calcium gluconate</b>.");

  qb(HT, "#management", null,
    "Mira, 32, has chronic hypertension controlled on ramipril and wants to get pregnant next year. What do you change before conception?",
    ["Switch ramipril to labetalol or nifedipine XL before conception", "Continue ramipril throughout pregnancy", "Stop all antihypertensives", "Add a thiazide", "Switch to an ARB"],
    0,
    "<b>ACE inhibitors and ARBs</b> are fetotoxic (renal dysgenesis, oligohydramnios, skull hypoplasia, especially after the first trimester), so switch <b>before conception</b>. Pregnancy-safe oral options: <b>labetalol, nifedipine XL, methyldopa</b>. Diuretics oppose the normal plasma volume expansion, so they're a poor choice. In pregnancy she'll also be offered low-dose ASA for pre-eclampsia prevention.");

  /* Pregnancy physiology */
  qb(PP, "", null,
    "A woman with asthma at 34 weeks has an exacerbation. Her blood gas shows pH 7.40 and PaCO₂ 40 mmHg. How do you interpret the PaCO₂?",
    ["Worrying: normal pregnancy PaCO₂ is ~28–32, so 40 suggests tiring and impending respiratory failure", "Reassuring: a normal value", "A sign of metabolic alkalosis", "Expected with progesterone-driven hypoventilation", "Irrelevant in pregnancy"],
    0,
    "<b>Progesterone</b> drives a higher tidal volume (minute ventilation up ~30–50%), giving a <b>compensated respiratory alkalosis</b> (PaCO₂ ~28–32, bicarbonate ~18–22). A 'normal' non-pregnant PaCO₂ of 40 in a pregnant asthmatic means CO₂ retention: escalate care. The lower maternal CO₂ also helps fetal CO₂ cross the placenta.");

  qb(PP, "", null,
    "At 32 weeks, a woman lying flat for an ultrasound becomes pale, nauseated and light-headed; BP 82/50. What is the cause and the fix?",
    ["Aortocaval compression by the uterus: turn her onto her left side (or tilt the uterus to the left)", "Pre-eclampsia: give labetalol", "Placental abruption: emergency cesarean", "Vasovagal syncope from anxiety: give atropine", "Amniotic fluid embolism"],
    0,
    "<b>Supine hypotensive syndrome</b>: after ~20 weeks the gravid uterus compresses the <b>IVC</b> (and aorta) when she lies supine, cutting venous return and cardiac output. <b>Left lateral</b> positioning or manual leftward displacement fixes it. The same principle applies in resuscitation (left uterine displacement during CPR).");

  qb(PP, "", null,
    "Which results are expected in a healthy woman at 36 weeks? <i>(Select all that apply.)</i>",
    ["WBC 13 × 10⁹/L", "Alkaline phosphatase about twice the non-pregnant upper limit", "Hemoglobin 115 g/L", "Creatinine 95 µmol/L", "Fibrinogen 1.5 g/L"],
    [0, 1, 2],
    "Normal pregnancy: mild <b>leukocytosis</b>; <b>ALP rises</b> (placental isoenzyme); <b>dilutional anemia</b> (plasma volume ~+50% > red cell mass ~+25%). GFR rises ~50%, so creatinine falls (often 40–60); <b>95 is abnormal</b> and suggests renal impairment (think pre-eclampsia). Pregnancy is <b>hypercoagulable</b> with fibrinogen 4–6 g/L, so <b>1.5 is dangerously low</b> (abruption, DIC, PPH risk).");

  qb(PP, "", null,
    "At 28 weeks, a healthy woman has a soft grade 2/6 systolic ejection murmur at the left sternal border; she has no symptoms. Which finding would <b>not</b> be physiological and would need an echocardiogram?",
    ["A diastolic murmur", "A soft systolic flow murmur", "A resting heart rate 10–15 beats higher than before pregnancy", "A third heart sound", "Mild ankle edema"],
    0,
    "Cardiac output rises <b>30–50%</b> (stroke volume then heart rate), and systemic vascular resistance falls. A soft <b>systolic flow murmur</b>, an S3, a higher resting HR and dependent edema are common. A <b>diastolic murmur</b> is never physiological (e.g., mitral stenosis, which decompensates badly in pregnancy): echo.");
})();

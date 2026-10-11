/* Week 6 · Female Reproductive. Adapted from the class qbank (src = their id) unless null. */
(function () {
  const PT = "w6-preterm-labour", SF = "w6-small-fetus", APH = "w6-antepartum-hemorrhage";

  /* ---------------------------------------------------- 6.1 Preterm labour */
  qb(PT, "#risk-factors", ["workbook-repro-Q108", "Workbook · Reproduction"],
    "What is the strongest risk factor for spontaneous preterm birth?",
    ["A previous spontaneous preterm birth", "Maternal drug use", "Cervicovaginal infection", "Second-trimester bleeding", "First pregnancy"],
    0,
    "A previous spontaneous preterm birth roughly <b>doubles</b> the risk (~15% after one, ~30% after two). Others: short cervix, cervical surgery (cone > LEEP), multiple gestation, PPROM, infection (BV, UTI, STI), bleeding, smoking or substance use, uterine anomalies, short interpregnancy interval. About half of preterm births have no identifiable cause. <b>First pregnancy isn't</b> a risk factor (it is for pre-eclampsia).");

  qb(PT, "#management", ["hippo-repro-Q91", "HippoNotes"],
    "Which interventions can reduce the risk of preterm birth in selected women? <i>(Select all that apply.)</i>",
    ["Vaginal progesterone for a short cervix or prior spontaneous preterm birth", "Cervical cerclage for cervical insufficiency", "Treating infections such as STIs and BV when found", "Smoking cessation", "Strict bed rest for all high-risk women"],
    [0, 1, 2, 3],
    "Prevention is targeted: <b>progesterone</b> (short cervix on ultrasound, or prior spontaneous preterm birth), <b>cerclage</b> (history-, ultrasound- or exam-indicated cervical insufficiency), treating infection, and stopping smoking. <b>Bed rest doesn't</b> prevent preterm birth and adds VTE and deconditioning risk.");

  qb(PT, "#management", ["new-repro-Q103", "Module case"],
    "Jennifer, 29+2 weeks, has regular contractions and a soft 2 cm cervix. The team gives indomethacin. What is the purpose of tocolysis?",
    ["To delay birth ~48 hours so corticosteroids can work and she can be transferred to a centre with a NICU",
     "To stop preterm labour permanently so she can carry to term",
     "To treat the infection causing the contractions",
     "To provide fetal neuroprotection",
     "To mature the fetal lungs"],
    0,
    "Tocolytics (nifedipine, indomethacin < 32 weeks) are a <b>bridge</b>: they buy ~48 h for <b>betamethasone</b> (lung maturation, less IVH and NEC) and <b>in utero transfer</b>. They don't improve neonatal outcomes on their own. Neuroprotection is <b>magnesium sulfate</b>. Rule out dehydration, UTI and abruption, and don't tocolyse with chorioamnionitis or fetal compromise.");

  qb(PT, "#imminent", ["reviews-repro-Q36", "Written from review slides"],
    "A woman at 29 weeks is 7 cm dilated with regular contractions; birth is expected within hours. She had betamethasone yesterday. Which drug, given now, reduces the baby's risk of cerebral palsy?",
    ["IV magnesium sulfate", "Nifedipine", "Indomethacin", "A second betamethasone course", "Terbutaline"],
    0,
    "When preterm birth is <b>imminent before 34 weeks</b> (lecture cut-off), give <b>magnesium sulfate</b> for <b>fetal neuroprotection</b> (lowers cerebral palsy). Plus <b>IV penicillin</b> for GBS if status is positive or unknown. Tocolysis isn't appropriate at 7 cm.");

  qb(PT, "#imminent", ["weekly-repro-Q7", "Weekly quiz"],
    "A 34-year-old G1 at 28 weeks is admitted in active preterm labour; GBS status unknown, no allergies. Which medications do you order? <i>(Select all that apply.)</i>",
    ["Betamethasone IM", "Magnesium sulfate for neuroprotection", "IV penicillin G for GBS prophylaxis", "Indomethacin despite advanced labour", "Oxytocin augmentation"],
    [0, 1, 2],
    "Preterm labour bundle: <b>antenatal corticosteroids</b> (24–34 weeks; two doses 24 h apart), <b>magnesium sulfate</b> if birth is imminent before 34 weeks, and <b>GBS prophylaxis</b> because a preterm baby's status is unknown (swabs are done at 35–37 weeks). Tocolysis is only to buy time, not in active advanced labour.");

  qb(PT, "#pprom", ["module-repro-Q105", "Elentra module"],
    "Which is <b>not</b> a validated way to confirm rupture of membranes?",
    ["Amniocentesis showing bacteria in the fluid", "Pooling of fluid in the posterior fornix on speculum exam", "Positive nitrazine test (blue)", "Ferning on a dried slide", "Low amniotic fluid on ultrasound (supportive)"],
    0,
    "ROM is diagnosed by <b>history plus a sterile speculum exam</b>: pooling, <b>nitrazine</b> (amniotic fluid is alkaline), <b>ferning</b>, ± commercial tests and ultrasound fluid volume. Avoid digital exams in PPROM (infection). Bacteria in amniotic fluid suggest <b>chorioamnionitis</b>, not ruptured membranes.");

  qb(PT, "#pprom", ["module-repro-Q106", "Elentra module"],
    "Compared with intact membranes at the same gestation, which complications are more likely after PPROM? <i>(Select all that apply.)</i>",
    ["Chorioamnionitis", "Preterm birth", "Cord prolapse", "Placental abruption", "Prolonged NICU stay"],
    [0, 1, 2, 3, 4],
    "All of them. PPROM → <b>preterm birth</b> (most deliver within a week), ascending infection (<b>chorioamnionitis</b>, neonatal sepsis), <b>cord prolapse</b> and compression (less fluid), <b>abruption</b>, and, with very early PPROM, pulmonary hypoplasia and limb contractures.");

  qb(PT, "#pprom", ["module-repro-Q107", "Module case"],
    "Cindy, 28, G1, has PPROM at 28 weeks: cervix 1 cm, no regular contractions, afebrile, normal fetal heart rate. Which belong in her initial management? <i>(Select all that apply.)</i>",
    ["Antenatal corticosteroids", "Latency antibiotics (e.g., ampicillin plus erythromycin or azithromycin)", "Magnesium sulfate now", "Tocolysis with indomethacin", "Cervical cerclage"],
    [0, 1],
    "Stable PPROM remote from term: admit, <b>steroids</b>, <b>latency antibiotics</b> (prolong pregnancy and reduce infection), and monitor for labour, infection and fetal compromise. Magnesium and GBS penicillin are for when birth is <b>imminent</b>. Tocolysis and cerclage aren't used with ruptured membranes. Deliver for chorioamnionitis, abruption, non-reassuring status, or at ~34–37 weeks.");

  qb(PT, "#pprom", ["new-repro-Q104", "Module case"],
    "A day after admission for threatened preterm labour at 29 weeks (indomethacin and first betamethasone dose given), Jennifer has a gush of clear fluid confirming PPROM. No labour or infection. What now?",
    ["Start latency antibiotics and complete the steroid course", "Start magnesium sulfate infusion", "Restart indomethacin", "Start IV penicillin for GBS now and induce", "Discharge home"],
    0,
    "She's stable, not contracting and not infected: <b>latency antibiotics</b> plus completing <b>betamethasone</b>, then expectant management with surveillance. Magnesium and intrapartum GBS prophylaxis come when birth becomes imminent; there's nothing to tocolyse.");

  qb(PT, "#imminent", ["new-repro-Q106", "Module case"],
    "Jennifer, now ~30 weeks with PPROM, is 6 cm and labouring. She hasn't had a GBS swab yet (routinely done at 35–37 weeks). What GBS management is recommended?",
    ["IV penicillin G in labour, because she's preterm with unknown GBS status", "No prophylaxis unless a swab is positive", "Send a swab and treat only if positive before delivery", "Continue her oral latency antibiotics only", "Give penicillin to the baby after birth instead"],
    0,
    "Intrapartum GBS prophylaxis is given if GBS-positive, <b>or status unknown with risk factors</b>: <b>preterm labour</b>, ROM ≥ 18 h, intrapartum fever, or a previous baby with GBS disease (also GBS bacteriuria this pregnancy). <b>IV penicillin G</b> is first line; cefazolin for low-risk penicillin allergy.");

  qb(PT, "#risk-factors", ["new-repro-Q102", "Module case"],
    "Jennifer, 25, G3P2, has had births at 36 and 32 weeks, a cone biopsy at 20, smokes a pack a day, and has been on vaginal progesterone this pregnancy. Which item is <b>not</b> a risk factor for preterm birth?",
    ["Her vaginal progesterone", "Her two previous preterm births", "Her cone biopsy", "Her smoking", "Her short interval between pregnancies, if present"],
    0,
    "Vaginal <b>progesterone</b> is a <b>prevention</b> measure for women with prior spontaneous preterm birth or a short cervix. The others (previous preterm births, <b>cervical excision</b>, smoking) are classic risk factors.");

  qb(PT, "#consequences", ["module-repro-Q104", "Elentra module"],
    "Which statements about preterm birth are true? <i>(Select all that apply.)</i>",
    ["Earlier gestational age at birth means more severe neonatal morbidity and mortality", "Twins are at higher risk of spontaneous preterm birth than singletons", "Preventing preterm birth can save healthcare costs", "A prior preterm birth doesn't affect the risk next time", "All preterm births are spontaneous"],
    [0, 1, 2],
    "Complications rise steeply as gestational age falls: RDS, IVH, NEC, sepsis, ROP, and long-term neurodevelopmental problems. Multiple gestation (uterine overdistension) is a major risk. Preterm births are spontaneous (labour or PPROM) or <b>iatrogenic</b> (e.g., delivery for pre-eclampsia).");

  qb(PT, "#risk-factors", ["weekly-repro-Q1", "Weekly quiz"],
    "Sahra, 36, at 20 weeks, had a spontaneous birth at 23 weeks (after backache and discharge) and a spontaneous preterm labour at 32 weeks. What is her biggest risk this pregnancy?",
    ["Preterm labour", "PPROM", "Placental abruption", "Fetal growth restriction", "Pre-eclampsia"],
    0,
    "Two prior <b>spontaneous preterm births</b> give her roughly a 30% recurrence risk, so she's a candidate for <b>cervical length surveillance</b> and <b>progesterone</b> (± cerclage). Her first loss sounds like cervical insufficiency (painless dilation with backache and discharge in the second trimester).");

  /* ---------------------------------------------------- 6.2 The small fetus */
  qb(SF, "#sga-vs-iugr", ["module-repro-Q59", "Elentra module"],
    "What defines small for gestational age (SGA)?",
    ["Estimated or birth weight below the 10th percentile for gestational age", "Birth weight under 1,500 g", "Birth before 35 weeks", "Birth weight under 2,500 g", "Head circumference below the 3rd percentile"],
    0,
    "<b>SGA</b> is a <b>size</b> label (< 10th percentile for GA); many SGA babies are just constitutionally small. <b>IUGR/FGR</b> means the fetus has <b>failed to reach its growth potential</b> (usually placental insufficiency). Low birth weight (< 2,500 g), very low (< 1,500 g) and extremely low (< 1,000 g) are absolute weights regardless of gestation; prematurity is about timing.");

  qb(SF, "#causes", ["module-repro-Q61", "Elentra module"],
    "Which is an <b>intrinsic (fetal)</b> cause of growth restriction?",
    ["Trisomy (e.g., 13, 18, 21)", "Maternal smoking", "Chronic hypertension", "Placental abruption", "Multiple gestation"],
    0,
    "Causes are <b>fetal</b> (aneuploidy, syndromes, structural anomalies, congenital infection such as CMV), <b>placental</b> (insufficiency from hypertension or pre-eclampsia, abruption, infarcts), or <b>maternal</b> (smoking, substances, malnutrition, vascular disease, high altitude). Early, severe, symmetric FGR suggests a fetal cause, so consider genetic testing and infection screening.");

  qb(SF, "#doppler", ["hippo-repro-Q94", "HippoNotes"],
    "As placental insufficiency worsens, how does umbilical artery Doppler progress?",
    ["Reduced end-diastolic flow → absent end-diastolic flow → reversed end-diastolic flow",
     "Reversed → reduced → absent",
     "Absent → reduced → reversed",
     "Reversed → absent → normal",
     "It stays normal until delivery"],
    0,
    "Rising placental resistance first <b>reduces</b> diastolic flow (higher pulsatility index), then flow becomes <b>absent</b> in diastole (substantial villous damage), then <b>reversed</b>, a pre-terminal sign. Absent or reversed end-diastolic flow means intensive surveillance and often delivery (timing depends on gestation, with steroids and magnesium as appropriate).");

  qb(SF, "#doppler", ["module-repro-Q62", "Elentra module"],
    "Which finding is expected with severe placental-insufficiency growth restriction (EFW < 3rd percentile)?",
    ["Absent end-diastolic flow in the umbilical artery", "Polyhydramnios", "Normal amniotic fluid always", "Vasa previa", "Macrosomia"],
    0,
    "Placental insufficiency → raised umbilical artery resistance (reduced, then <b>absent or reversed EDF</b>) and fetal <b>brain-sparing</b> (low middle cerebral artery resistance), with renal underperfusion → <b>oligohydramnios</b>. Polyhydramnios with a small fetus suggests an anomaly or aneuploidy instead.");

  qb(SF, "#screening", ["reviews-repro-Q40", "Written from review slides"],
    "At 30 weeks, a woman with chronic hypertension has a symphysis-fundal height of 26 cm. Next step?",
    ["Ultrasound for estimated fetal weight, fluid and umbilical artery Doppler", "Reassure", "Repeat SFH in 4 weeks", "Induce labour", "Kleihauer–Betke test"],
    0,
    "SFH should be within ~2 cm of gestational weeks after 20 weeks; a <b>4 cm lag</b> in a woman with a risk factor needs an <b>ultrasound</b> (SFH only screens). If EFW is < 10th percentile → umbilical artery Doppler, fluid and NST, and serial growth scans. Women with hypertension often get serial growth scans regardless.");

  qb(SF, "#causes", ["module-repro-Q60", "Elentra module"],
    "Which are risk factors for fetal growth restriction? <i>(Select all that apply.)</i>",
    ["Maternal hypertension or pre-eclampsia", "Fetal aneuploidy", "Smoking", "Maternal gestational diabetes with poor control", "Previous growth-restricted baby"],
    [0, 1, 2, 4],
    "Placental vascular disease (<b>hypertension, pre-eclampsia</b>, lupus or APS, smoking), <b>fetal</b> causes (aneuploidy, infection) and a <b>previous FGR baby</b> all raise risk. Poorly controlled <b>diabetes</b> more often causes <b>macrosomia</b> (unless there's diabetic vasculopathy). Low-dose ASA helps prevent placenta-mediated FGR in high-risk women.");

  /* ---------------------------------------------------- 6.3 Antepartum hemorrhage */
  qb(APH, "#management", ["reviews-repro-Q32", "Written from review slides"],
    "At 32 weeks, a woman has sudden painless bright red bleeding. The uterus is soft and non-tender, fetal heart tracing normal, placental location unknown. What must happen before any digital cervical exam?",
    ["Ultrasound to locate the placenta", "Amniotomy", "Kleihauer–Betke test", "Oxytocin infusion", "Cervical biopsy"],
    0,
    "Painless bleeding = <b>placenta previa until ultrasound says otherwise</b>, and a digital exam on a previa can trigger catastrophic bleeding. Meanwhile: assess stability, IV access, CBC, group and crossmatch, coagulation, fetal monitoring, anti-D if Rh negative, steroids if preterm.");

  qb(APH, "#abruption", ["reviews-repro-Q34", "Written from review slides"],
    "At 34 weeks, a woman with pre-eclampsia has sudden severe abdominal pain, dark vaginal bleeding, and a tender, firm uterus contracting frequently. Diagnosis?",
    ["Placental abruption", "Placenta previa", "Vasa previa", "Bloody show", "Cervical ectropion"],
    0,
    "<b>Abruption</b>: painful bleeding, uterine tenderness and hypertonus, frequent contractions, possibly fetal distress; blood loss can be concealed (shock out of proportion to visible bleeding). Risks: <b>hypertension</b>, trauma, previous abruption, smoking, cocaine, PPROM. Complications: DIC, hemorrhage, fetal death. Ultrasound often misses it; it's a clinical diagnosis.");

  qb(APH, "#vasa-previa", ["reviews-repro-Q33", "Written from review slides"],
    "At 37 weeks, a small amount of bleeding at rupture of membranes is followed immediately by fetal bradycardia. Mother is stable; an earlier scan showed a velamentous cord insertion. Whose blood is it and what's the diagnosis?",
    ["Fetal blood: vasa previa (emergency cesarean)", "Maternal blood: abruption", "Maternal blood: previa", "Maternal blood: uterine rupture", "Fetal blood: placenta accreta"],
    0,
    "In <b>vasa previa</b>, unprotected fetal vessels run across the membranes over the cervix and tear at ROM, so the blood is <b>fetal</b>. A small loss is a large share of fetal volume, causing rapid fetal compromise while the mother is fine. Risk: velamentous insertion, succenturiate lobe, IVF, low-lying placenta. Antenatal diagnosis → planned cesarean at ~35–36 weeks. The <b>Apt test</b> identifies fetal blood.");

  qb(APH, "#abruption", ["workbook-repro-Q121", "Workbook · Reproduction"],
    "A Kleihauer–Betke test showing fetal red cells in the mother's circulation suggests which condition?",
    ["Placental abruption (or other fetomaternal hemorrhage, e.g., after trauma)", "Placenta previa", "Vasa previa", "Ectopic pregnancy", "Molar pregnancy"],
    0,
    "Kleihauer–Betke measures <b>fetal cells in maternal blood</b> (fetomaternal hemorrhage): seen with abruption or abdominal trauma, and used to <b>calculate the anti-D dose</b> in Rh-negative women. The <b>Apt test</b> is the other way round: it checks whether <b>vaginal</b> blood is fetal (vasa previa). Previa bleeding is maternal.");

  qb(APH, "#previa", ["module-repro-Q96", "Elentra module"],
    "Which ultrasound finding defines placenta previa?",
    ["The placenta covering the internal cervical os", "Placental edge 4 cm from the os", "A bilobed placenta", "A velamentous cord insertion", "A retroplacental clot"],
    0,
    "<b>Previa</b> = placenta over the internal os; <b>low-lying</b> = edge within 2 cm. Most low placentas found at 18–20 weeks 'migrate' up, so rescan at ~32 weeks. Persistent previa → planned cesarean (~36–37 weeks), no intercourse or digital exams, and a plan for bleeding. Previa over a previous cesarean scar raises suspicion for <b>accreta</b>.");

  qb(APH, "#compare", ["hippo-repro-Q88", "HippoNotes"],
    "Which statement about abnormal placentation is correct?",
    ["Placenta accreta spectrum often requires cesarean hysterectomy",
     "Vasa previa means the placenta invades the myometrium",
     "Abruption is reliably diagnosed by ultrasound",
     "PPROM causes a positive Kleihauer–Betke test",
     "Previa bleeding is fetal in origin"],
    0,
    "<b>Accreta spectrum</b> (accreta, increta, percreta): villi invade the myometrium because the decidua is deficient, usually at a <b>previous cesarean scar</b>, especially with a previa. The placenta won't separate, so plan delivery at a tertiary centre with cesarean hysterectomy (massive transfusion risk). Ultrasound misses many abruptions; previa blood is maternal.");

  qb(APH, "#coagulopathy", ["hippo-repro-Q89", "HippoNotes"],
    "Which statement about antepartum hemorrhage is <b>false</b>?",
    ["Bleeding from placenta previa is fetal in origin",
     "Stat investigations include CBC, group and crossmatch, coagulation, and creatinine and liver enzymes (pre-eclampsia, abruption)",
     "Cervical dilation shouldn't be checked digitally until previa is excluded",
     "Ongoing hemorrhage can cause consumptive DIC",
     "Rh-negative women need anti-D after a bleed"],
    0,
    "Previa bleeding is <b>maternal</b>: the mother is at risk while the fetus usually tolerates it; vasa previa is the fetal bleed. Abruption especially can trigger <b>DIC</b> (check fibrinogen; low fibrinogen predicts severe hemorrhage). Always give anti-D to Rh-negative women after significant bleeding.");

  qb(APH, "#previa", ["module-repro-Q100", "Elentra module"],
    "Which are complications of placenta previa? <i>(Select all that apply.)</i>",
    ["Maternal hemorrhagic shock", "Need for transfusion", "Preterm birth", "Cesarean delivery", "Pre-eclampsia"],
    [0, 1, 2, 3],
    "Previa causes <b>maternal</b> hemorrhage (antepartum and postpartum, since the lower segment contracts poorly), transfusion, DIC with massive bleeding, preterm birth, cesarean delivery, and accreta risk with prior scars. It isn't associated with pre-eclampsia, and the bleeding isn't fetal.");

  qb(APH, "#abruption", ["weekly-repro-Q2", "Weekly quiz"],
    "Geena, 36, normotensive, is 20 weeks. Eight years ago she had a traumatic abruption after a car crash at 23 weeks; 3 years ago she had an uncomplicated term birth. What do you tell her about this pregnancy?",
    ["Her outlook is good: the abruption had an external cause and her last pregnancy went to term",
     "Her previa risk is increased because of the abruption",
     "Her growth restriction risk is high because of the abruption",
     "Her pre-eclampsia risk is high because of the abruption",
     "She needs a cerclage"],
    0,
    "Previous abruption is a risk factor, but hers was <b>traumatic</b>, she's normotensive, and she has since had an uncomplicated term birth, so the recurrence risk is low. Counsel about trauma (seatbelt worn below the bump) and to report bleeding or pain promptly.");

  qb(APH, "#vasa-previa", ["module-repro-Q97", "Elentra module"],
    "Which test best identifies bleeding from vasa previa?",
    ["An Apt test on the vaginal blood (fetal hemoglobin)", "Kleihauer–Betke on maternal blood", "INR and PTT", "History of cesarean section", "Serum hCG"],
    0,
    "Fetal hemoglobin resists alkali denaturation: the <b>Apt test</b> on blood from the vagina tells you it's <b>fetal</b>, as in vasa previa. In practice, an abrupt bleed with fetal bradycardia at ROM means an immediate cesarean; you don't wait for the test.");
})();

(function () {
  const LB = "w6-labour-and-birth", AL = "w6-abnormal-labour", HS = "w6-hemorrhagic-shock", NC = "w6-neonatal-care", PP = "w6-postpartum-care", LAC = "w6-lactation";

  /* ---------------------------------------------------- 6.4 Labour and birth */
  qb(LB, "#cardinal", ["workbook-repro-Q111", "Workbook · Reproduction"],
    "What is the correct order of the cardinal movements of labour?",
    ["Engagement, descent, flexion, internal rotation, extension, external rotation (restitution), expulsion",
     "Engagement, flexion, descent, extension, internal rotation, external rotation, expulsion",
     "Descent, engagement, flexion, extension, internal rotation, expulsion",
     "Descent, engagement, internal rotation, flexion, external rotation, extension",
     "Engagement, descent, flexion, external rotation, internal rotation, extension"],
    0,
    "The head <b>engages</b>, <b>descends</b>, <b>flexes</b> (smallest diameter), <b>rotates internally</b> to occiput anterior, <b>extends</b> under the symphysis to deliver, then <b>restitutes/rotates externally</b> as the shoulders rotate, and the body is <b>expelled</b>. Descent happens throughout.");

  qb(LB, "#initiation", ["workbook-repro-Q112", "Workbook · Reproduction"],
    "Which does <b>not</b> contribute to the onset of labour?",
    ["High progesterone levels at term", "Functional progesterone withdrawal (relative rise in estrogen)", "Prostaglandins", "Oxytocin and increased oxytocin receptors", "Fetal HPA axis activation (cortisol)"],
    0,
    "Progesterone maintains uterine quiescence. At term there's a <b>functional progesterone withdrawal</b> (receptor changes), plus rising estrogen, <b>oxytocin receptors</b>, gap junctions, <b>prostaglandins</b> (cervical ripening, contractions) and fetal cortisol/CRH signalling. That's also why prostaglandins and anti-progestins can induce or ripen.");

  qb(LB, "#stages", ["weekly-repro-Q6", "Weekly quiz"],
    "A primip has just delivered a live baby and is awaiting the placenta. Which stage of labour is she in?",
    ["Third stage", "First stage", "Second stage", "Fourth stage", "Latent phase"],
    0,
    "<b>First</b>: onset of labour to full dilation (latent then active phase, from ~4–6 cm). <b>Second</b>: full dilation to birth of the baby. <b>Third</b>: birth to delivery of the placenta (usually 5–30 min). <b>Fourth</b>: the first hour or so postpartum (highest PPH risk).");

  qb(LB, "#pain", ["workbook-repro-Q114", "Workbook · Reproduction"],
    "Which spinal segments carry first-stage labour pain (uterine contractions and cervical dilation), and so must be covered by an epidural?",
    ["T10–L1", "T7–T9", "S2–S4 only", "L4–S1", "C5–C7"],
    0,
    "First-stage visceral pain travels with sympathetic afferents to <b>T10–L1</b> (felt in the lower abdomen and back). Second-stage pain adds perineal stretch via the <b>pudendal nerve (S2–S4)</b>. An epidural covers both; a pudendal block covers the perineum only.");

  qb(LB, "#third-stage", ["workbook-repro-Q115", "Workbook · Reproduction"],
    "What is active management of the third stage of labour?",
    ["A uterotonic (oxytocin) with delivery of the shoulder or baby, controlled cord traction, and uterine massage after delivery of the placenta",
     "Waiting for spontaneous placental delivery for 2 hours",
     "Routine manual removal of the placenta",
     "Fundal pressure before the placenta separates",
     "Tocolysis after birth"],
    0,
    "Active management (<b>oxytocin</b>, controlled cord traction, uterine massage) cuts PPH significantly. Never pull hard on the cord or push on the fundus before separation (risk of <b>uterine inversion</b>). Signs of separation: a gush of blood, cord lengthening, and the uterus becoming globular and rising.");

  qb(LB, "#third-stage", ["reviews-repro-Q31", "Written from review slides"],
    "Ten minutes after a vaginal birth, which is the earliest sign that the placenta has separated?",
    ["The uterus becomes firm and globular", "A gush of blood", "The cord lengthens at the introitus", "The uterus rises in the abdomen", "A maternal urge to push"],
    0,
    "Signs of separation: the fundus becomes <b>firm and globular</b> (first), a <b>gush of blood</b>, <b>cord lengthening</b>, and the uterus rising. Only then apply controlled cord traction. A third stage over 30 minutes is a <b>retained placenta</b> (PPH risk) → manual removal.");

  qb(LB, "#monitoring", ["workbook-repro-Q123", "Workbook · Reproduction"],
    "A nulliparous woman at 8 cm has an <b>atypical</b> fetal heart tracing (e.g., recurrent variable decelerations). What is the next step?",
    ["Intrauterine resuscitation: change position (left lateral), stop oxytocin, IV fluid bolus, vaginal exam to exclude cord prolapse, consider oxygen, and reassess",
     "Immediate cesarean",
     "Ignore it and recheck in 30 minutes",
     "Forceps delivery at 8 cm",
     "Start oxytocin to speed delivery"],
    0,
    "SOGC classifies EFM as <b>normal, atypical or abnormal</b>. Atypical → look for a cause and do <b>intrauterine resuscitation</b>; persistent abnormal tracings need further assessment (scalp lactate) or expedited delivery. Operative vaginal delivery requires <b>full dilation</b>.");

  qb(LB, "#contraindications", ["hippo-repro-Q65", "HippoNotes"],
    "Which is <b>not</b> a contraindication to labour?",
    ["A pelvis judged 'unfavourable' on exam", "Placenta previa", "Active genital herpes", "Transverse lie", "Previous classical (vertical) uterine incision"],
    0,
    "Absolute contraindications include <b>previa</b>, vasa previa, <b>active HSV lesions</b>, transverse lie, <b>prior classical cesarean</b> or full-thickness myomectomy into the cavity, and cord prolapse. Clinical pelvimetry is unreliable, so a woman is generally given a <b>trial of labour</b>; the passage is judged by progress.");

  qb(LB, "#progress", ["hippo-repro-Q67", "HippoNotes"],
    "Which statement about the first stage of labour is <b>false</b>?",
    ["More frequent cervical checks improve outcomes",
     "Full dilation is about 10 cm",
     "Station +2 means the head is 2 cm below the ischial spines",
     "Occiput anterior is the most favourable position",
     "Some breech presentations can deliver vaginally"],
    0,
    "Each vaginal exam (especially after ROM) raises the risk of <b>chorioamnionitis</b>, so check only as clinically needed (~every 2–4 h in active labour, or when something changes). Station is measured relative to the ischial spines. Frank breech can sometimes deliver vaginally with an experienced team.");

  qb(LB, "#initiation", ["hippo-repro-Q66", "HippoNotes"],
    "Before the onset of labour in a primigravida, which of these typically happens?",
    ["Engagement: the fetal head becomes fixed in the pelvis (often ~2 weeks before labour)",
     "The cervix becomes thicker and firmer",
     "Braxton Hicks contractions signal that labour has started",
     "Regular fetal heart rate decelerations begin",
     "The membranes always rupture first"],
    0,
    "In nulliparas the head often <b>engages</b> before labour ('lightening'); in multiparas it may not engage until labour. The cervix <b>softens, thins (effaces)</b> and dilates. Braxton Hicks are irregular practice contractions that don't change the cervix.");

  /* ---------------------------------------------------- 6.5 Abnormal labour & PPH */
  qb(AL, "#pph", ["reviews-repro-Q35", "Written from review slides"],
    "Fifteen minutes after a vaginal birth following a 20-hour oxytocin-augmented labour, a woman is bleeding heavily. The fundus is soft and boggy above the umbilicus. Most likely cause and first step?",
    ["Uterine atony: bimanual massage and uterotonics (oxytocin, then others) plus tranexamic acid",
     "Retained placenta: manual removal",
     "Cervical laceration: suture",
     "Coagulopathy: FFP",
     "Uterine inversion: replace the fundus"],
    0,
    "PPH causes, the <b>4 Ts</b>: <b>Tone</b> (~70%; risks include long or augmented labour, overdistension, chorioamnionitis), <b>Trauma</b> (lacerations, rupture, inversion), <b>Tissue</b> (retained placenta or clots), <b>Thrombin</b> (coagulopathy). A boggy uterus → massage, empty the bladder, <b>oxytocin → carboprost or ergometrine/misoprostol</b>, <b>TXA</b>, then balloon tamponade or surgery. If the uterus is firm, look for trauma.");

  qb(AL, "#four-ts", ["hippo-repro-Q85", "HippoNotes"],
    "Which statements about postpartum hemorrhage are true? <i>(Select all that apply.)</i>",
    ["Retained products are a 'Tissue' cause", "Von Willebrand disease increases the risk ('Thrombin')", "Severe PPH can cause pituitary infarction with failure to lactate (Sheehan syndrome)", "Uterine inversion is a cause", "Prolonged labour protects against atony"],
    [0, 1, 2, 3],
    "Prolonged labour <b>exhausts</b> the myometrium and is a risk for <b>atony</b>. <b>Sheehan syndrome</b>: hypotension from massive PPH infarcts the enlarged pituitary, so the first sign is <b>failure to lactate</b>, then amenorrhea and adrenal or thyroid failure.");

  qb(AL, "#pph", ["workbook-repro-Q107", "Workbook · Reproduction"],
    "Which statements about postpartum hemorrhage are correct? <i>(Select all that apply.)</i>",
    ["It's the leading cause of maternal mortality worldwide", "Oxytocin is used both to prevent and to treat it", "Classic definitions: ≥ 500 mL after vaginal birth or ≥ 1,000 mL after cesarean, or any loss causing instability", "It's defined as > 1,000 mL after vaginal birth", "Oxytocin is used only for prevention"],
    [0, 1, 2],
    "PPH remains the <b>top cause of maternal death globally</b>. Visual estimates underestimate loss, so act on clinical signs (tachycardia, hypotension) rather than waiting for a number. Oxytocin is first line for <b>prevention</b> (active third-stage management) and <b>treatment</b>.");

  qb(AL, "#tolac", ["weekly-repro-Q4", "Weekly quiz"],
    "A 32-year-old at 34 weeks had a cesarean (low transverse incision) for an abnormal fetal heart rate at 4 cm. She wants a vaginal birth now. What do you tell her?",
    ["A trial of labour after cesarean is reasonable in hospital with continuous fetal monitoring and IV access; success is roughly 60–80%",
     "VBAC is never possible",
     "Rupture risk is 3–5%",
     "She should labour at home as long as possible",
     "Success is only 10%"],
    0,
    "With one low transverse scar and a non-recurring indication, <b>TOLAC</b> is a good option: success ~60–80% (higher with a prior vaginal birth), <b>uterine rupture ~0.5%</b> (higher with induction, especially prostaglandins). Labour in hospital with <b>continuous EFM</b>; the first sign of rupture is often an abnormal fetal heart rate.");

  qb(AL, "#cesarean", ["weekly-repro-Q9", "Weekly quiz"],
    "During labour, the umbilical cord is felt in front of the presenting part after ROM, and the fetal heart rate drops. What is the management?",
    ["Elevate the presenting part off the cord (hand in the vagina, knee-chest or Trendelenburg) and do an emergency cesarean",
     "Push the cord back up and continue labour",
     "Start oxytocin to speed delivery",
     "Wait for the heart rate to recover",
     "Forceps at 5 cm"],
    0,
    "<b>Cord prolapse</b> is an obstetric emergency: relieve compression (manually lift the presenting part, knee-chest position, fill the bladder, stop oxytocin) and deliver by the fastest route, usually <b>emergency cesarean</b> (operative vaginal if fully dilated with the head low). Risks: malpresentation, polyhydramnios, preterm birth, high presenting part at ROM.");

  qb(AL, "#induction", ["hippo-repro-Q83", "HippoNotes"],
    "Which statement about induction of labour is <b>false</b>?",
    ["Maternal cardiac disease is a reason to avoid induction",
     "Post-dates pregnancy (≥ 41 weeks) is an accepted indication",
     "The cervix can be ripened with prostaglandins or a Foley balloon",
     "Amniotomy can be part of induction",
     "IV oxytocin is used to start or strengthen contractions"],
    0,
    "Induction is indicated when continuing the pregnancy is riskier than delivery: post-dates, PROM, pre-eclampsia, diabetes, FGR, and <b>maternal medical disease</b> (including some cardiac disease, for a planned, controlled delivery). Unripe cervix (low Bishop score) → <b>ripening</b> first, then amniotomy and oxytocin.");

  qb(AL, "#operative", ["hippo-repro-Q84", "HippoNotes"],
    "Which statement about operative vaginal delivery is <b>false</b>?",
    ["It can be done before full cervical dilation",
     "Forceps and vacuum are the two methods",
     "A common indication is an abnormal fetal heart tracing in the second stage",
     "Prolonged second stage or maternal exhaustion are indications",
     "The head must be engaged with a known position"],
    0,
    "Prerequisites: <b>fully dilated cervix</b>, ruptured membranes, engaged head (station ≥ 0, ideally +2), <b>known position</b>, adequate analgesia, empty bladder, consent and a backup plan. Vacuum is avoided before ~34 weeks.");

  qb(AL, "#cesarean", ["workbook-repro-Q137", "Workbook · Reproduction"],
    "Which is <b>not</b> by itself an indication for cesarean section?",
    ["Maternal diabetes", "Labour dystocia", "Cord prolapse", "Persistent abnormal fetal heart rate", "Placenta previa"],
    0,
    "Common indications: <b>dystocia</b>, non-reassuring fetal status, malpresentation (breech, transverse), <b>previa</b>, cord prolapse, active HSV, prior classical incision, some multiple pregnancies. <b>Diabetes alone isn't</b>; suspected macrosomia (e.g., EFW > 4.5 kg in a diabetic mother) may be.");

  /* ---------------------------------------------------- 6.6 Hemorrhagic shock */
  qb(HS, "#lethal-triad", ["hippo-repro-Q86", "HippoNotes"],
    "Which form the 'lethal triad' in hemorrhagic shock? <i>(Select all that apply.)</i>",
    ["Acidosis", "Hypothermia", "Coagulopathy", "Hyperthermia", "Hypokalemia"],
    [0, 1, 2],
    "<b>Acidosis</b> (hypoperfusion, lactate), <b>hypothermia</b> (impairs clotting enzymes) and <b>coagulopathy</b> (consumption plus dilution from crystalloid) each worsen the others. Prevent them: control the bleeding, <b>warm</b> fluids and blankets, early <b>blood products</b> in balanced ratios (massive transfusion protocol), limit crystalloid, give TXA, replace fibrinogen and calcium.");

  qb(HS, "#management", ["hippo-repro-Q87", "HippoNotes"],
    "Which is <b>not</b> appropriate in a woman in active hemorrhagic shock?",
    ["Start a full-liquid diet to replace fluids", "Call for help and activate the massive hemorrhage protocol", "Two large-bore IVs, CBC, crossmatch, coagulation including fibrinogen, lactate", "Foley catheter to monitor urine output", "Find and control the source"],
    0,
    "She should be <b>NPO</b> (she may need the OR). Resuscitate: ABCs, call for help, two large-bore IVs, bloodwork (CBC, crossmatch, coagulation, fibrinogen, lytes, creatinine, lactate), warmed fluids and blood, Foley (urine output reflects perfusion), and <b>source control</b>, treating the cause (e.g., the 4 Ts in PPH).");

  /* ---------------------------------------------------- 6.7 Neonatal care */
  qb(NC, "#hypoglycemia", ["module-repro-Q77", "Module case"],
    "A 12-hour-old infant of a diabetic mother (3,989 g) has two glucose readings of 2.3 mmol/L, is jittery, and can't latch or suck. What is the next step?",
    ["IV dextrose, and recheck glucose in 30 minutes", "Formula by NG and recheck", "Dextrose gel and breastfeeding only", "Lactation consultation", "Recheck in 4 hours"],
    0,
    "Infants of diabetic mothers are <b>hyperinsulinemic</b> (fetal response to maternal hyperglycemia) and drop their glucose after birth. <b>Symptomatic</b> hypoglycemia (jitteriness, poor feeding, lethargy, seizures), or a baby who can't feed, needs <b>IV dextrose</b>. Asymptomatic babies who can feed: feed ± dextrose gel and recheck.");

  qb(NC, "#apgar", ["workbook-repro-Q122", "Workbook · Reproduction"],
    "What is the main purpose of the Apgar score?",
    ["To describe the newborn's condition and response to resuscitation at 1 and 5 minutes (not to decide whether to start it)",
     "To predict future IQ",
     "To diagnose birth asphyxia",
     "To predict long-term neurological outcome",
     "To determine gestational age"],
    0,
    "Apgar (heart rate, respiratory effort, tone, reflex irritability, colour; 0–2 each) summarizes condition and the <b>response to resuscitation</b>. Resuscitation decisions follow NRP and start immediately based on breathing, tone and heart rate, without waiting for the 1-minute score. A low 5-minute score correlates loosely with outcome but isn't diagnostic of asphyxia.");

  /* ---------------------------------------------------- 6.8 Postpartum care */
  qb(PP, "#mood", ["workbook-repro-Q116", "Workbook · Reproduction"],
    "Which statement about postpartum 'blues' is true?",
    ["They're common (up to ~85%), start in the first days, and resolve on their own within about 2 weeks",
     "They usually start 2–4 weeks after delivery",
     "They affect about 15% of women",
     "They often involve suicidal thoughts and disinterest in the baby",
     "They need antidepressants"],
    0,
    "<b>Blues</b>: tearfulness, mood lability and anxiety peaking ~day 3–5, self-limited within 2 weeks; support and sleep. <b>Postpartum depression</b> (10–20%): symptoms > 2 weeks or severe; screen (EPDS, PHQ-9), and treat with therapy ± SSRI (sertraline is compatible with breastfeeding). <b>Psychosis</b> (1–2/1,000): confusion, delusions, risk to self or baby; an emergency.");

  qb(PP, "#mood", ["reviews-repro-Q39", "Written from review slides"],
    "A mother is tearful, irritable and sleeping poorly 4 days after birth but bonding well. Which feature would make it postpartum depression rather than blues?",
    ["Symptoms lasting more than 2 weeks (or severe symptoms at any point)", "Onset on day 3–5", "Mood lability", "Poor sleep in the first week", "It's her first baby"],
    0,
    "Duration and severity separate them: blues settle within ~2 weeks; persistent or severe symptoms (anhedonia, guilt, hopelessness, thoughts of self-harm, inability to function) = <b>depression</b>. Risk factors: previous depression, poor support, adverse life events, complicated birth. Always ask about suicidal or infanticidal thoughts.");

  qb(PP, "#complications", ["reviews-repro-Q38", "Written from review slides"],
    "On day 3 after an emergency cesarean, a woman has a temperature of 38.6 °C on two readings, uterine tenderness and foul lochia. She's stable. Diagnosis and treatment?",
    ["Postpartum endometritis: oral amoxicillin–clavulanate (IV clindamycin plus gentamicin if unwell)",
     "VTE: LMWH",
     "Delayed PPH: oxytocin",
     "Mastitis: cloxacillin",
     "UTI: nitrofurantoin"],
    0,
    "<b>Endometritis</b> is the commonest cause of puerperal fever, much more likely after a <b>non-elective cesarean</b> (polymicrobial). Mild: oral amoxicillin–clavulanate; moderate or severe: IV clindamycin + gentamicin (± ampicillin). Also consider the other fever sources: wound, breast, urine, lungs, VTE.");

  qb(PP, "#complications", ["workbook-repro-Q125", "Workbook · Reproduction"],
    "Four days after a vaginal birth, a woman is soaking 2 pads an hour with clots. No fever. The uterus is tender and enlarged to the umbilicus. Most likely cause and first test?",
    ["Retained placental tissue: pelvic ultrasound, then evacuation",
     "Endometritis: antibiotics only",
     "Atony from a full bladder",
     "Cervical laceration",
     "Normal lochia"],
    0,
    "<b>Secondary (delayed) PPH</b> (24 h to 12 weeks) is mostly <b>retained products</b> and/or <b>endometritis</b>. A bulky uterus that hasn't involuted (at the umbilicus on day 4) with heavy clots and no fever points to retained tissue → <b>ultrasound</b>, uterotonics, and evacuation (with antibiotics if infection is suspected).");

  qb(PP, "#perineum", ["hippo-repro-Q70", "HippoNotes"],
    "Which postpartum advice is correct?",
    ["Sitz baths can soothe perineal tears",
     "Contraception isn't needed while breastfeeding",
     "Rectal suppositories are fine after a 4th-degree tear",
     "Golden yellow first milk is a sign of mastitis",
     "Intercourse can resume immediately after a 3rd-degree tear"],
    0,
    "Perineal care: ice early, then <b>sitz baths</b>, analgesia and stool softeners. Avoid anything <b>per rectum</b> after 3rd or 4th degree tears. Colostrum is golden yellow and normal. Breastfeeding is <b>not</b> reliable contraception unless all LAM criteria are met, so plan contraception before discharge.");

  qb(PP, "#sleep", ["hippo-repro-Q71", "HippoNotes"],
    "Two days after an uncomplicated birth, Pam feels drained and slept poorly. Which statement is <b>not</b> true?",
    ["She's in a hyperestrogenic state that is causing her insomnia",
     "Weepiness and irritability in the next few days are common ('blues')",
     "Dim lights during night feeds can limit sleep disruption",
     "Sleep disruption is a normal part of adjusting to a newborn",
     "She should seek help if low mood persists beyond 2 weeks"],
    0,
    "After the placenta is delivered, estrogen and progesterone <b>fall abruptly</b> (a <b>hypoestrogenic</b> state, prolonged by breastfeeding through prolactin), which contributes to mood changes, vaginal dryness and hot flushes postpartum.");

  qb(PP, "#reproductive", ["hippo-repro-Q75", "HippoNotes"],
    "Which statement about breastfeeding is <b>false</b>?",
    ["Breastfeeding is a reliable contraceptive for any breastfeeding woman",
     "Exclusive breastfeeding is recommended for about the first 6 months",
     "Colostrum provides passive immunity",
     "Breastfeeding has long-term health benefits for mother and baby",
     "Breastfeeding helps uterine involution"],
    0,
    "The <b>lactational amenorrhea method</b> is effective only if all three hold: <b>exclusive</b> (or near-exclusive) breastfeeding day and night, <b>amenorrhea</b>, and baby <b>under 6 months</b>. Otherwise, use contraception (progestin-only or IUD; avoid estrogen early). Suckling releases oxytocin, which contracts the uterus.");

  /* ---------------------------------------------------- 6.9 Lactation */
  qb(LAC, "#physiology", ["reviews-repro-Q41", "Written from review slides"],
    "On day 5 postpartum, a mother asks what now controls how much milk she makes.",
    ["Milk removal from the breast (supply and demand)", "The fall in progesterone", "Her estrogen level", "Breast size", "Oxytocin alone"],
    0,
    "Lactogenesis II (milk 'coming in' ~day 2–4) is triggered <b>hormonally</b> by the progesterone fall after placental delivery, with prolactin. After that, supply is <b>autocrine</b>: <b>frequent, effective removal</b> drives production (feedback inhibitor of lactation, prolactin receptors). Poor latch or infrequent feeding lowers supply. Lactation needs <b>prolactin, oxytocin and removal</b>.");

  qb(LAC, "#physiology", ["hippo-repro-Q74", "HippoNotes"],
    "Which statement about lactation hormones is true?",
    ["Suckling suppresses hypothalamic dopamine, so prolactin rises",
     "Nipple stimulation inhibits oxytocin",
     "The posterior pituitary releases prolactin",
     "The anterior pituitary releases oxytocin",
     "Placental delivery raises progesterone, which starts milk production"],
    0,
    "<b>Prolactin</b> (anterior pituitary, normally restrained by <b>dopamine</b>) drives milk <b>synthesis</b>; suckling lowers dopamine and raises prolactin. <b>Oxytocin</b> (posterior pituitary) drives <b>let-down</b> (myoepithelial contraction) and can be triggered by the baby's cry. That's why dopamine agonists (cabergoline) suppress lactation, and dopamine antagonists (domperidone) increase it.");

  qb(LAC, "#safety", ["hippo-repro-Q76", "HippoNotes"],
    "Which contraceptive is best avoided in the early weeks of breastfeeding?",
    ["Combined (estrogen-containing) pill", "Progestin-only pill", "DMPA", "LNG-IUS", "Condoms"],
    0,
    "Estrogen can <b>reduce milk supply</b> and adds to the high early postpartum <b>VTE</b> risk, so <b>no estrogen in the first 21 days</b>. After that combined methods are allowed, but if supply is a worry, progestin-only, IUD and barrier methods are all compatible with breastfeeding (the evidence on estrogen and milk is weak).");

  qb(LAC, "#safety", ["workbook-repro-Q118", "Workbook · Reproduction"],
    "Which is a contraindication to breastfeeding?",
    ["Active maternal psychosis with risk to the baby (until stabilized)", "Smoking", "SSRI use", "An occasional alcoholic drink with appropriate timing", "Mastitis"],
    0,
    "True contraindications are few: <b>HIV in high-income settings</b> (where safe formula is available), untreated active TB (temporary), HTLV, some drugs (e.g., chemotherapy, radioactive isotopes), galactosemia in the baby, and situations that endanger the infant such as <b>active psychosis</b>. Smoking, SSRIs and mastitis aren't; advise on minimizing harm.");

  qb(LAC, "#troubleshooting", ["weekly-repro-Q3", "Weekly quiz"],
    "Cheyenne, 5 days postpartum, calls with a fever of 39.5 °C, chills and a red, swollen right breast that's larger than yesterday. What do you advise?",
    ["Keep feeding from both breasts, use warm compresses, and come to the ER now for assessment",
     "Stop breastfeeding to avoid passing on infection",
     "Feed from the left breast only and come in tomorrow",
     "Acetaminophen and reassurance only",
     "Bind the breasts and use ice"],
    0,
    "High fever and a rapidly enlarging breast need <b>same-day assessment</b>: mastitis (antibiotics) versus <b>abscess</b> (ultrasound and drainage), and to exclude other sources (endometritis). Continued feeding or pumping from both breasts helps drain the affected ducts, and the milk is safe for the baby.");

  qb(LAC, "#physiology", ["workbook-repro-Q78", "Workbook · Reproduction"],
    "Which hormone is <b>not</b> produced by the placenta?",
    ["Oxytocin", "hCG", "Progesterone", "Human placental lactogen", "Estrogen (estriol)"],
    0,
    "The placenta makes <b>hCG, progesterone, estrogens, hPL</b>, CRH, relaxin and more. <b>Oxytocin</b> is made in the hypothalamus and released from the <b>posterior pituitary</b>. hPL and progesterone drive the insulin resistance of late pregnancy (gestational diabetes); the progesterone drop after placental delivery triggers milk production.");
})();

/* ---------------------------------------------------- Week 6 · POM2 originals (written from the lecture pages) */
(function () {
  const SF = "w6-small-fetus", LB = "w6-labour-and-birth", AL = "w6-abnormal-labour", HS = "w6-hemorrhagic-shock",
        NC = "w6-neonatal-care", PP = "w6-postpartum-care", LAC = "w6-lactation";

  /* 6.2 The small fetus */
  qb(SF, "#management", null,
    "At 34 weeks, Ruth's fetus has an EFW at the 4th percentile, oligohydramnios, and raised umbilical artery resistance with end-diastolic flow still present. What is the plan?",
    ["Plan delivery now (oligohydramnios and abnormal Dopplers justify delivery between 32 and 37 weeks)", "Continue to 40 weeks with weekly SFH", "Bed rest and extra calories to allow catch-up growth", "Deliver only if end-diastolic flow becomes reversed", "Repeat a growth scan in 4 weeks"],
    0,
    "There's <b>no catch-up growth in utero</b>, so <b>delivery is the only cure</b>. Lecture rule: deliver at <b>≥ 37 weeks</b> with stable findings; at <b>32–37 weeks</b> with oligohydramnios or abnormal Dopplers; before 32 only for fetal distress (steroids ± magnesium as appropriate). Absent EDF ≈ 50% of the placental microvasculature lost; reversed ≈ 70%.");

  qb(SF, "#sga-vs-iugr", null,
    "Kim, 5'0\", whose partner is also small, has a fetus whose EFW has tracked along the 8th percentile on serial scans, with normal fluid and normal umbilical artery Doppler. What is the most likely explanation?",
    ["A constitutionally small, healthy fetus (SGA, not growth restriction)", "Severe placental insufficiency needing delivery now", "Aneuploidy until proven otherwise", "Congenital CMV", "A dating error, so change the due date"],
    0,
    "<b>SGA is a percentile</b> (< 10th); most SGA babies are just small. <b>IUGR</b> is a pathological <b>failure to reach growth potential</b>: falling across percentiles, oligohydramnios, abnormal Doppler. It can even happen above the 10th. Steady growth along a low curve with normal fluid and Doppler is reassuring, though growth surveillance continues. A due date set by an early scan never changes.");

  qb(SF, "#workup", null,
    "At 24 weeks, a fetus measures below the 1st percentile symmetrically, with polyhydramnios and a cardiac defect. Maternal BP is normal. Which investigations matter most?",
    ["Offer amniocentesis (karyotype or microarray) and test for congenital infection such as CMV", "Start low-dose ASA", "Deliver now", "Repeat the growth scan in 6 weeks only", "Maternal glucose tolerance test"],
    0,
    "<b>Early, severe, symmetric</b> growth restriction, especially with <b>anomalies or polyhydramnios</b>, points to an <b>intrinsic fetal</b> cause (aneuploidy such as trisomy 18, a syndrome, infection) rather than placental insufficiency, which typically comes later with oligohydramnios and abnormal umbilical artery Doppler.");

  /* 6.4 Labour and birth */
  qb(LB, "#monitoring", null,
    "On continuous monitoring, a woman on oxytocin has recurrent decelerations that start after the peak of each contraction and recover only after it ends. Baseline 150, minimal variability. What do they suggest, and what's the first response?",
    ["Late decelerations from uteroplacental insufficiency: intrauterine resuscitation (stop oxytocin, left lateral, IV bolus, vaginal exam) and plan delivery if they persist", "Early decelerations from head compression: no action", "Variable decelerations from cord compression only: reassure", "A normal tracing", "A sinusoidal pattern: immediate transfusion"],
    0,
    "<b>Early</b> decels mirror the contraction (head compression, benign). <b>Variable</b> decels are abrupt with variable timing (cord compression). <b>Late</b> decels lag the contraction (<b>uteroplacental insufficiency</b>), and with <b>reduced variability</b> they're worrying. Normal: baseline 110–160, variability 6–25, accelerations present.");

  qb(LB, "#stages", null,
    "A primip at 39 weeks has contractions every 5–7 minutes for 6 hours. The cervix is 3 cm and 50% effaced, unchanged over 2 hours; membranes intact; fetal heart normal; she's coping. What do you do?",
    ["She's in the latent phase: support her, encourage her to go home or walk, and give clear return instructions", "Admit and start oxytocin for failure to progress", "Amniotomy now", "Cesarean for dystocia", "Tocolysis"],
    0,
    "<b>Latent phase</b> (to ~4 cm) is slow and variable; dystocia is a diagnosis of the <b>active</b> phase. Early admission leads to more interventions. Return for regular strong contractions, ruptured membranes, bleeding or reduced fetal movement. Labour = regular contractions <b>with progressive cervical change</b>.");

  /* 6.5 Abnormal labour & PPH */
  qb(AL, "#four-ps", null,
    "A primip has been at 6 cm for 4 hours. Contractions are every 5–6 minutes and feel mild; membranes intact; fetal heart normal; vertex at 0 station, OA. Which 'P' is the likely problem and what's the fix?",
    ["Power: amniotomy, then oxytocin augmentation", "Passage: cesarean now", "Passenger: external cephalic version", "Psyche: sedation", "Placenta: ultrasound"],
    0,
    "<b>4 Ps</b>: <b>Power</b> (contractions: ARM and oxytocin), <b>Passage</b> (pelvis: can't change), <b>Passenger</b> (size, position, presentation: rotation, ECV; true CPD → cesarean), <b>Psyche</b> (continuous labour support helps). Infrequent, weak contractions with a well-positioned head = inadequate power. Dystocia is the #1 reason for cesarean.");

  qb(AL, "#preinduction", null,
    "At 41+3 weeks, a woman is booked for induction. The cervix is closed, long, firm and posterior (Bishop score 2). What comes first?",
    ["Cervical ripening (prostaglandin such as Cervidil or misoprostol, or a Foley balloon)", "Amniotomy", "High-dose oxytocin", "Cesarean for an unfavourable cervix", "Wait until 43 weeks"],
    0,
    "<b>Bishop < 6</b> = unfavourable cervix → <b>ripen first</b> (prostaglandins or a balloon catheter), then <b>ARM</b> once the cervix allows (~2 cm), then <b>oxytocin</b>. Induction has the same contraindications as labour. Post-dates (≥ 41 weeks) is a standard indication because stillbirth risk rises.");

  qb(AL, "#tolac", null,
    "Which situations rule out a trial of labour after cesarean (TOLAC)? <i>(Select all that apply.)</i>",
    ["A previous classical (vertical upper-segment) cesarean", "A previous T-shaped uterine incision", "A previous uterine rupture", "One previous low transverse cesarean 3 years ago", "Delivery in a hospital with an OR available within 30 minutes"],
    [0, 1, 2],
    "TOLAC suits <b>1–2 prior low transverse</b> cesareans, an interval <b>> 18 months</b>, and a hospital able to start a cesarean <b>within 30 minutes</b>. Never after a <b>classical or T incision</b> or prior rupture (high rupture risk). Success 60–80%; the first sign of rupture is usually an <b>abnormal fetal heart rate</b>.");

  qb(AL, "#pph-management", null,
    "Twenty minutes after delivery, a woman with pre-eclampsia (on labetalol) has ongoing atonic bleeding despite oxytocin and bimanual massage. Which second-line uterotonic should be avoided?",
    ["Ergonovine (an ergot: worsens hypertension)", "Carboprost", "Misoprostol", "Tranexamic acid", "Carbetocin given earlier as prophylaxis"],
    0,
    "Second-line uterotonics and their main contraindications: <b>ergonovine → hypertension</b> (and pre-eclampsia), interacting HIV drugs, macrolides; <b>carboprost (PGF2α) → asthma</b> (bronchospasm); <b>misoprostol</b> → fever and shivering. Add <b>TXA</b> early. Escalate to balloon tamponade, embolization or surgery if bleeding continues.");

  /* 6.6 Hemorrhagic shock */
  qb(HS, "#special", null,
    "An hour after a vaginal birth, Ana says she feels fine. HR 124, BP 108/84, RR 24; she seems anxious; the nurse calls the bleeding 'about average'. What do you do?",
    ["Treat it as significant hemorrhage: call for help, two large-bore IVs, bloods and crossmatch, a Foley, and look for the cause", "Reassure her: her BP is normal", "Recheck vitals in 4 hours", "Give a sedative for anxiety", "Encourage oral fluids and ambulation"],
    0,
    "Young, healthy postpartum women <b>compensate</b> (blood volume expanded in pregnancy), so <b>hypotension is a late sign</b>. Tachycardia, tachypnea, anxiety and a <b>narrowed pulse pressure</b> put her around <b>class II (15–30%, 750–1,500 mL)</b> while BP is still normal. Visual estimates of blood loss underestimate it.");

  qb(HS, "#stages", null,
    "A woman bleeding from a ruptured ectopic has HR 132, BP 82/50, RR 32, urine output 10 mL/h, and she's confused. Roughly what fraction of her blood volume has she lost?",
    ["About 30–40% (class III): she needs blood, not just crystalloid", "Under 15% (class I)", "15–30% (class II)", "Over 60%", "No significant loss: she's vasovagal"],
    0,
    "<b>Class III</b>: 30–40% (1.5–2 L), pulse 120–140, <b>BP decreased</b>, RR 30–40, urine 5–15 mL/h, anxious or confused. Class IV (> 40%): pulse > 140, negligible urine, lethargic. Once BP falls, compensation has failed: blood products (± massive transfusion protocol) and <b>source control</b> (here, the OR).");

  qb(HS, "#management", null,
    "During resuscitation for massive obstetric hemorrhage, which test best tells you whether a consumptive coagulopathy (DIC) is developing?",
    ["Fibrinogen", "Hemoglobin", "Creatinine", "Lactate", "Platelet count alone"],
    0,
    "Order <b>CBC, group and crossmatch, INR/PTT, fibrinogen and creatinine</b>. <b>Fibrinogen</b> falls early in obstetric DIC (abruption, massive PPH), and a low value predicts severe hemorrhage. Replace it (cryoprecipitate or concentrate), not just red cells and crystalloid. Pregnancy fibrinogen is normally high (4–6 g/L), so a 'normal' non-pregnant value is already low.");

  qb(HS, "#lethal-triad", null,
    "Two hours into a massive transfusion for PPH, a woman's temperature is 34.6 °C, pH 7.18, and her oozing has worsened. Which intervention addresses the triad driving this?",
    ["Warm her (warmed fluids and blood via a rapid warmer, forced-air blanket), correct perfusion, and give balanced products including fibrinogen", "More room-temperature saline", "Stop all blood products", "Sodium bicarbonate alone", "Cooling to protect the brain"],
    0,
    "<b>Acidosis + hypothermia + coagulopathy</b> each worsen the others: clotting enzymes fail in acid (factor VIIa loses ~90% activity at pH 7.0) and below <b>35 °C</b>, and crystalloid and red cells alone <b>dilute</b> clotting factors. Warm, perfuse and replace factors at the same time while controlling the source.");

  qb(HS, "#management", null,
    "During resuscitation for hemorrhagic shock, which bedside measure best shows, hour by hour, whether resuscitation is working?",
    ["Urine output through a Foley catheter (aim > 30 mL/h)", "Skin colour", "Patient-reported thirst", "Oxygen saturation", "A single hemoglobin value"],
    0,
    "The kidneys are underperfused in shock, so <b>hourly urine output</b> is the running score of end-organ perfusion, alongside HR, BP, mental status and lactate. A single hemoglobin lags behind acute bleeding (no time to equilibrate), so repeat bloodwork whenever her status changes.");

  /* 6.7 Neonatal care */
  qb(NC, "#transition", null,
    "A term baby is born limp and apneic. After drying and stimulating for 30 seconds, she's still not breathing; heart rate about 80. What is the next step?",
    ["Positive-pressure ventilation with bag and mask", "Chest compressions", "IV epinephrine", "Wait for the 1-minute Apgar score", "Naloxone"],
    0,
    "Newborns who need help almost always have a <b>breathing</b> problem, so <b>ventilation comes first</b>. Start PPV if <b>apneic, gasping or HR < 100</b> in the first minute; a rising heart rate is the best sign it's working. <b>Compressions only if HR stays < 60</b> after 30 s of effective ventilation. Don't wait for the Apgar: it records the transition, it doesn't direct it.");

  qb(NC, "#apgar", null,
    "At 1 minute, a baby is blue all over, has a heart rate of 80, grimaces to suction, has some limb flexion, and has slow, irregular breathing. What is the Apgar score?",
    ["4", "2", "6", "7", "5"],
    0,
    "Appearance: blue all over <b>0</b> (pink with blue extremities = 1). Pulse: < 100 = <b>1</b> (> 100 = 2). Grimace: grimace only = <b>1</b> (cry = 2). Activity: some flexion = <b>1</b> (active = 2). Respiration: slow, irregular = <b>1</b> (good cry = 2). Total <b>4</b>. HR < 100 already means bag-mask ventilation, whatever the score.");

  qb(NC, "#bilirubin", null,
    "An 18-hour-old baby is visibly jaundiced. Mother is O-positive; baby is A-positive. What do you do?",
    ["Treat it as pathological: total and direct bilirubin, DAT, CBC with smear and reticulocytes, and plot on the phototherapy chart", "Reassure: physiological jaundice", "Encourage breastfeeding and recheck at the 1-week visit", "Stop breastfeeding for 48 hours", "Sunlight exposure at home"],
    0,
    "<b>Jaundice in the first 24 hours is always pathological</b>, most often <b>hemolysis</b>; ABO incompatibility (O mother, A or B baby) is classic. A positive DAT confirms immune hemolysis. Treat with <b>phototherapy</b> (blue light turns bilirubin into water-soluble isomers, e.g. lumirubin), <b>IVIG</b> for immune hemolysis, and exchange transfusion if severe, to prevent bilirubin encephalopathy and <b>kernicterus</b>.");

  qb(NC, "#bilirubin", null,
    "A 3-week-old term baby is still jaundiced. Stools are pale and urine is dark; total bilirubin 150 µmol/L, direct 60 µmol/L. What does this need?",
    ["Urgent evaluation for cholestasis, including biliary atresia (a conjugated hyperbilirubinemia)", "More breastfeeding and reassurance", "Phototherapy at home", "Switch to soy formula", "No action: breast milk jaundice"],
    0,
    "Red flags: <b>direct bilirubin > 30 µmol/L or > 20% of total</b> (here 40%), <b>jaundice > 2 weeks</b> in a term baby, pale stools and dark urine, or an unwell baby. That's a <b>biliary excretion</b> problem, not physiological or breast milk jaundice. Biliary atresia surgery (Kasai) works best when done early, so delays matter. Phototherapy doesn't treat conjugated hyperbilirubinemia.");

  qb(NC, "#warm", null,
    "A baby is born at 28 weeks weighing 1,050 g. Which approach best prevents hypothermia?",
    ["Put the baby straight into a plastic bag or wrap under a radiant warmer in a warm room, then into a servo-controlled humidified incubator", "Dry vigorously and swaddle in cotton blankets only", "Bathe immediately in warm water", "Skin-to-skin only, no other measures", "Let the baby cool to reduce metabolic demand"],
    0,
    "Babies lose heat by <b>conduction, convection, evaporation and radiation</b> and <b>can't shiver</b>; very preterm babies have almost no fat (~1% of body weight at 27 weeks) and thin skin. Use a <b>plastic wrap or bag</b>, radiant warmer, hot room, then a <b>servo-controlled incubator (< 1,500 g)</b> with high humidity. Cold stress causes respiratory distress and burns glucose.");

  qb(NC, "#hypoglycemia", null,
    "A term, small-for-gestational-age baby (EFW 6th percentile) is feeding well and has no symptoms. Glucose 2 hours after the first feed is 2.2 mmol/L. Next step?",
    ["Feed again (breast ± expressed milk or dextrose gel) and recheck; IV dextrose if it stays low on repeat checks or symptoms appear", "Immediate IV dextrose bolus", "Glucagon IM", "No action: the baby is asymptomatic", "Stop feeds and check insulin"],
    0,
    "Screen asymptomatic at-risk babies (<b>IDM, LGA, SGA, preterm</b>) 2 h after the first feed. SGA babies have little glycogen and fat. Target <b>≥ 2.6 mmol/L</b> in the first 72 h (3.3 after). <b>Asymptomatic and feeding</b>: feed and recheck; IV dextrose after 'three strikes' or any symptoms (jitteriness, lethargy, poor feeding, seizures).");

  /* 6.8 Postpartum care */
  qb(PP, "#complications", null,
    "Five days after an emergency cesarean, a breastfeeding mother has a swollen, tender left calf. Compression ultrasound confirms a DVT. Treatment?",
    ["Low-molecular-weight heparin (compatible with breastfeeding)", "Systemic thrombolysis", "Rivaroxaban, as the preferred agent while breastfeeding", "Aspirin only", "Bed rest only"],
    0,
    "VTE risk is <b>highest postpartum</b> (especially after cesarean, PPH, infection, immobility) and causes ~9% of maternal deaths. <b>LMWH</b> is the standard treatment and is compatible with breastfeeding (warfarin also is). DOACs are generally avoided while breastfeeding. Estrogen contraception is out.");

  qb(PP, "#reproductive", null,
    "Two weeks after an uncomplicated vaginal birth, a non-breastfeeding mother wants the combined pill and asks when she'll ovulate. What do you tell her?",
    ["Ovulation can come before her first period; she can start combined hormonal contraception from 3 weeks (no estrogen in the first 21 days), and use a progestin-only or barrier method until then", "She can't ovulate until her first period, so there's no rush", "The combined pill can start immediately after birth", "She must wait 6 months for any hormonal method", "Only an IUD is allowed postpartum"],
    0,
    "Without breastfeeding, ovulation can return within weeks, <b>before the first period</b>. <b>No estrogen before 21 days</b> because of the high early postpartum VTE risk. Progestin-only methods, barrier methods, and an IUD (immediately or at ~6 weeks) are options. Plan contraception before discharge.");

  qb(PP, "#mood", null,
    "Five weeks after birth, Leila has low mood most days, can't enjoy her baby, sleeps poorly even when the baby sleeps, and feels guilty; EPDS 17. No suicidal or harmful thoughts. She's breastfeeding. Best management?",
    ["Postpartum depression: psychotherapy plus an SSRI such as sertraline, while continuing breastfeeding, and close follow-up", "Postpartum blues: reassure", "Stop breastfeeding so she can take any antidepressant", "Postpartum psychosis: admit", "Benzodiazepines nightly"],
    0,
    "<b>Postpartum depression</b> (10–20%, within 6 months) means more than 2 weeks of symptoms or severe ones; screen with EPDS (and PHQ-2, GAD-2). A prior history gives ~30% recurrence. <b>Sertraline</b> is well studied and compatible with breastfeeding. Always ask about thoughts of harming herself or the baby.");

  qb(PP, "#mood", null,
    "On day 6 postpartum, Jo's partner brings her in: she hasn't slept in 3 days, is confused, and says the baby has been 'switched' and is evil. What is the management?",
    ["Postpartum psychosis: a psychiatric emergency; urgent admission, don't leave her alone with the baby, and assess for bipolar disorder", "Postpartum blues: rest and reassurance", "Start an SSRI and review in 2 weeks", "Sleep hygiene advice", "Outpatient counselling"],
    0,
    "<b>Postpartum psychosis</b> (1–4/1,000) starts in the first days to weeks: confusion, delusions (often about the baby), hallucinations, severe insomnia. It's an <b>emergency</b> with risk of suicide and infanticide. Strongly linked to <b>bipolar disorder</b>. Admit (ideally a mother–baby unit) and start antipsychotics or mood stabilizers.");

  /* 6.9 Lactation */
  qb(LAC, "#troubleshooting", null,
    "On day 3, a breastfeeding mother has cracked, bleeding nipples and toe-curling pain throughout each feed. The baby seems hungry often. Most likely cause and fix?",
    ["A shallow (nipple-only) latch: correct the latch (mouth wide, lips flanged, chin on the breast, mostly areola) with lactation support", "Mastitis: antibiotics", "Thrush in the baby: nystatin for both", "Low prolactin: domperidone", "Stop breastfeeding and switch to formula"],
    0,
    "A good latch is on the <b>areola</b>, not the nipple: wide mouth, flanged lips, chin on the breast, full cheeks. A nipple-only latch is <b>painful and ineffective</b> (poor milk removal → low supply → hungry baby). See a lactation consultant early. Low supply is the commonest reason women stop.");

  qb(LAC, "#troubleshooting", null,
    "On day 4, both of a mother's breasts are hard, full, warm and uncomfortable, and the baby struggles to latch. She's afebrile, with no focal redness. What is it and how is it managed?",
    ["Engorgement: frequent feeding or expressing (soften the areola first), cold compresses and analgesia", "Bilateral mastitis: IV antibiotics", "Breast abscess: drainage", "Stop feeding until it settles", "Bind the breasts tightly"],
    0,
    "<b>Engorgement</b> (milk coming in plus interstitial edema) is bilateral, diffuse, and without significant fever. Treat it with <b>frequent, effective milk removal</b>; hand-express a little to soften the areola so the baby can latch; cold packs and NSAIDs. <b>Mastitis</b> is a unilateral, red, tender wedge with fever > 38.5 °C: antibiotics and keep feeding.");

  qb(LAC, "#supply", null,
    "After a stillbirth at 38 weeks, a mother asks whether anything can stop her milk from coming in. What do you offer?",
    ["Cabergoline (a dopamine agonist) as a single dose, plus supportive measures", "Domperidone", "Bromocriptine for 6 months", "High-dose estrogen", "Nothing can be done"],
    0,
    "<b>Dopamine</b> inhibits prolactin, so a <b>dopamine agonist</b> (cabergoline 1 mg once) suppresses lactation. Domperidone, a dopamine <b>antagonist</b>, does the opposite and is used to boost supply. For mothers who are weaning a living baby, taper gradually rather than stopping abruptly (engorgement, mastitis risk).");
})();

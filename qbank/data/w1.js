/* Week 1 · Endocrinology. Questions adapted from the class qbank (src = their id)
   and POM2 originals (src = null). Answer is written first; options shuffle. */
(function () {
  const L = {
    path: "w1-diabetes-pathophysiology-t1dm-t2dm",
    t1: "w1-t1dm-management",
  };

  /* ---------------------------------------------------- 1.1 Pathophysiology */
  qb(L.path, "#t2dm", ["module-endo-Q72", "Slide concept check"],
    "A 52-year-old man has had type 2 diabetes for 4 years. You are explaining why his fasting glucose stays high. Which change in his physiology is <b>correctly</b> described?",
    ["His kidneys reabsorb more filtered glucose because SGLT2 expression has risen",
     "His GIP levels have fallen, so his meals no longer trigger an incretin response",
     "His GLP-1 levels are high, which is why he feels full quickly",
     "His liver makes less glucose overnight to compensate for insulin resistance",
     "His beta cells secrete more glucagon to protect against hypoglycemia"],
    0,
    "In T2DM <b>SGLT2 is upregulated</b>, raising the renal threshold so the kidney reclaims glucose exactly when it shouldn't. That is the defect SGLT2 inhibitors target. The incretin trap: <b>GLP-1 falls but GIP is normal or high</b>; what's lost is the beta cell's <i>response</i> to GIP. Hepatic glucose output <i>rises</i> (the main driver of fasting hyperglycemia), and glucagon comes from alpha cells, where it's also inappropriately high.");

  qb(L.path, "#t2dm", ["module-endo-Q75", "Slide concept check"],
    "A 47-year-old woman's fasting glucose is 6.4 mmol/L. She asks whether her pancreas is 'still fine' since she doesn't have diabetes yet. Which statement is most accurate?",
    ["Most of her beta-cell function has probably already been lost",
     "Beta-cell function is normal in prediabetes; the problem is purely insulin resistance",
     "Her beta cells are hypersecreting and will stay that way for decades",
     "Beta-cell loss only begins once the A1c reaches 6.5%",
     "Her result reflects stress hyperglycemia and says nothing about her beta cells"],
    0,
    "By the time someone reaches the prediabetes range, roughly <b>80% of beta-cell function is already gone</b>. Prediabetes isn't an early warning before damage; most of the damage is done, which is the argument for intervening at this stage (lifestyle, as in the DPP). Insulin resistance is part of it, but it's not the whole story.");

  qb(L.path, "#t1dm", ["new-endo-Q59", "Module case"],
    "Dev, 10, has a brother with type 1 diabetes. Screening shows anti-GAD and anti-insulin antibodies. His fasting glucose is 6.5 mmol/L and he has no symptoms. What stage of type 1 diabetes is he in?",
    ["Stage 2", "Stage 1", "Stage 3", "He does not have type 1 diabetes until he is symptomatic", "Stage 1 if his A1c is under 6.5%, otherwise stage 3"],
    0,
    "Every stage has beta-cell autoimmunity; glucose and symptoms separate them. <b>Stage 1</b> = antibodies + normoglycemia. <b>Stage 2</b> = antibodies + dysglycemia, still presymptomatic. <b>Stage 3</b> = symptomatic diabetes. A fasting glucose of 6.5 is in the impaired-fasting range (dysglycemia) without symptoms, so stage 2. His <b>two</b> antibodies matter too: the number of antibodies, not just their presence, drives how fast he progresses.");

  qb(L.path, "#t1dm", ["new-endo-Q40", "DSSG cases"],
    "Agnes, 32, a commercial pilot, has 3 weeks of thirst and polyuria. Random glucose is 25.4 mmol/L and urine shows 3+ glucose with no ketones. She has a normal BMI. Which results would most support type 1 rather than type 2 diabetes?",
    ["Positive pancreatic autoantibodies with a low C-peptide",
     "A high C-peptide with a high fasting insulin",
     "An A1c above 10%",
     "Absence of urine ketones at presentation",
     "A 2-hour OGTT glucose above 11.1 mmol/L"],
    0,
    "Type 1 is autoimmune beta-cell loss, so look for <b>autoantibodies</b> (GAD, IA-2, ZnT8, insulin) and a <b>low C-peptide</b> (C-peptide is co-secreted with endogenous insulin, so it falls with beta-cell mass). High C-peptide and insulin point to insulin resistance (T2DM). A very high A1c and an OGTT confirm diabetes but not its type. Why it matters for her: type 1 means insulin, which has direct occupational consequences for a pilot.");

  qb(L.path, "#t1dm", ["hippo-endo-Q1", "HippoNotes"],
    "A 7-year-old's sister has type 1 diabetes. Her parents ask what her islet autoantibody result means. She is positive for <b>one</b> antibody (anti-GAD) and her glucose is normal. What is the best counselling?",
    ["A single antibody adds little risk; risk climbs steeply with each additional antibody",
     "She has stage 1 type 1 diabetes and needs insulin now",
     "One positive antibody means she will certainly develop type 1 within a year",
     "Anti-GAD is a marker of type 2 diabetes, so her type 1 risk is unchanged",
     "Antibodies only appear after diagnosis, so this is a false positive"],
    0,
    "Autoantibodies (insulin, GAD, IA-2, ZnT8) mark beta-cell autoimmunity, but <b>the count carries the risk</b>: one antibody barely raises it above baseline, while multiple antibodies predict fast progression. Stage 1 is defined as <i>two or more</i> antibodies with normoglycemia; nobody gets insulin before symptoms or dysglycemia.");

  /* ---------------------------------------------------- 1.2 T1DM */
  qb(L.t1, "#diagnosis", ["module-endo-Q3", "Elentra module"],
    "Which patient meets the diagnostic criteria for diabetes today?",
    ["Peter, 12, has 2 weeks of thirst and new bedwetting; random plasma glucose 14.7 mmol/L",
     "Tony, 45, asymptomatic, has a random plasma glucose of 9.7 mmol/L on screening bloodwork",
     "Natasha, 30, has a 2-hour 75 g OGTT glucose of 8.4 mmol/L",
     "Bruce, 19, is obese with acanthosis nigricans on his neck",
     "Steve, 60, febrile with pneumonia, has a single random glucose of 12.0 mmol/L and no prior symptoms"],
    0,
    "With classic symptoms, <b>one random glucose ≥ 11.1</b> is diagnostic. Tony is below 11.1 (and asymptomatic people need a second abnormal test). Natasha's 8.4 is impaired glucose tolerance (7.8–11.0), not diabetes. Acanthosis is a risk marker, not a criterion. Steve's value during acute illness with no osmotic symptoms can be stress hyperglycemia: repeat it once he's well.");

  qb(L.t1, "#diagnosis", ["workbook-endo-Q53", "Workbook · Endocrine"],
    "An 18-year-old has 2 months of thirst, polyuria and fatigue. His random plasma glucose is 10.9 mmol/L. What do you tell him?",
    ["We suspect diabetes but can't confirm it yet; you need more testing",
     "You have type 1 diabetes and need to start insulin today",
     "You don't have diabetes because your glucose is under 11.1, so we'll look elsewhere",
     "A random glucose can never be used for diagnosis; we only use fasting values",
     "You have prediabetes and should start metformin"],
    0,
    "Symptoms plus a random glucose <b>≥ 11.1</b> diagnoses diabetes; 10.9 just misses, but with classic symptoms diabetes is still very much on the table. Confirm with a fasting glucose, A1c or OGTT. Random glucose <i>is</i> a valid criterion when symptomatic, and 'prediabetes' isn't defined by random values.");

  qb(L.t1, "#diagnosis", ["module-endo-Q2", "Module case"],
    "Carol, 15, has 3 weeks of polyuria and polydipsia and has vomited four times today. She is dehydrated and weak with a normal GCS. Which initial investigations tell you whether she is in DKA?",
    ["Random blood glucose, blood gas, urine or serum ketones",
     "Fasting blood glucose, blood gas, serum electrolytes",
     "Random blood glucose, A1c, blood gas",
     "Oral glucose tolerance test, blood gas, A1c",
     "Fasting blood glucose, urinalysis, electrolytes"],
    0,
    "DKA is a triad: <b>hyperglycemia, acidosis, ketosis</b>. A random glucose (she's symptomatic, so it diagnoses diabetes), a <b>blood gas</b> for acidosis and <b>ketones</b> cover all three. A vomiting child can't wait for a fasting sample, and A1c or an OGTT adds nothing in an acute presentation.");

  qb(L.t1, "#insulin-regimens", ["module-endo-Q4", "Module case"],
    "Loki, 14, has had type 1 diabetes for 8 years. He takes NPH at breakfast and bedtime with rapid-acting insulin at breakfast and supper, and checks his glucose 4 times a day. His A1c is 8.4%. Which statement about his control is correct?",
    ["His A1c target is under 7.5% to reduce long-term complications",
     "A hypoglycemic episode once a day is acceptable if his A1c is at target",
     "His A1c only needs checking once a year",
     "His pre-meal target is 6–12 mmol/L to avoid lows",
     "His target A1c is under 9% because he is an adolescent"],
    0,
    "The lecture's target for under-18s is <b>A1c &lt; 7.5%</b> (fasting/pre-meal 4–8, post-meal 5–10 mmol/L); the DCCT is the reason tighter control matters. Daily lows are never acceptable: they mean the regimen needs changing. A1c reflects ~3 months and is checked about every 3 months.");

  qb(L.t1, "#insulin-regimens", ["module-endo-Q5", "Module case"],
    "Same patient: Loki, 14, on twice-daily NPH plus rapid-acting insulin at breakfast and supper, A1c 8.4%. What is the best change?",
    ["Move to basal-bolus injections or an insulin pump",
     "Give his rapid-acting insulin after meals so it matches what he actually ate",
     "Inject only into the abdomen for consistent absorption",
     "Eat small frequent meals to blunt glucose excursions",
     "No change: 8.4% is acceptable for a teenager"],
    0,
    "The DCCT showed <b>intensive insulin therapy</b> (basal-bolus / 4 injections, or a pump) lowers A1c and microvascular complications. Pumps add precise dosing and fewer lows. Bolus insulin goes in <i>before</i> meals; site rotation matters, but site choice won't fix an A1c of 8.4.");

  qb(L.t1, "#insulin-regimens", ["hippo-endo-Q3", "HippoNotes"],
    "Mark, 18, was just diagnosed with type 1 diabetes. He works rotating factory shifts and often skips meals. Which regimen best protects him from hypoglycemia?",
    ["One long-acting basal dose plus rapid-acting insulin before each meal he actually eats",
     "Twice-daily premixed insulin at fixed times",
     "NPH at breakfast and bedtime with rapid-acting at breakfast and supper",
     "Two long-acting doses plus two fixed rapid-acting doses",
     "Long-acting insulin alone"],
    0,
    "Basal-bolus separates the two jobs: the basal dose covers between-meal needs, and each bolus is tied to a meal. <b>If he skips the meal, he skips that bolus</b>. Premixed and NPH regimens have fixed peaks that need food on schedule, which is exactly what he can't guarantee. Basal alone leaves meals uncovered.");

  qb(L.t1, "#acute-complications", ["reviews-endo-Q43", "Written from review slides"],
    "A 15-year-old with type 1 diabetes is found by his mother sweaty and too drowsy to swallow safely. His meter reads 2.1 mmol/L. What should she give?",
    ["Glucagon (IM, SC or intranasal)",
     "Orange juice poured into his mouth",
     "Two glucose tablets to chew",
     "An extra dose of rapid-acting insulin",
     "Nothing yet: recheck the glucose in 15 minutes"],
    0,
    "He needs help and can't swallow, so this is <b>severe hypoglycemia</b>: nothing by mouth (aspiration risk). <b>Glucagon</b> is the treatment a family member can give at home; IV dextrose is the hospital equivalent. Oral fast sugar (~15 g) is only for someone awake enough to swallow.");

  qb(L.t1, "#acute-complications", ["module-endo-Q8", "Elentra module"],
    "Which statement about acute complications in children with type 1 diabetes is <b>false</b>?",
    ["Hypoglycemia is the most common cause of death in children with diabetes",
     "First-line treatment of a mild low is a rapid-acting oral glucose load",
     "After a low, the insulin dose covering that period should be reduced",
     "Insulin should not be omitted during illness, even if the child is eating less",
     "Hunger, shakiness and sweating are typical early symptoms of hypoglycemia"],
    0,
    "The leading cause of death in children with diabetes is <b>DKA, mostly through cerebral edema</b>, which is more common in children. Everything else is true: ~15 g fast sugar for a mild low; a low means the preceding dose was too much; and during illness insulin is <b>never stopped</b> (counter-regulatory hormones raise needs), you check more often instead. Hunger, shakiness and sweating are the adrenergic warning symptoms.");

  qb(L.t1, "#insulin-dosing", ["module-endo-Q9", "Elentra module"],
    "A 13-year-old with well-controlled type 1 diabetes enters puberty and his A1c climbs from 7.2% to 8.6% despite good adherence. What is the main physiological reason?",
    ["Rising growth hormone and sex steroids increase insulin resistance",
     "Puberty increases insulin sensitivity, so he is having rebound highs",
     "His beta cells have started secreting insulin again (a honeymoon phase)",
     "Pubertal weight loss reduces insulin absorption from fat",
     "Puberty lowers glucagon, causing erratic glucose levels"],
    0,
    "Growth hormone is counter-regulatory: puberty causes <b>physiological insulin resistance</b>, which is why doses jump from about 0.7–1.0 to <b>1.0–2.0 units/kg/day</b> in puberty. Psychosocial factors (handing over self-management, insulin omission, conflict, smoking and alcohol) make control worse too, but the physiological driver is GH.");

  qb(L.t1, "#acute-complications", ["module-endo-Q7", "Elentra module"],
    "A 16-year-old has had type 1 diabetes since age 9. Which complication-screening statement is correct?",
    ["Nephropathy screening uses an annual urine albumin test",
     "Retinopathy screening should have started at diagnosis",
     "Blood pressure only needs to be measured once a year",
     "Hypothyroidism is less common in type 1 diabetes, so screen only if symptomatic",
     "Lipids only need routine screening in type 2 diabetes"],
    0,
    "The annual <b>urine albumin (ACR)</b> catches nephropathy at its earliest stage. Screening from diagnosis is the <b>type 2</b> rule (T2DM has been silently present for years); type 1 has a known onset, so screening starts some years after diagnosis, around puberty. BP is checked <b>every visit</b>. Type 1 clusters with other autoimmune disease, so hypothyroidism is <i>more</i> common and is screened for.");
})();

(function () {
  const L = {
    ins: "w1-insulin-pharmacology",
    app: "w1-approach-to-endocrine-disease",
    t1: "w1-t1dm-management",
    goals: "w1-glycemic-goals-of-care",
  };

  /* ---------------------------------------------------- 1.3 Insulin pharmacology */
  qb(L.ins, "#prandial-insulins", ["module-endo-Q10", "Elentra module"],
    "A 58-year-old injects <b>regular human insulin</b> immediately before each meal. Her 2-hour post-meal readings are 13–15 mmol/L and she has lows at 3–4 hours. Which change best fits the problem?",
    ["Switch to a rapid-acting analogue such as lispro or aspart",
     "Switch to NPH before meals",
     "Double the regular insulin dose",
     "Inject the regular insulin after the meal instead",
     "Add a second bedtime dose of glargine"],
    0,
    "Regular insulin has a <b>30–60 min onset</b> and a long tail: given right before a meal it peaks too late (post-meal highs) and lingers (late lows). Rapid analogues (lispro, aspart, glulisine) dissociate from hexamers faster, so they start in 10–15 min and finish sooner, a closer match to the meal surge. Doubling the dose worsens the late lows, and NPH is a basal insulin.");

  qb(L.ins, "#prandial-insulins", ["module-endo-Q11", "Elentra module"],
    "Which are genuine advantages of rapid-acting insulin analogues over regular human insulin? <i>(Select all that apply.)</i>",
    ["Faster onset of action", "Better post-prandial glucose control", "Lower risk of hypoglycemia",
     "Greater A1c lowering", "Longer duration of action", "They are the preferred insulin for IV infusions"],
    [0, 1, 2],
    "Analogues are <b>safer and more convenient, not more potent</b>: same A1c lowering, but faster onset, a better match to meals and fewer lows. They are shorter-acting, not longer. For IV use <b>regular insulin</b> is preferred: it's cheaper and better characterized, and dissociation kinetics don't matter once it's in the bloodstream.");

  qb(L.ins, "#basal-insulins", ["module-endo-Q12", "Module case"],
    "A 52-year-old with type 2 diabetes has an A1c of 13.4% on metformin. You want to add one daily injection with the lowest risk of overnight hypoglycemia. Which insulin fits best?",
    ["Glargine", "NPH", "Regular insulin", "Aspart", "Premixed 70/30 aspart"],
    0,
    "Glargine forms <b>microprecipitates at neutral pH</b>, giving a flat ~24 h profile with no real peak. <b>NPH</b> (protamine + zinc) lasts 10–16 h and has a peak, so it causes <b>more nocturnal hypoglycemia</b>. Regular and aspart are prandial; premixed insulin is the least physiological regimen.");

  qb(L.ins, "#structure-activity", ["hippo-endo-Q15", "HippoNotes"],
    "Only the insulin <b>monomer</b> activates the insulin receptor. What best explains why a basal analogue like degludec lasts so much longer than lispro?",
    ["It forms large multi-hexamer depots (and binds albumin), releasing monomers slowly",
     "It binds the insulin receptor irreversibly",
     "It escapes hepatic first-pass metabolism",
     "It is absorbed only through lymphatics",
     "It is a pro-drug activated slowly in the kidney"],
    0,
    "Onset and duration depend on <b>how fast monomers dissociate</b> from aggregates. Prandial analogues are engineered to dissociate faster; basal analogues slower: degludec forms multi-hexamers plus albumin binding, detemir dihexamers plus albumin, glargine microprecipitates, and NPH protamine-zinc. Same receptor, different release kinetics.");

  qb(L.ins, "#what-is-insulin", ["workbook-endo-Q85", "Workbook · Endocrine"],
    "A 34-year-old nurse without diabetes has recurrent confusion with documented glucose of 2.0 mmol/L. During an episode: insulin very high, <b>C-peptide low</b>, beta-hydroxybutyrate low, sulfonylurea screen negative. What is the most likely cause?",
    ["Surreptitious injection of exogenous insulin",
     "Insulinoma",
     "Surreptitious sulfonylurea use",
     "Adrenal insufficiency",
     "Prolonged fasting"],
    0,
    "C-peptide is cleaved from proinsulin and released <b>1:1 with endogenous insulin</b>, so it separates the sources. High insulin + <b>high</b> C-peptide = endogenous (insulinoma, or sulfonylurea, which the negative screen excludes). High insulin + <b>low</b> C-peptide = injected insulin. Low beta-hydroxybutyrate confirms an insulin-driven low (insulin blocks ketogenesis), which rules out fasting and adrenal insufficiency.");

  /* ---------------------------------------------------- 1.4 Approach to endocrine disease */
  qb(L.app, "#function-example", ["module-endo-Q13", "Elentra module"],
    "A 41-year-old has central weight gain and purple striae. 24-hour urine free cortisol is 679 nmol/d (normal &lt; 300) and plasma ACTH is 26 pmol/L (normal ≤ 14). Where could the problem be? <i>(Select all that apply.)</i>",
    ["Pituitary adenoma secreting ACTH", "Ectopic ACTH-secreting tumour", "Cortisol-secreting adrenal adenoma", "Exogenous glucocorticoids"],
    [0, 1],
    "High cortisol with a <b>high (inappropriate) ACTH</b> is <b>ACTH-dependent</b>: the ACTH is driving the adrenals. That means a pituitary source (most likely) or an ectopic one. An adrenal adenoma or exogenous steroid would <b>suppress</b> ACTH through negative feedback.");

  qb(L.app, "#function-example", ["module-endo-Q14", "Elentra module"],
    "Another patient: 24-hour urine free cortisol 679 nmol/d, plasma ACTH <b>undetectable</b>. What could explain this? <i>(Select all that apply.)</i>",
    ["Exogenous glucocorticoid use", "Cortisol-secreting adrenal adenoma", "Pituitary ACTH-secreting adenoma", "Ectopic ACTH-secreting tumour"],
    [0, 1],
    "High cortisol with <b>suppressed ACTH</b> = <b>ACTH-independent</b>: the cortisol is coming from somewhere that doesn't need ACTH, either the adrenal itself or a pill, inhaler, cream or injection. Always <b>exclude exogenous steroid first</b>. Pituitary or ectopic sources would push ACTH up, not down.");

  qb(L.app, "#function-example", ["module-endo-Q15", "Elentra module"],
    "A 30-year-old has fatigue, salt craving and darkening of her palmar creases. 8 AM cortisol is 55 nmol/L (normal 133–537) and ACTH is 102 pmol/L (normal ≤ 14). Where is the lesion?",
    ["Adrenal glands", "Pituitary gland", "Hypothalamus", "Ectopic ACTH-secreting tumour", "Exogenous glucocorticoid withdrawal"],
    0,
    "Low cortisol with <b>high ACTH</b> = the gland is failing and the pituitary is shouting at it: <b>primary adrenal insufficiency</b>. High ACTH (via POMC) also explains the hyperpigmentation. A pituitary or hypothalamic problem (or steroid withdrawal) gives low cortisol with <b>low or inappropriately normal</b> ACTH; ectopic ACTH would make cortisol high.");

  qb(L.app, "#function-example", ["module-endo-Q20", "Elentra module"],
    "A 66-year-old with COPD has a round face, easy bruising, proximal weakness and new hyperglycemia. Before you order a dexamethasone suppression test, what is the most important step?",
    ["Take a careful medication history for any glucocorticoid, including inhaled, topical or injected",
     "Order a pituitary MRI",
     "Measure plasma ACTH",
     "Order an adrenal CT",
     "Start ketoconazole"],
    0,
    "<b>Exogenous glucocorticoid is the most common cause of Cushing syndrome</b>, and a COPD patient has had many chances to get it (prednisone bursts, high-dose inhaled steroid). Exogenous steroid suppresses ACTH and the patient's own cortisol, which confuses every biochemical test. Ask 'could this be an outside source of hormone?' before testing or imaging.");

  /* ---------------------------------------------------- 1.2 T1DM: glucose records */
  qb(L.t1, "#dose-adjustment", ["new-endo-Q43", "DSSG cases"],
    "Jon, 22, has type 1 diabetes on rapid-acting insulin before each meal and glargine 16 units at bedtime. A1c 8.4%. His week (mmol/L):<table><tr><th></th><th>Breakfast</th><th>Lunch</th><th>Supper</th><th>Bedtime</th></tr><tr><td>Mon</td><td>4.2</td><td>6.8</td><td>12.3</td><td>16.7</td></tr><tr><td>Tue</td><td>3.9</td><td>12.5</td><td>14.6</td><td>18.2</td></tr><tr><td>Thu</td><td>3.2</td><td>6.9</td><td>8.5</td><td>4.7</td></tr><tr><td>Sat</td><td>2.8</td><td>11.4</td><td>13.4</td><td>8.4</td></tr><tr><td>Sun</td><td>3.9</td><td>9.4</td><td>14.3</td><td>15.9</td></tr></table>Which set of changes is right?",
    ["Lower bedtime glargine; raise the lunch and supper rapid-acting doses",
     "Raise bedtime glargine; lower the lunch and supper rapid-acting doses",
     "Raise the breakfast rapid-acting dose only",
     "Lower every dose by 20%",
     "No change; repeat the A1c in 3 months"],
    0,
    "Read the <b>columns</b>, then fix the insulin acting <b>before</b> each abnormal reading (by ~10–20%). Waking lows → the overnight basal (bedtime glargine) is too much. High pre-supper → the <b>lunch</b> bolus is too small. High bedtime → the <b>supper</b> bolus is too small. Fix the lows first.");

  qb(L.t1, "#dose-adjustment", ["new-endo-Q28", "DSSG cases"],
    "Steve, 37, has had type 1 diabetes for 27 years. A1c 11.0%. Over two weeks his fingersticks range from 2 to 20 mmol/L with no pattern. What should you do first?",
    ["Look for the causes of variability: injection sites (lipohypertrophy), bolus timing, over-treated lows, carb counting, gastroparesis",
     "Increase all of his insulin doses by 20%",
     "Switch him to twice-daily premixed insulin",
     "Add a sulfonylurea",
     "Start an insulin pump today"],
    0,
    "A 2–20 range is a <b>variability</b> problem, and more insulin won't fix variability (it makes the lows worse). Check for <b>lipohypertrophy</b> (erratic absorption), bolus timing (~15 min before meals), over-correcting lows, carb counting, and gastroparesis, and refer to diabetes education. Then intensify: basal-bolus → CGM → pump. Sulfonylureas do nothing without beta cells.");

  /* ---------------------------------------------------- 1.9 Glycemic goals */
  qb(L.goals, "#a1c-primacy", ["new-endo-Q26", "DSSG cases"],
    "Steve's A1c is 11.0%. Which statement about A1c is correct?",
    ["It reflects average glucose over about the past 3 months and predicts microvascular complication risk",
     "It reflects fasting glucose over the past week",
     "It is unaffected by anemia or recent transfusion",
     "It mainly reflects post-meal peaks over the last 2 weeks",
     "It is the same test as fructosamine"],
    0,
    "A1c is glucose irreversibly attached to hemoglobin, integrating <b>~90 days</b> (the red cell lifespan). It's the best-validated predictor of <b>microvascular</b> complications, and lowering it reduces eye, kidney and nerve disease. Anything that changes red cell turnover (anemia, blood loss, transfusion, hemoglobinopathy) distorts it. Fructosamine (glycated serum protein) covers ~2–3 weeks.");

  qb(L.goals, "#target-selection", ["new-endo-Q27", "DSSG cases"],
    "Steve, 37, with 27 years of type 1 diabetes, has an A1c of 11.0%. After a lot of work he gets to 9.5% but no lower without frequent lows. How do you counsel him?",
    ["The 1.5% drop has meaningfully lowered his complication risk even though he missed 7.0%",
     "Unless he reaches 7.0% there is no benefit, so he must keep intensifying",
     "He should aim for under 6.0% and accept daily lows",
     "Targets don't apply in long-standing type 1 diabetes",
     "He should stop basal insulin to prevent the lows"],
    0,
    "The target is <b>A1c ≤ 7.0% without unacceptable hypoglycemia</b>. Complication risk falls <b>continuously</b> with A1c, so 11.0 → 9.5 is real benefit even though it misses the target. About half of people with type 1 for 10+ years never reach 7%. Severe or frequent lows are the limit, not a price to pay.");

  qb(L.goals, "#target-selection", ["new-endo-Q45", "DSSG cases"],
    "Mira, 55, has type 2 diabetes on degludec and a seizure disorder. Her A1c is 6.9%; her log shows many readings of 3–4 mmol/L and occasional values of 13–15. No retinopathy, nephropathy or neuropathy. What is the best plan?",
    ["Reduce the degludec by 10–20% and accept a higher A1c target (~7.5%)",
     "Increase the degludec by 20% to treat the highs",
     "No change: an A1c under 7% is ideal",
     "Stop insulin and start a sulfonylurea",
     "Add rapid-acting insulin with meals"],
    0,
    "Her control is <b>too tight for her</b>: lows can provoke seizures, and the occasional highs are probably rebounds from over-treated lows, not loss of control. Reduce the basal and loosen the target, especially with no microvascular complications to protect. A sulfonylurea would add more hypoglycemia, not less.");

  qb(L.goals, "#guiding-principles", ["new-endo-Q46", "DSSG cases"],
    "Walter, 81, has advanced dementia and lives in a nursing home; staff give his basal insulin. A1c 9.1%; most pre-meal readings are 8–12 mmol/L. He has no symptoms of hyperglycemia. What should you change?",
    ["Nothing: aim to avoid symptomatic highs and any lows, not to reach 7%",
     "Increase the basal insulin by 20%",
     "Add rapid-acting insulin at every meal",
     "Stop insulin altogether",
     "Switch to a sulfonylurea for simplicity"],
    0,
    "Targets follow <b>functional status and life expectancy</b>, not age alone: independent ≤ 7.0%, dependent &lt; 8.0%, frail or demented &lt; 8.5%, and near the end of life <b>no A1c target</b>, just no symptomatic highs and no lows. With advanced dementia his goal is comfort and safety. Tightening control would buy complication prevention he won't live to see, at the cost of lows he can't report. Stopping insulin risks symptomatic hyperglycemia; a sulfonylurea adds hypoglycemia.");
})();

(function () {
  const L = {
    t2: "w1-t2dm-diagnosis-epidemiology",
    gld: "w1-glucose-lowering-drugs",
    preg: "w1-diabetes-pregnancy",
  };

  /* ---------------------------------------------------- 1.5 T2DM diagnosis */
  qb(L.t2, "#thresholds", ["module-endo-Q84", "Slide concept check"],
    "The diagnostic cut-offs for diabetes (fasting ≥ 7.0 mmol/L, A1c ≥ 6.5%, 2-h OGTT ≥ 11.1) were chosen because they mark the point where the risk of which outcome rises sharply?",
    ["Diabetic retinopathy", "Myocardial infarction", "Stroke", "Peripheral neuropathy", "Diabetic ketoacidosis"],
    0,
    "The thresholds are set where <b>retinopathy</b> (a microvascular endpoint specific to hyperglycemia) starts to climb. T2DM is strongly <i>associated</i> with MI, stroke and amputation, but cardiovascular risk rises continuously from well below these numbers, so it can't define the cut-point. Being associated with an outcome isn't the same as being defined by it.");

  qb(L.t2, "#thresholds", ["reviews-endo-Q2", "Review practice question"],
    "A 52-year-old with a BMI of 31 has months of thirst and polyuria. Fasting glucose 8.2 mmol/L, A1c 7.2%, 2-hour OGTT 12.0 mmol/L. Normal creatinine and liver enzymes. What is the best next step?",
    ["Diagnose type 2 diabetes; start lifestyle changes and metformin",
     "Repeat the A1c in 3 months before making a diagnosis",
     "Diagnose prediabetes and advise lifestyle changes only",
     "Start basal insulin today",
     "Start metformin plus an SGLT2 inhibitor together"],
    0,
    "He's symptomatic and <b>every test is in the diabetic range</b>, so there's nothing to confirm. Without severe symptoms, catabolism or contraindications, first line is <b>lifestyle + metformin</b>. Insulin first is for marked hyperglycemia with symptoms or weight loss; up-front dual therapy is for an A1c well above target (≥ 1.5% over).");

  qb(L.t2, "#beyond-hyperglycemia", ["new-endo-Q19", "DSSG cases"],
    "Molly, 26, has had 5 periods in the past year, acne and facial hair. For two months she's had nocturia and three yeast infections. BMI 36, BP 135/85, acanthosis and neck skin tags, no striae or bruising. A1c 6.7%, fasting glucose 7.4 mmol/L. Which pair of diagnoses fits best?",
    ["Type 2 diabetes and PMOS (PCOS)", "Type 1 diabetes and Cushing syndrome", "Impaired glucose tolerance and a prolactinoma",
     "Gestational diabetes and hypothyroidism", "Type 2 diabetes and congenital adrenal hyperplasia"],
    0,
    "She's symptomatic with a fasting glucose ≥ 7.0 and A1c ≥ 6.5% (either alone is diagnostic with symptoms), and acanthosis and skin tags shout <b>insulin resistance</b>: type 2. Oligomenorrhea plus hyperandrogenism meets PMOS criteria once mimics are excluded, and PMOS is itself a T2DM risk factor. No purple striae, bruising or proximal weakness makes Cushing unlikely.");

  /* ---------------------------------------------------- 1.6 Glucose-lowering drugs */
  qb(L.gld, "#comparison", ["module-endo-Q29", "Elentra module"],
    "Metformin and pioglitazone are both insulin sensitizers. In what way are they actually alike?",
    ["They lower A1c by a similar amount",
     "Both cause weight gain",
     "Both are excreted unchanged by the kidney",
     "Both increase fracture risk",
     "Both can precipitate heart failure"],
    0,
    "They have <b>comparable A1c efficacy</b>, and that's where the similarity ends. Metformin: weight neutral or loss, excreted unchanged by the kidney (hence the eGFR limits), cardioprotective. Pioglitazone: weight gain, fluid retention and <b>heart failure</b>, <b>fractures</b>, extensive hepatic metabolism (so it's fine in CKD but not in liver disease).");

  qb(L.gld, "#tzds", ["module-endo-Q37", "Slide concept check"],
    "In which patients is pioglitazone <b>contraindicated</b>? <i>(Select all that apply.)</i>",
    ["Heart failure", "Hepatic cirrhosis", "Stage 4 CKD", "Osteopenia", "Well-controlled hypertension"],
    [0, 1],
    "TZDs activate PPAR-γ, which increases renal Na⁺ channel expression → <b>fluid retention</b> that decompensates <b>heart failure</b>. They're cleared by the <b>liver</b>, so cirrhosis rules them out. CKD is fine (not renally cleared, unlike metformin). Osteopenia is a caution (it's osteoporosis or fractures that tip it); hypertension just needs monitoring.");

  qb(L.gld, "#sulfonylureas", ["module-endo-Q31", "Module case"],
    "A 45-year-old switched from metformin (GI intolerance) to gliclazide 6 months ago. His glucose responded at first but is now drifting back up despite good adherence. What could explain the falling efficacy? <i>(Select all that apply.)</i>",
    ["Progressive loss of beta-cell secretory function", "Desensitization at the beta-cell K-ATP channel target",
     "Renal impairment reducing gliclazide's glucose-lowering effect", "Adipocytes failing to take up free fatty acids"],
    [0, 1],
    "A sulfonylurea only works through <b>beta cells that can still secrete</b>, so as beta-cell mass declines (and the K-ATP target desensitizes) it 'runs out of substrate': <b>secondary failure</b>. Renal impairment slows its elimination (more hypoglycemia), not its effect. Adipocyte fatty-acid handling is the TZD's territory. Switching to another secretagogue won't fix it; he needs a beta-cell-independent class.");

  qb(L.gld, "#glp1-agonists", ["module-endo-Q33", "Module case"],
    "A 43-year-old on metformin and mealtime insulin is still above target. Her doctor adds an injectable analogue of an endogenous gut peptide that boosts glucose-dependent insulin release, suppresses glucagon and slows gastric emptying. Which drug is it?",
    ["Liraglutide", "Sitagliptin", "Repaglinide", "Pioglitazone", "Gliclazide"],
    0,
    "That's a <b>GLP-1 receptor agonist</b> (liraglutide, semaglutide): a DPP-4-resistant GLP-1 analogue giving supraphysiological GLP-1 activity. <b>Sitagliptin</b> is the trap: it acts on the same pathway but is an oral DPP-4 <i>inhibitor</i> that only prolongs your own GLP-1, not an analogue. Repaglinide and gliclazide close the K-ATP channel; pioglitazone is a PPAR-γ agonist.");

  qb(L.gld, "#physiology", ["module-endo-Q38", "Slide concept check"],
    "In a classic experiment, oral glucose and an IV glucose infusion are adjusted so plasma glucose curves are identical. Insulin secretion is much higher after the oral glucose. What explains the difference?",
    ["Gut-derived incretins (GLP-1, GIP) amplify insulin release",
     "Oral glucose is absorbed faster than IV glucose",
     "IV glucose bypasses the beta cell",
     "The liver clears more insulin after IV glucose",
     "Oral glucose raises glucagon, which stimulates insulin"],
    0,
    "With glucose matched, the extra insulin can't come from glucose itself: nutrients in the gut release <b>GLP-1 and GIP</b>, which amplify insulin secretion. This <b>incretin effect</b> is blunted in T2DM and is the rationale for GLP-1 agonists and DPP-4 inhibitors. Matching the glucose curves is what rules out absorption speed.");

  qb(L.gld, "#comparison", ["module-endo-Q35", "Elentra module"],
    "Which drug classes lower <b>post-prandial</b> glucose more than fasting glucose? <i>(Select all that apply.)</i>",
    ["Alpha-glucosidase inhibitors", "Meglitinides", "DPP-4 inhibitors", "Metformin", "Thiazolidinediones"],
    [0, 1, 2],
    "<b>Acarbose</b> delays carbohydrate digestion and blunts the meal spike. <b>Meglitinides</b> (repaglinide) give a short, fast insulin burst timed to the meal. <b>DPP-4 inhibitors</b> enhance nutrient-triggered incretin release. Metformin mainly suppresses hepatic glucose output (the fasting number); TZDs improve sensitivity around the clock.");

  qb(L.gld, "#sglt2-inhibitors", ["reviews-endo-Q39", "Written from review slides"],
    "A 58-year-old had a second agent added to her metformin 3 months ago. She now has her second vulvovaginal yeast infection, feels light-headed on standing, and has lost 2 kg. Which drug was added?",
    ["Dapagliflozin", "Gliclazide", "Sitagliptin", "Pioglitazone", "Insulin glargine"],
    0,
    "An <b>SGLT2 inhibitor</b> puts glucose in the urine: substrate for <b>genital and urinary infections</b>, osmotic diuresis with <b>volume contraction</b> (postural symptoms) and calorie loss (<b>weight loss</b>). Gliclazide, pioglitazone and insulin cause weight gain; sitagliptin is weight neutral with none of these effects.");

  qb(L.gld, "#sulfonylureas", ["reviews-endo-Q67", "Written from review slides"],
    "An 84-year-old widow who lives alone has type 2 diabetes with an A1c of 8.1% on metformin. She sometimes skips meals. Which add-on is <b>least</b> appropriate?",
    ["Glyburide", "Linagliptin", "Sitagliptin", "Empagliflozin", "Semaglutide"],
    0,
    "Sulfonylureas release insulin <b>regardless of glucose</b>, so a skipped meal means a low, and <b>glyburide</b> is the worst of them (long-acting, active metabolites, accumulates as eGFR falls). Avoid SUs in the elderly, people who live alone and those who drive for a living. DPP-4 inhibitors act only when there's a meal; SGLT2 inhibitors and GLP-1 agonists carry little hypoglycemia risk on their own.");

  qb(L.gld, "#sglt2-inhibitors", ["weekly-endo-Q1", "Weekly quiz"],
    "Which combination is most likely to cause hypotension?",
    ["Canagliflozin + furosemide", "Canagliflozin + insulin", "Empagliflozin + pioglitazone", "Empagliflozin + valsartan", "Metformin + sitagliptin"],
    0,
    "SGLT2 inhibitors cause an <b>osmotic diuresis</b>; add a loop diuretic and two drugs are emptying the same compartment, so volume loss is additive. That's why the lecture says to be careful prescribing them with other diuretics. An ARB lowers BP by vasodilation and is a deliberate co-prescription in diabetic kidney disease; pioglitazone retains fluid, which offsets the diuresis.");

  qb(L.gld, "#dpp4-inhibitors", ["weekly-endo-Q2", "Weekly quiz"],
    "A patient is doing well on weekly semaglutide. Which class adds nothing and should not be added?",
    ["DPP-4 inhibitor", "SGLT2 inhibitor", "Metformin", "Thiazolidinedione", "Basal insulin"],
    0,
    "A GLP-1 agonist already gives <b>~10× physiological GLP-1 activity</b> with a molecule DPP-4 can't break down. A DPP-4 inhibitor only raises your own GLP-1 about 2–3×, so on top of an agonist it's <b>pharmacologically redundant</b>: cost and side effects, no extra glucose lowering. Every other class works by a different mechanism.");

  qb(L.gld, "#sglt2-inhibitors", ["weekly-endo-Q3", "Weekly quiz"],
    "A 70-year-old has had type 2 diabetes for 25 years and very little remaining beta-cell function. Which class's glucose-lowering effect is <b>least</b> dependent on his beta cells?",
    ["SGLT2 inhibitors", "Sulfonylureas", "Meglitinides", "GLP-1 receptor agonists", "DPP-4 inhibitors"],
    0,
    "SGLT2 inhibitors work in the <b>proximal tubule</b>: glucose leaves in the urine whatever the pancreas does, so their efficacy depends on <b>kidney function</b>, not beta-cell reserve. Secretagogues need secreting beta cells. The subtle distractor is GLP-1 agonists: they're glucose-dependent but still act on the beta cell to release insulin.");

  qb(L.gld, "#comparison", ["weekly-endo-Q5", "Weekly quiz"],
    "A 49-year-old with type 2 diabetes and a BMI of 38 is scheduled for knee replacement and has been told to lose weight. Which add-on to metformin best serves that goal?",
    ["Semaglutide", "Alogliptin", "Acarbose", "Glyburide", "Rosiglitazone"],
    0,
    "Weight effects by class: <b>loss</b> with GLP-1 agonists (slowed gastric emptying, central satiety) and SGLT2 inhibitors; <b>neutral</b> with DPP-4 inhibitors, acarbose and metformin; <b>gain</b> with sulfonylureas, TZDs, meglitinides and insulin. When the stem asks for weight <i>loss</i>, neutral isn't good enough.");

  qb(L.gld, "#renal-dosing", ["weekly-endo-Q9", "Weekly quiz"],
    "A 74-year-old has an eGFR of 24 mL/min. Which of these can be <b>started</b> at this level of kidney function (with a dose adjustment)?",
    ["Alogliptin", "Metformin", "Dapagliflozin", "Glyburide", "Acarbose"],
    0,
    "DPP-4 inhibitors are 'caution, not contraindicated' in severe CKD: alogliptin, sitagliptin and saxagliptin need dose reduction, and <b>linagliptin needs none</b> (non-renal clearance). Metformin is contraindicated below eGFR 30 (accumulation → lactic acidosis), SGLT2 inhibitors aren't <i>initiated</i> at this level (and lose glucose efficacy), and glyburide accumulates and causes prolonged lows.");

  qb(L.gld, "#comparison", ["new-endo-Q1", "CBL cases"],
    "A 46-year-old on glargine 30 units, lispro 10 units with meals, and glimepiride has fasting readings of 5.5–7.0 mmol/L but 2-hour post-meal readings of 15–18 mmol/L. A1c 11.0%. What is the best change?",
    ["Increase the pre-meal lispro doses",
     "Increase glargine to 40 units",
     "Replace glargine with twice-daily NPH",
     "Add a bedtime dose of lispro",
     "Add a second sulfonylurea"],
    0,
    "Ask <b>which defect is uncontrolled</b>. Fasting is at target, so the basal is doing its job, and raising it would cause overnight lows without touching the problem. The highs are confined to after meals: that's the <b>prandial</b> insulin's job. Rapid insulin at bedtime with no meal causes nocturnal lows; another secretagogue just stacks hypoglycemia risk.");

  qb(L.gld, "#comparison", ["new-endo-Q2", "CBL cases"],
    "The same patient is now on glimepiride, pioglitazone, glargine and lispro. Which adverse effects should you counsel her about as most likely from this combination?",
    ["Hypoglycemia and weight gain", "Lactic acidosis", "Genital mycotic infections", "Flatulence and bloating", "Acute pancreatitis"],
    0,
    "When agents are stacked, ask about the <b>shared toxicity</b>. Secretagogue + insulin (two routes to hypoglycemia) and SU + TZD + insulin (three routes to weight gain, plus pioglitazone's fluid retention). Lactic acidosis is metformin; genital infection SGLT2; flatulence acarbose; pancreatitis the incretin drugs.");

  qb(L.gld, "#sglt2-inhibitors", ["new-endo-Q3", "CBL cases"],
    "Two months after starting empagliflozin, a 44-year-old has dysuria and frequency; urine culture grows <i>E. coli</i>. She is otherwise well and her glucose has improved. What is the best management?",
    ["Treat the UTI, counsel on hygiene and fluids, and continue empagliflozin",
     "Stop empagliflozin permanently and treat the UTI",
     "Treat and start daily prophylactic antibiotics",
     "Stop empagliflozin and switch to acarbose",
     "Increase fluids alone without antibiotics"],
    0,
    "One uncomplicated UTI is an expected, mechanism-predictable event on an SGLT2 inhibitor, <b>not a reason to abandon a drug that's working</b> (glycemic, weight and cardiorenal benefit). Stop it for <b>recurrent or severe</b> genitourinary infection or urosepsis. A culture-positive symptomatic UTI still needs antibiotics.");

  qb(L.gld, "#sulfonylureas", ["new-endo-Q4", "CBL cases"],
    "A woman on glimepiride, pioglitazone and insulin is treated for <i>H. pylori</i> with amoxicillin, <b>clarithromycin</b>, bismuth and pantoprazole. Two days later she has repeated morning glucose readings of 2.8–3.3 mmol/L. What is the most likely mechanism?",
    ["Clarithromycin inhibits CYP3A4, raising glimepiride and pioglitazone levels",
     "Amoxicillin displaces glimepiride from plasma proteins",
     "Pantoprazole slows absorption of glargine",
     "Eradicating <i>H. pylori</i> abruptly improves insulin sensitivity",
     "Bismuth increases renal clearance of insulin"],
    0,
    "<b>Clarithromycin is a potent CYP3A4 inhibitor</b>; sulfonylureas and pioglitazone are hepatically metabolized, so their levels rise and a stable regimen turns hypoglycemic. (Bismuth subsalicylate may add a small glucose-lowering effect.) Protein-binding displacement is the reflex answer but the wrong mechanism here; acid suppression can't affect a subcutaneous injection.");

  qb(L.gld, "#comparison", ["new-endo-Q5", "CBL cases"],
    "Over 21 months a 46-year-old's BMI falls from 45 to 17 despite escalating insulin, now over 50 units/kg/day (typical 0.5–1). A1c stays 11–14%, including during supervised IV insulin in hospital. She has severe acanthosis nigricans, skin tags and new vitiligo. What is the most likely cause?",
    ["Autoantibodies against the insulin receptor (type B insulin resistance)",
     "Covert insulin non-adherence",
     "A growth hormone-secreting pituitary adenoma",
     "Endogenous hypercortisolism",
     "Congenital generalized lipodystrophy"],
    0,
    "Insulin needs an order of magnitude above ordinary resistance, extreme acanthosis, <b>catabolic wasting despite huge insulin doses</b> (insulin delivered but not acting) and vitiligo (autoimmunity) = <b>type B insulin resistance</b>. Supervised IV insulin rules out non-adherence. Acromegaly and Cushing cause resistance but not of this size, and not with weight loss and vitiligo. Confirm with <b>anti-insulin-receptor</b> antibodies, not anti-insulin antibodies.");

  qb(L.gld, "#glp1-agonists", ["new-endo-Q7", "CBL cases"],
    "Samuel, 47, has had type 2 diabetes for 2 years on metformin twice daily. He travels most weeks, often forgets his second dose, has gained 12 lb in a year, and has IBS. A1c 8.3%, LDL and triglycerides high, creatinine normal. Which second agent fits best?",
    ["A once-weekly GLP-1 receptor agonist", "Glimepiride daily", "Pioglitazone daily", "Acarbose with each meal", "Repaglinide with each meal"],
    0,
    "Every problem points the same way: he needs <b>weight loss</b>, and he already fails a twice-daily schedule, so <b>once weekly</b> is the regimen he'll actually take. SU and TZD add weight; repaglinide and acarbose need dosing with every meal; and acarbose is contraindicated with chronic bowel disease like his IBS.");

  qb(L.gld, "#alpha-glucosidase", ["new-endo-Q8", "CBL cases"],
    "Which glucose-lowering class is contraindicated in a patient with irritable bowel syndrome or inflammatory bowel disease?",
    ["Alpha-glucosidase inhibitors (acarbose)", "SGLT2 inhibitors", "DPP-4 inhibitors", "Thiazolidinediones", "Basal insulin"],
    0,
    "Acarbose blocks brush-border carbohydrate digestion, so undigested carbohydrate reaches the colon and is <b>fermented → flatulence, bloating, diarrhea</b>. In chronic intestinal disease or obstruction it reproduces and worsens the patient's symptoms, which is why the lecture lists it as a contraindication rather than a caution. It's weight neutral with no hypoglycemia on its own.");

  qb(L.gld, "#sglt2-inhibitors", ["new-endo-Q11", "CBL cases"],
    "Nancy, 62, is on maximum metformin and gliclazide; her A1c has drifted back to 7.9% and she's gained 5 lb. She refuses insulin (needle-phobic, afraid of lows), eats irregularly, and wants an oral drug that helps her weight. eGFR 80. Which addition fits her goals best?",
    ["An SGLT2 inhibitor", "Switch gliclazide to glyburide", "Pioglitazone", "Bedtime basal insulin", "Repaglinide with meals"],
    0,
    "Her goals are oral, weight loss, no hypoglycemia, and a mechanism that <b>doesn't depend on her failing beta cells</b>. An SGLT2 inhibitor meets all four (plus cardiorenal benefit). Cost needs checking; a DPP-4 inhibitor is the cheaper oral fallback (weight neutral, weaker). Swapping SUs keeps the exhausted mechanism; pioglitazone adds weight; repaglinide adds lows with irregular meals.");

  qb(L.gld, "#sglt2-inhibitors", ["new-endo-Q14", "CBL cases"],
    "Albert, 72, takes valsartan, hydrochlorothiazide, canagliflozin, sitagliptin, metformin and insulin. After 3 days of nausea and poor intake he is in the ICU with shock and AKI. What best explains the AKI?",
    ["Volume depletion from canagliflozin's osmotic diuresis plus the thiazide, with the ARB removing efferent arteriolar tone",
     "Metformin-induced lactic acidosis as the primary event",
     "Sitagliptin-induced interstitial nephritis",
     "Hypoglycemic collapse from insulin",
     "Contrast nephropathy"],
    0,
    "Three drugs pull the same way: canagliflozin (glucosuria → osmotic diuresis) + thiazide (natriuresis) deplete volume, and the ARB removes the angiotensin II efferent tone that would defend GFR as volume falls. Add poor intake: <b>prerenal AKI and shock</b>. Lactic acidosis from metformin is a <i>consequence</i> of the AKI here, not the trigger. Recurrent postural falls beforehand were the warning sign.");

  qb(L.gld, "#renal-dosing", ["new-endo-Q16", "CBL cases"],
    "Albert recovers with fluids; at discharge his eGFR is stable at 28. What is the right approach to his canagliflozin?",
    ["Don't newly start an SGLT2 inhibitor at this eGFR, but it can be continued once he is euvolemic, for cardiorenal benefit",
     "Restart it at full dose today for glucose control",
     "It is permanently contraindicated and must be stopped",
     "Replace it with glyburide",
     "Replace it with maximum-dose metformin"],
    0,
    "SGLT2 inhibitors sit in a <b>'don't initiate, may continue'</b> band at low eGFR: their glucose-lowering fades but the <b>kidney and heart protection persists</b>. What has to change is the volume context: restart only when euvolemic and review the thiazide and ARB. Glyburide is the SU to avoid first in CKD; metformin is contraindicated below 30.");
})();

(function () {
  const preg = "w1-diabetes-pregnancy";
  qb(preg, "#pregestational-risk", ["new-endo-Q22", "DSSG cases"],
    "Molly, 26, has just been diagnosed with type 2 diabetes and PMOS; she hasn't had a period for 4 months and is trying to conceive. Which test matters most before you plan her treatment?",
    ["Serum beta-hCG", "2-hour 75 g OGTT", "Transvaginal ultrasound for ovarian morphology", "Overnight dexamethasone suppression test", "Fasting insulin level"],
    0,
    "She could be <b>pregnant right now</b>, and the whole plan forks on it (drug choice, glucose targets, folic acid, ASA, referral). Her diagnosis is already made, so an OGTT adds nothing (and is avoided with symptomatic hyperglycemia); she has no Cushingoid features; ovarian morphology doesn't change today's decision.");

  qb(preg, "#pregestational-risk", ["new-endo-Q23", "DSSG cases"],
    "Molly's pregnancy test is negative. She and her partner want to conceive soon. A1c 6.7%. What is the best plan?",
    ["Diabetes education, low threshold for metformin, pre-conception A1c target ≤ 6.5%, recheck in 3–4 months",
     "Start insulin with an A1c target under 5.0%",
     "Start a sulfonylurea and daily glucose monitoring",
     "Lifestyle alone until the A1c exceeds 8.0%",
     "Advise her not to conceive until she has lost 20% of her weight"],
    0,
    "Pre-conception, aim for <b>A1c ≤ 6.5%</b> (organogenesis happens before most people know they're pregnant). <b>Metformin</b> is the safest oral agent around conception and also helps ovulation in PMOS. Start <b>folic acid 1 mg</b> before conception. Home monitoring is only essential if she's on a drug that can cause lows; a sulfonylurea adds hypoglycemia and weight.");

  qb(preg, "#pregestational-course", ["new-endo-Q24", "DSSG cases"],
    "Had Molly's pregnancy test been positive (type 2 diabetes, 7 weeks), which two preventive medications belong in her plan?",
    ["ASA 81 mg daily from 12–16 weeks and folic acid through the first trimester",
     "Low-molecular-weight heparin and iron",
     "Calcium and vitamin D from conception",
     "ASA 325 mg from conception and folic acid 5 mg throughout",
     "Metformin and levothyroxine"],
    0,
    "Pre-existing diabetes is a risk factor for <b>pre-eclampsia → low-dose ASA (81 mg) started at 12–16 weeks</b>, and for <b>neural tube defects → folic acid</b> through the first 12 weeks. She also needs referral to a diabetes-in-pregnancy clinic, home monitoring and obstetrics.");
})();

(function () {
  const L = {
    acc: "w1-acute-chronic-complications",
    preg: "w1-diabetes-pregnancy",
    prev: "w1-prevention-of-dm-complications",
    t1: "w1-t1dm-management",
  };

  /* ---------------------------------------------------- 1.7 Acute & chronic complications */
  qb(L.acc, "#dka-presentation", ["module-endo-Q22", "Module case"],
    "A 22-year-old with no known diabetes has severe abdominal pain and vomiting. Na 130 (134–145), K 3.2 (3.5–5.0), HCO₃ 10 (22–32), random glucose 25 mmol/L. Which test best confirms the diagnosis?",
    ["Venous blood gas and serum beta-hydroxybutyrate", "Lipase and liver enzymes", "CBC and blood cultures", "Urine electrolytes and osmolality", "A1c"],
    0,
    "Young, hyperglycemic, low bicarbonate: think <b>new type 1 presenting in DKA</b>. You've got the hyperglycemia; the gas (pH) and <b>ketones</b> complete the triad. Abdominal pain and vomiting are classic DKA features driven by the acidosis. A1c confirms diabetes but not DKA. And note his K of 3.2 <i>before</i> insulin means total-body potassium is severely depleted: replace before or alongside insulin.");

  qb(L.acc, "#hhs-presentation", ["reviews-endo-Q29", "Review practice question"],
    "A 57-year-old homeless man is found unresponsive. T 37.5 °C, BP 105/60, HR 125, RR 18 and unlaboured. Glucose 54.9 mmol/L, Na 129, HCO₃ 21.6. Urinalysis: 4+ glucose, no ketones. What is the underlying diagnosis?",
    ["Type 2 diabetes presenting as HHS", "Type 1 diabetes presenting as DKA", "SIADH", "Sepsis with stress hyperglycemia", "Cushing syndrome"],
    0,
    "Extreme glucose, <b>no ketones</b>, near-normal bicarbonate, no Kussmaul breathing and reduced consciousness = <b>HHS</b>, the crisis of type 2: enough insulin to stop ketogenesis, not enough to stop hyperglycemia. The sodium is low because glucose pulls water out of cells (dilutional); the <i>corrected</i> sodium will be much higher. SIADH doesn't give a glucose of 55.");

  qb(L.acc, "#treatment", ["weekly-endo-Q17", "Weekly quiz"],
    "An elderly man with type 2 diabetes has a week of worsening confusion after starting prednisone for gout. Glucose 50 mmol/L, creatinine 300 µmol/L (no prior kidney disease). Which belong in his emergency care? <i>(Select all that apply.)</i>",
    ["Start an IV line", "Assess airway, breathing, HR and BP", "ECG for ischemia", "Check bicarbonate and pH", "Insulin through the IV", "Start D5W at 100 mL/h"],
    [0, 1, 2, 3, 4],
    "This is <b>HHS</b> precipitated by steroids, with prerenal AKI from osmotic diuresis. Resuscitate (access, ABCs), look for the precipitant and its partners (hyperglycemic crises both cause and are caused by MI → <b>ECG</b>), check <b>pH and bicarbonate</b> to separate HHS from DKA, and give insulin after fluid resuscitation has started. Dextrose belongs <i>later</i>, once glucose falls to ~12–14 mmol/L. Starting it now pours sugar into a glucose of 50.");

  qb(L.acc, "#hhs-presentation", ["new-endo-Q32", "DSSG cases"],
    "Mr. Darcy, 55, has 2 weeks of thirst and polyuria and a random glucose of 55 mmol/L. To assess for HHS you calculate the <b>effective</b> serum osmolality. Which formula, and why?",
    ["2 × Na + glucose; urea is left out because it crosses cell membranes and doesn't shift water",
     "2 × Na + urea + glucose; all three are measured osmoles",
     "Na + K + glucose; potassium is the main intracellular osmole",
     "2 × glucose + Na; glucose is the dominant osmole in HHS",
     "Measured osmolality minus calculated osmolality"],
    0,
    "<b>Effective osmolality = 2[Na] + [glucose]</b> (mmol/L). Urea is an <i>ineffective</i> osmole: it equilibrates across cell membranes, so it doesn't drag water out of brain cells and doesn't explain the neurological picture. An effective osmolality <b>≥ ~320</b> with impaired mental status = HHS. Measured minus calculated is the osmolar gap, a different question (toxic alcohols).");

  qb(L.acc, "#hhs-presentation", ["new-endo-Q33", "DSSG cases"],
    "At 4:30 pm on the Friday before a long weekend, a family doctor calls about Mr. Darcy, 55: no known diabetes, 2 weeks of thirst, polyuria and blurred vision, random glucose 55 mmol/L. No electrolytes, gas or mental-status assessment have been done. What do you advise?",
    ["Send him to the emergency department now",
     "Start metformin and see him in clinic on Tuesday",
     "Advise juice for hydration and review after the weekend",
     "Order outpatient bloodwork for next week",
     "Start a sulfonylurea and home glucose monitoring"],
    0,
    "With a glucose of 55, <b>HHS and DKA haven't been excluded</b> (no sodium, bicarbonate, anion gap or mental-status assessment), and both can kill if they're left over a long weekend. If the tests can't be done now, or are abnormal, he goes to the ED. Juice is actively harmful: water or diet drinks only.");

  qb(L.acc, "#chronic-framework", ["module-endo-Q26", "Module case"],
    "A 38-year-old with type 1 diabetes has numb, tingling feet and a small foot ulcer that took 6 weeks to heal. His optometrist reports non-proliferative retinopathy. He denies chest pain, claudication and stroke symptoms. How are his complications classified?",
    ["Microvascular only", "Macrovascular only", "Both microvascular and macrovascular", "Neuroglycopenic", "Too early to classify"],
    0,
    "Neuropathy (glove and stocking, feet first because the nerves are longest), the slow-healing ulcer that follows from lost protective sensation, and retinopathy are all <b>microvascular</b>. Macrovascular disease means MI or angina, stroke or TIA, or peripheral arterial disease, all specifically denied here. 'Neuroglycopenic' describes the brain's symptoms of acute hypoglycemia, not a chronic complication.");

  qb(L.acc, "#retinopathy", ["new-endo-Q125", "Weekly Rounds"],
    "Gurdeep, 55, hasn't seen a doctor in 10 years. She has thirst, polyuria, burning feet at night and 3 months of blurred vision. BP 170/89, BMI 35. Fundoscopy: several <b>cotton wool spots</b>, macula poorly seen. Absent ankle reflexes and vibration at the toes. What do these findings mean?",
    ["Undiagnosed diabetes already complicated by pre-proliferative retinopathy and neuropathy, plus new hypertension",
     "Hypertensive retinopathy only; her diabetes is probably recent",
     "Cotton wool spots point away from diabetes, so look for a pituitary lesion",
     "Proliferative retinopathy needing urgent laser",
     "Normal age-related findings"],
    0,
    "Cotton wool spots are <b>retinal infarcts → pre-proliferative</b> retinopathy (proliferative means new vessels). Absent ankle jerks and toe vibration = sensorimotor neuropathy. Type 2 diabetes is silent for years, which is why <b>complications can be present at diagnosis</b> and why eyes and feet are screened at diagnosis in T2DM. The BP of 170/89 is a new diagnosis too. A poorly seen macula with blurred vision raises macular edema.");

  /* ---------------------------------------------------- 1.8 Pregnancy */
  qb(L.preg, "#pregestational-risk", ["weekly-endo-Q13", "Weekly quiz"],
    "Lena, 29, has had type 1 diabetes for 9 years and wants to conceive. Which statements should you review with her? <i>(Select all that apply.)</i>",
    ["Aim for an A1c ≤ 6.5% before conception if it can be done safely",
     "Start folic acid before conception, not after a positive test",
     "Once pregnant, the fasting glucose target is about 5.3 mmol/L or less",
     "Her A1c target stays exactly the same through pregnancy as before it",
     "Pregnancy lowers her insulin needs throughout, so she should halve her doses"],
    [0, 1, 2],
    "Organogenesis is under way before most people know they're pregnant, so <b>pre-conception A1c ≤ 6.5%</b> (≤ 7% at minimum) and <b>folic acid before conception</b>. In pregnancy targets tighten further (fasting &lt; 5.3, 1-h post-meal &lt; 7.8). Insulin needs <i>fall</i> in the first trimester (hypoglycemia risk) but <i>rise</i> steeply in the second and third.");

  qb(L.preg, "#pregestational-course", ["reviews-endo-Q37", "Written from review slides"],
    "A woman with type 1 diabetes is 9 weeks pregnant and having lows on her usual insulin doses. How will her insulin needs change?",
    ["Fall in the first trimester, rise steeply in the third, then drop abruptly after delivery",
     "Rise steadily from conception and fall only after delivery",
     "Stay the same until the third trimester, then fall",
     "Fall throughout pregnancy, then rise after delivery",
     "Rise in the first trimester, then plateau"],
    0,
    "Rule of thumb: <b>the bigger the placenta, the more insulin</b>. Early on the placenta is small and needs fall (and not just because of nausea), so lows are common. Placental hormones (hPL/prolactin, cortisol, GH) drive rising resistance in the 2nd and especially 3rd trimester. When the placenta is delivered, needs drop sharply: watch for postpartum lows, especially while breastfeeding.");

  qb(L.preg, "#gdm-screening", ["module-endo-Q51", "Module case"],
    "A 29-year-old at 24 weeks has a non-fasting 50 g glucose challenge; her 1-hour glucose is 8.8 mmol/L. What is the next step?",
    ["Fasting 75 g OGTT", "Diagnose GDM and refer to the diabetes-in-pregnancy clinic", "Reassure her: the screen is normal", "Check an A1c to confirm", "Repeat the 50 g screen in 2 weeks"],
    0,
    "Canadian two-step screening at 24–28 weeks: 50 g screen <b>&lt; 7.8 normal, ≥ 11.1 diagnoses GDM, 7.8–11.0 → 75 g OGTT</b>. On the 75 g test, any one value ≥ fasting 5.3, 1 h 10.6 or 2 h 9.0 is diagnostic. A1c isn't used to diagnose GDM.");

  qb(L.preg, "#gdm-screening", ["hippo-endo-Q13", "HippoNotes"],
    "Twin to the last one: at 25 weeks, a patient's 1-hour glucose after the 50 g challenge is <b>12.0</b> mmol/L. What now?",
    ["Diagnose GDM: refer for diabetes education, nutrition and glucose monitoring",
     "Do a fasting 75 g OGTT to confirm",
     "Order an A1c to confirm",
     "Repeat the 50 g challenge",
     "Reassure: values under 13 are normal in pregnancy"],
    0,
    "A 50 g result <b>≥ 11.1 mmol/L is diagnostic</b> of GDM on its own; no 75 g OGTT is needed. Only the 7.8–11.0 grey zone goes on to the 75 g test. Management starts with diet, activity and glucose monitoring, then insulin (or metformin) if targets aren't met.");

  qb(L.preg, "#gdm", ["module-endo-Q52", "Module case"],
    "A 25-year-old with GDM is on metformin, the GDM diet, and walks after every meal. Her log over 5 days: fasting 5.3–5.8; 1-hour post-meal values 7.7–9.0 mmol/L. What do you recommend?",
    ["Add insulin", "Stop metformin: her readings are at target", "No change", "Cut her carbohydrate intake in half", "Add a sulfonylurea"],
    0,
    "Targets in pregnancy are <b>fasting &lt; 5.3 and 1-h post-meal &lt; 7.8</b>, and she's above both, trending up. Diet, activity and metformin are already maxed, so the next step is <b>insulin</b>, the agent that can be titrated to both fasting and post-meal targets. Halving carbohydrate risks ketosis and inadequate nutrition.");

  qb(L.preg, "#gdm", ["new-endo-Q51", "Module case"],
    "After a week of diet and post-meal walks, a woman with GDM at 26 weeks has high fasting readings and high readings 1 hour after breakfast; lunch and supper are at target. Which insulin plan matches her log?",
    ["Bedtime basal insulin plus rapid-acting insulin before breakfast only",
     "Rapid-acting insulin before every meal",
     "Basal insulin alone",
     "Rapid-acting insulin at bedtime",
     "Premixed insulin twice daily at full replacement doses"],
    0,
    "Treat the interval that's out of range with the insulin that acts over it: high <b>fasting</b> = overnight problem → <b>bedtime basal</b>; high <b>post-breakfast</b> = a prandial problem at that meal → <b>rapid-acting before breakfast</b>. Lunch and supper are fine, so they get nothing. Start low and titrate; needs will climb a lot as the placenta grows.");

  qb(L.preg, "#gdm", ["new-endo-Q53", "Module case"],
    "A baby born at 38 weeks to a mother with GDM weighs 4.5 kg and needs NICU care for low blood glucose. What is the mechanism of the neonatal hypoglycemia?",
    ["Fetal hyperinsulinemia persists after the maternal glucose supply is cut at birth",
     "Maternal insulin crossed the placenta and is still acting",
     "Maternal hyperglycemia damaged the fetal pancreas",
     "The induction of labour caused it",
     "Neonatal adrenal insufficiency from maternal stress"],
    0,
    "<b>Glucose crosses the placenta; insulin doesn't.</b> Maternal hyperglycemia → fetal hyperglycemia → fetal beta cells hypersecrete insulin. Insulin is a growth factor (→ <b>macrosomia</b>, shoulder dystocia, perineal tears), and at delivery the glucose supply stops while the insulin is still high → <b>neonatal hypoglycemia</b>. Jaundice is also more common in these infants.");

  qb(L.preg, "#caveat", ["new-endo-Q55", "Module case"],
    "A woman was labelled with GDM at 26 weeks; she needed large insulin doses, and at 8 weeks postpartum her fasting glucose is 8.1 mmol/L. What is the most likely explanation?",
    ["She had undiagnosed pre-existing type 2 diabetes, picked up when she was first screened in pregnancy",
     "GDM usually persists for a year after delivery",
     "The postpartum test is unreliable while breastfeeding",
     "She developed type 1 diabetes from the stress of delivery",
     "Insulin treatment in pregnancy caused permanent beta-cell injury"],
    0,
    "Glucose is first tested at 24–28 weeks, so anyone with silent pre-existing (usually type 2) diabetes gets labelled 'GDM' then. Clues: <b>unusually high glucose and drug needs</b> in pregnancy, and glucose that <b>doesn't normalize after delivery</b>. That's why everyone with GDM gets a 75 g OGTT 6 weeks to 6 months postpartum. A pregnancy like this also carried malformation risk.");

  /* ---------------------------------------------------- 1.2 T1DM: second glucose record */
  qb(L.t1, "#dose-adjustment", ["module-endo-Q6", "Module case"],
    "Wanda has type 1 diabetes on lispro 6 / 8 / 10 units before breakfast / lunch / supper and detemir 30 units at bedtime. Pre-meal readings (mmol/L):<table><tr><th></th><th>Breakfast</th><th>Lunch</th><th>Supper</th><th>Bedtime</th></tr><tr><td>Mon</td><td>16.3</td><td>8.3</td><td>3.6</td><td>9.3</td></tr><tr><td>Tue</td><td>18.9</td><td>6.9</td><td>3.2</td><td>5.9</td></tr><tr><td>Wed</td><td>14.7</td><td>4.2</td><td>6.1</td><td>7.1</td></tr></table>Which changes are right? <i>(Select all that apply.)</i>",
    ["Increase the bedtime detemir", "Decrease the lunch lispro", "Increase the breakfast lispro", "Increase the supper lispro", "Decrease the bedtime detemir"],
    [0, 1],
    "Fix the insulin acting <b>before</b> the abnormal reading. Pre-breakfast is high every day → the overnight <b>basal (detemir) is too low</b>. Pre-supper lows → the <b>lunch</b> bolus is too big. Pre-lunch readings are fine, so the breakfast bolus stays; bedtime readings are fine, so the supper bolus stays.");

  /* ---------------------------------------------------- 1.10 Prevention of complications */
  qb(L.prev, "#landmark-trials", ["module-endo-Q76", "Slide concept check"],
    "In the DCCT (type 1 diabetes, 6.5 years of intensive vs conventional insulin), intensive control reduced which outcomes during the trial?",
    ["New and worsening retinopathy, neuropathy and albuminuria, but not MI or stroke",
     "MI and stroke, but not retinopathy",
     "Retinopathy only",
     "All-cause mortality",
     "Every microvascular and macrovascular outcome, with no increase in hypoglycemia"],
    0,
    "DCCT: intensive control cut <b>microvascular</b> disease: new retinopathy ↓ ~76%, progression ↓ ~54%, neuropathy ↓ ~60%, albuminuria ↓ ~39–54%. MI and stroke didn't move within the trial period, and severe hypoglycemia rose <b>2–3×</b>, the price of tight control.");

  qb(L.prev, "#landmark-trials", ["module-endo-Q77", "Slide concept check"],
    "Which were findings of the original UKPDS in newly diagnosed type 2 diabetes?",
    ["Intensive glucose control reduced microvascular disease, and tight BP control reduced microvascular disease, strokes and diabetes-related deaths",
     "Intensive glucose control reduced all-cause mortality within the trial",
     "Only blood pressure control mattered; glucose control had no effect",
     "Intensive glucose control reduced MI by half within the trial",
     "Neither intervention changed any outcome"],
    0,
    "UKPDS: intensive glucose control → <b>~25% less microvascular disease</b> (risk falls linearly with A1c), but no significant drop in mortality during the trial. The <b>BP arm</b> delivered the broad benefit in T2DM: fewer strokes, less heart failure, fewer diabetes-related deaths, less microvascular disease and vision loss. In T2DM, BP control buys more macrovascular benefit than glucose control.");

  qb(L.prev, "#bp-lipid", ["reviews-endo-Q41", "Written from review slides"],
    "A 34-year-old has had type 1 diabetes since age 16. No known heart disease, BP 124/78, LDL 2.6 mmol/L. Should he start a statin?",
    ["Yes: he's over 30 with diabetes for more than 15 years",
     "No: statins in diabetes start at age 40",
     "No: he has no coronary disease",
     "Only if his LDL rises above 3.5",
     "Only once he develops albuminuria or retinopathy"],
    0,
    "Diabetes Canada statin indications without known CVD include age <b>≥ 40</b>, or age <b>≥ 30 with diabetes for more than 15 years</b>, or microvascular disease. He's 34 with 18 years of diabetes: yes. The duration clause is the one people forget.");

  qb(L.prev, "#bp-lipid", ["new-endo-Q65", "Module case"],
    "A 31-year-old with type 1 diabetes for 20 years has persistent albuminuria and normal BP. She uses reliable contraception and doesn't plan pregnancy. Which medications should you recommend? <i>(Select all that apply.)</i>",
    ["ACE inhibitor (or ARB)", "Statin", "ASA 81 mg", "Metformin", "ACE inhibitor plus ARB together"],
    [0, 1],
    "<b>ACE inhibitor or ARB</b> for albuminuria (kidney protection, even with normal BP); the contraception detail clears their teratogenicity. <b>Statin</b>: she's ≥ 30 with > 15 years of diabetes and has microvascular disease. ASA isn't for primary prevention; metformin has no role in type 1; and never combine an ACE inhibitor with an ARB (more hyperkalemia and AKI, no extra benefit).");

  qb(L.prev, "#cad-prevention", ["new-endo-Q37", "DSSG cases"],
    "A 58-year-old with type 2 diabetes, hypertension and dyslipidemia asks whether he should take daily low-dose aspirin. He has no known cardiovascular disease. What do you tell him?",
    ["ASA isn't recommended for primary prevention; it's for people with established cardiovascular disease",
     "Everyone with diabetes over 40 should take ASA 81 mg",
     "Take ASA 325 mg daily for maximum protection",
     "ASA is only for type 1 diabetes",
     "Take ASA only if his A1c is above 8%"],
    0,
    "In primary prevention the <b>bleeding risk roughly cancels the benefit</b>, so ASA is for <b>secondary prevention</b> only (known CAD, stroke or PAD). His cardiovascular risk is managed with BP control, a statin, smoking cessation and, where indicated, glucose-lowering drugs with proven cardiovascular benefit.");

  qb(L.prev, "#lifestyle", ["new-endo-Q38", "DSSG cases"],
    "Which package best prevents vision loss from diabetic eye disease?",
    ["Regular eye exams, glucose and BP control, smoking cessation, and fenofibrate",
     "Annual eye exams alone",
     "Glucose control alone",
     "Laser treatment for everyone at diagnosis",
     "An ACE inhibitor alone"],
    0,
    "Eyes: <b>screen</b> (about yearly), control <b>glucose and BP</b>, stop <b>smoking</b>, and <b>fenofibrate</b> slows retinopathy progression. Compare the kidneys (annual ACR, glucose, BP, ACE inhibitor <i>or</i> ARB), neuropathy (glucose control is the only proven prevention) and feet (everything that prevents neuropathy and PAD, plus foot exams and education).");

  qb(L.prev, "#landmark-trials", ["workbook-endo-Q81", "Workbook · Endocrine"],
    "Which intervention is proven to reduce the risk of diabetic peripheral neuropathy?",
    ["Glucose control", "BP control below 130/80", "Statin therapy", "ACE inhibitor", "Daily ASA"],
    0,
    "For neuropathy, <b>glucose control is the only proven preventive intervention</b> (DCCT: ~60% reduction). BP control, ACE inhibitors and statins protect the kidney, eye and heart, but haven't been shown to prevent neuropathy.");

  qb(L.prev, "#case", ["new-endo-Q67", "Module case"],
    "Mr. X, 30, has just been diagnosed with type 2 diabetes: BMI 35, A1c 14%, normal creatinine. What decides whether he starts insulin or metformin?",
    ["How symptomatic he is (marked thirst, polyuria, weight loss, infections)",
     "His A1c on its own",
     "His BMI",
     "Whether he has already tried lifestyle change",
     "His age"],
    0,
    "The trigger is <b>symptom burden and catabolism</b>, not the number: insulin if he's very symptomatic (thirst, polyuria, weight loss, yeast infections); otherwise metformin is first line, if kidneys and liver allow. Insulin started for a severe presentation of T2DM can often be <b>tapered or stopped</b> once glucose toxicity resolves.");

  qb(L.prev, "#bp-lipid", ["new-endo-Q36", "DSSG cases"],
    "Mr. Darcy's father died of kidney failure. Which statement about protecting Mr. Darcy's kidneys is correct?",
    ["Use an ACE inhibitor or an ARB (never both), with annual urine ACR and good glucose and BP control",
     "Combine an ACE inhibitor and an ARB for additive protection",
     "RAAS blockers only matter once he's on dialysis",
     "Kidney protection depends on glucose control alone",
     "Screen with an annual serum creatinine only"],
    0,
    "Kidney prevention: <b>annual urine ACR</b> (plus eGFR), glucose control, BP control and an <b>ACE inhibitor or ARB, but not both</b>. Dual RAAS blockade adds hyperkalemia and AKI without benefit. Creatinine alone misses early nephropathy; albuminuria comes first.");
})();

(function () {
  const L = {
    vd: "w1-vitamin-d-calcium",
    tp: "w1-thyroid-parathyroid",
    ob: "w1-obesity",
    pt2: "w1-prevent-t2dm",
    path: "w1-diabetes-pathophysiology-t1dm-t2dm",
  };

  /* ---------------------------------------------------- 1.11 Vitamin D & calcium drugs */
  qb(L.vd, "#bisphosphonates", ["module-endo-Q66", "Elentra module"],
    "You start a 68-year-old on weekly alendronate. Which counselling is correct?",
    ["Take it first thing in the morning on an empty stomach with a full glass of water, and stay upright for 30 minutes",
     "Take it with breakfast to reduce stomach upset",
     "Take it with your calcium supplement so they absorb together",
     "It's cleared by the liver, so alcohol must be avoided",
     "Lie down for 30 minutes afterwards to prevent dizziness"],
    0,
    "Bisphosphonates have <b>very poor oral bioavailability</b>, and food, calcium or coffee abolish absorption: empty stomach, plain water, wait 30 minutes before eating. Staying <b>upright</b> prevents pill esophagitis (esophageal disease is a contraindication). They bind bone avidly, are <b>excreted unchanged by the kidney</b> (avoid if eGFR &lt; 30–35), and the rare serious effects are ONJ and atypical femoral fractures, mostly with high-potency IV dosing.");

  qb(L.vd, "#rankl-inhibitor", ["module-endo-Q67", "Elentra module"],
    "A 74-year-old on twice-yearly denosumab asks what side effects to watch for. Which are associated with denosumab? <i>(Select all that apply.)</i>",
    ["Hypocalcemia", "Upper respiratory and other infections", "Back and musculoskeletal pain", "Hypercalcemia", "Hyperglycemia"],
    [0, 1, 2],
    "Denosumab is an anti-<b>RANKL</b> monoclonal antibody. Like every antiresorptive it lowers calcium (<b>hypocalcemia</b>: replete vitamin D and calcium first). RANKL also matters in immunity, hence <b>infections</b> (URTI, cellulitis). Musculoskeletal pain, ONJ and atypical femoral fractures are listed too. Stopping it abruptly causes rebound vertebral fractures. Hypercalcemia is teriparatide's signature.");

  qb(L.vd, "#anabolic-agents", ["module-endo-Q68", "Elentra module"],
    "Which effects follow from daily teriparatide (rhPTH 1–34) injections? <i>(Select all that apply.)</i>",
    ["More renal 1α-hydroxylation, so more calcitriol", "Longer osteoblast survival and new bone formation", "More renal calcium reabsorption", "More renal phosphate reabsorption"],
    [0, 1, 2],
    "Teriparatide reproduces PTH's actions: ↑ <b>calcitriol</b> (1α-hydroxylase), ↑ distal tubular <b>calcium reabsorption</b> (hence hypercalcemia and hypercalciuria), and, given as <b>intermittent</b> daily spikes, ↑ osteoblast survival: <b>anabolic</b>. Phosphate is the discriminator: PTH is <b>phosphaturic</b>; vitamin D retains phosphate.");

  /* ---------------------------------------------------- 1.12 Thyroid & parathyroid physiology */
  qb(L.tp, "#thyroid-synthesis", ["module-endo-Q53", "Elentra module"],
    "Thyroid follicular cells concentrate iodide against a steep gradient. Which pairing of transporter and location is correct?",
    ["Sodium-iodide symporter (NIS) on the basolateral membrane; pendrin moves iodide into the colloid",
     "Pendrin on the basolateral membrane; NIS moves iodide into the colloid",
     "Thyroperoxidase transports iodide into the cell",
     "Thyroglobulin carries iodide from the plasma into the cell",
     "Iodide enters passively by diffusion with water"],
    0,
    "<b>NIS</b> (basolateral) brings iodide in from the blood against its gradient using the sodium gradient. <b>Pendrin</b> (apical) moves it into the colloid. Then <b>TPO</b> oxidizes iodide, iodinates tyrosines on thyroglobulin and couples them (iodinate first, then couple). TSH upregulates NIS, TPO and thyroglobulin. Drug link: perchlorate blocks NIS; thionamides block TPO.");

  qb(L.tp, "#hpt-axis", ["weekly-endo-Q26", "Weekly quiz"],
    "A refugee from a region with severe dietary iodine deficiency has a diffusely enlarged thyroid and fatigue. What lab pattern do you expect?",
    ["Low free T4, high TSH", "Low free T4, low TSH", "High free T4, low TSH", "Normal free T4, low TSH", "High free T4, high TSH"],
    0,
    "No iodine → the gland can't make T4/T3 → <b>loss of negative feedback</b> → TSH rises → TSH drives follicular <b>hyperplasia and hypertrophy</b> (goitre). That's primary hypothyroidism: low T4, high TSH. The hypothalamus senses thyroid hormone, not iodine. A low TSH with low T4 would point to the pituitary.");

  qb(L.tp, "#calcium-handling", ["module-endo-Q59", "Elentra module"],
    "In a healthy person, ionized calcium falls acutely. Which set of changes follows?",
    ["PTH rises, calcitriol rises, and nerve and muscle excitability increases",
     "PTH rises, calcitriol falls, and excitability decreases",
     "PTH falls, calcitriol rises, and excitability increases",
     "No hormonal change until calcium falls below 1.5 mmol/L",
     "PTH and calcitriol both fall"],
    0,
    "The calcium-sensing receptor detects the drop → <b>PTH ↑</b> → renal 1α-hydroxylase ↑ → <b>calcitriol ↑</b>. Low calcium also lowers the threshold for depolarization → <b>↑ neuromuscular excitability</b> (tingling, Chvostek, Trousseau, tetany). That's why hypocalcemia makes nerves fire too easily, and hypercalcemia makes people sluggish.");

  qb(L.tp, "#pth-actions", ["weekly-endo-Q28", "Weekly quiz"],
    "PTH raises intestinal calcium absorption. How?",
    ["Indirectly: it stimulates renal 1α-hydroxylase, and the resulting calcitriol acts on the gut",
     "Directly, through PTH receptors on enterocytes",
     "By increasing gastric acid secretion",
     "By inhibiting calcitonin release",
     "It doesn't; PTH reduces gut calcium absorption"],
    0,
    "There are <b>no PTH receptors in the gut</b>. PTH acts on <b>bone</b> (resorption, via osteoblast RANKL), the <b>kidney</b> (↑ distal Ca reabsorption, ↓ phosphate reabsorption, ↑ 1α-hydroxylase), and only indirectly on the gut via calcitriol. PTHrP from tumours binds the same PTH receptor, which is how humoral hypercalcemia of malignancy happens.");

  qb(L.tp, "#calcium-handling", ["hippo-endo-Q23", "HippoNotes"],
    "A hypocalcemic patient starts vitamin D and asks whether it will strengthen her bones right away. What happens at bone while her calcium is low?",
    ["Calcitriol promotes resorption to release calcium into the blood",
     "Calcitriol promotes mineralization regardless of serum calcium",
     "Calcitriol has no effect on bone",
     "Calcitriol promotes resorption regardless of serum calcium",
     "Calcitriol directly stimulates osteoblasts to lay down collagen"],
    0,
    "Vitamin D's effect on bone <b>depends on the calcium level</b>. When calcium is low, calcitriol (with PTH) drives osteoclastic <b>resorption</b> alongside ↑ gut absorption to defend serum calcium. Only once calcium and phosphate are replete does it support <b>mineralization</b>, which is why treating deficiency eventually heals osteomalacia.");

  qb(L.tp, "#thyroid-hormone-roles", ["new-endo-Q69", "Module case"],
    "An 8-year-old with Hashimoto thyroiditis is well below the height curve with a delayed bone age. One year after starting levothyroxine he has grown 15 cm. What best explains the catch-up growth?",
    ["Thyroid hormone is needed for GH secretion and is permissive for GH action on growth",
     "Levothyroxine stimulates the growth plates independently of GH",
     "Anti-TPO antibodies had been directly suppressing GH",
     "It's coincidental early puberty",
     "Levothyroxine raises IGF-binding protein, freeing IGF-1"],
    0,
    "Thyroid hormone is <b>permissive</b> for growth hormone: without it, GH can't drive linear growth, so growth stalls and bone age lags. Replace T4 and the signal returns: <b>catch-up growth</b>. Hypothyroidism belongs on every short-child differential (its hallmark is weight preserved while height falls off), and it's very treatable.");

  /* ---------------------------------------------------- 1.13 Obesity */
  qb(L.ob, "", ["module-endo-Q42", "Module case"],
    "A 45-year-old man is seeing you about his hypertension; he now also has prediabetes. You'd like to address his weight. What is the best first step?",
    ["Ask his permission to talk about weight, and listen to his experience",
     "Weigh him and calculate his BMI",
     "Advise him to lose 10% of his body weight",
     "Prescribe a GLP-1 receptor agonist",
     "Refer him to a dietitian"],
    0,
    "The <b>5 As</b> start with <b>Ask</b>: ask permission and listen without judgment, then Assess, Advise, Agree, Assist. Obesity is a complex, relapsing chronic disease (genetics, hormones, medications, social determinants, environment), not a willpower problem, and a respectful start makes everything after it work.");

  qb(L.ob, "", ["weekly-endo-Q14", "Weekly quiz"],
    "Luigi, BMI 32, needs to lose weight before knee replacement. History: <b>pancreatitis</b> and MI; meds ASA, bisoprolol, atorvastatin, perindopril. Alongside lifestyle change, which medication fits?",
    ["Naltrexone-bupropion", "Semaglutide", "Tirzepatide", "Metformin", "No medication is appropriate"],
    0,
    "<b>Pancreatitis</b> rules out the incretin agents (semaglutide, tirzepatide). Metformin isn't a weight-loss drug. That leaves <b>naltrexone-bupropion</b>. Twin question next: move the contraindication and the answer flips.");

  qb(L.ob, "", ["weekly-endo-Q18", "Weekly quiz"],
    "Paul, BMI 34, has regained weight after three diets. He takes <b>phenytoin for seizures</b>. Which medications are reasonable options alongside lifestyle change? <i>(Select all that apply.)</i>",
    ["Semaglutide", "Tirzepatide", "Naltrexone-bupropion", "Metformin"],
    [0, 1],
    "<b>Bupropion lowers the seizure threshold</b>, so naltrexone-bupropion is out. Metformin isn't an anti-obesity drug. Semaglutide and tirzepatide are both approved. Pair this with the Luigi question: pancreatitis knocks out the incretins, seizures knock out bupropion.");

  qb(L.ob, "", ["hippo-endo-Q18", "HippoNotes"],
    "A 30-year-old qualifies for obesity pharmacotherapy. Her PHQ-9 suggests moderate depression. Which agent should you avoid for now?",
    ["Naltrexone-bupropion", "Semaglutide", "Liraglutide", "Orlistat", "Tirzepatide"],
    0,
    "Naltrexone-bupropion carries a warning for <b>suicidal thoughts in patients with depression</b> (bupropion acts centrally). Assess and treat the depression first. Orlistat works peripherally (gut lipase; GI effects, modest efficacy). Rough order of efficacy from the lecture: tirzepatide > semaglutide > naltrexone-bupropion > orlistat.");

  qb(L.ob, "", ["module-endo-Q44", "Module case"],
    "Sophie has taken semaglutide at the maximum tolerated dose for 12 weeks and has lost only 2% of her body weight. What is the most appropriate next step?",
    ["Consider switching agents (for example to tirzepatide): she hasn't reached the 5% response threshold",
     "Continue semaglutide indefinitely",
     "Tell her to exercise more and keep the same drug",
     "Refer her straight to bariatric surgery",
     "Add orlistat to the semaglutide"],
    0,
    "The efficacy check for obesity drugs is <b>≥ 5% weight loss after 12 weeks at the maximum tolerated dose</b>. Below that, this agent probably isn't working for her, so consider a different one. Activity matters, but it isn't the fix for a drug non-response. Surgery depends on eligibility, not on one drug failing.");

  qb(L.ob, "", ["reviews-endo-Q4", "Review practice question"],
    "A 38-year-old with a BMI of 37 and type 2 diabetes asks about bariatric surgery. She smokes half a pack a day and has depression that's partly controlled on sertraline. What is the most appropriate statement?",
    ["She qualifies, but needs smoking cessation and her mental health optimized first",
     "She's ineligible because she smokes and has depression",
     "She's ineligible: surgery requires a BMI of at least 45",
     "She can go ahead immediately; counselling is optional",
     "She must start insulin before being considered"],
    0,
    "Eligibility: BMI ≥ 40, or ≥ 35 with obesity complications (or ≥ 30 with poorly controlled T2DM): she qualifies. <b>Smoking cessation is mandatory</b> (before and after), and mental illness must be treated and stable; only <i>unstable</i> psychiatric illness excludes. So: optimize, don't deny.");

  qb(L.ob, "", ["reviews-endo-Q42", "Written from review slides"],
    "Three months after a Roux-en-Y gastric bypass, a 41-year-old has had 2 weeks of vomiting and is now confused with nystagmus and an unsteady gait. Capillary glucose 3.9 mmol/L. What do you give first?",
    ["IV thiamine", "IV dextrose bolus", "Oral vitamin B12", "IV iron", "Calcium and vitamin D"],
    0,
    "Confusion, nystagmus and ataxia after bariatric surgery with vomiting = <b>Wernicke encephalopathy</b> (thiamine deficiency, 1–3 months post-op). Give <b>thiamine before any glucose</b>: glucose first can precipitate or worsen it. B12, iron and calcium deficiencies are common after bypass too, but they're not the emergency.");

  /* ---------------------------------------------------- 1.14 Preventing T2DM */
  qb(L.pt2, "", ["module-endo-Q80", "Slide concept check"],
    "In the Diabetes Prevention Program, how did lifestyle change compare with metformin in people with impaired glucose tolerance?",
    ["Lifestyle (about 150 min/week of activity plus a lower-calorie, lower-fat diet) cut progression by ~58%, about twice metformin's ~31%",
     "Metformin was about twice as effective as lifestyle",
     "They were equally effective",
     "Neither reduced progression",
     "Lifestyle worked only in people under 30"],
    0,
    "DPP: <b>lifestyle ↓ 58%, metformin ↓ 31%</b> vs placebo. The lifestyle arm targeted 7% weight loss and actually achieved about <b>5%</b>, and that was enough. Metformin came closest to lifestyle in younger people, people with BMI > 35, and women with previous GDM.");

  qb(L.pt2, "", ["module-endo-Q82", "Slide concept check"],
    "A 50-year-old with prediabetes asks if a 'diabetes pill' could prevent diabetes. Which drug has <b>no</b> evidence for preventing type 2 diabetes?",
    ["Gliclazide", "Metformin", "Pioglitazone", "Semaglutide", "Acarbose"],
    0,
    "Drugs with prevention evidence either <b>improve insulin sensitivity or cause weight loss</b>: metformin (~31%), TZDs (~70%, but heart failure, edema and fractures), acarbose, orlistat and GLP-1 agonists. A sulfonylurea just flogs failing beta cells and doesn't prevent anything. And note: <b>no drug is approved</b> in Canada for diabetes prevention.");

  qb(L.pt2, "", ["module-endo-Q81", "Slide concept check"],
    "Which medication is approved in Canada specifically for the prevention of type 2 diabetes?",
    ["None of them", "Metformin", "Pioglitazone", "Semaglutide", "Empagliflozin"],
    0,
    "Several have evidence behind them (metformin, TZDs, acarbose, orlistat, GLP-1 agonists), but <b>none is approved for prevention</b>: side effects, uncertain long-term safety and cost block it. Lifestyle is the evidence-based first line, and bariatric surgery is the most effective intervention but isn't first line for prevention.");

  /* ---------------------------------------------------- 1.1 C-peptide */
  qb(L.path, "#t2dm", ["new-endo-Q62", "Module case"],
    "A 28-year-old has confirmed diabetes. His mother has type 1 and his grandfather type 2. If he has <b>type 2</b> diabetes, what would you expect?",
    ["C-peptide normal or high, anti-GAD negative", "C-peptide low, anti-GAD positive", "C-peptide high, anti-GAD positive", "C-peptide low, anti-GAD negative", "C-peptide undetectable, insulin high"],
    0,
    "C-peptide is released 1:1 with endogenous insulin. In <b>T2DM</b> the beta cells are still secreting against resistance → C-peptide <b>preserved or high</b>, no islet autoimmunity. In <b>T1DM</b> → low C-peptide, positive antibodies (GAD most specific). Family history alone can't settle it.");
})();

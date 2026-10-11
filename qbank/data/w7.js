/* Week 7 · Musculoskeletal. Adapted from the class qbank (src = their id) unless null. */
(function () {
  const IA = "w7-intro-msk-anatomy", MB = "w7-mechanical-back-neck-pain", NM = "w7-non-mechanical-back-neck-pain",
        UE = "w7-proximal-upper-extremity", AR = "w7-axial-spine-radiology";

  /* ---------------------------------------------------- 7.2 Mechanical back & neck pain */
  qb(MB, "#mechanical", ["workbook-msk-Q60", "Workbook · MSK"],
    "A 50-year-old presents to your family clinic with low back pain. Which findings are red flags? <i>(Select all that apply.)</i>",
    ["Pain at night or at rest", "Saddle anaesthesia", "Unintentional weight loss", "New urinary or fecal incontinence", "IV drug use", "Tenderness on palpation of the paraspinal muscles", "A family history of back pain"],
    [0, 1, 2, 3, 4],
    "Red flags fall into six groups: <b>neurologic</b> (progressive deficit, <b>saddle anaesthesia, incontinence</b>: cauda equina), <b>inflammatory</b> (morning stiffness, night pain, better with exercise), <b>neoplastic</b> (night pain, <b>weight loss</b>, cancer history), <b>infectious</b> (fever, <b>IV drug use</b>, immunosuppression), <b>fracture</b> (trauma, osteoporosis, steroids, age) and <b>vascular</b> (AAA). Local tenderness and family history aren't red flags.");

  qb(MB, "#facet", ["reviews-msk-Q1", "Written from review slides"],
    "Frank, 55, has 3 months of low back pain that's worse when he leans backward or stands for long, and eases when he bends forward. It doesn't go below the knee; neuro exam is normal. Most likely pain generator?",
    ["Lumbar facet joints", "Intervertebral disc", "A lumbar nerve root", "Pars interarticularis", "Sacroiliac joint"],
    0,
    "<b>Facetogenic</b>: localized, sometimes one-sided, <b>worse with extension</b> (facets loaded) and <b>relieved by flexion</b>, rarely radiating past the knee. <b>Discogenic</b>: back > leg, <b>worse with flexion</b> and sitting (disc squeezed). Both are mechanical and treated the same way: <b>physio</b> is the mainstay, with NSAIDs and acetaminophen.");

  qb(MB, "#vertebra", ["workbook-msk-Q4", "Workbook · MSK"],
    "Which joint allows most of the rotation when you shake your head 'no'?",
    ["Atlanto-axial joint (C1 on C2)", "Atlanto-occipital joint (skull on C1)", "C5–C6 facet joints", "Uncovertebral joints", "Cervicothoracic junction"],
    0,
    "Skull on C1 (<b>atlanto-occipital</b>) says <b>'yes'</b> (flexion and extension, nodding); C1 on C2 (<b>atlanto-axial</b>, around the dens) says <b>'no'</b> (rotation). That's why the atlanto-dental interval on a lateral C-spine matters (< 3 mm in adults): transverse ligament failure lets C1 slide on C2.");

  qb(MB, "#bridge", ["reviews-msk-Q5", "Written from review slides"],
    "A 16-year-old gymnast has low back pain that's worse when she arches her back. Imaging shows a defect in the pars interarticularis of L5 without any slip. Diagnosis?",
    ["Spondylolysis", "Spondylosis", "Degenerative spondylolisthesis", "Vertebral compression fracture", "Facet arthropathy"],
    0,
    "<b>Spondylolysis</b> = a stress fracture of the <b>pars interarticularis</b> in young athletes who repeatedly hyperextend (gymnasts, football linemen, weightlifters); on the oblique film it's the <b>collar on the Scotty dog</b>. It can progress to isthmic <b>spondylolisthesis</b> (a slip). <b>Spondylosis</b> is degenerative disc and facet disease in older adults.");

  /* POM2 originals */
  qb(MB, "#imaging", null,
    "Dev, 38, a warehouse worker, has 2 weeks of low back pain after lifting. It's worse with movement and better lying down. No red flags; neuro exam normal. He asks for an MRI. What do you do?",
    ["No imaging: reassure, stay active, NSAIDs or acetaminophen, physio, and return if red flags or not improving by ~6 weeks", "Lumbar MRI now", "Lumbar x-ray now", "CT of the lumbar spine", "Bed rest for 2 weeks"],
    0,
    "Mechanical pain <b>without red flags and under 6 weeks</b> → <b>no imaging</b>. Early imaging finds incidental degeneration, adds radiation (x-ray, CT) and doesn't improve outcomes. <b>Keep moving</b>; bed rest slows recovery. Image for red flags, progressive neuro deficit, or failure to improve after conservative care.");

  qb(MB, "#disc", null,
    "Priya, 32, has deep central low back pain that's worse sitting at her desk and when she bends forward to put on shoes, with some ache into the buttock. No leg symptoms below the knee; neuro exam normal. Most likely source?",
    ["Intervertebral disc (discogenic pain)", "Lumbar facet joints", "S1 radiculopathy", "Lumbar spinal stenosis", "Sacroiliitis"],
    0,
    "<b>Discogenic</b> pain: axial, back > leg, <b>worse with flexion and sitting</b> (intradiscal pressure rises). Facet pain is the opposite (worse in extension). No dermatomal pain or deficit, so not a radiculopathy. Treat it as mechanical: education, activity, physio, analgesia.");

  qb(MB, "#whiplash", null,
    "Two days after being rear-ended at low speed, Tom, 29, has neck pain and stiffness. He walked at the scene, has no midline tenderness, can rotate his neck 45° each way, and his neuro exam is normal. Management?",
    ["Reassure, keep moving, simple analgesia; no collar and only modest early physio", "Cervical CT", "A soft collar for 6 weeks", "Cervical MRI", "Bed rest and opioids"],
    0,
    "Low-risk features (ambulatory, delayed onset, no midline tenderness, can rotate 45°) mean <b>no imaging</b> under the Canadian C-spine rule. <b>Whiplash</b> (acceleration–deceleration soft-tissue strain) does best with <b>reassurance and early movement</b>; collars and passivity prolong symptoms. Fewer than 5% have severe symptoms at 2 years.");

  /* ---------------------------------------------------- 7.3 Non-mechanical back & neck pain */
  qb(NM, "#which-root", ["reviews-msk-Q3", "Written from review slides"],
    "Mo, 44, has sharp pain shooting down the back of his leg to the foot after lifting a box. MRI shows a posterolateral L4–L5 disc herniation. Which finding fits best?",
    ["Weak great toe extension with numbness over the dorsum of the foot", "Reduced patellar reflex", "Weak ankle plantar flexion", "Numbness of the lateral heel", "Reduced Achilles reflex"],
    0,
    "Lumbar roots exit <b>below</b> their vertebra, so a <b>paracentral L4–5</b> disc hits the <b>traversing L5</b> root (a far-lateral L4–5 disc hits L4). <b>L5</b>: dorsum of foot (1st–3rd web spaces), <b>great toe extension</b>, hamstring reflex. <b>L4</b>: medial leg, dorsiflexion, patellar reflex. <b>S1</b>: lateral foot and heel, plantar flexion, Achilles.");

  qb(NM, "#levels", ["workbook-msk-Q7", "Workbook · MSK"],
    "Which nerve roots are most often affected by radiculopathy?",
    ["L5 and S1 in the lumbar spine; C6 and C7 in the neck", "L1 and L2; C1 and C2", "L3 and L4; C3 and C4", "T10 and T12; C8 and T1", "S2 and S3; C4 and C5"],
    0,
    "Most disc herniations are lumbar at <b>L4–5 and L5–S1</b> (giving <b>L5 and S1</b> radiculopathy), followed by cervical <b>C5–6 and C6–7</b> (<b>C6 and C7</b>). Those are the mobile, heavily loaded segments where degeneration concentrates.");

  qb(NM, "#lumbar-stenosis", ["reviews-msk-Q2", "Written from review slides"],
    "Walter, 72, gets burning and tingling in both legs after walking a block. He walks further leaning on a shopping cart and manages hills better than flat ground. Sitting relieves it, but only after several minutes. Pedal pulses are normal. Diagnosis?",
    ["Lumbar spinal stenosis (neurogenic claudication)", "Peripheral arterial claudication", "Cauda equina syndrome", "Facet arthropathy", "Piriformis syndrome"],
    0,
    "<b>Central lumbar stenosis</b> compresses roots: bilateral leg > back symptoms, worse <b>standing and walking</b> (extension narrows the canal), eased by <b>flexion</b> (the shopping-cart sign, walking uphill) and only slowly by sitting. <b>Vascular</b> claudication settles within minutes of standing still, is worse uphill, and comes with poor pulses. No bladder or bowel symptoms, so not cauda equina.");

  qb(NM, "#myelopathy", ["reviews-msk-Q4", "Written from review slides"],
    "Joan, 64, has 6 months of clumsiness doing up buttons and an unsteady gait. She has wasted intrinsic hand muscles, brisk reflexes in all four limbs, a positive Hoffmann sign, and new urinary urgency. Next step?",
    ["Cervical MRI and urgent spine referral", "Nerve conduction studies for carpal tunnel", "Physiotherapy and NSAIDs", "Cervical epidural steroid injection", "Flexion–extension x-rays alone"],
    0,
    "<b>Cervical spondylotic myelopathy</b>: central stenosis compresses the <b>cord</b>, giving clumsy, wasted hands, gait and balance trouble, sphincter symptoms, and <b>UMN signs below the level</b> (with LMN or radicular signs at the level). It's progressive: <b>MRI and urgent surgical referral</b>. Carpal tunnel doesn't cause hyperreflexia or gait change.");

  /* POM2 originals */
  qb(NM, "#centre", null,
    "Rob, 45, has a week of back pain with sciatica in both legs. Since this morning he can't pass urine, and he has numbness 'where he sits'. Bladder scan: 900 mL. Next step?",
    ["Emergency MRI of the lumbar spine and urgent spine surgery consult (decompression within 48 h)", "Analgesia and review in 2 weeks", "Physiotherapy referral", "Lumbar x-ray and discharge", "An epidural steroid injection"],
    0,
    "<b>Cauda equina syndrome</b>: <b>saddle anaesthesia</b>, <b>urinary retention</b> (overflow incontinence later), fecal incontinence, bilateral leg weakness or sciatica, from a large central disc, tumour, abscess or hematoma. It's a <b>surgical emergency</b>: urgent MRI and <b>decompression within 48 h</b> to protect bladder, bowel and sexual function. Catheterize.");

  qb(NM, "#which-root", null,
    "A 50-year-old has neck pain radiating to the thumb and index finger, with weak wrist extension and a reduced brachioradialis reflex. Which disc level is most likely herniated?",
    ["C5–C6 (C6 root)", "C4–C5 (C5 root)", "C6–C7 (C7 root)", "C7–T1 (C8 root)", "C3–C4 (C4 root)"],
    0,
    "Cervical roots exit <b>above</b> their vertebra, so the <b>C5–6 disc hits C6</b>. <b>C6</b>: lateral forearm, digits I and II, elbow flexion and <b>wrist extension</b>, biceps and <b>brachioradialis</b> reflexes. <b>C7</b>: middle finger, elbow extension, triceps reflex. <b>C5</b>: lateral shoulder, shoulder abduction.");

  qb(NM, "#inflammatory", null,
    "Ahmed, 24, has 5 months of low back and buttock pain. He wakes in the second half of the night with it, has over an hour of morning stiffness, and feels better after exercise but not with rest. What is the likely diagnosis and work-up?",
    ["Inflammatory back pain (axial spondyloarthritis): CRP, HLA-B27, sacroiliac imaging (MRI), and rheumatology referral; NSAIDs", "Mechanical back pain: rest and reassurance", "Lumbar disc herniation: urgent MRI of L4–5", "Facet syndrome: facet injections", "Malingering"],
    0,
    "<b>Inflammatory</b> back pain is a red flag: onset < 40, insidious, > 3 months, <b>morning stiffness</b>, night pain, <b>better with exercise, not rest</b>. Think <b>seronegative spondyloarthropathy</b> (ankylosing spondylitis, psoriatic, IBD-related, reactive). <b>NSAIDs</b> first; biologics if they fail.");

  qb(NM, "#fractures", null,
    "Edna, 74, on long-term prednisone for COPD, has sudden severe mid-back pain after lifting a bag of groceries. There's point tenderness over T11; neuro exam normal. Most likely diagnosis and approach?",
    ["Osteoporotic vertebral compression fracture: x-ray, analgesia, early mobilization, and treat the osteoporosis", "Mechanical muscle strain: reassure", "Thoracic disc herniation: urgent surgery", "Pyelonephritis: antibiotics", "Facet syndrome: injections"],
    0,
    "<b>Fracture</b> red flags: age, <b>steroids</b>, known osteoporosis, minor trauma. A vertebral fragility fracture is a <b>sentinel event</b>: start osteoporosis treatment (a bisphosphonate), check vitamin D, and reduce falls. Neuro deficit or posterior-element involvement suggests instability or another cause (e.g., metastasis), so image further.");

  qb(NM, "#visceral", null,
    "Ed, 71, a smoker with hypertension, has sudden severe low back pain radiating to his flank. BP 88/50, HR 120; a tender pulsatile mass is felt above the umbilicus. What's going on?",
    ["Ruptured abdominal aortic aneurysm: resuscitate and get emergency vascular surgery", "Renal colic: analgesia and CT KUB tomorrow", "Lumbar disc herniation", "Vertebral compression fracture", "Muscle strain"],
    0,
    "Not all back pain comes from the spine. <b>Visceral and vascular</b> causes: <b>AAA</b>, dissection, pancreatitis, pyelonephritis or stones, posterior ulcers, pelvic disease. Back pain with <b>hypotension and a pulsatile mass</b> in an older smoker is a ruptured AAA until proven otherwise (bedside ultrasound, straight to the OR if unstable).");

  qb(NM, "#radic-management", null,
    "Three weeks after onset, a 40-year-old with an L5 radiculopathy has leg pain controlled with analgesia and mild great toe weakness that isn't worsening. No red flags. What do you advise?",
    ["Conservative care (activity, analgesia, physio); most improve over weeks to months. MRI if weakness progresses, pain is intractable, or red flags appear", "Urgent discectomy", "Immediate MRI and epidural injection", "Strict bed rest", "Opioids long term"],
    0,
    "The natural history of radiculopathy is <b>improvement</b>: the herniated material often regresses. Image early for <b>progressive or severe motor deficit</b>, intractable pain, or <b>red flags</b> (cauda equina). Epidural steroids or surgery are for <b>refractory</b> cases; surgery speeds relief but long-term outcomes are similar.");

  /* ---------------------------------------------------- 7.4 Proximal upper extremity */
  qb(UE, "#arthritis", ["reviews-msk-Q6", "Written from review slides"],
    "Mary, 58, with longstanding rheumatoid arthritis, has deep aching shoulder pain. Active range is reduced, passive range is near full, and rotator cuff strength is poor. X-ray shows symmetric joint-space loss, erosions and osteopenia. Diagnosis?",
    ["Inflammatory (rheumatoid) shoulder arthritis", "Primary glenohumeral osteoarthritis", "Adhesive capsulitis", "AC joint osteoarthritis", "Post-traumatic arthritis"],
    0,
    "Read the motion. <b>Inflammatory</b>: passive > active, <b>weak cuff</b> (the cuff is often damaged), <b>symmetric</b> narrowing, erosions, osteopenia, so surgery is a <b>reverse</b> replacement. <b>OA</b>: active and passive both reduced (osteophytes block it), cuff intact, <b>asymmetric</b> wear with osteophytes. <b>Frozen shoulder</b>: global loss with a normal x-ray.");

  qb(UE, "#capsulitis", ["reviews-msk-Q7", "Written from review slides"],
    "Linda, 52, with type 2 diabetes, had months of shoulder pain that has given way to stiffness. Active and passive motion are restricted in every direction, especially external rotation. X-ray is normal. Diagnosis?",
    ["Adhesive capsulitis (frozen shoulder)", "Glenohumeral osteoarthritis", "Full-thickness rotator cuff tear", "Inflammatory arthritis", "Calcific tendinitis"],
    0,
    "<b>Adhesive capsulitis</b>: 40s–50s, <b>diabetes</b> (up to ~20% of diabetics), spontaneous onset, <b>global loss of active and passive motion</b>, <b>normal x-ray</b>. Painful freezing → frozen → thawing, and it's self-limited (often over 1–2 years): analgesia, physio, intra-articular steroid. Cuff tears preserve passive motion; OA shows osteophytes.");

  qb(UE, "#ac-problems", ["reviews-msk-Q8", "Written from review slides"],
    "A 24-year-old cyclist falls onto the point of his shoulder. The distal clavicle is prominent, and x-ray confirms a grade III AC separation. Management?",
    ["Sling, ice and analgesia, then early range-of-motion exercise", "Open reduction and internal fixation", "Reverse shoulder arthroplasty", "Closed reduction under sedation", "Arthroscopic debridement"],
    0,
    "A fall on the point of the shoulder drives the acromion down: the AC ligaments tear, then the <b>coracoclavicular</b> (trapezoid and conoid) ligaments. <b>Types I–III</b> → non-operative (sling, analgesia, early motion). <b>Types IV–V</b> (posterior or severe displacement) → surgery. Gradual AC pain without trauma is usually OA.");

  qb(UE, "#ac-anatomy", ["workbook-msk-Q69", "Workbook · MSK"],
    "In a severe AC separation with the clavicle displaced well above the acromion, which ligaments must be torn?",
    ["The acromioclavicular ligaments and the coracoclavicular ligaments (trapezoid and conoid)", "The coracohumeral ligament only", "The glenohumeral ligaments", "The transverse humeral ligament", "The sternoclavicular ligaments"],
    0,
    "The <b>AC ligaments</b> control horizontal stability; the <b>coracoclavicular ligaments</b> (<b>conoid</b> medially, <b>trapezoid</b> laterally) hold the clavicle down (vertical stability). Marked superior displacement means both are torn (grade III+). The coracohumeral ligament belongs to the glenohumeral joint.");

  qb(UE, "#instability", ["reviews-msk-Q9", "Written from review slides"],
    "Sara, 19, has recurrent episodes of both shoulders 'slipping' with everyday tasks, with no injury. She has multidirectional laxity, generalized joint hypermobility and poor scapular control. First-line treatment?",
    ["Physiotherapy: rotator cuff and scapular stabilizer strengthening", "Arthroscopic Bankart repair", "Inferior capsular shift as first line", "Closed reduction", "Long-term sling immobilization"],
    0,
    "<b>AMBRI</b> ('born loose'): <b>A</b>traumatic, <b>M</b>ultidirectional, <b>B</b>ilateral, <b>R</b>ehab, with Inferior capsular shift only if rehab fails. <b>TUBS</b> ('torn loose'): <b>T</b>raumatic, <b>U</b>nidirectional (almost always <b>anterior</b>), <b>B</b>ankart lesion, often <b>S</b>urgery, especially in young athletes with high recurrence.");

  qb(UE, "#gh-anatomy", ["workbook-msk-Q40", "Workbook · MSK"],
    "After a fall, a 68-year-old man can't actively lift his arm. You raise it overhead; as he lowers it slowly, control holds briefly and then the arm drops to his side. Which injury does this suggest?",
    ["A rotator cuff (supraspinatus) tear", "Adhesive capsulitis", "Anterior shoulder dislocation", "AC joint osteoarthritis", "Thoracic outlet syndrome"],
    0,
    "A positive <b>drop-arm test</b> means a <b>rotator cuff tear</b> (usually supraspinatus), common after a fall in older adults with degenerated cuffs. Passive motion is preserved (you could lift the arm), which separates it from frozen shoulder and OA. A dislocated shoulder wouldn't let you lift the arm overhead at all.");

  /* POM2 originals */
  qb(UE, "#gh-anatomy", null,
    "Jake, 20, dislocated his shoulder for the first time making a tackle with his arm abducted and externally rotated. Which direction, and what must you check before and after reduction?",
    ["Anterior (anteroinferior) dislocation; check axillary nerve function (sensation over the lateral shoulder, deltoid)", "Posterior dislocation; check the radial nerve", "Inferior dislocation; check the median nerve", "Anterior dislocation; check the ulnar nerve", "Posterior dislocation; check the musculocutaneous nerve"],
    0,
    "The glenohumeral joint trades stability for mobility (big head, shallow glenoid, lax capsule), and the capsule is weakest <b>anteroinferiorly</b>, so >95% dislocate <b>anteriorly</b>. The <b>axillary nerve</b> wraps around the surgical neck and is at risk: test 'regimental badge' sensation and deltoid. Get two views (AP plus axillary or Y). Young athletes have high recurrence → consider surgical stabilization.");

  qb(UE, "#bones", null,
    "An 80-year-old with osteoporosis falls onto her outstretched hand and has a fracture of the surgical neck of the humerus. Which structure is most at risk?",
    ["The axillary nerve (and posterior circumflex humeral artery)", "The radial nerve", "The median nerve", "The ulnar nerve", "The long thoracic nerve"],
    0,
    "<b>Surgical neck</b> fractures (low-energy falls in older adults) → <b>axillary nerve</b>. <b>Midshaft</b> fracture → <b>radial nerve</b> and deep brachial artery in the spiral groove (wrist drop). <b>Supracondylar or distal</b> humerus → median nerve and brachial artery; <b>medial epicondyle</b> → ulnar nerve.");

  qb(UE, "#arthritis", null,
    "Bill, 70, a retired carpenter, has years of worsening shoulder pain and stiffness. Active and passive motion are both reduced with crepitus; cuff strength is normal. X-ray shows asymmetric posterior joint-space loss, a large inferior osteophyte and subchondral sclerosis. If conservative care fails, which surgery fits?",
    ["Anatomic total shoulder arthroplasty", "Reverse total shoulder arthroplasty", "Arthroscopic Bankart repair", "Capsular release", "AC joint excision"],
    0,
    "<b>Primary glenohumeral OA</b>: active and passive motion lost (osteophytes block it), <b>cuff intact</b>, asymmetric (posterior) wear. With a working cuff, an <b>anatomic</b> replacement restores function. A <b>reverse</b> arthroplasty (moves the centre of rotation so the deltoid can lift) is for a <b>deficient cuff</b>, as in inflammatory arthritis or cuff tear arthropathy.");

  /* ---------------------------------------------------- 7.5 Axial spine radiology */
  qb(AR, "#trauma", ["workbook-msk-Q5", "Workbook · MSK"],
    "Which patient most needs a CT of the spine?",
    ["A 30-year-old after a high-speed MVC this morning with severe midline neck pain despite analgesia; plain C-spine films were normal",
     "A 40-year-old with 6 weeks of mechanical low back pain slowly improving with physio",
     "A 20-year-old with morning back stiffness that improves with activity",
     "A 70-year-old with 3 months of L5 radicular pain and mild numbness despite physio",
     "A 35-year-old with 2 weeks of facet-type pain"],
    0,
    "<b>CT</b> is the study for <b>bony injury</b>: in real acute trauma it usually replaces plain films, and normal x-rays don't clear a high-risk neck with persisting midline pain. Inflammatory back pain → <b>MRI</b> of the SI joints if imaging is needed. Persistent radiculopathy → <b>MRI</b> (shows discs and roots). Uncomplicated mechanical pain → no imaging.");

  qb(AR, "#cervical", null,
    "On a lateral C-spine x-ray after a fall, the four alignment lines look intact, but the prevertebral soft tissue at C2 measures 11 mm. What does this mean?",
    ["Abnormal: prevertebral swelling (e.g., hematoma) suggests an occult injury, so keep the collar on and get a CT", "Normal at C2", "Normal: only bone matters on a C-spine film", "It suggests a retropharyngeal tumour; outpatient MRI", "It indicates scoliosis"],
    0,
    "Read with <b>ABCS</b>: Alignment (four lines), Bones, Cartilage and joints (disc spaces, ADI < 3 mm adults / < 5 mm children), <b>Soft tissues</b>. Prevertebral tissue should be <b>< 7 mm at C2</b> and < 22 mm at C6. Swelling can be the only clue to a fracture or ligament injury. The lateral is the single most important view: make sure C7–T1 is visible.");

  qb(AR, "#trauma", null,
    "CT after a fall from a ladder shows an L1 fracture involving the vertebral body and the posterior elements (fractured lamina, widened interspinous distance). How do you interpret it?",
    ["A potentially unstable fracture: keep spinal precautions and get urgent spine surgery (MRI to assess the cord and ligaments)", "A stable fracture: discharge with analgesia", "A normal variant", "Old degenerative change", "Osteoporotic wedging: start a bisphosphonate only"],
    0,
    "<b>Posterior-element involvement</b> (lamina, pedicles, facets, interspinous ligaments) signals <b>instability</b>; an isolated anterior wedge with intact posterior elements is usually stable. Perched or dislocated facets with a slip → MRI and urgent neurosurgery. Count levels: the first rib marks T1; the 12th rib sits just above L1.");

  qb(AR, "#scoliosis", null,
    "A 14-year-old girl's standing PA spine film shows a right thoracic curve with a Cobb angle of 55°, and she is still growing. What does this mean?",
    ["Significant scoliosis: above ~50°, surgical correction is usually considered", "A normal variant (under 10°)", "Mild scoliosis needing no follow-up", "Kyphosis, not scoliosis", "Bracing only if over 80°"],
    0,
    "<b>Cobb angle</b> (between the endplates of the most tilted vertebrae): <b>< 10°</b> = normal variant; <b>> 10°</b> = scoliosis; <b>> 50°</b> = usually consider surgery (curves this large tend to keep progressing, even after growth). Smaller progressive curves in a growing child are braced and watched. Look for red flags (pain, neuro signs, left thoracic curve) that suggest a secondary cause.");

  /* ---------------------------------------------------- 7.1 Intro to MSK anatomy */
  qb(IA, "#dermatomes", null,
    "When testing sensation for a suspected radiculopathy, why do you test the middle of each dermatome rather than its edge?",
    ["Neighbouring dermatomes overlap, so a single root lesion may spare the borders", "The edges have no sensory supply", "The middle is supplied by two roots", "Dermatomes are identical to peripheral nerve territories", "Reflexes are tested there too"],
    0,
    "A <b>dermatome</b> is skin supplied by one spinal nerve; a <b>myotome</b> is muscle supplied by one root. Adjacent dermatomes <b>overlap</b>, so losing one root often leaves the borders intact: test the <b>centre</b> (e.g., the 1st dorsal web space for L5, the lateral heel for S1, the middle finger for C7). Peripheral nerve territories are a different map.");

  qb(IA, "#contractions", null,
    "As you walk slowly down a flight of stairs, what is the quadriceps doing?",
    ["Contracting eccentrically (lengthening under load to control knee flexion)", "Contracting concentrically", "Contracting isometrically", "Fully relaxed", "Contracting in an open kinetic chain"],
    0,
    "<b>Concentric</b> = shortens (climbing stairs). <b>Eccentric</b> = lengthens while contracting, to brake movement (descending stairs, lowering a weight); it's where much muscle soreness and strain injury occurs. <b>Isometric</b> = no length change. Stair walking is <b>closed</b> kinetic chain (foot fixed); a seated leg extension is <b>open</b> chain.");

  qb(IA, "#joints", null,
    "Why does the shoulder dislocate far more often than the hip?",
    ["Bony congruity contributes most to joint stability, and the shallow glenoid offers little compared with the deep acetabulum", "The shoulder has more ligaments", "The hip has no ligaments", "The shoulder's muscles are weaker than the hip's", "The shoulder is not a synovial joint"],
    0,
    "Joint stability ranks <b>bone shape > ligaments > muscles</b>. The hip's deep acetabulum (plus labrum) grips the femoral head; the glenohumeral joint trades bony stability for range, relying on the labrum, ligaments and the <b>rotator cuff</b>. Joint pain comes from the capsule, ligaments and bone (cartilage and synovium are poorly innervated), and <b>Hilton's law</b> says a joint is supplied by the nerves of the muscles that move it.");
})();

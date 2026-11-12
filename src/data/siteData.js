const photo = (id, width = 1200) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${width}&q=82`;

export const treatments = [
  {
    slug: "smile-design",
    name: "Smile Design",
    category: "Cosmetic",
    number: "01",
    short: "A thoughtful plan for a smile that feels like you.",
    description:
      "A considered, collaborative approach to the details of your smile. We start by listening, then explore options that feel natural to you and your everyday life.",
    image: photo("photo-1606811971618-4486d14f3f99"),
    imageAlt: "A close, natural-looking smile in soft daylight",
    detail:
      "Your first visit is a conversation, not a commitment. We learn what matters to you, discuss possibilities, and shape a plan together. Any proposed care is explained clearly before you decide how to proceed.",
    idealFor: "Anyone curious about a more considered smile plan.",
  },
  {
    slug: "teeth-whitening",
    name: "Teeth Whitening",
    category: "Cosmetic",
    number: "02",
    short: "A brighter look, guided by your dentist.",
    description:
      "Professional whitening options tailored to your starting point, comfort, and preferred pace—with clear guidance before treatment begins.",
    image: photo("photo-1609840114035-3c981b782dfe"),
    imageAlt: "Bright, welcoming dental studio prepared for a consultation",
    detail:
      "We begin with a conversation and an oral health check to see whether whitening is suitable for you. Your dentist will talk through available approaches, what to expect, and how to look after your smile afterwards.",
    idealFor: "People who want to explore dentist-guided whitening.",
  },
  {
    slug: "clear-aligners",
    name: "Clear Aligners",
    category: "Alignment",
    number: "03",
    short: "A discreet way to explore a straighter smile.",
    description:
      "A personal assessment and a clear conversation about whether a removable aligner plan may suit your smile and your routine.",
    image: photo("photo-1606811841689-23dfddce3e95"),
    imageAlt: "A relaxed portrait showing a confident natural smile",
    detail:
      "Every smile is different. Your consultation includes an assessment, a discussion of suitable options, and the chance to ask questions before making a decision. Treatment timing and suitability depend on an individual clinical review.",
    idealFor: "Adults interested in discreet orthodontic options.",
  },
  {
    slug: "dental-implants",
    name: "Dental Implants",
    category: "Restorative",
    number: "04",
    short: "A considered conversation about replacing missing teeth.",
    description:
      "Explore whether implant treatment may be right for you with an individual assessment and a plain-language discussion of options.",
    image: photo("photo-1629909613654-28e377c37b09"),
    imageAlt: "Modern dental care room with natural materials",
    detail:
      "Implant treatment is not right for everyone. We take time to understand your oral health and medical history, explain possible alternatives, and discuss next steps. A dentist can give personal advice only after an assessment.",
    idealFor: "People looking to discuss options for a missing tooth.",
  },
  {
    slug: "preventive-dentistry",
    name: "Preventive Dentistry",
    category: "Everyday",
    number: "05",
    short: "Small, steady steps for a healthier smile.",
    description:
      "Regular check-ups and practical advice shaped around your oral health, so you can feel informed and supported between visits.",
    image: photo("photo-1606811971618-4486d14f3f99", 1000),
    imageAlt: "A close-up smile, illustrating everyday dental wellness",
    detail:
      "Preventive visits are a chance to check in, talk through any changes, and get advice that makes sense for you. Your clinician will recommend a visit schedule based on your individual needs.",
    idealFor: "Anyone who wants a supportive routine for oral health.",
  },
  {
    slug: "restorative-dentistry",
    name: "Restorative Dentistry",
    category: "Restorative",
    number: "06",
    short: "Care to help your smile feel comfortable again.",
    description:
      "A clear, unhurried discussion of options to repair or restore teeth, with your comfort and long-term wellbeing in mind.",
    image: photo("photo-1609840114035-3c981b782dfe", 1000),
    imageAlt: "A light-filled treatment room, ready for patient care",
    detail:
      "Restorative care can mean different things for different people. We explain what we find, answer your questions, and talk through options and costs before any treatment starts.",
    idealFor: "People seeking advice about a damaged or uncomfortable tooth.",
  },
];

export const dentists = [
  {
    name: "Dr. Alex Morgan",
    role: "General Dentistry · Demo profile",
    note: "Demo qualification placeholder — verify before publication.",
    image: photo("photo-1612349317150-e413f6a5b16d", 900),
    imageAlt: "Portrait used as illustrative demo dentist profile",
  },
  {
    name: "Dr. Jamie Chen",
    role: "Cosmetic Dentistry · Demo profile",
    note: "Demo qualification placeholder — verify before publication.",
    image: photo("photo-1559839734-2b71ea197ec2", 900),
    imageAlt: "Portrait used as illustrative demo dentist profile",
  },
  {
    name: "Dr. Sam Patel",
    role: "Restorative Dentistry · Demo profile",
    note: "Demo qualification placeholder — verify before publication.",
    image: photo("photo-1582750433449-648ed127bb54", 900),
    imageAlt: "Portrait used as illustrative demo dentist profile",
  },
];

export const faqs = [
  {
    question: "What happens at a first appointment?",
    answer:
      "We start by listening to what brings you in. Your clinician will discuss your oral health, answer questions, and explain any next steps before you decide how to proceed.",
  },
  {
    question: "Can I ask about costs before treatment?",
    answer:
      "Absolutely. We believe you should understand the proposed care and its costs before making a decision. Ask us about fees when you enquire or during your consultation.",
  },
  {
    question: "How do I know which treatment is right for me?",
    answer:
      "You do not need to choose a treatment before you visit. A dentist can discuss options with you after understanding your needs and completing an appropriate assessment.",
  },
  {
    question: "I feel nervous about dental visits. Can you help?",
    answer:
      "Please tell us when you get in touch. Knowing what would help you feel more at ease lets our team plan a gentler, more supportive visit.",
  },
];

export const experienceSteps = [
  {
    number: "01",
    name: "Discover",
    text: "Tell us what matters to you. There is no wrong place to begin.",
  },
  {
    number: "02",
    name: "Consult",
    text: "Meet your clinician, ask anything, and explore your options.",
  },
  {
    number: "03",
    name: "Care",
    text: "Move forward together, at a pace and plan you understand.",
  },
  {
    number: "04",
    name: "Maintain",
    text: "Stay supported with guidance shaped around your everyday life.",
  },
];

export { photo };

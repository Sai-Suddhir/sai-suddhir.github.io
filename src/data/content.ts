// ─────────────────────────────────────────────────────────────
//  All site text lives here. Edit this file to update the site.
//
//  Placeholders: any value that starts with "TODO" is shown as a
//  dashed yellow badge on the local preview (npm run dev) and is
//  hidden completely on the published site.
// ─────────────────────────────────────────────────────────────

export const isTodo = (v?: string) => !v || v.startsWith('TODO');

export const site = {
  // A small note at the bottom of every page. Set to '' to remove it.
  wip: 'Work in progress. More projects and photos are on the way.',
  // Visitor stats (goatcounter.com). Put your GoatCounter code here, e.g. 'saisuddhir'
  // for saisuddhir.goatcounter.com. Leave '' to turn tracking off.
  goatcounter: 'saisuddhir',
};

// Options for the one line under your name on the home page.
// To switch, change the number in `role: roleOptions[0]` below. Option 5 hides the line.
export const roleOptions = [
  /* 0 */ 'I build things. Sometimes they work the first time.',
  /* 1 */ 'Electrical and electronics engineer at IIT Madras. I like taking an idea from the maths to working hardware.',
  /* 2 */ 'Engineering student at IIT Madras.',
  /* 3 */ 'Dual-degree student at IIT Madras, working on power electronics, control and embedded systems.',
  /* 4 */ 'Power electronics, control systems and embedded hardware at IIT Madras',
  /* 5 */ '',
];

export const profile = {
  name: 'Sai Suddhir A B',
  institution: 'IIT Madras',
  email: 'saisuddhir28@gmail.com',
  links: {
    github: 'https://github.com/Sai-Suddhir',
    linkedin: 'https://www.linkedin.com/in/saisuddhir',
    scholar: 'TODO: Google Scholar URL (delete this line if you have none)',
    cv: '/cv.pdf',
  },
  photoNote: '',
  role: roleOptions[0],
  // Used for search engines and link previews (not shown on the page).
  tagline:
    'Dual-degree student at IIT Madras working across power electronics, control systems and embedded hardware, from switching-surface theory to FPGA and PCB design.',
};

/* ── Home: name → quote → photo + who I am ───────────────── */
// Quote options for the line under your name. Leave `by` empty for no attribution.
// To switch, change the number in `quote: quoteOptions[0]` below.
export const quoteOptions = [
  /* 0 */ { text: 'What I cannot create, I do not understand.', by: 'Richard Feynman' },
  /* 1 */ { text: 'He who can listen to the music in the midst of noise can achieve great things.', by: 'Vikram Sarabhai' },
  /* 2 */ { text: 'Dream, dream, dream. Dreams transform into thoughts and thoughts result in action.', by: 'Dr. A.P.J. Abdul Kalam' },
  /* 3 */ { text: 'Once you get the physics right, the rest is mathematics.', by: 'Rudolf Kálmán' },
  /* 4 */ { text: 'But still try, for who knows what is possible.', by: 'Michael Faraday' },
  /* 5 */ { text: 'There are so many great souls. My salutations to all of them.', by: 'Tyagaraja, Endaro Mahanubhavulu' },
  /* 6 */ { text: 'Even when fate says no, effort pays the wage of the work put in.', by: 'Thirukkural 619' },
  /* 7 */ { text: 'Scientists discover the world that exists. Engineers create the world that never was.', by: 'Theodore von Kármán' },
  /* 8 */ { text: 'No man really becomes a fool until he stops asking questions.', by: 'Charles Proteus Steinmetz' },
  /* 9 */ { text: 'Derive it on paper. Prove it on the bench.', by: '' },
];

// **double asterisks** make text bold.
export const intro = {
  quote: quoteOptions[0],
  // Your own introduction goes here, one string per paragraph.
  paragraphs: [
    "I’m Sai, a final-year dual-degree student at IIT Madras. I realised early on that I stayed far more awake in electrical classes than in aerodynamics, so I chose to pursue electrical engineering. I taught myself most of the prerequisites, took advanced electrical courses, and built on them through research projects with professors here. I now have a couple of internships and a paper under review to my name.",
    "Outside academics, I enjoy the gym, sports, gaming and reading biographies. I am comfortable managing several things at once and I stay composed under pressure. I believe I have the skills and the potential to create an impact, and I want to keep building on them through research and hands-on engineering",
  ],
};

/* ── Background: education, interests, honors, life outside the lab ── */
export const about = {
  // Section heading. Keep it to one line.
  heading: 'Background',
  interests: {
    engineering: [
      'Power electronics',
      'Control systems',
      'VLSI',
      'Semiconductors',
      'Embedded systems',
      'FPGA & digital design',
      'Analog & mixed-signal circuits',
      'Electric vehicles',
      'Motor drives',
      'Battery systems',
      'Robotics',
      'Machine learning',
    ],
    life: ['Carnatic music', 'Keyboard', 'Cricket', 'Fitness', 'Writing', 'Travel & adventure', 'Movies'],
  },
  education: [
    {
      school: 'Indian Institute of Technology Madras',
      degree: 'B.Tech in Aerospace Engineering + M.Tech in Electric Vehicles (Dual Degree)',
      period: '2022 – 2027',
      detail: 'CGPA 8.56 / 10',
    },
    {
      school: 'Mahindra World School, Chennai',
      degree: 'Class XII (CBSE) 95.8% · Class X (CBSE) 96.16%',
      period: '2020 – 2022',
      detail: '',
    },
  ],
  // `lead` is the headline, `text` is the line beside it.
  honors: [
    { lead: '1st in Asia', text: 'European Hyperloop Week 2024 in Zurich, and 5th overall, with Avishkar Hyperloop.' },
    { lead: 'Top 0.41%', text: 'JEE Advanced, among about a million candidates. Top 0.82% in JEE Main.' },
    { lead: 'Full-time offer', text: 'From TVS Motor Company after a summer internship, with a commendation from the VP of Production.' },
    { lead: 'Invited speaker', text: 'A talk on hyperloop technology to 200+ students at College of Engineering Trivandrum.' },
    { lead: 'Scholarships', text: 'Groww Foundation Scholarship (2025–26) and the Alumni MCM Scholarship at IIT Madras.' },
  ],
  beyond: [
    { lead: 'Student governance', text: 'Served on the Executive Committee of CoCAS at IIT Madras, handling policy advocacy, budget oversight and conflict resolution across CFI, E-Cell and Shaastra.' },
    { lead: 'Model United Nations', text: 'Competed at Harvard MUN and won special mentions at MVM MUN and SRM MUN.' },
    { lead: 'Music', text: 'Trained Carnatic vocalist and keyboardist, with keyboard certification from Trinity College London.' },
    { lead: 'Sport', text: 'Captained my school cricket team for two years and competed in inter-school athletics.' },
  ],
};

/* ── Work ────────────────────────────────────────────────── */
export const publications = [
  {
    authors: '<strong>Sai Suddhir A B</strong> and Srikanthan Sridharan',
    title: 'A Geometric Control Approach for DC-Link Voltage Equalization in Split-Capacitor Inverters',
    venue: 'Submitted to ICPE 2027 (under review)',
    pdf: '/work/ddp/icpe-2027-digest.pdf', // the attached digest
    page: '/work/ddp/', // project page with figures and results
  },
];

// Research, projects and industry items live in src/content/work/<id>/index.md

/* ── Academics ───────────────────────────────────────────── */
export const teaching = ['Analog & Digital Electronics', 'Switched Mode Power Conversion'];

// Electrical, control, computing and maths courses only (no aerospace).
// Course names only; grades are deliberately not shown.
export const coursework = [
  {
    group: 'Power Electronics & EVs',
    items: [
      { name: 'Digital Controller for Power Applications' },
      { name: 'Switched Mode Power Conversion' },
      { name: 'Power Converter Analysis & Design' },
      { name: 'Power Electronics & Motor Drives for Electrified Vehicles' },
      { name: 'Electric Vehicle Engineering & Development' },
      { name: 'Vehicle Dynamics' },
      { name: 'Electric Machines' },
      { name: 'Battery Technology' },
    ],
  },
  {
    group: 'Control & Robotics',
    items: [
      { name: 'Linear Dynamical Systems' },
      { name: 'Control of Automotive Systems' },
      { name: 'Signals & Systems' },
      { name: 'Introduction to Field & Service Robotics' },
    ],
  },
  {
    group: 'Computing & ML',
    items: [
      { name: 'Machine Learning Foundations' },
      { name: 'Introduction to Scientific Computing' },
      { name: 'Data Driven Modelling of Aerospace Systems' },
    ],
  },
  {
    group: 'Mathematics',
    items: [
      { name: 'Probability, Statistics & Stochastic Processes' },
      { name: 'Complex Variables' },
      { name: 'Differential Equations' },
      { name: 'Functions of Several Variables' },
      { name: 'Series & Matrices' },
      { name: 'Fundamentals of Operations Research' },
    ],
  },
];

export const tools = [
  { group: 'Languages', items: 'C, C++, Python (NumPy, PyTorch, TensorFlow), MATLAB, Verilog, VHDL' },
  { group: 'Modelling', items: 'Simulink, Simscape, Stateflow, PLECS, LTspice, Typhoon HIL, ROS 2, Gazebo' },
  { group: 'Hardware', items: 'TI C2000 / MSP432, Altera FPGAs & CPLDs, STM32, Vector CAN, PCAN' },
  { group: 'Design tools', items: 'Altium Designer, KiCad, Code Composer Studio, Quartus, ModelSim' },
];

/* ── Contact ─────────────────────────────────────────────── */
export const contact =
  "If you'd like to talk to me about anything at all, drop me an email.";

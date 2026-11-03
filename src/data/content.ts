// ─────────────────────────────────────────────────────────────
//  All site text lives here. Edit this file to update the site.
//
//  Placeholders: any value that starts with "TODO" is shown as a
//  dashed yellow badge on the local preview (npm run dev) and is
//  hidden completely on the published site.
// ─────────────────────────────────────────────────────────────

export const isTodo = (v?: string) => !v || v.startsWith('TODO');

export const profile = {
  name: 'Sai Suddhir A B',
  institution: 'IIT Madras',
  email: 'ae22b013@smail.iitm.ac.in',
  links: {
    github: 'https://github.com/Sai-Suddhir',
    linkedin: 'https://www.linkedin.com/in/saisuddhir',
    scholar: 'TODO: Google Scholar URL (delete this line if you have none)',
    cv: '/cv.pdf',
  },
  photoNote: '',
  tagline:
    'I work on power converter control: geometric boundary control laws, and the embedded and FPGA hardware that runs and tests them in real time.',
};

/* ── About ───────────────────────────────────────────────── */
// **double asterisks** make text bold.
/* ── Home: name → quote → photo + who I am ───────────────── */
// **double asterisks** make text bold.
export const intro = {
  // The quote under your name (the one from your old blog). Leave `by` empty for no attribution.
  quote: { text: 'The magic you are looking for is in the work you are avoiding.', by: '' },
  paragraphs: [
    "I'm Sai, a dual-degree student at **IIT Madras**. I picked aerospace because of **Dr. A.P.J. Abdul Kalam**, then found myself pulled toward electrical engineering, and taught myself most of it one board at a time. These days I spend my time on power converters and the control behind them.",
    "Away from the lab, I'm a trained **Carnatic vocalist and keyboardist**, and jamming with friends is my favourite way to unwind. I captained my school cricket team, try to keep fitness part of every day, write the occasional essay, and I'm usually the first one excited about a late-night outing or a trip somewhere new.",
  ],
};

/* ── Background: education, interests, honors ──────────── */
export const about = {
  interests: {
    engineering: [
      'Power electronics',
      'Nonlinear & geometric control',
      'Embedded & FPGA hardware',
      'Real-time simulation',
      'Battery systems for EVs',
    ],
    life: ['Carnatic music', 'Keyboard', 'Cricket', 'Fitness', 'Writing', 'Travel & adventure', 'Movies'],
  },
  education: [
    {
      school: 'Indian Institute of Technology Madras',
      degree: 'B.Tech Aerospace Engineering + M.Tech Electric Vehicles (Dual Degree)',
      period: '2022 – 2027',
      detail: 'CGPA 8.56/ 10',
    },
    {
      school: 'Mahindra World School, Chennai',
      degree: 'Class XII (CBSE) 95.8% · Class X (CBSE) 96.16%',
      period: '2020 – 2022',
      detail: '',
    },
  ],
  honors: [
    '1st in Asia, 5th overall at European Hyperloop Week 2024, Zurich, with Avishkar Hyperloop',
    'Top 0.41% in JEE Advanced and top 0.82% in JEE Main, among 1 million candidates',
    'Invited talk on hyperloop technology to 200+ students at College of Engineering Trivandrum',
    'Groww Foundation Scholarship (2025–26) and the Alumni MCM Scholarship, IIT Madras',
  ],
  leadership: [
    { role: 'Executive Committee, CoCAS, IIT Madras', text: 'Policy advocacy, budget oversight and conflict resolution across CFI, E-Cell and Shaastra.', period: 'TODO: dates' },
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
export const teaching = ['Analog & Digital Electronics (ED2130)', 'Switched Mode Power Conversion (EE5200)'];

// `grade` is optional.
export const coursework = [
  {
    group: 'Power Electronics',
    items: [
      { name: 'Digital Controller for Power Applications (EE5212)', grade: 'S' },
      { name: 'Switched Mode Power Conversion (EE5200)', grade: 'A' },
      { name: 'Power Converter Analysis & Design' },
      { name: 'Power Electronics & Motor Drives (ED5231)' },
      { name: 'Electric Machines' },
      { name: 'Battery Technology' },
      { name: 'EV Engineering & Development' },
    ],
  },
  {
    group: 'Controls',
    items: [{ name: 'Linear Dynamical Systems' }, { name: 'Control of Automotive Systems' }, { name: 'Signals & Systems' }],
  },
  {
    group: 'Data & ML',
    items: [{ name: 'Data Driven Modelling of Aerospace Systems (AS5401)' }, { name: 'TODO: machine learning course name and code' }],
  },
  {
    group: 'Mathematics',
    items: [{ name: 'Probability, Statistics & Stochastic Processes' }, { name: 'Complex Variables' }, { name: 'Differential Equations' }],
  },
];

export const tools = [
  { group: 'Languages', items: 'C, C++, Python (NumPy, PyTorch, TensorFlow), Verilog, VHDL' },
  { group: 'Modelling', items: 'MATLAB, Simulink, Simscape, Stateflow, PLECS, LTspice, Typhoon HIL' },
  { group: 'Hardware', items: 'TI C2000 / MSP432, Altera FPGAs & CPLDs, STM32, Altium, KiCad, Vector CAN, PCAN' },
];

/* ── Contact ─────────────────────────────────────────────── */
export const contact =
  "If you'd like to talk about power electronics, control, embedded hardware, or anything in between, drop me an email.";

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
  focus: 'Power Electronics · Control · Embedded & FPGA Hardware',
  institution: 'IIT Madras',
  email: 'ae22b013@smail.iitm.ac.in',
  links: {
    github: 'https://github.com/Sai-Suddhir',
    linkedin: 'https://www.linkedin.com/in/saisuddhir',
    scholar: 'TODO: Google Scholar URL (delete this line if you have none)',
    cv: '/cv.pdf',
  },
  photoNote: 'TODO: replace src/assets/profile.jpg with a professional head-and-shoulders photo',
  tagline:
    'I work on power converter control: geometric boundary control laws, and the embedded and FPGA hardware that runs and tests them in real time.',
  status: 'Applying for MS programs in Electrical Engineering',
  location: 'Chennai, India',
  // Short "what I'm doing now" list in the hero card. `href` opens a project page.
  now: [
    { label: 'Thesis', text: 'Boundary control & sensor reduction for inverters', href: '/work/ddp/' },
    { label: 'Paper', text: 'Under review at ICPE 2027', href: '/work/ddp/' },
    { label: 'Lab', text: 'My HIL platform now trains juniors in the power lab', href: '/work/hil/' },
  ],
};

/* ── About ───────────────────────────────────────────────── */
// **double asterisks** make text bold.
export const about = {
  bio: [
    "I'm a **dual-degree student at IIT Madras** (B.Tech Aerospace + M.Tech Electric Vehicles). My undergrad is in aerospace, which I chose because of Dr. A.P.J. Abdul Kalam. Along the way I got pulled toward **electrical engineering** and built those skills on my own.",
    'Today I work on **power converter control**, **real-time hardware simulation**, and **battery systems for EVs**. Outside the lab, I am a trained Carnatic vocalist and keyboardist.',
  ],
  interests: [
    'Power electronics',
    'Nonlinear & geometric control',
    'Embedded & FPGA hardware',
    'Real-time simulation & HIL',
    'Battery systems for EVs',
  ],
  education: [
    {
      school: 'Indian Institute of Technology Madras',
      degree: 'B.Tech Aerospace Engineering + M.Tech Electric Vehicles (Dual Degree)',
      period: '2022 – 2027',
      detail: 'CGPA 8.55 / 10',
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
    title: 'A Geometric Control Approach for DC-link Voltage Equalization in Split-Capacitor Inverters',
    venue: 'Submitted to ICPE 2027 (under review)',
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

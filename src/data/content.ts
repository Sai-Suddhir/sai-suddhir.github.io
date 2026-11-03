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
  // Short "what I'm doing now" list in the hero card. `href` jumps to a Work row.
  now: [
    { label: 'Thesis', text: 'Boundary control & sensor reduction for inverters', href: '#work-ddp' },
    { label: 'Paper', text: 'Under review at ICPE 2027', href: '#work' },
    { label: 'Lab', text: 'My HIL platform now trains juniors in the power lab', href: '#work-hil' },
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

export type WorkItem = {
  id: string;
  title: string;
  oneLiner: string;
  meta: string; // role / course · dates
  advisor?: string;
  image?: string; // file name in src/assets
  imageAlt?: string;
  points: string[];
  tags: string[];
};

export const research: WorkItem[] = [
  {
    id: 'ddp',
    title: 'Boundary Control & Sensor Reduction for Inverters',
    oneLiner: 'Dual-degree project on DC-link balancing and single-sensor current reconstruction.',
    meta: "Dual-Degree Project · May '26 – Present",
    advisor: 'Prof. Srikanthan Sridharan',
    points: [
      'Derived a second-order switching surface for split DC-link voltage balancing in a 3-level NPC DSTATCOM, replacing PI/duty-ratio chopper control (paper under review at ICPE 2027).',
      'Added a disturbance-augmented surface with moving-average feedforward, and a peak-current-limited variant.',
      'Reconstructing three-phase VFD currents from a single DC-link sensor with a curve-fitting observer, without load parameters.',
    ],
    tags: ['3-level NPC', 'Boundary control', 'Observers'],
  },
  {
    id: 'cell-balancing',
    title: 'Boundary Control for Li-ion Active Cell Balancing',
    oneLiner: 'Closed-form switching surfaces for inductor-based balancing; paper in preparation.',
    meta: 'UGRP · TODO: dates',
    advisor: 'TODO: advisor name',
    points: [
      'Derived closed-form elliptical switching surfaces for inductor-based active cell balancing.',
      'Extended them to a real OCV model using a logarithmic energy function.',
      'Covers 2-cell and 4-cell topologies, modelled in MATLAB/Simulink.',
    ],
    tags: ['Sliding-mode control', 'Li-ion', 'Simulink'],
  },
  {
    id: 'hil',
    title: 'FPGA Hardware-in-the-Loop Platform for Power Converters',
    oneLiner: 'A low-cost real-time converter emulator, now used to train juniors in a lab course.',
    meta: "Research · Dec '25 – May '26",
    advisor: 'Prof. Lakshminarasamma N',
    points: [
      'Real-time boost-converter plant on an Altera MAX V CPLD in Tustin-discretised Q16.16 fixed-point Verilog, capturing CCM and DCM and tracking Typhoon HIL within 1%. I learned Verilog while building it.',
      'Paired with a TI F28379D controller for controller-hardware-in-the-loop testing, validated against Typhoon HIL and PLECS.',
      'Interface card with level shifting, analog conditioning and transient protection so one controller runs on both Typhoon HIL-404 and the emulator.',
    ],
    tags: ['Verilog', 'CPLD/FPGA', 'CHIL', 'F28379D'],
  },
];

export const projects: WorkItem[] = [
  {
    id: 'hyperloop',
    title: 'Avishkar Hyperloop: Pod Electronics',
    oneLiner: 'Led the electrical team; 1st in Asia at European Hyperloop Week 2024.',
    meta: "Electrical Team Lead · Sep '23 – Nov '24",
    image: 'hyperloop-pcu.png',
    imageAlt: '3D render of the propulsion control board designed for Avishkar Hyperloop',
    points: [
      'Selected as one of 7 from ~100 electrical applicants, then led the electrical team.',
      '6-layer dual-MCU board (TI MSP432 + F28379D) for v/f control, SVPWM, gate drive, regenerative braking, CAN telemetry and precharge of the linear induction motor.',
      'TI-RTOS PID firmware for HV battery thermal control (±0.5 °C), a 300+ message CAN network, and a 20-state Stateflow fault FSM covering 130+ fault cases.',
    ],
    tags: ['F28379D', 'TI-RTOS', 'CAN', 'Altium'],
  },
  {
    id: 'dab',
    title: 'Bidirectional Multi-Output DAB Converter',
    oneLiner: '500 V → 48 V / 12 V, 100 kHz, 96.2% efficient in simulation.',
    meta: "ED5231 · Jul – Nov '25",
    image: 'dab-sim.png',
    imageAlt: 'Simulink model of the dual-active-bridge converter',
    points: [
      'Chose a dual-active bridge over LLC and current-fed topologies for bidirectional flow and galvanic isolation.',
      'Phase-shift modulation with inherent ZVS; sized the leakage inductance and selected SiC MOSFETs and a planar transformer.',
    ],
    tags: ['Simulink', 'SiC', 'ZVS'],
  },
  {
    id: 'drone',
    title: 'Custom Flight Controller for a Drone Swarm',
    oneLiner: 'An STM32 flight controller at 70% lower cost than a Pixhawk.',
    meta: "Aero Club, IIT Madras · Sep '23 – Nov '24",
    image: 'drone-fc.png',
    imageAlt: 'PCB layout of the custom STM32 drone flight controller',
    points: [
      'Integrated telemetry, the swarm algorithm and motor control on one board, with EMI filtering for clean sensor data.',
      'Modelled a 3-body anti-collision algorithm in Python (NumPy, Shapely) with an 85% success rate.',
    ],
    tags: ['STM32', 'PCB design', 'Python'],
  },
  {
    id: 'src',
    title: '1 kW Half-Bridge Series Resonant Converter',
    oneLiner: '400 V → 48 V telecom DC-DC converter designed in PLECS.',
    meta: "EE5200 · Jan – May '26",
    points: [
      'Sized the resonant tank with FHA-based impedance modelling.',
      'Selected switches and cores from conduction, switching and core-loss analysis.',
    ],
    tags: ['PLECS', 'Resonant converters'],
  },
  {
    id: 'c2000',
    title: 'Real-Time Digital Control Firmware on TI C2000',
    oneLiner: 'SPWM, harmonic injection and active PFC on the F28379D.',
    meta: "EE5212 · Jan – May '26",
    points: [
      'Configured ePWM time-base, compare, action-qualifier and dead-band modules with synchronous ADC sampling.',
      'Boost controller with hysteresis control, lag compensation, overcurrent protection and precharge.',
    ],
    tags: ['C2000', 'Embedded C', 'PFC'],
  },
  {
    id: 'streetlight',
    title: 'RTC-Based Street-Light Timer',
    oneLiner: 'PCB and firmware now running 2000+ street lights in Coimbatore.',
    meta: 'ROLFS, Chennai',
    points: ['An ATtiny85 reads an RTC over I²C and drives relay switching, built low-cost for mass deployment.'],
    tags: ['ATtiny85', 'I²C', 'PCB'],
  },
  {
    id: 'rom',
    title: 'Reduced-Order Thermal Model of an EV Li-ion Cell',
    oneLiner: 'Compared two data-driven reduced-order modelling methods.',
    meta: 'AS5401 course project',
    points: ['Compared two data-driven reduced-order modelling methods for the thermal behaviour of an EV Li-ion cell.'],
    tags: ['Data-driven modelling', 'Li-ion'],
  },
];

export const industry: WorkItem[] = [
  {
    id: 'tvs',
    title: 'TVS Motor Company',
    oneLiner: 'Retrofitted brake-fluid filling machines for ABS; $200k+ projected savings.',
    meta: "Production Engineering Intern · Jul '25",
    points: [
      'Engineered a control algorithm to retrofit conventional brake-fluid filling machines with ABS filling capability.',
      "Linked the bike's hydraulic ECU and the PLC over ISO-TP/CAN and OPC UA, with a PLC-triggered Python routine that purges trapped air.",
      'Commendation from the VP (Production) and a full-time offer.',
    ],
    tags: ['CAN', 'PLC', 'Python'],
  },
  {
    id: 'arctus',
    title: 'Arctus Aerospace',
    oneLiner: 'UAV ground-control-station hardware, PCBs and firmware.',
    meta: "Hardware Engineering Intern · Dec '24, Jun '25, Dec '25",
    points: [
      'Built a modular ground control station for high-altitude UAVs with real-time telemetry, FPV and in-flight tuning.',
      'Designed multilayer PCBs and STM32 firmware for fuel, propulsion, braking, steering and battery systems.',
      'Reverse-engineered paramotor engine software.',
    ],
    tags: ['STM32', 'PCB design'],
  },
];

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

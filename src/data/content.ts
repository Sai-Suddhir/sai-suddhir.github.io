// ─────────────────────────────────────────────────────────────
//  All site text lives here. Edit this file to update the site.
//
//  Placeholders: any value that starts with "TODO" is shown as a
//  dashed yellow badge on the local preview (npm run dev) and is
//  hidden completely on the published site. Replace them with real
//  values (or delete the field) before applying.
// ─────────────────────────────────────────────────────────────

export const isTodo = (v?: string) => !v || v.startsWith('TODO');

export const profile = {
  name: 'Sai Suddhir A B',
  focus: 'Power Electronics · Control · Embedded & FPGA Hardware',
  institution: 'IIT Madras',
  tagline:
    'I work on power converter control: geometric boundary control laws, and the embedded and FPGA hardware that runs and tests them in real time.',
  email: 'ae22b013@smail.iitm.ac.in',
  links: {
    github: 'https://github.com/Sai-Suddhir',
    linkedin: 'https://www.linkedin.com/in/saisuddhir',
    scholar: 'TODO: Google Scholar URL (delete this line if you have none)',
    cv: '/cv.pdf',
  },
  photoNote: 'TODO: replace src/assets/profile.jpg with a professional head-and-shoulders photo',
  status: 'Applying for MS programs in Electrical Engineering',
  location: 'Chennai, India',
  // Short "what I'm doing now" list shown in the hero card
  now: [
    { label: 'Thesis', text: 'Boundary control & sensor reduction for inverters' },
    { label: 'Paper', text: 'Under review at ICPE 2027' },
    { label: 'Lab', text: 'My HIL platform now trains juniors in the power lab' },
  ],
};

export const about = {
  paragraphs: [
    "I'm a dual-degree student at IIT Madras. My undergrad is in aerospace, which I chose because of Dr. A.P.J. Abdul Kalam. Along the way I got pulled toward electrical engineering and built those skills on my own. Today I work on power converter control, real-time hardware simulation, and battery systems for EVs.",
    'I built a hardware-in-the-loop platform for power converters that is now used to train juniors in a lab course, led the electrical team of Avishkar Hyperloop to 1st in Asia at European Hyperloop Week 2024, and my research uses geometric boundary control for inverters and battery balancing.',
  ],
  interests: [
    'Power electronics',
    'Nonlinear & geometric (boundary) control',
    'Embedded & FPGA hardware',
    'Real-time simulation & HIL',
    'Battery systems for EVs',
    'Motor drives',
  ],
  education: [
    {
      school: 'Indian Institute of Technology Madras',
      degree: 'Dual Degree: B.Tech Aerospace Engineering + M.Tech Electric Vehicles',
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
};

export const highlights = [
  { value: 96.2, decimals: 1, suffix: '%', label: 'efficiency in a 500 V → 48/12 V bidirectional DAB converter' },
  { value: 2000, decimals: 0, suffix: '+', label: 'street lights in Coimbatore running on my timer PCB' },
  { value: 1, decimals: 0, prefix: '<', suffix: '%', label: 'error between my HIL boost-converter emulator and Typhoon HIL' },
  { value: 200, decimals: 0, prefix: '$', suffix: 'k+', label: 'projected savings from an ABS-filling retrofit at TVS Motor' },
];

export const publications = [
  {
    authors: '<strong>Sai Suddhir A B</strong> and Srikanthan Sridharan',
    title: 'A Geometric Control Approach for DC-link Voltage Equalization in Split-Capacitor Inverters',
    venue: 'Submitted to ICPE 2027',
    status: 'Under review',
    summary:
      'Replaces PI/duty-ratio chopper control with a second-order switching surface for neutral-clamped inverters, adding a disturbance-augmented surface with moving-average feedforward and a peak-current-limited variant.',
  },
];

export const research = [
  {
    title: 'Dual-Degree Project: Boundary Control & Sensor Reduction for Inverters',
    advisor: 'Prof. Srikanthan Sridharan',
    period: "May '26 – Present",
    status: 'Ongoing',
    points: [
      'Derived a second-order switching surface for split DC-link voltage balancing in a 3-level NPC DSTATCOM (the paper above).',
      'Reconstructing three-phase VFD currents from a single DC-link sensor with a curve-fitting observer that fits a sinusoidal oscillator to sparse, switching-state-dependent samples without load parameters.',
    ],
    tags: ['3-level NPC', 'Boundary control', 'Observers', 'VFDs'],
  },
  {
    title: 'Boundary Control for Li-ion Active Cell Balancing',
    advisor: 'TODO: advisor name',
    period: 'TODO: dates',
    status: 'Complete · paper in preparation',
    points: [
      'Derived closed-form elliptical switching surfaces for inductor-based active cell balancing.',
      'Extended them to a real OCV model using a logarithmic energy function.',
      'Covers 2-cell and 4-cell topologies, modelled in MATLAB/Simulink.',
    ],
    tags: ['Sliding-mode control', 'Li-ion', 'Simulink'],
  },
  {
    title: 'FPGA Hardware-in-the-Loop Platform for Power Converters',
    advisor: 'Prof. Lakshminarasamma N',
    period: "Dec '25 – May '26",
    status: 'Now used in a lab course',
    points: [
      'Real-time boost-converter plant on a 570-LE Altera MAX V CPLD in Tustin-discretised Q16.16 fixed-point Verilog with SPI DAC output, capturing CCM and DCM and tracking Typhoon HIL within 1%. I learned Verilog while building it.',
      'Low-cost controller-hardware-in-the-loop testbed pairing the plant with a TI F28379D, running switching and averaged models in real time, validated against Typhoon HIL and PLECS.',
      'Controller interface card with level shifting, analog conditioning and transient protection, so one controller runs on both Typhoon HIL-404 and the emulator. The platform now trains juniors in the power lab.',
    ],
    tags: ['Verilog', 'CPLD/FPGA', 'CHIL', 'F28379D'],
  },
];

export const experience = [
  {
    org: 'TVS Motor Company',
    place: 'Hosur',
    role: 'Production Engineering Intern',
    period: "Jul '25",
    points: [
      'Engineered a control algorithm to retrofit conventional brake-fluid filling machines with ABS filling capability.',
      "Linked the bike's hydraulic ECU and the PLC over ISO-TP/CAN and OPC UA, with a PLC-triggered Python ISO-TP routine that cycles the ABS modulator valves to purge trapped air.",
      'Projected to save $200k+ in upgrade costs; earned a commendation from the VP (Production) and a full-time offer.',
    ],
  },
  {
    org: 'Arctus Aerospace',
    place: 'Bangalore',
    role: 'Hardware Engineering Intern',
    period: "Dec '24 · Jun '25 · Dec '25",
    points: [
      'Architected and built a modular ground control station for high-altitude UAVs, from integration and wiring to the enclosure, supporting manual and autonomous flight, real-time telemetry, FPV and in-flight tuning.',
      'Designed multilayer PCBs and STM32 firmware for fuel, propulsion, braking, steering and battery systems.',
      'Reverse-engineered paramotor engine software.',
    ],
  },
  {
    org: 'IIT Madras',
    place: 'Chennai',
    role: 'Teaching Assistant',
    period: '',
    points: ['ED2130: Analog & Digital Electronics · EE5200: Switched Mode Power Conversion.'],
  },
  {
    org: 'CoCAS, IIT Madras',
    place: 'Chennai',
    role: 'Executive Committee',
    period: 'TODO: dates',
    points: ['Policy advocacy, budget oversight and conflict resolution across CFI, E-Cell and Shaastra.'],
  },
];

// `image` must match a file name in src/assets (or be omitted).
export const featuredProjects = [
  {
    title: 'Avishkar Hyperloop: Pod Electronics',
    subtitle: "Electrical Team Lead · Sep '23 – Nov '24",
    image: 'hyperloop-pcu.png',
    imageAlt: '3D render of the propulsion control board designed for Avishkar Hyperloop',
    summary:
      'Selected as one of 7 from ~100 electrical applicants, then led the electrical team. Avishkar placed 1st in Asia and 5th overall at European Hyperloop Week 2024, Zurich.',
    points: [
      '6-layer dual-MCU board (TI MSP432 + F28379D) running v/f control, SVPWM, inverter gate drive, regenerative braking, sensor fusion, CAN telemetry and precharge for the linear induction motor.',
      'TI-RTOS PID firmware for HV battery thermal control, holding within ±0.5 °C across cooling nodes.',
      'Pod-wide 300+ message CANdb++ network with a unified CAN driver, and a 20-state fault-handling FSM in Stateflow covering 130+ fault cases.',
    ],
    tags: ['F28379D', 'TI-RTOS', 'CAN', 'Altium', 'Stateflow'],
  },
  {
    title: 'Bidirectional Multi-Output DAB Converter for EVs',
    subtitle: "Power Electronics & Motor Drives (ED5231) · Jul – Nov '25",
    image: 'dab-sim.png',
    imageAlt: 'Simulink model of the dual-active-bridge converter',
    summary:
      'A 500 V → 48 V / 12 V, 100 kHz dual-active-bridge converter with phase-shift modulation and inherent ZVS.',
    points: [
      'Chose the DAB over LLC and current-fed topologies for bidirectional flow and galvanic isolation at high voltage.',
      'Sized the leakage inductance, selected SiC MOSFETs and a planar transformer.',
      'Reached 96.2% efficiency in simulation.',
    ],
    tags: ['Simulink', 'SiC', 'ZVS'],
  },
  {
    title: 'Custom Flight Controller for a Drone Swarm',
    subtitle: "Aero Club, IIT Madras · Sep '23 – Nov '24",
    image: 'drone-fc.png',
    imageAlt: 'PCB layout of the custom STM32 drone flight controller',
    summary:
      'Commercial flight controllers made a 100-drone swarm impractical, so I designed our own around an STM32.',
    points: [
      'Integrated telemetry, the swarm algorithm and precise motor control on one board, with EMI filtering for clean sensor data.',
      'Cut hardware cost by 70% compared with a commercial Pixhawk.',
      'Modelled a 3-body anti-collision algorithm in Python (NumPy, Shapely) with an 85% success rate.',
    ],
    tags: ['STM32', 'PCB design', 'Python'],
  },
];

export const otherProjects = [
  {
    title: '1 kW Half-Bridge Series Resonant Converter',
    meta: "EE5200 · Jan – May '26",
    text: 'A 400 V → 48 V, 100 kHz telecom DC-DC converter in PLECS. Sized the resonant tank with FHA-based impedance modelling and picked switches and cores from conduction, switching and core-loss analysis.',
    tags: ['PLECS', 'Resonant converters'],
  },
  {
    title: 'Real-Time Digital Control Firmware on TI C2000',
    meta: "EE5212 · Jan – May '26",
    text: 'SPWM firmware on the F28379D using ePWM time-base, compare, action-qualifier and dead-band modules for phase shift, harmonic injection and active PFC with synchronous ADC sampling, plus a boost controller with hysteresis control, lag compensation and protection.',
    tags: ['C2000', 'Embedded C', 'PFC'],
  },
  {
    title: 'RTC-Based Street-Light Timer',
    meta: 'ROLFS, Chennai',
    text: 'Designed the PCB and firmware: an ATtiny85 reads an RTC over I²C and drives relay switching. Built low-cost for mass deployment, it now runs 2000+ street lights across Coimbatore.',
    tags: ['ATtiny85', 'I²C', 'PCB'],
  },
  {
    title: 'Reduced-Order Thermal Model of an EV Li-ion Cell',
    meta: 'AS5401: Data Driven Modelling of Aerospace Systems',
    text: 'Compared two data-driven reduced-order modelling methods for the thermal behaviour of an EV Li-ion cell.',
    tags: ['Data-driven modelling', 'Li-ion'],
  },
];

export const honors = [
  { title: '1st in Asia, 5th overall', detail: 'European Hyperloop Week 2024, Zurich, with Avishkar Hyperloop' },
  { title: 'Top 0.41% in JEE Advanced', detail: 'and top 0.82% in JEE Main, among 1 million candidates' },
  { title: 'Invited talk on hyperloop technology', detail: '200+ students at College of Engineering Trivandrum' },
  { title: 'Groww Foundation Scholarship (2025–26)', detail: 'and the Alumni MCM Scholarship, IIT Madras' },
];

export const skills = [
  { group: 'Languages', items: ['C', 'C++', 'Python (NumPy, PyTorch, TensorFlow)', 'Verilog', 'VHDL'] },
  { group: 'Modelling', items: ['MATLAB', 'Simulink', 'Simscape', 'Stateflow', 'PLECS', 'LTspice', 'Typhoon HIL'] },
  { group: 'Hardware', items: ['TI C2000 / MSP432', 'Altera FPGAs & CPLDs', 'STM32', 'PCB design (Altium, KiCad)', 'CAN (Vector, PCAN)'] },
  { group: 'Toolchains', items: ['Code Composer Studio', 'Quartus', 'ModelSim', 'ROS2', 'Gazebo'] },
];

// `grade` is optional; leave it out to show no grade.
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
    items: [
      { name: 'Data Driven Modelling of Aerospace Systems (AS5401)' },
      { name: 'TODO: machine learning course name and code' },
    ],
  },
  {
    group: 'Mathematics',
    items: [{ name: 'Probability, Statistics & Stochastic Processes' }, { name: 'Complex Variables' }, { name: 'Differential Equations' }],
  },
];

export const beyond = [
  'Trained Carnatic vocalist and keyboardist, with a keyboard certification from Trinity College London.',
];

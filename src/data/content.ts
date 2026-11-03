// ─────────────────────────────────────────────────────────────
//  All site text lives here. Edit this file to update the site.
// ─────────────────────────────────────────────────────────────

export const profile = {
  name: 'Sai Suddhir A B',
  role: 'Dual Degree · Aerospace Engineering + Electric Vehicles',
  institution: 'IIT Madras',
  tagline:
    'I work where power electronics meets real-time control: designing converters, the firmware that drives them, and the hardware-in-the-loop systems that test them.',
  email: 'saisuddhir28@gmail.com',
  links: {
    github: 'https://github.com/Sai-Suddhir',
    linkedin: 'https://www.linkedin.com/in/saisuddhir',
    cv: '/cv.pdf',
  },
};

export const about = {
  paragraphs: [
    "I'm a final-year dual-degree student at IIT Madras, completing a B.Tech in Aerospace Engineering and an M.Tech in Electric Vehicles. Most of my time goes into power converters and the control systems around them, from deriving a control law to routing the board it runs on.",
    "I've built a low-cost CPLD-based real-time emulator for controller-hardware-in-the-loop testing, led the electrical team of Avishkar Hyperloop to 1st in Asia at European Hyperloop Week 2024, and I'm now working on geometric control of multilevel inverters for my dual-degree thesis.",
    "I'm looking to pursue graduate research in power electronics and control for electrified transportation.",
  ],
  interests: [
    'Power converter design',
    'Real-time simulation & HIL',
    'Digital control on C2000',
    'Multilevel inverters & motor drives',
    'EV powertrains',
    'Embedded systems & PCB design',
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
};

export const highlights = [
  { value: 96.2, decimals: 1, suffix: '%', label: 'efficiency in a 500 V → 48/12 V bidirectional DAB converter' },
  { value: 2000, decimals: 0, suffix: '+', label: 'street lights in Coimbatore running on my timer PCB' },
  { value: 70, decimals: 0, suffix: '%', label: 'hardware cost cut with a custom STM32 flight controller' },
  { value: 200, decimals: 0, prefix: '$', suffix: 'k+', label: 'projected savings from an ABS-filling retrofit at TVS Motor' },
];

export const publications = [
  {
    authors: '<strong>Sai Suddhir A B</strong> and Srikanthan Sridharan',
    title: 'A Geometric Control Approach for DC-link Voltage Equalization in Split-Capacitor Inverters',
    venue: 'Submitted to ICPE 2027',
    status: 'Under review',
  },
];

export const research = [
  {
    title: 'Dual-Degree Thesis: Control of Multilevel Inverters',
    advisor: 'Prof. Srikanthan Sridharan',
    period: "May '26 – Present",
    points: [
      'Derived a second-order switching surface for split DC-link voltage balancing in a 3-level NPC DSTATCOM.',
      'Designing a curve-fitting observer that reconstructs three-phase VFD currents from a single DC-link sensor, fitting a sinusoidal oscillator to sparse, switching-state-dependent samples without load parameters.',
    ],
    tags: ['3-level NPC', 'Geometric control', 'Observers'],
  },
  {
    title: 'Low-Cost Real-Time Simulator for Power Converters',
    advisor: 'Prof. Lakshminarasamma N',
    period: "Dec '25 – May '26",
    points: [
      'Built a real-time boost-converter emulator on a 570-LE Altera MAX V CPLD in Tustin-discretised Q16.16 fixed-point Verilog. It captures both CCM and DCM and tracks Typhoon HIL within 1%.',
      'Engineered a low-cost controller-hardware-in-the-loop testbed pairing the RTL plant solver with a TI F28379D, running switching and averaged models in real time, validated against Typhoon HIL and PLECS.',
      'Designed a controller interface card with level shifting, analog signal conditioning and transient protection, so one controller can be validated on both Typhoon HIL-404 and the CPLD emulator.',
    ],
    tags: ['Verilog', 'CPLD', 'CHIL', 'F28379D'],
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
      "Built a closed-loop link between the bike's hydraulic ECU and the PLC over ISO-TP/CAN and OPC UA, plus a PLC-triggered Python routine that cycles the ABS modulator valves to purge trapped air.",
      'Projected to save $200k+ in upgrade costs; earned a commendation from the VP (Production) and a full-time offer.',
    ],
  },
  {
    org: 'Arctus Aerospace',
    place: 'Bangalore',
    role: 'Hardware Engineering Intern',
    period: "Jun '25",
    points: [
      'Architected and built a modular ground control station for high-altitude UAVs, from system integration and wiring to the enclosure, supporting manual and autonomous flight, real-time telemetry, FPV and in-flight tuning.',
      'Designed multilayer PCBs and STM32 firmware for fuel, propulsion, braking, steering and battery systems.',
    ],
  },
  {
    org: 'IIT Madras',
    place: 'Chennai',
    role: 'Teaching Assistant',
    period: '',
    points: ['Analog & Digital Electronics (ED2130) · Switched Mode Power Conversion (EE5200).'],
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
      'Led the electrical team of a 50+ member student hyperloop team, which placed 1st in Asia and 5th overall at European Hyperloop Week 2024, Zurich.',
    points: [
      "6-layer dual-MCU board (TI MSP432 + F28379D) running v/f control, SVPWM, inverter gate drive, regenerative braking, sensor fusion, CAN telemetry and precharge for the linear induction motor.",
      'TI-RTOS PID firmware for HV battery thermal control, holding within ±0.5 °C across cooling nodes.',
      'Pod-wide 300+ message CANdb++ network with a unified CAN driver, and a 20-state fault-handling FSM in Stateflow covering 130+ fault cases.',
    ],
    tags: ['F28379D', 'SVPWM', 'CAN', 'Altium', 'Stateflow'],
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
    text: 'A low-cost ATtiny85 timer PCB that reads an RTC over I²C and drives relay switching. Designed for mass deployment, it now runs 2000+ street lights across Coimbatore.',
    tags: ['ATtiny85', 'I²C', 'PCB'],
  },
];

export const honors = [
  { title: '1st in Asia, 5th overall', detail: 'European Hyperloop Week 2024, Zurich, with Avishkar Hyperloop' },
  { title: 'Top 0.41% in JEE Advanced', detail: 'and top 0.82% in JEE Main, among 1 million candidates' },
  { title: 'Invited talk on hyperloop technology', detail: '200+ students at College of Engineering Trivandrum' },
  { title: 'Groww Foundation Scholarship (2025–26)', detail: 'and the Alumni MCM Scholarship, IIT Madras' },
];

export const skills = [
  { group: 'Programming', items: ['C', 'C++', 'Python (NumPy, PyTorch, TensorFlow)', 'MATLAB', 'Verilog', 'VHDL'] },
  { group: 'Simulation', items: ['PLECS', 'Simulink', 'LTspice', 'Typhoon HIL', 'Quartus', 'ModelSim'] },
  { group: 'Hardware', items: ['Altium Designer', 'KiCad', 'Code Composer Studio', 'STM32', 'Vector CAN', 'PCAN'] },
  { group: 'Robotics', items: ['ROS2', 'Gazebo'] },
];

export const coursework = [
  { group: 'Power Electronics', items: ['Power Converter Analysis & Design', 'Switched Mode Power Conversion', 'Power Electronics & Motor Drives', 'Digital Controller for Power Applications', 'Electric Machines', 'Battery Technology', 'EV Engineering & Development'] },
  { group: 'Controls', items: ['Linear Dynamical Systems', 'Control of Automotive Systems', 'Signals & Systems'] },
  { group: 'Mathematics', items: ['Probability, Statistics & Stochastic Processes', 'Complex Variables', 'Differential Equations'] },
];

export const beyond = [
  'Served on the Co-Curricular Affairs Executive Committee at IIT Madras, overseeing policy, budgets and conflict resolution.',
  'Competed at Harvard MUN; special mentions at MVM and SRM MUN.',
  'Captained the school cricket team for two years.',
  'Trained Carnatic vocalist and keyboardist, with a keyboard certification from Trinity College London.',
];

---
title: "Electronics for a Hyperloop Pod"
group: projects
order: 1
oneLiner: "Led the electrical team behind the pod's propulsion, levitation and safety electronics. 1st in Asia at European Hyperloop Week 2024."
org: Avishkar Hyperloop, IIT Madras
role: Electrical Team Lead
period: "Sep '23 – Nov '24"
status: 1st in Asia, 5th overall · European Hyperloop Week 2024
cover: ./pcu-render.png
coverAlt: 3D render of the propulsion control board designed for Avishkar Hyperloop
tags: [TI F28379D, MSP432, TI-RTOS, CAN, Altium, Stateflow]
highlights: 
  - { value: "1st in Asia", label: "European Hyperloop Week 2024, Zurich" }
  - { value: "Pod-wide", label: "one communication network tying every subsystem together" }
  - { value: "Fail-safe", label: "fault handling designed in from the start" }
gallery:
  - { src: ./levitation-layout.png, caption: "Levitation module PCB: layout" }
  - { src: ./levitation-board.png, caption: "Levitation module PCB: 3D view" }
documents:
  - { title: "Levitation module PCB schematic", file: levitation-schematic.pdf, kind: schematic, note: "6 pages" }
wanted: 
  - "The pod at European Hyperloop Week 2024"
  - "Team photo in Zurich"
  - "Assembled propulsion control board"
---

## Overview

Avishkar Hyperloop is a 50+ student team at IIT Madras building a scalable hyperloop pod. I was **selected as one of 7 from ~100 electrical applicants** and went on to **lead the electrical team**. The pod is driven by a linear induction motor (LIM), so the electronics have to monitor, control and coordinate propulsion, levitation, cooling and safety in real time.

## What I did

- Designed a **6-layer dual-MCU board** housing TI's MSP432 and F28379D, running v/f control, SVPWM, inverter gate drive, regenerative braking, sensor fusion, intra-pod CAN telemetry and precharge for LIM propulsion.
- Wrote **TI-RTOS PID firmware** for HV battery thermal control, holding within ±0.5 °C across cooling nodes.
- Architected a pod-wide **300+ message CANdb++ network** and a unified CAN driver with live ECU structs.
- Implemented a **20-state fault-handling state machine** in MATLAB Stateflow, covering 130+ fault cases.
- Designed multilayer PCBs for the **propulsion, telecom, cooling, levitation, lighting, safety and braking** systems.

## Result

The team placed **1st in Asia and 5th overall at European Hyperloop Week 2024** in Zurich. I later gave an invited talk on hyperloop technology to 200+ students at College of Engineering Trivandrum.

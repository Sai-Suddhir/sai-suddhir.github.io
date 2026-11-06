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
  - { src: ./pcu-block.png, caption: "Propulsion control unit: two processors, sensing, gate drive and protected power on one board" }
  - { src: ./tcu-block.png, caption: "Thermal control unit: commands in over CAN, pump control out" }
  - { src: ./levitation-layout.png, caption: "Levitation module PCB: layout" }
  - { src: ./levitation-board.png, caption: "Levitation module PCB: 3D view" }
documents:
  - { title: "Levitation module PCB schematic", file: levitation-schematic.pdf, kind: schematic, note: "6 pages" }
code:
  - { title: "Avishkar-Work", url: "https://github.com/Sai-Suddhir/Avishkar-Work", description: "Firmware I wrote for the pod's thermal control unit: CAN messaging and coolant control on the MSP432." }
wanted: 
  - "The pod at European Hyperloop Week 2024"
  - "Team photo in Zurich"
  - "Assembled propulsion control board"
---

## Overview

Avishkar Hyperloop is a 50+ student team at IIT Madras building a scalable hyperloop pod. I was **selected as one of 7 from ~100 electrical applicants**, started out designing and testing PCBs, and went on to **lead the electrical team**.

The pod is driven by a linear induction motor (LIM), so its electronics have to sense, control and coordinate propulsion, levitation, cooling and safety in real time, and they have to fail safely when something goes wrong.

## What I did

### Propulsion

- Designed the **propulsion control unit**, a 6-layer dual-MCU board. TI's F28379D generates the inverter gate signals and the MSP432 talks to the rest of the pod over CAN. Between them they run v/f control, SVPWM, regenerative braking, sensor fusion and precharge for the LIM.
- Built protection in from the start: TVS-protected analog inputs, pull-downs that hold the gate signals low by default, and a fused, surge-protected and filtered supply.

### Cooling

- Wrote the **thermal control unit firmware** on the MSP432 under TI-RTOS. It reads cell temperatures and coolant pressure over CAN and drives the coolant pumps with a PID loop, holding the HV battery within **±0.5 °C** across cooling nodes. The code is on GitHub, linked below.

### Communication and safety

- Architected the pod-wide **CAN network**: 300+ messages in CANdb++, with one shared CAN driver that keeps a live picture of every ECU.
- Implemented the pod's **fault-handling state machine** in MATLAB Stateflow: 20 states covering 130+ fault cases.

### Boards

- Designed multilayer PCBs for the **propulsion, telecom, cooling, levitation, lighting, safety and braking** systems.

### Team

- Helped set the **electrical recruitment application** for the 2024–25 team, covering H-bridges, precharge, board power design, CAN and RTOS.

## Result

The team placed **1st in Asia and 5th overall at European Hyperloop Week 2024** in Zurich. I later gave an invited talk on hyperloop technology to 200+ students at College of Engineering Trivandrum.

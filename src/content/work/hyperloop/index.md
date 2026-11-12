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
  - { value: "1 of 7", label: "picked from about 100 applicants for the electrical team" }
  - { value: "130+", label: "fault cases the pod knows how to handle" }
gallery:
  - { src: ./pcu-block.png, caption: "Propulsion control unit, with two processors, sensing, gate drive and protected power on one board" }
  - { src: ./tcu-block.png, caption: "Thermal control unit, with commands in over CAN and pump control out" }
  - { src: ./levitation-layout.png, caption: "Levitation module PCB, layout" }
  - { src: ./levitation-board.png, caption: "Levitation module PCB, 3D view" }
documents:
  - { title: "Levitation module PCB schematic", file: levitation-schematic.pdf, kind: schematic, note: "6 pages" }
code:
  - { title: "Avishkar-Work", url: "https://github.com/Sai-Suddhir/Avishkar-Work", description: "Firmware I wrote for the pod's thermal control unit, covering CAN messaging and coolant control on the MSP432." }
wanted: 
  - "The pod at European Hyperloop Week 2024"
  - "Team photo in Zurich"
  - "Assembled propulsion control board"
---

## The team

Avishkar Hyperloop is a team of more than 50 students at IIT Madras building a scalable hyperloop pod. I applied for the electrical team in my second year and was one of 7 picked from about 100 applicants. I started out designing and testing PCBs and went on to lead the electrical team.

The pod runs on a linear induction motor. Its electronics have to sense, control and coordinate propulsion, levitation, cooling and safety in real time, and they have to fail safely when something breaks. Most of what I built came back to that last requirement.

## The propulsion board

I designed the propulsion control unit, a 6-layer board with two microcontrollers. A TI F28379D generates the gate signals for the inverter, and an MSP432 talks to the rest of the pod over CAN. Between them they run v/f control, SVPWM, regenerative braking, sensor fusion and precharge for the motor.

Protection went in from the first schematic. The analog inputs sit behind TVS diodes, pull-downs hold the gate signals low by default, and the supply is fused, surge-protected and filtered.

## Keeping the battery cool

I wrote the firmware for the thermal control unit on the MSP432, under TI-RTOS. It reads cell temperatures and coolant pressure over CAN and drives the coolant pumps with a PID loop. It held the high-voltage battery within ±0.5 °C across the cooling nodes. The code is on GitHub, linked at the bottom of this page.

## One network for the whole pod

Every subsystem on the pod talks over a single CAN network. I laid out its 300+ messages in CANdb++ and wrote one shared CAN driver that all the ECUs use, so each of them keeps a live picture of the others.

The fault-handling state machine sits on top of that network. I built it in MATLAB Stateflow with 20 states, and it covers more than 130 fault cases.

## The other boards

Beyond propulsion, I designed multilayer PCBs for the telecom, cooling, levitation, lighting, safety and braking systems.

## Recruiting the next team

I helped set the electrical recruitment application for the 2024–25 team. It covered H-bridges, precharge, board power design, CAN and RTOS.

## How it went

We placed 1st in Asia and 5th overall at European Hyperloop Week 2024 in Zurich. Later I was invited to speak about hyperloop technology to more than 200 students at College of Engineering Trivandrum.

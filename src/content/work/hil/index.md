---
title: FPGA Hardware-in-the-Loop Platform for Power Converters
group: research
order: 3
oneLiner: A low-cost real-time converter emulator, now used to train juniors in a lab course.
role: Research Project
period: "Dec '25 – May '26"
advisor: Prof. Lakshminarasamma N
status: In use in a lab course
tags: [Verilog, Altera MAX V, CHIL, TI F28379D, Typhoon HIL, PLECS]
highlights:
  - { value: "<1%", label: "tracking error vs Typhoon HIL" }
  - { value: "Q16.16", label: "fixed-point plant solver" }
  - { value: "CCM + DCM", label: "both conduction modes captured" }
---

## Overview

Commercial hardware-in-the-loop simulators are expensive. I built a **low-cost real-time emulator** for power converters so a digital controller can be tested against a simulated plant, for Prof. Lakshminarasamma N's power lab. I learned Verilog while building it, and the platform is **now used in a lab course to train juniors**.

## What I did

- Built a real-time **boost-converter plant** on a 570-LE **Altera MAX V CPLD**, written in Tustin-discretised **Q16.16 fixed-point Verilog** with SPI DAC output.
- Captured both CCM and DCM operation, tracking **Typhoon HIL within 1%**.
- Paired the plant with a **TI F28379D** controller for controller-hardware-in-the-loop (CHIL) testing, running switching and averaged models in real time, validated against Typhoon HIL and PLECS.
- Designed a **controller interface card** with level shifting, analog signal conditioning and transient protection, so one controller can run on both Typhoon HIL-404 and the emulator.

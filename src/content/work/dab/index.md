---
title: Bidirectional Multi-Output DAB Converter
group: projects
order: 2
oneLiner: 500 V → 48 V / 12 V, 100 kHz, 96.2% efficient in simulation.
role: "Course project · Power Electronics & Motor Drives (ED5231)"
period: "Jul – Nov '25"
cover: ./simulink-model.png
coverAlt: Simulink model of the dual-active-bridge converter
tags: [Simulink, Dual-active bridge, SiC, ZVS, Planar transformer]
highlights:
  - { value: "96.2%", label: "efficiency in simulation" }
  - { value: "100 kHz", label: "switching frequency" }
  - { value: "500 → 48/12 V", label: "bidirectional, multi-output" }
documents:
  - { title: "Project report", file: project-report.pdf, kind: report, note: "With M Prithish Kumar" }
---

## Problem

Simulate a multi-output (500 V → 48 V and 12 V) **bidirectional** converter for electric vehicles in Simulink, with 10% ripple current and 0.5% ripple voltage.

## Choosing a topology

We considered an active-clamp current-fed full bridge, a dual-active bridge, a fixed-frequency LLC and a phase-shift LLC. Given the efficiency target, the need for bidirectional power flow and galvanic isolation at high voltage, the **dual-active bridge (DAB)** was the best fit.

## What I did

- Designed the converter with **phase-shift modulation** and inherent **zero-voltage switching**.
- Sized the leakage inductance, and selected **SiC MOSFETs** and a **planar transformer**.
- Reached **96.2% efficiency** in simulation.

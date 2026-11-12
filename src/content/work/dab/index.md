---
title: "Bidirectional Power Conversion for EVs"
group: course
order: 1
oneLiner: "An isolated converter that lets power flow both ways between an EV's high-voltage battery and its low-voltage systems."
role: "Power Electronics & Motor Drives for Electrified Vehicles"
period: "Jan – May '25"
cover: ./simulink-model.png
coverAlt: Simulink model of the dual-active-bridge converter
tags: [Simulink, Dual-active bridge, SiC, ZVS, Planar transformer]
highlights:
  - { value: "96.2%", label: "efficiency in simulation" }
documents:
  - { title: "Project report", file: project-report.pdf, kind: report, note: "With M Prithish Kumar" }
---

## The brief

The course project asked for a bidirectional converter for an electric vehicle. It had to take 500 V down to both 48 V and 12 V, with no more than 10% ripple current and 0.5% ripple voltage, and be simulated in Simulink. I worked on it with M Prithish Kumar.

## Picking a topology

We compared an active-clamp current-fed full bridge, a dual-active bridge, a fixed-frequency LLC and a phase-shift LLC. We needed high efficiency, power flow in both directions and galvanic isolation at high voltage. The dual-active bridge was the best fit for all three.

## The design

I designed the converter with phase-shift modulation, which brings zero-voltage switching with it. I sized the leakage inductance and chose SiC MOSFETs and a planar transformer. The converter reached 96.2% efficiency in simulation.

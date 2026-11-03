---
title: Boundary Control & Sensor Reduction for Inverters
group: research
order: 1
oneLiner: Dual-degree project on DC-link voltage balancing and single-sensor current reconstruction.
role: Dual-Degree Project
period: "May '26 – Present"
advisor: Prof. Srikanthan Sridharan
status: Ongoing · paper under review at ICPE 2027
tags: [3-level NPC, DSTATCOM, Boundary control, Observers, VFDs]
---

## Overview

Split DC-link inverters, such as the 3-level neutral-point-clamped (NPC) DSTATCOM, need their capacitor voltages kept equal. The usual approach is PI or duty-ratio chopper control. My dual-degree project replaces it with **geometric boundary control**, and also looks at reconstructing drive currents from fewer sensors.

## What I did

- Derived a **second-order switching surface** for split DC-link voltage balancing in a 3-level NPC DSTATCOM.
- Added a **disturbance-augmented surface** using moving-average feedforward, and a **peak-current-limited** variant.
- Designing a **curve-fitting observer** that reconstructs three-phase VFD currents from a single DC-link sensor, fitting a sinusoidal oscillator to sparse, switching-state-dependent samples without load parameters.

## Publication

**A Geometric Control Approach for DC-link Voltage Equalization in Split-Capacitor Inverters.**
Sai Suddhir A B and Srikanthan Sridharan. *Submitted to ICPE 2027 (under review).*

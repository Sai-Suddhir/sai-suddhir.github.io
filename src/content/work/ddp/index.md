---
title: Geometric Boundary Control for Split DC‑Link Inverters
group: research
order: 1
oneLiner: A switching surface that equalizes split DC-link capacitors in a single switching action. Paper under review at ICPE 2027.
role: Dual-Degree Project
period: "May '26 – Present"
advisor: Prof. Srikanthan Sridharan
status: Ongoing · paper under review at ICPE 2027
cover: ./state-trajectories.png
coverAlt: State trajectories of the two-quadrant chopper, with the proposed second-order switching surface highlighted
tags: [Boundary control, 3-level NPC, DSTATCOM, Two-quadrant chopper, Nonlinear control]
highlights:
  - { value: "1", label: "switching action to remove a 25.2 V imbalance, settling within 5 ms" }
  - { value: "13×", label: "fewer switching actions with ripple compensation (140/s vs 1865/s)" }
  - { value: "18.1 A", label: "simulated peak inductor current, against 18.3 A predicted in closed form" }
gallery:
  - { src: ./npc-dstatcom.png, caption: "Three-level NPC DSTATCOM with the balancing chopper" }
  - { src: ./multi-step-control.png, caption: "Multi-step boundary control: the peak current is capped at an adjustable limit" }
  - { src: ./results-single-step.png, caption: "Direct application: capacitor voltages equalize almost immediately once the chopper is enabled" }
  - { src: ./results-ripple-compensated.png, caption: "Ripple-compensated application: same drift removal with about 13× fewer switching actions" }
  - { src: ./results-dynamic-loading.png, caption: "Dynamic loading: the dc neutral current reverses twice and the capacitors stay balanced" }
documents:
  - { title: "A Geometric Control Approach for DC-Link Voltage Equalization in Split-Capacitor Inverters", file: icpe-2027-digest.pdf, kind: paper, note: "ICPE 2027 digest · 6 pages · under review" }
---

## The problem

Split-capacitor inverters, such as the three-level neutral-point-clamped (NPC) **DSTATCOM**, keep their two DC-link capacitors in series. When unbalanced or nonlinear loads push a **dc component** into the neutral current, the capacitor voltages drift apart permanently. This major imbalance degrades the compensator's current tracking.

A two-quadrant chopper is the usual fix: it moves charge between the capacitors through an inductor at their midpoint. But existing chopper controllers switch continuously, respond slowly, and some need parameters chosen in advance from the expected load. None of them use the chopper's own natural trajectories.

## The idea

**Boundary control** picks a switching surface from how a converter's states naturally evolve. I applied that idea to the chopper:

- Modelling the chopper with the voltage imbalance *e* and inductor current *i<sub>L</sub>* as states, its trajectories turn out to be **two families of concentric ellipses** that can be written in closed form.
- The arcs of those ellipses that pass through the balanced point form a **second-order switching surface**. Since the surface *is* a natural trajectory, the state slides onto the balanced point and an imbalance is removed in a **single switching action**.
- The peak inductor current of that single action is set by the circuit, not the controller, and I derived it in closed form. A **multi-step variant** turns the switch off at an adjustable current limit, lets the current freewheel to zero and switches again. That caps the peak current, and every turn-on happens at zero current.

## Applying it to a DSTATCOM

In a DSTATCOM, the neutral current makes the capacitors both **drift** (its dc part) and **oscillate within each cycle** (its ac part). The paper proposes two ways to use the surface:

1. **Direct:** the inductor carries the dc part of the neutral current, and the surface counters both the drift and the oscillation. This is best when the oscillation must be suppressed, for example with small capacitors.
2. **Ripple-compensated:** the intra-cycle oscillation is predicted from the measured neutral current and subtracted, so the chopper acts only on the drift. Low-pass filtering would delay the correction; prediction doesn't.

## Results

Simulated on a three-level NPC DSTATCOM with a 1200 V DC link, C = 2200 µF and a 100 mH chopper inductor:

- **Direct application:** a 25.2 V imbalance is removed in a **single switching action**, settling within **5 ms**. The inductor current peaks at **18.1 A**, against **18.3 A** predicted by the closed-form expression. The capacitor difference then stays within about ±0.4 V.
- **Ripple-compensated application:** the drift is removed just as well, with **140 switching actions per second instead of 1865**, about **13× fewer**. The capacitor means differ by only 0.2 V.
- **Dynamic loading:** with multi-step control limited to 6 A, the chopper settles in **10.4 ms**. Two load steps then reverse the dc neutral current, from −0.13 A to 1.14 A and then to −1.39 A, and the capacitor voltages stay balanced throughout.

## What's next in my thesis

- A detailed analysis, a comparative study and **experimental validation** of the control for the full paper.
- A **curve-fitting observer** that reconstructs three-phase VFD currents from a single DC-link current sensor, fitting a sinusoidal oscillator to sparse, switching-state-dependent samples without needing load parameters.

## Publication

**A Geometric Control Approach for DC-Link Voltage Equalization in Split-Capacitor Inverters.**
Sai Suddhir A B and Srikanthan Sridharan. *Submitted to ICPE 2027 (under review).* The digest is attached below.

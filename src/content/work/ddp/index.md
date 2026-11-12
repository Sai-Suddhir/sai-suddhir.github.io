---
title: "Geometric Control for Split DC-Link Inverters"
group: research
order: 1
oneLiner: "Rebalancing an inverter's capacitors by following the circuit's own natural trajectories. Paper under review at ICPE 2027."
role: Dual-Degree Project
period: "May '26 – Present"
advisor: Prof. Srikanthan Sridharan
status: Ongoing · paper under review at ICPE 2027
cover: ./state-trajectories.png
coverAlt: State trajectories of the two-quadrant chopper, with the proposed second-order switching surface highlighted
tags: [Boundary control, 3-level NPC, DSTATCOM, Two-quadrant chopper, Nonlinear control]
highlights: 
  - { value: "One step", label: "an imbalance is corrected in a single switching action" }
  - { value: "Far fewer", label: "switching actions once the ripple is predicted and cancelled" }
  - { value: "Closed form", label: "peak current known analytically, before it happens" }
gallery:
  - { src: ./chopper.png, caption: "The two-quadrant chopper, where an inductor moves charge between the two capacitors" }
  - { src: ./npc-dstatcom.png, caption: "Three-level NPC DSTATCOM with the balancing chopper" }
  - { src: ./multi-step-control.png, caption: "Multi-step boundary control, with the peak current capped at an adjustable limit" }
  - { src: ./results-single-step.png, caption: "Direct application, where the capacitor voltages equalize almost immediately once the chopper is enabled" }
  - { src: ./results-ripple-compensated.png, caption: "Ripple-compensated application, with the same drift removal in far fewer switching actions" }
  - { src: ./results-dynamic-loading.png, caption: "Dynamic loading, where the dc neutral current reverses twice and the capacitors stay balanced" }
documents:
  - { title: "A Geometric Control Approach for DC-Link Voltage Equalization in Split-Capacitor Inverters", file: icpe-2027-digest.pdf, kind: paper, note: "ICPE 2027 digest · 6 pages · under review" }
---

## The problem

Split-capacitor inverters, such as the three-level neutral-point-clamped (NPC) **DSTATCOM**, keep their two DC-link capacitors in series. When unbalanced or nonlinear loads push a dc component into the neutral current, the capacitor voltages drift apart and stay apart. That imbalance degrades the compensator's current tracking.

A two-quadrant chopper is the usual fix. It moves charge between the capacitors through an inductor at their midpoint. The existing chopper controllers switch continuously and respond slowly, and some need parameters chosen in advance from the expected load. None of them use the chopper's own natural trajectories.

## The idea

**Boundary control** picks a switching surface from how a converter's states naturally evolve. I applied that idea to the chopper.

- With the voltage imbalance *e* and the inductor current *i<sub>L</sub>* as states, the chopper's trajectories turn out to be two families of concentric ellipses that can be written in closed form.
- The arcs of those ellipses that pass through the balanced point form a second-order switching surface. The surface is itself a natural trajectory, so the state rides it to the balanced point and an imbalance is removed in a single switching action.
- The peak inductor current of that single action is set by the circuit, not the controller, and I derived it in closed form. A multi-step variant turns the switch off at an adjustable current limit, lets the current freewheel to zero and switches again. That caps the peak current, and every turn-on happens at zero current.

## Applying it to a DSTATCOM

In a DSTATCOM, the neutral current makes the capacitors both **drift** (its dc part) and **oscillate within each cycle** (its ac part). The paper proposes two ways to use the surface.

1. **Direct.** The inductor carries the dc part of the neutral current, and the surface counters both the drift and the oscillation. This is best when the oscillation must be suppressed, for example with small capacitors.
2. **Ripple-compensated.** The intra-cycle oscillation is predicted from the measured neutral current and subtracted, so the chopper acts only on the drift. Low-pass filtering would delay the correction, and prediction doesn't.

## Results

Simulated on a three-level NPC DSTATCOM with a 1200 V DC link, C = 2200 µF and a 100 mH chopper inductor.

- **Direct application.** A 25.2 V imbalance is removed in a single switching action and settles within 5 ms. The inductor current peaks at 18.1 A, against the 18.3 A predicted by the closed-form expression. The capacitor difference then stays within about ±0.4 V.
- **Ripple-compensated application.** The drift is removed just as well, with an order of magnitude fewer switching actions (140 per second instead of 1865). The capacitor means differ by only 0.2 V.
- **Dynamic loading.** With multi-step control limited to 6 A, the chopper settles in 10.4 ms. Two load steps then reverse the dc neutral current, from −0.13 A to 1.14 A and then to −1.39 A, and the capacitor voltages stay balanced throughout.

## What's next in my thesis

- A detailed analysis, a comparative study and experimental validation of the control, for the full paper.
- A curve-fitting observer that reconstructs the three-phase currents of a variable-frequency drive from a single DC-link current sensor. It fits a sinusoidal oscillator to sparse samples that depend on the switching state, and it needs no load parameters.

## Publication

**A Geometric Control Approach for DC-Link Voltage Equalization in Split-Capacitor Inverters.**
Sai Suddhir A B and Srikanthan Sridharan. *Submitted to ICPE 2027 (under review).* The digest is attached below.

---
title: "Data-Driven Thermal Models for EV Batteries"
group: course
order: 4
oneLiner: "Shrinking a detailed thermal model of a battery cell into one small enough to run inside a battery management system."
role: "Data Driven Modelling of Aerospace Systems"
status: In progress
cover: ./heat-source.png
coverAlt: Heat generated across a Li-ion cell, concentrated near the tabs, with a cold plate along the base
tags: [Reduced-order modelling, Balanced truncation, Operator inference, Li-ion, Thermal]
gallery:
  - { src: ./temperature-fields.png, caption: "Temperature across the cell as it heats up during a test" }
  - { src: ./temperature-profiles.png, caption: "Hotspot, mean and mid-cell temperatures under five current profiles, from steady discharge to fast charging" }
  - { src: ./test-profiles.png, caption: "The five test cases: three to learn from, two held back to test on" }
  - { src: ./reducibility.png, caption: "The singular values fall off quickly, which is what lets a small model stand in for the full one" }
  - { src: ./verification.png, caption: "Checking the solver against an analytical solution" }
---

## Problem

A lithium-ion cell's temperature decides how much power it can deliver, how fast it ages and how safely it runs. An EV's battery management system (BMS) measures only a few surface temperatures, and the hottest point of a pouch cell, just below its tabs, is usually not one of them.

A model can estimate that hotspot, but a detailed thermal model of a single cell has well over a thousand states, and the BMS would need one per cell, running in real time. That is too much for embedded hardware.

## Idea

Build a **reduced-order model**: a handful of states that reproduces the hotspot, average and sensor temperatures of the full model, including for current and coolant profiles it has never seen. A model that small can run inside a BMS, help design the cooling controller, and make drive-cycle and fast-charge studies cheap.

## What I did

- **Modelled the cell.** A 20 Ah LFP pouch cell standing on a liquid-cooled plate: a 2D heat equation with heat generated near the tabs and cooling through the faces and the plate, discretised into 1,271 states and verified against an analytical solution.
- **Generated the data.** Three training runs (steady discharge, power pulses, a C-rate staircase with changing coolant) and two harder runs held back for testing (a multisine current, and fast charging from a warm start).
- **Showed the system can be reduced.** Four modes capture 99.99% of the energy in the data, and the balanced-truncation error bound drops below 1% at just four states.
- **Set up the comparison.** Balanced truncation uses the model's equations and comes with an error guarantee; operator inference learns only from simulation data, which is closer to reality when a new cell chemistry changes the physics. The question is whether the data-only model, trained on three runs, can predict the hotspot as well.

## What it shows so far

The hotspot always sits just below the tabs, farthest from the cold plate. A mid-cell sensor tracks the average temperature well but underestimates the hotspot, which is exactly the gap a model has to fill. Building and comparing the two reduced models is the next phase of the project.

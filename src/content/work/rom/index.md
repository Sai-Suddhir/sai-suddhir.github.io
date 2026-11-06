---
title: "Data-Driven Thermal Models for EV Batteries"
group: course
order: 4
oneLiner: "Comparing data-driven ways to predict how a battery cell heats up, without running a full simulation."
role: "Data Driven Modelling of Aerospace Systems"
cover: ./heat-source.png
coverAlt: Heat generated across a Li-ion cell, concentrated near the tabs, with a cold plate along the base
tags: [Data-driven modelling, Li-ion, Thermal]
gallery:
  - { src: ./temperature-fields.png, caption: "Temperature across the cell at four moments in a test" }
  - { src: ./temperature-profiles.png, caption: "Hotspot, mean and mid-cell temperatures under five current profiles, from steady discharge to fast charging" }
  - { src: ./reducibility.png, caption: "The singular values fall off quickly, which is what lets a small model stand in for the full one" }
  - { src: ./verification.png, caption: "Checking the solver against an analytical solution" }
---

## Overview

A course project comparing **two data-driven reduced-order modelling methods** for the thermal behaviour of an EV Li-ion cell.

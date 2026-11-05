---
title: TVS Motor Company
group: industry
order: 1
oneLiner: "Taught existing production-line machines to fill ABS brakes, instead of replacing them."
org: TVS Motor Company, Hosur
role: Production Engineering Intern
period: "Jul '25"
tags: [CAN, UDS, ISO-TP, OPC UA, PLC, Python]
highlights: 
  - { value: "Full-time offer", label: "and a commendation from the VP, Production" }
---

## The problem

India's ABS mandate for two-wheelers takes effect in January 2026. On the assembly line, brake fluid is filled by dedicated machines, and the ones built for conventional brakes can't fill an ABS unit: its valves and pump have to be driven during the fill so that no air stays trapped inside. Replacing every machine would have been very expensive.

## The idea

Leave the machine and its PLC logic untouched, and add a small software layer beside it that listens to the machine and drives the ABS unit at exactly the right moments.

## What I did

- Studied both kinds of machine on the shop floor at two plants, and compared their fill cycles stage by stage.
- Mapped the ABS supplier's evacuate-and-fill procedure onto the existing machine's cycle, to find where the ABS unit has to act.
- Wrote Python tools that talk to the ABS hydraulic control unit over **CAN (UDS on ISO-TP)**: opening a diagnostic session, unlocking security access, and running the routines that cycle its valves and pump.
- Linked them to the machine's PLC over **OPC UA**, so the PLC's cycle start sets the whole sequence in motion.
- Built a timer-based proof of concept first, then designed a **closed-loop** version that waits on the PLC's own stage signals, so a missed stage or a leak is caught instead of ignored.
- Kept within the unit's safety limits on supply voltage, pump dry-run and valve on-time.

## Result

The routines ran successfully on the ABS unit. The retrofit was projected to save **$200k+** in upgrade costs, and earned a commendation from the VP (Production) and a **full-time offer**.

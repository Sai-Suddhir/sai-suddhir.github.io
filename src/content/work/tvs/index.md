---
title: TVS Motor Company
group: industry
order: 1
oneLiner: "Taught existing production-line machines to fill ABS brakes, instead of replacing them."
org: TVS Motor Company, Hosur
role: Production Engineering Intern
period: "Jul '25"
logo: ./tvs-logo.svg
tags: [CAN, UDS, ISO-TP, OPC UA, PLC, Python]
highlights: 
  - { value: "$200k+", label: "projected savings in upgrade costs" }
  - { value: "Full-time offer", label: "and a commendation from the VP of Production" }
gallery:
  - { src: ./fill-cycle.png, caption: "The fill cycle of a conventional machine, stage by stage" }
  - { src: ./retrofit-hook.png, caption: "Where the new software layer hooks into the machine's existing cycle" }
  - { src: ./closed-loop.png, caption: "The closed-loop sequence, where each step waits for the machine to confirm the last" }
---

## The problem

When I joined in July 2025, India's ABS mandate for two-wheelers was due to take effect in January 2026. On the assembly line, brake fluid is filled by dedicated machines. The ones built for conventional brakes can't fill an ABS unit, because its valves and pump have to be driven during the fill so that no air stays trapped inside. Replacing every machine would have been very expensive.

## The idea

Leave the machine and its PLC logic untouched. Add a small software layer beside it that listens to the machine and drives the ABS unit at exactly the right moments.

## How I got there

I started on the shop floor at two plants, studying both kinds of machine and comparing their fill cycles stage by stage. Then I mapped the ABS supplier's evacuate-and-fill procedure onto the existing machine's cycle to find the points where the ABS unit has to act.

The software came next. I wrote Python tools that talk to the ABS hydraulic control unit over CAN, using UDS on ISO-TP. They open a diagnostic session, unlock security access and run the routines that cycle the valves and pump. I linked them to the machine's PLC over OPC UA, so the PLC's cycle start sets the whole sequence in motion.

The first version was a timer-based proof of concept. The second was closed-loop. It waits on the PLC's own stage signals, so a missed stage or a leak gets caught instead of ignored. Both stay within the unit's safety limits on supply voltage, pump dry-run and valve on-time.

## Result

The routines ran successfully on the ABS unit. The retrofit was projected to save more than $200,000 in upgrade costs. It earned a commendation from the VP of Production and a full-time offer.

---
title: "Automating a City's Street Lights"
group: projects
order: 6
oneLiner: "A simple, low-cost timer that now switches thousands of street lights across Coimbatore."
org: ROLFS, Chennai
role: PCB & firmware design
tags: [ATtiny85, RTC, I²C, PCB design]
highlights: 
  - { value: "Thousands", label: "of street lights across Coimbatore run on it" }
gallery:
  - { src: ./timer-schematic.jpg, caption: "Timer circuit schematic" }
wanted: 
  - "Assembled timer board"
  - "A unit installed in the field"
---

## Problem

Street lights are usually switched by hand: someone turns on the main breaker for a group of streets at 6 pm and off at 6 am. A central control room is expensive because every local connection has to be wired back to it.

## What I did

- Designed a timer PCB and firmware in which an **ATtiny85** reads a **real-time clock over I²C** and switches a relay that controls a group of lights.
- Kept it **low-cost and simple** for mass deployment.

## Result

The timer now runs **2000+ street lights across Coimbatore**.

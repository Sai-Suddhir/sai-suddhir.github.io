---
title: Custom Flight Controller for a Drone Swarm
group: projects
order: 3
oneLiner: An STM32 flight controller at 70% lower cost than a Pixhawk.
org: Aero Club, IIT Madras
role: Embedded Systems Engineer
period: "Sep '23 – Nov '24"
cover: ./fc-layout.png
coverAlt: PCB layout of the custom STM32 drone flight controller
tags: [STM32, PCB design, EMI filtering, Python]
highlights:
  - { value: "70%", label: "lower hardware cost than a Pixhawk" }
  - { value: "85%", label: "success rate of the anti-collision model" }
documents:
  - { title: "Flight controller schematic", file: fc-schematic.pdf, kind: schematic }
---

## Problem

Commercial flight controllers cost around ₹12k each. With drone swarming as the end goal, building 100 drones that way would be very expensive, and an off-the-shelf board leaves many capabilities unused for our use case.

## What I did

- Designed a **custom flight controller around an STM32** microcontroller, integrating telemetry, the swarm algorithm and precise motor control on one board.
- Added **filtering** throughout the circuitry, since the sensor data was susceptible to electromagnetic interference.
- Modelled a **3-body anti-collision algorithm** in Python (NumPy, Shapely) with an 85% success rate.

## Result

The board cut hardware cost by **70%** compared with a commercial Pixhawk.

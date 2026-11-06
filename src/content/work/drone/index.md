---
title: "Affordable Flight Control for Drone Swarms"
group: projects
order: 3
oneLiner: "A flight controller designed from scratch, so that building a swarm of drones doesn't cost a fortune."
org: Aero Club, IIT Madras
role: Embedded Systems Engineer
period: "Sep '23 – Nov '24"
cover: ./fc-render.png
coverAlt: 3D render of the custom STM32 drone flight controller
gallery:
  - { src: ./fc-layout.png, caption: "Board layout" }
  - { src: ./anti-collision.png, caption: "Simulating three drones steering clear of each other" }
tags: [STM32, PCB design, EMI filtering, Python]
documents:
  - { title: "Flight controller schematic", file: fc-schematic.pdf, kind: schematic }
code:
  - { title: "Drone-swarm", url: "https://github.com/Sai-Suddhir/Drone-swarm", description: "Sensor drivers for the flight controller (BMP180 barometer, MPU IMU) and an early swarm-algorithm sketch." }
wanted: 
  - "Assembled flight controller"
  - "A drone flying on it"
---

## Problem

Commercial flight controllers cost around ₹12k each. With drone swarming as the end goal, building 100 drones that way would be very expensive, and an off-the-shelf board leaves many capabilities unused for our use case.

## What I did

- Designed a **custom flight controller around an STM32** microcontroller, integrating telemetry, the swarm algorithm and precise motor control on one board.
- Added **filtering** throughout the circuitry, since the sensor data was susceptible to electromagnetic interference.
- Modelled a **3-body anti-collision algorithm** in Python (NumPy, Shapely) with an 85% success rate.

## Result

The board cut hardware cost by **70%** compared with a commercial Pixhawk.

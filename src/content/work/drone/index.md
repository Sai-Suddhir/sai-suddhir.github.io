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
highlights:
  - { value: "70%", label: "cheaper than a commercial Pixhawk" }
wanted: 
  - "Assembled flight controller"
  - "A drone flying on it"
---

## Why we built our own

A commercial flight controller costs around ₹12,000. Our goal at the Aero Club was drone swarming, and a swarm of 100 drones at that price was far too expensive. An off-the-shelf board also comes with a lot of capability we would never have used.

## The board

I designed a flight controller around an STM32 that puts telemetry, the swarm algorithm and precise motor control on a single board. The sensor data turned out to be sensitive to electromagnetic interference, so I added filtering throughout the circuit.

It cut the hardware cost by 70% compared with a commercial Pixhawk.

## The swarm side

To go with the board, I modelled a three-body anti-collision algorithm in Python using NumPy and Shapely. It reached an 85% success rate.

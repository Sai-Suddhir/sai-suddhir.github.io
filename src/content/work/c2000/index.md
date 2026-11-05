---
title: "Digital Control of Power Converters"
group: course
order: 3
oneLiner: "Real-time firmware that turns a microcontroller into a converter's controller: modulation, power-factor correction and protection."
role: "Digital Controller for Power Applications (EE5212)"
period: "Jan – May '26"
tags: [TI F28379D, Embedded C, PFC, lag compensator, controller]
---

## Overview

Real-time control firmware for power converters on a **TI F28379D**, written for the Digital Controller for Power Applications course.

## What I did

- Developed **SPWM firmware**, configuring the ePWM time-base, compare, action-qualifier and dead-band modules for phase shift, harmonic injection and **active PFC**, with synchronous ADC sampling.
- Designed a **boost controller** with hysteresis control, lag compensation, overcurrent protection and precharge.

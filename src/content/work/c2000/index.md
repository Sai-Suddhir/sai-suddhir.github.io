---
title: "Digital Control of Power Converters"
group: course
order: 3
oneLiner: "Real-time firmware that turns a microcontroller into a converter's controller, handling modulation, power-factor correction and protection."
role: "Digital Controller for Power Applications"
period: "Jul – Nov '25"
tags: [TI F28379D, Embedded C, PFC, lag compensator, controller]
---

For the Digital Controller for Power Applications course I wrote real-time control firmware on a TI F28379D.

The first part was sinusoidal PWM. I configured the ePWM time-base, compare, action-qualifier and dead-band modules to get phase shift, harmonic injection and active power-factor correction, with the ADC sampling synchronised to the PWM.

The second part was a boost converter controller with hysteresis control, lag compensation, overcurrent protection and precharge.

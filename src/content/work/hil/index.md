---
title: Low-Cost FPGA Hardware-in-the-Loop Simulator
group: research
order: 2
oneLiner: A real-time simulator for testing converter controllers, built for about ₹30k instead of ₹8–21 lakh. Now used in a lab course.
role: Undergraduate Research Project (UGRC)
period: "Dec '25 – May '26"
advisor: Prof. Lakshminarasamma N
status: In use in a lab course
cover: ./interface-card.png
coverAlt: 3D render of the Controller Interface Card v2.0, with DIN41612 connectors, BNC ports and a TI F28379D LaunchPad
tags: [Verilog, Altera MAX V, TI F28379D, CHIL, Typhoon HIL, PLECS, ModelSim, Altium]
highlights:
  - { value: "~₹30k", label: "to build, vs ₹8–21 lakh for commercial real-time simulators" }
  - { value: "10 MHz", label: "FPGA plant solver, updating iL and vC in the same clock cycle" }
  - { value: "216 Hz", label: "plant resonance predicted analytically and reproduced on hardware" }
gallery:
  - { src: ./plant-pcb.png, caption: "Plant PCB v1.0: a carrier for the F28379D that stands in for the simulator" }
  - { src: ./fpga-flow.png, caption: "Verilog architecture of the switching boost-converter model" }
  - { src: ./duty-step-plecs-vs-fpga.png, caption: "Duty step from 0.334 to 0.6: PLECS reference vs the FPGA real-time solver" }
  - { src: ./resonance-fft.png, caption: "FFT of the inductor current: resonance peaks at 216 Hz and 130 Hz" }
  - { src: ./hil101-vs-fpga-inductor-current.png, caption: "Inductor current on the oscilloscope: Typhoon HIL101 vs my FPGA simulator" }
  - { src: ./hil101-vs-fpga-low-frequency.png, caption: "Low-frequency oscillation: Typhoon HIL101 vs my FPGA simulator" }
documents:
  - { title: "Low-Cost Real-Time Simulator: project report", file: ugrc-report.pdf, kind: report, note: "8 pages" }
  - { title: "Design and Implementation of a Low-Cost Real-Time Simulator", file: ugrc-slides.pdf, kind: slides, note: "UGRC presentation · 21 slides · June 2026" }
---

## Why build one

**Controller-hardware-in-the-loop (CHIL)** testing connects a real controller to a simulated power converter running in real time. It lets you test control code, faults and short circuits without risking high-power hardware. But the simulators are expensive:

| Simulator | Approx. price |
| --- | --- |
| OPAL-RT OP4510 | ₹21,00,000 |
| Typhoon HIL402 | ₹14,28,000 |
| dSPACE MicroLabBox | ₹12,60,000 |
| Imperix BoomBox | ₹10,92,000 |
| Plexim RT-Box | ₹8,40,000 |
| **This project (v1 / v2)** | **₹30,000 / ₹42,000** |

Even Typhoon's own TI LaunchPad interface card costs around ₹1,00,000. The goal was a practical, low-cost simulator for students and labs on a budget, built for Prof. Lakshminarasamma N's power lab. I learned Verilog while building it, and the platform is **now used in a lab course to train juniors**.

## How it works

The controller runs the control law and sends PWM signals to the simulator. The simulator solves the converter's equations in real time and sends back the inductor current and capacitor voltage as analog signals. It has two parts.

### 1. Controller Interface Card

A custom PCB that hosts the **TI F28379D** controller and connects it to either a commercial Typhoon HIL404 or my own plant board.

- **16 analog channels** scale the simulator's ±10 V outputs down to the 0–3 V the DSP's ADC accepts, with Schottky clamps so the pins are never overdriven.
- **16-channel bidirectional level shifting** between 5 V and 3.3 V logic. During bring-up I found the shifter drove the bus before the DSP had initialised; routing its enable pin through a pull-up network fixed the power-up sequencing.
- **8 BNC ports** for direct oscilloscope access, plus CAN and two quadrature-encoder inputs.
- **DIN41612 connectors** that mate directly with the Typhoon HIL404 front panel.

### 2. The plant: two real-time models

- **Averaged model on a C2000 DSP:** two state equations, discretised with the Tustin method, running on a second F28379D mounted on a **Plant PCB** that mirrors the Typhoon connector pinout. It's cheap and captures the macroscopic transients, but smooths out the switching ripple.
- **Switching model on an FPGA:** written in **Verilog** for an Altera MAX V (570 logic elements). An FPGA updates the inductor current and capacitor voltage in the same clock cycle, so it captures the actual switching ripple and harmonics. The solver runs at **10 MHz** and outputs through a 12-bit SPI DAC.

## Testing it on a boost converter

| Parameter | Value |
| --- | --- |
| Input voltage | 400 V |
| Switching frequency | 100 kHz |
| Duty cycle | 0.334 |
| L / C / R | 600 µH / 400 µF / 720 Ω |
| Expected output voltage | 600.6 V |
| Expected inductor current | 1.246 A |
| Expected current ripple | 2.23 A |
| Expected resonance | 216.4 Hz |

- The FPGA model tracked the **PLECS** reference through start-up and steady state, with the expected ~1.24 A inductor current and ~2.23 A ripple.
- A **duty step from 0.334 to 0.6** (600.6 V → 1000 V) moved the plant's resonance from 216.4 Hz to 129.9 Hz. The FFT of the simulated current peaks at **216 Hz and 130 Hz**, matching the analysis.
- On the oscilloscope, the hardware waveforms followed a **Typhoon HIL101** running the same test: inductor current, capacitor voltage, switching ripple and the low-frequency oscillation.

## Limits, and what's next

- The full plant model needed **670 logic elements**, more than the **570** available, so some calculations had to be approximated at reduced precision.
- The solver runs at 10 MHz, but the SPI DAC can only update at around 60 kHz, so fast dynamics can't be observed faithfully on the scope.
- **Next:** move to a larger FPGA to remove these limits, and extend the models beyond the boost converter to buck-boost, flyback and dual-active-bridge converters, building toward an open-source library for power electronics research.

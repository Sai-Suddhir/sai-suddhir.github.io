---
title: "Affordable Real-Time Simulation for Power Electronics"
group: research
order: 2
oneLiner: "A hardware-in-the-loop simulator for testing converter controllers safely, at a fraction of the usual cost. Now used to teach a lab course."
role: Undergraduate Research Project (UGRC)
period: "Dec '25 – May '26"
advisor: Prof. Lakshminarasamma N
status: In use in a lab course
cover: ./interface-card.png
coverAlt: 3D render of the Controller Interface Card v2.0, with DIN41612 connectors, BNC ports and a TI F28379D LaunchPad
tags: [Verilog, Altera MAX V, TI F28379D, CHIL, Typhoon HIL, PLECS, ModelSim, Altium]
highlights: 
  - { value: "₹30,000", label: "to build, against ₹8 to 21 lakh for commercial simulators" }
  - { value: "Within 1%", label: "of a Typhoon HIL running the same test" }
  - { value: "In use", label: "training students in a power electronics lab course" }
gallery:
  - { src: ./plant-pcb.png, caption: "Plant PCB v1.0, a carrier for the F28379D that stands in for the simulator" }
  - { src: ./fpga-flow.png, caption: "Verilog architecture of the switching boost-converter model" }
  - { src: ./duty-step-plecs-vs-fpga.png, caption: "Duty step from 0.334 to 0.6, PLECS reference vs the FPGA real-time solver" }
  - { src: ./resonance-fft.png, caption: "FFT of the inductor current, with resonance peaks at 216 Hz and 130 Hz" }
  - { src: ./hil101-vs-fpga-inductor-current.png, caption: "Inductor current on the oscilloscope, Typhoon HIL101 vs my FPGA simulator" }
  - { src: ./hil101-vs-fpga-low-frequency.png, caption: "Low-frequency oscillation, Typhoon HIL101 vs my FPGA simulator" }
documents:
  - { title: "Low-Cost Real-Time Simulator, project report", file: ugrc-report.pdf, kind: report, note: "8 pages" }
  - { title: "Design and Implementation of a Low-Cost Real-Time Simulator", file: ugrc-slides.pdf, kind: slides, note: "UGRC presentation · 21 slides · June 2026" }
wanted: 
  - "The full setup on the bench, with controller, interface card and oscilloscope"
  - "Assembled Controller Interface Card"
---

## Why I built it

Controller-hardware-in-the-loop (CHIL) testing connects a real controller to a simulated power converter running in real time. You can try out control code, faults and even short circuits without putting high-power hardware at risk. The catch is what the simulators cost.

| Simulator | Approx. price |
| --- | --- |
| OPAL-RT OP4510 | ₹21,00,000 |
| Typhoon HIL402 | ₹14,28,000 |
| dSPACE MicroLabBox | ₹12,60,000 |
| Imperix BoomBox | ₹10,92,000 |
| Plexim RT-Box | ₹8,40,000 |
| **This project (v1 / v2)** | **₹30,000 / ₹42,000** |

Even Typhoon's own interface card for a TI LaunchPad costs around ₹1,00,000. I wanted a practical simulator that students and labs on a budget could afford, and built it for Prof. Lakshminarasamma N's power lab. I learned Verilog along the way. The platform is now used in a lab course to train juniors.

## How it works

The controller runs the control law and sends PWM signals to the simulator. The simulator solves the converter's equations in real time and sends the inductor current and capacitor voltage back as analog signals. There are two parts to it.

### 1. Controller Interface Card

This is a PCB I designed to host the TI F28379D controller and connect it to either a commercial Typhoon HIL404 or my own plant board.

- 16 analog channels scale the simulator's ±10 V outputs down to the 0–3 V the DSP's ADC accepts, with Schottky clamps so the pins are never overdriven.
- 16 channels of bidirectional level shifting between 5 V and 3.3 V logic. During bring-up I found the shifter was driving the bus before the DSP had initialised. Routing its enable pin through a pull-up network fixed the power-up sequencing.
- 8 BNC ports for direct oscilloscope access, plus CAN and two quadrature-encoder inputs.
- DIN41612 connectors that mate directly with the Typhoon HIL404 front panel.

### 2. The plant, as two real-time models

- **Averaged model on a C2000 DSP.** Two state equations, discretised with the Tustin method, run on a second F28379D. It sits on a plant PCB that mirrors the Typhoon connector pinout. This version is cheap and captures the large transients, but it smooths out the switching ripple.
- **Switching model on an FPGA.** I wrote this one in Verilog for an Altera MAX V with 570 logic elements, using Q16.16 fixed-point arithmetic. An FPGA updates the inductor current and capacitor voltage in the same clock cycle, so it captures the real switching ripple and harmonics, in both continuous and discontinuous conduction. The solver runs at 10 MHz and outputs through a 12-bit SPI DAC.

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

- The FPGA model tracked the PLECS reference through start-up and steady state, with the expected inductor current of about 1.24 A and ripple of about 2.23 A.
- A duty step from 0.334 to 0.6 (600.6 V → 1000 V) moved the plant's resonance from 216.4 Hz to 129.9 Hz. The FFT of the simulated current peaks at 216 Hz and 130 Hz, which matches the analysis.
- On the oscilloscope, the hardware waveforms followed a Typhoon HIL101 running the same test to within 1%, across inductor current, capacitor voltage, switching ripple and the low-frequency oscillation.

## What was hard

Most of my debugging time went into three things. Fixed-point constants ended up in the wrong Q-format, a mismatch in the clock chain gave the wrong switching frequency, and the design kept outgrowing the chip.

That last one is still a limit. The full plant model needs 670 logic elements and the MAX V has 570, so some calculations run at reduced precision. The solver also runs at 10 MHz while the SPI DAC updates at only about 60 kHz, so fast dynamics can't be seen faithfully on the scope.

## What's next

A larger FPGA removes both limits. After that I want to extend the models beyond the boost converter to buck-boost, flyback and dual-active-bridge converters, and build toward an open-source library for power electronics research.

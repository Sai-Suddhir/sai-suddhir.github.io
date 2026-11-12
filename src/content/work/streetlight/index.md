---
title: "Automating a City's Street Lights"
group: projects
order: 6
oneLiner: "A simple, low-cost timer that now switches 2000+ street lights across Coimbatore."
org: ROLFS, Chennai
role: PCB & firmware design
tags: [ATtiny85, RTC, I²C, PCB design]
highlights: 
  - { value: "2000+", label: "street lights across Coimbatore run on it" }
cover: ./etched-board.jpg
coverAlt: An etched timer PCB, before assembly
gallery:
  - { src: ./sketch.jpg, caption: "Where it started, a hand sketch of the circuit" }
  - { src: ./timer-schematic.jpg, caption: "Timer circuit schematic" }
code:
  - { title: "Timer-Project", url: "https://github.com/Sai-Suddhir/Timer-Project", description: "ATtiny85 firmware for setting the real-time clock, running the switching program, and a serial read-back for testing." }
wanted: 
  - "Assembled timer board"
  - "A unit installed in the field"
---

## How street lights usually work

Most street lights are switched by hand. Someone turns on the main breaker for a group of streets at 6 pm and turns it off again at 6 am. Running them all from a central control room is expensive, because every local connection has to be wired back to it.

## The timer

I designed a small timer board and its firmware for ROLFS, a company in Chennai. An ATtiny85 reads a real-time clock over I²C and switches a relay that controls a group of lights. I kept it cheap and simple, because it had to be made and installed in large numbers.

## Where it is now

The timer runs more than 2000 street lights across Coimbatore.

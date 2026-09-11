# Acuivect: from design intent to a reviewable digital assembly

**Digital design complete; physical build deferred due to budget.**

## Engineering question

How can a budget-constrained benchtop system combine controlled XYZ positioning, camera-to-tool alignment and a removable probe cartridge in an inspectable assembly? Acuivect investigates this on a synthetic brain phantom. Intended insertion depths and motion values are design targets; no physical performance has been measured.

## Architecture and decisions

The second revision uses a Genmitsu 3018-PRO kit as the motion platform. This supplies the main frame, guides, screw drives, motors and controller. Custom mounts, the seated cartridge, its latch and dock, counterbalance routing, camera supports and electronics packaging are integrated around it. The kit's milling spindle is not used for the insertion demonstrator.

The dock and phantom move together with the Y table. That makes the table reference frame part of the targeting problem: camera calibration and target coordinates must remain consistent with table motion. Final calibration and held-out targeting checks belong to the hardware stage.

The cartridge mechanism separates head motion from retained tool seating. The digital sequence covers docking, releasing the latch, withdrawing the head and reseating it. The recorded exploded view explains service assembly; its separation paths are illustrative rather than operating trajectories.

V2 was developed toward a $400 parts goal while preserving V1. The documented estimate is $489.10 before tax and shipping, so the cost goal was not achieved. The physical build is deferred because the required budget is not yet available.

## Digital design and verification

The completed native assembly records 723 occurrences, 395 unique definitions and 21,616 editable parameters, including modeled purchased components with explicit source limitations. Material assignments, joints, cable references and assembly documentation are retained in the private source.

Geometry and material reviews, 30 sampled critical motion/contact poses, a representative parameter edit/restore, cartridge transfer checks and 69 print-shape diagnostics passed in the recorded digital delivery. The revised head also has a native linear-static study. These checks expose design issues before building; they do not qualify a physical machine.

## Next stage when the budget is available

Purchase and measure the selected components, calibrate printed fits, assemble the mechanism, and commission motion and electrical controls in stages. Then measure cartridge retention, stop behavior, camera calibration, positioning repeatability and controlled insertion on the synthetic phantom. Report physical results separately from the digital predictions.

## Authorship and context

Harrison B. Goldberg developed Acuivect as an independent engineering portfolio project for a Neuralink application. Commercial components are identified as purchased hardware, and undocumented supplier geometry remains reference geometry. No company affiliation or endorsement is implied.

AI-assisted workflows supported the creation of this project.

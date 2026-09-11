# Bitzy V1: from kinematics to moving hardware

**Built prototype; control refinement and physical qualification ongoing.**

## Engineering question

How can a small printed robot combine useful positioning, interchangeable tools and a control interface that supports iterative bench work? Bitzy is the physical robot developed under the KineArm project, which began in June 2026. The original six-axis study evolved into the current five-axis prototype.

## Mechanical architecture

The arm combines printed links and brackets with hobby servos, paired shoulder actuation and a common star/four-screw tool interface. Five arm axes use six servos because two actuators share the shoulder. The approximate 475 mm reach and 500 g object-plus-tool objective are design references, not qualified performance.

The September 8 hardware record identifies MS24 replacements at the base and both wrist axes. Earlier DS3218 and MG996R identities in old drawings or procurement lists do not describe those current replacements. Servo identity and calibration need to remain tied to the actual hardware.

## Interchangeable tooling

The project includes gripper and screwdriver tooling around the same original mounting interface. Gripper Rev B uses synchronized parallel jaws, a shared two-rod guide system, replaceable TPU sleeves and a serviceable enclosure. Screwdriver R2 uses an encoder gearmotor, external reduction, an independently supported bit socket and guided axial compliance.

The latest tool CAD and print packages are complete. Their published images and nominal dimensions identify specific digital revisions; they do not establish that every latest part is physically fabricated or qualified. Actual fit, grip, torque, wear and loaded arm behavior remain bench work. Module exchange is manual; an automatic tool-changing dock is future work.

## Controls and iteration

A browser controller and Python bridge command the ESP32-S3/PCA9685 system. MATLAB and Python kinematic work supports forward and inverse positioning. Named teach/replay presets, automatic travel planning and joint interpolation make recorded paths editable and repeatable at the command level.

The September 9 replay update uses synchronized cubic joint interpolation with quintic start/stop easing and fresh entry from the current commanded pose. The main movement-speed control governs replay. A measured shoulder back stop informed a tighter command limit. Physical feedback, complete collision coverage and positioning accuracy are not implied by these software changes.

## Physical evidence and next stage

The 30-second silent demo shows manual module assembly and coordinated movement of the built prototype. Some assembly segments are sped up. The earlier CAD animation and dimensioned sketches are explicitly historical. Neither video is a quantitative acceptance test.

Next: audit the as-built revision, qualify each tool and its TCP, measure repeated approaches and payload behavior, and investigate intermittent joint/serial faults. Bitzy V1 remains active. A separate proposed motor-driven arm is at the planning stage and contributes no achieved results to this page.

AI-assisted workflows supported the creation of this project. My Python work is carried out entirely through AI-assisted workflows using Claude Code and Codex.

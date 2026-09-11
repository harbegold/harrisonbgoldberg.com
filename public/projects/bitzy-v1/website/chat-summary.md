# Bitzy V1 knowledge entry

Bitzy V1 is Harrison B. Goldberg's built five-axis modular robot, developed under KineArm since June 2026. It uses six arm servos because the shoulder is paired, custom ESP32-S3/PCA9685 control, a Python/browser controller and MATLAB/Python kinematic work. The original star/four-screw interface supports interchangeable gripper and screwdriver tooling; exchange is manual, with automatic docking still future work.

The physical prototype demo shows manual module assembly and coordinated movement. Gripper Rev B has 108 named parameters and 84 CAD components; screwdriver R2 has 136 parameters and 67 components. Their native CAD and print packages are complete, with recorded digital geometry, motion and slicing checks. Do not infer that every latest revision is built or physically qualified. Actual grip, torque, loaded arm behavior, accuracy and repeatability still need measurement.

As of September 9, the recorded controls include named presets, automatic travel, synchronized cubic joint interpolation, quintic easing and fresh entry from current commanded pose. A reported shoulder back stop near -29.87 degrees informed a -28 degree guard. Intermittent joint/serial behavior remains unresolved. Model/commanded pose is not measured physical feedback. The approximately 475 mm reach and 500 g object-plus-tool objective are design references, not achieved performance. No reconciled total V1 build cost is available; the old power/wiring ledger includes owned, ordered and deferred items. The separate motor-driven arm is planning work, not a V1 result. Historical six-axis footage, 729 mm references and old servo identities must be labeled by revision.

Public page: https://www.harrisonbgoldberg.com/projects/bitzy-v1/. Selected PDFs, images and silent videos are public; engineering/control/manufacturing sources remain private.

AI-assisted workflows supported the creation of this project.

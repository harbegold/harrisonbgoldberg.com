# Digital validation and remaining work

Digital design complete; physical build deferred due to budget.

| Review | Recorded result | Limit |
|---|---|---|
| Native geometry and materials | Passed recorded digital checks | Source-limited purchased geometry still needs incoming measurement. |
| Motion and contact review | 30 sampled critical poses passed | Sampling does not prove clearance at every possible pose or under deformation. |
| Parameter edit and restore | Passed a representative actual edit/restore | Later interface changes require renewed checks of the affected assembly. |
| Cartridge docking | Dock, withdrawal and reseating checks passed in CAD | Real latching, friction, retention and sensor behavior are untested. |
| Print geometry | 69 current shapes passed digital geometry/slicing diagnostics | No physical printing, fit or process qualification completed. |
| Head linear-static study | Reviewed native solve completed | Single current mesh, ideal boundary conditions and isotropic PETG reference. |
| Physical prototype | Deferred due to budget | No measured targeting accuracy, repeatability, insertion result or hardware stability claim. |

## Revised head study

The reference load case fixes the outer clamp cylinder and applies 5 N in Z, 1 N in X and a separate -35 N mm moment about Y. It uses an isotropic PETG reference with 2,000 MPa Young's modulus and 20 MPa yield reference. These are modeling assumptions, not measured print properties.

The reviewed native results are 0.279 MPa peak von Mises stress, 0.0077216 mm maximum displacement and 71.662 minimum safety factor for that head-only idealization. The current revised geometry has one 0.75 mm parabolic mesh solve; no current peak-stress convergence claim is made. This is not a prediction of complete-machine positioning accuracy or actual printed strength.

The thin probe has a separate bending limit. The 1 N transverse head load does not qualify the probe for that tip load. Counterbalance is not a brake. Printed anisotropy, clamp slip, friction, creep, wiring, control behavior and physical stability remain commissioning questions.

[Read the original-result public review copy](../analysis/Acuivect-Head-Structural-Review.pdf).

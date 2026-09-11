# Formivect feature catalog

All documented current capabilities and potential directions, reviewed September 10, 2026. Current, unverified, experimental and proposed states are explicit. Potential features are a roadmap, not availability or delivery promises.

## Current preview and experimental adapters

### C01 / Fusion add-in and native execution

**Current preview · Native CAD.** A local add-in executes short native Fusion API jobs through custom events on the application thread. Fusion can remain in the background.

Scope: Fusion must remain open; one host serializes CAD work. This is not an independent headless CAD engine.

### C02 / CLI and MCP tools

**Current preview · Native CAD.** A command-line interface and standard MCP connection expose 17 tools with typed arguments and asynchronous job results.

Scope: A queued or running job is not a completed change.

### C03 / Explicit document binding

**Current preview · Native CAD.** List open documents, create a new unsaved design and bind one project to one open document. Closed targets fail explicitly.

Scope: Bindings and document handles reset with the add-in session; they are not durable revision IDs.

### C04 / Geometry and parameter inspection

**Current preview · Native CAD.** Read component/body counts, timeline count, user parameter names/expressions/units, body volumes and bounding dimensions.

Scope: Inspection describes the CAD model, not physical measurements.

### C05 / Unit-aware parameter changes

**Current preview · Native CAD.** Change an existing user parameter with a Fusion expression after checking the expression against its unit.

Scope: Dedicated constraint editing, hole-pattern and broader feature tools are not included.

### C06 / Box and cylinder creation

**Current preview · Native CAD.** Create a named component containing a sketched and extruded box or cylinder using millimeter dimensions.

Scope: Basic primitives are a limited typed modeling surface, not full CAD coverage.

### C07 / Native and exchange exports

**Current preview · Native CAD.** Export F3D, STEP or STL to unique output locations; existing exports are preserved.

Scope: F3D retains Fusion-native continuity. Exchange geometry does not promise native feature-history recovery.

### C08 / Real viewport images

**Current preview · Native CAD.** Capture a 1280 x 960 PNG from the bound project, restore the prior camera/document and return the image through MCP.

Scope: Images support visual review; exact dimensions and hidden geometry require structured checks.

### C09 / Advanced Python and text commands

**Current preview · Native CAD.** Opt-in access can invoke additional exposed Fusion APIs through trusted Python or native commands. Used for a recorded 12-component modeling workflow.

Scope: Full access is unsandboxed and can reach other documents/files; it does not create missing Fusion APIs.

### C10 / Native workspace and onboarding

**Current preview · Workspace and control.** A dark native HTML palette provides a project sidebar, Studio, Activity, Usage and Access views, plus a four-step first-use tutorial.

### C11 / Project and build histories

**Current preview · Workspace and control.** Local SQLite conversation records separate projects and builds, retain visible replies and allow history export.

Scope: Build labels are conversation partitions; they are not CAD branches or a versioned geometry graph.

### C12 / Steering inbox and progress

**Current preview · Workspace and control.** Send requests, questions and updates to a project/build inbox; connected agents can read new messages and post visible outcomes.

Scope: Inbox delivery requires polling. Linking a task is not automatic desktop chat dispatch.

### C13 / Fair project scheduling

**Current preview · Workspace and control.** Independent project queues interleave fairly. Agents can plan concurrently while native CAD jobs run one at a time.

Scope: This is not parallel native editing or a multi-agent coordinator.

### C14 / Interactive-command guard and restoration

**Current preview · Workspace and control.** Jobs wait while a native interactive command is active; targeted work restores the previously active document when possible.

Scope: Background operation is supported for short jobs; it does not promise an entirely invisible application.

### C15 / Pause, resume, stop and cancel

**Current preview · Workspace and control.** Project/global controls hold queues, resume scheduling or cancel queued work; individual queued jobs can also be cancelled.

Scope: A running native operation finishes normally. Stop is not undo; Resume does not relaunch an agent.

### C16 / Job outcomes and duplicate protection

**Current preview · Workspace and control.** Activity records expose queue/running/success/failure states. Request IDs suppress duplicate submissions within the add-in session.

Scope: Queued jobs expire after 120 seconds, including while paused. Failed mutations may leave partial changes; crash recovery is not established.

### C17 / Per-project model and effort selection

**Current preview · Agents and models.** Save a provider, exact model and supported reasoning effort independently for each project. A running job keeps its original selection.

Scope: Changing a preference affects the next run; existing linked tasks retain their own settings.

### C18 / Live Codex model discovery

**Current preview · Agents and models.** Refresh the installed client catalog and available reasoning efforts; Windows catalog reads and native selection were verified.

Scope: Catalog presence does not guarantee account entitlement or capacity for every model.

### C19 / User-started agent runs

**Current preview · Agents and models.** Start a new bounded CLI run from the palette with a saved model and recent build context. Windows Codex inspection, images and replies were verified.

Scope: Runs use provider allowances. Three-, five- and fifteen-minute limits bound time, not money; runs are not restart-resumable.

### C20 / Run controls and visible records

**Current preview · Agents and models.** Retain model/effort, run state, visible replies, session reference and provider-reported usage. Pause/Stop ends managed inference at the next control check.

Scope: Up to 20 recent build messages seed a new run. Completion means the provider finished, not that engineering acceptance passed.

### C21 / Managed project targeting

**Current preview · Agents and models.** Managed MCP is pinned to its project, hides document creation/binding/global controls and rejects cross-project job lookup or cancellation.

Scope: These interface limits do not sandbox full Fusion scripting.

### C22 / External task linking

**Current preview · Agents and models.** Discover local Codex task records or save manual Claude references and copy project connection instructions.

Scope: Existing tasks start or continue in their own client. A Claude Desktop URL does not expose Claude Code usage logs.

### C23 / Claude connection and run adapters

**Implemented / unverified · Agents and models.** MCP registration paths cover Claude Desktop and Claude Code. The managed Claude Code launcher accepts an exact model ID.

Scope: Claude Code was absent on the validation host; live Claude inference remains unverified.

### C24 / Local model experiment

**Experimental · Agents and models.** A bounded text/tool loop can use an already-running local OpenAI-compatible model server with an exact model ID.

Scope: No weights are included or downloaded; no real local model was tested, and viewport images are not supplied to this adapter.

### C25 / Granular operation permissions

**Current preview · Access, data and delivery.** Inspect/model/export permissions are configurable; advanced access is off by default. Queued work rechecks permission at execution.

Scope: Revocation was verified; unrestricted scripting still carries the host user privileges.

### C26 / Local storage and connection controls

**Current preview · Access, data and delivery.** Settings, histories, optional traces and exports stay in local stores. MCP uses stdio; authenticated HTTP binds to loopback and rejects browser origins.

Scope: Chosen provider runs receive their prompts, recent context and requested tool results under provider settings.

### C27 / Usage visibility

**Current preview · Access, data and delivery.** Show available Codex account windows and retained linked Codex/Claude Code session tokens for today and lifetime; missing values remain unknown.

Scope: Account limits are shared. Session totals are not exact incremental Formivect billing, billed credits or a token-to-plan-percentage conversion.

### C28 / Opt-in learning records

**Current preview · Access, data and delivery.** Record local operation episodes only when enabled; review them as accepted/rejected with provenance and evidence.

Scope: Recording is off by default and does not update model weights.

### C29 / Reviewed dataset export

**Current preview · Access, data and delivery.** Export eligible rights-approved human/licensed/local examples as train/validation JSONL and a manifest, split by entire projects.

Scope: Closed-provider/unknown traces and mixed-provider projects are excluded. This is early corpus preparation, not complete data governance.

### C30 / Portable personal preview

**Current preview · Access, data and delivery.** Windows/Mac installer files, backup of an existing add-in, provider registration choices and preserved local history support personal testing.

Scope: Windows installation/native use are verified; Mac native use and full Fusion restart are not. The unsigned application package remains privately distributed.

### C31 / Free preview interface

**Current preview · Access, data and delivery.** The personal preview has no Formivect account, payment screen or Python package dependencies.

Scope: Fusion, Python and chosen provider access remain prerequisites. No public commercial price or unrestricted software license is announced.

## Potential independent-platform features

### P01 / Standalone engineering application

**Proposed · Engineering workspace.** Own workspace, native project representation, feature/assembly behavior, execution runtime and deployed model route for supported workflows.

Scope: Demonstrate useful work without launching Fusion or relying on an external AI service.

### P02 / Shared manual and agent editing

**Proposed · Engineering workspace.** Use the same commands for direct manipulation and conversational edits, preserving editable history and design intent.

Scope: Show a second human edit can rebuild correctly after agent work.

### P03 / Selection, drawing, image and voice context

**Proposed · Engineering workspace.** Attach requests to actual faces/features and coordinate frames; accept drawings, annotated images or voice context alongside exact references.

Scope: Resolve selection and units explicitly; do not infer hidden dimensions as known facts.

### P04 / Engineering conversation and teaching

**Proposed · Engineering workspace.** Explain concepts, critique designs, explore mechanism alternatives and ask for consequential missing inputs while independent work can continue.

Scope: Evaluate useful clarification and checked explanations on representative tasks.

### P05 / Unified workspace views

**Proposed · Engineering workspace.** Switch among 3D, assembly/feature trees, parameters, drawings, analysis, manufacturing, BOM, requirements and history without losing task context.

Scope: Build actual two-way connections to a versioned project model.

### P06 / Requirements and acceptance contracts

**Proposed · Engineering workspace.** Track user requirements, assumptions, units, tolerances, materials, interfaces, objectives, priorities and acceptance evidence.

Scope: Keep supplied, measured, supplier, calculated and estimated values distinguishable.

### P07 / Project branches and alternatives

**Proposed · Engineering workspace.** Compare revisions and alternative designs on mass, cost, constraints and manufacturing assumptions; merge reviewable change sets.

Scope: Implement revision guards and conflict handling, not just named chat histories.

### P08 / Editable parametric features

**Proposed · CAD and engineering engines.** Add sketch dimensions/constraints, extrude/revolve/loft, holes, patterns, fillets and dependency-aware feature regeneration.

Scope: Prove rebuild and editability on unseen in-scope designs.

### P09 / Assembly relationships and motion

**Proposed · CAD and engineering engines.** Represent parts/configurations/transforms/joints and assess degrees of freedom, interference and clearance across declared motion.

Scope: Validate assembly constraints and sampled motion; model checks do not establish real friction.

### P10 / Stable geometry references

**Proposed · CAD and engineering engines.** Use feature-origin identity, semantic roles and geometric matching to preserve references through topology changes.

Scope: Fail visibly when remapping is ambiguous; identifiers alone do not solve topology.

### P11 / Native geometry and constraints

**Proposed · CAD and engineering engines.** Operate a precise boundary-representation kernel and constraint solvers with derived display meshes.

Scope: Kernel licensing/development, feature behavior and persistence require separate validation.

### P12 / Import, exchange and repair

**Proposed · CAD and engineering engines.** Report imported units, hierarchy, metadata, repairs and missing history; support geometry exchange and explicitly inferred feature recovery.

Scope: Quantify translation losses. Proprietary translators and native formats remain feasibility work.

### P13 / Mesh, scan and reconstruction workflows

**Proposed · CAD and engineering engines.** Allow mesh/scan data and image-based design interpretation alongside exact CAD, with visible precision and editability differences.

Scope: Treat reconstructed hidden geometry and unknown scale as inference, not measured truth.

### P14 / Engineering drawings and BOMs

**Proposed · CAD and engineering engines.** Generate revision-linked views, dimensions, datums, tolerances, notes, quantities and configurations with source-dated purchased-part data.

Scope: Validate drawings/BOM completeness and their input revision.

### P15 / Analytical and numerical simulation

**Proposed · CAD and engineering engines.** Connect equations, meshing and solver workers for supported structural/FEA, thermal, fluid/CFD or other declared analysis classes.

Scope: Each class needs validated loads, restraints, material models, convergence checks and benchmarks; coverage is not selected.

### P16 / Manufacturing and CAM preparation

**Proposed · CAD and engineering engines.** Plan stock, tools/holders, fixtures, setups, operation sequences and postprocessed toolpaths; check process-specific limits and tool reach.

Scope: Qualify each process/machine route separately. Toolpath generation does not authorize machine execution.

### P17 / Evidence-linked verification

**Proposed · CAD and engineering engines.** Connect requirements to data/unit checks, CAD integrity, assembly checks, analytical/numerical results, manufacturing review and physical tests.

Scope: Show methods, scope and limitations instead of one generic confidence score.

### P18 / Change impact and stale-result detection

**Proposed · CAD and engineering engines.** Trace which edits invalidate downstream drawings, analyses, BOM entries, purchased interfaces and toolpaths.

Scope: Recompute affected evidence or demonstrate that it is unaffected.

### P19 / Physical test feedback

**Proposed · CAD and engineering engines.** Attach procedures, instruments, calibration and measured results to the as-built configuration; compare actual outcomes with predictions.

Scope: Digital model success remains separate from physical qualification.

### P20 / Reusable engineering libraries

**Proposed · CAD and engineering engines.** Store approved components, interfaces, material references and organizational practices with source/revision metadata.

Scope: Reusing a part does not automatically reuse the validity of an old load case.

### P21 / Persistent task execution

**Proposed · Agents and operations.** Checkpoint the action-observation loop with explicit task states, artifact references, bounded retries and task budgets.

Scope: Recover from process restart and disconnected UI without blind mutation replay.

### P22 / Independent background workers

**Proposed · Agents and operations.** Separate the UI from CAD, solver, rendering and inference workers so a viewer can disconnect while an authorized host keeps running.

Scope: A sleeping local host cannot compute; remote continuation needs an actual authorized worker.

### P23 / Coordinated multi-agent work

**Proposed · Agents and operations.** Assign scoped design, analysis, manufacturing and documentation roles; serialize dependent writes and branch independent alternatives.

Scope: Multiple agents are not automatically independent verification or unlimited parallel CAD.

### P24 / Revision guards and operation receipts

**Proposed · Agents and operations.** Check target identity, units, permissions, preconditions and expected revision outside the model; persist mutation outcomes.

Scope: Reconcile uncertain external changes after failures before retrying.

### P25 / Recovery, undo and manual takeover

**Proposed · Agents and operations.** Preserve partial progress, diagnose failures, separate cancel from undo and hand the editing lease back to the user.

Scope: Demonstrate recovery with interruption, stale-target and user-edit tests.

### P26 / Local, hybrid and hosted deployment

**Proposed · Agents and operations.** Offer consistent project/tool contracts across local-only, remote-assisted and organization-hosted configurations.

Scope: All selected models/workers must be available in local-only mode; no deployment mode is shipped independently yet.

### P27 / Resource and task budgets

**Proposed · Agents and operations.** Measure tokens, solver time, CPU/GPU time and storage where available, with task/day budgets, priorities and concurrency controls.

Scope: Validate end-to-end resource use; a timer or token total alone is not a money cap.

### P28 / Production delivery and support

**Proposed · Agents and operations.** Provide tested cross-platform installers/updates, migrations, backups, authentication, telemetry, rollback and incident/support procedures.

Scope: Public licensing, support commitments, final branding and commercial pricing remain undecided.

### P29 / Independent local or hosted inference

**Proposed · Engineering AI and learning.** Deploy a suitably licensed model on an owned inference route with replaceable provider adapters.

Scope: Benchmark candidate quality, latency, memory and total cost per accepted task.

### P30 / Multimodal engineering model

**Proposed · Engineering AI and learning.** Interpret language, diagrams and rendered geometry, query exact project facts, select typed operations and repair tool failures.

Scope: No proprietary engineering model has been trained; model size and architecture are not selected.

### P31 / Geometry-aware model representations

**Long-term option · Engineering AI and learning.** Explore encoders for feature graphs/geometric descriptors and hierarchical retrieval over large assemblies.

Scope: Show measured value over simpler structured tools and retrieval.

### P32 / Revision-matched visual grounding

**Proposed · Engineering AI and learning.** Combine reproducible perspectives/sections/exploded views/analysis overlays with entity ID maps and exact geometric queries.

Scope: Tie every image and measurement to the same revision.

### P33 / Project memory and reference retrieval

**Proposed · Engineering AI and learning.** Keep exact project state, conversation context, cited reference documents and learned weights distinct; retrieve relevant objects and sources.

Scope: Respect project access and flag stale documents or supplier information.

### P34 / Permissioned trajectory datasets

**Proposed · Engineering AI and learning.** Curate expert, consenting-user, licensed and generated tasks with starting state, actions, failures, corrections and checked outcomes.

Scope: Require source rights, evidence, deduplication and project/family-separated evaluation data.

### P35 / Evaluated model specialization

**Proposed · Engineering AI and learning.** Compare supervised or parameter-efficient adaptation, broader fine-tuning, preferences and constraint-aware reward learning where appropriate.

Scope: Training rewards must reflect valid geometry and satisfied constraints; promotion depends on unseen-task results.

### P36 / Versioned model releases

**Proposed · Engineering AI and learning.** Maintain candidate checkpoints, evaluation reports, gradual deployment, regression monitoring and rollback.

Scope: Updating project memory is not immediate retraining of general model skill.

### P37 / Specialized model roles

**Long-term option · Engineering AI and learning.** Optionally route planning, perception and repair through a family of models while presenting one engineering assistant.

Scope: Use extra specialization only if evaluation justifies its complexity.

### P38 / Foundation model from scratch

**Long-term option · Engineering AI and learning.** Consider original large-scale model training as a later research direction.

Scope: Requires sufficient data, compute, capital and demonstrated benefit; not required for the first independent release.

### P39 / Organization data controls

**Proposed · Governance and evaluation.** Add explicit training consent, project exclusions, contributor rights, export/deletion controls, secret filtering and private component libraries.

Scope: Access to a design is not permission to train; complete governance is not supplied by the current exporter.

### P40 / Enforced action and data boundaries

**Proposed · Governance and evaluation.** Apply project read/write, export, code, remote upload, compute, purchasing and hardware permissions in software, with protected credentials.

Scope: Imported instructions cannot grant permissions; unrestricted code requires an actual containment strategy.

### P41 / Independent held-out benchmarks

**Proposed · Governance and evaluation.** Test requirements, geometry, editability, clarification, recovery, wrong-target changes, latency, usage and reviewer correction time on unseen design families.

Scope: Evaluator-controlled inputs/oracles must remain outside the agent workspace; no final held-out suite exists yet.

### P42 / Real-user workflow validation

**Proposed · Governance and evaluation.** Measure useful repeated outcomes against a complete manual baseline, including setup, corrections and review.

Scope: A mounting-plate change order is a candidate benchmark, not a selected market or validated customer result.

### P43 / Progressively broader supported scope

**Proposed · Governance and evaluation.** Expand assemblies, drawing systems, simulation, manufacturing processes and large-model performance only with new evidence.

Scope: The long-term breadth associated with mature CAD suites is an ambition, not current parity or a delivery promise.

## Current MCP inventory

| Tool | Purpose |
|---|---|
| fusion_documents | List open documents and bindings |
| fusion_new_document | Create a new unsaved design |
| fusion_bind_project | Bind one document to a project |
| fusion_inspect | Read structure, parameters and geometry |
| fusion_set_parameter | Change an existing unit-bearing parameter |
| fusion_box | Create a rectangular extrusion |
| fusion_cylinder | Create a circular extrusion |
| fusion_view | Capture the actual project viewport |
| fusion_export | Write unique F3D / STEP / STL exports |
| fusion_python | Run opt-in trusted Fusion Python |
| fusion_text_command | Run opt-in native text commands |
| fusion_status | Read bridge status |
| fusion_job | Read asynchronous job state / result |
| fusion_cancel | Cancel queued work |
| fusion_control | Pause / resume / stop a project |
| fusion_messages | Read the project/build inbox |
| fusion_message | Post a visible update or result |

Managed runs expose a restricted project-pinned subset. Advanced Python and text commands require explicit local full access.

AI-assisted workflows supported the creation of this project.

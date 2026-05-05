/* Unit 7 — ETABS Workflow (Chapters 28–37)
   3 sets × 3 questions per chapter = 9 questions per chapter.
   Direct 1:1 mapping from Part 5 (Chapters 34–43 → 28–37).
*/

E('chapter-28-interface-and-setup', 'Chapter 28 — Interface and Setup', 'Unit 7', [
  { id: 'A', title: 'Set A', questions: [
    { q: 'ETABS is software for:', o: ['CAD drafting', 'Structural analysis & design of buildings', 'Spreadsheets', 'Mesh generation only'], a: 1,
      e: 'Building structural analysis.' },
    { q: 'New ETABS model first dialog typically requires:', o: ['Material', 'Grid system / units', 'Loads', 'Mesh'], a: 1,
      e: 'Grid + units up front.' },
    { q: 'Common units in ETABS for SI buildings:', o: ['lb-ft', 'kN, m, °C', 'psi only', 'Stones'], a: 1,
      e: 'kN-m typical.' },
  ]},
  { id: 'B', title: 'Set B', questions: [
    { q: 'Story data dialog defines:', o: ['Stories, heights, similarities', 'Reinforcement only', 'Wind only', 'Hinges'], a: 0,
      e: 'Story setup.' },
    { q: 'Default code for design must match:', o: ['Owner preference', 'Local jurisdiction / project spec', 'Random', 'Latest globally'], a: 1,
      e: 'Project spec governs.' },
    { q: 'A typical 3-story commercial building height in ETABS is specified as:', o: ['Three rows in story data', 'One story', 'Mesh', 'Material'], a: 0,
      e: 'Each story = row.' },
  ]},
  { id: 'C', title: 'Set C', questions: [
    { q: 'Best practice when starting a new model:', o: ['Use defaults blindly', 'Verify units, code, grids before drawing', 'Skip materials', 'Random sections'], a: 1,
      e: 'Setup first → fewer errors.' },
    { q: 'Save versioned files because:', o: ['Disk is cheap', 'Recovery if a model breaks; track design iterations', 'Aesthetic', 'Required by code'], a: 1,
      e: 'Engineering model management.' },
    { q: 'Always confirm the:', o: ['Colour scheme', 'Reference grid + units before geometry input', 'Toolbar', 'Splash screen'], a: 1,
      e: 'Avoid wholesale rework.' },
  ]},
]);

E('chapter-29-defining-materials', 'Chapter 29 — Defining Materials', 'Unit 7', [
  { id: 'A', title: 'Set A', questions: [
    { q: "Concrete's key property:", o: ["f'c (compressive strength)", 'Yield', 'Fracture toughness', 'Hardness'], a: 0,
      e: 'Compressive strength governs.' },
    { q: "Steel's key property:", o: ["f_y (yield strength)", "f'c", 'Density only', 'Colour'], a: 0,
      e: 'Yield strength.' },
    { q: 'E for typical normal-weight concrete (GPa):', o: ['~25 GPa', '~200 GPa', '~10 GPa', '~0.2 GPa'], a: 0,
      e: 'Approximate concrete E.' },
  ]},
  { id: 'B', title: 'Set B', questions: [
    { q: 'E for typical structural steel (GPa):', n: 200, t: 5, e: '~200 GPa.' },
    { q: 'Concrete unit weight ≈ (kN/m³):', n: 24, t: 1, e: '~24 kN/m³.' },
    { q: 'Steel unit weight ≈ (kN/m³):', n: 78, t: 2, e: '~78.5.' },
  ]},
  { id: 'C', title: 'Set C', questions: [
    { q: 'Common mistake:', o: ['Using imperial defaults but SI inputs', 'Using too many materials', 'Naming materials', 'Setting density'], a: 0,
      e: 'Unit mix-ups break results.' },
    { q: 'Cracked section modifiers reduce:', o: ['Mass', 'Stiffness (typical for concrete)', 'Strength', 'Geometry'], a: 1,
      e: 'Code-recommended for serviceability.' },
    { q: 'Always cross-check material:', o: ['Aesthetic', "f'c, f_y, E, density before analysis", 'Random', 'Names only'], a: 1,
      e: 'Pre-analysis QA.' },
  ]},
]);

E('chapter-30-defining-section-properties', 'Chapter 30 — Defining Section Properties', 'Unit 7', [
  { id: 'A', title: 'Set A', questions: [
    { q: 'Common beam section type:', o: ['Rectangular concrete or steel I-section', 'Sphere', 'Cylinder for beams', 'Mesh'], a: 0,
      e: 'Rect or I.' },
    { q: 'A column section in ETABS includes:', o: ['Geometry only', 'Material + geometry', 'Loads', 'Mesh'], a: 1,
      e: 'Combined definition.' },
    { q: 'A 300×600 mm beam refers to:', o: ['Width × depth', 'Length × height', 'Length × width', 'Random'], a: 0,
      e: 'Cross-section dims.' },
  ]},
  { id: 'B', title: 'Set B', questions: [
    { q: 'I of 300×600 mm rectangle (mm⁴):', n: 5400000000, t: 100000000,
      e: '300·600³/12 = 5.4×10⁹.' },
    { q: 'Section modulus S of same beam (mm³):', n: 18000000, t: 100000,
      e: 'S = bh²/6 = 300·360000/6 = 18×10⁶.' },
    { q: 'Choosing too small a section in ETABS leads to:', o: ['Pass result', 'Failed design check', 'Ignored result', 'Locking'], a: 1,
      e: 'Demand > capacity.' },
  ]},
  { id: 'C', title: 'Set C', questions: [
    { q: 'Section property modifiers (e.g., 0.35 Ig for cracked beam) apply to:', o: ['Strength', 'Stiffness in analysis', 'Mass', 'Geometry'], a: 1,
      e: 'Cracked stiffness reduction.' },
    { q: 'Always verify section by:', o: ['Material + dimensions + orientation', 'Colour only', 'File name', 'Random'], a: 0,
      e: 'Pre-analysis QA.' },
    { q: 'Local axes 2-3 of a beam typically refer to:', o: ['Major and minor bending axes', 'Random', 'Wind directions', 'Stories'], a: 0,
      e: 'Strong/weak axes.' },
  ]},
]);

E('chapter-31-building-the-structural-model', 'Chapter 31 — Building the Structural Model', 'Unit 7', [
  { id: 'A', title: 'Set A', questions: [
    { q: 'Typical workflow:', o: ['Loads → geometry → material', 'Material → section → geometry → assignments', 'Random', 'Run → fix'], a: 1,
      e: 'Build foundation up.' },
    { q: 'Frame elements include:', o: ['Beams and columns', 'Walls only', 'Slabs only', 'Mesh only'], a: 0,
      e: 'Line elements.' },
    { q: 'Slabs are typically modelled as:', o: ['Frame', 'Shell elements', 'Mass only', 'Springs'], a: 1,
      e: '2D shell mesh.' },
  ]},
  { id: 'B', title: 'Set B', questions: [
    { q: 'Rigid diaphragm assignment links:', o: ['All slab nodes laterally', 'Soil and slab', 'Beam to wall', 'Random'], a: 0,
      e: 'Constrains lateral DOFs.' },
    { q: 'Replicate / similar story copies:', o: ['Stress', 'Geometry across stories', 'Loads', 'Mesh'], a: 1,
      e: 'Speeds modelling.' },
    { q: 'Centreline modelling assumes:', o: ['Element along its centroidal axis', 'Outer edge', 'Random', 'Skew'], a: 0,
      e: 'Standard idealisation.' },
  ]},
  { id: 'C', title: 'Set C', questions: [
    { q: 'A common mistake in model building is:', o: [
        'Missing a beam or column assignment', 'Saving the file too often', 'Using too many materials', 'Naming elements'], a: 0,
      e: 'Unassigned sections give wrong results.' },
    { q: 'Story similarity (typical floors) should be used when:', o: ['Every floor is unique', 'Floors have identical framing', 'Only for ETABS demo', 'Random'], a: 1,
      e: 'Reduces input effort without loss of accuracy.' },
    { q: 'After drawing all elements, always:', o: ['Immediately run analysis', 'Check assignments and orientation', 'Change units', 'Rename files'], a: 1,
      e: 'Verify before analysis.' },
  ]},
]);

E('chapter-32-applying-loads', 'Chapter 32 — Applying Loads', 'Unit 7', [
  { id: 'A', title: 'Set A', questions: [
    { q: 'Dead load patterns are:', o: ['Variable', 'Permanent', 'Temporary', 'Random'], a: 1,
      e: 'Self-weight + finishes.' },
    { q: 'Live loads are:', o: ['Permanent', 'Variable', 'Wind only', 'Seismic'], a: 1,
      e: 'Code-tabulated occupancy.' },
    { q: 'A point load on a column is applied at:', o: ['Mid-height', 'Top node (or specified point)', 'Foundation', 'Random'], a: 1,
      e: 'Where the load is transferred.' },
  ]},
  { id: 'B', title: 'Set B', questions: [
    { q: 'Code combo 1.2D + 1.6L is for:', o: ['Service', 'Strength (LRFD)', 'Wind only', 'Free-vib'], a: 1,
      e: 'Strength limit state.' },
    { q: 'Service combo D + L is for:', o: ['Service / deflection', 'Strength', 'Wind only', 'None'], a: 0,
      e: 'Deflection / serviceability.' },
    { q: 'Pattern live loads on multi-bay beams to find:', o: ['Critical moments / shears', 'Mass', 'Cost', 'Colour'], a: 0,
      e: 'Worst-case check.' },
  ]},
  { id: 'C', title: 'Set C', questions: [
    { q: 'Wind loads in ETABS can be applied via:', o: ['Auto code-based wind', 'Manual point loads', 'User-defined pressure', 'Any of the above'], a: 3,
      e: 'Multiple methods.' },
    { q: 'Common mistake:', o: ['Forgetting self-weight multiplier', 'Adding too many materials', 'Saving versions', 'Naming loads'], a: 0,
      e: 'Self-weight multiplier should be 1 in DL pattern.' },
    { q: 'For LRFD, partial safety factors are applied to:', o: ['Capacity', 'Loads (and capacity reduced via φ)', 'Geometry', 'Mesh'], a: 1,
      e: 'Demand factors + φ.' },
  ]},
]);

E('chapter-33-running-the-analysis', 'Chapter 33 — Running the Analysis', 'Unit 7', [
  { id: 'A', title: 'Set A', questions: [
    { q: 'Static linear analysis assumes:', o: ['Time-varying loads', 'Small deformations and linear material', 'Plasticity', 'Buckling automatically'], a: 1,
      e: 'Linear elastic.' },
    { q: 'Modal analysis computes:', o: ['Stresses', 'Natural frequencies and modes', 'Final design', 'Cost'], a: 1,
      e: 'Eigenvalue problem.' },
    { q: 'Response spectrum analysis is a type of:', o: ['Static', 'Dynamic seismic', 'Wind', 'Thermal'], a: 1,
      e: 'Linear dynamic.' },
  ]},
  { id: 'B', title: 'Set B', questions: [
    { q: 'Convergence warnings indicate:', o: ['Perfect model', 'Iteration did not converge', 'Colour issue', 'Saved successfully'], a: 1,
      e: 'Numerical issue to investigate.' },
    { q: 'Modal mass participation should typically reach:', o: ['10%', '50%', '≥ 90% in each direction', '100% always'], a: 2,
      e: 'Code: ~90% for response spectrum.' },
    { q: 'P-Delta analysis captures:', o: ['Material nonlinearity', 'Geometric nonlinearity (vertical loads + lateral disp)', 'Wind only', 'Mesh'], a: 1,
      e: 'Second-order effects.' },
  ]},
  { id: 'C', title: 'Set C', questions: [
    { q: 'A first-mode period being unrealistically long suggests:', o: ['Stiff model', 'Too-flexible model (check assignments)', 'Perfect', 'None'], a: 1,
      e: 'Possible missing supports/diaphragm.' },
    { q: 'Common analysis mistake:', o: ['Running without verifying load combos', 'Saving file', 'Naming load patterns', 'Setting units'], a: 0,
      e: 'Always verify combos.' },
    { q: 'When analysis fails:', o: ['Discard model', 'Diagnose: unstable supports, mechanism, units', 'Restart PC', 'Ignore'], a: 1,
      e: 'Investigate root cause.' },
  ]},
]);

E('chapter-34-reading-and-interpreting-results', 'Chapter 34 — Reading and Interpreting Results', 'Unit 7', [
  { id: 'A', title: 'Set A', questions: [
    { q: 'Bending moment diagrams indicate:', o: ['Stress only', 'Internal moments along members', 'Geometry', 'Cost'], a: 1,
      e: 'M(x) along beams.' },
    { q: 'Reactions should equal applied:', o: ['Loads (sum)', 'Stresses', 'Mesh size', 'Period'], a: 0,
      e: 'Equilibrium check.' },
    { q: 'Story drift is measured per:', o: ['Floor (relative disp/h)', 'Building total', 'Foundation', 'Wind only'], a: 0,
      e: 'Drift = inter-story.' },
  ]},
  { id: 'B', title: 'Set B', questions: [
    { q: 'A symmetric building under symmetric loading should have:', o: ['Symmetric results', 'Random', 'Always zero', 'Different on each side'], a: 0,
      e: 'Check by inspection.' },
    { q: 'Hand calculation and ETABS result differing by 50%:', o: ['Accept ETABS', 'Investigate model', 'Random', 'Halve loads'], a: 1,
      e: 'Significant discrepancy = error.' },
    { q: 'Maximum moment in a UDL beam is at midspan; if ETABS shows max at supports for the same beam:', o: ['Correct', 'Possible end fixity / continuity', 'Random', 'Wrong material'], a: 1,
      e: 'Boundary conditions matter.' },
  ]},
  { id: 'C', title: 'Set C', questions: [
    { q: 'Always sanity-check by:', o: ['Hand calc + units + symmetry', 'Colour', 'File size', 'Random'], a: 0,
      e: 'QA habit.' },
    { q: 'Reaction sum mismatch with applied:', o: ['OK', 'Indicates modelling error', 'Saves time', 'Halves loads'], a: 1,
      e: 'Equilibrium violated.' },
    { q: 'Code drift limit typically (h/___):',
      o: ['100', '200', '400 (commonly h/400 service)', '1000'], a: 2,
      e: 'Project-specific; common example h/400.' },
  ]},
]);

E('chapter-35-design-in-etabs', 'Chapter 35 — Design in ETABS', 'Unit 7', [
  { id: 'A', title: 'Set A', questions: [
    { q: 'Design checks compare:', o: ['Demand vs capacity', 'Cost vs aesthetics', 'Mass vs density', 'Random'], a: 0,
      e: 'D/C ≤ 1 typical.' },
    { q: 'Concrete column design output includes:', o: ['Reinforcement ratio', 'Colour only', 'Period', 'Mass'], a: 0,
      e: 'ρ% required.' },
    { q: 'Steel beam design returns:', o: ['Demand-to-capacity ratio', 'Colour', 'File name', 'Mesh'], a: 0,
      e: 'D/C.' },
  ]},
  { id: 'B', title: 'Set B', questions: [
    { q: 'A D/C of 0.85 means:', o: ['Failure', '85% utilised (acceptable)', 'Overdesigned', 'Indeterminate'], a: 1,
      e: 'Within capacity.' },
    { q: 'A D/C of 1.10 means:', o: ['Failure', 'Pass', 'Marginal', 'OK with safety'], a: 0,
      e: 'Exceeds capacity.' },
    { q: 'Code selected for design must match:', o: ["Designer's preference", 'Project spec / jurisdiction', 'Random', 'Material only'], a: 1,
      e: 'Code compliance.' },
  ]},
  { id: 'C', title: 'Set C', questions: [
    { q: 'Common design mistake:', o: ['Wrong code or units', 'Naming', 'Saving file', 'Colour'], a: 0,
      e: 'Code/units mismatch yields wrong checks.' },
    { q: 'Always verify φ factors / partial factors:', o: ['Match jurisdiction', 'Random', 'None', 'Colour'], a: 0,
      e: 'φ depends on code.' },
    { q: 'Designed reinforcement should be:', o: ['Theoretical only', 'Practical (constructible bar sizes/spacings)', 'Random', 'Maximum'], a: 1,
      e: 'Detailing matters.' },
  ]},
]);

E('chapter-36-complete-worked-example-5-story-rc-building', 'Chapter 36 — Complete Worked Example: 5-Story RC Building', 'Unit 7', [
  { id: 'A', title: 'Set A', questions: [
    { q: 'A 5-story RC building typically uses:', o: ['Steel only', 'Concrete frames + slabs (often shear walls)', 'Timber', 'Random'], a: 1,
      e: 'RC moment frames + walls common.' },
    { q: 'Lateral system options include:', o: ['Moment frames', 'Shear walls', 'Dual systems', 'All of these'], a: 3,
      e: 'Multiple options.' },
    { q: 'Seismic design typically governs in:', o: ['Low-seismic zones', 'Moderate-to-high-seismic zones', 'Wind-only sites', 'Static analysis'], a: 1,
      e: 'Higher demands.' },
  ]},
  { id: 'B', title: 'Set B', questions: [
    { q: 'A 5-story building of typical 3 m floors has total height (m):', n: 15, t: 0, e: '5×3.' },
    { q: 'Tributary area for an interior column on a 6×6 grid (m²):', n: 36, t: 0, e: '6×6.' },
    { q: 'Approx total dead at 5 kPa over 36 m² × 5 stories (kN):', n: 900, t: 5,
      e: '5·36·5 = 900.' },
  ]},
  { id: 'C', title: 'Set C', questions: [
    { q: 'First-mode period rule of thumb T ≈ 0.1·N (stories) for 5 stories:', n: 0.5, t: 0.05,
      e: '~0.5 s.' },
    { q: 'Stiffness irregularity is checked because:', o: ['Aesthetic', 'Soft-story risk in seismic', 'Mass', 'Colour'], a: 1,
      e: 'Drift concentration.' },
    { q: 'After analysis:', o: ['Stop', 'Verify equilibrium, drift, design ratios', 'Skip checks', 'Halve loads'], a: 1,
      e: 'Always cross-check.' },
  ]},
]);

E('chapter-37-common-etabs-mistakes-and-how-to-fix-them', 'Chapter 37 — Common ETABS Mistakes and How to Fix Them', 'Unit 7', [
  { id: 'A', title: 'Set A', questions: [
    { q: 'Mixing imperial and SI units typically yields:', o: ['No effect', 'Catastrophic numeric errors', 'Colour shifts', 'Slow runs'], a: 1,
      e: 'Always confirm units.' },
    { q: 'Forgetting to assign diaphragms can cause:', o: ['Realistic results', 'Unrealistic story behaviour', 'Speeds run', 'None'], a: 1,
      e: 'Slabs not enforcing rigid behaviour.' },
    { q: 'Missing supports cause:', o: ['Stiff model', 'Mechanism / unstable model', 'Saves run', 'Colour'], a: 1,
      e: 'Will not solve / huge displacements.' },
  ]},
  { id: 'B', title: 'Set B', questions: [
    { q: 'Self-weight not enabled in DL pattern means:', o: ['Includes weight', 'Excludes weight (under-loaded model)', 'Doubles weight', 'Colour'], a: 1,
      e: 'Multiplier should be 1.' },
    { q: 'Cracked section modifiers omitted in concrete:', o: ['Realistic', 'Overestimates stiffness, underestimates drifts', 'Underestimates everything', 'None'], a: 1,
      e: 'Common code requirement.' },
    { q: 'P-Delta omitted on a tall flexible building:', o: ['Conservative', 'Non-conservative; misses 2nd-order', 'Random', 'Colour'], a: 1,
      e: 'Required when significant.' },
  ]},
  { id: 'C', title: 'Set C', questions: [
    { q: 'Best fix workflow:', o: ['Random changes', 'Diagnose (units, supports, diaphragms, modifiers, combos), then re-run', 'Ignore', 'Halve loads'], a: 1,
      e: 'Systematic diagnosis.' },
    { q: 'Always confirm:', o: ['Equilibrium of reactions vs loads', 'Colour', 'File name', 'None'], a: 0,
      e: 'Sanity check.' },
    { q: 'Story drift in a 3 m story with limit h/400 (mm):', n: 7.5, t: 0.1,
      e: '3000/400 = 7.5.' },
  ]},
]);

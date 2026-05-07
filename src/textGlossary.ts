export type TextGlossaryEntry = {
  term: string;
  definition: string;
};

/**
 * Engineering terms and units that should be auto-tooltipped in prose text.
 * Multi-word terms must appear before any of their component words so that
 * "moment of inertia" is matched before "moment".
 * Units are listed before single-letter-ish abbreviations to prevent partial matches.
 */
export const textGlossary: TextGlossaryEntry[] = [
  // Units — listed longest-first within the group
  { term: 'kN/m', definition: 'Kilonewtons per metre — line load intensity along a beam or wall.' },
  { term: 'kPa', definition: 'Kilopascal — area load or pressure: 1 kPa = 1 kN per square metre.' },
  { term: 'MPa', definition: 'Megapascal — stress unit: 1 MPa = 1 N/mm² = 1,000 kPa.' },
  { term: 'GPa', definition: 'Gigapascal — stiffness unit: 1 GPa = 1,000 MPa. Steel elastic modulus ≈ 200 GPa.' },
  { term: 'kN', definition: 'Kilonewton — force unit: 1 kN = 1,000 N ≈ the weight of 102 kg.' },
  // Multi-word structural terms
  { term: 'moment of inertia', definition: 'Second moment of area I. Measures how spread the cross-section area is from the bending axis. Larger I = stiffer beam with less deflection.' },
  { term: 'tributary area', definition: 'Floor area that channels its gravity load to one support. Larger tributary area → more load on that element.' },
  { term: 'tributary width', definition: 'Width of floor assigned to one beam. Multiply by the area load (kPa) to get the line load (kN/m).' },
  { term: "Young's modulus", definition: 'Elastic modulus E — material stiffness. Ratio of stress to strain. Steel: 200,000 MPa; Concrete: ~25,000–32,000 MPa.' },
  { term: 'elastic modulus', definition: "Young's modulus E — ratio of stress to strain. How stiff a material is in the elastic range. Steel E = 200,000 MPa." },
  { term: 'neutral axis', definition: 'Line through a cross-section where bending stress is zero. Above: compression; below: tension (for a sagging beam).' },
  { term: 'section modulus', definition: 'S = I ÷ c. Relates bending moment to maximum bending stress via σ = M ÷ S.' },
  { term: 'shear force', definition: 'Internal force perpendicular to the member axis, tending to slide one cross-section past the next.' },
  { term: 'bending moment', definition: 'Internal rotational effect at a cross-section. Compresses one face and stretches the opposite face.' },
  { term: 'axial force', definition: 'Internal force along the member axis. Positive = tension (pulling apart); negative = compression (pushing together).' },
  { term: 'axial load', definition: 'Applied force acting along the member axis. Columns carry axial compression; tie rods carry axial tension.' },
  { term: 'simply supported', definition: 'Beam on a pin and a roller: free to rotate at both ends, carries vertical force but not end moment.' },
  { term: 'simply-supported', definition: 'Beam on a pin and a roller: free to rotate at both ends, carries vertical force but not end moment.' },
  { term: 'D/C ratio', definition: 'Demand-to-Capacity ratio — load effect ÷ member resistance. Must be ≤ 1.0 for the member to be adequate.' },
  { term: 'load factor', definition: 'Multiplier in strength design (e.g. 1.2 for dead load, 1.6 for live load) to account for load uncertainty.' },
  { term: 'dead load', definition: 'Permanent gravity load: structure self-weight, floor finishes, ceilings. Abbreviated DL. Does not vary with occupancy.' },
  { term: 'live load', definition: 'Imposed gravity load: people, furniture, stored materials. Abbreviated LL. Varies with use and occupancy.' },
  { term: 'wind load', definition: 'Horizontal or uplift force from wind pressure on the building envelope and structure.' },
  { term: 'seismic load', definition: 'Inertial force from ground acceleration during an earthquake. Scales with building mass and ground motion intensity.' },
  // Single-word terms
  { term: 'tributary', definition: 'Describing the portion of load or area that channels to one structural element.' },
  { term: 'equilibrium', definition: 'State where all forces and moments sum to zero. Every stationary structure must satisfy equilibrium.' },
  { term: 'deflection', definition: 'Physical displacement under load, measured at a point. Typically limited by code (e.g. span/360) to prevent cracking and discomfort.' },
  { term: 'serviceability', definition: 'Performance in daily use: limits on deflection, vibration, and cracking, even when the member is not overloaded in strength.' },
  { term: 'centroid', definition: 'Geometric centre of a cross-section. The neutral axis passes through the centroid for symmetric sections.' },
  { term: 'stiffness', definition: 'Resistance to deformation under load. Higher stiffness = less deflection for the same applied force.' },
  { term: 'reaction', definition: 'Force or moment supplied by a support to keep the structure in equilibrium against applied loads.' },
  { term: 'cantilever', definition: 'Beam or slab fixed at one end, free at the other. Maximum moment and deflection occur at the fixed end.' },
  { term: 'span', definition: 'Clear or centre-to-centre distance between supports. Bending moment and deflection increase strongly with span.' },
];

/**
 * Wrap recognised glossary terms in plain-text segments of an HTML string with
 * `<abbr data-term title="…">` elements.
 *
 * Rules:
 * - Only text between HTML tags is processed (tag attribute values are untouched).
 * - Content inside `<code>`, `<pre>`, and `<abbr>` elements is skipped.
 * - Safe to call on HTML that still contains `@@MATH_N@@` tokens from renderMarkdown.
 */
export function applyTextGlossary(html: string): string {
  if (!textGlossary.length) return html;

  // Sort longest-first so multi-word terms match before their shorter components.
  const sorted = [...textGlossary].sort((a, b) => b.term.length - a.term.length);
  const escaped = sorted.map(e => e.term.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'));
  const pattern = new RegExp(`\\b(${escaped.join('|')})\\b`, 'gi');
  const defMap = new Map(sorted.map(e => [e.term.toLowerCase(), e.definition]));

  const parts: string[] = [];
  let skipDepth = 0;
  let i = 0;

  while (i < html.length) {
    if (html[i] === '<') {
      const end = html.indexOf('>', i);
      if (end < 0) { parts.push(html.slice(i)); break; }
      const tag = html.slice(i, end + 1);
      parts.push(tag);

      const m = tag.match(/^<\s*(\/?)([a-zA-Z][a-zA-Z0-9]*)/);
      if (m) {
        const isClose = m[1] === '/';
        const name = m[2].toLowerCase();
        if (['code', 'pre', 'abbr'].includes(name)) {
          skipDepth += isClose ? -1 : 1;
          if (skipDepth < 0) skipDepth = 0;
        }
      }
      i = end + 1;
    } else {
      const next = html.indexOf('<', i);
      const text = next < 0 ? html.slice(i) : html.slice(i, next);

      if (skipDepth > 0 || !text.trim()) {
        parts.push(text);
      } else {
        parts.push(text.replace(pattern, match => {
          const def = defMap.get(match.toLowerCase());
          return def
            ? `<abbr data-term title="${def.replace(/"/g, '&quot;')}">${match}</abbr>`
            : match;
        }));
      }
      i = next < 0 ? html.length : next;
    }
  }

  return parts.join('');
}

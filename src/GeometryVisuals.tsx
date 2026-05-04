type Props = {
  slug: string;
};

export function GeometryVisuals({ slug }: Props) {
  if (!slug.includes('chapter-18') && !slug.includes('chapter-20') && !slug.includes('chapter-22') && !slug.includes('chapter-24')) {
    return null;
  }

  return (
    <section className="visual-lab" aria-label="Geometry visual explanation">
      <div className="visual-lab__copy">
        <span className="eyebrow">Visual graph lab</span>
        <h3>See the geometry before using the formula</h3>
        <p>
          Structural geometry is not decoration. It explains where area, direction, centroid, and stiffness come from before those ideas become ETABS inputs.
        </p>
      </div>
      {slug.includes('chapter-18') && <AreaGraph />}
      {slug.includes('chapter-20') && <InertiaGraph />}
      {slug.includes('chapter-22') && <TriangleGraph />}
      {slug.includes('chapter-24') && <CoordinateGraph />}
    </section>
  );
}

function AreaGraph() {
  return (
    <svg className="visual-svg" viewBox="0 0 720 330" role="img" aria-label="I-section area matching the chapter example">
      <rect x="70" y="48" width="250" height="48" className="shape-fill" />
      <rect x="183" y="96" width="36" height="160" className="shape-fill strong" />
      <rect x="70" y="256" width="250" height="48" className="shape-fill" />
      <line x1="70" y1="28" x2="320" y2="28" className="measure-line" />
      <line x1="338" y1="48" x2="338" y2="304" className="measure-line" />
      <text x="144" y="22" className="svg-label">b_f = 200 mm</text>
      <text x="352" y="178" className="svg-label">total h = 400 mm</text>
      <text x="92" y="80" className="svg-text">flange: 200 x 20</text>
      <text x="224" y="180" className="svg-text">web: 360 x 10</text>
      <text x="410" y="82" className="svg-title">Chapter 18 example</text>
      <text x="410" y="118" className="svg-text">2 flange areas: 2(200 x 20)</text>
      <text x="410" y="150" className="svg-text">1 web area: 360 x 10</text>
      <text x="410" y="190" className="svg-text strong">A = 11,600 mm²</text>
      <text x="410" y="226" className="svg-text">The picture matches the built-up I-section.</text>
    </svg>
  );
}

function InertiaGraph() {
  return (
    <svg className="visual-svg" viewBox="0 0 720 330" role="img" aria-label="T-section inertia matching the chapter example">
      <line x1="62" y1="145" x2="356" y2="145" className="neutral-axis" />
      <text x="68" y="132" className="svg-label">centroid y = 307.14 mm</text>
      <rect x="154" y="44" width="82" height="190" className="shape-fill strong" />
      <rect x="74" y="44" width="242" height="48" className="shape-fill" />
      <line x1="356" y1="68" x2="356" y2="145" className="measure-line" />
      <line x1="356" y1="145" x2="356" y2="234" className="measure-line" />
      <text x="370" y="105" className="svg-text">flange d = 142.86</text>
      <text x="370" y="198" className="svg-text">web d = 107.14</text>
      <text x="454" y="70" className="svg-title">Chapter 20 example</text>
      <text x="454" y="106" className="svg-text">Each part keeps its own I_c.</text>
      <text x="454" y="138" className="svg-text">Then A d² shifts it to the centroid.</text>
      <text x="454" y="178" className="svg-text strong">I_total = 1.63 x 10^9 mm^4</text>
      <text x="454" y="214" className="svg-text">The graph shows the same T-section.</text>
    </svg>
  );
}

function TriangleGraph() {
  return (
    <svg className="visual-svg" viewBox="0 0 720 310" role="img" aria-label="Five meter brace at forty degrees matching the chapter example">
      <line x1="88" y1="230" x2="430" y2="230" className="axis" />
      <line x1="430" y1="230" x2="430" y2="86" className="axis" />
      <line x1="88" y1="230" x2="430" y2="86" className="hyp-line" />
      <path d="M142 230 A54 54 0 0 1 130 198" className="angle-arc" />
      <text x="148" y="211" className="svg-label">40°</text>
      <text x="224" y="258" className="svg-text">run = 5 cos 40° = 3.83 m</text>
      <text x="444" y="156" className="svg-text">rise = 5 sin 40° = 3.21 m</text>
      <text x="224" y="128" className="svg-text strong">brace L = 5 m</text>
      <text x="500" y="92" className="svg-title">Chapter 22 example</text>
      <text x="500" y="128" className="svg-text">The triangle is the sloped brace.</text>
      <text x="500" y="160" className="svg-text">Cosine gives horizontal run.</text>
      <text x="500" y="192" className="svg-text">Sine gives vertical rise.</text>
    </svg>
  );
}

function CoordinateGraph() {
  return (
    <svg className="visual-svg" viewBox="0 0 720 300" role="img" aria-label="Coordinate graph matching the eight by six member example">
      <line x1="70" y1="235" x2="650" y2="235" className="axis" />
      <line x1="90" y1="255" x2="90" y2="35" className="axis" />
      {Array.from({ length: 10 }).map((_, i) => <line key={`gx${i}`} x1={90 + i * 55} y1="35" x2={90 + i * 55} y2="235" className="grid-line" />)}
      {Array.from({ length: 5 }).map((_, i) => <line key={`gy${i}`} x1="90" y1={235 - i * 45} x2="650" y2={235 - i * 45} className="grid-line" />)}
      <circle cx="145" cy="235" r="7" className="point" />
      <circle cx="585" cy="55" r="7" className="point" />
      <line x1="145" y1="235" x2="585" y2="235" className="measure-line" />
      <line x1="585" y1="235" x2="585" y2="55" className="measure-line" />
      <line x1="145" y1="235" x2="585" y2="55" className="hyp-line" />
      <text x="318" y="257" className="svg-label">Δx = 8 m</text>
      <text x="596" y="144" className="svg-label">Δy = 6 m</text>
      <text x="178" y="50" className="svg-title">Chapter 24 example</text>
      <text x="178" y="82" className="svg-text">Joint A (0, 0) to Joint B (8, 6)</text>
      <text x="178" y="114" className="svg-text strong">length = sqrt(8² + 6²) = 10 m</text>
    </svg>
  );
}

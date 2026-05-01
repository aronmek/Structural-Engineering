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
    <svg className="visual-svg" viewBox="0 0 720 300" role="img" aria-label="Rectangle area shown as square units">
      <rect x="40" y="40" width="300" height="180" rx="4" className="shape-fill" />
      {Array.from({ length: 7 }).map((_, i) => <line key={`v${i}`} x1={40 + i * 50} y1="40" x2={40 + i * 50} y2="220" className="grid-line" />)}
      {Array.from({ length: 5 }).map((_, i) => <line key={`h${i}`} x1="40" y1={40 + i * 45} x2="340" y2={40 + i * 45} className="grid-line" />)}
      <line x1="40" y1="245" x2="340" y2="245" className="axis" />
      <line x1="365" y1="40" x2="365" y2="220" className="axis" />
      <text x="180" y="272" className="svg-label">base b</text>
      <text x="382" y="136" className="svg-label">height h</text>
      <text x="430" y="94" className="svg-title">Area counts unit squares</text>
      <text x="430" y="128" className="svg-text">A = b x h</text>
      <text x="430" y="158" className="svg-text">m x m = m²</text>
      <text x="430" y="188" className="svg-text">That is why area is square units.</text>
    </svg>
  );
}

function InertiaGraph() {
  return (
    <svg className="visual-svg" viewBox="0 0 720 300" role="img" aria-label="Moment of inertia compares material near and far from neutral axis">
      <line x1="60" y1="150" x2="660" y2="150" className="neutral-axis" />
      <text x="70" y="136" className="svg-label">neutral axis</text>
      <rect x="140" y="120" width="70" height="60" className="shape-fill muted" />
      <rect x="300" y="70" width="70" height="160" className="shape-fill" />
      <rect x="500" y="35" width="70" height="230" className="shape-fill strong" />
      <text x="115" y="252" className="svg-text">same area near center</text>
      <text x="276" y="252" className="svg-text">deeper section</text>
      <text x="475" y="252" className="svg-text">area far away</text>
      <text x="90" y="52" className="svg-title">Why depth helps bending</text>
      <text x="90" y="82" className="svg-text">I weights area by distance² from the neutral axis.</text>
      <text x="90" y="108" className="svg-text">Moving material away raises stiffness quickly.</text>
    </svg>
  );
}

function TriangleGraph() {
  return (
    <svg className="visual-svg" viewBox="0 0 720 300" role="img" aria-label="Right triangle components for trigonometry">
      <line x1="105" y1="230" x2="515" y2="230" className="axis" />
      <line x1="105" y1="230" x2="105" y2="70" className="axis" />
      <line x1="105" y1="230" x2="515" y2="70" className="hyp-line" />
      <path d="M145 230 A40 40 0 0 1 142 214" className="angle-arc" />
      <text x="155" y="215" className="svg-label">θ</text>
      <text x="280" y="258" className="svg-text">adjacent</text>
      <text x="50" y="150" className="svg-text">opposite</text>
      <text x="305" y="135" className="svg-text">hypotenuse</text>
      <text x="540" y="98" className="svg-title">Force components use this picture</text>
      <text x="540" y="132" className="svg-text">cos θ = adjacent / hypotenuse</text>
      <text x="540" y="160" className="svg-text">sin θ = opposite / hypotenuse</text>
      <text x="540" y="188" className="svg-text">tan θ = opposite / adjacent</text>
    </svg>
  );
}

function CoordinateGraph() {
  return (
    <svg className="visual-svg" viewBox="0 0 720 300" role="img" aria-label="Coordinate graph showing delta x and delta y">
      <line x1="70" y1="235" x2="650" y2="235" className="axis" />
      <line x1="90" y1="255" x2="90" y2="35" className="axis" />
      {Array.from({ length: 10 }).map((_, i) => <line key={`gx${i}`} x1={90 + i * 55} y1="35" x2={90 + i * 55} y2="235" className="grid-line" />)}
      {Array.from({ length: 5 }).map((_, i) => <line key={`gy${i}`} x1="90" y1={235 - i * 45} x2="650" y2={235 - i * 45} className="grid-line" />)}
      <circle cx="170" cy="190" r="7" className="point" />
      <circle cx="500" cy="82" r="7" className="point" />
      <line x1="170" y1="190" x2="500" y2="190" className="measure-line" />
      <line x1="500" y1="190" x2="500" y2="82" className="measure-line" />
      <line x1="170" y1="190" x2="500" y2="82" className="hyp-line" />
      <text x="315" y="210" className="svg-label">Δx</text>
      <text x="512" y="140" className="svg-label">Δy</text>
      <text x="220" y="70" className="svg-title">Distance is built from coordinate changes</text>
      <text x="220" y="100" className="svg-text">Horizontal change plus vertical change form a right triangle.</text>
    </svg>
  );
}

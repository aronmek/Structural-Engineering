import { panelsForSlug, type WhyPanel } from './whyLibrary';

type Props = {
  slug: string;
  anchor: string;
};

export function WhyPanels({ slug, anchor }: Props) {
  const panels = panelsForSlug(slug, anchor);
  if (!panels.length) return null;

  return (
    <section className="why-stack" aria-label="Collapsed why explanations">
      {panels.map(panel => (
        <details className="why-panel" key={panel.title}>
          <summary>{panel.title}</summary>
          <WhyVisual kind={panel.visual} />
          <div className="why-grid">
            <div>
              <h4>Common mistake</h4>
              <p>{panel.mistake}</p>
            </div>
            <div>
              <h4>Why it does not add up</h4>
              <p>{panel.whyItFails}</p>
            </div>
            <div>
              <h4>Why the rule holds</h4>
              <p>{panel.whyItWorks}</p>
            </div>
          </div>
        </details>
      ))}
    </section>
  );
}

function WhyVisual({ kind }: { kind: WhyPanel['visual'] }) {
  if (!kind) return null;
  if (kind === 'decimal-grid') return <DecimalGrid />;
  if (kind === 'fraction-bars') return <FractionBars />;
  if (kind === 'number-line') return <NumberLine />;
  if (kind === 'balance') return <BalanceScale />;
  if (kind === 'unit-squares') return <UnitSquares />;
  if (kind === 'trig-triangle') return <TrigTriangle />;
  if (kind === 'inertia') return <InertiaSketch />;
  if (kind === 'equilibrium') return <EquilibriumSketch />;
  return null;
}

function DecimalGrid() {
  const cells = Array.from({ length: 100 });
  return (
    <div className="why-visual" aria-label="Hundred grid showing decimal addition and multiplication">
      <svg viewBox="0 0 560 270" role="img">
        <text x="20" y="28" className="wv-title">Decimals count tenths and hundredths</text>
        <g transform="translate(20 48)">
          {cells.map((_, i) => {
            const row = Math.floor(i / 10);
            const col = i % 10;
            const inTwoTenths = col < 2;
            const inThreeTenths = row < 3;
            const overlap = inTwoTenths && inThreeTenths;
            return <rect key={i} x={col * 14} y={row * 14} width="13" height="13" className={overlap ? 'wv-overlap' : inTwoTenths || inThreeTenths ? 'wv-shade' : 'wv-cell'} />;
          })}
        </g>
        <text x="190" y="74" className="wv-text">2 columns = 0.2</text>
        <text x="190" y="104" className="wv-text">3 rows = 0.3</text>
        <text x="190" y="142" className="wv-text strong">overlap = 6 hundredths</text>
        <text x="190" y="174" className="wv-text strong">0.2 x 0.3 = 6/100 = 0.06</text>
        <rect x="20" y="208" width="56" height="22" className="wv-shade" />
        <rect x="82" y="208" width="168" height="22" className="wv-overlap" />
        <text x="270" y="225" className="wv-text strong">0.2 + 0.6 = 8 tenths = 0.8</text>
      </svg>
    </div>
  );
}

function FractionBars() {
  return (
    <div className="why-visual" aria-label="Fraction bars showing common denominators and fraction multiplication">
      <svg viewBox="0 0 560 260" role="img">
        <text x="20" y="28" className="wv-title">Use same-sized pieces before counting</text>
        <rect x="24" y="55" width="180" height="34" className="wv-cell" />
        <rect x="24" y="55" width="90" height="34" className="wv-shade" />
        <line x1="114" y1="55" x2="114" y2="89" className="wv-line" />
        <text x="220" y="78" className="wv-text">1/2 is one of two equal pieces</text>
        <rect x="24" y="110" width="180" height="34" className="wv-cell" />
        <rect x="24" y="110" width="60" height="34" className="wv-shade" />
        <line x1="84" y1="110" x2="84" y2="144" className="wv-line" />
        <line x1="144" y1="110" x2="144" y2="144" className="wv-line" />
        <text x="220" y="133" className="wv-text">1/3 is one of three equal pieces</text>
        <g transform="translate(30 175)">
          {Array.from({ length: 6 }).map((_, i) => {
            const row = Math.floor(i / 2);
            const col = i % 2;
            return <rect key={i} x={col * 46} y={row * 22} width="45" height="21" className={i === 0 ? 'wv-overlap' : 'wv-cell'} />;
          })}
        </g>
        <text x="150" y="195" className="wv-text">1/2 cut one way</text>
        <text x="150" y="220" className="wv-text">1/3 cut the other way</text>
        <text x="330" y="208" className="wv-text strong">overlap = 1 out of 6</text>
      </svg>
    </div>
  );
}

function NumberLine() {
  return (
    <div className="why-visual" aria-label="Number line visual proof">
      <svg viewBox="0 0 520 150" role="img">
        <line x1="40" y1="82" x2="480" y2="82" className="wv-axis" />
        {Array.from({ length: 9 }).map((_, i) => <line key={i} x1={60 + i * 50} y1="72" x2={60 + i * 50} y2="92" className="wv-line" />)}
        {[-4, -3, -2, -1, 0, 1, 2, 3, 4].map((n, i) => <text key={n} x={54 + i * 50} y="118" className="wv-text">{n}</text>)}
        <path d="M260 55 C210 20 130 20 65 55" className="wv-arc" />
        <path d="M260 50 C310 18 395 18 460 50" className="wv-arc positive" />
        <text x="86" y="28" className="wv-text">negative move: left</text>
        <text x="310" y="28" className="wv-text strong">remove it: right</text>
      </svg>
    </div>
  );
}

function BalanceScale() {
  return (
    <div className="why-visual" aria-label="Balance scale visual for equations">
      <svg viewBox="0 0 520 170" role="img">
        <line x1="260" y1="35" x2="260" y2="130" className="wv-axis" />
        <line x1="120" y1="70" x2="400" y2="70" className="wv-axis" />
        <path d="M80 118 L160 118 L138 75 L102 75Z" className="wv-shade" />
        <path d="M360 118 L440 118 L418 75 L382 75Z" className="wv-shade" />
        <text x="88" y="145" className="wv-text">left side</text>
        <text x="360" y="145" className="wv-text">right side</text>
        <text x="170" y="28" className="wv-title">same change on both sides keeps balance</text>
      </svg>
    </div>
  );
}

function UnitSquares() {
  return (
    <div className="why-visual" aria-label="Area shown by unit squares">
      <svg viewBox="0 0 520 170" role="img">
        <text x="20" y="28" className="wv-title">Area counts squares, not line length</text>
        <g transform="translate(28 50)">
          {Array.from({ length: 12 }).map((_, i) => <rect key={i} x={(i % 4) * 32} y={Math.floor(i / 4) * 32} width="30" height="30" className="wv-shade" />)}
        </g>
        <text x="190" y="84" className="wv-text">3 rows x 4 columns</text>
        <text x="190" y="116" className="wv-text strong">12 square units</text>
      </svg>
    </div>
  );
}

function TrigTriangle() {
  return (
    <div className="why-visual" aria-label="Right triangle visual for sine and cosine">
      <svg viewBox="0 0 520 180" role="img">
        <line x1="60" y1="135" x2="250" y2="135" className="wv-axis" />
        <line x1="60" y1="135" x2="60" y2="50" className="wv-axis" />
        <line x1="60" y1="135" x2="250" y2="50" className="wv-arc positive" />
        <text x="126" y="158" className="wv-text">adjacent</text>
        <text x="18" y="95" className="wv-text">opposite</text>
        <text x="150" y="78" className="wv-text strong">hypotenuse</text>
        <text x="310" y="76" className="wv-text">cos uses adjacent</text>
        <text x="310" y="108" className="wv-text">sin uses opposite</text>
      </svg>
    </div>
  );
}

function InertiaSketch() {
  return (
    <div className="why-visual" aria-label="Inertia visual showing material far from neutral axis">
      <svg viewBox="0 0 520 180" role="img">
        <line x1="40" y1="90" x2="480" y2="90" className="wv-axis dashed" />
        <rect x="120" y="70" width="50" height="40" className="wv-shade" />
        <rect x="285" y="35" width="50" height="110" className="wv-overlap" />
        <text x="80" y="160" className="wv-text">area near middle</text>
        <text x="250" y="160" className="wv-text strong">area farther away</text>
      </svg>
    </div>
  );
}

function EquilibriumSketch() {
  return (
    <div className="why-visual" aria-label="Equilibrium forces sum to zero">
      <svg viewBox="0 0 520 170" role="img">
        <rect x="160" y="68" width="190" height="34" className="wv-cell" />
        <line x1="205" y1="68" x2="205" y2="25" className="wv-force up" />
        <line x1="305" y1="68" x2="305" y2="25" className="wv-force up" />
        <line x1="255" y1="102" x2="255" y2="145" className="wv-force down" />
        <text x="170" y="22" className="wv-text">reactions up</text>
        <text x="278" y="152" className="wv-text">load down</text>
      </svg>
    </div>
  );
}

import { useEffect, useState } from 'react';
import { isOfflineMode, resolveShabbosState, type ShabbosState } from './shabbos';

const initialState: ShabbosState = {
  loading: true,
  active: false,
  message: 'Checking Shabbos mode...',
};

export function useShabbosMode() {
  const [state, setState] = useState<ShabbosState>(initialState);

  useEffect(() => {
    let cancelled = false;
    resolveShabbosState().then(next => {
      if (!cancelled) setState(next);
    });
    return () => { cancelled = true; };
  }, []);

  useEffect(() => {
    if (!isOfflineMode()) return;
    function onKeyDown(event: KeyboardEvent) {
      if (event.key !== 'F12') return;
      event.preventDefault();
      setState(current => ({
        loading: false,
        active: !current.active,
        message: current.active ? 'Shabbos mode is disabled in offline mode.' : 'Offline Shabbos preview is active.',
        locationLabel: current.active ? undefined : 'Offline preview',
        toggleHint: current.active ? undefined : 'Press F12 to close',
      }));
    }
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, []);

  return state;
}

export function ShabbosOverlay({ state }: { state: ShabbosState }) {
  if (!state.active) return null;

  return (
    <div className="shabbos-overlay" role="dialog" aria-modal="true" aria-label="Shabbos mode">
      <div className="shabbos-card">
        <ShabbosStillLife />
        <div className="shabbos-copy">
          <span className="eyebrow">Shabbos mode</span>
          <h1>All work is complete for Shabbos.</h1>
          <p>
            Close your eyes and think: I am already a successful structural engineer, using my gifts with calm, dignity, and abundance.
          </p>
          <p>
            Because when we hold Shabbos, we remember that our work is only one small part of something much larger. We rest as partners in the whole universe, trusting that success depends on the eibershter, and that rest is also part of the work.
          </p>
          <p>
            Make the best of Shabbos, and may the bashefer make the best of you. Hatzlucha Rabba. I am waiting for you to shine. Taty.
          </p>
          <p>
            I'll never know if you saw this message. I hope you'll never see this.. If you do I trust you that you'll make the right choices!
          </p>
          <div className="shabbos-meta">
            {state.locationLabel && <span>{state.locationLabel}</span>}
            {state.endsAt && <span>Reopens after {state.endsAt}</span>}
            {state.toggleHint && <span>{state.toggleHint}</span>}
          </div>
        </div>
      </div>
    </div>
  );
}

function ShabbosStillLife() {
  return (
    <svg className="shabbos-art" viewBox="0 0 760 420" role="img" aria-label="Candles, covered challah, and silver becher with wine">
      <defs>
        <linearGradient id="silver" x1="0" x2="1">
          <stop offset="0" stopColor="#d7dde8" />
          <stop offset="0.5" stopColor="#ffffff" />
          <stop offset="1" stopColor="#9aa7bc" />
        </linearGradient>
        <linearGradient id="wine" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0" stopColor="#7f1d1d" />
          <stop offset="1" stopColor="#3f0d12" />
        </linearGradient>
      </defs>
      <rect x="40" y="300" width="680" height="40" rx="20" className="table-shadow" />
      <rect x="105" y="92" width="38" height="190" rx="8" className="candle" />
      <rect x="176" y="92" width="38" height="190" rx="8" className="candle" />
      <path d="M124 50 C100 78 112 96 124 105 C138 92 147 76 124 50Z" className="flame" />
      <path d="M195 50 C171 78 183 96 195 105 C209 92 218 76 195 50Z" className="flame" />
      <ellipse cx="159" cy="286" rx="98" ry="18" className="silver" />
      <path d="M300 240 C360 160 520 160 586 240 L620 304 L262 304Z" className="challah-cover" />
      <path d="M300 240 C370 270 515 270 586 240" className="cover-stitch" />
      <path d="M320 220 C365 245 405 245 450 220 C496 246 538 246 575 220" className="cover-stitch" />
      <text x="364" y="278" className="cover-text">Shabbos</text>
      <path d="M635 122 L700 122 L684 276 L651 276Z" fill="url(#silver)" />
      <ellipse cx="667" cy="122" rx="36" ry="10" className="silver" />
      <ellipse cx="667" cy="148" rx="27" ry="8" fill="url(#wine)" />
      <rect x="660" y="276" width="14" height="42" className="silver" />
      <ellipse cx="667" cy="326" rx="50" ry="12" className="silver" />
    </svg>
  );
}

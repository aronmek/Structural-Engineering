export type ShabbosState = {
  loading: boolean;
  active: boolean;
  message: string;
  locationLabel?: string;
  startsAt?: string;
  endsAt?: string;
};

const disabledOfflineState: ShabbosState = {
  loading: false,
  active: false,
  message: 'Shabbos mode is disabled in offline mode.',
};

type IpLocation = {
  latitude?: number;
  longitude?: number;
  city?: string;
  region?: string;
  country_name?: string;
  timezone?: string;
};

type WorldTime = {
  datetime?: string;
  timezone?: string;
};

export function isOfflineMode(url = globalThis.location?.href || '') {
  if (import.meta.env.VITE_OFFLINE_MODE === 'true') return true;
  if (!url) return false;
  const parsed = new URL(url, 'http://local.invalid');
  return parsed.protocol === 'file:' || parsed.searchParams.get('offline') === '1' || parsed.searchParams.get('mode') === 'offline';
}

function forcedStateFromUrl(url = globalThis.location?.href || ''): ShabbosState | null {
  if (!url) return null;
  const parsed = new URL(url, 'http://local.invalid');
  const forced = parsed.searchParams.get('shabbos');
  if (forced === 'active') {
    return {
      loading: false,
      active: true,
      message: 'Shabbos mode is active.',
      locationLabel: 'Test location',
      startsAt: 'Forced start',
      endsAt: 'Forced end',
    };
  }
  if (forced === 'inactive') {
    return {
      loading: false,
      active: false,
      message: 'Shabbos mode is not active right now.',
    };
  }
  return null;
}

function ymd(date: Date) {
  const y = date.getFullYear();
  const m = String(date.getMonth() + 1).padStart(2, '0');
  const d = String(date.getDate()).padStart(2, '0');
  return `${y}-${m}-${d}`;
}

function dateAtLocalNoon(base: Date, dayOffset: number) {
  const d = new Date(base);
  d.setDate(base.getDate() + dayOffset);
  d.setHours(12, 0, 0, 0);
  return d;
}

async function getSunset(lat: number, lng: number, date: Date) {
  const url = `https://api.sunrise-sunset.org/json?lat=${lat}&lng=${lng}&date=${ymd(date)}&formatted=0`;
  const res = await fetch(url);
  if (!res.ok) throw new Error('Could not fetch sunset time.');
  const data = await res.json() as { results?: { sunset?: string } };
  if (!data.results?.sunset) throw new Error('Sunset time was missing.');
  return new Date(data.results.sunset);
}

function previousFridayOffset(now: Date) {
  const friday = 5;
  return -((now.getDay() - friday + 7) % 7);
}

export async function resolveShabbosState(): Promise<ShabbosState> {
  if (isOfflineMode()) return disabledOfflineState;
  const forcedState = forcedStateFromUrl();
  if (forcedState) return forcedState;

  try {
    const [locRes, timeRes] = await Promise.all([
      fetch('https://ipapi.co/json/'),
      fetch('https://worldtimeapi.org/api/ip'),
    ]);

    if (!locRes.ok) throw new Error('Could not detect location.');
    const location = await locRes.json() as IpLocation;
    const worldTime = timeRes.ok ? await timeRes.json() as WorldTime : {};
    if (typeof location.latitude !== 'number' || typeof location.longitude !== 'number') {
      throw new Error('Location did not include latitude and longitude.');
    }

    const now = worldTime.datetime ? new Date(worldTime.datetime) : new Date();
    const fridayOffset = previousFridayOffset(now);
    const friday = dateAtLocalNoon(now, fridayOffset);
    const saturday = dateAtLocalNoon(now, fridayOffset + 1);
    const nextFriday = dateAtLocalNoon(now, fridayOffset + 7);
    const nextSaturday = dateAtLocalNoon(now, fridayOffset + 8);

    let starts = await getSunset(location.latitude, location.longitude, friday);
    let saturdaySunset = await getSunset(location.latitude, location.longitude, saturday);
    let ends = new Date(saturdaySunset.getTime() + 72 * 60 * 1000);

    if (now > ends) {
      starts = await getSunset(location.latitude, location.longitude, nextFriday);
      saturdaySunset = await getSunset(location.latitude, location.longitude, nextSaturday);
      ends = new Date(saturdaySunset.getTime() + 72 * 60 * 1000);
    }

    const active = now >= starts && now < ends;
    const locationLabel = [location.city, location.region || location.country_name].filter(Boolean).join(', ');
    return {
      loading: false,
      active,
      locationLabel,
      startsAt: starts.toLocaleString(),
      endsAt: ends.toLocaleString(),
      message: active ? 'Shabbos mode is active.' : 'Shabbos mode is not active right now.',
    };
  } catch (error) {
    return {
      loading: false,
      active: false,
      message: error instanceof Error ? error.message : 'Could not check Shabbos mode.',
    };
  }
}

export type ShabbosState = {
  loading: boolean;
  active: boolean;
  message: string;
  locationLabel?: string;
  startsAt?: string;
  endsAt?: string;
  toggleHint?: string;
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

type ShabbosLocation = {
  latitude: number;
  longitude: number;
  label: string;
  timezone: string;
};

type TimeCheck = {
  label: string;
  now: Date;
};

type ShabbosWindow = {
  location: ShabbosLocation;
  starts: Date;
  ends: Date;
};

type ActiveSpan = {
  starts: Date;
  ends: Date;
  startTimeZone: string;
  endTimeZone: string;
  locationLabels: string[];
};

const shabbosEndDelayMs = 72 * 60 * 1000;
const fridayIndex = 5;

const newYorkLocation: ShabbosLocation = {
  latitude: 40.7128,
  longitude: -74.006,
  label: 'New York',
  timezone: 'America/New_York',
};

const weekdayIndexes: Record<string, number> = {
  Sun: 0,
  Mon: 1,
  Tue: 2,
  Wed: 3,
  Thu: 4,
  Fri: 5,
  Sat: 6,
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

function ymdFromUtcDate(date: Date) {
  const y = date.getUTCFullYear();
  const m = String(date.getUTCMonth() + 1).padStart(2, '0');
  const d = String(date.getUTCDate()).padStart(2, '0');
  return `${y}-${m}-${d}`;
}

function addDaysToYmd(dateYmd: string, dayOffset: number) {
  const [year, month, day] = dateYmd.split('-').map(Number);
  return ymdFromUtcDate(new Date(Date.UTC(year, month - 1, day + dayOffset)));
}

function localDateParts(date: Date, timezone: string) {
  const parts = new Intl.DateTimeFormat('en-US', {
    timeZone: timezone,
    weekday: 'short',
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  }).formatToParts(date);
  const byType = Object.fromEntries(parts.map(part => [part.type, part.value]));
  const weekday = weekdayIndexes[byType.weekday];
  if (!byType.year || !byType.month || !byType.day || weekday === undefined) {
    throw new Error(`Could not read the local date for ${timezone}.`);
  }
  return {
    ymd: `${byType.year}-${byType.month}-${byType.day}`,
    weekday,
  };
}

function previousFridayYmd(now: Date, timezone: string) {
  const { ymd, weekday } = localDateParts(now, timezone);
  const offset = -((weekday - fridayIndex + 7) % 7);
  return addDaysToYmd(ymd, offset);
}

async function getSunset(lat: number, lng: number, dateYmd: string) {
  const url = `https://api.sunrise-sunset.org/json?lat=${lat}&lng=${lng}&date=${dateYmd}&formatted=0`;
  const res = await fetch(url);
  if (!res.ok) throw new Error('Could not fetch sunset time.');
  const data = await res.json() as { results?: { sunset?: string } };
  if (!data.results?.sunset) throw new Error('Sunset time was missing.');
  return new Date(data.results.sunset);
}

async function fetchJson<T>(url: string): Promise<T | null> {
  try {
    const res = await fetch(url);
    if (!res.ok) return null;
    return await res.json() as T;
  } catch {
    return null;
  }
}

function isValidDate(date: Date) {
  return !Number.isNaN(date.getTime());
}

function detectedLocation(location: IpLocation | null, fallbackTimezone?: string): ShabbosLocation | null {
  if (!location || typeof location.latitude !== 'number' || typeof location.longitude !== 'number') return null;
  const timezone = location.timezone || fallbackTimezone;
  if (!timezone) return null;
  const label = [location.city, location.region || location.country_name].filter(Boolean).join(', ') || timezone;
  return {
    latitude: location.latitude,
    longitude: location.longitude,
    label,
    timezone,
  };
}

function shabbosLocations(location: IpLocation | null, fallbackTimezone?: string) {
  const locations = [newYorkLocation];
  const ipLocation = detectedLocation(location, fallbackTimezone);
  if (ipLocation && !locations.some(item => item.label === ipLocation.label && item.timezone === ipLocation.timezone)) {
    locations.push(ipLocation);
  }
  return locations;
}

function timeChecks(worldTime: WorldTime | null): TimeCheck[] {
  const checks: TimeCheck[] = [{ label: 'local system time', now: new Date() }];
  if (worldTime?.datetime) {
    const internetNow = new Date(worldTime.datetime);
    if (isValidDate(internetNow)) checks.push({ label: 'internet time', now: internetNow });
  }
  return checks;
}

async function resolveWindow(location: ShabbosLocation, now: Date): Promise<ShabbosWindow> {
  const friday = previousFridayYmd(now, location.timezone);
  const saturday = addDaysToYmd(friday, 1);
  const nextFriday = addDaysToYmd(friday, 7);
  const nextSaturday = addDaysToYmd(friday, 8);

  let starts = await getSunset(location.latitude, location.longitude, friday);
  let saturdaySunset = await getSunset(location.latitude, location.longitude, saturday);
  let ends = new Date(saturdaySunset.getTime() + shabbosEndDelayMs);

  if (now > ends) {
    starts = await getSunset(location.latitude, location.longitude, nextFriday);
    saturdaySunset = await getSunset(location.latitude, location.longitude, nextSaturday);
    ends = new Date(saturdaySunset.getTime() + shabbosEndDelayMs);
  }

  return { location, starts, ends };
}

async function resolveWindows(locations: ShabbosLocation[], now: Date) {
  const settled = await Promise.allSettled(locations.map(location => resolveWindow(location, now)));
  return settled.flatMap(result => result.status === 'fulfilled' ? [result.value] : []);
}

function activeSpan(now: Date, windows: ShabbosWindow[]): ActiveSpan | null {
  const activeWindow = windows.find(window => now >= window.starts && now < window.ends);
  if (!activeWindow) return null;

  let starts = activeWindow.starts;
  let ends = activeWindow.ends;
  let connectedWindows = windows.filter(window => window.starts <= ends && window.ends >= starts);

  while (true) {
    const nextStarts = connectedWindows.reduce((earliest, window) => window.starts < earliest ? window.starts : earliest, starts);
    const nextEnds = connectedWindows.reduce((latest, window) => window.ends > latest ? window.ends : latest, ends);
    const nextConnectedWindows = windows.filter(window => window.starts <= nextEnds && window.ends >= nextStarts);

    if (nextStarts.getTime() === starts.getTime() && nextEnds.getTime() === ends.getTime() && nextConnectedWindows.length === connectedWindows.length) {
      break;
    }

    starts = nextStarts;
    ends = nextEnds;
    connectedWindows = nextConnectedWindows;
  }

  const startWindow = connectedWindows.reduce((earliest, window) => window.starts < earliest.starts ? window : earliest, connectedWindows[0]);
  const endWindow = connectedWindows.reduce((latest, window) => window.ends > latest.ends ? window : latest, connectedWindows[0]);
  return {
    starts,
    ends,
    startTimeZone: startWindow.location.timezone,
    endTimeZone: endWindow.location.timezone,
    locationLabels: uniqueStrings(connectedWindows.map(window => window.location.label)),
  };
}

function uniqueStrings(values: string[]) {
  return [...new Set(values.filter(Boolean))];
}

function formatLocations(labels: string[]) {
  return labels.length > 1 ? labels.join(' + ') : labels[0];
}

function formatZonedDate(date: Date, timezone: string) {
  return new Intl.DateTimeFormat('en-US', {
    timeZone: timezone,
    weekday: 'short',
    month: 'short',
    day: 'numeric',
    hour: 'numeric',
    minute: '2-digit',
    timeZoneName: 'short',
  }).format(date);
}

export async function resolveShabbosState(): Promise<ShabbosState> {
  if (isOfflineMode()) return disabledOfflineState;
  const forcedState = forcedStateFromUrl();
  if (forcedState) return forcedState;

  try {
    const [location, worldTime] = await Promise.all([
      fetchJson<IpLocation>('https://ipapi.co/json/'),
      fetchJson<WorldTime>('https://worldtimeapi.org/api/ip'),
    ]);

    const locations = shabbosLocations(location, worldTime?.timezone);
    const checks = timeChecks(worldTime);
    const clockResults = await Promise.all(checks.map(async check => ({
      check,
      windows: await resolveWindows(locations, check.now),
    })));
    const allWindows = clockResults.flatMap(result => result.windows);
    if (!allWindows.length) throw new Error('Could not calculate Shabbos times.');

    const activeSpans = clockResults.flatMap(result => {
      const span = activeSpan(result.check.now, result.windows);
      return span ? [span] : [];
    });
    const currentSpan = activeSpans.reduce<ActiveSpan | null>((latest, span) => {
      if (!latest || span.ends > latest.ends) return span;
      return latest;
    }, null);
    const active = Boolean(currentSpan);
    const upcomingWindows = clockResults.flatMap(result => result.windows.filter(window => window.starts > result.check.now));
    const nextWindow = upcomingWindows.reduce<ShabbosWindow | null>((earliest, window) => {
      if (!earliest || window.starts < earliest.starts) return window;
      return earliest;
    }, null);
    const locationLabels = currentSpan?.locationLabels || uniqueStrings(locations.map(item => item.label));
    const starts = currentSpan?.starts || nextWindow?.starts;
    const startsTimeZone = currentSpan?.startTimeZone || nextWindow?.location.timezone;
    const ends = currentSpan?.ends || nextWindow?.ends;
    const endsTimeZone = currentSpan?.endTimeZone || nextWindow?.location.timezone;

    return {
      loading: false,
      active,
      locationLabel: formatLocations(locationLabels),
      startsAt: starts && startsTimeZone ? formatZonedDate(starts, startsTimeZone) : undefined,
      endsAt: ends && endsTimeZone ? formatZonedDate(ends, endsTimeZone) : undefined,
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

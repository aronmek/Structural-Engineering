/// <reference types="node" />

import { expect, test } from '@playwright/test';

type MockApisOptions = {
  location?: {
    latitude: number;
    longitude: number;
    city: string;
    region: string;
    country_name: string;
    timezone: string;
  };
  internetDatetime?: string;
  internetTimezone?: string;
  sunsetForRequest?: (url: URL) => string;
};

function addDaysToYmd(dateYmd: string, dayOffset: number) {
  const [year, month, day] = dateYmd.split('-').map(Number);
  return new Date(Date.UTC(year, month - 1, day + dayOffset)).toISOString().slice(0, 10);
}

async function freezeBrowserTime(page: import('@playwright/test').Page, iso: string) {
  await page.addInitScript({
    content: `
      (() => {
        const fixedTime = new Date(${JSON.stringify(iso)}).getTime();
        const RealDate = Date;
        const FixedDate = new Proxy(RealDate, {
          apply(target, thisArg, args) {
            return args.length === 0 ? new target(fixedTime).toString() : Reflect.apply(target, thisArg, args);
          },
          construct(target, args) {
            return args.length === 0 ? new target(fixedTime) : Reflect.construct(target, args);
          },
        });
        FixedDate.now = () => fixedTime;
        FixedDate.UTC = RealDate.UTC;
        FixedDate.parse = RealDate.parse;
        FixedDate.prototype = RealDate.prototype;
        window.Date = FixedDate;
      })();
    `,
  });
}

async function mockShabbosApis(page: import('@playwright/test').Page, options: MockApisOptions = {}) {
  const location = options.location || {
    latitude: 40.7128,
    longitude: -74.006,
    city: 'Brooklyn',
    region: 'NY',
    country_name: 'United States',
    timezone: 'America/New_York',
  };

  await page.route('https://ipapi.co/json/', route => route.fulfill({
    contentType: 'application/json',
    body: JSON.stringify(location),
  }));

  await page.route('https://worldtimeapi.org/api/ip', route => route.fulfill({
    contentType: 'application/json',
    body: JSON.stringify({
      datetime: options.internetDatetime || '2026-05-01T20:30:00-04:00',
      timezone: options.internetTimezone || location.timezone,
    }),
  }));

  await page.route('https://api.sunrise-sunset.org/json?**', route => route.fulfill({
    contentType: 'application/json',
    body: JSON.stringify({
      results: { sunset: options.sunsetForRequest?.(new URL(route.request().url())) || defaultSunset(new URL(route.request().url())) },
      status: 'OK',
    }),
  }));
}

function defaultSunset(url: URL) {
  const date = url.searchParams.get('date') || '2026-05-01';
  return `${date}T23:30:00+00:00`;
}

test('online Shabbos mode activates from internet time, location, and sunset APIs', async ({ page }) => {
  await freezeBrowserTime(page, '2026-05-04T12:00:00Z');
  await mockShabbosApis(page);
  await page.goto('/');

  await expect(page.getByRole('dialog', { name: 'Shabbos mode' })).toBeVisible();
  await expect(page.getByText('All work is complete for Shabbos.')).toBeVisible();
  await expect(page.getByText('Brooklyn, NY')).toBeVisible();
});

test('online Shabbos mode activates from local system time when internet time is outside Shabbos', async ({ page }) => {
  await freezeBrowserTime(page, '2026-05-02T00:30:00Z');
  await mockShabbosApis(page, { internetDatetime: '2026-05-04T12:00:00-04:00' });
  await page.goto('/');

  await expect(page.getByRole('dialog', { name: 'Shabbos mode' })).toBeVisible();
  await expect(page.getByText('All work is complete for Shabbos.')).toBeVisible();
});

test('online Shabbos mode stays active through the detected IP timezone window', async ({ page }) => {
  await freezeBrowserTime(page, '2026-05-02T00:00:00Z');
  await mockShabbosApis(page, {
    location: {
      latitude: 34.0522,
      longitude: -118.2437,
      city: 'Los Angeles',
      region: 'CA',
      country_name: 'United States',
      timezone: 'America/Los_Angeles',
    },
    internetDatetime: '2026-05-01T17:00:00-07:00',
    internetTimezone: 'America/Los_Angeles',
    sunsetForRequest: url => {
      const date = url.searchParams.get('date') || '2026-05-01';
      const longitude = Number(url.searchParams.get('lng'));
      if (longitude < -100) return `${addDaysToYmd(date, 1)}T02:30:00+00:00`;
      return `${date}T23:30:00+00:00`;
    },
  });
  await page.goto('/');

  await expect(page.getByRole('dialog', { name: 'Shabbos mode' })).toBeVisible();
  await expect(page.getByText('New York + Los Angeles, CA')).toBeVisible();
  await expect(page.getByText('Reopens after Sat, May 2, 8:42 PM PDT')).toBeVisible();
});

test('forced online Shabbos preview shows the overlay', async ({ page }) => {
  await page.goto('/?shabbos=active');

  await expect(page.getByRole('dialog', { name: 'Shabbos mode' })).toBeVisible();
  await expect(page.getByText('All work is complete for Shabbos.')).toBeVisible();
});

test('online Shabbos overlay cannot be toggled closed with F12', async ({ page }) => {
  await page.goto('/?shabbos=active');

  const overlay = page.getByRole('dialog', { name: 'Shabbos mode' });
  await expect(overlay).toBeVisible();
  await expect(page.getByText('Press F12 to close')).toHaveCount(0);

  await page.keyboard.press('F12');

  await expect(overlay).toBeVisible();
  await expect(page.getByText('Press F12 to close')).toHaveCount(0);
});

test('offline mode does not auto-enable Shabbos mode even when forced', async ({ page }) => {
  await page.goto('/?offline=1&shabbos=active');

  await expect(page.getByRole('dialog', { name: 'Shabbos mode' })).toHaveCount(0);
  await expect(page.getByText('Shabbos mode is disabled in offline mode.')).toHaveCount(0);
});

test('offline mode toggles Shabbos overlay with F12', async ({ page }) => {
  await page.goto('/?offline=1');
  await expect(page.getByRole('dialog', { name: 'Shabbos mode' })).toHaveCount(0);

  await page.keyboard.press('F12');
  await expect(page.getByRole('dialog', { name: 'Shabbos mode' })).toBeVisible();
  await expect(page.getByText('Offline preview')).toBeVisible();
  await expect(page.getByText('Press F12 to close')).toBeVisible();

  await page.keyboard.press('F12');
  await expect(page.getByRole('dialog', { name: 'Shabbos mode' })).toHaveCount(0);
});

test('headed Shabbos preview stays visible for manual review', async ({ page }) => {
  test.skip(process.env.PLAYWRIGHT_HEADFUL_REVIEW !== 'hold-for-one-minute', 'Manual headed review only.');
  await page.goto('/?shabbos=active');
  await expect(page.getByRole('dialog', { name: 'Shabbos mode' })).toBeVisible();
  await page.waitForTimeout(60_000);
});
import { expect, test } from '@playwright/test';

async function mockActiveShabbosApis(page: import('@playwright/test').Page) {
  await page.route('https://ipapi.co/json/', route => route.fulfill({
    contentType: 'application/json',
    body: JSON.stringify({
      latitude: 40.7128,
      longitude: -74.006,
      city: 'Brooklyn',
      region: 'NY',
      country_name: 'United States',
    }),
  }));

  await page.route('https://worldtimeapi.org/api/ip', route => route.fulfill({
    contentType: 'application/json',
    body: JSON.stringify({
      datetime: '2026-05-01T20:30:00-04:00',
      timezone: 'America/New_York',
    }),
  }));

  await page.route('https://api.sunrise-sunset.org/json?**', route => route.fulfill({
    contentType: 'application/json',
    body: JSON.stringify({
      results: { sunset: '2026-05-01T23:30:00+00:00' },
      status: 'OK',
    }),
  }));
}

test('online Shabbos mode activates from time, location, and sunset APIs', async ({ page }) => {
  await mockActiveShabbosApis(page);
  await page.goto('/');

  await expect(page.getByRole('dialog', { name: 'Shabbos mode' })).toBeVisible();
  await expect(page.getByText('All work is complete for Shabbos.')).toBeVisible();
  await expect(page.getByText('Brooklyn, NY')).toBeVisible();
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
  await expect(page.getByText('Shabbos mode is disabled in offline mode.')).toBeVisible();
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
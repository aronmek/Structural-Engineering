/// <reference types="node" />

import { existsSync } from 'node:fs';
import path from 'node:path';
import { pathToFileURL } from 'node:url';
import type { Page } from '@playwright/test';

export type AppTarget = {
  name: string;
  goto(page: Page, search?: string): Promise<void>;
};

function normalizeSearch(search = '?shabbos=inactive') {
  if (!search) return '';
  return search.startsWith('?') ? search : `?${search}`;
}

function offlineBundleUrl(search?: string) {
  const bundlePath = path.resolve(process.env.OFFLINE_BUNDLE_PATH || 'structural-engineering-offline.html');
  if (!existsSync(bundlePath)) {
    throw new Error(`Offline bundle not found at ${bundlePath}. Run npm run bundle:offline before the dual-mode UI tests.`);
  }
  const url = new URL(pathToFileURL(bundlePath).href);
  url.search = normalizeSearch(search).replace(/^\?/, '');
  return url.href;
}

export const appTargets: AppTarget[] = [
  {
    name: 'online',
    async goto(page, search) {
      await page.goto(`/${normalizeSearch(search)}`);
    },
  },
  {
    name: 'bundled offline',
    async goto(page, search) {
      await page.goto(offlineBundleUrl(search));
    },
  },
];

export async function openChapter(page: Page, target: AppTarget, chapterName: RegExp, search = '?shabbos=inactive') {
  await target.goto(page, search);
  await page.getByRole('button', { name: chapterName }).click();
}
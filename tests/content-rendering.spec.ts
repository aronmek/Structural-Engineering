import { expect, test } from '@playwright/test';

async function openChapter(page: import('@playwright/test').Page, chapterName: RegExp) {
  await page.goto('/?shabbos=inactive');
  await page.getByRole('button', { name: chapterName }).click();
}

test('worked examples render math instead of raw dollar-delimited TeX', async ({ page }) => {
  await openChapter(page, /Chapter A3.*Multiplication and Division/);

  const body = page.locator('.markdown-body');
  await expect(body.locator('.katex').first()).toBeVisible();

  const visibleText = await body.innerText();
  expect(visibleText).not.toContain('$');
  expect(visibleText).not.toContain('\\times');
  expect(visibleText).not.toContain('\\dfrac');
});

test('why explanations appear beside the rules they deepen', async ({ page }) => {
  await openChapter(page, /Chapter A3.*Multiplication and Division/);

  await expect(page.getByText('Why counting decimal places works when multiplying')).toBeVisible();
  await expect(page.getByText('Why 0.2 x 0.3 = 0.06, not 0.6')).toBeVisible();

  const whyPanelIsBetweenWorkedExamplesAndEngineeringUse = await page.evaluate(() => {
    const workedExamples = [...document.querySelectorAll('h3')].find(heading => heading.textContent?.includes('C. The Math'));
    const engineeringUse = [...document.querySelectorAll('h3')].find(heading => heading.textContent?.includes('D. Later Engineering Use'));
    const decimalWhy = [...document.querySelectorAll('summary')].find(summary => summary.textContent?.includes('Why 0.2 x 0.3 = 0.06'));
    if (!workedExamples || !engineeringUse || !decimalWhy) return false;
    return Boolean(workedExamples.compareDocumentPosition(decimalWhy) & Node.DOCUMENT_POSITION_FOLLOWING)
      && Boolean(decimalWhy.compareDocumentPosition(engineeringUse) & Node.DOCUMENT_POSITION_FOLLOWING);
  });

  expect(whyPanelIsBetweenWorkedExamplesAndEngineeringUse).toBe(true);
});

test('fraction rules include collapsed visual why explanations', async ({ page }) => {
  await openChapter(page, /Chapter A4.*Fractions/);

  const multiplyingFractions = page.locator('details').filter({ hasText: 'Why multiplying fractions can make a smaller number' });
  await expect(multiplyingFractions).toBeVisible();
  await multiplyingFractions.getByText('Why multiplying fractions can make a smaller number').click();

  await expect(multiplyingFractions.getByLabel('Fraction bars showing common denominators and fraction multiplication')).toBeVisible();
  await expect(multiplyingFractions.getByText('overlap = 1 out of 6')).toBeVisible();
});
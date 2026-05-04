import { expect, test } from '@playwright/test';
import { appTargets, openChapter } from './appTargets';

for (const target of appTargets) {
  test.describe(`${target.name} app`, () => {
    test('worked examples render math instead of raw dollar-delimited TeX', async ({ page }) => {
      await openChapter(page, target, /Chapter A3.*Multiplication and Division/);

      const body = page.locator('.markdown-body');
      await expect(body.locator('.katex').first()).toBeVisible();

      const visibleText = await body.innerText();
      expect(visibleText).not.toContain('$');
      expect(visibleText).not.toContain('\\times');
      expect(visibleText).not.toContain('\\dfrac');
    });

    test('math remains rendered after the page settles', async ({ page }) => {
      await openChapter(page, target, /Chapter 20.*Moment of Inertia/);

      const body = page.locator('.markdown-body');
      await expect(body.locator('.katex').first()).toBeVisible();
      await page.waitForTimeout(700);

      const visibleText = await body.innerText();
      expect(visibleText).toContain('Moment of Inertia');
      expect(visibleText).not.toContain('$');
      expect(visibleText).not.toContain('\\sigma');
      expect(visibleText).not.toContain('\\dfrac');
    });

    test('why explanations appear beside the rules they deepen', async ({ page }) => {
      await openChapter(page, target, /Chapter A3.*Multiplication and Division/);

      await expect(page.getByText('Why a negative times a negative becomes positive')).toBeVisible();

      const whyPanelIsBetweenWorkedExamplesAndEngineeringUse = await page.evaluate(() => {
        const workedExamples = [...document.querySelectorAll('h3')].find(heading => heading.textContent?.includes('C. The Math'));
        const engineeringUse = [...document.querySelectorAll('h3')].find(heading => heading.textContent?.includes('D. Later Engineering Use'));
        const signWhy = [...document.querySelectorAll('summary')].find(summary => summary.textContent?.includes('Why a negative times a negative becomes positive'));
        if (!workedExamples || !engineeringUse || !signWhy) return false;
        return Boolean(workedExamples.compareDocumentPosition(signWhy) & Node.DOCUMENT_POSITION_FOLLOWING)
          && Boolean(signWhy.compareDocumentPosition(engineeringUse) & Node.DOCUMENT_POSITION_FOLLOWING);
      });

      expect(whyPanelIsBetweenWorkedExamplesAndEngineeringUse).toBe(true);
    });

    test('fraction rules include collapsed visual why explanations', async ({ page }) => {
      await openChapter(page, target, /Chapter A4.*Fractions/);

      const multiplyingFractions = page.locator('details').filter({ hasText: 'Why multiplying fractions can make a smaller number' });
      await expect(multiplyingFractions).toBeVisible();
      await multiplyingFractions.getByText('Why multiplying fractions can make a smaller number').click();

      await expect(multiplyingFractions.getByLabel('Fraction bars showing common denominators and fraction multiplication')).toBeVisible();
      await expect(multiplyingFractions.getByText('overlap = 1 out of 6')).toBeVisible();
    });

    test('hovering rendered math shows a glossary tooltip', async ({ page }) => {
      await openChapter(page, target, /Chapter 18.*Areas and Perimeters/);

      const stressFormula = page.locator('.markdown-body p .katex[data-tooltip-name="Stress"]').first();
      await expect(stressFormula).toBeVisible();
      await stressFormula.hover();

      const tooltip = page.getByRole('tooltip');
      await expect(tooltip).toBeVisible();
      await expect(tooltip).toContainText('Stress');
      await expect(tooltip).toContainText('force intensity');
    });

    test('chapter exams render, accept answers, and grade', async ({ page }) => {
      await openChapter(page, target, /Chapter A1.*Numbers and the Number Line/);

      const exam = page.getByRole('region', { name: 'Chapter exam' });
      await expect(exam.getByRole('heading', { name: 'Chapter Exam' })).toBeVisible();
      await expect(exam.getByRole('tab', { name: /Set A/ })).toBeVisible();

      await exam.getByLabel('-7').check();
      await exam.getByLabel('Question 2 numeric answer').fill('9');
      await exam.getByLabel('A decrease of 12 mm').check();
      await exam.getByRole('button', { name: 'Submit Answers' }).click();

      await expect(exam.getByText('Score: 3 / 3 (100%)')).toBeVisible();
      await expect(exam.getByText('Correct.')).toHaveCount(3);
    });

    test('sidebar and chapter content scroll independently', async ({ page }) => {
      await page.setViewportSize({ width: 1280, height: 720 });
      await target.goto(page, '?shabbos=inactive');

      const sidebar = page.locator('.sidebar');
      const main = page.locator('.main');
      await expect(sidebar).toBeVisible();
      await expect(main).toBeVisible();

      await main.evaluate(element => { element.scrollTop = 500; });
      await sidebar.evaluate(element => { element.scrollTop = 180; });
      const mainBeforeSidebarScroll = await main.evaluate(element => element.scrollTop);

      await sidebar.evaluate(element => { element.scrollTop = element.scrollHeight; });
      await expect.poll(() => main.evaluate(element => element.scrollTop)).toBe(mainBeforeSidebarScroll);

      const sidebarBeforeMainScroll = await sidebar.evaluate(element => element.scrollTop);
      await main.evaluate(element => { element.scrollTop = 1000; });
      await expect.poll(() => sidebar.evaluate(element => element.scrollTop)).toBe(sidebarBeforeMainScroll);

      const documentScroll = await page.evaluate(() => document.scrollingElement?.scrollTop ?? 0);
      expect(documentScroll).toBe(0);
    });
  });
}
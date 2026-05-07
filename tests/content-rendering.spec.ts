import { expect, test } from '@playwright/test';
import { appTargets, openChapter } from './appTargets';

for (const target of appTargets) {
  test.describe(`${target.name} app`, () => {
    test('worked examples render math instead of raw dollar-delimited TeX', async ({ page }) => {
      await openChapter(page, target, /Chapter 2.*Scaling/);

      const body = page.locator('.markdown-body');
      await expect(body.locator('.katex').first()).toBeVisible();

      const visibleText = await body.innerText();
      expect(visibleText).not.toContain('$');
      expect(visibleText).not.toContain('\\times');
      expect(visibleText).not.toContain('\\dfrac');
    });

    test('math remains rendered after the page settles', async ({ page }) => {
      await openChapter(page, target, /Chapter 15.*Moment of Inertia/);

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
      await openChapter(page, target, /Chapter 2.*Scaling/);

      await expect(page.getByText('Why a negative times a negative becomes positive')).toBeVisible();

      const whyPanelIsBetweenWorkedExamplesAndEngineeringUse = await page.evaluate(() => {
        const workedExamples = [...document.querySelectorAll('h3')].find(heading => heading.textContent?.includes('F. The Formal Shorthand'));
        const engineeringUse = [...document.querySelectorAll('h3')].find(heading => heading.textContent?.includes('G. Full Worked Example'));
        const signWhy = [...document.querySelectorAll('summary')].find(summary => summary.textContent?.includes('Why a negative times a negative becomes positive'));
        if (!workedExamples || !engineeringUse || !signWhy) return false;
        return Boolean(workedExamples.compareDocumentPosition(signWhy) & Node.DOCUMENT_POSITION_FOLLOWING)
          && Boolean(signWhy.compareDocumentPosition(engineeringUse) & Node.DOCUMENT_POSITION_FOLLOWING);
      });

      expect(whyPanelIsBetweenWorkedExamplesAndEngineeringUse).toBe(true);
    });

    test('fraction rules include collapsed visual why explanations', async ({ page }) => {
      await openChapter(page, target, /Chapter 2.*Scaling/);

      const multiplyingFractions = page.locator('details').filter({ hasText: 'Why multiplying fractions can make a smaller number' });
      await expect(multiplyingFractions).toBeVisible();
      await multiplyingFractions.getByText('Why multiplying fractions can make a smaller number').click();

      await expect(multiplyingFractions.getByLabel('Fraction bars showing common denominators and fraction multiplication')).toBeVisible();
      await expect(multiplyingFractions.getByText('overlap = 1 out of 6')).toBeVisible();
    });

    test('hovering rendered math shows a glossary tooltip', async ({ page }) => {
      await openChapter(page, target, /Chapter 16.*Stress and Strain/);

      const stressFormula = page.locator('.markdown-body p .katex[data-tooltip-name="Stress"]').first();
      await expect(stressFormula).toBeVisible();
      await stressFormula.hover();

      const tooltip = page.getByRole('tooltip');
      await expect(tooltip).toBeVisible();
      await expect(tooltip).toContainText('Stress');
      await expect(tooltip).toContainText('force intensity');
      await expect(tooltip).toContainText('First introduced in Chapter 16');
    });

    test('math stays rendered after a re-render triggered by theme toggle', async ({ page }) => {
      await openChapter(page, target, /Chapter 2.*Scaling/);

      const body = page.locator('.markdown-body');
      await expect(body.locator('.katex').first()).toBeVisible();

      // Theme toggle triggers an App state change → re-render, exactly the class of
      // re-render (shabbos API response, etc.) that previously caused math to revert.
      await page.getByLabel('Toggle theme').click();
      await page.getByLabel('Toggle theme').click();

      await expect(body.locator('.katex').first()).toBeVisible();
      const visibleText = await body.innerText();
      expect(visibleText).not.toContain('$');
      expect(visibleText).not.toContain('\\times');
      expect(visibleText).not.toContain('\\dfrac');
    });

    test('math tooltip survives a React re-render', async ({ page }) => {
      await openChapter(page, target, /Chapter 16.*Stress and Strain/);

      // Trigger re-renders with the same chapter/sections (same pattern as the
      // shabbos API callback that originally caused per-element listeners to be lost).
      await page.getByLabel('Toggle theme').click();
      await page.getByLabel('Toggle theme').click();

      // Wait for React effects to re-apply data attributes after the re-render,
      // then hover and verify the tooltip appears.
      const stressFormula = page.locator('.markdown-body p .katex[data-tooltip-name="Stress"]').first();
      await expect(stressFormula).toBeVisible();

      await stressFormula.hover();
      const tooltip = page.getByRole('tooltip');
      await expect(tooltip).toBeVisible();
      await expect(tooltip).toContainText('Stress');
    });

    test('tooltip shows name, pronunciation, description, and chapter link', async ({ page }) => {
      await openChapter(page, target, /Chapter 16.*Stress and Strain/);

      const stressFormula = page.locator('.markdown-body p .katex[data-tooltip-name="Stress"]').first();
      await expect(stressFormula).toBeVisible();
      await stressFormula.hover();

      const tooltip = page.getByRole('tooltip');
      await expect(tooltip).toBeVisible();

      // Scope to the first entry — it is always the primary match for the hovered symbol
      const firstEntry = tooltip.locator('.math-tooltip-entry').first();

      // Name
      await expect(firstEntry.locator('.math-tooltip-name')).toContainText('Stress');
      // Pronunciation
      await expect(firstEntry.locator('.math-tooltip-pronounce')).toContainText('sigma');
      // Description
      await expect(firstEntry.locator('.math-tooltip-desc')).toContainText('force intensity');
      // Chapter link — reference to where the concept was first taught
      await expect(firstEntry.locator('.math-tooltip-link')).toBeVisible();
      await expect(firstEntry.locator('.math-tooltip-link')).toContainText('Stress and Strain');
    });

    test('tooltip chapter link navigates to the source chapter', async ({ page }) => {
      // Chapter 25 uses Δσ in the S-N fatigue formula — σ is first taught in Ch16,
      // so the tooltip link should navigate back to Chapter 16.
      await openChapter(page, target, /Chapter 25.*Logarithms/);

      const sigmaFormula = page.locator('.markdown-body p .katex[data-tooltip-name="Stress"]').first();
      await expect(sigmaFormula).toBeVisible();
      await sigmaFormula.hover();

      const tooltip = page.getByRole('tooltip');
      await expect(tooltip).toBeVisible();

      // First entry is σ (Stress) — it matches before Σ and Δ in sorted key order
      const stressEntry = tooltip.locator('.math-tooltip-entry').first();
      const chapterLink = stressEntry.locator('.math-tooltip-link');
      await expect(chapterLink).toContainText('Stress and Strain');

      await chapterLink.click();

      // Tooltip closes and the app navigates to Chapter 16
      await expect(tooltip).not.toBeVisible();
      await expect(page.locator('.markdown-body h2').first()).toContainText('Chapter 16');
    });

    test('chapter exams render, accept answers, and grade', async ({ page }) => {
      await openChapter(page, target, /Chapter 1.*Direction/);

      const exam = page.getByRole('region', { name: 'Chapter exam' });
      await expect(exam.getByRole('heading', { name: 'Chapter Exam' })).toBeVisible();
      await expect(exam.getByRole('tab', { name: /Set A/ })).toBeVisible();

      await exam.getByLabel('-10 kN').check();
      await exam.getByLabel('Question 2 numeric answer').fill('0');
      await exam.getByLabel('There is 1 kN net downward force').check();
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
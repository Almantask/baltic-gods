import { test, expect } from '@playwright/test';

test.describe('God Detail Page', () => {
  test('should display god details', async ({ page }) => {
    await page.goto('/en/gods/perkunas');
    await expect(page.locator('h1')).toContainText('Perkūnas');
  });

  test('should show god attributes', async ({ page }) => {
    await page.goto('/en/gods/perkunas');
    await expect(page.getByText('Thunder, Lightning, Rain')).toBeVisible();
    await expect(page.getByText('Symbols')).toBeVisible();
  });

  test('should have back to pantheon link', async ({ page }) => {
    await page.goto('/en/gods/perkunas');
    await page.getByRole('link', { name: /Back to Pantheon/ }).click();
    await expect(page).toHaveURL(/.*\/en\/pantheon/);
  });
});

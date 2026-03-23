import { test, expect } from '@playwright/test';

test.describe('Pantheon Page', () => {
  test('should display pantheon page', async ({ page }) => {
    await page.goto('/en/pantheon');
    await expect(page.locator('h1')).toContainText('Pantheon');
  });

  test('should display list of gods', async ({ page }) => {
    await page.goto('/en/pantheon');
    await expect(page.getByText('Perkūnas')).toBeVisible();
    await expect(page.getByText('Saulė')).toBeVisible();
    await expect(page.getByText('Mėnuo')).toBeVisible();
  });

  test('should navigate to god detail page', async ({ page }) => {
    await page.goto('/en/pantheon');
    await page.getByRole('link', { name: /Perkūnas/ }).first().click();
    await expect(page).toHaveURL(/.*\/en\/gods\/perkunas/);
  });
});

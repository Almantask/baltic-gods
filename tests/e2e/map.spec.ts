import { test, expect } from '@playwright/test';

test.describe('Map Page', () => {
  test('should display map page', async ({ page }) => {
    await page.goto('/en/map');
    await expect(page.locator('h1')).toContainText('Interactive Map');
  });

  test('should show loading state then map', async ({ page }) => {
    await page.goto('/en/map');
    // Map should eventually load
    await expect(page.locator('.leaflet-container')).toBeVisible({ timeout: 10000 });
  });

  test('should display location cards', async ({ page }) => {
    await page.goto('/en/map');
    await expect(page.getByText('Vilnius')).toBeVisible();
    await expect(page.getByText('Perkūnas')).toBeVisible();
  });
});

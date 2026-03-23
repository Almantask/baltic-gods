import { test, expect } from '@playwright/test';

test.describe('i18n - Language Switching', () => {
  test('should switch between English, Lithuanian, and Latvian', async ({ page }) => {
    await page.goto('/en');

    // Check English
    await expect(page.locator('nav')).toContainText('Home');

    // Switch to Lithuanian
    await page.getByRole('link', { name: 'LT' }).click();
    await expect(page).toHaveURL(/.*\/lt/);
    await expect(page.locator('nav')).toContainText('Pagrindinis');

    // Switch to Latvian
    await page.getByRole('link', { name: 'LV' }).click();
    await expect(page).toHaveURL(/.*\/lv/);
    await expect(page.locator('nav')).toContainText('Sākums');

    // Switch back to English
    await page.getByRole('link', { name: 'EN' }).click();
    await expect(page).toHaveURL(/.*\/en/);
    await expect(page.locator('nav')).toContainText('Home');
  });

  test('should maintain page context when switching languages', async ({ page }) => {
    await page.goto('/en/pantheon');

    // Switch to Lithuanian from pantheon page
    await page.getByRole('link', { name: 'LT' }).click();
    await expect(page).toHaveURL(/.*\/lt\/pantheon/);
    await expect(page.locator('h1')).toContainText('Panteonas');

    // Switch to Latvian
    await page.getByRole('link', { name: 'LV' }).click();
    await expect(page).toHaveURL(/.*\/lv\/pantheon/);
    await expect(page.locator('h1')).toContainText('Panteons');
  });
});

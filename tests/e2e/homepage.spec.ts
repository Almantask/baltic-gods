import { test, expect } from '@playwright/test';

test.describe('Homepage', () => {
  test('should display the homepage with title', async ({ page }) => {
    await page.goto('/en');
    await expect(page.locator('h1')).toContainText('Baltic Gods');
  });

  test('should have navigation links', async ({ page }) => {
    await page.goto('/en');
    await expect(page.locator('nav')).toBeVisible();
    await expect(page.getByRole('link', { name: 'Home' })).toBeVisible();
    await expect(page.getByRole('link', { name: 'Pantheon' })).toBeVisible();
    await expect(page.getByRole('link', { name: 'Interactive Map' })).toBeVisible();
    await expect(page.getByRole('link', { name: 'Contact' })).toBeVisible();
  });

  test('should have language switcher', async ({ page }) => {
    await page.goto('/en');
    await expect(page.getByRole('link', { name: 'EN' })).toBeVisible();
    await expect(page.getByRole('link', { name: 'LT' })).toBeVisible();
    await expect(page.getByRole('link', { name: 'LV' })).toBeVisible();
  });

  test('should display featured gods', async ({ page }) => {
    await page.goto('/en');
    await expect(page.getByText('Featured Gods')).toBeVisible();
  });

  test('should navigate to pantheon page', async ({ page }) => {
    await page.goto('/en');
    await page.getByRole('link', { name: 'Explore Pantheon' }).first().click();
    await expect(page).toHaveURL(/.*\/en\/pantheon/);
  });
});

import { test, expect } from '@playwright/test';

test.describe('Contact Page', () => {
  test('should display contact form', async ({ page }) => {
    await page.goto('/en/contact');
    await expect(page.locator('h1')).toContainText('Report a Location');
  });

  test('should have all form fields', async ({ page }) => {
    await page.goto('/en/contact');
    await expect(page.getByLabel('Your Name')).toBeVisible();
    await expect(page.getByLabel('Email')).toBeVisible();
    await expect(page.getByLabel('Location Name')).toBeVisible();
    await expect(page.getByLabel('Associated Deity')).toBeVisible();
    await expect(page.getByLabel('Description')).toBeVisible();
  });

  test('should submit form successfully', async ({ page }) => {
    await page.goto('/en/contact');

    await page.getByLabel('Your Name').fill('Test User');
    await page.getByLabel('Email').fill('test@example.com');
    await page.getByLabel('Location Name').fill('Test Location');
    await page.getByLabel('Associated Deity').fill('Perkūnas');
    await page.getByLabel('Description').fill('This is a test location');

    await page.getByRole('button', { name: 'Submit Report' }).click();

    await expect(page.getByText('Thank You!')).toBeVisible();
  });
});

import { test, expect } from "@playwright/test";

const screenshotDir = "screenshots";

test("home page", async ({ page }) => {
  await page.goto("/");
  await expect(page.locator("h1")).toBeVisible();
  await page.screenshot({ path: `${screenshotDir}/home.png`, fullPage: true });
});

test("map page", async ({ page }) => {
  await page.goto("/map");
  await expect(page.locator("h1")).toBeVisible();
  await page.screenshot({ path: `${screenshotDir}/map.png`, fullPage: true });
});

test("pantheon page", async ({ page }) => {
  await page.goto("/pantheon");
  await expect(page.locator("h1")).toBeVisible();
  await page.screenshot({
    path: `${screenshotDir}/pantheon.png`,
    fullPage: true,
  });
});

test("deity detail page", async ({ page }) => {
  await page.goto("/pantheon/perkunas");
  await expect(page.locator("h1")).toBeVisible();
  await page.screenshot({
    path: `${screenshotDir}/deity-detail.png`,
    fullPage: true,
  });
});

test("field report page", async ({ page }) => {
  await page.goto("/field-report");
  await expect(page.locator("h1")).toBeVisible();
  await page.screenshot({
    path: `${screenshotDir}/field-report.png`,
    fullPage: true,
  });
});

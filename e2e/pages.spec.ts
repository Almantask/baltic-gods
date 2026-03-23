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

test("navigate from pantheon to deity detail", async ({ page }) => {
  await page.goto("/pantheon");
  await expect(page.locator("h1")).toBeVisible();

  await page.locator('a[href="/pantheon/perkunas"]').click();
  await expect(page).toHaveURL(/\/pantheon\/perkunas/);
  await expect(page.locator("h1")).toHaveText("Perkūnas");
});

const deities = [
  { slug: "zemyna", name: "Žemyna" },
  { slug: "saule", name: "Saulė" },
  { slug: "laima", name: "Laima" },
  { slug: "velnias", name: "Velnias" },
];

for (const deity of deities) {
  test(`deity page loads: ${deity.slug}`, async ({ page }) => {
    await page.goto(`/pantheon/${deity.slug}`);
    await expect(page.locator("h1")).toHaveText(deity.name);
  });
}

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

  // Click a location in the Ley Index
  const locationCard = page.getByRole("button", { name: "Aukštaitija Thunder Oaks" });
  await locationCard.click();

  // The significance text should appear in the Coordinate Panel (sidebar)
  const coordPanel = page.getByText(/Coordinate Panel/i).locator("..");
  await expect(coordPanel.getByText(/Offerings of iron nails/i)).toBeVisible();

  // But there should NO longer be a summary overlay on top of the map itself.
  // The old overlay had significance text as well. We check that it's NOT inside the map container.
  const mapContainer = page.locator(".sacred-map-container");
  const mapOverlayText = mapContainer.getByText(/Offerings of iron nails/i);
  await expect(mapOverlayText).not.toBeVisible();
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

test("stories page", async ({ page }) => {
  await page.goto("/stories");
  await expect(page.locator("h1")).toBeVisible();
  await page.screenshot({
    path: `${screenshotDir}/stories.png`,
    fullPage: true,
  });
});

test("story detail page", async ({ page }) => {
  await page.goto("/stories/thunder-oak-of-perkunas");
  await expect(page.locator("h1")).toHaveText(
    "The Thunder Oak of Perkūnas",
  );
  await page.screenshot({
    path: `${screenshotDir}/story-detail.png`,
    fullPage: true,
  });
});

test("navigate from stories to story detail", async ({ page }) => {
  await page.goto("/stories");
  await expect(page.locator("h1")).toBeVisible();

  await page
    .locator('a[href="/stories/thunder-oak-of-perkunas"]')
    .click();
  await expect(page).toHaveURL(/\/stories\/thunder-oak-of-perkunas/);
  await expect(page.locator("h1")).toHaveText(
    "The Thunder Oak of Perkūnas",
  );
});

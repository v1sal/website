import { chromium } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";
import { mkdir } from "node:fs/promises";
import assert from "node:assert/strict";
const browser = await chromium.launch({ channel: "chrome", headless: true });
try {
  const context = await browser.newContext({
    permissions: ["clipboard-read", "clipboard-write"],
    reducedMotion: "reduce",
  });
  const page = await context.newPage();
  const errors = [];
  page.on("pageerror", (error) => errors.push(error.message));
  await mkdir("tmp/qa", { recursive: true });
  for (const width of [320, 768, 1024, 1440]) {
    await page.setViewportSize({ width, height: 960 });
    await page.goto("http://127.0.0.1:5173/", { waitUntil: "networkidle" });
    await page.evaluate(() => document.fonts.ready);
    assert.equal(await page.locator("h1").count(), 1);
    assert.equal(
      await page.evaluate(
        () => document.documentElement.scrollWidth > innerWidth,
      ),
      false,
      `Overflow at ${width}`,
    );
    const accessibility = await new AxeBuilder({ page })
      .withTags(["wcag2a", "wcag2aa", "wcag21aa"])
      .analyze();
    assert.deepEqual(
      accessibility.violations.map((v) => ({
        id: v.id,
        nodes: v.nodes.map((n) => n.target),
      })),
      [],
      `Accessibility at ${width}`,
    );
    await page.screenshot({
      path: `tmp/qa/website-${width}.png`,
      fullPage: true,
    });
  }
  await page.keyboard.press("Tab");
  assert.equal(
    await page
      .locator(".skip-link")
      .evaluate((el) => el === document.activeElement),
    true,
  );
  await page.keyboard.press("Enter");
  assert.equal(new URL(page.url()).hash, "#main");
  await page.locator(".scroll-link").click();
  assert.equal(new URL(page.url()).hash, "#education");
  assert.equal(
    await page.locator(".email-link").getAttribute("href"),
    "mailto:alikhan.skyranger@gmail.com",
  );
  await page.getByRole("button", { name: "Copy email" }).click();
  assert.equal(
    await page.evaluate(() => navigator.clipboard.readText()),
    "alikhan.skyranger@gmail.com",
  );
  assert.equal(await page.getByRole("status").textContent(), "Email copied.");
  const downloadEvent = page.waitForEvent("download");
  await page.locator(".hero-actions a[download]").click();
  const download = await downloadEvent;
  assert.equal(download.suggestedFilename(), "Alikhan-Abay-CV.pdf");
  const response = await page.request.get(
    "http://127.0.0.1:5173/Alikhan-Abay-CV.pdf",
  );
  assert.equal(response.status(), 200);
  assert.equal((await response.body()).subarray(0, 4).toString(), "%PDF");
  assert.deepEqual(errors, []);
  console.log(
    "Passed: four responsive widths, WCAG AA scan, keyboard navigation, anchor navigation, email copy, PDF download, and no runtime errors.",
  );
} finally {
  await browser.close();
}

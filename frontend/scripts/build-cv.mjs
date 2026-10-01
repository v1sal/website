import { chromium } from "@playwright/test";
import { resolve } from "node:path";
import { pathToFileURL } from "node:url";
import { mkdir, readFile, writeFile } from "node:fs/promises";
import { createCanvas } from "@napi-rs/canvas";
import { getDocument } from "pdfjs-dist/legacy/build/pdf.mjs";

const browser = await chromium.launch({ channel: "chrome", headless: true });
try {
  const page = await browser.newPage();
  await page.goto(pathToFileURL(resolve("scripts/cv.html")).href);
  await page.pdf({
    path: "public/Alikhan-Abay-CV.pdf",
    format: "A4",
    printBackground: true,
    preferCSSPageSize: true,
  });
} finally {
  await browser.close();
}
await mkdir("tmp/qa", { recursive: true });
const pdf = await getDocument({
  data: new Uint8Array(await readFile("public/Alikhan-Abay-CV.pdf")),
  useSystemFonts: true,
}).promise;
if (pdf.numPages !== 1)
  throw new Error(`Expected one-page CV, received ${pdf.numPages} pages`);
const page = await pdf.getPage(1);
const viewport = page.getViewport({ scale: 1.7 });
const canvas = createCanvas(
  Math.ceil(viewport.width),
  Math.ceil(viewport.height),
);
await page.render({ canvasContext: canvas.getContext("2d"), viewport }).promise;
await writeFile("tmp/qa/cv.png", canvas.toBuffer("image/png"));
const text = (await page.getTextContent()).items
  .map((item) => item.str)
  .join(" ");
for (const expected of [
  "Alikhan Abay",
  "PGL Astana",
  "IELTS 7.0",
  "alikhan.skyranger@gmail.com",
]) {
  if (!text.includes(expected)) throw new Error(`PDF missing ${expected}`);
}
console.log("Created and rendered one-page CV; text verification passed.");

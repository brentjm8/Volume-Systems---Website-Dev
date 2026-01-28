const { createCanvas } = require("canvas");
const fs = require("fs");
const path = require("path");

// Image dimensions
const WIDTH = 1200;
const HEIGHT = 630;

// Colors
const BG_PRIMARY = "#0A0A0A";
const TEXT_PRIMARY = "#EDEDED";
const TEXT_SECONDARY = "#888888";
const ACCENT = "#5B8A9A";

// Create canvas
const canvas = createCanvas(WIDTH, HEIGHT);
const ctx = canvas.getContext("2d");

// Fill background
ctx.fillStyle = BG_PRIMARY;
ctx.fillRect(0, 0, WIDTH, HEIGHT);

// Add noise/grain overlay
const imageData = ctx.getImageData(0, 0, WIDTH, HEIGHT);
const data = imageData.data;
for (let i = 0; i < data.length; i += 4) {
  const noise = (Math.random() - 0.5) * 15; // Subtle noise
  data[i] = Math.min(255, Math.max(0, data[i] + noise));
  data[i + 1] = Math.min(255, Math.max(0, data[i + 1] + noise));
  data[i + 2] = Math.min(255, Math.max(0, data[i + 2] + noise));
}
ctx.putImageData(imageData, 0, 0);

// Draw dial rings in bottom-right corner (subtle, ~10% opacity)
ctx.strokeStyle = `rgba(255, 255, 255, 0.08)`;
ctx.lineWidth = 1;
const ringOriginX = WIDTH + 100;
const ringOriginY = HEIGHT + 100;
const ringCount = 8;
const ringSpacing = 60;
const startRadius = 80;

for (let i = 0; i < ringCount; i++) {
  const radius = startRadius + i * ringSpacing;
  ctx.beginPath();
  ctx.arc(ringOriginX, ringOriginY, radius, 0, Math.PI * 2);
  ctx.stroke();
}

// Draw "VOLUME" wordmark
ctx.fillStyle = TEXT_PRIMARY;
ctx.font = "700 120px Inter, -apple-system, BlinkMacSystemFont, sans-serif";
ctx.textAlign = "center";
ctx.textBaseline = "middle";
ctx.letterSpacing = "-0.02em";

// Draw with tight tracking (manual letter spacing since canvas doesn't support letterSpacing well)
const wordmark = "VOLUME";
const letterSpacing = -4; // Tight tracking for larger size
let totalWidth = 0;
for (const char of wordmark) {
  totalWidth += ctx.measureText(char).width + letterSpacing;
}
totalWidth -= letterSpacing; // Remove last spacing

let x = (WIDTH - totalWidth) / 2;
const y = HEIGHT / 2 - 40; // Position wordmark above center

for (let i = 0; i < wordmark.length; i++) {
  const char = wordmark[i];
  ctx.fillText(char, x + ctx.measureText(char).width / 2, y);
  x += ctx.measureText(char).width + letterSpacing;
}

// Draw subline (48px spacing from wordmark baseline)
ctx.fillStyle = TEXT_SECONDARY;
ctx.font = "400 36px Inter, -apple-system, BlinkMacSystemFont, sans-serif";
ctx.textAlign = "center";
ctx.fillText("AI-Powered Products & Business Systems", WIDTH / 2, HEIGHT / 2 + 55);

// Ensure public directory exists
const publicDir = path.join(__dirname, "..", "public");
if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir, { recursive: true });
}

// Save as PNG
const buffer = canvas.toBuffer("image/png");
fs.writeFileSync(path.join(publicDir, "og-image.png"), buffer);

console.log("OG image generated at public/og-image.png");

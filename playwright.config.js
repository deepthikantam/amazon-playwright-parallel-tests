const { defineConfig } = require('@playwright/test');

module.exports = defineConfig({
  fullyParallel: true,
  workers: 2,
  timeout: 60000,

  use: {
    headless: false,
    viewport: { width: 1280, height: 720 },
    userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)',
  }
});
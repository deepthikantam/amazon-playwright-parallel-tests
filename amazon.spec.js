const { test } = require('@playwright/test');

test.describe.configure({ mode: 'parallel' });

async function runTest(page, searchText) {

  console.log(`🚀 Running ${searchText}`);

  // 👉 Use amazon.com
  await page.goto(`https://www.amazon.com/s?k=${encodeURIComponent(searchText)}`, {
    waitUntil: 'domcontentloaded'
  });

  // wait for results
  await page.waitForSelector('[data-component-type="s-search-result"]', {
    timeout: 20000
  });

  const firstProduct = page.locator('[data-component-type="s-search-result"]').first();

  // 👉 Get price from results
  const price = await firstProduct.locator('.a-price .a-offscreen').first().textContent();

  // 👉 Try add to cart (available sometimes)
  const addBtn = firstProduct.locator('input[name="submit.add-to-cart"]');

  if (await addBtn.isVisible().catch(() => false)) {
    await addBtn.click();
    console.log(`🛒 Added ${searchText} to cart`);
  } else {
    console.log(`⚠️ Add to cart not available`);
  }

  console.log(`💰 ${searchText} Price: ${price}`);
}


// Test Case 1
test('Test Case 1 - iPhone', async ({ page }) => {
  await runTest(page, 'iPhone');
});

// Test Case 2
test('Test Case 2 - Galaxy', async ({ page }) => {
  await runTest(page, 'Samsung Galaxy');
});
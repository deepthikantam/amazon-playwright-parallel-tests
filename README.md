# Amazon Automation Tests (Playwright)

##  Overview

This project demonstrates automated UI testing of Amazon.com using Playwright with parallel execution.

The automation covers:

* Searching for products (iPhone & Samsung Galaxy)
* Extracting product price
* Attempting to add product to cart
* Running tests in parallel for faster execution

---

## ⚙️ Tech Stack

* Node.js
* Playwright (JavaScript)

---

## 🚀 Setup

Install dependencies:

```bash
npm install
npx playwright install
```

---

## ▶️ Run Tests

```bash
npx playwright test
```

Run in headed mode (visible browser):

```bash
npx playwright test --headed
```

---

## 🔄 Features

* 🔍 Search iPhone and Samsung Galaxy
* 💰 Extract product price from search results
* 🛒 Conditional add-to-cart handling
* ⚡ Parallel execution using Playwright workers
* 🧪 Stable selectors to handle dynamic Amazon UI

---

## 🧠 Approach

Amazon product pages are dynamic and often require variant selection (size, color, storage), which can cause flaky automation.

To ensure stability:

* Price is extracted from the search results page
* Add-to-cart is handled conditionally
* Parallel execution is implemented using isolated browser contexts

---

## 📊 Sample Output

```
🚀 Running iPhone
🚀 Running Samsung Galaxy
💰 iPhone Price: $799.99
💰 Samsung Galaxy Price: $699.99
```

---

## ⚠️ Notes

* Add-to-cart may not always be available directly from search results.
* The script handles such cases gracefully without failing.
* Designed for stability and reliability over UI complexity.

---

## Author

Deepthi Kantam

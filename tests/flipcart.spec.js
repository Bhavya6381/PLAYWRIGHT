const { test, expect } = require('@playwright/test');

test('Verify iPhone price Low to High', async ({ page }) => {

    await page.goto('https://www.flipkart.com/');

    // Search iPhone
    await page.locator("//input[@name='q']").fill('iPhone');
    await page.locator("//button[@type='submit']").click();

    // Click Low to High
    await page.locator("//div[text()='Price -- Low to High']").click();

    await page.waitForTimeout(3000);

    // Get prices
    let prices = await page.locator("//div[contains(text(),'₹')]").allInnerTexts();

    let amount = prices.map(p => Number(p.replace(/[₹,]/g, '').trim()))
                       .filter(p => !isNaN(p) && p > 0);

    console.log(amount);

    // Verify Low to High
    for (let i = 0; i < amount.length - 1; i++) {
        expect(amount[i]).toBeLessThanOrEqual(amount[i + 1]);
    }

    console.log("Price Low to High Verified Successfully");

});
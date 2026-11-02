const { test, expect } = require('@playwright/test');

test('Add 2 items and verify price', async ({ page }) => {

    await page.goto('https://rahulshettyacademy.com/seleniumPractise/');

    
    await page.locator("//h4[text()='Cucumber - 1 Kg']/following-sibling::div/button").click();

    
    await page.locator("//h4[text()='Brocolli - 1 Kg']/following-sibling::div/button").click();

    
    const price1 = await page.locator("//h4[text()='Cucumber - 1 Kg']/following-sibling::p").innerText();
    const price2 = await page.locator("//h4[text()='Brocolli - 1 Kg']/following-sibling::p").innerText();

    console.log("Cucumber Price:", price1);
    console.log("Brocolli Price:", price2);

    
    await page.locator("//img[@alt='Cart']").click();

    
    const total = await page.locator("//strong[@class='amount']").innerText();

    console.log("Total Price:", total);

    expect(Number(total)).toBe(Number(price1) + Number(price2));

});
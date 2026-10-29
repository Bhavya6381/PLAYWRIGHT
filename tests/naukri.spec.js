import { test } from '@playwright/test';

test('verify job categories functionality', async ({ page }) => {


await page.goto("https://www.naukri.com/registration/createAccount?othersrcp=571&wExp=N&srcTemplate=registerfree468x60&utm_source=google&utm_medium=cpc&utm_campaign=Brand_Login_Register&gclsrc=aw.ds&gad_source=1&gad_campaignid=19863995494&gbraid=0AAAAADLp3cEAMJFJprMbPdTDYONEX30TX&gclid=CjwKCAjwirLWBhBBEiwAlItbEolZJ-V945sQfYP2ZUlBHT8mqL9HazQBg-VnteuNemwLOtPkIZZvCBoCObYQAvD_BwE")

await page.locator("//input[@placeholder='What is your name?']").fill('bhavya')

await page.locator("//input[@placeholder='Tell us your Email ID']").fill("abcd@ges.com")

await page.locator('//input[@placeholder="(Minimum 6 characters)"]').fill("abcd@123")

await page.locator('//input[@type="tel"]').fill("8123779076")

await page.locator('//button[@class="submitbtn resman-btn-primary resman-btn-regular resman-btn-disabled"]').click()



})
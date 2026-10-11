import { test, expect } from '@playwright/test';

test('verify test login with valid credentials with practice', async ({ page }) => {


await page .goto("https://practicetestautomation.com/practice-test-login/")

await page.locator('//input[@name="username"]').fill("student")

await page.locator('//input[@name="password"]').fill("Password123")

await page.locator('//button[@id="submit"]').click()
})
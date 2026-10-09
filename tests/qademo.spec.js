import { test, expect } from '@playwright/test';
import details from "../test data/demoqa.json"
test('verify login with valid credentials ', async ({ page }) => {


await page .goto("https://demoqa.com/text-box")

await page.getByRole('textbox', { name: 'Full Name' }).fill(details.fullname)

await page.getByRole('textbox', { name: 'name@example.com' }).fill(details.email)

await page.getByRole('textbox', { name: 'Current Address' }).fill(details.currentadress)

await page.locator('#permanentAddress').fill(details.permentadress)

await page.getByRole('button', { name: 'Submit' }).click()






})
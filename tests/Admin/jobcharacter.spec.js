import { test, expect } from '@playwright/test';

test('verify login with valid credentials ', async ({ page }) => {


    await page .goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

await page.getByRole('textbox', { name: 'Username' }).fill('admin');

 await page.getByPlaceholder('Password').fill('admin123');
 await page.getByRole('button', { name: 'Login' }).click();

await page.getByRole('link', { name: 'Admin' }).click();

await page.getByText('Job', { exact: true }).click();

await page.locator("//body").click();

await page.getByRole('button', { name: 'Add' }).click();

await page.getByRole('textbox').nth(1).fill('fghkje');

await page.getByRole('button', { name: 'Save' }).click();





});
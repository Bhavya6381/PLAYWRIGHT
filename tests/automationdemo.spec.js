import { test } from '@playwright/test';

test('verify registration with valid credentials', async ({ page }) => {


  await page.goto('https://demo.automationtesting.in/Register.html');
  await page.getByRole('textbox', { name: 'First Name' }).fill('Sangeetha');
  await page.getByRole('textbox', { name: 'Last Name' }).fill('M');
  await page.locator('textarea').fill('Bengaluru');
  await page.locator('input[type="email"]').fill('xyz@gmail.com');
  await page.locator('input[type="tel"]').fill('0838269408');
  await page.locator('input[value="male"]').check();
  await page.locator('#checkbox1').check();
 await page.locator('#msdd').click();
  await page.locator('.ui-menu-item').filter({ hasText: 'English' }).click();
 await page.locator('#Skills').selectOption('Java');
  await page.locator('#countries').selectOption({ label: 'India' });
  await page.locator('#yearbox').selectOption('2005');
  await page.locator('#monthbox').selectOption('June');
  await page.locator('#daybox').selectOption('15');
  await page.locator('#firstpassword').fill('123547');
  await page.locator('#secondpassword').fill('123547');
  await page.getByRole('button', { name: 'Submit' }).click();
});






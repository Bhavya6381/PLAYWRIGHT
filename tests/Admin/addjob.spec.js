import { test, expect } from '@playwright/test';

import logindata from "../../test data/login.json"
import { faker } from '@faker-js/faker';

test('test', async ({ page }) => {
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  await page.getByRole('textbox', { name: 'Username' }).fill(logindata.username);
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill(logindata.password);
  await page.getByRole('button', { name: 'Login' }).click();
  await page.getByRole('link', { name: 'Admin' }).click();
  await page.getByRole('listitem').filter({ hasText: 'Job' }).locator('i').click();
  await page.getByRole('listitem').filter({ hasText: /^Job Titles$/ }).click();
  await page.getByRole('button', { name: ' Add' }).click();
  await page.getByRole('textbox').nth(1).click();

  const data1 = new Date()
  await page.getByRole('textbox').nth(1).fill(faker.person.jobTitle());
  await page.getByRole('button', { name: 'Save' }).click();
});
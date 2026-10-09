import { test, expect } from '@playwright/test';

import { faker } from '@faker-js/faker';

const logStep = (message) => {
  console.log(`[${new Date().toISOString()}] ${message}`);
};


test('verify admin can add job title', async ({ page }) => {
  logStep('Opening login page');
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

  logStep('Entering username');
  await page.getByRole('textbox', { name: 'Username' }).click();
  await page.getByRole('textbox', { name: 'Username' }).fill('Admin');

  logStep('Entering password');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('admin123');

  logStep('Clicking login button');
  await page.getByRole('button', { name: 'Login' }).click();

  logStep('Navigating to dashboard');
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index');

  logStep('Verifying dashboard is visible');
  await expect(page.getByText('Time at Work',{ exact:false})).toBeVisible();

  logStep('Opening Admin module');
 //await page.getByRole('link', { name: 'Admin' }).click();

  logStep('Opening system users page');
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/admin/viewSystemUsers');

  logStep('Opening Job menu');
  await page.getByRole('listitem').filter({ hasText: 'Job' }).click();

  logStep('Selecting Job Titles');
  await page.getByRole('menuitem', { name: 'Job Titles' }).click();

  logStep('Clicking Add button');
  await page.getByRole('button', { name: ' Add' }).click();

  logStep('Entering job title');
  await page.getByRole('textbox').nth(1).click();
  await page.getByRole('textbox').nth(1).press('CapsLock');

  const data = new Date()

  const randomString = Math.random().toString(36).substring(2, 7);

  await page.getByRole('textbox').nth(1).fill(faker.person.jobTitle());

  logStep('Entering job description');
  await page.getByRole('textbox', { name: 'Type description here' }).click();
  await page.getByRole('textbox', { name: 'Type description here' }).press('CapsLock');
  await page.getByRole('textbox', { name: 'Type description here' }).fill('authomation testing');

  logStep('Entering job notes');
  await page.getByRole('textbox', { name: 'Add note' }).click();
  await page.getByRole('textbox', { name: 'Add note' }).fill('authomation notes');

  logStep('Saving job title');
  await page.getByRole('button', { name: 'Save' }).click();

  logStep('Navigating to Job title list page');
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/admin/viewJobTitleList');
});


test('test', async ({ page }) => {
  logStep('Opening login page');
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

  logStep('Entering username');
  await page.getByRole('textbox', { name: 'Username' }).fill('admin');

  logStep('Entering password');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('admin123');

  logStep('Clicking login button');
  await page.getByRole('button', { name: 'Login' }).click();

  logStep('Navigating to dashboard');
  await page.waitForURL('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index');

  logStep('Verifying dashboard is visible');
  await expect(page.getByText('Time at Work',{ exact:false })).toBeVisible();

  logStep('Opening Admin module');
  await page.getByRole('link', { name: 'Admin' }).click();

  logStep('Opening system users page');
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/admin/viewSystemUsers');

  logStep('Opening Job menu');
  await page.getByRole('listitem').filter({ hasText: 'Job' }).click();

  logStep('Selecting Employment Status');
  await page.getByRole('listitem').filter({ hasText: /^Employment Status$/ }).click();

  logStep('Clicking Add button');
  await page.getByRole('button', { name: ' Add' }).click();

  logStep('Entering employment status');
  await page.locator('form').getByRole('textbox').click();
  await page.locator('form').getByRole('textbox').fill('full time perment');

  logStep('Saving employment status');
  await page.getByRole('button', { name: 'Save' }).click();

  logStep('Navigating to employment status page');
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/admin/employmentStatus');

  logStep('Verifying employment status page loads');
  await expect(page.getByRole('heading', { name: 'Employment Status' })).toBeVisible();
});
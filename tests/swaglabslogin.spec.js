import { test, expect } from '@playwright/test';

import swagdata from "../test data/swaglab.json";



test('verify login with valid crendentials', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');
  await page.locator('[data-test="username"]').click();
  await page.locator('[data-test="username"]').fill(swagdata.standard);
  await page.locator('[data-test="password"]').click();
  await page.locator('[data-test="password"]').fill(swagdata.password);
  await page.locator('[data-test="login-button"]').click();
  await expect(page.locator('[data-test="title"]')).toBeVisible();
  await expect(page.getByRole('button', { name: 'Open Menu' })).toBeVisible();
});
test('verify login with valid username with valid password', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');
  await page.locator('[data-test="username"]').click();
  await page.locator('[data-test="username"]').fill(swagdata.lockedout);
  await page.locator('[data-test="password"]').click();
  await page.locator('[data-test="password"]').fill(swagdata.password);
  await page.locator('[data-test="login-button"]').click();
  await expect(page.locator('[data-test="error"]')).toBeVisible();
});

test('verify login with problem user with valid password', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');
  await page.locator('[data-test="username"]').click();
  await page.locator('[data-test="username"]').fill(swagdata.problem);
  await page.locator('[data-test="password"]').click();
  await page.locator('[data-test="password"]').fill(swagdata.password);
  await page.locator('[data-test="login-button"]').click();
  await expect(page.getByRole('button', { name: 'Open Menu' })).toBeVisible();
});

test('verify login with performance glitch user with valid password', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');
  await page.locator('[data-test="username"]').click();
  await page.locator('[data-test="username"]').fill(swagdata.performance);
  await page.locator('[data-test="password"]').click();
  await page.locator('[data-test="password"]').fill(swagdata.password);
  await page.locator('[data-test="login-button"]').click();
  await expect(page.locator('[data-test="product-sort-container"]')).toBeVisible();
});

test('verify login with error user username with valid password', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');
  await page.locator('[data-test="username"]').click();
  await page.locator('[data-test="username"]').fill(swagdata.error);
  await page.locator('[data-test="password"]').click();
  await page.locator('[data-test="password"]').fill(swagdata.password);
  await page.locator('[data-test="login-button"]').click();
  await expect(page.locator('[data-test="title"]')).toBeVisible();
});

test('verify login with visual user username with valid password', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');
  await page.locator('[data-test="username"]').click();
  await page.locator('[data-test="username"]').fill(swagdata.visitors);
  await page.locator('[data-test="password"]').click();
  await page.locator('[data-test="password"]').fill(swagdata.password);
  await page.locator('[data-test="login-button"]').click();


});

test('verify login with invalid username with valid password', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');
  await page.locator('[data-test="username"]').click();
  await page.locator('[data-test="username"]').fill('jkadwe');
  await page.locator('[data-test="password"]').click();
  await page.locator('[data-test="password"]').fill(swagdata.password);
  await page.locator('[data-test="login-button"]').click();
  await expect(page.locator('[data-test="error"]')).toBeVisible();
});
test('verify login with invalid username with secret sauce password', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');
  await page.locator('[data-test="username"]').click();
  await page.locator('[data-test="username"]').fill('jhujg');
  await page.locator('[data-test="password"]').click();
  await page.locator('[data-test="password"]').fill(swagdata.password);
  await page.locator('[data-test="login-button"]').click();
  await expect(page.locator('[data-test="error"]')).toBeVisible();
});
test('verify login with valid username with invalid password', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');
  await page.locator('[data-test="username"]').click();
  await page.locator('[data-test="username"]').fill('problem_user');
  await page.locator('[data-test="password"]').click();
  await page.locator('[data-test="password"]').fill('kejqfgwekgflw');
  await page.locator('[data-test="login-button"]').click();
  await expect(page.locator('[data-test="error"]')).toBeVisible();
});


test('verify login with black feild', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');
  await page.locator('[data-test="login-button"]').click();
  await expect(page.locator('[data-test="error"]')).toBeVisible();
});

test('verify login with invalid password and invalid password', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');
  await page.locator('[data-test="username"]').click();
  await page.locator('[data-test="username"]').fill('jkedlwe');
  await page.locator('[data-test="password"]').click();
  await page.locator('[data-test="password"]').fill('uegriewu');
  await page.locator('[data-test="login-button"]').click();
  await expect(page.locator('[data-test="error"]')).toBeVisible();
});
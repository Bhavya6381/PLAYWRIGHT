import { test, expect } from '@playwright/test';
import { faker } from '@faker-js/faker';

test('fill Namecheap signup form with generated user data', async ({ page }) => {
  const firstName = faker.person.firstName();
  const lastName = faker.person.lastName();
  const signup = {
    firstName,
    lastName,
    email: faker.internet.email({ firstName, lastName, provider: 'example.com' }).toLowerCase(),
    username: `qa${faker.string.alphanumeric(10).toLowerCase()}`,
    password: `Nc!${faker.string.alphanumeric(12)}9a`,
  };

  await page.goto('https://www.namecheap.com/myaccount/signup/');
  await page.getByPlaceholder('Enter first name').fill(signup.firstName);
  await page.getByPlaceholder('Enter last name').fill(signup.lastName);
  await page.getByPlaceholder('Enter email address').fill(signup.email);
  await page.getByPlaceholder('Enter username').fill(signup.username);
  await page.getByPlaceholder('Enter password', { exact: true }).fill(signup.password);
  await page.getByPlaceholder('Enter password again').fill(signup.password);

  await expect(page.getByPlaceholder('Enter first name')).toHaveValue(signup.firstName);
  await expect(page.getByPlaceholder('Enter last name')).toHaveValue(signup.lastName);
  await expect(page.getByPlaceholder('Enter email address')).toHaveValue(signup.email);
  await expect(page.getByPlaceholder('Enter username')).toHaveValue(signup.username);
  await expect(page.getByPlaceholder('Enter password', { exact: true })).toHaveValue(signup.password);
  await expect(page.getByPlaceholder('Enter password again')).toHaveValue(signup.password);

  if (process.env.NAMECHEAP_SUBMIT === 'true') {
    await page.getByRole('button', { name: 'Create account & continue' }).click();
  }
});
const { test, expect } = require('../Fixtures/testFixture');
const testData = require('../test-data/TestData.json');
const { login } = require('../Utils/LoginUtils');

test('OrangeHRM Login', async ({ page, loginPage }) => {

    await page.goto('/');

    await login(loginPage, testData);

    await expect(page).toHaveURL(/dashboard/);

});
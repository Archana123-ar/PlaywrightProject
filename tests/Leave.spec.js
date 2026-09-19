const {
    test,
    expect
} = require('../Fixtures/testFixture');

const testData =
    require('../test-data/TestData.json');

const {
    login
} = require('../Utils/LoginUtils');


test(
    'Verify Leave page heading',
    async ({
        page,
        loginPage,
        leavePage
    }) => {

        // Open application
        await page.goto('/');

        // Login
        await login(
            loginPage,
            testData
        );

        // Open Leave page
        await leavePage.openLeave();

        // Verify Leave heading
        await expect(
            leavePage.getHeading()
        ).toBeVisible();

    }
);
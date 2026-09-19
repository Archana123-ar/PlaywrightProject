const base =
    require('@playwright/test');

const {
    LoginPage
} = require('../pages/LoginPage');

const {
    AddEmp
} = require('../pages/AddEmp');

const {
    LeavePage
} = require('../pages/LeavePage');

const {
    takeScreenshot
} = require('../utils/ScreenshotUtils');


const test = base.test.extend({

    loginPage: async ({ page }, use) => {

        const loginPage =
            new LoginPage(page);

        await use(loginPage);
    },


    addEmployeePage: async ({ page }, use) => {

        const addEmployeePage =
            new AddEmp(page);

        await use(addEmployeePage);
    },


    leavePage: async ({ page }, use) => {

        const leavePage =
            new LeavePage(page);

        await use(leavePage);
    }

});


test.afterEach(async ({ page }, testInfo) => {

    if (
        testInfo.status !==
        testInfo.expectedStatus
    ) {

        const safeName =
            testInfo.title.replace(
                /[^a-zA-Z0-9]/g,
                '_'
            );

        await takeScreenshot(
            page,
            safeName
        );
    }
});


module.exports = {
    test,
    expect: base.expect
};
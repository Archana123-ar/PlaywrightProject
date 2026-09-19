async function login(loginPage, testData) {
async function login(loginPage, testData) {

    await loginPage.login(
        testData.login.username,
        testData.login.password
    );

}

module.exports = { login };
    await loginPage.login(
        testData.login.username,
        testData.login.password
    );

}

module.exports = { login };
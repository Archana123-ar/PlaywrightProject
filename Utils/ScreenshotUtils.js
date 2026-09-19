const path = require('path');

async function takeScreenshot(page, name) {

    const screenshotPath = path.join(
        'test-results',
        'screenshots',
        `${name}.png`
    );

    await page.screenshot({
        path: screenshotPath,
        fullPage: true
    });
}

module.exports = {
    takeScreenshot
};
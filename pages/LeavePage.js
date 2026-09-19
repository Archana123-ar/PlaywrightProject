class LeavePage {

    constructor(page) {
        this.page = page;

        this.leaveMenu =
            page.getByRole('link', {
                name: 'Leave'
            });

        this.leaveHeading =
            page.getByRole('heading', {
                name: 'Leave'
            });
    }

    async openLeave() {
        await this.leaveMenu.click();
    }

    getHeading() {
        return this.leaveHeading;
    }
}

module.exports = { LeavePage };
class AddEmp {
    constructor(page) {
        this.page = page;

        this.pimMenu = page.getByRole('link', { name: 'PIM' });
        this.addButton = page.getByRole('link', { name: 'Add Employee' });

        this.firstName = page.getByPlaceholder('First Name');
        this.middleName = page.getByPlaceholder('Middle Name');
        this.lastName = page.getByPlaceholder('Last Name');

        this.employeeId = page
            .locator('label:has-text("Employee Id")')
            .locator('..')
            .locator('input');

        this.saveButton = page.getByRole('button', { name: 'Save' });
    }

    async openAddEmployee() {
        await this.pimMenu.click();
        await this.addButton.click();

        await this.firstName.waitFor({ state: 'visible' });
    }

    async addEmployee(employee) {
        await this.firstName.fill(String(employee.FirstName));
        await this.middleName.fill(String(employee.MiddleName));
        await this.lastName.fill(String(employee.LastName));

        if (employee.EmployeeId) {
            await this.employeeId.fill(String(employee.EmployeeId));
        }

        await this.saveButton.click();
    }
}

module.exports = { AddEmp };
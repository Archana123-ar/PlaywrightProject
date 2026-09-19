const path = require('path');

const {
    test,
    expect
} = require('../Fixtures/testFixture');

const testData =
    require('../test-data/TestData.json');

const {
    login
} = require('../Utils/LoginUtils');

const {
    readExcelData
} = require('../Utils/Excelutils');


// Excel file path
const employeeFilePath =
    path.join(
        __dirname,
        '../test-data/emp.xlsx'
    );


test(
    'Add Employee using Excel data',
    async ({
        page,
        loginPage,
        addEmployeePage
    }) => {

        // Open application
        await page.goto('/');


        // Login
        await login(
            loginPage,
            testData
        );


        // Read employees from Excel
        const employees =
            await readExcelData(
                employeeFilePath,
                'Employees'
            );


        // Add each employee
        for (const employee of employees) {

            // Open Add Employee page
            await addEmployeePage.openAddEmployee();


            // Enter employee details and save
            await addEmployeePage.addEmployee(
                employee
            );


            // Verify successful save
            await expect(
                page.getByText(
                    'Successfully Saved',
                    {
                        exact: true
                    }
                )
            ).toBeVisible();
        }
    }
);
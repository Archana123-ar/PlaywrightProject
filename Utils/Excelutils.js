const ExcelJS = require('exceljs');

async function readExcelData(filePath, sheetName) {

    const workbook = new ExcelJS.Workbook();

    await workbook.xlsx.readFile(filePath);

    const worksheet =
        workbook.getWorksheet(sheetName);

    const data = [];
    const headers = [];

    worksheet.getRow(1).eachCell((cell) => {
        headers.push(cell.value);
    });

    worksheet.eachRow((row, rowNumber) => {

        if (rowNumber === 1) {
            return;
        }

        const rowData = {};

        row.eachCell((cell, columnNumber) => {

            rowData[
                headers[columnNumber - 1]
            ] = cell.value;

        });

        data.push(rowData);
    });

    return data;
}

module.exports = {
    readExcelData
};
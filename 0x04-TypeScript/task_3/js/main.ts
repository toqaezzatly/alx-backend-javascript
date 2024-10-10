/// <reference path="./crud.d.ts" />

import { RowID, RowElement } from './interface.js';
import * as CRUD from './crud.js';

// Create a row object
const row: RowElement = {
    firstName: 'Guillaume',
    lastName: 'Salva',
};

// Insert the row and store the new row ID
const newRowID: RowID = CRUD.insertRow(row);
console.log(`Inserted row ID: ${newRowID}`);

// Create an updated row with an age field
const updatedRow: RowElement = { ...row, age: 23 };

// Update the row
CRUD.updateRow(newRowID, updatedRow);
console.log(`Updated row with ID: ${newRowID}`);

// Delete the row
CRUD.deleteRow(newRowID);
console.log(`Deleted row with ID: ${newRowID}`);

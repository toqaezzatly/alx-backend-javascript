Here’s a `README.md` file summarizing all the tasks:

---

# ALX Backend TypeScript - Task Overview

## Table of Contents

- [Task 0: Director and Teacher Interfaces](#task-0-director-and-teacher-interfaces)
- [Task 1: Employee Creation](#task-1-employee-creation)
- [Task 2: isDirector and executeWork Functions](#task-2-isdirector-and-executework-functions)
- [Task 3: Database CRUD Operations](#task-3-database-crud-operations)
- [Task 4: Subject and Teacher Classes](#task-4-subject-and-teacher-classes)
- [Task 5: Major and Minor Credits](#task-5-major-and-minor-credits)

---

## Task 0: Director and Teacher Interfaces

In this task, we created two interfaces: `DirectorInterface` and `TeacherInterface`. Each interface contains three methods related to their respective roles:

- **DirectorInterface** methods:
  - `workFromHome()` returning a string.
  - `getCoffeeBreak()` returning a string.
  - `workDirectorTasks()` returning a string.

- **TeacherInterface** methods:
  - `workFromHome()` returning a string.
  - `getCoffeeBreak()` returning a string.
  - `workTeacherTasks()` returning a string.

We also implemented two classes, `Director` and `Teacher`, to implement these interfaces.

## Task 1: Employee Creation

We created a function `createEmployee(salary)` that returns either a `Director` or a `Teacher` based on the salary provided:
- If salary is a number and less than 500, it returns a `Teacher`.
- Otherwise, it returns a `Director`.

Example:
```typescript
console.log(createEmployee(200)); // Teacher
console.log(createEmployee(1000)); // Director
```

## Task 2: isDirector and executeWork Functions

We implemented two functions:

- **isDirector(employee)**: Type predicate to check if an employee is a `Director`.
- **executeWork(employee)**: Calls `workDirectorTasks()` if the employee is a `Director`, otherwise calls `workTeacherTasks()` if they are a `Teacher`.

Example:
```typescript
executeWork(createEmployee(200)); // Getting to work
executeWork(createEmployee(1000)); // Getting to director tasks
```

## Task 3: Database CRUD Operations

In this task, we created a system to handle basic database operations using TypeScript interfaces and a downloaded `crud.js` file. We defined:

- **RowID**: A type set to a number.
- **RowElement**: An interface containing `firstName`, `lastName`, and an optional `age` field.
  
We created an ambient declaration file (`crud.d.ts`) to define the types for the functions in `crud.js`.

Operations performed:
1. Insert a row and retrieve a generated ID.
2. Update a row with new information.
3. Delete a row based on the ID.

## Task 4: Subject and Teacher Classes

In this task, we defined a `Teacher` interface and multiple subjects (Cpp, React, Java) in a `Subjects` namespace:

- **Teacher Interface**:
  - `firstName`: string
  - `lastName`: string
  - Optional teaching experience attributes for Cpp, React, and Java.

We created classes for the subjects that extended a `Subject` class and provided specific methods for:
- Retrieving requirements (`getRequirements()`).
- Finding available teachers based on experience (`getAvailableTeacher()`).

We also exported constants for each subject and a `Teacher` object (`cTeacher`).

## Task 5: Major and Minor Credits

We defined two interfaces:
- **MajorCredits** with a `credits` property and a unique brand identifier.
- **MinorCredits** with a `credits` property and a unique brand identifier.

We also created functions to sum the credits:
- `sumMajorCredits(subject1: MajorCredits, subject2: MajorCredits): MajorCredits`
- `sumMinorCredits(subject1: MinorCredits, subject2: MinorCredits): MinorCredits`

These functions return the total number of credits for each subject.

---

## Running the Project

To run the project, follow these steps:

1. Install the dependencies:

   ```bash
   npm install
   ```

2. Build the project using webpack:

   ```bash
   npm run build
   ```

## Conclusion

This project demonstrates how to structure TypeScript projects using interfaces, classes, namespaces, and ambient declaration files. It also illustrates how to implement basic CRUD operations and function overloading, as well as manage major and minor credits using TypeScript.

---


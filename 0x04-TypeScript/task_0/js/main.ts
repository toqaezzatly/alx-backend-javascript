interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string
}

const student1 : Student = {
    firstName: "Alice",
    lastName: "Smith",
    age: 22,
    location: "New York"
};
const student2: Student = {
    firstName: "Bob",
    lastName: "Johnson",
    age: 24,
    location: "Los Angeles"
};

const studentsList: Student[] = [student1, student2];interface Teacher {
    readonly firstName: string;
    readonly lastName: string;
    fullTimeEmployee: boolean;
    yearsOfExperience?: number;
    location: string;
    [key: string]: any;  // allows additional properties
  }
  
  interface Directors extends Teacher {
    numberOfReports: number;
  }
  
  // Example usage:
  const director1: Directors = {
    firstName: 'John',
    lastName: 'Doe',
    location: 'London',
    fullTimeEmployee: true,
    numberOfReports: 17,
  };
  
  console.log(director1);
  // Define the interface for the printTeacher function
interface printTeacherFunction {
    (firstName: string, lastName: string): string;
  }
  
  // Implement the function
  const printTeacher: printTeacherFunction = (firstName, lastName) => {
    return `${firstName.charAt(0)}. ${lastName}`;
  };
  
  // Example usage
  console.log(printTeacher("John", "Doe"));  // Output: J. Doe
  interface StudentClassConstructor {
    new (firstName: string, lastName: string): StudentClassInterface;
  }
  interface StudentClassInterface {
    workOnHomework(): string;
    displayName(): string;
  }
  class StudentClass implements StudentClassInterface {
    constructor(public firstName: string, public lastName: string) {}
  
    workOnHomework(): string {
      return "Currently working";
    }
  
    displayName(): string {
      return this.firstName;
    }
  }
  
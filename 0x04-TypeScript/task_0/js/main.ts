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

const studentsList: Student[] = [student1, student2];
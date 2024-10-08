export default function updateStudentGradeByCity(students, city, newGrades) {
  // Filter students by the specified city
  return students
    .filter((student) => student.location === city) // Only keep students in the specified city
    .map((student) => {
      // Find the new grade for the student
      const gradeObj = newGrades.find((grade) => grade.studentId === student.id);

      // Return a new student object with the grade if available, otherwise set to 'N/A'
      return {
        ...student,
        grade: gradeObj ? gradeObj.grade : 'N/A', // If gradeObj exists, use grade, otherwise 'N/A'
      };
    });
}

export default function getListStudentIds(students) {
  if (!Array.isArray(student)) {
    return [];
  }

  return students.map((student) => student.id);
}

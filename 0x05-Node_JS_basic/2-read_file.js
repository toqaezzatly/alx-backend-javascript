const fs = require('fs');

function countStudents(path) {
  if (!fs.existsSync(path)) {
    throw new Error('Cannot load the database');
  }

  const content = fs.readFileSync(path, 'utf-8');
  const lines = content.split('\n');
  const students = lines.slice(1).filter((line) => line.trim().length > 0);

  console.log(`Number of students: ${students.length}`);

  const fields = {};
  students.forEach((student) => {
    const studentData = student.split(',');
    const field = studentData[3].trim();
    const firstname = studentData[0].trim();

    if (!fields[field]) {
      fields[field] = [];
    }
    fields[field].push(firstname);
  });

  for (const field in fields) {
    if (Object.prototype.hasOwnProperty.call(fields, field)) {
      console.log(`Number of students in ${field}: ${fields[field].length}. List: ${fields[field].join(', ')}`);
    }
  }
}

module.exports = countStudents;

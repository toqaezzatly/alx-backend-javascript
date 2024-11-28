const fs = require('fs');

/**
 * Counts the students in a CSV data file.
 * @param {string} path - The path to the CSV file.
 * @throws {Error} - If the file cannot be read.
 */
function countStudents(path) {
  try {
    const fileContent = fs.readFileSync(path, 'utf8');
    const lines = fileContent
      .toString()
      .trim()
      .split('\n');
    
    const students = lines
      .slice(1)
      .map(line => line.trim())
      .filter(line => line.length > 0);

    console.log(`Number of students: ${students.length}`);
    
    const fields = {};
    students.forEach((student) => {
      const [firstName, , , field] = student.split(',');
      fields[field] = fields[field] || [];
      fields[field].push(firstName);
    });

    for (const [field, list] of Object.entries(fields)) {
      console.log(`Number of students in ${field}: ${list.length}. List: ${list.join(', ')}`);
    }
  } catch (error) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
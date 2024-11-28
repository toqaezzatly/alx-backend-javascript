const fs = require('fs');

function countStudents(path) {
  try {
    // Read the file synchronously
    const data = fs.readFileSync(path, 'utf8');
    
    // Split file content into lines and filter out empty lines
    const lines = data.split('\n').filter((line) => line.trim() !== '');
    
    if (lines.length === 0) {
      throw new Error('Cannot load the database');
    }
    
    // Remove the header line
    const students = lines.slice(1);
    
    // Parse student information
    const fields = {};
    students.forEach((line) => {
      const [firstname, lastname, age, field] = line.split(',');
      if (firstname && field) {
        if (!fields[field]) {
          fields[field] = [];
        }
        fields[field].push(firstname);
      }
    });

    // Log total number of students
    console.log(`Number of students: ${students.length}`);
    
    // Log students by field
    for (const [field, names] of Object.entries(fields)) {
      console.log(
        `Number of students in ${field}: ${names.length}. List: ${names.join(', ')}`
      );
    }
  } catch (err) {
    // Handle errors, such as file not found or invalid file format
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;

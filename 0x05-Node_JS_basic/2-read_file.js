const fs = require('fs');

const countStudents = (path) => {
  if (!fs.existsSync(path)) {
    throw new Error('Cannot load the database');
  }
  if (!fs.statSync(path).isFile()) {
    throw new Error('Cannot load the database');
  }
  const dataLines = fs
    .readFileSync(path, 'utf-8')
    .toString('utf-8')
    .trim()
    .split('\n');
  const groupOfStudents = {};
  const dbRowNames = dataLines[0].split(',');
  const studentPropNames = dbRowNames.slice(0, dbRowNames.length - 1);

  for (const line of dataLines.slice(1)) {
    const studentRecord = line.split(',');
    const studentPropValues = studentRecord.slice(0, studentRecord.length - 1);
    const field = studentRecord[studentRecord.length - 1];
    if (!Object.keys(groupOfStudents).includes(field)) {
      groupOfStudents[field] = [];
    }
    const studentLists = studentPropNames
      .map((propName, idx) => [propName, studentPropValues[idx]]);
    groupOfStudents[field].push(Object.fromEntries(studentLists));
  }

  const totalStudents = Object
    .values(groupOfStudents)
    .reduce((pre, cur) => (pre || []).length + cur.length);
  console.log(`Number of students: ${totalStudents}`);
  for (const [field, group] of Object.entries(groupOfStudents)) {
    const studentNames = group.map((student) => student.firstname).join(', ');
    console.log(`Number of students in ${field}: ${group.length}. List: ${studentNames}`);
  }
};

module.exports = countStudents;

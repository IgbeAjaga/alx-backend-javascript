import fs from 'fs';

const readDatabase = (path) => new Promise((resolve, reject) => {
  if (!path) {
    reject(new Error('Cannot load the database'));
  }
  if (path) {
    fs.readFile(path, (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
      }
      if (data) {
        const dataLines = data
          .toString('utf-8')
          .trim()
          .split('\n');
        const groupOfStudents = {};
        const dbRowNames = dataLines[0].split(',');
        const studentPropNames = dbRowNames
          .slice(0, dbRowNames.length - 1);

        for (const line of dataLines.slice(1)) {
          const studentRecord = line.split(',');
          const studentPropValues = studentRecord
            .slice(0, studentRecord.length - 1);
          const field = studentRecord[studentRecord.length - 1];
          if (!Object.keys(groupOfStudents).includes(field)) {
            groupOfStudents[field] = [];
          }
          const studentLists = studentPropNames
            .map((propName, idx) => [propName, studentPropValues[idx]]);
          groupOfStudents[field].push(Object.fromEntries(studentLists));
        }
        resolve(groupOfStudents);
      }
    });
  }
});

export default readDatabase;
module.exports = readDatabase;

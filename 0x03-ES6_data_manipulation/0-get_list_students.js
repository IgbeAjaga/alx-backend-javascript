/**
 * Read a list of students' information.
 * @author Igbe Ajaga
 * @returns {{id: Number, firstName: String, location: String}[]}
 */
export default function getListStudents() {
  // This function retrieve a list of students.
  const studentList = [
    { id: 1, firstName: 'Guillaume', location: 'San Francisco' },
    { id: 2, firstName: 'James', location: 'Columbia' },
    { id: 5, firstName: 'Serena', location: 'San Francisco' },
  ];
  return studentList;
}

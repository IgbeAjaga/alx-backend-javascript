/**
 * Retrieve a list of students' IDs.
 * @author Igbe Ajaga
 * @param {Array} studentList - An array of student objects
 * @returns {number[]} - An array of student IDs
 */
export default function getListStudentIds(studentList) {
    if (!Array.isArray(studentList)) {
        return [];
    }
    
    return studentList.map(student => student.id);
}

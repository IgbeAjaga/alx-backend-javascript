/**
 * Retrieve a list of students' IDs.
 * @author Igbe Ajaga
 * @param {{
 *   id: Number,
 *   firstName: String,
 *   location: String
 * }[]} studentList - The list of students.
 * @param {String} city - The location.
 * @returns {number[]} - An array of student IDs
 */
export default function getListStudentIds(studentList) {
    if (studentList instanceof Array) {
        return studentList.map((student) => student.id);
    }
    
    return [];
}

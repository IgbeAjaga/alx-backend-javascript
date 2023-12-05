/**
 * Get students by location.
 * @author Igbe Ajaga
 * @param {Array} studentList - An array of student objects
 * @param {string} city - The city to filter students by
 * @returns {Object[]} - An array of student objects in the specified city
 */
export default function getStudentsByLocation(studentList, city) {
    if (!Array.isArray(studentList)) {
        return [];
    }

    return studentList.filter(student => student.location === city);
}

export default function createReportObject(employeesList) {
  const allEmployees = { ...employeesList };

  const getNumberOfDepartments = (employees) => {
    return Object.keys(employees).length;
  };

  return {
    allEmployees,
    getNumberOfDepartments: () => getNumberOfDepartments(allEmployees),
  };
}

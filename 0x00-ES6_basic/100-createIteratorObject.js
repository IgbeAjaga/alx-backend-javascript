export default function createIteratorObject(report) {
  const departments = Object.values(report.allEmployees);

  let index = 0;
  let employeeIndex = 0;

  return {
    next() {
      if (index >= departments.length) {
        return { done: true };
      }

      const employees = departments[index];
      if (employeeIndex >= employees.length) {
        employeeIndex = 0;
        index++;
        return this.next();
      }

      const result = { value: employees[employeeIndex], done: false };
      employeeIndex++;
      return result;
    },
    [Symbol.iterator]() {
      return this;
    },
  };
}

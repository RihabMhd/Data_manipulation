

function getFirstEmployeeFirstName(employees) {
  return employees[0].firstName;
}
console.log(getFirstEmployeeFirstName(employees));

function getLastEmployeeLastName(employees) {
  return employees[employees.length - 1].lastName
}
console.log(getLastEmployeeLastName(employees))

function getEmployeeDepartmentById(employees, id) {
  return employees.filter((emp) => emp.id === id)
}
console.log(getEmployeeDepartmentById(employees, 5))


function countEmployees(employees) {
  return employees.length
}

console.log(countEmployees(employees))

function hasInactiveEmployees(employees) {
  for (let i = 0; i < employees.length; i++) {
    if (!employees[i].isActive) {
      return true;
    }
  }
  return false;
}

console.log(hasInactiveEmployees(employees))

function calculateAverageAge(employees) {
  let total = employees.length;
  let somme = 0;
  for (let i = 0; i < total; i++) {
    somme += employees[i].age;
  }
  const average = somme / total;
  return average
}
console.log(calculateAverageAge(employees))

function getHighestPaidEmployee(employees) {
  let salary = employees[0].salary;
  let employee = employees[0]
  for (let i = 0; i < employees.length; i++) {
    if (salary < employees[i].salary) {
      salary = employees[i].salary
      employee = employees[i]
    }
  }
  return employee;
}
console.log(getHighestPaidEmployee(employees))

function countEmployeesInDepartment(employees, department) {
  let count = 0;
  for (let i = 0; i < employees.length; i++) {
    if (employees[i].department === department) {
      count += 1;
    }
  }
  return count
}
console.log(countEmployeesInDepartment(employees, "Développement"))

function hasEmployeesWithoutProjects(employees) {
  let isProjet = false;
  for (let i = 0; i < employees.length; i++) {
    if (employees[i].projects.length === 0) {
      isProjet = true
    }
  }
  return isProjet
}
console.log(hasEmployeesWithoutProjects(employees))
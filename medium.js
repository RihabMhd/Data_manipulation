// function countEnglishSpeakingEmployees(employees) {
//   let count = 0;
//   for (let i = 0; i < employees.length; i++) {
//     if (employees[i].languages.includes("English")) {
//       count += 1
//     }
//   }
//   return count
// }
// console.log(countEnglishSpeakingEmployees(employees))


// function getEmployeesByProject(employees, project) {
//   let array = [];
//   for (let i = 0; i < employees.length; i++) {
//     if (employees[i].projects.includes(project)) {
//       array.push(employees[i])
//     }
//   }
//   return array
// }
// console.log(getEmployeesByProject(employees, "Project Gamma"))


// function getEmployeesWithMoreThanTwoSkills(employees) {
//   let array = [];
//   for (let i = 0; i < employees.length; i++) {
//     if (employees[i].skills.length >= 2) {
//       array.push(employees[i])
//     }
//   }
//   return array
// }
// console.log(getEmployeesWithMoreThanTwoSkills(employees))


// function getEmployeesByLastNameInitial(employees, letter) {
//   let array = [];
//   for (let i = 0; i < employees.length; i++) {
//     if (employees[i].lastName[0] === letter) {
//       array.push(employees[i])
//     }
//   }
//   return array
// }
// console.log(getEmployeesByLastNameInitial(employees, 'L'))


// function calculateAverageSalaryByDepartment(employees) {
//   let depTotal={};
//   for (let i = 0; i < employees.length; i++) {
//     const depName = employees[i].department;
//     if(!depTotal[depName]){
//         depTotal[depName]={totalSalary:0,employeesNmbr:0}
//     }
//     depTotal[depName].totalSalary += employees[i].salary;
//     depTotal[depName].employeesNmbr += 1;
//   }
//   for(let x in depTotal){
//     const average= depTotal[x].totalSalary/depTotal[x].employeesNmbr;
//      console.log(average);
//   }
 

// }

// function getEmployeesJoinedAfterYear(employees, year) {
//   let array = [];
//   for (let i = 0; i < employees.length; i++) {
//     let yearEmp = new Date(employees[i].joinDate).getFullYear();
//     if (yearEmp > year) {
//       array.push(employees[i])
//     }
//   }
//   return array
// }
// console.log(getEmployeesJoinedAfterYear(employees, 2020))


// function getMultilingualEmployees(employees) {
//   let array = [];
//   for (let i = 0; i < employees.length; i++) {
//     if (employees[i].languages.length >= 2) {
//       array.push(employees[i])
//     }
//   }
//   return array
// }

// console.log(getMultilingualEmployees(employees))

// function getMostCommonSkill(employees) {
//   for (let i = 0; i < employees.length; i++) {
    
//   }
// }

const parentDiv = document.getElementById('employees-container');
const buttonDynamique = document.getElementById('add-skill-btn');
const containerDynamique = document.getElementById('skills-container');


const employeeForm = document.getElementById("employee-form");


function displayEmployee(employees) {
    const list = document.getElementById('employees-tbody');
    list.innerHTML = "";
    employees.forEach((emp) => {
        const tr = document.createElement('tr');
        tr.innerHTML = `<td>${emp.firstName}</td><td>${emp.lastName}</td>
        <td>${emp.department}</td><td>${emp.position}</td><td>${emp.salary}</td>
        <td>${emp.skills}</td><td>${emp.joinDate}</td><td>${emp.email}</td>
        <td>${emp.projects}</td><td>${emp.isActive}</td><td>${emp.languages}</td>`
        list.appendChild(tr);
    });
}
displayEmployee(employees)

function hideTable() {
    const hide = document.getElementById('hide');
    hide.addEventListener('click', () => {
        parentDiv.style.display = 'none';
    })
}

function showTable() {
    const show = document.getElementById('show');
    show.addEventListener('click', () => {
        parentDiv.style.display = 'block';
    })
}
showTable()
hideTable()

// function addBlockCompetence() {
//     buttonDynamique.addEventListener('click', () => {
//         const div = document.createElement('div');
//         div.innerHTML = `
//         <input type="text" id="skill" > 
//         <button onclick="this.parentElement.remove()">Remove</button>
//         `
//         containerDynamique.appendChild(div)
//     })

// }
// addBlockCompetence()


// function handleSubmit(e) {
//     e.preventDefault();

//     const newEmployee = {
//         id: new Date(),
//         firstName: document.getElementById('firstName').value.trim(),
//         lastName: document.getElementById('lastName').value.trim(),
//         age: document.getElementById('age').value.trim(),
//         department: document.getElementById('department').value.trim(),
//         skills:document.getElementById('skill').value.trim()
//     };

//     employees.push(newEmployee);

//     displayEmployee(employees);

// }
function getSkills() {
    let skillsArray = [];
    const skills = document.querySelectorAll('.skill')
    skills.forEach((skill) => {
        skillsArray.push(skill.value)
    })
    return skillsArray
}

function formHandling() {

    buttonDynamique.addEventListener('click', () => {
        const div = document.createElement('div');
        div.innerHTML = `
            <input type="text" class="skill" > 
            <button onclick="this.parentElement.remove()">Remove</button>
            `
        containerDynamique.appendChild(div)
    })
    employeeForm.addEventListener('submit', (e) => {
        e.preventDefault()
        const newEmployee = {
            id: new Date(),
            firstName: document.getElementById('firstName').value.trim(),
            lastName: document.getElementById('lastName').value.trim(),
            age: document.getElementById('age').value.trim(),
            department: document.getElementById('department').value.trim(),
            skills: getSkills()
        };
        if (!validation()) return;


        employees.push(newEmployee);

        displayEmployee(employees);
    })
}
formHandling()

function validation() {
    let isValid = true;
    const firstName = document.getElementById('firstName').value.trim();
    const lastName = document.getElementById('lastName').value.trim();
    const age = document.getElementById('age').value.trim();
    const firstNameError = document.getElementById('firstName-error');
    const lastNameError = document.getElementById('lastName-error');
    const ageError = document.getElementById('age-error');
    const nameRegex = /^[a-zA-Z]{3,}$/;
    const ageRegex = /^[2-5]|(60)$/
    if (!nameRegex.test(firstName)) {
        firstNameError.classList.remove('hidden');
        firstNameError.textContent = 'Enter a Valid Name';
        isValid = false;
    } else {
        firstNameError.classList.add('hidden');
        firstNameError.textContent = '';
        isValid = true;
    }

    if (!nameRegex.test(lastName)) {
        lastNameError.classList.remove('hidden');
        lastNameError.textContent = 'Enter a Valid Name';
        isValid = false;
    } else {
        lastNameError.classList.add('hidden');
        lastNameError.textContent = '';
        isValid = true;
    }

    if (!ageRegex.test(age)) {
        ageError.classList.remove('hidden');
        ageError.textContent = 'Enter a Valid Age';
        isValid = false;
    } else {
        ageError.classList.add('hidden');
        ageError.textContent = '';
        isValid = true;
    }
    return isValid
}

function getEmployeesByDepartment(department) {
    return employees.filter((emp) => emp.department === department)
}
// console.log(getEmployeesByDepartment("Développement"));

function augmenterSalaires(pourcentage) {
    employees.forEach(emp => {
        emp.salary = emp.salary * (1 + pourcentage);
    });

    displayEmployee(employees);
}

augmenterSalaires(0.25)

function getDepartmentStats() {
    // Retourne un objet avec pour chaque département :
    // - nombre d'employés
    // - salaire moyen
    // - salaire maximum
    let depTotal = {};
    for (let i = 0; i < employees.length; i++) {
        let depName = employees[i].department;

        if (!depTotal[depName]) {
            depTotal[depName] = { nombreEmployees: 0, AvgSalary: 0, MaxSalary: 0, total: 0 }
        }
        depTotal[depName].nombreEmployees += 1;
        depTotal[depName].MaxSalary = Math.max(depTotal[depName].MaxSalary, employees[i].salary);
        depTotal[depName].total += employees[i].salary;

    }
    for (let x in depTotal) {
        depTotal[x].AvgSalary = depTotal[x].total / depTotal[x].nombreEmployees;
    }
    return depTotal
}
// console.log(getDepartmentStats());

function getEmployeesWithSkill(skill) {
    // Retourne les employés ayant une compétence spécifique
    return employees.filter((emp) => emp.skills.includes(skill))
}
// console.log(getEmployeesWithSkill("Scrum"))

const company = {
    employees: employees, // le tableau existant
    projects: {
        "Project Alpha": [],
        "Project Beta": [],
        "Project Gamma": [],
        "Project Delta": [],
        "Project Epsilon": []
    },

    // À implémenter :
    assignEmployeeToProject: function (employeeId, projectName) {
        // Assigner un employé à un projet
        const emp = this.employees.find((emp) => emp.id === employeeId)
        if (this.projects[projectName]) {
            this.projects[projectName].push(emp)
        }
    },

    getProjectTeam: function (projectName) {
        // Retourner tous les employés d'un projet
        return this.projects[projectName]
    },

    getEmployeeProjects: function (employeeId) {
        // Retourner tous les projets d'un employé
        const emp = this.employees.find((emp) => emp.id === employeeId)
        return emp.projects
    },

    getEmployeesWithMultipleProjects: function () {
        // Retourner les employés avec au moins 2 projets
        const emp = this.employees.filter((emp) => emp.projects.length >= 2)
        return emp
    }
};

function masseSalarialeFor() {
    let total = 0;
    // Utiliser for classique
    for (let i = 0; i < employees.length; i++) {
        total += employees[i].salary;
    }
    return total;
}
// console.log(masseSalarialeFor())

function listerEmailsForOf() {
    const emails = [];
    // Utiliser for...of
    for (let x of employees) {
        emails.push(x.email)
    }
    return emails;
}
// console.log(listerEmailsForOf())

function compterParDepartementForEach() {
    const stats = {};
    // Utiliser forEach
    employees.forEach((emp) => {
        if (stats[emp.department]) {
            stats[emp.department]++;
        } else {
            stats[emp.department] = 1;
        }
    })
    return stats;
}
// console.log(compterParDepartementForEach())

function employeesSimplifiesMap() {
    // Retourner [{id, nomComplet, department}]
    // Utiliser map
    return employees.map((emp) => ({
        id: emp.id,
        nomComplet: emp.firstName + " " + emp.lastName,
        department: emp.department
    }))
}
// console.log(employeesSimplifiesMap())

function employesSeniors() {
    // Utiliser filter puis map
    const seniorEmployees=employees.filter((emp)=>emp.age>35)
    return seniorEmployees.map((emp)=>({
        id: emp.id,
        nomComplet: emp.firstName + " " + emp.lastName,
        skills:emp.skills
    }))
}
console.log(employesSeniors())
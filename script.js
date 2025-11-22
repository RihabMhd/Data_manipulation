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
console.log(getEmployeesByDepartment("Développement"));

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
        depTotal[depName].MaxSalary = Math.max(depTotal[depName].MaxSalary,employees[i].salary);
        depTotal[depName].total += employees[i].salary;

    }
    for (let x in depTotal) {
        depTotal[x].AvgSalary = depTotal[x].total / depTotal[x].nombreEmployees;
    }
    return depTotal
}
console.log(getDepartmentStats());

function getEmployeesWithSkill(skill) {
    // Retourne les employés ayant une compétence spécifique
    return employees.filter((emp)=>emp.skills.includes(skill))
}
console.log(getEmployeesWithSkill("Scrum"))
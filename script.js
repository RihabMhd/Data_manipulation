const parentDiv = document.getElementById('employees-container');
const buttonDynamique = document.getElementById('add-skill-btn');
const containerDynamique = document.getElementById('skills-container');


const employeeForm = document.getElementById("employee-form");


function displayEmployee(employees) {
    const list = document.getElementById('employees-tbody');
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
function getSkills(){
    let skillsArray=[];
    const skills=document.querySelectorAll('.skill')
    skills.forEach((skill)=>{
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

        employees.push(newEmployee);

        displayEmployee(employees);
    })
}
formHandling()
const parentDiv=document.getElementById('employees-container');

function displayEmployee(employees){
    const list=document.getElementById('employees-tbody');
    employees.forEach((emp) => {
        const tr=document.createElement('tr');
        tr.innerHTML=`<td>${emp.firstName}</td><td>${emp.lastName}</td>
        <td>${emp.department}</td><td>${emp.position}</td><td>${emp.salary}</td>
        <td>${emp.skills.join("-")}</td><td>${emp.joinDate}</td><td>${emp.email}</td>
        <td>${emp.projects.join('-')}</td><td>${emp.isActive}</td><td>${emp.languages.join('-')}</td>`
        list.appendChild(tr)
    });
}
displayEmployee(employees)

function hideTable(){
    const hide = document.getElementById('hide');
    hide.addEventListener('click',()=>{
        parentDiv.style.display='none';
    })
}

function showTable(){
    const show = document.getElementById('show');
    show.addEventListener('click',()=>{
        parentDiv.style.display='block';
    })
}
showTable()
hideTable()

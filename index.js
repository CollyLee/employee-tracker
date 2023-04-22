const { opening, addDept, addRole, addEmployee, updateEmployeeRole } = require('./questions')

const init = () => {
    inquirer.prompt(opening)
};

switch (actionOptions) {
    case 'View All Departments':
        action = viewAllDepartments()
    break;

    case 'View All Roles':
        action = viewAllRoles()
    break;

    case 'View All Employees':
        action = viewAllEmployees()
    break;

    case 'Add a Department':
        action = addADepartment()
    break;

    case 'Add a Role':
        action = addARole()
    break;

    case 'Add an Employee':
        action = addAnEmployee()
    break;

    case 'Update Employee Role':
        action = updateEmpRole()
    break;
};

 const viewAllDepartments = () => {

 };

 
 const viewAllRoles = () => {

 };

 
 const viewAllEmployees = () => {

 };

 
 const addADepartment = () => {

 };

 
 const addARole = () => {

 };

 
 const addAnEmployee = () => {

 };

 const updateEmpRole = () => {

 };

init();
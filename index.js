const mysql = require('mysql2');
const inquirer = require('inquirer');
const cTable = require('console.table')
const { opening } = require('./questions')
const { viewAllDepartments, viewAllRoles, viewAllEmployees, addADepartment, addARole, addAnEmployee, updateEmpRole } = require('./queries')

const init = () => openingAction()

const openingAction = async () => {

    let action = await inquirer.prompt(opening);
    console.log(action.actionOptions);
    
    switch (action.actionOptions) {
        case 'View All Departments':
            viewAllDepartments();
            break;

        case 'View All Roles':
            viewAllRoles()
            break;

        case 'View All Employees':
            viewAllEmployees()
            break;

        case 'Add a Department':
            addADepartment()
            break;

        case 'Add a Role':
            addARole()
            break;

        case 'Add an Employee':
            addAnEmployee()
            break;

        case 'Update Employee Role':
            updateEmpRole()
            break;

    };
}

init();
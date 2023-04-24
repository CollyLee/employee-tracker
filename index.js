const mysql = require('mysql2');
const inquirer = require('inquirer');
const cTable = require('console.table')
const { opening } = require('./questions')
const { viewAllDepartments, viewAllRoles, viewAllEmployees, addADepartment, addARole, addAnEmployee, updateEmpRole } = require('./queries')

const init = () => openingAction()

const openingAction = async () => {
    console.log('/*************************************************/')
    let action = await inquirer.prompt(opening);
    
    switch (action.actionOptions) {
        case 'View All Departments':
            viewAllDepartments();
            setTimeout(openingAction, 1000);
            break;

        case 'View All Roles':
            viewAllRoles();
            setTimeout(openingAction, 1000);
            break;

        case 'View All Employees':
            viewAllEmployees();
            setTimeout(openingAction, 1000);
            break;

        case 'Add a Department':
            addADepartment();
            break;

        case 'Add a Role':
            addARole();
            break;

        case 'Add an Employee':
            addAnEmployee();
            break;

        case 'Update Employee Role':
            updateEmpRole()
            break;

    };
}

init();

module.exports = { openingAction };
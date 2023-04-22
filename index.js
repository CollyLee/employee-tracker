const mysql = require('mysql2');
const inquirer = require('inquirer');
const { opening, addDept, addRole, addEmployee, updateEmployeeRole } = require('./questions')
const db = mysql.createConnection(
    {
        host: 'localhost',
        user: 'root',
        password: 'CQitBG89',
        database: 'employee_db'
    },
    console.log(`Connected to the employee database.`)
);

const init = () => openingAction()

let viewAllDepartments = () => {
    db.query('SELECT name FROM department'), (err, result) => {
        console.table(result);
    }
};

const openingAction = async () => {

    let action = await inquirer.prompt(opening);
    console.log(action.actionOptions);
    
    switch (action.actionOptions) {
        case 'View All Departments':
            viewAllDepartments();
            break;

        // case 'View All Roles':
        //     viewAllRoles()
        //     break;

        // case 'View All Employees':
        //     viewAllEmployees()
        //     break;

        // case 'Add a Department':
        //     addADepartment()
        //     break;

        // case 'Add a Role':
        //     addARole()
        //     break;

        // case 'Add an Employee':
        //     addAnEmployee()
        //     break;

        // case 'Update Employee Role':
        //     updateEmpRole()
        //     break;

    };

    
}




init();
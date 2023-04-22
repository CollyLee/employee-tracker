const inquirer = require('inquirer');
const cTable = require('console.table');
const mysql = require('mysql2');
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

const viewAllDepartments = () => {
    db.query('SELECT * FROM department', (err, result) => {
        console.table(result);
    })
};

const viewAllRoles = () => {
    db.query('SELECT * FROM role', (err, result) => {
        console.table(result);
    })
};

const viewAllEmployees = () => {
    db.query('SELECT * FROM employee', (err, result) => {
        console.table(result);
    })
};

const addADepartment = async () => {

    let answer = await inquirer.prompt(addDept);

    db.query(`INSERT INTO department (name) VALUES ('${answer.newDeptName}')`, (err, result) => {
        console.log('Department added! See below for updated department directory.')
    });

    db.query('SELECT * FROM department', (err, result) => {
        console.table(result)
    });
}

const addARole = async () => {
    let answer = await inquirer.prompt(addRole);

    db.query(`INSERT INTO role (title, salary, department_id) VALUES ('${answer.newRoleTitle}', '${answer.newRoleSalary}', '${answer.newRoleDept}')`, (err, result) => {
        console.log('Role added! See below for updated role directory.')
    });

    db.query('SELECT * FROM role', (err, result) => {
        console.table(result)
    });
}

const addAnEmployee = async () => {
    let answer = await inquirer.prompt(addEmployee);

    db.query(`INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ('${answer.newEmpFirstName}', '${answer.newEmpLastName}', '${answer.newEmpRole}', '${answer.newEmpManagerID}')`, (err, result) => {
        console.log('Employee added! See below for updated role directory.')
    });

    db.query('SELECT * FROM employee', (err, result) => {
        console.table(result)
    });
}

const updateEmpRole = async () => {
    let answer = await inquirer.prompt(updateEmployeeRole);

    db.query(`UPDATE employee SET role_id = '${answer.updatedRole}' WHERE id = '${answer.updatedEmp}'`, (err, result) => {
        console.log('Employee updated! See below for updated role directory.')
    });

    db.query('SELECT * FROM employee', (err, result) => {
        console.table(result)
    });
}



module.exports = { viewAllDepartments, viewAllRoles, viewAllEmployees, addADepartment, addARole, addAnEmployee, updateEmpRole };
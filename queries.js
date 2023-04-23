const inquirer = require('inquirer');
const cTable = require('console.table');
const mysql = require('mysql2');
// const { openingAction } = require('./index')
const { addDept, addRole, addEmployee, updateEmployeeRole } = require('./questions')
const db = mysql.createConnection(
    {
        host: 'localhost',
        user: 'root',
        password: 'CQitBG89',
        database: 'employee_db'
    },
    console.log(`Connected to the employee database.`)
);


// FUNCTIONS CALLED BASED ON ACTION SELECTED BY USER
const viewAllDepartments = () => {
    db.query('SELECT id AS "Dept ID", name as "Department Name" FROM department', (err, result) => {
        console.table(result);
    })
    // openingAction();
};

const viewAllRoles = () => {
    db.query('SELECT role.id AS "Role ID", role.title AS "Job Title", role.salary AS "Annual Salary", role.department_ID AS "Dept ID", department.name AS "Department Name" FROM role INNER JOIN department ON role.department_id=department.id', (err, result) => {
        console.table(result);
    })
};

const viewAllEmployees = () => {
    db.query('SELECT e.id AS "Emp ID", e.first_name AS "First Name", e.last_name AS "Last Name", e.role_id AS "Role ID", e.manager_ID AS "Manager ID", m.first_name AS "Manager First", m.last_name AS "Manager Last" FROM employee e INNER JOIN employee m ON e.manager_id = m.id', (err, result) => {
        console.table(result);
    })
};

const addADepartment = async () => {

    let answer = await inquirer.prompt(addDept);

    db.query(`INSERT INTO department (name) VALUES ('${answer.newDeptName}')`, (err, result) => {
        console.log('Department added! See below for updated department directory.')
    });

    db.query('SELECT id AS "Dept ID", name as "Department Name" FROM department', (err, result) => {
        console.table(result);
    })
}

const addARole = async () => {
    let answer = await inquirer.prompt(addRole);

    db.query(`INSERT INTO role (title, salary, department_id) VALUES ('${answer.newRoleTitle}', '${answer.newRoleSalary}', '${answer.newRoleDept}')`, (err, result) => {
        console.log('Role added! See below for updated role directory.')
    });

    db.query('SELECT role.id AS "Role ID", role.title AS "Job Title", role.salary AS "Annual Salary", role.department_ID AS "Dept ID", department.name AS "Department Name" FROM role INNER JOIN department ON role.department_id=department.id', (err, result) => {
        console.table(result);
    })
}

const addAnEmployee = async () => {
    let answer = await inquirer.prompt(addEmployee);

    db.query(`INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ('${answer.newEmpFirstName}', '${answer.newEmpLastName}', '${answer.newEmpRole}', '${answer.newEmpManagerID}')`, (err, result) => {
        console.log('Employee added! See below for updated role directory.')
    });

    db.query('SELECT e.id AS "Emp ID", e.first_name AS "First Name", e.last_name AS "Last Name", e.role_id AS "Role ID", e.manager_ID AS "Manager ID", m.first_name AS "Manager First", m.last_name AS "Manager Last" FROM employee e INNER JOIN employee m ON e.manager_id = m.id', (err, result) => {
        console.table(result);
    })
}

const updateEmpRole = async () => {
    let answer = await inquirer.prompt(updateEmployeeRole);

    db.query(`UPDATE employee SET role_id = '${answer.updatedRole}' WHERE id = '${answer.updatedEmp}'`, (err, result) => {
        console.log('Employee updated! See below for updated role directory.')
    });

    db.query('SELECT e.id AS "Emp ID", e.first_name AS "First Name", e.last_name AS "Last Name", e.role_id AS "Role ID", e.manager_ID AS "Manager ID", m.first_name AS "Manager First", m.last_name AS "Manager Last" FROM employee e INNER JOIN employee m ON e.manager_id = m.id', (err, result) => {
        console.table(result);
    })
}

module.exports = { viewAllDepartments, viewAllRoles, viewAllEmployees, addADepartment, addARole, addAnEmployee, updateEmpRole };
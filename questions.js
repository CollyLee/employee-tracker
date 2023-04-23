// INQUIRER PROMPTS
const opening = [
    {
        type: "list",
        message: "What would you like to do?",
        name: "actionOptions",
        choices: ["View All Departments", "View All Roles", "View All Employees", "Add a Department", "Add a Role", "Add an Employee", "Update Employee Role"],
    }
];

const addDept = [
    {
        type: "input",
        message: "Please enter the name of the department you would like to add (see above for current department directory).",
        name: "newDeptName",
    }
];

const addRole = [
    {
        type: "input",
        message: "Please enter the title of the role you wish to add.",
        name: "newRoleTitle",
    },
    {
        type: "number",
        message: "Please enter the salary of the new role.",
        name: "newRoleSalary",
    },
    {
        type: "number",
        message: "Please enter the department id this role belongs to",
        name: "newRoleDept",
    }
];

const addEmployee = [
    {
        type: "input",
        message: "Please enter the employee's first name.",
        name: "newEmpFirstName",
    },
    {
        type: "input",
        message: "Please enter the employee's last name.",
        name: "newEmpLastName",
    },
    {
        type: "number",
        message: "Please enter the employee's role id number.",
        name: "newEmpRole",
    },
    {
        type: "number",
        message: "Please enter the id number of this employee's manager",
        name: "newEmpManagerID",
    }
];

const updateEmployeeRole = [
    {
        type: "input",
        message: "Select the id of the employee you wish to update",
        name: "updatedEmp",
    },
    {
        type: "input",
        message: "Select this employee's new role id",
        name: "updatedRole",
    }
];



module.exports = { opening, addDept, addRole, addEmployee, updateEmployeeRole };

INSERT INTO department (name)
VALUES
    ('Operations'),
    ('General Counsel'),
    ('Security'),
    ('Human Resources'),
    ('Finance');

INSERT INTO role (title, salary, department_id)
VALUES
    ('Operations Manager', 120000.00, 1),
    ('Head Legal Counsel', 120000.00, 2),
    ('Head of Security', 100000.00, 3),
    ('Benefits Specialist', 80000.00, 4),
    ('Chief Financial Officer', 100000.00, 5);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES
    ('Tommy', 'Pickles', 1, 1),
    ('Angelica', 'Pickles', 2, 1),
    ('Charles', 'Finster', 3, 1),
    ('Phillip', 'DeVille', 4, 6),
    ('Lillian', 'DeVille', 4, 6),
    ('Susie', 'Carmichael', 5, 1);
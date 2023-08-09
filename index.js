let employee = {
    name: 'erin',
    streetAddress: '123 Hello Way',
}

function updateEmployeeWithKeyAndValue(obj, key, value) {
    return {
        ...employee, 
        [key]: value
    }
}

function destructivelyUpdateEmployeeWithKeyAndValue(obj, key, value) {
    employee[key] = value
    return employee
}

function deleteFromEmployeeByKey(obj, key) {
    const newEmployee = {...employee}
    delete newEmployee.name;
    return newEmployee;
}

function destructivelyDeleteFromEmployeeByKey(obj, key) {
    delete employee.name
    return employee;
}
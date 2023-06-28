// Write your solution in this file!
const employee = {
    name: "Erin",
    streetAddress: "1234 Happy Lane",
};

function updateEmployeeWithKeyAndValue(obj, key, value) {
    const newEmployee = { ...obj };
    newEmployee[key] = value;
    return newEmployee;
}

function destructivelyUpdateEmployeeWithKeyAndValue(obj, key, value) {
    obj[key] = value;
    return obj;
}

function deleteFromEmployeeByKey(obj, key, value) {
    const newEmp = { ...obj};
    delete newEmp.name;
    return newEmp
}

function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee.name;
    return employee
}
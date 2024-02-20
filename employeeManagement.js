// Array to store employee objects
let employees = [];

// Function to get the number of employees from the user
function getNumberOfEmployees() {
    let numEmployees = parseInt(prompt("Enter the number of employees:"));
    while (isNaN(numEmployees) || numEmployees <= 0) {
        alert("Invalid input. Please enter a positive number.");
        numEmployees = parseInt(prompt("Enter the number of employees:"));
    }
    return numEmployees;
}

// Function to create an employee object
function createEmployee(code, fullName, dateOfBirth, department, salaryCoefficient) {
    return {
        code: code,
        fullName: fullName,
        dateOfBirth: dateOfBirth,
        department: department,
        salaryCoefficient: salaryCoefficient
    };
}

// Function to gather employee input and add to the list
function addEmployee() {
    const code = document.getElementById("code").value;
    const fullName = document.getElementById("fullName").value; 
    const dateOfBirth = document.getElementById("dateOfBirth").value;
    const department = document.getElementById("department").value;
    const salaryCoefficient = parseFloat(document.getElementById("salaryCoefficient").value); 

    // Basic input validation (you can extend this)
    if (!code || !fullName || !dateOfBirth || !department || isNaN(salaryCoefficient)) {
        alert("Please fill in all the fields.");
        return;
    }

    const newEmployee = createEmployee(code, fullName, dateOfBirth, department, salaryCoefficient);
    employees.push(newEmployee);
    displayEmployeeList(); // Update the display
}

// Function to display the employee list
function displayEmployeeList() {
    const employeeListDiv = document.getElementById("employeeList");
    employeeListDiv.innerHTML = "<h2>Employee List</h2>"; // Clear existing content

    if (employees.length === 0) {
        employeeListDiv.innerHTML += "<p>No employees added yet.</p>";
    } else {
        let table = "<table><tr><th>Code</th><th>Full Name</th><th>Date of Birth</th><th>Department</th><th>Salary Coefficient</th></tr>";
        for (const employee of employees) {
            table += `<tr><td>${employee.code}</td><td>${employee.fullName}</td><td>${employee.dateOfBirth}</td> <td>${employee.department}</td><td>${employee.salaryCoefficient}</td></tr>`;
        }
        table += "</table>";
        employeeListDiv.innerHTML += table;
    }
}

// Get the initial number of employees
const numEmployees = getNumberOfEmployees();
for (let i = 0; i < numEmployees; i++) {
    addEmployee(); // Get input and add each employee
}

// Attach event listener to the add button
const addButton = document.getElementById("addButton");
addButton.addEventListener("click", addEmployee);

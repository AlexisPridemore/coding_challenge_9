// Task 1: Creating an Employee Class

class Employee {
    constructor(name, id, department, salary) {
        this.name = name;  //Name of employee
        this.id = id;      //Employee ID
        this.department = department;   //employee Department
        this.salary = salary;  //employee salary
    };
    getDetails() {
        return `Employee: ${this.name}, ID: ${this.id}, Department: ${this.department}, Salary: ${this.salary}`;
    };  //getting employee details
    calculateAnnualSalary() {
        return this.salary * 12;
    }  //calculate annual salary
};  //Employee Class

const emp1 = new Employee("Alice Johnson", 101, "Sales", 5000);  //Declare New employee
console.log(emp1.getDetails()); //Display employee details

console.log(emp1.calculateAnnualSalary());  //Log Annual salary

// Task 2: Creating a Manager Class (Inheritance & Method Overriding) 

class Manager extends Employee {
    constructor(name, id, department, salary, teamSize) {
        super(name, id, department, salary);
        this.teamSize = teamSize;  //Manager's team size added
    };
    getDetails() {
        return `Manager: ${this.name}, Id: ${this.id}, Department: ${this.department}, Salary: ${this.salary}, Team Size: ${this.teamSize}`;   
    }  //manager details
    calculateBonus() {
        return this.salary * 12 * 0.10;
    }  //calculate bonus

    // Task 4 modification #2:
    calculateAnnualSalary() {
        return this.salary * 12 + this.calculateBonus();
    }  //calculate and consider bonuses for managers
};
const mgr1 = new Manager("John Smith", 201, "IT", 8000, 5);

console.log(mgr1.getDetails());
console.log(mgr1.calculateBonus()); //Test data log

// Task 3: Creating a Company Class

class Company {
    constructor(name) {
        this.name = name;      //company's name
        this.employees = [];   //array of employees
    };
    addEmployee(employee) {   //add employee to array
        this.employees.push(employee);
    }
    listEmployees() {    //log employee details
        this.employees.forEach(employee => console.log(employee.getDetails()));
    }

    // Task 4 modifcation #1:
    calculateTotalPayroll() {    
        return this.employees.reduce((total, employee) => {  //calculate total payroll
            return total + employee.calculateAnnualSalary();
        }, 0);  // sum of all employee salaries (including managers)
    };  //payroll system

    // Task 5 modification: Implementing Promotions
    promoteToManager(employee, teamSize) {
        const index = this.employees.indexOf(employee);
            this.employees[index] = new Manager(employee.name, employee.id, employee.department, employee.salary, teamSize);
    }  //promotion to manager
};  //company class

const company = new Company("TechCorp");
company.addEmployee(emp1);
company.addEmployee(mgr1);
company.listEmployees();   //Test data log

// Task 4: Implementing a Payroll System

console.log(company.calculateTotalPayroll()); //Test data log

// Task 5: Implementing Promotions

company.promoteToManager(emp1, 3);  //promote employee log
company.listEmployees();  //new employee list log


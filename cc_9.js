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

};
const mgr1 = new Manager("John Smith", 201, "IT", 8000, 5);
console.log(mgr1.getDetails());
console.log(mgr1.calculateBonus()); //Test data log
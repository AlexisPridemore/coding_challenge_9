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
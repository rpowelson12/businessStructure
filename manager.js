const Employee = require("./employee");

class Manager extends Employee {
    constructor(name, title, salary, manager, employees) {
        super(name, title, salary, manager);
        this.employees = [];

    }

    addEmployee(employee) {
        this.employees.push(employee);
    }

    _totalSubSalary (arr) {
        let sum;
        if (arr.length === 1){
            return arr[0].salary;
        }
        
        if (this.Employee instanceof Manager) {
            sum += this.salary;            
        }

        sum = arr[0].salary + _totalSubSalary(arr.slice(1));
        return sum;

    }

    calculateBonus(multiplier){
        let bonus = (this.salary + this._totalSubSalary(this.employees)) * multiplier;
        return bonus;
    }
}



module.exports = Manager;
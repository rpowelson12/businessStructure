
class Employee {
    constructor(name, salary, title, manager = null) {
        this.name = name;
        this.salary = salary;
        this.title = title;
        if (manager != null) {
            manager.addEmployee({
                name, 
                salary, 
                title
            });
        }
    }

    calculateBonus (multiplier) {
        let bonus = this.salary * multiplier;
        return bonus;
    }
    
}


module.exports = Employee;
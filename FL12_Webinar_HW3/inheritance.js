class Employee {
    constructor(person) {
        this.id = person.id;
        this.firstName = person.firstName;
        this.lastName = person.lastName;
        this.birthday = person.birthday;
        this.salary = person.salary;
        this.position = person.position;
        this.department = person.department;
        Employee.EMPLOYEES.push(this);
    }

    get age() {
        return Math.floor((new Date() - new Date(this.birthday)) / (365 * 24 * 60 * 60 * 1000));
    }

    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    }

    quit = () => {
        Employee.EMPLOYEES.splice(Employee.EMPLOYEES.indexOf(this.position), 1);
    }

    retire = () => {
        console.log("It was such a pleasure to work with you!");

        this.quit();
    }

    getFired = () => {
        console.log("Not a big deal!");

        this.quit();
    }

    changeDepartment = newDepartment => {
        this.department = newDepartment;
    }

    changePosition = newPosition => {
        this.position = newPosition;
    }

    changeSalary = newSalary => {
        this.salary = newSalary;
    }

    getPromoted = benefits => {
        const {salary, position, department} = benefits;

        if (salary) this.changeSalary(salary);
        if (position) this.changePosition(position);
        if (department) this.department(department);

        console.log('Yoohooo!');
    }

    getDemoted = punishment => {
        const {salary, position, department} = punishment;

        if (salary) this.changeSalary(salary);
        if (position) this.changePosition(position);
        if (department) this.department(department);

        console.log('Damn!');
    }
}

Employee.EMPLOYEES = [];

class Manager extends Employee {
    constructor(person) {
        super(person);
        this.position = 'manager';

        if (person.position !== 'manager') {
            Manager.managedEmployees.push(this);
        }
    }


}

Manager.managedEmployees = [];

class BlueCollarWorker extends Employee {
    constructor(person) {
        super(person);
    }
}

class HRManager extends Manager {
    constructor(person) {
        super(person);
        this.department = 'hr';
    }
}

class SalesManager extends Manager {
    constructor(person) {
        super(person);
        this.department = 'sales';
    }
}

const employee = new Employee({
    id: 31,
    firstName: 'Andry',
    lastName: 'Gna',
    birthday: '1992-09-30',
    salary: 1000,
    position: 'developer',
    department: 'sales',
});

const hr = new HRManager({
    id: 333,
    firstName: 'Inessa',
    lastName: 'Gnabry',
    birthday: '1996-09-16',
    salary: 500,
    position: 'manager',
    department: 'manager',
});


import React from 'react';
import Header from './Header';
import employeesApi from '../api/employeesApi';
import '../styles.css';

class Employee {
    constructor(employee) {
        this.employee = employee;
    }

    setParent = parent => {
        this.parent = parent;
    }

    getParent = () => {
        return this.parent;
    }
}


class Developer extends Employee {
    getEmployee = () => {
        return <li key={this.employee.id}>{`Developer ${this.employee.id}: ${this.employee.name}`}</li>;
    }

    getSalary = () => {
        return this.employee.salary;
    }

    isComposite = () => {
        return false;
    }
}

class RM extends Employee {
    children = [];

    add = employee => {
        this.children.push(employee);
        employee.setParent(this);
    }

    remove = employee => {
        const employeeIndex = this.children.indexOf(employee);
        this.children.splice(employeeIndex, 1);

        employee.setParent(null);
    }

    isComposite = () => {
        return true;
    }

    getEmployee = () => {
        const RmEmployees = [];

        for (const child of this.children) {
            RmEmployees.push(child.getEmployee())
        }

        return (
            <li key={this.employee.id}><span className="rm">{`RM ${this.employee.id}: ${this.employee.name}`}</span>
                <ul className="list">
                    {RmEmployees}
                </ul>
            </li>
        );
    }

    getSalary = () => {
        const RmEmployees = [];
        const RmRmes = [];

        for (const child of this.children) {
            if (child.isComposite()) {
                RmEmployees.push(child.employee.salary);
                RmRmes.push(child.getSalary());
            } else {
                RmEmployees.push(child.getSalary());
            }
        }

        let averageSalary = 0;

        for (let i = 0; i < RmEmployees.length; i++) {
            averageSalary += RmEmployees[i];
        }

        averageSalary /= RmEmployees.length;

        return (
            <li key={this.employee.id}>
                {`Unit: ${this.employee.pool_name}. Average salary: ${Math.round(averageSalary)}`}
                <ul className="list">
                    {RmRmes}
                </ul>
            </li>
        );
    }

}

const clientCode = (employee, listType) => {
    switch (listType) {
        case 'employees':
            return employee.getEmployee();
        case 'units': 
            return employee.getSalary();
        default: 
            console.error('Unexpected Error');

    }
}



class App extends React.Component {
    state = { 
        employees: '', 
        employeesList: false, 
        unitsList: false, 
        warningsList: false 
    };

    async componentDidMount() {
        const response = await employeesApi.get();

        this.setState({ employees: response.data });
    }

    renderEmployeesList = (employees, rmEmployee) => {
        for (const employee of employees) {
            let developer;

            if (employee.pool_name && employee.rm_id === rmEmployee.employee.id) {
                developer = new RM(employee);
                rmEmployee.add(developer);

                this.renderEmployeesList(employees, developer)
            } else if (employee.rm_id === rmEmployee.employee.id) {
                developer = new Developer(employee);
                rmEmployee.add(developer);
            }
        }
    }  

    createList = () => {
        const rm = new RM(this.state.employees[0]);

        this.renderEmployeesList(this.state.employees, rm);

        return rm;
    }

    renderEmployees = () => {
        this.setState({ 
            employeesList: !this.state.employeesList, 
            unitsList: false, 
            warningsList: false 
        });
    }

    renderUnits = () => {
        this.setState({ 
            unitsList: !this.state.unitsList,
            employeesList: false, 
            warningsList: false  
        });
    }

    renderWarnings = () => {
        this.setState({ 
            warningsList: !this.state.warningsList,
            employeesList: false, 
            unitsList: false   
        });
    }

    renderList = () => {
        if (this.state.employeesList) {
            return clientCode(this.createList(), 'employees');
        }

        if (this.state.unitsList) {
            return clientCode(this.createList(), 'units');
        }

        if (this.state.warningsList) {
            return this.state.employees.filter(employee => {
                return employee.salary <= 600;
            }).map(employee => {
                return <li key={employee.id}>{`Name: ${employee.name}, salary: ${employee.salary}`}</li>;
            })
        }
    }

    render() {
        if (this.state.employees) {
            return (
                <div className="list-wrapper">
                    <Header 
                        employees={this.renderEmployees}
                        units={this.renderUnits}
                        warnings={this.renderWarnings}
                    />
                    <ul className="list">{this.renderList()}</ul>
                </div>
            );
        }
        return (
            <div>
                <h2>Loading...</h2>
            </div>
        );
    }
}

export default App;
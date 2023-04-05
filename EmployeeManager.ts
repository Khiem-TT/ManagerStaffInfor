import {Employee} from "./Employee";

export class EmployeeManager {
    employees: Employee[] = [];

    constructor() {
    }

    getList(): Employee[] {
        return this.employees;
    }

    addEmployee(employee: Employee) {
        this.employees.push(employee);
    }

    deleteEmployee(index: number) {
        this.employees.splice(index, 1);
    }
}
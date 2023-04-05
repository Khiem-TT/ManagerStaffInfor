import {Employee, Gender} from "./Employee";
import {EmployeeManager} from "./EmployeeManager";

let employee0 = new Employee("Nguyen Van A", Gender.MALE, new Date("1990-09-19"), "anguyen@gmail.com", "0123456789");
let employee1 = new Employee("Tran Thi A", Gender.FEMALE, new Date("1991-10-12"), "btran@gmail.com", "0123456790");
let employee2 = new Employee("Huynh An Nhien", Gender.OTHER, new Date("1990-09-19"), "nhienhuynh@gmail.com", "0123456791");

let employeeManager = new EmployeeManager();

employeeManager.addEmployee(employee0);
employeeManager.addEmployee(employee1);
employeeManager.addEmployee(employee2);

console.log('Old list:');
console.log(employeeManager.getList());

let employee3 = new Employee('Tran The Khiem', Gender.MALE, new Date('2001-11-14'), 'trankhiem99999@gmail.com', '0399237967');
employeeManager.addEmployee(employee3);

employeeManager.deleteEmployee(0);

console.log('New list:');
console.log(employeeManager.getList());
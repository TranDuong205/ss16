"use strict";
class Employee {
    constructor(name) {
        this.name = name;
    }
}
// cách khởi tạo đối tượng abstraction
// thêm từ khóa abstraction
// intance :
// let emp1 = new Employee("trang");
// emp1 được gọi là 1 intance của class Employee
// đối vs abstraction thì ko cho phép khởi tạo đối tượng (intance) được  
/**
    tạo 1 class con kế thừa class E,ployee
    implement
    
    */
class Enployee1 extends Employee {
    constructor(address, name) {
        super(name);
        this.address = address;
        this.name = name;
    }
}
class Student extends Employee {
    constructor(age, name) {
        super(name);
        this.age = age;
        this.name = name;
    }
    getFullName() {
    }
}
class Person3 {
    constructor(name) {
        this.name = name;
    }
    getFullName() {
    }
}
class Person1 extends Person3 {
}

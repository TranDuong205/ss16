abstract class Employee{
    name: string
    constructor(name:string){
        this.name=name
    }
    // getFullName(){
        // khai báo phương thưucs đối tượng abstruction
        // return this.name

    // }
    abstract getFullName(): void;
    // đối vs phương thức tròn abstract thì chỉ tên phương thưucs, kiểu dữ liệu 
    // trả về và ko có phần body

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
abstract class Enployee1 extends Employee{
    address:string;
    constructor(address:string,name:string){
        super(name);
        this.address=address;
        this.name=name
    }
}

class Student extends Employee{
    private age:number;
    constructor(age:number,name:string){
        super(name)
        this.age=age;
        this.name=name;
    }
    getFullName(): void {
        
    }
}

class Person3 {
    name: string;
    constructor(name:string){
        this.name=name
    }
    getFullName(){

    }
}

class Person1 extends Person3{
    // nếu triển khai phương thức của class cha thì gọi và oberriding
}
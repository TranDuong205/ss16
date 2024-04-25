// Abstract class là một lớp mà không thể tạo ra các đối tượng trực tiếp từ nó.
// Abstract class thường chứa các phương thức trừu tượng (abstract methods) và các thuộc tính.
// Abstract class không được khai báo bằng từ khóa "new", mà được sử dụng làm lớp cơ sở cho việc kế thừa.
// Các lớp con kế thừa từ abstract class phải triển khai (implement) tất cả các phương thức trừu tượng được định nghĩa trong abstract class.
// Abstract class có thể chứa cả các phương thức đã được triển khai (non-abstract methods).
abstract class Animal {
    abstract makeSound();
  }
  
  class Dog extends Animal {
    makeSound() {
      console.log("Woof!");
    }
  }
  
  const dog = new Dog();
  dog.makeSound();  // Kết quả: Woof!
//   Class là một lớp thông thường có thể tạo ra các đối tượng trực tiếp từ nó.
// Class chứa các thuộc tính và các phương thức, cả các phương thức có thể được triển khai và trừu tượng.
// Các đối tượng được tạo ra từ class có thể sử dụng các thuộc tính và phương thức của class.
class Person {
    name: string;
  
    constructor(name: string) {
      this.name = name;
    }
  
    sayHello(): void {
      console.log(`Hello, my name is ${this.name}`);
    }
  }
  
  const person = new Person("John");
  person.sayHello();   // Kết quả: Hello, my name is John
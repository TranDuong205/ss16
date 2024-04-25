abstract class Person {
    protected name: string;
  
    constructor(name: string) {
      this.name = name;
    }
  
    abstract displayInfo(): void;
  }
  
abstract class Student extends Person {
    private id: number;
  
    constructor(name: string, id: number) {
      super(name);
      this.id = id;
    }
  
    displayInfo(): void {
      console.log(`Student ID: ${this.id}`);
      console.log(`Name: ${this.name}`);
    }
  }
  
  class Teacher extends Person {
    private subject: string;
  
    constructor(name: string, subject: string) {
      super(name);
      this.subject = subject;
    }
  
    displayInfo(): void {
      console.log(`Teacher Name: ${this.name}`);
      console.log(`Subject: ${this.subject}`);
    }
}

const student = new Student("John Doe", 12345);
student.displayInfo();
const teacher = new Teacher("Jane Smith", "Math");
teacher.displayInfo();

class Employee {
    protected name: string;
    protected role: string;
  
    constructor(name: string, role: string) {
      this.name = name;
      this.role = role;
    }
  
    calculateSalary(): number {
      return 0; // Phương thức này sẽ được triển khai trong các lớp con
    }
}
  
  class InternEmployee extends Employee {
    private workHour: number;
  
    constructor(name: string, role: string, workHour: number) {
      super(name, role);
      this.workHour = workHour;
    }
  
    calculateSalary(): number {
      const hourlyRate = 30000;
      return hourlyRate * this.workHour;
    }
}
  
class OfficialEmployee extends Employee {
    private overtimeWage: number;
  
    constructor(name: string, role: string, overtimeWage: number) {
      super(name, role);
      this.overtimeWage = overtimeWage;
    }
  
    calculateSalary(): number {
      const baseSalary = 20000000;
      return baseSalary + this.overtimeWage;
    }
}
  
  const intern = new InternEmployee("John Doe", "Intern", 40);
  const internSalary = intern.calculateSalary();
  console.log("Intern Salary:", internSalary);
  const official = new OfficialEmployee("Jane Smith", "Official", 5000000);
  const officialSalary = official.calculateSalary();
  console.log("Official Salary:", officialSalary);
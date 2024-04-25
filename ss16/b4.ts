class Product {
    protected name: string;
    protected id: number;
  
    constructor(name: string, id: number) {
      this.name = name;
      this.id = id;
    }
  
    printInfo(): void {
      console.log(`Product Name: ${this.name}`);
      console.log(`Product ID: ${this.id}`);
    }
  }
  
  class Electronic extends Product {
    private brand: string;
  
    constructor(name: string, id: number, brand: string) {
      super(name, id);
      this.brand = brand;
    }
  
    printInfo(): void {
      super.printInfo();
      console.log(`Brand: ${this.brand}`);
    }
  }
  
  class Book extends Product {
    private author: string;
  
    constructor(name: string, id: number, author: string) {
      super(name, id);
      this.author = author;
    }
  
    printInfo(): void {
      super.printInfo();
      console.log(`Author: ${this.author}`);
    }
  }
  const electronic = new Electronic("Smartphone", 12345, "Apple");
  electronic.printInfo();
  const book = new Book("The Great Gatsby", 56789, "F. Scott Fitzgerald");
  book.printInfo();
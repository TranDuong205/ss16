abstract class Quadrangle {
    protected width: number;
    protected height: number;
  
    constructor(width: number, height: number) {
      this.width = width;
      this.height = height;
    }
  
    abstract calculatePerimeter(): number;
}
  
  class Rectangle extends Quadrangle {
    constructor(width: number, height: number) {
      super(width, height);
    }
  
    calculatePerimeter(): number {
      return 2 * (this.width + this.height);
    }
}
  
class Square extends Quadrangle {
    constructor(sideLength: number) {
      super(sideLength, sideLength);
    }
  
    calculatePerimeter(): number {
      return 4 * this.width;
    }}
const rectangle = new Rectangle(5, 10);
const rectanglePerimeter = rectangle.calculatePerimeter();
console.log("Rectangle Perimeter:", rectanglePerimeter);
const square = new Square(7);
const squarePerimeter = square.calculatePerimeter();
console.log("Square Perimeter:", squarePerimeter);
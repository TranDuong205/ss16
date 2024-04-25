"use strict";
class Shape {
    constructor(name) {
        this.name = name;
    }
    getName() {
        return `hinh la ${this.name}`;
    }
}
class Rectangle extends Shape {
    constructor(name, width, height) {
        super(name);
        this.width = width;
        this.height = height;
    }
    getSize() {
        console.log("chieu dai", this.width);
        console.log("chieu rong", this.height);
        // return `chieu dai: ${this.width} va chieu rong: ${this.height}`
    }
}
let rectangle1 = new Rectangle("hinh chu nhat", 2, 3);
console.log(rectangle1.getName());
rectangle1.getSize;

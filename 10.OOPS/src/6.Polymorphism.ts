/**
 * poly = many 
 * morph = form
 * 
 * 
 * Polymorphism is a concept that allows us to use the same interface for different implementations.
 * 
 * it can be implement in two ways:
 * 1. Overloading (compile time polymorphism)
 * 2. Overriding (runtime polymorphism)
 * 
 */


// java 
// js, ts dont allow overloading of functions. 

/**
 *  public static int sum (int a, int b) {
 * 
 *  }
 * 
 *  public static int sum (double a, double b) {
 *  
 *  }
 * 
 *  public static int sum (char a, char b) {
 *  
 *  }
 * 
 */

// not allowed
// function sum(a: number, b: number) {
//     return a + b;
// }

// function sum(a: String, b: String) {
//     return a + b;
// }


// ---------------------------------------- METHOD OVERRIDING WITH CLASS ---------------------------------------

/*
class ClassShape {
    area(): number {
        return 0;
    }
    perimeter(): number {
        return 0;
    }
}

// schema - enforcement is not solid
class Circle extends ClassShape{
    radius: number;
    constructor(radius: number) {
        super();
        this.radius = radius;
    }
    area(): number {
        return Math.PI * this.radius * this.radius;
    }
    perimeter(): number {
        return 2 * Math.PI * this.radius;
    }
}

// if I dont implement area and perimeter in Circle class , it will give 0 for area and perimeter.

const smallCircle = new Circle(10);
console.log(smallCircle.radius);
console.log(smallCircle.area());
console.log(smallCircle.perimeter());

*/



//-------------  how can we have solid schema enforcement ? INTERFACES (METHOD OVERRIDING) -------------


// solid enforcement
interface Shape {
    area(): number;
    perimeter(): number;
}


/**
 * if i do not implement area and perimeter in Circle class , it will give error.
 * error TS2420: Class 'Circle' incorrectly implements interface 'Shape'.
  Type 'Circle' is missing the following properties from type 'Shape': area, perimeter

  I am forced to implement area and perimeter in Circle class.
 */

class Circle implements Shape {
    radius: number;
    
    constructor(radius: number) {
        this.radius = radius;
    }
    area(): number {
        return Math.PI * this.radius * this.radius;
    }
    perimeter(): number {
        return 2 * Math.PI * this.radius;
    }
}

const smallCircle = new Circle(10);
console.log(smallCircle.radius);
console.log(smallCircle.area());
console.log(smallCircle.perimeter());


class Rectangle implements Shape {
    length: number;
    width: number;
    constructor(length: number, width: number) {
        this.length = length;
        this.width = width;
    }
    area(): number {
        return this.length * this.width;
    }
    perimeter(): number {
        return 2 * (this.length + this.width);
    }
}

const smallRectangle = new Rectangle(10, 20);
console.log(smallRectangle.length);
console.log(smallRectangle.width);
console.log(smallRectangle.area());
console.log(smallRectangle.perimeter());
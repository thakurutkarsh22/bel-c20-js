// --------------------------- STATIC MEMBERS ---------------------------

/**
 * // wagonr is the INSTANCE of the Vehicle class
 * const wagonr = new Vehicle("Wagonr", "White", 4);
 * 
 * 
 * 
 */

class User {

    name: string; // property // instance property 
    static count: number = 0; // class Property 
    
    
    static MAX_HELLo: string = "max hello"
    age: number = 18;
    constructor(name: string) {
        this.name = name;
        User.count++;
    }

    greet() {
        console.log(`Hello how are you`);
    }
}

// instance is utkarshObj, animeshObj 
const utkarshObj = new User("Utkarsh");
const animeshObj = new User("Animesh");



console.log(utkarshObj);
console.log(animeshObj);

console.log(User.count);
// console.log(User.age);  // cant do this


// Encapsulation 
// abstraction 
// polymorphism
// inheritance
// composition

// prototypal inheritance  - JS
//

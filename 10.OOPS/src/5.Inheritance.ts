/**
 * 
 * Inhrtance - IS-A relationship
 * DOg is a animal
 * Cat is a animal
 * 
 * Inheritance is a mechanism where a class acquires the properties and behaviors of another class.
 * 
 * analogy: we are a child, we inherit the properties and behaviors of our parents.
 * parents will have its own properties and behaviors.
 * child will have its own properties and behaviors.
 * 
 * but child will have access to the properties and behaviors of the parent as well.
 * 
 * 
 */

// parent class (super class): 
class Animal {
    public name: string;

    constructor(name: string) {
        this.name = name;
    }

    eat() {
        console.log(`${this.name} is eating`);
    }

    sleep() {
        console.log(`${this.name} is sleeping`);
    }
}

/*
class Dog  {
    private breed: string;
    private name: string;


    constructor(breed: string, name: string) {
        this.breed = breed;
        this.name = name;
    }

    bark() {
        console.log(`${this.name} is barking`);
    }

    eat() {
        console.log(`${this.name} is eating dog`);
    }

    sleep() {
        console.log(`${this.name} is sleeping`);
    }

}


class Cat {
    private name: string;
    constructor(name: string) {
        this.name = name;
    }

    meow() {
        console.log(`${this.name} is meowing`);
    }

    eat() {
        console.log(`${this.name} is eating cat`);
    }

    sleep() {
        console.log(`${this.name} is sleeping`);
    }
}


const tommyDog = new Dog("Labrador", "Tommy");

const jerryCat = new Cat("Jerry");


tommyDog.eat();
jerryCat.eat();


console.log(tommyDog.eat === jerryCat.eat); // false
// there is a wastage 

*/


// dog is a child class 
// animal is a parent class 
/*
class Dog extends Animal {
    private breed: string;


    constructor(breed: string, name: string) {
        // super points to ANimal (parent class)
        // super() -> call the constructor of Animal class (parent class)
        super(name);
        this.breed = breed;
    }

    bark() {
        console.log(`${this.name} is barking`);
    }

}


const labradorDog = new Dog("Labrador", "Tommy");
const pugDog = new Dog("Pug", "Jerry");

console.log(labradorDog.name, 'labrador dog');
console.log(pugDog.name, 'pug dog');


labradorDog.bark();
labradorDog.eat();
labradorDog.sleep();


console.log(labradorDog.sleep === pugDog.sleep); // true
// because sleep is a method of the Animal class (parent class)
*/

/**
 * 
 * in js, java, .net we do not have multiple inheritance.
 * we can only inherit from one parent class.
 * 
 * 
 * 
 */
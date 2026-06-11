// ------------------- HOW TO CREATE OBJECTS IN JS -------------------

// object literal 
const obj = {
    name: "John",
    age: 20,
    city: "New York",
    getInfo: function() {
        return `Name: ${this.name}, Age: ${this.age}, City: ${this.city}`;
    }
}

// constructor function -> forces us to create objects as per schema/blueprint

function Person(name, age, city) {
    this.name = name;
    this.age = age;
    this.city = city;
    this.getInfo = function() {
        return `Name: ${this.name}, Age: ${this.age}, City: ${this.city} Person constructor`;
    }
}

const utkarshPerson = new Person("Utkarsh", 20, "New York");
const animeshPerson = new Person("Animesh", 21, "New York");

console.log(utkarshPerson);
console.log(animeshPerson.getInfo());
console.log(obj);


// Es6 Class 
// class is a blueprint for creating objects
class Vehicle {
    name;
    color;
    engine;

    constructor(name, color, engine) {
        this.name = name;
        this.color = color;
        this.engine = engine;
    }

    getInfo() {
        return `Name: ${this.name}, Color: ${this.color}, Wheels: ${this.wheels} Vehicle class`;
    }
}


const ferrari = new Vehicle("Ferrari", "Red", 4);

// waganar is the INSTANCE of the Vehicle class
const wagonr = new Vehicle("Wagonr", "White", 4);

console.log(ferrari);
console.log(ferrari.getInfo());




// variables -  which will store the values for us 
// 1. let 
// 2. var 


// let name = "John";

// Declaration 
/*
let name;


// Assignment
name = "John";
console.log(name);


var age = 12
console.log(age);




// constant - which will store the values for us 
// 1. const 
// with const we cant reassign the value to the variable

const lastName = "Doe";

lastName = "Smith";
*/


// ----------------- DATA Types In JS ---------------------------------
// 1. Primitive 
// 2. Non-Primitive


// 1. Primitive Data Types (Stack Memory)
// 1.1. Number
// 1.2. String
// 1.3. Boolean
// 1.4. Null
// 1.5. Undefined
// 1.6. Symbol
// 1.7. BigInt


// 2. Non-Primitive Data Types (Heap Memory)
// 2.1. Object
// 2.2. Array
// 2.3. Function



// --------------------------- String ---------------------------------

const name = "John";
const lastName = 'Doe';

const age = 20;


const sentence = `My name is ${name} ${lastName} and I am ${age} years old`;


// // --------------------------- Undefined ---------------------------------
// // js give the default value to variable which is not assigned any value
// // it determines the absence of value

// let myName;
// console.log(myName, 'myName');


// // --------------------------- Null ---------------------------------
// // it determines the absence of value


// let myName1 = null;
// console.log(myName1, 'myName1');


// // --------------------------- Boolean ---------------------------------
// // it determines the true or false value

// let isStudent = true;
// console.log(isStudent, 'isStudent');


// let isStudent1 = false;
// console.log(isStudent1, 'isStudent1');

// --------------------------- Object ---------------------------------
// ABc var name = nnew ABC();

/*

const person = {
    name: "John",
    age: 20,
    isStudent: true,
    city: "New York",
}

console.log(person, 'person');
console.log(person.name, 'person.name');
*/


// --------------------------- Array ---------------------------------

const numbers = [1, 2, 3, 4, 5];
const fruits = ["apple", "banana", "cherry"];

const hertoGen = [1, 2, "three", true, 5, null, undefined, {name: "John", age: 20}];



// --------------------------- Function ---------------------------------
// function are treated as objects 

// function declaration
function sum (a, b) {
    return a + b;
}

// sum()   // this is not function declaration 

// --------------------------- typeof ---------------------------------
/*
let name1 = "John";

console.log(typeof name1, ' typeof name1 String ');


name1 = true;

console.log(typeof name1, ' typeof name1 boolean');


name1 = 12;

console.log(typeof name1, ' typeof name1 number');

name1 = null;

console.log(typeof name1, ' typeof name1 null'); // BUG:  object

name1 = undefined;

console.log(typeof name1, ' typeof name1 undefined');


const person1 = {
    name: "John",
    age: 20,
    isStudent: true,
    city: "New York",
}

console.log(typeof person1, ' typeof person1 object');


const numbers1 = [1, 2, 3, 4, 5];
console.log(typeof numbers1, ' typeof numbers1 array');
*/


// --------------------------- Parsing and Execution of Javascript code ---------------------------------
// travellin in js happens in two phases:
// 1. Parsing - reads the code and create memory spaces for Variable and Function DECLARATION, i.e, Variable and function  declaration
// 2. Execution - we execute the code line by line\

// Example 1: 

/*
var a = 10;
console.log(a, 'a');

a = 13; 

console.log(a, 'a');


10 a
12 a

*/


// Example 2:

/*
console.log(a, 'a');
var a = 10;

console.log(a, 'a');
a = 12;
console.log(a, 'a');


undefined a
10 a
12 a
*/


// Example 3:

/*
var a;
console.log(a, 'answer 1');

a = 10;
console.log(a, 'answer 2');

undefined answer 1
10 answer 2
*/



// Example 4:

/*
var age1 = 20;
var person1 = {
    name: "John",
    age: 20,
    isStudent: true,
    city: "New York",
}
var isSunHot = true;

console.log(person1, 'person1');
console.log(age1, 'age1');
console.log(isSunHot, 'isSunHot');

{ name: 'John', age: 20, isStudent: true, city: 'New York' } person1
20 age1
true isSunHot
*/



// Example 5 
// var a;
// console.log(a, 'answer 1');


// function sum(a, b) {
//     const result = a + b;
//     return result;
// }

// var answer = sum(10, 20);
// console.log(answer, 'answer');

// a = 12;
// console.log(a, 'answer 3');




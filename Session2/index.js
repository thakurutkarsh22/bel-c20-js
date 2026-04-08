// Example 5
/*
var a;
console.log(a, 'answer 1');


function sum(a, b) {
    const result = a + b;
    return result;
}

var answer = sum(10, 20);
console.log(answer, 'answer 2');

a = 12;
console.log(a, 'answer 3');


// answeer
 * undefined answer 1
30 answer
12 answer 3
*/


// ---------------------- FUNCTIONS ---------------------------------
/*
// function declaration
function sum(a, b) {
    return a + b;
}

// function expression
const sum2 = function(a, b) {
    return a + b;
}

let name = "John";

// arrow function
const sum3 = (a, b) => {
    return a + b;
}

console.log(sum(10, 20), 'sum 1');
console.log(sum2(10, 20), 'sum 2');
console.log(sum3(10, 20), 'sum 3');
*/

/**
 * 30 sum 1
30 sum 2
30 sum 3
 */


// ---------------------- FUNCTIONS are first class Citizens/ Higher order functions ---------------------------------
/**
 * 1. Functions can be assigned to variables
 * 2. Functions can be passed as arguments to other functions
 * 3. Functions can return other functions
 */


// Example for practise to understand the functions are first class citizens
// Example 1
/*
function foo() {
    return 1;
}

const result = foo;
console.log(result, 'result1'); // [function: foo]
console.log(foo, 'result11'); 

const result2 = result();
console.log(result2, 'result2'); // 1 

const result3 = foo()
console.log(result3, 'result3'); // 1 

*/



// Example 2
// function foo() {
//     function bar() {
//         return "bar is nice";
//     }

//     bar()
//     return bar;
// }


// const result = foo();



// console.log(result(), 'result');
// console.log(bar(), 'foo');





// ------------------------- Call Site ---------------------------------
/*
function foo() {
    return 1;
}

const result = foo; // is this a call site? no 

const result2 = result(); // is this a call site? yes 
*/



/// ------------------------- THis Keyword ---------------------------------

// 1. default binding 

function foo() {
    // this -> context -> global object | undefined 
    console.log(this);
    console.log("foo inside the function");
}

// foo(); 
// is this a call site? yes 
// is there an extra info we are giving before or after the function call ? no 

// global object | undefined 



// 2. implicit binding

const person = {
    name: "John",
    age: 20,
    // mother
    foo: function() {
        // context -> this -> normal chat / Frustrated chat
        console.log(this);
        console.log("foo inside the function");
        console.log(this.name);
    }
}


// 11: AM   foo(); // is this a call site? yes  (NORMAL CHAT)


// 3PM :    person.foo(); // is this a call site? yes (Frustrated chat)


// 3. Explicit binding 

const johnPerson = {
    name: "John",
    age: 20,
    // mother
    foo: function() {
        console.log(this);
        console.log("foo inside the function");
        console.log(this.name);
    }
}

const utkarshPerson = {
    name: "Utkarsh",
    age: 21,
}


const amanPerson = {
    name: "Aman",
    age: 22,
}

// johnPerson.foo(); // what will be the context of foo for THIS LINE ONLY ? -> johnPerson

// johnPerson.foo.call(utkarshPerson); // what will be the context of foo for THIS LINE ONLY ? -> utkarshPerson


johnPerson.foo.apply(amanPerson, []); 

// bind -> TODO read




// is there an extra info we are giving before or after the function call ? yes 


// 4.  new keyword 
// TODO: 


// ------ Arrays ---------------------
// reduce, map, filter 









// ---------------------------- Covering up with let const and var ----------------------------

// console.log(a, 'a');
// var a = 12; 1996 


// TDZ -> Temporal Dead Zone
// console.log(a, 'a');
// let a = 12; // 2015

// console.log(a, 'a');
// const a = 12; // 2015


// Scope  - Global Scope, Function Scope, Block Scope



// function foo() {
//     var a = 12;
//     var b = 13;
//     var c = 14;
// }

// console.log(a, 'a');
// console.log(b, 'b');
// console.log(c, 'c');



// let a = 12;

// let b = 10

// let a = 99;



let a = 12;
console.log(a, 'a');

if(true) {
    let a = 99;
    console.log(a, 'a');
}

console.log(a, 'a');









// ---------------------------- ASYNC JS ----------------------------------




// scoping  for var 

//1. scope of var is global or function scope / Execution Context


// Example 1: 
/*var a = 12;
console.log(a, 'a');

if(true) {
    console.log(a, 'a');
}
console.log(a, 'a');
*/

/**
 * 12 a
12 a
12 a
 */

// Example 2: 
// var a = 12;
// console.log(a, 'a');

// if(true) {
//     var a = 99;
//     console.log(a, 'a');
// }
// console.log(a, 'a');

/*
12 a
99 a
99 a
*/


// Example 3: 

// var a = 12;
// console.log(a, 'a');

// function foo() {
//     var a = 99;
//     console.log(a, 'a');
//     return 12
// }
// const result = foo();
// console.log(result, 'result');
// console.log(a, 'a');

/**
 * 
 *  12 a
    99 a
    12 result
    12 a
 */


// Example 4:

var a = 12;
console.log(a, 'a');

function foo() {
    a = 99;
    console.log(a, 'a');
    return 12
}
const result = foo();
console.log(result, 'result');
console.log(a, 'a');


/**
 * 
 * 12 a
99 a
12 result
99 a
 */


// ( () => {

//     var a= 90;
//    console.log("I am an iifie") 
// } )()

// console.log(a, 'a');
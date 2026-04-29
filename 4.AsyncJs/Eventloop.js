//  event loop in node js 


// Example 1:

// console.log("A");

// setTimeout(() => {
//     console.log("B");
// }, 0);

// Promise.resolve().then(() => {
//     console.log("D");
// });

// console.log("C");




/**
 * A
C
D
B
 */


// Example 2:
// console.log("A");

// setTimeout(() => {
//     console.log("B");
// }, 0);

// Promise.resolve().then(() => {
//     console.log("D");
// });

// process.nextTick(() => {
//     console.log("E");
// });

// console.log("C");


// example 3: 

const fs = require('fs');

console.log("A");

setTimeout(() => {
    console.log("B");
}, 0);

Promise.resolve().then(() => {
    console.log("E");
});

process.nextTick(() => {
    console.log("D");
});

fs.readFile('hello.txt', 'utf8', (err, data) => {
    console.log(data);
});

fs.readFile('hello.txt', 'utf8', (err, data) => {
    console.log(data);
});

fs.readFile('hello.txt', 'utf8', (err, data) => {
    console.log(data);
});

fs.readFile('hello.txt', 'utf8', (err, data) => {
    console.log(data);
});

// TODO: //confirm for the multiple files 


console.log("C");

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

// const fs = require('fs');

// console.log("A");

// setTimeout(() => {
//     console.log("B");
// }, 0);

// Promise.resolve().then(() => {
//     console.log("E");
// });

// process.nextTick(() => {
//     console.log("D");
// });

// fs.readFile('hello.txt', 'utf8', (err, data) => {
//     console.log(data);
// });

// fs.readFile('hello.txt', 'utf8', (err, data) => {
//     console.log(data);
// });

// fs.readFile('hello.txt', 'utf8', (err, data) => {
//     console.log(data);
// });

// fs.readFile('hello.txt', 'utf8', (err, data) => {
//     console.log(data);
// });

// // TODO: //confirm for the multiple files 


// console.log("C");


// how we can increase the threadpool size ? UV_THREADPOOL_SIZE = 10000
// by default it is 4 in node js 


// setTImeout (() => {}, 0 ) -> setImmediate(() => {})



// example 4: 
// const fs = require('fs');

// console.log("A");

// setTimeout(() => {
//     console.log("B");
// }, 0);

// Promise.resolve().then(() => {
//     console.log("E");
// });

// process.nextTick(() => {
//     console.log("D");
// });

// fs.readFile('hello.txt', 'utf8', (err, data) => {
//     console.log(data);
// });


// setImmediate(() => {
//     console.log("F");
// })


// // you are waitin here fro 500ms 
// // meanwhile your OS scheduler however it is later (~2ms  ) we gurantee that 
// // timer will be registered and callback will be in the queue 
// for(let i = 0; i < 1000000000; i++) {
//     // do nothing
//     // not a good code we are blocking the main thread for 500ms 
// }


// console.log("C");


/**
 * ANSWER 1: 
 *  A
    C
    D
    E
    B
    F
    hello
 * 
 * 
 * Answer 2:
 * 
 *  A
    C
    D
    E
    F
    B
    hello
 * 
 * 
 */

// Example 5: 

const fs = require('fs');


console.log("A");

fs.readFile('hello.txt', 'utf8', (err, data) => {
    setTimeout(() => {
        console.log("B");
    }, 0);
    setImmediate(() => {
        console.log("F");
    });
});

console.log("C");

/**
 * 
 * A
C
F
B
 */

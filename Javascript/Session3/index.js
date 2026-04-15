// -------------------------- Async JS ---------------------------------

// Sync code  
// console.log("I am line 1");
// console.log("I am line 2");
// console.log("I am line 3");
// console.log("I am line 4");
// console.log("I am line 5");
// console.log("I am line 6");
// console.log("I am line 7");
// console.log("I am line 8");
// console.log("I am line 9");
// console.log("I am line 10");




// Example 1: 
/*
console.log("Hello");


// i will implement () => {}, 1000ms => 1   
setTimeout(  () => {
    console.log("Inside the setTimeout");
}, 3000);

console.log("Bye");
*/


/**
 * Hello
    Bye
    Inside the setTimeout
 */


    // EXAMPLE 2
// console.log("Hello"); // 0.5s

// setTimeout(  () => {
//     console.log("Inside the setTimeout");
// }, 1000);

// // Mimic ~3s of synchronous work: 10 logs, ~300ms apart (blocks the event loop).
// const loopStart = Date.now();
// for (let n = 1; n <= 10; n++) {
//     const target = loopStart + n * 300;
//     while (Date.now() < target) {
//         /* spin until wall clock reaches slot */
//     }
//     console.log("Bye" + n);
// }


// Expected output (1s timer is scheduled but cannot run until this ~3s loop finishes):
/*
Hello
Bye1
Bye2
Bye3
Bye4
Bye5
Bye6
Bye7
Bye8
Bye9
Bye10
Inside the setTimeout
*/

// -------------------------- Event Loop Algorithm ---------------------------------
// VIdeo: https://www.youtube.com/watch?v=8aGhZQkoFbQ

// TODO: utkarsh 


// Example 3
// console.log("Hello");

// // nodejs repo : libuv bedefault its 1ms C++
// setTimeout(  () => {
//     console.log("Inside the setTimeout");
// }, 0);

// console.log("bye");



// ----------------------------------- PROMISE ---------------------------------

// promise is a object that is a placeholer for the future value 

// State of a promise 
// 1. Pending
// 2. Fulfilled
// 3. Rejected

// Promise is a constructor function that takes a callback function as an argument
// The callback function takes two arguments: resolve and reject
// Resolve is a function that is called when the promise is fulfilled
// Reject is a function that is called when the promise is rejected

// If we want to consume the data -> then block 
// If we want to handle the error -> catch block 
// If we want to handle the final result -> finally block 



// Example 1: 

/*
console.log("a");

const url = "https://jsonplaceholder.typicode.com/posts";

const responsePromiseBill = fetch(url); // 5seconds 

console.log(responsePromiseBill);

console.log("b");
*/


/**
 * 
 *  a
    Promise { <pending> }
    b
 */


// Consume a promise Example 2

// const url = "https://jsonplaceholder.typicode.com/posts";

// const responsePromiseBill = fetch(url); // 5 seconds "response is a very shabby object" // fries left and right in the plate 


// // promise was respolved
// responsePromiseBill.then((response) => {
//     console.log('in response response', response);
//     return response.json(); // arranging this response // arranging the fries
// }).then((data) => {
//     console.log('in data data');
//     console.log(data[0], 'data');
// })


// Example 3


// const url = "https:/wekihrqweiehflajflaiuhf";
// // const url = "https://jsonplaceholder.typicode.com/posts";

// const responsePromiseBill = fetch(url); // 5 seconds -> no reponse from this bill 

// responsePromiseBill
// .then((response) => {
//     console.log('in response response');
//     return response.json(); // arranging this response // arranging the fries
// }).then((data) => {
//     console.log('in data data');
//     console.log(data[0], 'data');
// }).catch((error) => {
//     console.log('in error error', error);
// })


// Example 4


// console.log("welcome to store");

// const url = "https://jsonplaceholder.typicode.com/posts";

// const responsePromiseBill = fetch(url); // 5 seconds -> orderering and getting bill 

// responsePromiseBill
// .then((response) => {
//     console.log('in response');
//     return response.json(); // arranging this response // arranging the fries
// }).then((data) => {
//     console.log('in data');
//     console.log(data[0], 'data');
// }).catch((error) => {
//     console.log('in error error', error);
// })


// console.log("chat with friends");
// console.log("scroll mobile");
// console.log("see outside");


/**
 * welcome to store
chat with friends
scroll mobile
see outside
in response
in data
{
  userId: 1,
  id: 1,
  title: 'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
  body: 'quia et suscipit\n' +
    'suscipit recusandae consequuntur expedita et cum\n' +
    'reprehenderit molestiae ut ut quas totam\n' +
    'nostrum rerum est autem sunt rem eveniet architecto'
} data
 */



// Example 5: 


// console.log("welcome to store");

// const url = "https://jsonplaceholder.typicode.com/posts";

// const responsePromiseBill = fetch(url); // 5 seconds -> orderering and getting bill 

// responsePromiseBill
// .then((response) => {
//     console.log('in response');
//     return response.json(); // arranging this response // arranging the fries
// }).then((data) => {
//     throw new Error("Something went wrong");
//     console.log('in data');
//     console.log(data[0], 'data');
// }).catch((error) => {
//     console.log('in error error', error);
// })


// console.log("chat with friends");
// console.log("scroll mobile");
// console.log("see outside");



// Example 6: 




// const url = "https://jsonplaceholder.typicode.com/posts";

// const responsePromiseBill = fetch(url); // 5 seconds 

// responsePromiseBill
// .then((response) => {
//     console.log('Level 1');
//     return response.json(); 
// }).then((data) => {
//     console.log('Level 2');
// })
// .then((data) => {
//     console.log('level 3', data);
//     return 1
// })
// .then((data) => {
//     console.log('level 4', data);
// })
// .catch((error) => {
//     console.log('level 5', error);
// })



// example 7: 
// const url = "https://jsonplaceholder.typicode.com/posts";

// const responsePromiseBill = fetch(url); // 5 seconds 

// responsePromiseBill
// .then((response) => {
//     console.log('Level 1');
//     return response.json(); 
// }).then((data) => {
//     console.log('Level 2');
// })
// .catch((error) => {
//     console.log('level 3', error);
// })
// .then((data) => {
//     console.log('level 4', data);
//     return 1
// })
// .then((data) => {
//     console.log('level 5', data);
// })


// ----------------------------------- Async await ---------------------------------



// console.log("A");

// const url = "https://jsonplaceholder.typicode.com/posts";
// const responsePromiseBill = fetch(url); // 5 seconds 

// responsePromiseBill
// .then((response) => {
//     console.log('Level 1');
//     return response.json(); 
// }).then((data) => {
//     console.log('Level 2');
//     console.log(data[0], 'data');
// }).finally(() => {
//     console.log('finally');
// })

// console.log("B");




async function fetchData() {
    try {
        const url = "https://jsonplaceholder.typicode.com/posts";
        const response = await fetch(url); // my executor is in illusion of waiting for the reponse for 5 sec 
        const data = await response.json(); // we wait form the shabby reponse to convert it into a json object 1 sec
        console.log(data[0], 'data');

    } catch (error) {
        const code = error.code;
        if(code === 'ERR_INVALID_URL') {
            // handle here 
        }
        console.log('error', error);
    } finally  {
        // cleanpup
    }
}


// use this with caution,  with this we block the main thread for 5 seconds
console.log("A");
await fetchData(); // returns a promise 
console.log("B");

/*
A 
DATA
B
*/



// it will not block the main thread
console.log("A");
fetchData(); // returns a promise 
console.log("B");

/**
 * A
 * B
 * DATA
 */
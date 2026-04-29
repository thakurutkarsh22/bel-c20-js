//  callback



// function abc( fn ) {

// }


// // fn is known as callback function 


// function sum(a , b) {
//     return a + b
// }

// abc(  sum   )

// // callback function 



// ------ I am create maggie and i want to eat it ------ BAD EXAMPLE 

const time = Date.now();

// function log(message) {
//     const timeStamp = ((Date.now() - time) / 1000).toFixed(1);
//     console.log(`[t = ${timeStamp}s]`, message);
// }

// function boilWater() {
//     log("Step 1: Start boiling water..  ");
//     setTimeout(() => {
//         log("Step 1: Done Boiling water");
//     }, 1500);
// }


// function addNoodles() {
//     log("Step 2: Start Adding noodles... ");
//     setTimeout(() => {
//         log("Step 2: Noodles are softened");
//     }, 1000);
// }

// function addTastemaker() {
//     log("Step 3: Start Adding tastemaker... ");
//     setTimeout(() => {
//         log("Step 3: Done mixing the tastemaker");
//     }, 800);
// }

// function serverNoodles() {
//     log("Step 4: Serving noodles ");
//     setTimeout(() => {
//         log("Step 4: done serving");
//     }, 800);
// }

// function eatNoodles() {
//     log("Step 5: Eat ");
//     setTimeout(() => {
//         log("Step 5: Done eating");
//     }, 1200);
// }



// BAD EXAMPLE  
/*

boilWater();
addNoodles();
addTastemaker();
serverNoodles();
eatNoodles();


boilWater();
addTastemaker();
addNoodles();

serverNoodles();
eatNoodles();

*/


/**
 * 
[t = 0.0s] Step 1: boiling water... 
[t = 0.0s] Step 2: Adding noodles... 
[t = 0.0s] Step 3: Adding tastemaker... 
[t = 0.0s] Step 4: Serving noodles 
[t = 0.0s] Step 5: Eat 
[t = 0.8s] Step 3: Done mixing the tastemaker
[t = 0.8s] Step 4: done serving
[t = 1.0s] Step 2: Noodles are softened
[t = 1.2s] Step 5: Done eating
[t = 1.5s] Step 1: Done Boiling water
 */


// GOOD EXAMPLE 




function log(message) {
    const timeStamp = ((Date.now() - time) / 1000).toFixed(1);
    console.log(`[t = ${timeStamp}s]`, message);
}


// callback: () => { addNoodles()  }

function boilWater(callback) {
    log("Step 1: Start boiling water..  ");
    setTimeout(() => {
        log("Step 1: Done Boiling water");

        if(callback) {
            callback(); // addNoodles // addTastemaker // serverNoodles // eatNoodles
        }
    }, 1500);
}


function addNoodles(callback) {
    log("Step 2: Start Adding noodles... ");
    setTimeout(() => {
        log("Step 2: Noodles are softened");

        if(callback) {
            callback();
        }
    }, 1000);


    return undefined
}

function addTastemaker() {
    log("Step 3: Start Adding tastemaker... ");
    setTimeout(() => {
        log("Step 3: Done mixing the tastemaker");
    }, 800);
}

function serverNoodles() {
    log("Step 4: Serving noodles ");
    setTimeout(() => {
        log("Step 4: done serving");
    }, 800);
}

function eatNoodles() {
    log("Step 5: Eat ");
    setTimeout(() => {
        log("Step 5: Done eating");
    }, 1200);
}

// FOR UNDERSTANDING TAKE THIS EXAMPLE : BAD EXAMPLE it will not work 
// boilWater( addNoodles() ); // 

// GOOD EXAMPLE for understanding 
// boilWater( () => { addNoodles() } );



// 2 level 
// boilWater( function () { 
//     addNoodles( function () {   
//         addTastemaker() 
//     });
// })


// me wanting maggie like this : 
// boilWater(() => {
//     addNoodles( () => {   addTastemaker() } );
// });


// nitin like maggie in these steps  

// const addNoodleWork = () => {
//     addTastemaker();
// }



// Pyramid of Doom
// boilWater(() => {
//     addNoodles(() => {
//         addTastemaker(() => {
//             serverNoodles(() => {
//                 eatNoodles();
//             });
//         });
//     });
// });


// boilWater( addNoodles() ); // you are calling the addNoodles function and passing the 
// result of addNoodles  to the boilWater function and THAN YOU ARE CALLING BOILING WATER




// I am saying hey boilWater do your work first than call the callback function 




// EXPLANATION :
// function sum(a, b) {
//     return a + b;
// }

// function utkarshGrade() {
//     return 8;
// }

// const result = sum(utkarshGrade(), 20);
// console.log(result, 'result');



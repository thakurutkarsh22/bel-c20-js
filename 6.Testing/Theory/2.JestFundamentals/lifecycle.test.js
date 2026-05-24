// jest auto-discovers any file ending in .test.js (or .spec.js)
// `describe` groups related tests, `test` (alias `it`) defines a single test case

const { sum, multiply, isEven } = require('./lifecycle');


// describe('math utilities', () => {

//     // will run before each test ? 
//     beforeEach(() => {
//         console.log("beforeEach");
//     });

//     afterEach(() => {
//         console.log("afterEach");
//     });

//     // the basic test case the task asked for
//     it('should check for sum of two numbers', () => {
//         console.log("Test 1 test for sum of two numbers");
//         // arranging for the data
//         const number1 = 3;
//         const number2 = 2;

//         const myExpectedResult = 5 ;

//         // act 
//         const resultFromFunction = sum(number1, number2); // 5

//         // Assert
//         expect(resultFromFunction).toBe(myExpectedResult);
//     });

//     // // a couple of bonus tests so you can see common matchers in action
//     test('test for multiplication', () => {
//         console.log("Test 2 test for multiplication");
//         const number1 = 3;
//         const number2 = 2;

//         const myExpectedResult = 6 ;

//         // act 
//         const resultFromFunction = multiply(number1, number2); // 6

//         // Assert
//         expect(resultFromFunction).toBe(myExpectedResult);
//         expect(resultFromFunction).not.toBe(100);
//     });

//     test('isEven should be true for 10 and false for 7', () => {
//         console.log("Test 3 test for isEven");
//         expect(isEven(10)).toBe(true);
//         expect(isEven(7)).toBe(false);
//     });
// });


describe('lifecycle', () => {  
    beforeEach(() => {
        // reset of the data 
        console.log("beforeEach");
    });

    afterEach(() => {
        console.log("afterEach");
    });


    beforeAll(() => {
        // DB setup 
        console.log("beforeAll");
    });

    afterAll(() => {
         // acutal cleaning you will do here
        console.log("afterAll");
    });

    // create user 
    test('test for sum of two numbers', () => {
        console.log("Test 1 test for sum of two numbers");
    });

    // edit the user 
    test('test for multiplication', () => {
        console.log("Test 2 test for multiplication");
    });


    // pay the user 
    test('test for isEven', () => {
        console.log("Test 3 test for isEven");
    });
});
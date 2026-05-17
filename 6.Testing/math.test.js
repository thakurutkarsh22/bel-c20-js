// jest auto-discovers any file ending in .test.js (or .spec.js)
// `describe` groups related tests, `test` (alias `it`) defines a single test case

const { sum, multiply, isEven } = require('./math');


describe('math utilities', () => {

    // the basic test case the task asked for
    it('should check for sum of two numbers', () => {
        // arranging for the data
        const number1 = 3;
        const number2 = 2;

        const myExpectedResult = 5 ;


        // act 
        const resultFromFunction = sum(number1, number2);


        // Assert
        // expect(resultFromFunction).toBe(myExpectedResult);
        // expect(resultFromFunction).toEqual(myExpectedResult);
        // expect(resultFromFunction).toBeTruthy();
        expect(resultFromFunction).toBeFalsy();




    });

    // // a couple of bonus tests so you can see common matchers in action
    // test('multiply of 4 and 5 should be 20', () => {
    //     expect(multiply(4, 5)).toBe(20);
    // });

    // test('isEven should be true for 10 and false for 7', () => {
    //     expect(isEven(10)).toBe(true);
    //     expect(isEven(7)).toBe(false);
    // });
});

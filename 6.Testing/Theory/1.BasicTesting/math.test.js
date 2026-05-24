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
        const resultFromFunction = sum(number1, number2); // 5


        // Assert
        expect(resultFromFunction).toBe(myExpectedResult); // -> this is the actual behaviour we hsould test 
        // expect(resultFromFunction).toEqual(myExpectedResult);
        // expect(resultFromFunction).toBeTruthy();
        // expect(resultFromFunction).toBeFalsy();
        // can you drink alcohol 25 years 
        // expect(resultFromFunction).toBeGreaterThan(0); // false -> this will pass the test but it is not the actual behaviour we should test 

        expect(resultFromFunction).not.toBe(100);



    });

    // // a couple of bonus tests so you can see common matchers in action
    test('test for string matching', () => {
        // arranging for the data
        const myString = "HelloWorld@gmail.com";
        
        const myExpectedResult = "World";

        // Assert
        expect(myString).toContain(myExpectedResult);

        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        expect(myString).toMatch(emailRegex);

        const myArray = [1, 2, 3, 4, 5];
        expect(myArray).toContain(3);
        expect(myArray).toHaveLength(5);

        const myObject = {id: 1, name: "John"};
        expect(myObject).toHaveProperty("id");

        expect(() => {
            throw new Error("This is a test error");
        } )
        .toThrow("This is a test error");
    });

    // test('isEven should be true for 10 and false for 7', () => {
    //     expect(isEven(10)).toBe(true);
    //     expect(isEven(7)).toBe(false);
    // });
});

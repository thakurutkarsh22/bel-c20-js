const SpyExample = require("./SpyExample");
// const { add } = require("./SpyExample");

// describe('Normal test case for add without spy', () => {
//     it('should add two numbers', () => {
//         const result = add(1, 2);
//         expect(result).toBe(3);
//     });
// });

describe('Spy test case for add', () => {

    beforeEach(() => {
    });

    it('should add two numbers', () => {
        const addSpy = jest.spyOn(SpyExample, 'add').mockReturnValue(3);
        const result = SpyExample.add(1, 2);

        expect(result).toBe(3);
        expect(addSpy).toHaveBeenCalledWith(1, 2);
        expect(addSpy).toHaveBeenCalledTimes(1);
        addSpy.mockRestore();
    });
});


describe('Spy test case for efficientFunction', () => {
    it('should call add exactly 10 times', () => {
        // arrange
        const addSpy = jest.spyOn(SpyExample, 'add').mockReturnValue(0);

        // act
        SpyExample.efficientFunction(); // actualy calling efficient 

        // assert
        expect(addSpy).toHaveBeenCalledTimes(1);
    });
});

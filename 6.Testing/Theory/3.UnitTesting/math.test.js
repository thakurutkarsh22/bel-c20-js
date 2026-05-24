const { divide } = require("./math");

describe('math utilities', () => {
    it('should check for sum of two numbers', () => {
        const result = divide(10, 2);
        expect(result).toBe(5);
    });
});
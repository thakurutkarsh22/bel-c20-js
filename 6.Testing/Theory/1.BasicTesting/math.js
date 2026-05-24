// the code-under-test: a few tiny pure functions so the tests stay easy to read

function sum(a, b) {
    return a + b;
}

function multiply(a, b) {
    return a * b;
}

function isEven(n) {
    return n % 2 === 0;
}

module.exports = { sum, multiply, isEven };

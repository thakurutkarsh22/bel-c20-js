function add(a, b) {
    console.log('adding', a, b);
    return a + b;
}

function subtract(a, b) {
    console.log('subtracting', a, b);
    return a - b;
}


// I want a function that calls add 10 times 

function efficientFunction() {
    for (let i = 0; i < 1; i++) {
        module.exports.add(i, i);
    }
}
module.exports = { add, subtract, efficientFunction };
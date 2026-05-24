const fs = require('fs');
//  1. Function -> pure function 




// mixing parsing logic with DISK I/O
// Hard to test with UNIT TESTING 
// Good for integration testing
// IMPURE FUNCTION 
function loadAndValidate(pathToFile) {
    // 1. load the file
    const fs = fs.readFileSync(pathToFile, 'utf8');
    const data = JSON.parse(data);
    // 2. validate the data
    
    if(!data.email) {
        throw new Error('Email is required');
    }
    
    // 3. return the data
    
    return data;
}


// pure validator function 
// Pure function 
// easiest to test with UNIT TESTING 
function validate(data) {
    if(!data.email) {
        throw new Error('Email is required');
    }
    return data;
}


// 2. Boundary values 
/*
NUMBER: 0, -ve, NaN, Infinity, Max, Min, check for this edge cases( 0.1 + 0.2 = 0.30000000000000004 )
String: "", " ", unicode, "\n", "excape characters "
Data: epoch, leap years.

/**
 * 
 * Z - Zero/empty
 * O - One
 * M- Many
 * B- Boundary
 * I - Interface Contract
 * E - Error Cases/ Exceptions
 * S - Simple cases
 */

/**
 * // us this is good
 * it("divide", () => {
 * 
 *     const result = divide(10, 2);
 *     expect(result).toBe(5);
 * })
 * 
 */



// int abc = 10943567304985673048965038495 ;

// let age = 123918374123876481232456032894560328


// Async testing 
// fetch-users


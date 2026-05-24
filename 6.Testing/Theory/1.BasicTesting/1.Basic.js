// 1. why testing is important?
// - To ensure that the code is working as expected
// - To catch bugs early
// - To improve the quality of the code
// - To make the code more reliable
// - To make the code more maintainable
// - To make the code more scalable
// - To make the code more secure
// - To make the code more efficient
// - To make the code more reusable
// - To make the code more testable




// 2. types of test ? 
// 2.1. Unit Test - Test a single unit of code, function , add fucntion (util files) 
    // fully isolated test , independent of other code
    // DEV - COST: Cheap. 
    // RUN COST : Cheap.(ms)
    // what is does: check for the bugs in a single function 
    // what it not does: any other bugs in module

// 2.2. Integration Test - Test the integration of multiple units of code
// Controlle + service + database 
// DEV - COST: Medium. 
// RUN COST : Medium.(s)
// what is does: it catches the bugs at module level (user activity flow)
// what it not does: real network issues, browser issues, 



// 2.3 E2E Test ( end to end test ) - Test the entire system, from the user's perspective
// open the browser and test the entire system, from the user's perspective
// DEV - COST: High. 
// RUN COST : High.(s)
// what is does: it catches the bugs at system level (user activity flow)
// what it not does:  almost checks everything (flakyness might be the problem)




//3. AAA pattern -> Arrange, Act, Assert








const { sum, HomeResponse, AboutResponse, multiply, fitness } = require("../../Controllers/HomeController");

describe('HomeController checking math', () => {
    it('should sum two numbers', () => {

        // arrange

        const number1 = 1;
        const number2 = 2;
        const expectedResult = 3;

        // act
        const result = sum(number1, number2);

        // assert 
        expect(result).toBe(expectedResult);
    });

    it('should multiply two numbers', () => {
        const number1 = 2;
        const number2 = 3;
        const expectedResult = 6;

        const result = multiply(number1, number2);
        expect(result).toBe(expectedResult);
    });
});



function buildRes() {
    const resObj = {
        json: jest.fn(), // mock function - that returns no value // -> this retuns undefined 
        send: jest.fn(), // mock function - that returns no value // -> this retuns undefined 
        status: jest.fn().mockReturnThis() // -> this -> context  -> { send: jest.fn(), status: jest.fn().mockReturnThis()}
    }

    return resObj;
}

function  buildReq() {
    return {};
}



describe('HomeController checking string', () => {
    it('home response should send the hello-world string', () => {
        // arrange
        
        const req = buildReq();
        const res = buildRes();

        // act 
        HomeResponse(req, res);

        // assert

        expect(res.send).toHaveBeenCalledTimes(1);
        expect(res.send).toHaveBeenCalledWith("Hello World express change!!!"); // it check for the behaviour of the reponse.

    });

    it('about response should send the about page string', () => {
        // arrange 
        const req = buildReq();
        const res = buildRes();

        // act
        AboutResponse(req, res);

        // assert
        expect(res.status).toHaveBeenCalledTimes(1);
        expect(res.status).toHaveBeenCalledWith(201); // 

        expect(res.send).toHaveBeenCalledTimes(1);
        expect(res.send).toHaveBeenCalledWith("About Page");
    });


    it('fitness response should send the fitness data', () => {
        // arrange
        const req = buildReq();
        const res = buildRes();

        // act
        fitness(req, res);
        
        // assert
        expect(res.json).toHaveBeenCalledTimes(1);
        expect(res.json).toHaveBeenCalledWith({
            name: "akash",
            age: 28,
            heigh: 160,   
            shouldSleepEightHours : true,
            hobbies: ["gym", "running", "swimming"],
            gymAddress: {
                city: "Delhi",
                state: "Delhi",
                pincode: 110092
            }
        });
    });
});






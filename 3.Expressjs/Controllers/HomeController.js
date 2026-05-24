// Controller are REAL Request Handler functions

function HomeResponse (req, res) {
    // console.log("req", req);
    // console.log("res", res);
    // send keyword is not in nodejs 
    // behind the scenes uses res.write and res.end

    // stringification behind the scenes
    res.send("Hello World express change!!!");
}

function AboutResponse (req, res) {
    res.status(201).send("About Page");
}

function sum(a,b) {
    return a + b;
}

function multiply(a,b) {
    return a * b;
}

function fitness (req, res) {
    const payload = {
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
    }

    // send the responsee to the client in raw format
    // we are doing the content-type header to application/json
    res.json(payload);
}

module.exports = {  
    HomeResponse,
    AboutResponse,
    sum,
    multiply,
    fitness
}

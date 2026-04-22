// NPM - Node Package Manager - it is a package manager for the node.js
// npm init  - convert normal folder to npm repository/folder and create package.json file


const express = require('express');
const HomeRoute = require('./Routes/HomeRoutes');
const UserActivityRoute = require('./Routes/UserActivityRoutes');
const server = express();
const PORT = 8089;




// use supports all the http methods - get, post, put, delete, patch
server.use("/", HomeRoute)


// (req, res ) => {} - callback function - request handler function
server.get("/fitness", (req, res) => {
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

    //1. behind the scenes .json is doing stringification 
    //2. also setting the content type header to application/json
    // 3. behind the scenes uses res.write and res.end
    res.json(payload)
});


server.use("/api/v1/userActivity", UserActivityRoute)


// server.get("/api/v1/users/allUsers", (req, res) => {
//     const users = require("./data");
// });


server.listen(PORT, () => {
    console.log(`Thumbs up Server is running on port Express ${PORT}`);
});
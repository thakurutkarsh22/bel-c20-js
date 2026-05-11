// NPM - Node Package Manager - it is a package manager for the node.js
// npm init  - convert normal folder to npm repository/folder and create package.json file


const express = require('express');
const HomeRoute = require('./Routes/HomeRoutes');
const AuthRoute = require('./Routes/AuthRoute');
const UserActivityRoute = require('./Routes/UserActivityRoutes');
const { default: mongoose } = require('mongoose');
// load all the environment variables from the .env file to the process.env object
require('dotenv').config()
const server = express();
const PORT = process.env.SERVER_PORT;


// TODO: we will talk 
server.use(express.json()); 

// use supports all the http methods - get, post, put, delete, patch
server.use("/", HomeRoute)


// (req, res ) => {} - callback function - request handler function
server.get("/fitness", (req, res, next) => {
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

// user activity route 
server.use("/api/v1/userActivity", UserActivityRoute)

// register and login routes 
server.use("/api/v1/auth", AuthRoute)


// server.get("/api/v1/users/allUsers", (req, res) => {
//     const users = require("./data");
// });

const dbURI = "mongodb://localhost:27017/";
const dbName = "bel20";
const dbConnectionString = `${dbURI}${dbName}`;

mongoose.connect(dbConnectionString).then(() => {
    console.log("Connected to the database");
}).catch((err) => {
    console.log("Error connecting to the database", err);
});


server.listen(PORT, () => {
    console.log(`Thumbs up Server is running on port Express ${PORT}`);
});
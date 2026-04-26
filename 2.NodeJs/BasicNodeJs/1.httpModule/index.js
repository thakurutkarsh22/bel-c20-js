// import http from 'node:http'; // es6
const http = require('node:http'); // common js
const users = require('../../3.Expressjs/data');
const PORT = 8089;


const server = http.createServer((req, res) => {

    const url = req.url;

    if(url === '/') {
        res.write("<h1>Hello World1</h1>");
        res.write("<h1>Hello World2</h1>");

        // ends the response and tells the client that the response is over
        // otherwise the client will keep waiting for the response to end
        res.end("Hello World3");
    } else if(url === '/about') {
        res.end("About Page");
    } else if(url === '/fitness') {
        
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

        // set the medatadata -> data about the actual data (payload)

        res.setHeader("Content-Type", "application/json");

        const payloadString = JSON.stringify(payload); // '{"name":"akash","age":28,"heigh":160,"shouldSleepEightHours":true,"hobbies":["gym","running","swimming"],"gymAddress":{"city":"Delhi","state":"Delhi","pincode":110092}}'
        
        res.end(payloadString)
    }
    // how to implement query params in node
    else if(url.startsWith('/users')) {
        // Manual query parsing
        const [path, queryString] = req.url.split('?');
        const query = {};
        if (queryString) {
            const pairs = queryString.split('&');
            pairs.forEach(pair => {
                const [key, value] = pair.split('=');
                query[key] = value;
            });
        }
        const gender = query.gender;

        let filteredUsers = users;
        if (gender) {
            filteredUsers = users.filter(user => user.gender === gender);
        }

        res.setHeader("Content-Type", "application/json");
        res.end(JSON.stringify({
            success: true,
            data: filteredUsers,
            size: filteredUsers.length
        }));
    }
    
    else {
        res.end("404 Not Found");
    } 


    // how to implment query params in node
    

    console.log("request received", url);

    // res.end("Hello World");
});


server.listen(PORT, () => {
    console.log(`Thumbs up 
        Server is running on port ${PORT}`);
});


















/// nodejs: Common JS 


// FroentENd - React, Angular, Vue 
// Ecma script
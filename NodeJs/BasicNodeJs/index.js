// import http from 'node:http'; // es6
const http = require('node:http'); // common js
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
    } else {
        res.end("404 Not Found");
    }
    

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
// NPM - Node Package Manager - it is a package manager for the node.js
// npm init  - convert normal folder to npm repository/folder and create package.json file


const express = require('express');
const server = express();
const PORT = 8089;


server.get("/", (req, res) => {
    // send keyword is not in nodejs 
    // behind the scenes uses res.write and res.end
    res.send("Hello World express");
})

server.get("/abouts", (req, res) => {
    res.send("About Page");
})





server.listen(PORT, () => {
    console.log(`Thumbs up Server is running on port Express ${PORT}`);
});
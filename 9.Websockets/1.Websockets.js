/**
 * 
 * websockets use tcp connection to send and receive data, 
 * tcp connection is live till the connection is closed
 * 
 * 
 * 
 */


// 

const http = require('http');
const express = require('express');
const expressServer = express();
const WebSocketServer = require('websocket').server;
const httpServer = http.createServer(expressServer);

// ----------------------- create express server -----------------------

expressServer.use(express.json());



// ----------------------- create web socket server -----------------------

const webSocketServer =  new WebSocketServer({
    httpServer: httpServer,
    autoAcceptConnections: false,
});



let connections = []; // [wsConnection1, wsConnection2, wsConnection3]


webSocketServer.on('request', (request) => {
    const origin = request.origin;
    // auth 
    console.log('origin', origin);
    
    const hostWs = "http://localhost:8089";

    // check for origin -> outside of the server 

    // -- -----   HOW TO REJECT the connection ---- 
    
    // if(origin !== hostWs) {
    //     return request.reject();
    // }

    // ACCEPT the connectoin
    const connection = request.accept();
    connections.push(connection);
    console.log('new connection', connection);


    // notify all the connection exept who is sending the message d
    connection.on("message", (message) => {
        // have for encoding check 
        connections.forEach(conn => {
            if(conn !== connection) {
                conn.sendUTF(message.utf8Data);
            }
        });
    });

    // notification when soemone joined 
    connections.forEach(conn => {
        conn.sendUTF(`${connection.remoteAddress} joined the chat`);
    });

    // close the connection 
    connection.on("close", () => {
        connections = connections.filter(conn => conn !== connection);
        console.log('connection closed', connection);
    });


});

httpServer.listen(8089, () => {
    console.log('Server is running on port 8089');
});
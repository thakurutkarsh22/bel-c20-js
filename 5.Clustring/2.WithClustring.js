const cluster = require('cluster');
const http = require('http');
const os = require('os');

const numCPUs = os.cpus().length - 1; // 25

if (cluster.isMaster) {
    // 
    for(let i = 0; i < numCPUs; i++) {
        cluster.fork();
        // fork - copy 
        // we are creating 13 copies of the  process
    }


    cluster.on('exit', (worker, code, signal) => {
        console.log(`Worker process ${worker.process.pid} died`);
        cluster.fork();
    });

} else {


    const server = http.createServer((req, res) => {
        if(req.url === '/') {
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end('<h1>Hello World</h1>');
        } else if(req.url === '/about') {
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end('<h1>About</h1>');
        } else if(req.url === '/math') {
    
            // mimic 10 sec of cpu work
            for(let i = 0; i < 20000000000; i++) {
                // do nothing
            }
            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({
                result: 'success'
            }));
        } else {
            res.writeHead(404, { 'Content-Type': 'text/html' });
            res.end('<h1>404 Not Found</h1>');
        }

        console.log(`Worker process ${process.pid} is handling the request for url ${req.url}`);
    });
    
    
    
    server.listen(8089, () => {
        console.log(`Worker process ${process.pid} is running on port 8089`);
    });

}
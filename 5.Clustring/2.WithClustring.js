const cluster = require('cluster');
const http = require('http');
const os = require('os');

const numCPUs = os.cpus().length - 1;

if (cluster.isPrimary) {
    // master / primary process
    for (let i = 0; i < numCPUs; i++) {
        cluster.fork();
        // fork creates a copy of this process as a worker
    }

    cluster.on('exit', (worker, code, signal) => {
        console.log(`Worker ${worker.process.pid} died (code=${code}, signal=${signal}). Forking a replacement.`);
        cluster.fork();
    });

    // IPC: master receiving messages from workers.
    // Correct signature is (worker, message, handle) — the first arg is the worker, NOT the message.
    cluster.on('message', (worker, message) => {
        if (message && message.type === 'health-check') {
            const rssMb = (message.memoryUsage.rss / 1024 / 1024).toFixed(1);
            const heapMb = (message.memoryUsage.heapUsed / 1024 / 1024).toFixed(1);
            console.log(
                `[health] worker=${worker.process.pid} ` +
                `rss=${rssMb}MB heapUsed=${heapMb}MB ` +
                `cpuUser=${message.cpuUsage.user}us cpuSys=${message.cpuUsage.system}us`
            );
        }
    });

} else {
    // worker process

    const sendHealthCheck = () => {
        // Node's IPC already serializes objects — no need to JSON.stringify here.
        process.send({
            type: 'health-check',
            memoryUsage: process.memoryUsage(),
            cpuUsage: process.cpuUsage(),
        });
    };

    sendHealthCheck();
    // periodic health check so the master keeps getting updates, not just one at startup
    setInterval(sendHealthCheck, 5000);

    const server = http.createServer((req, res) => {
        if (req.url === '/') {
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end('<h1>Hello World</h1>');
        } else if (req.url === '/about') {
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end('<h1>About</h1>');
        } else if (req.url === '/math') {
            // mimic ~10s of cpu work
            for (let i = 0; i < 20000000000; i++) {
                // do nothing
            }
            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({ result: 'success' }));
        } else {
            res.writeHead(404, { 'Content-Type': 'text/html' });
            res.end('<h1>404 Not Found</h1>');
        }

        console.log(`Worker ${process.pid} handled request for ${req.url}`);
    });

    server.listen(8089, () => {
        console.log(`Worker ${process.pid} is running on port 8089`);
    });
}

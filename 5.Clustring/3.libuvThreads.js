const http = require('http');
const crypto = require('crypto');

// libuv default thread pool size is 4. You can bump it via:
//   UV_THREADPOOL_SIZE=8 node 3.libuvThreads.js
// console.log('UV_THREADPOOL_SIZE =', process.env.UV_THREADPOOL_SIZE || 4);

// Tune this until /hash takes ~20s on your machine.
// PBKDF2 throughput varies a lot by CPU (Apple Silicon + hardware SHA is very fast).
// Rule of thumb: measure once, then scale linearly:  newIters = oldIters * (20000 / observedMs)
// On an M-series Mac ~85_000_000 iterations of pbkdf2-sha512 ≈ ~20s.
const ITERATIONS = 85_000_000;
const KEYLEN = 64;
const DIGEST = 'sha512';

const server = http.createServer((req, res) => {
    const url = req.url;

    if (url === '/') {
        res.end('Hello World');
        return;
    }

    // BLOCKING version — runs on the main thread, freezes the event loop for ~20s.
    // While this is running, /, /hash-async, everything else on this worker is stuck.
    if (url === '/hash-sync') {
        const start = Date.now();
        const hash = crypto
            .pbkdf2Sync('sadkfsakjdfhsaljkd!@#', 'salt', ITERATIONS, KEYLEN, DIGEST)
            .toString('hex');
        const operationTime = Date.now() - start;
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ mode: 'sync', hash, operationTime }));
        return;
    }

    // NON-BLOCKING version — pbkdf2 is offloaded to the libuv thread pool.
    // The event loop is free, so other requests are served in parallel
    // (up to UV_THREADPOOL_SIZE concurrent hashes; extras queue).
    if (url === '/hash-async') {
        const start = Date.now();
        crypto.pbkdf2('password', 'salt', ITERATIONS, KEYLEN, DIGEST, (err, derivedKey) => {
            if (err) {
                res.writeHead(500);
                res.end(JSON.stringify({ error: err.message }));
                return;
            }
            const operationTime = Date.now() - start;
            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({
                mode: 'async',
                hash: derivedKey.toString('hex'),
                operationTime,
            }));
        });
        return;
    }

    res.writeHead(404);
    res.end('Not Found');
});

server.listen(8089, () => {
    console.log(`Server (pid ${process.pid}) listening on port 8089`);
});


// when I run 4 request /hash-async in parallel it took me ~35s for all request (in 30s basically)

 // when I run 5 request /hash-async in parallel it took me (~35s) for all first 4 request (in 30s basically)
 // last 5th request took me ~1 min 

 // UV_THREADPOOL_SIZE = 4 (by default)
 // you can increate it by setting the UV_THREADPOOL_SIZE.



 // whe I run 2 reques /hash-sync 
 // 1st req will take ~30s
 // 2nd req will take ~60s
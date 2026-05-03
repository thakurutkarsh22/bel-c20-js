const http = require('http');

const server = http.createServer((req, res) => {

    if(req.url === '/') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end('<h1>Hello World</h1>');
    } else if(req.url === '/about') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end('<h1>About</h1>');
    } else if(req.url === '/math') {

        // mimic 10 sec of cpu work
        for(let i = 0; i < 10000000000; i++) {
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

})


server.listen(8089, () => {
    console.log('Server is running on port 8089');
});





// If user 1 ask for math operation, he will wait for 10 sec
/**
 * meanwhile user 2 asks for home page, he will get the not get the response immediately,
 *  he will wait for 10 sec to get the response
 */
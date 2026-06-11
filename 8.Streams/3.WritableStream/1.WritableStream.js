
/**
 * writable stream 
 * EVENT 
 * 1. error -> error
 * 2. finish -> file is written
 * 
 * 
 * 
 */


const fs = require('node:fs');

const writableStream = fs.createWriteStream('output.txt');



writableStream.write('Hello World wdadas\n');
writableStream.write('Hello World ss\n');
writableStream.write('Hello World sadada\n');
writableStream.end();

writableStream.on('error', (err) => {
    // handle the error 
    // log to database -> analytics (PROMTHEUS)
    console.log('error', err);
});


writableStream.on('finish', () => {
    console.log('finish', 'file is written');
    // event 
});

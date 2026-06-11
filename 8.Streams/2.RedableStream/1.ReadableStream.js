
/**
 * redable stream 
 * EVENT 
 * 1. data -> chunk of data
 * 2. end -> no more data
 * 3. error -> error
 * 
 */


// 1. Flowing readable stream

/*
const fs = require('node:fs');


// this forces the buffer size to 64KB
// highWaterMark is the size of the buffer in bytes
const readableStream = fs.createReadStream('bigfile1.txt', {
    highWaterMark: 128 * 1024, // 128 KB ( default is 64KB )
});

let chunkNumber = 0;

readableStream.on('data', (chunk) => {
    chunkNumber++;
    // here you can play with tdata 
    console.log(chunk);
});


readableStream.on('end', () => {
    console.log('end', chunkNumber);
});

readableStream.on('error', (err) => {
    // handle the error 
    // log to database -> analytics (PROMTHEUS)
    console.log('error', err);
});
*/


// 2. Paused readable stream



const fs = require('node:fs');

const readableStream = fs.createReadStream('bigfile1.txt', {
    highWaterMark: 128 * 1024, // 128 KB ( default is 64KB )
});

let chunkNumber = 0;
readableStream.on('data', () => {
    chunkNumber++;
    console.log('data');
});

readableStream.on('end', () => {
    console.log('end', chunkNumber);
});

readableStream.on('error', (err) => {
    console.log('error', err);
}); 

setTimeout(() => {
    readableStream.pause();
}, 1000);

setTimeout(() => {
    readableStream.resume();
}, 5000);
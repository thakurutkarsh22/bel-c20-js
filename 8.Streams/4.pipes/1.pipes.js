/**
 * pipes are like conveyer belt that connects bag input (writable) to  belt to the owner (readable)
 * pipes connnect 2 types of streams together
 * 
 * problems with pipes 
 * 
 */


const fs = require('node:fs');


const readableStream = fs.createReadStream('bigfile.txt', {
    highWaterMark: 64 * 1024, // 64 KB ( default is 64KB )
});


const writableStream = fs.createWriteStream('output.txt');

readableStream.pipe(writableStream);


writableStream.on('finish', () => {
    // event - sqs sns 
    console.log('finish', 'file is written');
});

writableStream.on('error', (err) => {
    console.log('error', err);
});

readableStream.on('error', (err) => {
    console.log('error', err);
});
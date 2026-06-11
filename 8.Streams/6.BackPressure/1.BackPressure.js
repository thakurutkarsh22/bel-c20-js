/**
 * Backpressure is a problem that occurs when the consumer is not able to 
 * process the data fast enough for the producer to keep up.
 *
 */



const fs = require('node:fs');
const { Transform } = require('node:stream');

const readableStream = fs.createReadStream('bigfile.txt', {
    highWaterMark: 64 * 1024, // 64 KB ( default is 64KB )
    encoding: 'utf8',
});

const writableStream = fs.createWriteStream('output.txt', {
    encoding: 'utf8',
    highWaterMark: 16 * 1024, // 16 KB ( default is 64KB )
});




readableStream.on('data', (chunk) => {
    console.log('data', chunk);


    // you are asking the writabel stream 
    // can you write or not 
    // are you overwhelemend
    const canYouWrite = writableStream.write(chunk); // true or false 

    if(!canYouWrite) {
        console.log('backpressure', 'consumer is not able to process the data fast enough');
        readableStream.pause();
    }

    console.log('result', canYouWrite);
});


// drain means the writable stream is empty
writableStream.on('drain', () => {
    console.log('drain', 'consumer is able to process the data fast enough');
    setTimeout(() => {
        readableStream.resume();
    }, 2000);
});


readableStream.on('end', () => {
    writableStream.end();
});

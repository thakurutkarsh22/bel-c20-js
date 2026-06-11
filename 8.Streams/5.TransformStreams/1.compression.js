// compression using zlib

const fs = require('node:fs');
const zlib = require('node:zlib');
const { pipeline } = require('node:stream');


// read 2 gb of file 

/*
const readableStream = fs.createReadStream('bigfile.txt', {
    highWaterMark: 64 * 1024, // 64 KB ( default is 64KB )
    encoding: 'utf8',
});


// write that transformed file in a compress file format 

const writableStream = fs.createWriteStream('output.txt.gz', {
    encoding: 'utf8',
    highWaterMark: 64 * 1024, // 64 KB ( default is 64KB )
});


// transform stream 
const gzipTransformStream = zlib.createGzip();

readableStream.pipe(gzipTransformStream).pipe(writableStream);


writableStream.on('finish', () => {
    console.log('finish', 'file is written');
});

writableStream.on('error', (err) => {
    console.log('error', err);
});

readableStream.on('error', (err) => {
    console.log('error', err);
});


gzipTransformStream.on('error', (err) => {
    console.log('error', err);
});

*/



// pipeline 

const readableStream = fs.createReadStream('bigfile.txt', {
    highWaterMark: 64 * 1024, // 64 KB ( default is 64KB )
    encoding: 'utf8',
});

const writableStream = fs.createWriteStream('output.txt.gz', {
    encoding: 'utf8',
    highWaterMark: 64 * 1024, // 64 KB ( default is 64KB )
});

const gzipTransformStream = zlib.createGzip();

// source 
// transform stream
// destination 
pipeline(readableStream, gzipTransformStream, writableStream, (err) => {
    if (err) {
        console.log('error', err);
    } else {
        console.log('finish', 'file is written');
    }
});
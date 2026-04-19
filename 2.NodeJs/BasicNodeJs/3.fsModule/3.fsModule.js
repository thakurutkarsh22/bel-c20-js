const fs = require('node:fs');



// async in nature 
// console.log("a");

fs.readFile('sample.pdf', '', (error, data) => {
    if (error) {
        console.error('Error reading file:', error);
        return;
    } else {
        console.log('File contents:', data);

        // execute rules
        // play with data 
    }
    
});
console.log("b");


// sync file reading - dont use, do it for small files
console.log("c");
const data = fs.readFileSync ('sample.txt', 'utf8');
console.log('File contents:', data);
console.log("d");
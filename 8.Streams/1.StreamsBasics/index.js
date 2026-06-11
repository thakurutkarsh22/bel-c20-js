// Streaming vs Buffering 


/**
 * Buffering 
 * Memory USed: WHole file (20 gb) b-> we will use 20 gb of RAM 
 * MAX Size - limited by ram.
 * v8 also restrict our buffer size till ~512 MB  if file is more than that ERROR: 'ERR_STRING_TOO_LONG
 * 
 */

/**
 * Streaming 
 * we create a buffer block of 64KB
 * Memory Used:  64KB byte at a time 
 * MAX Size - unlimited  ( pass through 200 gb of file as well) 
 *
 */

// 1. BUFFERING 

const fs = require('node:fs');

// readFile never forces a buffer size, buffer size is dynamic till 500 mbs 
fs.readFile('bigfile1.txt', 'utf8', (err, data) => {
    if (err) {
        console.error(err);
        return;
    }
    console.log(data);
});

// ram 80.something -> 82.something




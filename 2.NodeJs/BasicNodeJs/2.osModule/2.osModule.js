const os = require('node:os');

const platform = os.platform();
console.log(platform, 'platform');

const ram = os.totalmem() / 1024 / 1024 / 1024;
console.log(ram, ' gb ram');


const freeRam = os.freemem() / 1024 / 1024 / 1024;
console.log(freeRam, ' gb free ram');

const cores = os.availableParallelism();
console.log(cores, ' cores');

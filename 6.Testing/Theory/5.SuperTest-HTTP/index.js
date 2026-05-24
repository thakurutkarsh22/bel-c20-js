const express = require('express');
const serverUtkarsh = express();



    serverUtkarsh.get('/', (req, res) => {
        res.status(200).send('Hello World');
    });

    serverUtkarsh.get('/abouts', (req, res) => {
        res.status(200).send('About Page');
    });

serverUtkarsh.listen(8091, () => {
    console.log('Server is running on port 8091');
});

module.exports = serverUtkarsh;
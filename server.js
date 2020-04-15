/** 
 * Express Server to Serve Production bundle of React
 * Prod bundle inside /build folder
*/
require('dotenv').config();
const express = require('express');
const path = require('path');
const app = express();
const compression = require('compression');

console.log('Compression used: ' + process.env.COMPRESSION);

process.env.COMPRESSION === 'gzip' && app.use(compression());
//static path
app.use(express.static(path.resolve(__dirname, 'build')));

app.get('/*', (req, res) => {
    res.type('html');
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(4040, () => {
    console.log('Server started at 4040');
});
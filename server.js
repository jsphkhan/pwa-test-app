/** 
 * Express Server to Serve Production bundle of React
 * Prod bundle inside /build folder
*/
require('dotenv').config();
const express = require('express');
const path = require('path');
const app = express();
// const compression = require('compression');
// const shrinkRay = require('shrink-ray-current');
var expressStaticGzip = require("express-static-gzip");

//console.log('Compression used: ' + process.env.COMPRESSION);

// process.env.COMPRESSION === 'gzip' && app.use(compression());
// process.env.COMPRESSION === 'brotli' && app.use(shrinkRay());

//static path
//app.use(express.static(path.resolve(__dirname, 'build')));
app.use(expressStaticGzip(path.join(__dirname, 'build'), {
    index: false,
    enableBrotli: true,
    orderPreference: ['br', 'gz'],
}));

app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(4040, () => {
    console.log('Server started at 4040');
});
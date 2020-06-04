/** 
 * Express Server to Serve Production bundle of React
 * Prod bundle inside /build folder
*/
require('dotenv').config();
const express = require('express');
const path = require('path');
const app = express();
const compression = require('compression');
var expressStaticGzip = require("express-static-gzip");

// app.use(compression());

//static path
app.use(express.static(path.resolve(__dirname, 'build'), {
    setHeaders: (res, path) => {
        res.set({
            //'Cache-Control': 'public, max-age=31536000',
            'demo' : 'joseph'
        });
    }
}));

// app.use(expressStaticGzip(path.join(__dirname, 'build'), {
//     index: false,
//     enableBrotli: true,
//     orderPreference: ['br', 'gz'],
//     setHeaders: (res, path) => {
//         res.set({
//             'Cache-Control': 'public, max-age=31536000' //cache for 1 year
//         });
//     }
// }));

app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(4040, () => {
    console.log('Server started at 4040');
});
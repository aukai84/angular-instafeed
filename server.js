const express = require('express');
const https = require('https');



const app = express();

const USER_ID = process.env.USER_ID;
const ACCESS_TOKEN = process.env.ACCESS_TOKEN;
console.log(USER_ID)


let targetUrl = `https://api.instagram.com/v1/users/${USER_ID}/media/recent/?access_token=${ACCESS_TOKEN}`;

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.get('/api/instafeed', (req, res, next) => {
    return new Promise((resolve, reject) => {
        https.get(targetUrl, res => {
            let data = '';
            res.on('data', chunk => data += chunk);
            res.on('end', () => {
                resolve(data);
            });
         });
    })
    .then(images => {
        let instaData = JSON.parse(images);
        res.json(instaData.data);
    });
});







module.exports = app;
const express = require('express');
const https = require('https');
const env = require('dotenv').config();


const app = express();

const USER_ID = process.env.USER_ID;
const ACCESS_TOKEN = process.env.ACCESS_TOKEN;


let targetUrl = `https://api.instagram.com/v1/users/${USER_ID}/media/recent/?access_token=${ACCESS_TOKEN}`;

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
        let newData = JSON.parse(images);
        res.send(`<img src=${newData.data[4].images.low_resolution.url}>`);
        // res.json(newData.data[0].images.low_resolution.url);
    })
})







module.exports = app;
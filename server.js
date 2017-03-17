const express = require('express');
const https = require('https');
const env = require('dotenv').config();


const app = express();

const USER_ID = process.env.CLIENT_ID;
const ACCESS_TOKEN = process.env.CLIENT_SECRET;
console.log(process.env)
console.log(USER_ID)
console.log(ACCESS_TOKEN)





module.exports = app;
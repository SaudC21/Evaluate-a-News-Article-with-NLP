var path = require('path');
const express = require('express');
const mockAPIResponse = require('./mockAPI.js');
const bodyParser = require('body-parser');
const cors = require('cors');
const dotenv = require('dotenv');

/* Empty JS object to act as endpoint for all routes */
articleData = {};

dotenv.config();
const api_key = process.env.API_KEY;

const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(bodyParser.json());
app.use(express.static('dist'));

// app.use(express.static(__dirname + '/public'));
console.log("HERE:" + __dirname);

app.get('/', function (req, res) {
    res.sendFile(path.resolve('dist/index.html'))
})

// designates what port the app will listen to for incoming requests
const PORT = 8082;
app.listen(PORT, function () {
    console.log(`Running on localhost: ${PORT}`);
})

app.get('/apiCall', function (req, res) {
    res.send(api_key);
})

app.get('/getData', function (req, res) {
    res.send(articleData);
})
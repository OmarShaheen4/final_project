// Setup empty JS object to act as endpoint for all routes
let projectData = {};

// Require Express to run server and routes
const express = require('express');

/* Dependencies */
const bodyParser = require('body-parser');

// Start up an instance of app
const app = express();

/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
const cors = require('cors');
app.use(cors());

// Initialize the main project folder
//app.use(express.static('website'));
app.use(express.static('dist'))


// app.use(express.json({ limit: '1mb'}));
// POST route
app.post('/AddData', addInfo);

function addInfo(req, res) {

    res.sendStatus(200);
}

// Initialize all route with a callback function
app.get('/all', getInfo);

// Callback function to complete GET '/all'
function getInfo(req, res) {
    // res.send(projectData);
    res.sendFile('dist/index')

};

// Set up and Spin up the server
const port = 3300;
const server = app.listen(port, () => {
    console.log(`server is listening on port: ${port}`);
});
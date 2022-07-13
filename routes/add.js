/**
 * Entry point for backend to add user's mental health data to a webserver
 */

const express = require('express');

let db = require('../util/sql_conn');

let JSONconst = require('../util/defs').JSON_CONSTANTS;

var router = express.Router();

let queries = require('../util/queries').INSERT_EPISODE_DATA;

const bodyParser = require('body-parser');

router.use(bodyParser.json());

router.get('/', (req, res) => {
    res.writeHead(200, {'Content-Type': 'text/html'});
    //write a response to the client
    res.write('<h' + 1 + ' style="color:blue">APP ADD DATA PAGE</h' + 1 + '>');
    res.end(); //end the response
});

router.post('/anonbio', (req, res) => {
    
    //retrieve data from query params
  //  let episodeId = req.body[JSONconsts.EPISODE_ID];


});



module.exports = router;
/**
 * Entry point for backend to add user's mental health data to a webserver
 */

// express is the framework we use to handle requests
const express = require('express');

//we use this to create the SHA256 hash
const crypto = require('crypto');

//crate connection to the Heroku DB
let db = require('utils/utils').db;

//
let getHash = require('utils/utils').getHash;

//a list of predefined queries
let queries = require('utils/queries');

var router = express.Router();

const bodyParser = require('body-parser');

//constant vars for JSON vars
let JSONconsts = require('utils/JSON_defs')

/**
 * Endpoint for adding new data
 */

const app = express();


/*
    Home Page

    www.[website].com/
 */
app.get("/", (req,res) => {
    res.writeHead(200, {'Content-Type': 'text/html'});
    //write response to the client
    res.write('<h1 style="color:blue">Hello World!</h1>');
    res.end();//end the response
});


/*
    Adding Research Data

    www.[website].com/addAnonEpisodeBioData
 */
router.post('/addData', (req, res) => {
    res.type("application/json");

    //retrieve data from query params
    let episodeId = req.body[JSONconsts.EPISODE_ID];
    let start = req.body[JSONconsts.START_DATE];
    let end = req.body[JSONconsts.END_DATE];
    let dur = req.body[JSONconsts.DURATION];
    let interval = req.body[JSONconsts.INTERVAL];
    let steps = req.body[JSONconsts.STEPS];
    let hrData = req.body[JSONconsts.HEARTRATE_DATA];
    let soundData = req.body[JSONconsts.SOUND_DATA];
    let diagnosis = req.body[JSONconsts.DIAGNOSIS];
    let avgRestHR = req.body[JSONconsts.RESTING_HR];
    let avgWalkHR = req.body[JSONconsts.WALKING_HR];
    let recentHRV = req.body[JSONconsts.RECENT_HRV];
    let userID = req.body[JSONconsts.USER_ID];
    let age = req.body[JSONconsts.AGE]



    let params = [episodeId, start, end, dur, interval, hrData, soundData, avgRestHR, avgWalkHR, steps, recentHRV, userID, diagnosis, age]

    //verify each of the params
    var isValidParams = true

    for (const element of params) {
        if(!element){
            isValidParams = false
        }
    }

    for (let index = 0; index < params.length; index++){
        if(params[index]){
            isValidParams = false
        }
    }

    params.forEach(element => {
        if (!element) {
            isValidParams = false
        }
    });

    if (!isValidParams) {
        res.send({
            success: false,
            input: req.body,
            error: "Missing required info"
        })
    } else {

        db.none(queries.INSERT_EPISODE_DATA, params)
            .then(() => {
                //successfully added, let the user know
                res.send({
                    success: true
                });
                //do other stuff with data
            }).catch((error) => {
            console.log(error);

            res.send({
                success: false,
                error: error
            });
        });
    }
})



//Assign a port you can use vio the 'PORT' env var
app.listen(process.env.PORT || 5000, () => {
   console.log("Server up and running on port: " + (process.env.PORT || 5000));
});



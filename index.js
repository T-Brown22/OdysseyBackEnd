//express is the framework we're going to use to handle requests
const express = require('express');
//Create a new instance of express
const app = express();





//const bodyParser = require("body-parser");
//This allows parsing of the body of POST requests, that are encoded in JSON
//app.use(bodyParser.json());
app.use('/add', require('./routes/add.js'));

//Create connection to Heroku Database
let db = require('./util/sql_conn');





/*
 * Return HTML for the / end point.
 * This is a nice location to document your web service API
 * Create a web page in HTML/CSS and have this end point return it.
 * Look up the node module 'fs' ex: require('fs');
 */
app.get("/", (req, res) => {
    res.writeHead(200, {'Content-Type': 'text/html'});
    //write a response to the client
    res.write('<h' + 1 + ' style="color:blue">APP IS ONLINE</h' + 1 + '>');
    res.end(); //end the response
});

/*
* Heroku will assign a port you can use via the 'PORT' environment variable
* To accesss an environment variable, use process.env.<ENV>
* If there isn't an environment variable, process.env.PORT will be null (or undefined)
* If a value is 'falsy', i.e. null or undefined, javascript will evaluate the rest of the 'or'
* In this case, we assign the port to be 5000 if the PORT variable isn't set
* You can consider 'let port = process.env.PORT || 5000' to be equivalent to:
* let port; = process.env.PORT;
* if(port == null) {port = 5000}
*/
app.listen(process.env.PORT || 5000, () => {
    console.log("Server up and running on port: " + (process.env.PORT || 5000));
});
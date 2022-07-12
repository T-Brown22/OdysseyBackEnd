/*
    Utility file. Holds various helper funcs
 */

//Get the connection to the heroku DB
let db = require('utils/sql_conn');

var nodemailer = require('nodemailer');

//Use this to create SHA256 hash
const crypto = require("crypto");

/**
 * Sends an email to a user
 * TODO: Finish adding the data
 */
function sendEmail(from, reciever, subject, message){

    let user = 'TODO'
    let password = 'TODO'

    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: user,
            password: password,
        }
    });

    var mailOptions = {
        from: user,
        to: reciever,
        subject: subject,
        html: message
    };

    console.log("email from: " + mailOptions.from)
    console.log("email to: " + mailOptions.to)

    transporter.sendMail(mailOptions, function (error, info){
        if(error) {
            console.log(error);
        }else{
            console.log('Email sent: ' + info.response)
        }
    });
}

/**
 * Method to get a salted hash.
 * We put this in its own method to keep consistency
 * @param {string} pw the password to hash
 * @param {string} salt the salt to use when hashing
 */
function getHash(pw, salt) {
    return crypto.createHash("sha256").update(pw + salt).digest("hex");
}


let queries = require('./queries');

module.exports = {
    db, getHash, sendEmail
}
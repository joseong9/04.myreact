const express = require("express");
const router = express.router();

const mysql = require("mysql");

let mysql = mysql.createConnection({
    host : "127.0.0.1",
    user : "root",
    password : "whtjdrms!q2w",
    port : "3306",
    database : "nodejs_DB"
})

router.get('/', (req, res) => {
    console.log("Happy hacking!");
});

module.exports = router;
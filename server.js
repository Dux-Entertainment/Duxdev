const express = require("express");
const { Client } = require('pg');
const Pool = require('pg').Pool


const pool = new Pool({
  user: 'sernpqbnsfvlul',
  host: 'ec2-46-137-156-205.eu-west-1.compute.amazonaws.com',
  database: 'd4g2n31slp06sk',
  password: '18589cc69883b17ddcdd4129f1b98184581cd9d0b4f6e273728d7b6cc8aa84be',
  port: 5432,
});

  
pool.connect();

const app = express();

const PORT = process.env.PORT || 8080;

app.use(express.json());
app.use(express.urlencoded({ extended: true }))
app.use(express.static("public"));

pool.connect(function(error) {
    console.log("connection to db");
    app.listen(PORT, function() {
        console.log("listening at port " + PORT);
    });
});

app.get("/api/all", function(req,res) {
    pool.query("select * from users;", function(error, result) {
        res.json(result.rows);
    });
});

app.post("/api/user", function(req,res) {
    pool.query("select * from users where username ="+req.body.username+" and password ="+req.body.password+";", function(error, result) {
        res.send(result)
    });
});


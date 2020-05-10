const express = require("express");
var bodyParser = require('body-parser');
const { Client } = require('pg');

const client = new Client({
    connectionString: "ec2-46-137-156-205.eu-west-1.compute.amazonaws.com",
    ssl: true,
});
  
client.connect();

const app = express();

const PORT = process.env.PORT || 8080;

app.use(express.json());
app.use(express.urlencoded({ extended: true }))
app.use(express.static("public"));

client.connect(function(error) {
    console.log("connection to db");
    app.listen(PORT, function() {
        console.log("listening at port " + PORT);
    })
});

app.get("/api/all", function(req,res) {
    client.query("select * from users;", function(error, result) {
        res.json(result);
    })
});

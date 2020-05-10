const express = require("express");
var bodyParser = require('body-parser');
const { Client } = require('pg');

const app = express();

const PORT = process.env.PORT || 8080;

app.use(express.json());
app.use(express.urlencoded({ extended: true }))
app.use(express.static("public"));

var data = '[' +
'{ "id":"1" , "name":"Ömer" },' +
'{ "id":"2" , "name":"Seçkin" },' +
'{ "id":"3" , "name":"Furkan" } ]'; 


app.get('/api/all', (req, res) => res.json(data))

app.listen(PORT, () => console.log(`Example app listening at http://localhost:${PORT}`))
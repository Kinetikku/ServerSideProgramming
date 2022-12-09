var cors = require("cors");
//Express server
var express = require("express");
var app = express();

//path used for getting directory
var path = require("path");
var _ = require('underscore');
//Used to get JSON from body of request
var bodyParser = require("body-parser");
var http = require('http');
//Connects to SQL database
var mysql = require("mysql");

app.use(cors());
app.use(express.static('public'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

var connection = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'worldcup2022'
});

//Returns navbar screen as default
app.get("/", function(request, response){
    response.sendFile(path.join(__dirname + '/navbar.html'));
    console.log("Landing Page");
});

//Returns navbar file when the pageLoader script is called
app.get("/navbar.html", function(request, response){
    response.sendFile(path.join(__dirname + '/navbar.html'));
    console.log("Navbar Page");
});

//Returns the pageLoader script when the teams page is clicked
app.get("/pageLoader.js", function(request, response){
    response.sendFile(path.join(__dirname + '/pageLoader.js'));
    console.log("Navbar Page");
});

//Returns the teams page when the navbar is clicked
app.get("/teams.html", function(request, response){
    // connection.connect();
    // connection.query("SELECT * FROM teams", function(err, rows){
    //     if(err) throw err;

    //     response.send(JSON.stringify(rows));
    // });

    response.sendFile(path.join(__dirname + '/teams.html'));

    // connection.end();
    console.log("Teams Page");
});

//Returns the teams page when the navbar is clicked
app.get("/players.html", function(request, response){
    response.sendFile(path.join(__dirname + '/players.html'));
    console.log("Teams Page");
});

//Returns the teams page when the navbar is clicked
app.get("/today.html", function(request, response){
    response.sendFile(path.join(__dirname + '/today.html'));
    console.log("Teams Page");
});

//Returns the teams page when the navbar is clicked
app.get("/fixtures.html", function(request, response){
    response.sendFile(path.join(__dirname + '/fixtures.html'));
    console.log("Teams Page");
});

//Returns the teams page when the navbar is clicked
app.get("/results.html", function(request, response){
    response.sendFile(path.join(__dirname + '/results.html'));
    console.log("Teams Page");
});

//Returns the teams page when the navbar is clicked
app.get("/standings.html", function(request, response){
    response.sendFile(path.join(__dirname + '/standings.html'));
    console.log("Teams Page");
});

//Returns the teams page when the navbar is clicked
app.get("/login.html", function(request, response){
    response.sendFile(path.join(__dirname + '/login.html'));
    console.log("Teams Page");
});

//Grabs the directory and returns CSS
app.get("/style.css", function(request, response){
    response.sendFile(path.join(__dirname + '/style.css'));
});

//Grabs the directory and returns an image
app.get("/logos/:name?", function(request, response){
    var name = request.params.name;
    response.sendFile(path.join(__dirname + "/" + name));
});

//insert route for all players
app.get("/players", function(request, response){
    response.send();
    console.log("Send all players route");
});
//insert route for all teams

//insert route for fixtures

//insert route for results

//insert route standings

//insert route for specific player

//insert route for specific team

var myServer = app.listen(3000, function (){
    console.log("Server running on port 3000");
});
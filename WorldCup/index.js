var cors = require("cors");
var express = require("express");
var path = require("path");
var _ = require('underscore');
var bodyParser = require("body-parser");
var model = require('./model/model');


var app = express();

app.use(cors());
app.use(express.static('public'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

//Returns navbar screen as default
app.get("/", function(request, response){
    response.sendFile(path.join(__dirname + '/public/navbar.html'));
    console.log("Landing Page");
});

//Returns the teams page when the navbar is clicked
app.get("/teams", function(request, response){
    response.json(model.getTeams(request, response));
    //response.sendFile(path.join(__dirname + '/public/teams.html'));
    console.log("Teams Page");
});

//Returns the teams page when the navbar is clicked
app.get("/players.html", function(request, response){
    //response.sendFile(path.join(__dirname + '/public/players.html'));
    console.log("Players Page");
});

//Returns the today page when the navbar is clicked
app.get("/today.html", function(request, response){
    //response.sendFile(path.join(__dirname + '/public/today.html'));
    console.log("Today Page");
});

//Returns the fixtures page when the navbar is clicked
app.get("/fixtures.html", function(request, response){
    //response.sendFile(path.join(__dirname + '/public/fixtures.html'));
    console.log("Fixtures Page");
});

//Returns the results page when the navbar is clicked
app.get("/results.html", function(request, response){
    //response.sendFile(path.join(__dirname + '/public/results.html'));
    console.log("Results Page");
});

//Returns the standings page when the navbar is clicked
app.get("/standings.html", function(request, response){
    //response.sendFile(path.join(__dirname + '/public/standings.html'));
    console.log("Standings Page");
});

//Returns the login page when the navbar is clicked
app.get("/login.html", function(request, response){
    //response.sendFile(path.join(__dirname + '/public/login.html'));
    console.log("Login Page");
});

//insert route for all players
// app.get("/players", function(request, response){
//     response.send();
//     console.log("Send all players route");
// });
//insert route for all teams

//insert route for fixtures

//insert route for results

//insert route standings

//insert route for specific player

//insert route for specific team

var myServer = app.listen(3000, function (){
    console.log("Server running on port 3000");
});
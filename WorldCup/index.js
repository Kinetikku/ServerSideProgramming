var cors = require("cors");
var express = require("express");
var path = require("path");
var _ = require('underscore');
var bodyParser = require("body-parser");
var model = require('./model/model.js');
const request = require("express/lib/request");
const { response } = require("express");

var app = express();

app.use(cors());
app.use(express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

function createStandings(request, response){
    model.createStandings(request, response);
}

createStandings();

function updateStandings(request, response){
    model.updateStandings(request, response);
}

updateStandings();

app.get("/update", function(request, response){
    model.updateStandings(request, response);
});

//Returns navbar screen as default
app.get("/", function(request, response){
    response.sendFile(path.join(__dirname + '/public/navbar.html'));
    console.log("Landing Page");
});

//Returns the teams page when the navbar is clicked
app.get("/teams", function(request, response){
    model.getTeams(request, response);
});

//Returns the teams page when the navbar is clicked
app.get("/players", function(request, response){
    model.getPlayers(request, response);
});

app.get("/players/:id?", function(request, response){
    model.getPlayersSpecific(request, response, {id:request.params.id});
});

app.get("/todaysMatches/:day?/:month?/:year?", function(request, response){
    model.getTodaysMatches(request, response, {day:request.params.day}, {month:request.params.month}, {year: request.params.year});
});

//Returns the fixtures page when the navbar is clicked
app.get("/fixtures", function(request, response){
    model.getFixtures(request, response);
});

//Returns the results page when the navbar is clicked
app.get("/results", function(request, response){
    model.getResults(request, response);
});

//Returns the standings page when the navbar is clicked
app.get("/standings", function(request, response){
    model.getStandings(request, response);
});

//Returns the login page when the navbar is clicked
app.get("/login", function(request, response){
    model.getLogin(request, response);
});

//Returns the login page when the navbar is clicked
app.get("/admin", function(request, response){
    model.getGames(request, response);
});

var myServer = app.listen(3000, function (){
    console.log("Server running on port 3000");
});
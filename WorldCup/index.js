var express = require("express");
var _ = require('underscore');
var bodyParser = require("body-parser");
var cors = require("cors");
var http = require('http');

var myServer = http.createServer(function (request, response){

    //insert route for all players

    //insert route for all teams

    //insert route for fixtures

    //insert route for results

    //insert route standings

    //insert route for specific player

    //insert route for specific team

    console.log("Connection made");
});

myServer.listen(3000);
console.log("Server running on port 3000");
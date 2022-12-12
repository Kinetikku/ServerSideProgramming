var mysql = require('mysql');

var connection = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'worldcup2022'
});

connection.connect(function(err){
    if(err) throw err;

    console.log("Connected Successfully to World Cup 2022 databse");
});

exports.getTeams = function(request, response){
    connection.query("SELECT * FROM teams", function(err, rows, fields){
        console.log("inside the teams query");
        if (err) throw err;
        console.log(JSON.stringify(rows));
        response.send(JSON.stringify(rows));
    });
}

exports.getPlayers = function(request, response){
    connection.query("SELECT * FROM players", function(err, rows, fields){
        if (err) throw err;

        response.send(JSON.stringify(rows));
    });
}

connection.end();
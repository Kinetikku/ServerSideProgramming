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

function getTeams(request, response){
    connection.query("SELECT * FROM teams", function(err, rows, fields){
        if (err) throw err;

        response.send(JSON.stringify(rows));
    });
}

function getPlayers(request, response){
    connection.query("SELECT * FROM players", function(err, rows, fields){
        if (err) throw err;

        response.send(JSON.stringify(rows));
    });
}

function getPlayersSpecific(request, response, id){
    if(id.id == "All..."){
        connection.query("SELECT * FROM players", function(err, rows, fields){
            if (err) throw err;
    
            response.send(JSON.stringify(rows));
        });
    }
    else {
        connection.query("SELECT * FROM players WHERE teamID = " + id.id, function(err, rows, fields){
            if (err) throw err;
    
            response.send(JSON.stringify(rows));
        });
    }   
}

function getTodaysMatches(request, response, day, month, year){
    connection.query("SELECT * FROM fixturesresults WHERE date = \"" + year.year + "-" + month.month + "-" + day.day + "\";", function(err, rows, fields){
        if (err) throw err;
        response.send(JSON.stringify(rows));
    });
}

function getFixtures(request, response){
    connection.query("SELECT * FROM fixturesresults WHERE status = \"fixture\";", function(err, rows, fields){
        if (err) throw err;
        response.send(JSON.stringify(rows));
    });
}

function getResults(request, response){
    connection.query("SELECT * FROM fixturesresults WHERE status = \"result\"", function(err, rows, fields){
        if (err) throw err;

        response.send(JSON.stringify(rows));
    });
}

function getStandings(request, response){
    connection.query("SELECT * FROM `fixturesresults` group by hTeam;", function(err, rows, fields){
        if (err) throw err;

        response.send(JSON.stringify(rows));
    });
}

function getLogin(request, response){
    connection.query("SELECT * FROM users", function(err, rows, fields){
        if (err) throw err;

        response.send(JSON.stringify(rows));
    });
}

function getGames(request, response){
    connection.query("SELECT * FROM `fixturesresults` ORDER BY datetime;", function(err, rows, fields){
        if (err) throw err;

        response.send(JSON.stringify(rows));
    });
}

module.exports = {
    getTeams,
    getPlayers,
    getPlayersSpecific,
    getTodaysMatches,
    getFixtures,
    getResults,
    getStandings,
    getLogin,
    getGames
}
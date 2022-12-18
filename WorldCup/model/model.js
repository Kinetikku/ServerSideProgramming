const { application } = require('express');
var mysql = require('mysql');

var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'worldcup2022'
});

connection.connect(function (err) {
    if (err) throw err;

    console.log("Connected Successfully to World Cup 2022 databse");
});

function getTeams(request, response) {
    connection.query("SELECT * FROM teams", function (err, rows, fields) {
        if (err) throw err;

        response.send(JSON.stringify(rows));
    });
}

function getPlayers(request, response) {
    connection.query("SELECT * FROM players", function (err, rows, fields) {
        if (err) throw err;

        response.send(JSON.stringify(rows));
    });
}

function getPlayersSpecific(request, response, id) {
    connection.query("SELECT * FROM players WHERE teamID = " + id.id, function (err, rows, fields) {
        if (err) throw err;

        response.send(JSON.stringify(rows));
    });
}

function getTodaysMatches(request, response, day, month, year) {
    connection.query("SELECT * FROM fixturesresults WHERE date = \"" + year.year + "-" + month.month + "-" + day.day + "\";", function (err, rows, fields) {
        if (err) throw err;
        response.send(JSON.stringify(rows));
    });
}

function getFixtures(request, response) {
    connection.query("SELECT * FROM fixturesresults WHERE status = \"fixture\";", function (err, rows, fields) {
        if (err) throw err;
        response.send(JSON.stringify(rows));
    });
}

function getResults(request, response) {
    connection.query("SELECT * FROM fixturesresults WHERE status = \"result\"", function (err, rows, fields) {
        if (err) throw err;

        response.send(JSON.stringify(rows));
    });
}

function getStandings(request, response) {
    connection.query("SELECT * FROM `standings` order by matchGroup, pts;", function (err, results, fields) {
        console.log(results);
        response.send(JSON.stringify(results));
    });
}

function updateStandings(request, response) {
    connection.query("UPDATE standings SET pos = 0, pld = 0, gf = 0, ga = 0, gd = 0, pts = 0;")
    connection.query("SELECT * FROM `teams`;", function (err, rows, fields) {
        for (const i of rows) {
            connection.query("SELECT * FROM `fixturesresults` WHERE (hTeamID = " + i.ID + " || aTeamID = " + i.ID + ") && status = 'result';", function (err, inRows, fields) {
                for (const x of inRows) {
                    //If team I am comapring is considered "Home" team do this
                    if (x.hTeamID == i.ID) {
                        if (x.hTeamScore > x.aTeamScore) {
                            connection.query("UPDATE standings SET pts = pts + " + 3 + " WHERE ID = " + x.hTeamID, function(err){
                                if(err)
                                console.log(err);
                            });
                        }
                        else if (x.hTeamScore == x.aTeamScore) {
                            connection.query("UPDATE standings SET pts = pts + " + 1 + " WHERE ID = " + x.hTeamID, function(err){
                                if(err)
                                console.log(err);
                            });
                        }
                        var gd = x.hTeamScore - x.aTeamScore;
                            connection.query("UPDATE standings SET gd = gd + " + gd + " WHERE ID = " + x.hTeamID, function(err){
                                if(err)
                                console.log(err);
                            });
                            var ga = x.aTeamScore;
                            connection.query("UPDATE standings SET ga = ga + " + ga + " WHERE ID = " + x.hTeamID, function(err){
                                if(err)
                                console.log(err);
                            });
                            var gf = x.hTeamScore;
                            connection.query("UPDATE standings SET gf = gf + " + gf + " WHERE ID = " + x.hTeamID, function(err){
                                if(err)
                                console.log(err);
                            });
                            connection.query("UPDATE standings SET pld = pld + " + 1 + " WHERE ID = " + x.hTeamID, function(err){
                                if(err)
                                console.log(err);
                            });
                    }
                    //Else if team I am checking is cosidered "Away" team do this
                    else if (x.aTeamID == i.ID) {
                        if (x.aTeamScore > x.hTeamScore) {
                            connection.query("UPDATE standings SET pts = pts + " + 3 + " WHERE ID = " + x.aTeamID, function(err){
                                if(err)
                                console.log(err);
                            });
                        }
                        else if (x.aTeamScore == x.hTeamScore) {
                            connection.query("UPDATE standings SET pts = pts + " + 1 + " WHERE ID = " + x.aTeamID, function(err){
                                if(err)
                                console.log(err);
                            });
                        }
                        var gd = x.hTeamScore - x.aTeamScore;
                            connection.query("UPDATE standings SET gd = gd + " + gd + " WHERE ID = " + x.aTeamID, function(err){
                                if(err)
                                console.log(err);
                            });
                            var ga = x.hTeamScore;
                            connection.query("UPDATE standings SET ga = ga + " + ga + " WHERE ID = " + x.aTeamID, function(err){
                                if(err)
                                console.log(err);
                            });
                            var gf = x.aTeamScore;
                            connection.query("UPDATE standings SET gf = gf + " + gf + " WHERE ID = " + x.aTeamID, function(err){
                                if(err)
                                console.log(err);
                            });
                            connection.query("UPDATE standings SET pld = pld + " + 1 + " WHERE ID = " + x.aTeamID, function(err){
                                if(err)
                                console.log(err);
                            });
                    }
                };
            });
        };
    });
}

function getLogin(request, response) {
    connection.query("SELECT * FROM users", function (err, rows, fields) {
        if (err) throw err;

        response.send(JSON.stringify(rows));
    });
}

function getGames(request, response) {
    connection.query("SELECT * FROM `fixturesresults` ORDER BY fixturesresults.datetime;", function (err, rows, fields) {
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
    updateStandings,
    getStandings,
    getLogin,
    getGames
}
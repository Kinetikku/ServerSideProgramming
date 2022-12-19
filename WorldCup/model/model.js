var mysql = require('mysql');

//I went for pool instead of standard as i found i was having
//issues with the standings page only giving me outdated data due the connection
//being old. Having tried closing after every connection i kept getting errors saying
//the connctions wernt opening after closing.
var connection = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'worldcup2022',
    connectionLimit: 340
});

function createStandings(request, response){
    connection.query("CREATE TABLE IF NOT EXISTS standings (ID int PRIMARY KEY, name varchar(255), pos int, pld int, gf int, ga int, gd int, pts int, matchGroup varchar(255));");
    connection.query("SELECT * FROM teams ORDER BY ID", function(err, rows, fields){
        for(const y of rows){
            connection.query("INSERT INTO standings (ID, name, pos, pld, gf, ga, gd, pts, matchGroup) values("+ y.ID + ",\"" + y.name + "\",0,0,0,0,0,0,\"" + y.group + "\");");
        }
    });
}

function getTeams(request, response) {
    connection.getConnection(function(err){
        connection.query("SELECT * FROM teams", function (err, rows, fields) {
            if (err) throw err;
    
            response.send(JSON.stringify(rows));
        });
    });
}

function getPlayers(request, response) {
    connection.getConnection(function(err){
        connection.query("SELECT * FROM players", function (err, rows, fields) {
            if (err) throw err;
    
            response.send(JSON.stringify(rows));
        });
    });
}

function getPlayersSpecific(request, response, id) {
    connection.getConnection(function(err){
        connection.query("SELECT * FROM players WHERE teamID = " + id.id, function (err, rows, fields) {
            if (err) throw err;
    
            response.send(JSON.stringify(rows));
        });
    });
}

function getTodaysMatches(request, response, day, month, year) {
    connection.getConnection(function(err){
        connection.query("SELECT * FROM fixturesresults WHERE date = \"" + year.year + "-" + month.month + "-" + day.day + "\";", function (err, rows, fields) {
            if (err) throw err;
            response.send(JSON.stringify(rows));
        });
    });
}

function getFixtures(request, response) {
    connection.getConnection(function(err){
        connection.query("SELECT * FROM fixturesresults WHERE status = \"fixture\";", function (err, rows, fields) {
            if (err) throw err;
            response.send(JSON.stringify(rows));
        });
    });
}

function getResults(request, response) {
    connection.getConnection(function(err){
        connection.query("SELECT * FROM fixturesresults WHERE status = \"result\"", function (err, rows, fields) {
            if (err) throw err;
    
            response.send(JSON.stringify(rows));
        });
    });
}

function updateStandings(request, response) {
    connection.getConnection(function(err){
        connection.query("UPDATE standings SET pos = 0, pld = 0, gf = 0, ga = 0, gd = 0, pts = 0;");
        connection.query("SELECT * FROM `teams`;", function (err, rows, fields) {
            for (const i of rows) {
                connection.query("SELECT * FROM `fixturesresults` WHERE (hTeamID = " + i.ID + " || aTeamID = " + i.ID + ") && status = 'result';", function (err, inRows, fields) {
                    for (const x of inRows) {
                        //If team I am comapring is considered "Home" team do this
                        if (x.hTeamID == i.ID) {
                            if (x.hTeamScore > x.aTeamScore) {
                                connection.query("UPDATE standings SET pts = pts + " + 3 + " WHERE ID = " + x.hTeamID, function(err){
                                    if(err) throw err;
                                });
                            }
                            else if (x.hTeamScore == x.aTeamScore) {
                                connection.query("UPDATE standings SET pts = pts + " + 1 + " WHERE ID = " + x.hTeamID, function(err){
                                    if(err) throw err;
                                });
                            }
                            var gd = x.hTeamScore - x.aTeamScore;
                                connection.query("UPDATE standings SET gd = gd + " + gd + " WHERE ID = " + x.hTeamID, function(err){
                                    if(err) throw err;
                                });
                                var ga = x.aTeamScore;
                                connection.query("UPDATE standings SET ga = ga + " + ga + " WHERE ID = " + x.hTeamID, function(err){
                                    if(err) throw err;
                                });
                                var gf = x.hTeamScore;
                                connection.query("UPDATE standings SET gf = gf + " + gf + " WHERE ID = " + x.hTeamID, function(err){
                                    if(err) throw err;
                                });
                                connection.query("UPDATE standings SET pld = pld + " + 1 + " WHERE ID = " + x.hTeamID, function(err){
                                    if(err) throw err;
                                });
                        }
                        //Else if team I am checking is cosidered "Away" team do this
                        else if (x.aTeamID == i.ID) {
                            if (x.aTeamScore > x.hTeamScore) {
                                connection.query("UPDATE standings SET pts = pts + " + 3 + " WHERE ID = " + x.aTeamID, function(err){
                                    if(err) throw err;
                                });
                            }
                            else if (x.aTeamScore == x.hTeamScore) {
                                connection.query("UPDATE standings SET pts = pts + " + 1 + " WHERE ID = " + x.aTeamID, function(err){
                                    if(err) throw err;
                                });
                            }
                            var gd = x.hTeamScore - x.aTeamScore;
                                connection.query("UPDATE standings SET gd = gd + " + gd + " WHERE ID = " + x.aTeamID, function(err){
                                    if(err) throw err;
                                });
                                var ga = x.hTeamScore;
                                connection.query("UPDATE standings SET ga = ga + " + ga + " WHERE ID = " + x.aTeamID, function(err){
                                    if(err) throw err;
                                });
                                var gf = x.aTeamScore;
                                connection.query("UPDATE standings SET gf = gf + " + gf + " WHERE ID = " + x.aTeamID, function(err){
                                    if(err) throw err;
                                });
                                connection.query("UPDATE standings SET pld = pld + " + 1 + " WHERE ID = " + x.aTeamID, function(err){
                                    if(err) throw err;
                                });
                        }
                    };
                });
            };
        });
    });
}

function getStandings(request, response) {
    connection.getConnection(function(err){
        connection.query("SELECT * FROM standings order by matchGroup, pts;", function (err, results, fields) {
            if (err)
            console.log(err);
                
            response.send(JSON.stringify(results));
        });
    });
}

function getLogin(request, response) {
    connection.getConnection(function(err){
        connection.query("SELECT * FROM users", function (err, rows, fields) {
            if (err) throw err;
    
            response.send(JSON.stringify(rows));
        });
    });
}

function getGames(request, response) {
    connection.getConnection(function(err){
        connection.query("SELECT * FROM `fixturesresults` ORDER BY fixturesresults.datetime;", function (err, rows, fields) {
            if (err) throw err;
    
            response.send(JSON.stringify(rows));
        });
    });
}

function updateFixtures(request, response, data){
    connection.getConnection(function(err){
        connection.query("UPDATE fixturesresults SET aTeamScore = " + data.away + ", hTeamScore = " + data.home + ", status = \"" + data.radio + "\" WHERE matchNumber = " + data.mID + ";", function(err, rows, fields){
            if (err) throw err;
        });
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
    getGames,
    createStandings,
    updateFixtures
}
$("document").ready(function(){
    $("#teamsRoute").on("click", function(){
        $.getJSON("http://localhost:3000/teams", function(jsonData){
            $("#jsonResp").text(JSON.stringify(jsonData, null, 2));
        });
    });
    $("#playersRoute").on("click", function(){
        $.getJSON("http://localhost:3000/players", function(jsonData){
            $("#jsonResp").text(JSON.stringify(jsonData, null, 2));
        });
    });
    $("#resultsRoute").on("click", function(){
        $.getJSON("http://localhost:3000/results", function(jsonData){
            $("#jsonResp").text(JSON.stringify(jsonData, null, 2));
        });
    });
    $("#playersTeamRoute").on("click", function(){
        $.getJSON("http://localhost:3000/players/1", function(jsonData){
            $("#jsonResp").text(JSON.stringify(jsonData, null, 2));
        });
    });
});
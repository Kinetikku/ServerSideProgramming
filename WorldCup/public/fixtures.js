$("document").ready(function(){
    $.getJSON("http://localhost:3000/fixtures", function(jsonData){
        $.each(jsonData, function(i){
            $("#fixtureBody").append("<tr><td>" + jsonData[i].datetime + "</td><td>" + jsonData[i].round + "</td><td>" + jsonData[i].group + "</td><td><img src=\"/logos/" + jsonData[i].hTeamID + ".webp\" width=\"40px\"></td><td>" + jsonData[i].hTeamScore + "</td><td>" + jsonData[i].aTeamScore + "</td><td>" + jsonData[i].aTeam + "</td><td><img src=\"/logos/" + jsonData[i].aTeamID + ".webp\" width=\"40px\"></td><td>" + jsonData[i].stadium + "</td></tr>");
        });
    });
});
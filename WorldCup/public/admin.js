$("document").ready(function(){
    $.getJSON("http://localhost:3000/admin", function(jsonData){
        $.each(jsonData, function(i){
            $("#adminTable").append("<tr><td>" + jsonData[i].datetime + "</td><td>" + jsonData[i].round + "</td><td>" + jsonData[i].group + "</td><td><img src=\"/logos/" + jsonData[i].hTeamID + ".webp\" width=\"40px\"></td><td>" + jsonData[i].hTeam + "</td><td>" + jsonData[i].hTeamScore + "</td><td>" + jsonData[i].aTeamScore + "</td><td>" + jsonData[i].aTeam + "</td><td><img src=\"/logos/" + jsonData[i].aTeamID + ".webp\" width=\"40px\"></td><td>" + jsonData[i].stadium + "</td><td><input type=\"radio\" id=\"fixRad\" value=\"Fixture\"><label for=\"fixRad\">Fixture</label><input type=\"radio\" id=\"liveRad\" value=\"Live\"><label for=\"liveRad\">Live</label><input type=\"radio\" id=\"resRad\" value=\"Result\"><label for=\"resRad\">Result</label></td><td><button value=\"Update\" id=\"updateBtn\">Update...</button></td><td><button value=\"Scorer\" id=\"scorerBtn\">Scorer...</button></td><td><button value=\"Edit\" id=\"editBtn\">Edit...</button></td></tr>");
        });
    });
});
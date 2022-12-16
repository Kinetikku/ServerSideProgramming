$("document").ready(function(){
    $getJSON("http:/localhost:3000/admin", function(jsonData){
        $each(jsonData, function(i, value){
            $("#adminTable").append("<tr><td>" + jsonData.datetime + "</td><td>" + jsonData.round + "</td><td>" + jsonData.group + "</td><td><img src=\"/logos/" + jsonData[i].hTeamID + ".webp\" width=\"40px\"></td><td>" + jsonData.hTeam + "</td><td>" + jsonData.hTeamScore + "</td></tr>");
        });
    });
});
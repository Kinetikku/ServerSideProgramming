$("document").ready(function(){
    var date = new Date();
    var year = date.toLocaleString("default", {year: "numeric"});
    var month = date.toLocaleString("default", {month: "2-digit"});
    var day = date.toLocaleString("default", {day: "2-digit"});

    $.getJSON("http://localhost:3000/todaysMatches/" + day + "/" + month + "/" + year, function(jsonData){
        if(jsonData.length < 2){
            $('#matchesBody').append("<tr><td>No Matches Today</td></tr>");
        }
        else {
            $.each(jsonData, function(i, value){
                $('#matchesBody').append("<tr>" + "<td>" + "<img src=\"/logos/" + jsonData[i].hTeamID + ".webp\" width=\"40px\">" + "</td>" + "<td>" + jsonData[i].hTeam + "</td>" + "<td>" + jsonData[i].aTeam + "</td>" + "<td>" + "<img src=\"/logos/" + jsonData[i].aTeamID + ".webp\" width=\"40px\">" + "</td>" + "<td>" + jsonData[i].time + "</td>" + "</tr>");
            });
        }
    })
});
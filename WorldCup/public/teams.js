$("document").ready(function(){

    $.getJSON("http://localhost:3000/teams", function(jsonData){
        $.each(jsonData, function(i, value){
            $('#teamsTable tr:last').after("<tr>" + "<td>" + "<img src=\"/logos/" + jsonData[i].abbrev + ".webp\" width=\"40px\">" + "</td>" + "<td>" + jsonData[i].name + "</td>" +"<td>" + jsonData[i].group + "</td>" +"</tr>");
        });
    })
});
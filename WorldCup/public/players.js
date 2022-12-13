$("document").ready(function(){

    $.getJSON("http://localhost:3000/players", function(jsonData){
        $.each(jsonData, function(i, value){
            $('#playersBody').append("<tr>" + "<td>" + jsonData[i].name + " (#" + jsonData[i].squadNumber + ")" + "</td>" + "<td>" + "<img src=\"/logos/" + jsonData[i].teamID + ".webp\" width=\"40px\">" + "</td>" +"</tr>");
        });
    })

    $.getJSON("http://localhost:3000/teams", function(jsonData){
        $.each(jsonData, function(i, value){
            $('#teamSelect').append("<option value=\"" + jsonData[i].ID + "\">" + jsonData[i].name + "</option>");
        });
    });

    $("#teamSelect").on("change", function(){
        $("#playersBody").empty();
        $.getJSON("http://localhost:3000/players/" + this.value, function(jsonData){
        $.each(jsonData, function(i, value){
            $('#playersBody').append("<tr>" + "<td>" + jsonData[i].name + " (#" + jsonData[i].squadNumber + ")" + "</td>" + "<td>" + "<img src=\"/logos/" + jsonData[i].teamID + ".webp\" width=\"40px\">" + "</td>" +"</tr>");
        });
    })
    });
});
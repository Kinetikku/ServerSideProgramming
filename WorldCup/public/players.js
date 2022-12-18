$("document").ready(function(){
    var allData;

    $.getJSON("http://localhost:3000/players", function(jsonData){
        $.each(jsonData, function(i){
            $('#playersBody').append("<tr>" + "<td>" + jsonData[i].name + " (#" + jsonData[i].squadNumber + ")" + "</td>" + "<td>" + "<img src=\"/logos/" + jsonData[i].teamID + ".webp\" width=\"40px\">" + "</td>" +"</tr>");
        });

        allData = jsonData;
    })

    $.getJSON("http://localhost:3000/teams", function(jsonData){
        $.each(jsonData, function(i){
            $('#teamSelect').append("<option value=\"" + jsonData[i].ID + "\">" + jsonData[i].name + "</option>");
        });
    });

    $("#teamSelect").on("change", function(){
        $("#playersBody").empty();
        if(this.value == 0){
            $.each(allData, function(i){
                $('#playersBody').append("<tr>" + "<td>" + allData[i].name + " (#" + allData[i].squadNumber + ")" + "</td>" + "<td>" + "<img src=\"/logos/" + allData[i].teamID + ".webp\" width=\"40px\">" + "</td>" +"</tr>");
            });
        }
        $.getJSON("http://localhost:3000/players/" + this.value, function(jsonData){
        $.each(jsonData, function(i){
            $('#playersBody').append("<tr>" + "<td>" + jsonData[i].name + " (#" + jsonData[i].squadNumber + ")" + "</td>" + "<td>" + "<img src=\"/logos/" + jsonData[i].teamID + ".webp\" width=\"40px\">" + "</td>" +"</tr>");
        });
    })
    });
});
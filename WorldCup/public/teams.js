$("document").ready(function(){
    $.get("http://localhost:3000/teams", function(data){
        for(var i = 0; i < data.length; i++){
            $('#teamsTable tr:last').after("<tr>" + "<td>" + "/public/logos/" + data[i].abbrev + ".webp" + "</td>" + "<td>" + + "</td>" +"<td>" + + "</td>" +"</tr>");
        }
    })
});
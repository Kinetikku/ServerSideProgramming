$("document").ready(function(){
    $.getJSON("http://localhost:3000/teams/", function(data){
        $.each(data, function(i, value){
            $("#teamsData").append(value.name + "<br>");
        });
    });
});
$("document").ready(function(){
    $.getJSON("http://localhost:3000/standings", function(jsonData){
    //Work out each teams matches and points

        $.each(jsonData, function(i, value){
            if(jsonData[i].group == "Group A"){
                $("#groupA").after("<tr><td></td><td>" + jsonData[i].hTeam + "</td><td></td><td></td><td></td><td></td><td></td></tr>");
            }
            else if(jsonData[i].group == "Group B"){
                $("#groupB").after("<tr><td></td><td>" + jsonData[i].hTeam + "</td><td></td><td></td><td></td><td></td><td></td></tr>");
            }
            else if(jsonData[i].group == "Group C"){
                $("#groupC").after("<tr><td></td><td>" + jsonData[i].hTeam + "</td><td></td><td></td><td></td><td></td><td></td></tr>");
            }
            else if(jsonData[i].group == "Group D"){
                $("#groupD").after("<tr><td></td><td>" + jsonData[i].hTeam + "</td><td></td><td></td><td></td><td></td><td></td></tr>");
            }
            else if(jsonData[i].group == "Group E"){
                $("#groupE").after("<tr><td></td><td>" + jsonData[i].hTeam + "</td><td></td><td></td><td></td><td></td><td></td></tr>");
            }
            else if(jsonData[i].group == "Group F"){
                $("#groupF").after("<tr><td></td><td>" + jsonData[i].hTeam + "</td><td></td><td></td><td></td><td></td><td></td></tr>");
            }
            else if(jsonData[i].group == "Group G"){
                $("#groupG").after("<tr><td></td><td>" + jsonData[i].hTeam + "</td><td></td><td></td><td></td><td></td><td></td></tr>");
            }
            else if(jsonData[i].group == "Group H"){
                $("#groupH").after("<tr><td></td><td>" + jsonData[i].hTeam + "</td><td></td><td></td><td></td><td></td><td></td></tr>");
            }
            else {
                
            }
        });
    });
});
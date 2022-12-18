$("document").ready(function(){
    $.getJSON("http://localhost:3000/standings", function(jsonData){
    //Work out each teams matches and points
        console.log(jsonData);
        var num = 5;
        $.each(jsonData, function(i){
            if(num == 1)
                num =5
            
            if(jsonData[i].matchGroup == "Group A"){
                num--;
                $("#groupA").after("<tr><td>" + num + "</td><td>" + jsonData[i].name + "</td><td>" + jsonData[i].pld + "</td><td>" + jsonData[i].gf + "</td><td>" + jsonData[i].ga + "</td><td>" + jsonData[i].gd + "</td><td>" + jsonData[i].pts + "</td></tr>");
            }
            else if(jsonData[i].matchGroup == "Group B"){
                num--;
                $("#groupB").after("<tr><td>" + num + "</td><td>" + jsonData[i].name + "</td><td>" + jsonData[i].pld + "</td><td>" + jsonData[i].gf + "</td><td>" + jsonData[i].ga + "</td><td>" + jsonData[i].gd + "</td><td>" + jsonData[i].pts + "</td></tr>");
            }
            else if(jsonData[i].matchGroup == "Group C"){
                num--;
                $("#groupC").after("<tr><td>" + num + "</td><td>" + jsonData[i].name + "</td><td>" + jsonData[i].pld + "</td><td>" + jsonData[i].gf + "</td><td>" + jsonData[i].ga + "</td><td>" + jsonData[i].gd + "</td><td>" + jsonData[i].pts + "</td></tr>");
            }
            else if(jsonData[i].matchGroup == "Group D"){
                num--;
                $("#groupD").after("<tr><td>" + num + "</td><td>" + jsonData[i].name + "</td><td>" + jsonData[i].pld + "</td><td>" + jsonData[i].gf + "</td><td>" + jsonData[i].ga + "</td><td>" + jsonData[i].gd + "</td><td>" + jsonData[i].pts + "</td></tr>");
            }
            else if(jsonData[i].matchGroup == "Group E"){
                num--;
                $("#groupE").after("<tr><td>" + num + "</td><td>" + jsonData[i].name + "</td><td>" + jsonData[i].pld + "</td><td>" + jsonData[i].gf + "</td><td>" + jsonData[i].ga + "</td><td>" + jsonData[i].gd + "</td><td>" + jsonData[i].pts + "</td></tr>");
            }
            else if(jsonData[i].matchGroup == "Group F"){
                num--;
                $("#groupF").after("<tr><td>" + num + "</td><td>" + jsonData[i].name + "</td><td>" + jsonData[i].pld + "</td><td>" + jsonData[i].gf + "</td><td>" + jsonData[i].ga + "</td><td>" + jsonData[i].gd + "</td><td>" + jsonData[i].pts + "</td></tr>");
            }
            else if(jsonData[i].matchGroup == "Group G"){
                num--;
                $("#groupG").after("<tr><td>" + num + "</td><td>" + jsonData[i].name + "</td><td>" + jsonData[i].pld + "</td><td>" + jsonData[i].gf + "</td><td>" + jsonData[i].ga + "</td><td>" + jsonData[i].gd + "</td><td>" + jsonData[i].pts + "</td></tr>");
            }
            else if(jsonData[i].matchGroup == "Group H"){
                num--;
                $("#groupH").after("<tr><td>" + num + "</td><td>" + jsonData[i].name + "</td><td>" + jsonData[i].pld + "</td><td>" + jsonData[i].gf + "</td><td>" + jsonData[i].ga + "</td><td>" + jsonData[i].gd + "</td><td>" + jsonData[i].pts + "</td></tr>");
            }
            else {
                
            }
        });
    });
});
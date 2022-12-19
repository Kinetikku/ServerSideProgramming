$("document").ready(function () {
    var logCookie = document.cookie;

    if (!logCookie || logCookie == null)
        window.location.replace("login.html");
    else {
        $.getJSON("http://localhost:3000/admin", function (jsonData) {
            $.each(jsonData, function (i) {
                if (jsonData[i].status == "fixture")
                    $("#adminTable").append("<tr><td>" + jsonData[i].datetime + "</td><td>" + jsonData[i].round + "</td><td>" + jsonData[i].group + "</td><td><img src=\"/logos/" + jsonData[i].hTeamID + ".webp\" width=\"40px\"></td><td>" + jsonData[i].hTeam + "</td><td>" + jsonData[i].hTeamScore + "</td><td>" + jsonData[i].aTeamScore + "</td><td>" + jsonData[i].aTeam + "</td><td><img src=\"/logos/" + jsonData[i].aTeamID + ".webp\" width=\"40px\"></td><td>" + jsonData[i].stadium + "</td><td><input type=\"radio\" id=\"fixRad\" value=\"Fixture\" checked name=\"" + i + "\"><label for=\"fixRad\">Fixture</label><input type=\"radio\" id=\"liveRad\" value=\"Live\" name=\"" + i + "\"><label for=\"liveRad\">Live</label><input type=\"radio\" id=\"resRad\" value=\"Result\" name=\"" + i + "\"><label for=\"resRad\">Result</label></td><td><button value=\"Update\" id=\"updateBtn-" + i + "\">Update...</button></td><td><button value=\"Scorer\" id=\"scorerBtn-" + i + "\">Scorer...</button></td><td><button value=\"Edit\" id=\"editBtn-" + i + "\">Edit...</button></td></tr>");
                else if (jsonData[i].status == "live")
                    $("#adminTable").append("<tr><td>" + jsonData[i].datetime + "</td><td>" + jsonData[i].round + "</td><td>" + jsonData[i].group + "</td><td><img src=\"/logos/" + jsonData[i].hTeamID + ".webp\" width=\"40px\"></td><td>" + jsonData[i].hTeam + "</td><td>" + jsonData[i].hTeamScore + "</td><td>" + jsonData[i].aTeamScore + "</td><td>" + jsonData[i].aTeam + "</td><td><img src=\"/logos/" + jsonData[i].aTeamID + ".webp\" width=\"40px\"></td><td>" + jsonData[i].stadium + "</td><td><input type=\"radio\" id=\"fixRad\" value=\"Fixture\" name=\"" + i + "\"><label for=\"fixRad\">Fixture</label><input type=\"radio\" id=\"liveRad\" value=\"Live\" checked name=\"" + i + "\"><label for=\"liveRad\">Live</label><input type=\"radio\" id=\"resRad\" value=\"Result\" name=\"" + i + "\"><label for=\"resRad\">Result</label></td><td><button value=\"Update\" id=\"updateBtn-" + i + "\">Update...</button></td><td><button value=\"Scorer\" id=\"scorerBtn-" + i + "\">Scorer...</button></td><td><button value=\"Edit\" id=\"editBtn-" + i + "\">Edit...</button></td></tr>");
                else if (jsonData[i].status == "result")
                    $("#adminTable").append("<tr><td>" + jsonData[i].datetime + "</td><td>" + jsonData[i].round + "</td><td>" + jsonData[i].group + "</td><td><img src=\"/logos/" + jsonData[i].hTeamID + ".webp\" width=\"40px\"></td><td>" + jsonData[i].hTeam + "</td><td>" + jsonData[i].hTeamScore + "</td><td>" + jsonData[i].aTeamScore + "</td><td>" + jsonData[i].aTeam + "</td><td><img src=\"/logos/" + jsonData[i].aTeamID + ".webp\" width=\"40px\"></td><td>" + jsonData[i].stadium + "</td><td><input type=\"radio\" id=\"fixRad\" value=\"Fixture\" name=\"" + i + "\"><label for=\"fixRad\">Fixture</label><input type=\"radio\" id=\"liveRad\" value=\"Live\" name=\"" + i + "\"><label for=\"liveRad\">Live</label><input type=\"radio\" id=\"resRad\" value=\"Result\" checked name=\"" + i + "\"><label for=\"resRad\">Result</label></td><td><button value=\"Update\" id=\"updateBtn-" + i + "\">Update...</button></td><td><button value=\"Scorer\" id=\"scorerBtn-" + i + "\">Scorer...</button></td><td><button value=\"Edit\" id=\"editBtn-" + i + "\">Edit...</button></td></tr>");
            });
        });

        $('button').each(function () {
            let button = $(this);
            button.on('click', function () {
                let id = button.attr('id');
                console.log('Button ' + id + ' was clicked');
            });
        });
    }
});
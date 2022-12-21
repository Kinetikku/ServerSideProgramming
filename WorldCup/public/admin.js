$("document").ready(function () {
    var logCookie = document.cookie;

    if (!logCookie || logCookie == null)
        window.location.replace("login.html");
    else {
        $.getJSON("http://localhost:3000/admin", function (jsonData) {
            $.each(jsonData, function (i) {
                var html = "";

                var updateBtn = $("<button>Update...</button>");
                updateBtn.attr("id", jsonData[i].matchNumber)
                updateBtn.attr("value", "updateBtn")
                updateBtn.data("matchID", jsonData[i].matchNumber);

                updateBtn.on("click", function () {
                    var matchIdData = updateBtn.data("matchID");

                    $.ajax({
                        url: '/updateFixtures',
                        type: 'POST',
                        data: {
                            home: $("input[name=\"hTeamScoreText" + i + "\"]").val(),
                            away: $("input[name=\"aTeamScoreText" + i + "\"]").val(),
                            mID: matchIdData,
                            radio: $("input[name=\"" + i + "\"]:checked").val().toLowerCase()
                        },
                        success: function (response) {

                        }
                    });
                })

                var scoreBtn = $("<button>Scorer...</button>")
                scoreBtn.attr("id", jsonData[i].matchNumber)
                scoreBtn.attr("value", "scoreBtn")
                scoreBtn.on("click", function () {
                    alert($(this).attr("id"));
                })

                var editBtn = $("<button>Edit...</button>")
                editBtn.attr("id", jsonData[i].matchNumber)
                editBtn.attr("value", "editBtn")
                editBtn.on("click", function () {
                    alert($(this).attr("id"));
                })

                if (jsonData[i].status == "fixture") {
                    html += "<tr>";
                    html += "<td>" + jsonData[i].datetime + "</td><td>" + jsonData[i].round + "</td><td>" + jsonData[i].group + "</td><td><img src=\"/logos/" + jsonData[i].hTeamID + ".webp\" width=\"40px\"></td><td>" + jsonData[i].hTeam + "</td><td><input style=\"width:30px;\" type=\"text\" name=\"hTeamScoreText" + i + "\" value=\"" + jsonData[i].hTeamScore + "\"></td><td><input style=\"width:30px;\" type=\"text\" name=\"aTeamScoreText" + i + "\" value=\"" + jsonData[i].aTeamScore + "\"></td><td>" + jsonData[i].aTeam + "</td><td><img src=\"/logos/" + jsonData[i].aTeamID + ".webp\" width=\"40px\"></td><td>" + jsonData[i].stadium + "</td><td><input type=\"radio\" id=\"fixRad\" checked value=\"Fixture\" name=\"" + i + "\"><label for=\"fixRad\">Fixture</label><input type=\"radio\" id=\"liveRad\" value=\"Live\" name=\"" + i + "\"><label for=\"liveRad\">Live</label><input type=\"radio\" id=\"resRad\" value=\"Result\" name=\"" + i + "\"><label for=\"resRad\">Result</label></td><td id=\"insertUpdate" + i + "\">";
                    html += "</td><td id=\"insertScore" + i + "\">";
                    html += "</td><td id=\"insertEdit" + i + "\">";
                    html += "</td></tr>";
                    $("#adminTable").append(html);
                    $("#insertUpdate" + i).append(updateBtn);
                    $("#insertScore" + i).append(scoreBtn);
                    $("#insertEdit" + i).append(editBtn);
                }
                else if (jsonData[i].status == "live") {
                    html += "<tr>";
                    html += "<td>" + jsonData[i].datetime + "</td><td>" + jsonData[i].round + "</td><td>" + jsonData[i].group + "</td><td><img src=\"/logos/" + jsonData[i].hTeamID + ".webp\" width=\"40px\"></td><td>" + jsonData[i].hTeam + "</td><td><input style=\"width:30px;\" type=\"text\" name=\"hTeamScoreText" + i + "\" value=\"" + jsonData[i].hTeamScore + "\"></td><td><input style=\"width:30px;\" type=\"text\" name=\"aTeamScoreText" + i + "\" value=\"" + jsonData[i].aTeamScore + "\"></td><td>" + jsonData[i].aTeam + "</td><td><img src=\"/logos/" + jsonData[i].aTeamID + ".webp\" width=\"40px\"></td><td>" + jsonData[i].stadium + "</td><td><input type=\"radio\" id=\"fixRad\" value=\"Fixture\" name=\"" + i + "\"><label for=\"fixRad\">Fixture</label><input type=\"radio\" id=\"liveRad\" checked value=\"Live\" name=\"" + i + "\"><label for=\"liveRad\">Live</label><input type=\"radio\" id=\"resRad\" value=\"Result\" name=\"" + i + "\"><label for=\"resRad\">Result</label></td><td id=\"insertUpdate" + i + "\">";
                    html += "</td><td id=\"insertScore" + i + "\">";
                    html += "</td><td id=\"insertEdit" + i + "\">";
                    html += "</td></tr>";
                    $("#adminTable").append(html);
                    $("#insertUpdate" + i).append(updateBtn);
                    $("#insertScore" + i).append(scoreBtn);
                    $("#insertEdit" + i).append(editBtn);
                }
                else if (jsonData[i].status == "result") {
                    html += "<tr>";
                    html += "<td>" + jsonData[i].datetime + "</td><td>" + jsonData[i].round + "</td><td>" + jsonData[i].group + "</td><td><img src=\"/logos/" + jsonData[i].hTeamID + ".webp\" width=\"40px\"></td><td>" + jsonData[i].hTeam + "</td><td><input style=\"width:30px;\" type=\"text\" name=\"hTeamScoreText" + i + "\" value=\"" + jsonData[i].hTeamScore + "\"></td><td><input style=\"width:30px;\" type=\"text\" name=\"aTeamScoreText" + i + "\" value=\"" + jsonData[i].aTeamScore + "\"></td><td>" + jsonData[i].aTeam + "</td><td><img src=\"/logos/" + jsonData[i].aTeamID + ".webp\" width=\"40px\"></td><td>" + jsonData[i].stadium + "</td><td><input type=\"radio\" id=\"fixRad\" value=\"Fixture\" name=\"" + i + "\"><label for=\"fixRad\">Fixture</label><input type=\"radio\" id=\"liveRad\" value=\"Live\" name=\"" + i + "\"><label for=\"liveRad\">Live</label><input type=\"radio\" id=\"resRad\" value=\"Result\" checked name=\"" + i + "\"><label for=\"resRad\">Result</label></td><td id=\"insertUpdate" + i + "\">";
                    html += "</td><td id=\"insertScore" + i + "\">";
                    html += "</td><td id=\"insertEdit" + i + "\">";
                    html += "</td></tr>";
                    $("#adminTable").append(html);
                    $("#insertUpdate" + i).append(updateBtn);
                    $("#insertScore" + i).append(scoreBtn);
                    $("#insertEdit" + i).append(editBtn);
                }
            });
        });
    }
    $('button').each(function () {
        let button = $(this);
        button.on('click', function () {
            alert();
            let id = button.attr('id');
            let value = button.attr('value');
            console.log('Button ' + id + ' was clicked');
        });
    });
});
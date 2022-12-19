$("document").ready(function(){
    $("#loginButton").click(function(){
        $.getJSON("http://localhost:3000/login", function(jsonData){
            $.each(jsonData, function(i){
                if(jsonData[i].email == $("#email").val() && jsonData[i].password == $("#password").val()){
                    $.cookie("login", "true");
                    window.location.replace("admin.html");
                }
                else {
                    alert("Incorrect Sign In Details");
                }  
            });
        });
    });
});
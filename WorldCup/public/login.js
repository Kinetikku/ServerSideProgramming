$("document").ready(function(){
    $("#loginButton").click(function(){
        $.getJSON("http://localhost:3000/login", function(jsonData){
            $.each(jsonData, function(i){
                if(jsonData[i].email == $("#email").val() && jsonData[i].password == $("#password").val()){
                    document.cookie = "login = true";
                    window.location.href = "/admin.html"
                }
                else {
                    alert("Incorrect Sign In Details");
                }  
            });
        });
    });
});
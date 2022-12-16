$("document").ready(function(){
    $("#loginButton").onClick(function(){
        $.getJSON("http://localhost:3000/login", function(jsonData){
            $.each(jsonData, function(i, value){
                if(jsonData[i].email == $("#email").val() && jsonData[i].pasword == $("#password").val()){
                    window.location.href = "admin.html"
                }
                else {
                    alert("Incorrect Sign In Details");
                }  
            });
        });
    });
});
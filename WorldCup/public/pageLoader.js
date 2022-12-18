$(document).ready(function(){
    var logCookie = document.cookie;

    if(!logCookie || logCookie == null)
        $("#loadedNav").load("navbar.html");
    else if (logCookie)
        $("#loadedNav").load("navbarAdmin.html");
    
});
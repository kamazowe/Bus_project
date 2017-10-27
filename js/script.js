$(document).ready(function () {

    // btn jedziemy
    var addPx = 0;
    if(window.mobilecheck){
     addPx = 50;   
    }
    
    $('.btn-rusz').click(function () {
        $('html, body').animate({
            scrollTop: $("#aktualnosci").offset().top - addPx
        }, 2000);
    });
});

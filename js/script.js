$(document).ready(function(){
   
    // btn jedziemy
    
    $('.btn-rusz').click(function () {
        $('html, body').animate({
            scrollTop: $("#aktualnosci").offset().top - 50
        }, 2000);
    });
        
       
});
    
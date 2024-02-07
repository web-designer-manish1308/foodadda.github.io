$(document).ready(function(event){
           $(window).scroll(function(){
             var scroll = $(window).scrollTop();
             if (scroll > 100) {
               $(".navbar").addClass("bg-navbar");
             } else{
               $(".navbar").removeClass("bg-navbar");   
             }
           });
           
            $("#navbar").addClass("bg-navbar"); 
          
         });



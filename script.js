$(document).ready(function() {    //pauses all actions until the page is loaded
   
    $("#jq").click(function(){ 
            $("#jq").css({"background-color":'black'});
         $("#jq").animate({width:'500px', height:'600px'}).delay('5000').animate({height:'200px',width: '200px'});
        
    });
    });



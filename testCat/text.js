(function() {
    var array= [3];
    var mX, mY, distance,
        $distance = $('.circle span'),
        $element  = $('.circle');

    function calculateDistance(elem, mouseX, mouseY) {
        return Math.floor(Math.sqrt(Math.pow(mouseX - (elem.offset().left+(elem.width()/2)), 2) + Math.pow(mouseY - (elem.offset().top+(elem.height()/2)), 2)));
    }
function arrayAdd(){
   
   var circleDivs= document.getElementsByClassName("circle");


    
    
}
    $(document).mousemove(function(e) {  
        mX = e.pageX;
        mY = e.pageY;
        arrayAdd();
        distance = calculateDistance($element, mX, mY);
        $distance.text(distance);  
        if(distance<=50){
            $("#element").css("opacity","1");
        }else if(distance>50){
            $("#element").css("opacity","0");
        }
    });

})();
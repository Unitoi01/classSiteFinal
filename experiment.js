
var props = 'transform WebkitTransform MozTransform OTransform msTransform'.split(' '),
    prop,
    el = document.createElement('div');

for(var i = 0, l = props.length; i < l; i++) {
    if(typeof el.style[props[i]] !== "undefined") {
        prop = props[i];
        break;
    }
}

var xAngle = 0, yAngle = 0;

var interval= setInterval(function(){
  if(xAngle%360==90 ||xAngle%360==-270){
        $("#frame").attr("src","src/photoBack.png");
      
 }else if(xAngle%360==-90 || xAngle%360==270){
                   $("#frame").attr("src", "src/bloomBack.png"); 
                
      
  }else if(yAngle%360==90 || yAngle%360==-270){
      if(xAngle%360==0 || xAngle%360==360 || xAngle%360==-360){
      $("#frame").attr("src","src/house.jpg"); 
  }
  
    }else if(yAngle%360==180 || yAngle%360==-180){
       
         $("#frame").attr("src","src/bookBack.png"); 
          
    }else if(yAngle%360==-90 || yAngle%360==270){
        
             $("#frame").attr("src","src/wrestleBack.png"); 
    
  
    }
    
},1500);
$('body').keydown(function(evt) {
 
   
    switch(evt.keyCode) {
        case 37: // left
            yAngle -= 90;
            break;

        case 38: // up
            xAngle += 90;
            evt.preventDefault();
            break;

        case 39: // right
            yAngle += 90;
            break;

        case 40: // down
            xAngle -= 90;
            evt.preventDefault();
            break;
    };
       
    document.getElementById('cube').style[prop] = "rotateX("+xAngle+"deg) rotateY("+yAngle+"deg)";
});

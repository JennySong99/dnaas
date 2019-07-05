var SELECT = {}
SELECT.make_slection = function() {
        var brush = document.getElementById("brush");
        brush.style.dsiplay: block;
        document.addEventListener("mousemove", getMouse); 

        brush.style.position = "absolute"; //css    
        var brushpos = {x:0, y:0};
        setInterval(followMouse, 50);
        var mouse = {x:0, y:0}; //mouse.x, mouse.y
        var dir = "right";
        function getMouse(e){
          mouse.x = e.pageX;
          mouse.y = e.pageY;
          if(mouse.x > brushpos.x){
            dir = "right";
          } else {
            dir = "left";
          }
        }
        function followMouse(){
      //1. find distance X , distance Y
          var distX = mouse.x - beepos.x;
          var distY = mouse.y - beepos.y;
          brushpos.x += distX/5;
          brushpos.y += distY/2;
          brush.style.left = brushpos.x + "px";
          brush.style.top = brushpos.y + "px";
      
        //Apply css class 
          if (dir == "right"){
            brush.setAttribute("class", "right");
          } else {
            brush.setAttribute("class", "left");        
          }
        }

    }
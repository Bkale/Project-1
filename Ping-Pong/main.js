document.addEventListener("DOMContentLoaded",function(){
//PADDLE CODE
var paddle1 = document.getElementById("paddle1")
var player1 = document.getElementById('player1')


var p1vertical = 0
var p2vertical = 0
function movement(e){
  //65:A 90:Z  38:UP 40:DOWN
  if(e.keyCode == 65){
    p1vertical -= 12;
    player1.style.top = p1vertical + "px";
    if(p1vertical <= 0){
       p1vertical += 12
    }
  }
  if(e.keyCode == 90){
    p1vertical += 12;
    player1.style.top = p1vertical + "px";
    if(p1vertical >= 433){
       p1vertical -= 12
     }
  }
  if(e.keyCode == 38){
    p2vertical -= 12;
    player2.style.top = p2vertical + "px";
    if(p2vertical <= 0){
       p2vertical += 12
    }
  }
  if(e.keyCode == 40){
    p2vertical += 12;
    player2.style.top = p2vertical + "px";
    if(p2vertical >= 433){
       p2vertical -= 12
     }
  }


}
document.onkeydown = movement;


//source http://stackoverflow.com/questions/5597060/detecting-arrow-key-presses-in-javascript
// document.onkeydown = function(e) {
//   switch (e.keyCode) {
//       case 37:
//           alert('left');
//           break;
//       case 38:
//           alert('up')
//           break;
//       case 39:
//           alert('right');
//           break;
//       case 40:
//           alert('down');
//           break;
//   }
// };



//contentLoaded Closing Tag DONT DELETE
});


document.addEventListener("DOMContentLoaded",function(){
  var p1Score = 0;
  var p2Score = 0;
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
// document.onkeydown = movement;
 //BALL MOVEMENT
var ball;
var MAX_BALL_X = 1200 - 48;
var MAX_BALL_Y = 600 - 48;

var SPEED = 1;

init()

function init(){
  player1 = document.getElementById("player1")
  player1.posX = player1.offsetLeft;
  player1.posY = player1.offsetTop;
  player2 = document.getElementById("player2")
  player2.posX = player2.offsetLeft;
  player2.posY = player2.offsetTop;
  ball = document.getElementById("ball");
  ball.posX = ball.offsetLeft;
  ball.posY = ball.offsetTop;
  ball.velX = SPEED;
  ball.velY = SPEED;
  setInterval(gameLoop,33);
  document.onkeydown = movement;
}

function gameLoop(){
  if(gameOver() == true){
    console.log("Game over bitch");
    return
  }else{
  moveBall()
}
return
// prompt("Wanna play again?")
}

function moveBall(){
  ball.posX += ball.velX;
  ball.posY += ball.velY;
  player1.posX = player1.offsetLeft;
  player1.posY = player1.offsetTop;
  player2.posX = MAX_BALL_X;
  player2.posY = player2.offsetTop;


   //left
  if(ball.posX < 0){
    ball.posX = 450;
     p2Score += 1;
     console.log(ball.posX, MAX_BALL_X);
     console.log("P2Score = " + p2Score);
     return;
    // console.log(p2Score);

  }

  //right
  if( ball.posX > MAX_BALL_X ) {

   ball.posX = 450;
   p1Score += 1;
   console.log(ball.posX, MAX_BALL_X);
   console.log("P1Score = " + p1Score);
   return;
  //  console.log(p1Score);
  }
  //UP
  if(ball.posY <= 0){
    ball.posY = 0;
    ball.velY = -ball.velY;
  }
  //DOWN
  if( ball.posY >= MAX_BALL_Y ) {
      ball.posY = MAX_BALL_Y;
      ball.velY = -ball.velY;
  }

  //LEFT PADDLE
  if((  ((ball.posY >= player1.posY)&& (ball.posY <= (player1.posY + 156))) &&  (ball.posX <= player1.posX)         )){
    ball.posX = 0;
    ball.velX = -ball.velX;
  }
 //RIGHT PADDLE
  if((  ((ball.posY >= player2.posY)&& (ball.posY <= (player2.posY + 156))) &&  (ball.posX >= player2.posX)         )){
    ball.posX = MAX_BALL_X;
    ball.velX = -ball.velX;
  }


  ball.style.left = ball.posX +  "px";
  ball.style.top  = ball.posY + "px";

}

function gameOver(){
  if(p1Score == 5 || p2Score == 5){
    return true
  }else {
    return false
  }
}



//contentLoaded Closing Tag DONT DELETE
});

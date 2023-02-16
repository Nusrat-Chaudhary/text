var ball, ballImage, bg;
var edges;
var paddle,paddleImage

function preload(){
    ballImage=loadImage("ball.png")
    bg=loadImage("bg.jpg")
    paddleImage=loadImage("paddle.png")
    
}

function setup() {
  createCanvas(680, 680);
  ball= createSprite(340,500,40,40);
  ball.shapeColor = "red";
  ball.addImage("ball",ballImage);
  ball.scale=0.05;
 
    
    
    paddle = createSprite(340, 600, 120, 10);
    paddle.shapeColor = "blue";
    paddle.addImage("paddle",paddleImage)
    paddle.scale=0.1
  
 edges=createEdgeSprites();    
  
}

function draw() {
  background(bg);
    
    //class 26
    textSize(20);
    fill("black");
    text("PRESS SPACE KEY TO START THE GAME",125,300)
    
  //right  
  ball.bounceOff(edges[1]);
    //left
  ball.bounceOff(edges[0]);
    //bottom
  ball.bounceOff(edges[3]);
    //up
  ball.bounceOff(edges[2]);
    
    
  ball.bounceOff(paddle);
    
 //add movement to paddle 
    paddle.x=mouseX;
    
    
    if(keyDown("space")){
          
     ball.velocityX = 6;
     ball.velocityY = 6;
    }
    
 
    
  drawSprites()
}



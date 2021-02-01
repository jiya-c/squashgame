var ball;
var white;
var gameState= "start";

function setup() {
  createCanvas(1920,1080);
  //  ball = createSprite(724,360,20,20);
  //  ball.addImage("dot",dot);
  //  ball.scale=0.1;
  //  ball.velocityY= -5;
  //  ball.velocityX= -5;

  //  bouncestrip= createSprite(160,210,517,20);
  //  bouncestrip.rotation=-13.5
  //  bouncestrip2= createSprite(1208,195, 517,20);
  //  bouncestrip2.rotation =13.5;
  //  bouncestrip3= createSprite(695,170,540,20);
  //  out= createSprite(706,83,540,50);
  //  tin=createSprite(698,414,540,30);
  home= createSprite(1016,524);
  home.addImage("s1.png" , pic);
  home.scale=0.3;
  home.visible = false;
  start= createSprite(1720,1012);
  start.addImage("start.png" , s2);
  start.scale=0.5;
  start.visible=false;
  //  player1= createSprite(200,200,20,20);
  //  computer=createSprite(550,300,20,20);
  //  player1.addImage("comp", comp);   
  //  computer.scale=0.5;
   
//    bouncestrip.visible=true;
//    bouncestrip2.visible=true;
//    bouncestrip3.visible=true;
//    out.visible=true;
//    tin.visible=true;
 }

function preload(){
  white=loadImage("finalcourt.jpg");
  dot=loadImage("squashball.png");
  comp=loadImage("racketcomp.png");
  pic= loadImage("s1.png");
  s2= loadImage("start.png");
}

function draw() {
  if(gameState==="start"){
    background("skyblue");
  }
  else if(gameState ==="players"){
    background("white");
  }
  fill("black"); 
  textSize(20); 
  text(mouseX + " : " + mouseY, mouseX, mouseY);
  textSize(15); 
  
  if(gameState==="start"){
    home.visible = true;
    start.visible=true;
    text("THE SQUASH MANIA" , 990, 161);
    if(mousePressedOver(start)){
      gameState="rules"
      home.visible = false;
      start.visible=false;
    }
  }
  if(gameState==="rules"){
    //add the rules here!!
    // add the next button and on press next button go the gamestate names, create a if statement telling gamestate==="names" then what has to be done
  }
  if(gameState==="players"){
    var p1 = createSprite(100,100,100,10);
  }
  if(gameState ==="names"){

  }

// player1.y = World.mouseY;
// player1.x = World.mouseX;

// if (keyDown("UP_ARROW")){
//   computer.velocityX = 3;
//   computer.velocityY = -5;
// }
// if (keyDown(DOWN_ARROW)){
//   computer.velocityX = -3;
//   computer.velocityY = 5;
// }
//   if(keyDown(LEFT_ARROW)){
//     computer.velocityX = -5;
//     computer.velocityY = 3;
//   }
//   if(keyDown(RIGHT_ARROW)){
//     computer.velocityX = 5;
//     computer.velocityY = -3;

//   }

// edges = createEdgeSprites();
// ball.bounceOff(edges);

// ball.bounceOff(bouncestrip);
// ball.bounceOff(bouncestrip2);
// ball.bounceOff(bouncestrip3);

// ball.bounceOff(player1);

  drawSprites();
}
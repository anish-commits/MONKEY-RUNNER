
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var foodgroup, obstaclegroup
var score = 0,survivaltime;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(600,400);
  
  monkey = createSprite(40,350,20,60);
  monkey.addAnimation("moving",monkey_running);
  monkey.scale = 0.1;

  ground = createSprite(300,390,700,10);
  ground.velocityX = -7;
  
  foodgroup = new Group();
  obstaclegroup = new Group(); 
}


function draw() {
  background("lightgreen");
  if(ground.x<80){
    ground.x = ground.width/2;
  }
  
  if(keyDown("space")){
    monkey.velocityY = -10
  }
  monkey.velocityY = monkey.velocityY + 0.8;
  
  monkey.collide(ground);
  bananas();
  obstacles();
  drawSprites();
  textSize(15);
  fill("black");
  text("SCORE : "+score,500,20);
  
  textSize(15);
  fill("black");
  survivaltime = Math.ceil(frameCount/frameRate());
  text("SURVIVAL TIME : "+survivaltime,200,20)
  
}

function bananas(){
  
  if(frameCount%80===0){
    
    banana = createSprite(600,Math.round(random(100,200)),20,20);
    banana.addImage(bananaImage);
    banana.scale = 0.1;
    banana.velocityX = -5;
    banana.lifetime = 200;
    foodgroup.add(banana);
  }
  
}
function obstacles(){
  
  if(frameCount%100===0){
    
    obstacle = createSprite(600,350,20,20);
    obstacle.velocityX = -6;
    obstacle.scale = 0.2;
    obstacle.addImage(obstacleImage);
    obstaclegroup.add(obstacle);
    
    
  }
  
}




var bg, bgImg;
var invisibleGround;
var player,playerImg;
var obstacle, obstacleImg, obstacleGroup;
var points, pointsImg, pointsGroup;
var score = 0;
var gameState  = "play";

function preload(){

}

function setup() {
  createCanvas(1000,600);

  bg = createSprite(500,300,1000,600);
  bg.shapeColor = "blue"
  bg.velocityX = -5;
  bg.x = bg.width/2

  invisibleGround = createSprite(500,470,1000,10);

  player = createSprite(100,450,20,50);
  player.shapeColor = "green";
   
  obstacleGroup = new Group();
  pointsGroup = new Group();
}

function draw() {
  background(0);
  fill("white");
  textSize (40);
  text("Score:" + score, 750,50);

  if(keyDown("space")){
    player.velocityY = -10;
  }
  player.velocityY = player.velocityY + 0.8;

  if(bg.x < 0){
    bg.x = bg.width/2;
  }
  
  player.collide(invisibleGround);

  createObstacle();
  spawnPoints();

  drawSprites();
}

function createObstacle(){
  if(frameCount % 70 === 0){
    obstacle = createSprite(1400,420,30,80)
    obstacle.shapeColor = "yellow";
    obstacle.velocityX = -7;
    obstacleGroup.add(obstacle);
  }
}

function spawnPoints(){
  if(frameCount % 60 === 0){
    points = createSprite(800,900,30,20);
    points.y = Math.round(random(100,800));
    points.shapeColor = "red";
    points.velocityX = -9;
    pointsGroup.add(points);
  }
}
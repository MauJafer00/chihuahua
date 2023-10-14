var chihuahua;
var chihuahua_running;
var ground;
var groundImage;
var invisibleGround;
var obstacleImage1, obstacleImage2, obstacleImage3;
var obstaclesGroup;
var obstacle1Image
function preload() {
  
  chihuahua_running = loadAnimation("./assets/chihuahua1.png", "./assets/chihuahua2.png", "./assets/chihuahua3.png");
  groundImage = loadImage("./assets/ground2.png");
  obstacleImage1 = loadImage("./assets/obstacleImage1.png");
  obstacleImage2 = loadImage("./assets/obstacleImage2.png");
  obstacleImage3 = loadImage("./assets/obstacleImage3.png");

}
function setup() {

  createCanvas(600, 200);
  edges = createEdgeSprites();
  chihuahua = createSprite(50, 160, 20, 50);
  chihuahua.scale = 0.1;
  chihuahua.addAnimation("running", chihuahua_running);

  ground = createSprite(600,184 , 485, 200);
  ground.addImage(groundImage);
  invisibleGround = createSprite(600, 190, 485, 20);
  invisibleGround.visible = false;

  obstaclesGroup = new Group();
 
}
  
function draw() {
  
  background("#80d2e0");
  
  ground.velocityX = -2;
  console.log(ground.width);
  if (ground.x < 0) {
    
    ground.x = ground.width / 5;

  }
  if (keyDown("space")) {
    
    chihuahua.velocityY = -10;

  }
  chihuahua.velocityY = chihuahua.velocityY + 0.5;
  chihuahua.collide(invisibleGround);

  
  spawnObstacles();
  drawSprites();

}
function spawnObstacles() {
           
  if (frameCount % 60 === 0) {

    var obstacle = createSprite(50, 160, 20, 50);
    obstacle.velocityX = -12 ;
    obstacle.scale = 0.1;
    obstacle.lifetime = 210;
    
    var rand = Math.round(random(1, 3));

    switch (rand) {

      case 1: obstacle.addImage(obstacleImage1);
        break;
      case 2: obstacle.addImage(obstacleImage2);
        break;
      case 3: obstacle.addImage(obstacleImage3);
        break;

      default: break;

    }
    //añade cada obstaculo al grupo
    obstaclesGroup.add(obstacle);
  }

}
 
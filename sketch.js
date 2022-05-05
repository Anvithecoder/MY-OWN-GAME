var spaceImg, space;

var starImg, star , starsGroup;
var spaceship, spaceshipImg;
var invisibleBlockGroup, invisibleBlock;
var gameState = "play"

function preload(){
 spaceImg = loadImage("space.png");
 
  starImg = loadImage("star.png");
spaceshipImg = loadImage("spaceship.png");

}

function setup() {
  createCanvas(600, 600);
space = createSprite(300,300);
space .addImage("space",spaceImg);
space .velocityY = 1;

 
  starsGroup=new Group()
  invisibleBlockGroup=new Group()
  
  spaceship=createSprite(200,200,50,50)
 spaceship.scale=0.3
 spaceship.addImage(spaceshipImg)



}

function draw() {
  background(200);
  if(gameState==="play"){
    if(keyDown("left_arrow")){
        spaceship.x = spaceship.x - 3;
      }
      
      if(keyDown("right_arrow")){
      spaceship.x = spaceship.x + 3;
      }
      
      if(keyDown("space")){
        spaceship.velocityY = -10;
      }
      
      spaceship.velocityY = spaceship.velocityY + 0.8
    if(tower.y > 400){
        tower.y = 300
      }

      if (starsGroup.isTouching(spaceship)){
          
      }

  

      spawnDoors()



      drawSprites ()
  }
  if (gameState === "end"){
    stroke("yellow");
    fill("yellow");
    textSize(30);
    text("Game Over", 230,250)
  }
}
function spawnDoors (){




   star=createSprite(200,10)
    climber.addImage(starImg)

   star.velocityY=1
    star.lifetime=800
    starsGroup.add (star)

   
  }




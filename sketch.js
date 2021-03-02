var dino;

var ground;

var monster;

var boss1;
   
var mb;

var fb; 

var monstersGroup, fbsGroup;

function setup(){
 createCanvas(1000, 500);

    dino = createSprite(100, 490, 20, 50);
   
    ground = createSprite(500, 490, 2000, 15);
    ground.shapeColor = ("brown")

    monstersGroup = new Group(); 
    fbsGroup = new Group();
}

function draw(){
background(230);

spawnMonster();
spawnBosses();
spawnMagicalBall();

    ground.velocityX = -3;

    if(ground.x <0){
    ground.x = ground.width/2;
    }

   dino.collide(ground);

  if(keyDown("space")){
      shootFireBall();
  }

  if(fbsGroup.isTouching(monstersGroup)){
      monstersGroup.destroyEach();
      fbsGroup.destroyEach();
  }


drawSprites();
}


function spawnMonster(){
    if(frameCount%150 === 0){
        monster = createSprite(1000, 460, 30, 50);
        monster.velocityX = -2;
        monster.lifetime = 500; 

        monstersGroup.add(monster);
 }

}

function spawnBosses(){
    if(frameCount%160 === 0){
        boss1 = createSprite(1000, 250, 40, 30);
        boss1.velocityX = -2;
        boss1.lifetime = 500;
    }
}

function spawnMagicalBall(){
    if(frameCount%100 === 0 ){
        mb = createSprite(1000, 383, 30, 30);
        mb.velocityX = -5;
        mb.lifetime = 200;
    }
}

function shootFireBall(){
    fb = createSprite(100, 460, 10, 10);
    fb.velocityX = 10;

    fbsGroup.add(fb);
}
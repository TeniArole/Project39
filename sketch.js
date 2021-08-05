var path, girl, milk, can, water, cat, apple, trashcan, gameover, tryagain;
var pathImg, girlImg, milkImg, canImg, waterImg, catImg, appleImg, trashcanImg, gameoverImg, tryagainImg;
var plastic = 0;
var wordsImg;
var milkG, canG, waterG, catG, trashcanG, appleG;

//Game States
var PLAY = 1;
var END = 0;
var gameState = 1;

function preload() {
  pathImg = loadImage("Road.jpg");
  girlImg = loadAnimation("girl1.png", "girl2.png");
  milkImg = loadImage("milk.png");
  canImg = loadImage("can.png");
  waterImg = loadImage("water.png");
  endImg = loadImage("superhero.png");
  wordsImg = loadImage("words.png");
  trashcanImg = loadImage("trash can.png")
  appleImg = loadImage("apple.png")
  catImg = loadImage("cat.png")
  gameoverImg = loadImage("gameover.png")
  tryagainImg = loadImage("tryagain.png")
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  // Moving background
  path = createSprite(width / 2, 200);
  path.addImage(pathImg);
  path.scale = 1.2;
  path.velocityY = 5;

  //creating girl running
  girl = createSprite(width, height - 30, 20, 20);
  girl.addAnimation("GirlRunning", girlImg);
  girl.scale = 0.5;

  milkG = new Group();
  canG = new Group();
  waterG = new Group();
  catG = new Group();
  appleG = new Group();
  trashcanG = new Group();
}

function draw() {
  if (gameState === PLAY) {
    background(0);
    camera.position.x = displayWidth/2
    girl.x = World.mouseX;

    edges = createEdgeSprites();
    girl.collide(edges);

    //code to reset the background
    if (path.y > 600) {
      path.y = height / 2;
    }
    //console.log(frameCount)
    createMilk();
    createCan();
    createWater();
    createTrashcan();
    createApple();
    createCat();

    if (milkG.isTouching(girl)) {
      milkG.destroyEach();
      plastic = plastic + 1;
    } else if (canG.isTouching(girl)) {
      canG.destroyEach();
      plastic = plastic + 1;
    } else if (waterG.isTouching(girl)) {
      waterG.destroyEach();
      plastic = plastic + 1;
    } 
      else if (catG.isTouching(girl)) {
      gameState = END;
    }
      else if (trashcanG.isTouching(girl)) {
      gameState = END;
    }
      else if (appleG.isTouching(girl)){
        gameState=END;
    }
      if(gameState === END){
      gameover=createSprite(725, 350)
      gameover.addImage(gameoverImg)
      gameover.scale = 1

      //tryagain=createSprite(725, 400)
      //tryagain.addImage(tryagainImg)
      //tryagain.scale = 0.5
      
      girl.destroy();
      milkG.destroyEach();
      canG.destroyEach();
      waterG.destroyEach();
      trashcanG.destroyEach();
      appleG.destroyEach();
      catG.destroyEach();

      milkG.setVelocityYEach(0);
      canG.setVelocityYEach(0);
      waterG.setVelocityYEach(0);
      trashcanG.setVelocityYEach(0);
      appleG.setVelocityYEach(0);
      catG.setVelocityYEach(0);
      
    
      }
    

    drawSprites();
    textSize(30);
    fill("Blue");
    text("Score: " + plastic, width - 150, 50);
    textSize(15);
    text("Help pick up items", 10, 30);
    text("that can be recycled! ", 10, 50);
    text("Avoid the ones that can't", 10, 70);
    fill("red")
    text("HINT: Don't hit the", width - 150, height- 50);
    text("trash, apples, or cats", width - 150, height- 30);
    
  }
}

function createMilk() {
  if (World.frameCount % 390 == 0) {
    var milk = createSprite(Math.round(random(50, width - 50), 40, 10, 10));
    milk.addImage(milkImg);
    milk.scale = 0.4;
    milk.velocityY = (5+frameCount/100);
    milk.lifetime = 200;
    milkG.add(milk);
  }
}

function createCan() {
  if (World.frameCount % 310 == 0) {
    var can = createSprite(Math.round(random(50, width - 50), 40, 10, 10));
    can.addImage(canImg);
    can.scale = 0.1;
    can.velocityY = (5+frameCount/100);
    can.lifetime = 200;
    canG.add(can);
  }
}

function createWater() {
  if (World.frameCount % 230 == 0) {
    var water = createSprite(Math.round(random(50, width - 50), 40, 10, 10));
    water.addImage(waterImg);
    water.scale = 0.2;
    water.velocityY = (5+frameCount/100);
    water.lifetime = 200;
    waterG.add(water);
  }
}

function createTrashcan() {
  if (World.frameCount % 280 == 0) {
    var trashcan = createSprite(Math.round(random(50, width - 50), 40, 10, 10));
    trashcan.addImage(trashcanImg);
    trashcan.scale = 0.2;
    trashcan.velocityY = (5+frameCount/100);
    trashcan.lifetime = 200;
    trashcanG.add(trashcan);
  }
}

function createApple() {
  if (World.frameCount % 130 == 0) {
    var apple = createSprite(Math.round(random(50, width - 50), 40, 10, 10));
    apple.addImage(appleImg);
    apple.scale = 0.1;
    apple.velocityY = (5+frameCount/100);
    apple.lifetime = 200;
    appleG.add(apple);
  }
}

function createCat() {
  if (World.frameCount % 300 == 0) {
    var cat = createSprite(Math.round(random(50, width - 50), 40, 10, 10));
    cat.addImage(catImg);
    cat.scale = 0.2;
    cat.velocityY = (5+frameCount/100);
    cat.lifetime = 200;
    catG.add(cat);
  }
}

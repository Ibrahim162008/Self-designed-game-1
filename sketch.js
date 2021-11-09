var player;
var monster;
var spike1, spike2;
var gameOver;
var coin;
var life;
var playerImg, monsterImg, trap1, trap2;
var bg
var bgImg
function preload() {
playerImg = loadAnimation("player1.png","player2.png","player3.png","player4.png","player5.png","player6.png","player7.png","player8.png");
monsterImg = loadImage("Monster1.png");
trap1 = loadImage("spike1.png");
trap2 = loadImage("spike2.png");
gameOver = loadImage("gameOver.png");
bgImg = loadImage("Background.png");
};

function setup() {
  createCanvas(950,600);
  player = createSprite(650, 510, 50, 50);
  player.addAnimation("running",playerImg);
  player.scale = 1;
  monster = createSprite(100, 410, 50, 50);
  monster.addImage(monsterImg);
  monster.scale = 0.7;
  bg = createSprite(630, 300, 50, 50);
  bg.addImage(bgImg);
}

//num = random(200,100);

function draw() {
  monster.depth = 2;
  player.depth = 2;
  bg.depth = 1;
  bg.velocityX = -9.8;
  if (bg.x < -860) {
    bg.x = 670;
    }
  drawSprites();
}
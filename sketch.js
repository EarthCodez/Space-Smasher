var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;
var locvar1,em=[585,885],locvar2=2;
var form, player, game;
var speed=10;
var players, player1, player2,obstacle,poweruI,poweruU;
var powI=0,powU=0;
var player1_img , player2_img,bg1,player1_imgs,player2_imgs;
var count=1;
var abrand=[];
var ch;
var pu=[]
var puU=[];
var powupdist;
var flag,fs,fs2;
var bg,bgs,bgs2;
var notplayerindex;
var Switch=false;
var no=0;
var ob,obstacleI;
function preload(){
  player1_img = loadAnimation("Images/Sprites/Blue/B1.png", "Images/Sprites/Blue/B2.png", "Images/Sprites/Blue/B3.png", "Images/Sprites/Blue/B4.png", "Images/Sprites/Blue/B5.png");
  player2_img = loadAnimation("Images/Sprites/Red/R1.png", "Images/Sprites/Red/R2.png", "Images/Sprites/Red/R3.png", "Images/Sprites/Red/R4.png", "Images/Sprites/Red/R5.png");
  bg=loadImage("Images/Bg/Morning.jpg")
  bg1=loadImage("./images/form_bg.jpg")
  flag=loadImage("Images/Sprites/flag.png")
  //one powerup randomly generated ingame
  pu[5]=loadImage("./images/Sprites/Item/Powerups/Dragon_Breath.png")
  pu[4]=loadImage("./images/Sprites/Item/Powerups/Diamond.png")
  pu[3]=loadImage("./images/Sprites/Item/Powerups/Emerald.png")
  pu[2]=loadImage("./images/Sprites/Item/Powerups/Ruby.png")
  pu[1]=loadImage("./images/Sprites/Item/Powerups/Gold.png")
  pu[0]=loadImage("./images/Sprites/Item/Powerups/Iron.png")

  ob=loadImage("./images/Sprites/Item/obstacles/Totem_of_Undying.png")
}

function setup(){
  canvas = createCanvas(windowWidth-17.5, windowHeight-20);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();

  bgs=createSprite(10000,500,windowWidth,windowHeight)
  bgs.addImage(bg)
  bgs.scale=1
  
  bgs2=createSprite(10000,800,windowWidth,windowHeight)
  bgs2.addImage(bg)
  bgs2.scale=1

 fs=createSprite(14300,500)
 fs.addImage(flag)
fs.scale=0.5

fs2=createSprite(14300,800)
 fs2.addImage(flag)
fs2.scale=0.5
abrand=Math.round(random(1,1475))
  powupdist=5000;
}


function draw(){
  // background("red")

  // bgs.velocityX=-2;
  //   bgs2.velocityX=-2;

  //   if(bgs.x<1000){
  //     bgs.x=0
  // }
  // if(bgs2.x<1000){
  //     bgs2.x=0
  // }
  if(playerCount === 2){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }
  if(gameState === 2){
    game.end();
  }

  

}

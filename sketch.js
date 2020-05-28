var canvas, backgroundImage;

var gameState = 0;
var playerCount;

var database;
var allPlayers;
var form, player, game;
var player1,player2,player3,player4;
var players;
var player1_ing, player2_ing,player3_ing,player4_ing;
var ground1;
var track_1;


function preload(){
track_1 = loadImage("images/track.png");
car1_ing= loadImage("images/Player1.jpeg");
car2_ing = loadImage("images/Player2.jpeg");
car3_ing = loadImage("images/Player3.jpeg");
car4_ing = loadImage("images/Player4.jpeg");
ground1 = loadImage("images/ground.png");






}

function setup(){
  canvas = createCanvas(displayWidth-20,displayHeight-30);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
  


}


function draw(){
  if(playerCount === 4){
    console.log("playerCount"+playerCount);
    game.update(1);
    
  }
  if(gameState===1){
    clear();
    game.play();
  }

  if(gameState===2){
    game.end();
  }


}

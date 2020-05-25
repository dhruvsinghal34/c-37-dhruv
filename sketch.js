var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayer;
var database;

var form, player, game;
var car1,car2,car3,car4;
var cars;

function setup(){
  canvas = createCanvas(displayWidth,displayHeight);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}


function draw(){
  background("yellow")
  if(playerCount===4){
    game.update(1);
  }
  if(gameState===1){
    game.play ();
  }
}

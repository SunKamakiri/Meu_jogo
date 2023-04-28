let player, login, game;
let gameState = 0

let spritePlayer;
let chest;
let floor;
let enemies;
let elfFront, elfBack;

function preload(){
     chest = loadImage("./assets/Chest.png");
     floor = loadImage("./assets/floor.jpg");
     elfFront = loadImage()
 }


function setup(){
createCanvas(1200,600);

game = new Game()
game.start();
}

function draw(){
     background("grey");


     if(gameState === 1){
          game.historia();
          
     }

     if(gameState === 2){
          game.play();
     }

}
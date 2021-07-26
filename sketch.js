var garden,rabbit;
var gardenImg,rabbitImg;
var apple,appleImg
var orangeL,orangeImg
var redL ,redImg
function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
appleImg = loadImage("apple.png")

orangeImg=loadImage("orangeLeaf.png")
redImg=loadImage("redimage.png")

}

function setup(){
  
  createCanvas(400,400);
  
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);

//creating boy running
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);

}


function draw() {
  background(0);
  rabbit.x=World.mouseX
  edges= createEdgeSprites();
  rabbit.collide(edges);


  drawSprites();
  var select_sprites = Math.round(random(1,3));
  if(frameCount%80===0){
    if(select_sprites===1){
      createApples();
    }
    else if(select_sprites===2){
      createOrange();
    }
    else{
      createRed();
    }
  }

}

function createApples(){
  apple = createSprite(random(50,350),40,10,10)
apple.addImage(appleImg)
apple.scale =0.08
apple.velocityY=3



}function createOrange(){
  orangeL = createSprite(random(50,350),40,10,10)
  orangeL.addImage(orangeImg)
  orangeL.scale =0.08
  orangeL.velocityY=3




}function createRed(){
   redL= createSprite(random(50,350),40,10,10)
   redL.addImage(redImg)
   redL.scale =0.08
   redL.velocityY=3

}

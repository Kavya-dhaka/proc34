
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


var snake;
var apple;
var bg_img;


function preload(){
   bg_img = loadImage('wp3906260.jpg');
}






function setup() {
  createCanvas(400,400);

  engine = Engine.create();
  world = engine.world;

  snake = createSprite(200, 200, 40, 10);





  

  


  
  
}


function draw() 
{
  background(51);
  image(bg_img, 0, 0, width, height);
  
  Engine.update(engine);

  drawSprites();
  
}


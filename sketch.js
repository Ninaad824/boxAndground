const  Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var box1,box2,Ground;

var engine,world
function setup() {
  var canvas = createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;
 
  box1 = new Box(200,150,40,40);
  box2 = new Box(230,50,30,30);
  Ground = new ground(200,390,400,10)
}

function draw() {
  background(255,255,255);  
  Engine.update(engine)
  box1.display();
  box2.display();
  Ground.display();
}
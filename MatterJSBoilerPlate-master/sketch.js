
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper;
var ground;
var side1, side2, side3;

function preload()
{
	
}

function setup() {
	createCanvas(1200, 800);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	paper = new Paper(200, 450, 40)
	ground = new Ground(100, 750, 2500, 10)
	side1 = new DustBin(700, 700, 20, 100)
	side2 = new DustBin(900, 700, 20, 100)


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  paper.display();
  ground.display();
  side1.display();

  side2.display();

  drawSprites();
 
}

function keyPressed(){
	if (keyCode === UP_ARROW){
		Matter.Body.applyForce(paper.body, paper.body.position, {x:5, y:-5});
	}
}

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;

var paper, dus4,dusI;
var engine , world, ground,dus1,dus2,dus3;

function preload(){	
  dusI = loadImage("2.png");
}

function setup() {
	createCanvas(1600, 700);
  
  dus4 = createSprite(1210,515,10,10);
  dus4.addImage(dusI);
  dus4.scale = 0.9;

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
  paper = new Paper(150, 600, 70);
  ground = new Ground(width/2,670,width,10);

  dus1 = new Dustbin(1200 , 650, 170, 25);
  dus2 = new Dustbin(1300, 577, 17, 170);
  dus3 = new Dustbin(1200, 577, 17, 170);

  var render = Render.create({
    element: document.body,
    engine: engine,
    options: {
      width: 1600,
      height: 700,
      wireframes: false
    }
  });

  Render.run(render);
  Engine.run(engine);
  
}

function draw() {
  //rectMode(CENTER);
  background(200);

  Engine.update(engine);

  
  dus2.display();
  dus3.display();
  ground.display();
  dus1.display();
  paper.display();

  keyPressed();
  drawSprites();
 
}

function keyPressed() {
  if (keyWentDown("up")) {
    Matter.Body.applyForce(paper.body, paper.body.position,{x:300, y:-300});
  }  
}

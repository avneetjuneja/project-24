
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

 var engine, world, dustbin1, paper1

function setup() {
	createCanvas(1200, 400);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	Engine.run(engine);

	dustbin1 = new DustBin(730, 390, 100, 10);
	paper1 = new Paper(100, 300, 10);
	ground = Bodies.rectangle(width/2, 400, width, 10,{isStatic: true});
	World.add(world, ground);
}


function draw() {
 background("black");
  rectMode(CENTER);
  background(0);

  dustbin1.display();
  paper1.display();
	
 drawSprites();
 
}


function keypressed() {
	if(keyCode === UP_ARROW) {
		Matter.Body.applyForce(paper1.body, paper1.body.position, {
			x: 80,
			y: -80
		});
	}
}



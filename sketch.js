
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;
	
	as= new P2(80,height-80,20);
	p1 = new P(400,height-40,150,20);
	p22 = new P(475,height-80,20,75);
	p3 = new P(320,height-80,20,75);
	groundSprite=new ground(width/2, height-35, width,10);
	


	groundSprite.shapeColor=color(255);

	//Create the Bodies Here.
	World.add(world, groundSprite);
	World.add(world, as);

	Engine.run(engine);
  
}


function draw() {
	Engine.update(engine);
  rectMode(CENTER);
  background(0);
  keyPressed();
 groundSprite.display();
  drawSprites();
  p1.display();
  p22.display();
  p3.display();
  as.display();

}

function keyPressed(){
if(keyCode===UP_ARROW){
Matter.Body.applyForce(as.body,as.body.position,{x:85,y:-85})


}



}


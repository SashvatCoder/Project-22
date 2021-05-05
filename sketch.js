var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
var border1,border2,border3;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 100, 100,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 100,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)


	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.4, isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);

	 border1=createSprite(260,620,15,80);
	 border2=createSprite(340,652,150,15);
	 border3=createSprite(420,620,15,80);

	Engine.run(engine);
  
}

function draw() {
  rectMode(CENTER);
  background(0);
  border1.shapeColor="red";
  border2.shapeColor="red";
  border3.shapeColor="red";
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
Matter.Body.setStatic(packageBody,false)
Matter.body.setStatic(border1,false)
Matter.body.setStatic(border2,false)
Matter.body.setStatic(border3,false)
    
  }
}




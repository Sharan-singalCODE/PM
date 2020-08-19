
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var chainobj
var treeobj,boypic,boyobj,groundobj,stoneobj,mangoobj1,mangoobj2,mangoobj3,mangoobj4,mangoobj5
function preload()
{
	boypic=loadImage('Plucking mangoes/boy.png')
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;
    groundobj=new Ground(400,700)
	treeobj = new Tree(500,200);
	boyobj =createSprite(100,600,20,02)
    boyobj.addImage(boypic,20,20)
	boyobj.scale=0.1
	chainobj=new Chain(stoneobj,{x:30,y:520})
	stoneobj = new Stone(30,520)
	mangoobj1 = new Mango(700,300)
	mangoobj2 = new Mango(660,400)
	mangoobj3 = new Mango(600,260)
	mangoobj4 = new Mango(550,350)
	mangoobj5 = new Mango(630,300)
    
	Engine.run(engine);

}


function draw() {
  rectMode(CENTER);
  background(0);
  drawSprites(); 
  treeobj.display();
  groundobj.display();
  stoneobj.display()
  mangoobj1.display();
  mangoobj2.display();
  mangoobj3.display();
  mangoobj4.display();
  mangoobj5.display();
  chainobj.display()
  detectCollision(stoneobj,mangoobj1)
  detectCollision(stoneobj,mangoobj2)
  detectCollision(stoneobj,mangoobj3)
  detectCollision(stoneobj,mangoobj4)
  detectCollision(stoneobj,mangoobj5)
  
}
function mouseDragged(){
    Matter.Body.setPosition(stoneobj.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    chainobj.fly();
}

function detectCollision(lstone,lmango) {
  mangoBodyPosition = lstone.body.position
  stoneBodyPosition = lstone.body.position
  var distance = dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y)
  if(distance<=lmango.r+lstone.r){
	  Matter.Body.setStatic(lmango.body,false)
  }
}
function keyPressed(){
	if(keyCode==32){
		Matter.Body.setPosition(stoneobj.body,{x:235,y:420})
		chainobj.attach(stoneobj.body)
	}
}
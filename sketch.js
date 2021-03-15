
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;
var treeObj, groundObject;
var mango1;
var world,boy;
var Stone;
var chain;

function preload(){
	boy=loadImage("images/boy.png");
  }

function setup() {
	createCanvas(1300, 600);
	engine = Engine.create();
	world = engine.world;

	mango1=new mango(1100,100,30);

	treeObj=new tree(1050,580);
	groundObject=new ground(width/2,600,width,20);
	
	Stone=new stone(150, 300, 15);

	chain=new constraint(Stone.body, {x:225, y:325});
	
	Engine.run(engine);

}

function draw() {

  background(230);
  //Add code for displaying text here!
  image(boy ,200,340,200,300);
  

  treeObj.display();
  mango1.display();
  Stone.display();
  chain.display();
  groundObject.display();
}

function keyPressed() {
if (keyCode === 32){
Matter.body.setPosition(Stone.body, {x:150, y:350})

}
function mouseDragged() {
Matter.body.setPosition(Stone.body, {x:mouseX, y: mouseY})


}

function mouseReleased()
{
	Constraint.fly();
}




}
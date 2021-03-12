
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;
var treeObj, stoneObj,groundObject, launcherObject;
var mango1;
var world,boy;

function preload(){
	boy=loadImage("images/boy.png");
  }

function setup() {
	createCanvas(1300, 600);
	engine = Engine.create();
	world = engine.world;

	mango1=new mango(1100,100,30);
	mango2=new mango(1030,100,30);
	mango3=new mango(1100,170,30);
	mango4=new mango(1170,200,30);
	mango5=new mango(950,150,30);
	mango6=new mango(1000,200,30);
	mango7=new mango(930,230,30);
	mango8=new mango(1170,120,30);
	mango9=new mango(1230,200,30);
	mango10=new mango(1120,240,30);

	treeObj=new tree(1050,580);
	groundObject=new ground(width/2,600,width,20);

	stone=new Stone(210,375,40,40);

	slingshot=new SlingShot(stone.body, {x:225,y:370});
	
	Engine.run(engine);

}

function draw() {

  background(230);
  //Add code for displaying text here!
  image(boy ,200,290,200,300);
  

  treeObj.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();
  mango9.display();
  mango10.display();

  groundObject.display();

  stone.display();

  slingshot.display();

//   detectCollission(stone, mango1);
//   detectCollission(stone, mango2);
//   detectCollission(stone, mango3);
//   detectCollission(stone, mango4);
//   detectCollission(stone, mango5);
//   detectCollission(stone, mango6);
//   detectCollission(stone, mango7);
//   detectCollission(stone, mango8);
//   detectCollission(stone, mango9);
//   detectCollission(stone, mango1);
}

function mouseDragged(){
	Matter.Body.setPosition(stone.body, {x:mouseX, y:mouseY});
}

function mouseReleased(){
	slingshot.fly();
}

// function keyPressed(){
// 	if (keyCode===32){
// 		Matter.Body.setPosition(stone.body, {x:210, y:375})
// 		slingshot.attach(stone.body);
// 	}
// }

// function detectCollission(lstone, lmango){
// 	mangoBodyPosition=lmango.body.position;
// 	stoneBodyPosition=lstone.body.position;

// 	var distance=dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y);
// 		if (distance<=lmango.radius+lstone.radius){
// 			Matter.Body.setStatic(lmango.body, false);
// 		}	
// }
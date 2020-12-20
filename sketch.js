const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var box1,box2,box3,box4,box5,box6,box7,box8,box9;
var polygon ; 


function setup() {
  var canvas = createCanvas(800,400);
  engine = Engine.create(); 
  world = engine.world;
  // 1st layer of blocks 
  var box1 = new Block (390,155,30,40);
  //2nd layer of blocks 
  var box2 = new Block (360,195,30,40);
  var box3 = new Block (390,195,30,40);
  var box4 = new Block (420,195,30,40);
  //3rd layer of blocks 
  var box5 = new Block (330,235,30,40);
  var box6 = new Block (360,235,30,40); 
  var box7 = new Block (390,235,30,40);
  var box8 = new Block (420,235,30,40);
  var box9 = new Block (450,235,30,40);
  // ball 
  ball = new Ball(200,50);
  // slingshot
  slingshot = new SlingShot(ball.body,{x:200, y:50});
}

function draw() {
  background(255,255,255);  
  Engine.update(engine);
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();
  drawSprites();
}
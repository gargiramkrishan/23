const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine,world;

var ball,ball2,ball3,ball4,ball5;

var ground,ground1,ground2;
function setup(){
    createCanvas(400,600);
    engine = Engine.create();
    world = engine.world;
    var ball_op =
    {
      restitution: 1,
      frictionAir: 0.1
    }
    ball = Bodies.circle(200,20,30,ball_op);
    World.add(world,ball)
    fill("blue")
    ball2 = Bodies.circle(150,20,30,ball_op);
    World.add(world,ball2)
    fill("yellow")
    ball3 = Bodies.circle(100,20,30,ball_op);
    World.add(world,ball3)
    fill("red")
    ball4 = Bodies.circle(250,20,30,ball_op);
    World.add(world,ball4)
    fill("pink")
    ball5 = Bodies.circle(300,20,30,ball_op);
    World.add(world,ball5)
    fill("blue")
    var ground_op =
    {
      isStatic : true
    }

    ground = Bodies.rectangle(200,400,400,90,ground_op)
    World.add(world,ground)
    fill("blue")

    ground1 = Bodies.rectangle(200,200,100,90,ground_op)
    World.add(world,ground1)
    fill("blue")

    ground2 = Bodies.rectangle(50,250,80,90,ground_op)
    World.add(world,ground2)
    fill("yellow")
    


    var ground_op =
    {
      isStatic : true
    }

    rectMode(CENTER)
    ellipseMode(RADIUS)

}

function draw(){
    background("lightgreen");
    Engine.update(engine);
    ellipse(ball.position.x,ball.position.y,30)
    ellipse(ball2.position.x,ball2.position.y,30)
    ellipse(ball3.position.x,ball3.position.y,30)
    ellipse(ball4.position.x,ball4.position.y,30)
    ellipse(ball5.position.x,ball5.position.y,30)
    rect(ground.position.x,ground.position.y,400,90)
    rect(ground1.position.x,ground1.position.y,100,90)
    rect(ground2.position.x,ground2.position.y,60,40)
}

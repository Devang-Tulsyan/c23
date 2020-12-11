const Engine = Matter.Engine; //Universe
const World = Matter.World;  //Earth
const Bodies = Matter.Bodies;  //Physical Bodies
const Render = Matter.Render;

var myEngine, myWorld; //our engine and world objects for this file
var ground, ball; //physical bodies
var box1, box2;


function setup()
{
    createCanvas(800,500);

    //initialising myEngine and myWorld objects
    myEngine=Engine.create();
    myWorld = myEngine.world;

    var render = Render.create({
        element: document.body,
        engine: myEngine,
        options: {
          width: 1200,
          height: 700,
          wireframes: false
        }
      });
  
      //Engine.run(myEngine);
      Render.run(render);
  
   
    console.log(ground)

    var ballOptions={
        isStatic:false,
        restitution:0.8,
        density:1.5
    }
    ball=Bodies.circle(300,100,25, ballOptions); //25 is the radius of the circle
    World.add(myWorld,ball);

    //instantiating objects of the Box class
    box1=new Box(500,150,50,50);
    box2=new Box(530,100,50,50)
ground=new Ground(400,300,800,20)  
     
}

function draw()
{
    background(0);

    Engine.update(myEngine); //refreshing myEngine in every frame-like drawSprites()
    //displaying the box using p5 rect Sha
    ground.display()

    fill("red");
    ellipseMode(CENTER);
    ellipse(ball.position.x, ball.position.y, 50);

    box1.display();
    box2.display(); 
     
}

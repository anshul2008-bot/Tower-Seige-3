const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var block1, block2, block3, block4, block5, block6, block7, block8, block9, block10, block11, block12, block13, block14;
var block15, block16, block17, block18, block19, block20, block21, block22, block23, block24, block25, block26, block27;
var ground1, ground2, ground3, ground4;
var polygon, polygonImage;
var slingShot;
var score = 0;

function preload() {
    polygonImage = loadImage("polygon.png");
}
function setup() {
    createCanvas(1400, 800);

    engine = Engine.create();
    world = engine.world;

    //Create the Bodies Here.
    // Block One
    //Bottom
    block1 = new Block(1230, 550, 30, 30);
    block2 = new Block(1170, 550, 30, 30);
    block3 = new Block(1140, 550, 30, 30);
    block4 = new Block(1110, 550, 30, 30);
    block5 = new Block(1200, 550, 30, 30);
    //Middle
    block6 = new Block(1170, 520, 30, 30);
    block7 = new Block(1140, 520, 30, 30);
    block8 = new Block(1200, 520, 30, 30);
    //Top
    block9 = new Block(1170, 490, 30, 30);

    //Block 2
    //Bottom 
    block10 = new Block(970, 200, 30, 30);
    block11 = new Block(1000, 200, 30, 30);
    block12 = new Block(940, 200, 30, 30);
    block13 = new Block(910, 200, 30, 30);
    block14 = new Block(880, 200, 30, 30);
    //Middle
    block15 = new Block(970, 170, 30, 30);
    block16 = new Block(940, 170, 30, 30);
    block17 = new Block(910, 170, 30, 30);
    //Top
    block18 = new Block(940, 140, 30, 30);

    //Block3
    //Bottom
    block19 = new Block(500, 400, 30, 30);
    block20 = new Block(530, 400, 30, 30);
    block21 = new Block(560, 400, 30, 30);
    block22 = new Block(470, 400, 30, 30);
    block23 = new Block(440, 400, 30, 30);
    //Middle
    block24 = new Block(500, 370, 30, 30);
    block25 = new Block(530, 370, 30, 30);
    block26 = new Block(470, 370, 30, 30);
    //Top
    block27 = new Block(500, 340, 30, 30);

    ground1 = new Ground(1185, 580, 160, 20);
    ground2 = new Ground(955, 225, 160, 20);
    ground3 = new Ground(515, 425, 160, 20);
    ground4 = new Ground(700, 786, 1400, 30);

    //Polygon
    polygon = Bodies.circle(40, 300, 50);
    World.add(world, polygon);

    //SlingShot
    slingShot = new SlingShot(this.polygon, { x: 80, y: 150 });

    Engine.run(engine);

}

function draw() {
    Engine.update(engine);
    background("Black");

    text("Drag to release the polygon", 700, 40);
    text("Score: " + score, 750, 60)

    fill("blue");
    block1.display();
    block2.display();
    block3.display();
    block4.display();
    block5.display();
    block6.display();
    block7.display();
    block8.display();
    block9.display();
    block10.display();
    block11.display();
    block12.display();
    block13.display();
    block14.display();
    block15.display();
    block16.display();
    block17.display();
    block18.display();
    block19.display();
    block20.display();
    block21.display();
    block22.display();
    block23.display();
    block24.display();
    block25.display();
    block26.display();
    block27.display();

    block1.score();
    block2.score();
    block3.score();
    block4.score();
    block5.score();
    block6.score();
    block7.score();
    block8.score();
    block9.score();
    block10.score();
    block11.score();
    block12.score();
    block13.score();
    block14.score();
    block15.score();
    block16.score();
    block17.score();
    block18.score();
    block19.score();
    block20.score();
    block21.score();
    block22.score();
    block23.score();
    block24.score();
    block25.score();
    block26.score();
    block27.score();

    ground1.display();
    ground2.display();
    ground3.display();
    ground4.display();

    slingShot.display();

    imageMode(CENTER);
    image(polygonImage, polygon.position.x, polygon.position.y, 50, 50);
}

function mouseDragged() {
    Matter.Body.setPosition(this.polygon, { x: mouseX, y: mouseY })
}

function mouseReleased() {
    slingShot.fly();
}

function keyPressed() {
    if (keyCode === 32) {
        slingShot.attach(this.polygon)
    }

}
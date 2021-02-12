const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var maxDrops = 20;
var dropArr = [];
var raindrop;
var umbrellaL, umbrellaO;

function preload() {
    raindrop = loadImage("raindrop.png");
    umbrellaL = loadImage("umbrella.png")
}

function setup() {
    var canvas = createCanvas(800, 800);
    engine = Engine.create();
    world = engine.world;
    if (frameCount % 100 === 0) {
          for (var i = 0; i < maxDrops; i++) {
            dropArr.push(new drops(random(0, 800), random(0, 800), 15));
        }
    }
    umbrellaO = new Umbrella(400,600,250)

    Engine.run(engine);



}

function draw() {
    background("black")
    for (var i = 0; i < maxDrops; i++) {
        dropArr[i].display();
        dropArr[i].updateRain();

    }
    umbrellaO.display();
}


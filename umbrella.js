class Umbrella{
    constructor(x, y, radius) {
        var options={
            'friction' : 0.1,
            'isStatic' : true
        }
        this.body = Bodies.circle(x,y,radius,options);
        this.radius = radius
        this.image = loadImage("umbrella.png")
        World.add(world,this.body);
    }
    display() {
        var posU = this.body.position;
        push()
        translate(posU.x, posU.y);
        imageMode(CENTER);
        image(this.image,0,0,this.radius*2, this.radius*2)
        pop()
    }
}
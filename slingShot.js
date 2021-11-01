class SlingShot{
    constructor(bodyA, bodyB){
    var options={
        bodyA : bodyA,
        bodyB : bodyB,
        length : 200,
        stiffness : 0.01,  
    }
    this.sling= Constraint.create(options);
    World.add(world,this.sling);

    }

    display(){
        var pointA = this.sling.bodyA.position
        var pointB = this.sling.bodyB.position
        push();
        strokeWeight(10);
        line(pointA.x,pointA.y,pointB.x,pointB.y)
        pop();
    }
}
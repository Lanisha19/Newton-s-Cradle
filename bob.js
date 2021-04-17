class Bob{
    constructor(x,y){
     var option = {
         isStatic: false,
         restitution: 1,
         friction: 0,
         density: 7.8
     }
     this.x=x;
     this.y=y;
     this.body = Bodies.circle(x, y ,25, option);
     World.add(world, this.body);
    }

    display(){
     var posX = this.body.position.x;
     var posY = this.body.position.y;

     push();
     ellipseMode(RADIUS);
     fill("pink");
     ellipse(posX, posY, 25, 25);
     pop();

    }
}
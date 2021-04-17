class Roof{
   constructor(x,y,width,height){
       var option = {
           isStatic: true
       }
       this.x=x;
       this.y=y;
       this.width=width;
       this.height=height;

       this.body = Bodies.rectangle(x,y,width,height,option);
       World.add(world, this.body);
   }
   display(){
       var posX=this.body.position.x;
       var posY=this.body.position.y;
       push();
       rectMode(CENTER);
       fill("grey");
       rect(posX, posY, this.width, this.height);

   }
}
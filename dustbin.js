class Dustbin { 
    constructor(x,y,w,h) {

        var options = {
            isStatic: true
        }

        this.x = x;
        this.y = y;

        this.w = w;
        this.h = h;

        this.body = Bodies.rectangle(this.x,this.y,this.w,this.h,options); 
       // this.image = loadImage("2.png")
        World.add(world, this.body); 
    }

    display(){
     var pos = this.body.position;
     var angle = this.body.angle;

     push();
     translate(pos.x,pos.y);
     rotate(angle);
     rectMode(CENTER);
     rect(0, 0, this.w , this.h);
     pop();
    } 
}

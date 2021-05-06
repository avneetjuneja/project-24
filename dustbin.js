class DustBin {
    constructor(x, y){
        this.x=x
        this.y=y
        this.width=200
        this.height=100
        this.thickness=20
        this.angle=0
        var options={
            isStatic:true
        }

        this.bottombody = Bodies.rectangle(this.x, this.y, this.width, this.thickness, options);
        World.add(world, this.bottombody);
        this.bodyleft = Bodies.rectangle((this.x- (this.width/2)), (this.y- (this.height/2)), this.thickness, this.height, options);
        Matter.Body.setAngle(this.bodyleft, this.angle);
        World.add(world, this.bodyleft);
        this.bodyright = Bodies.rectangle((this.x+(this.width/2)), (this.y-(this.height/2)), this.thickness, this.height, options);
        Matter.Body.setAngle(this.bodyright, this.angle*-1);
        World.add(world, this.bodyright);
        
    }
    display() {
        var posbottom=this.bottombody.position;
        var posleft=this.bodyleft.position;
        var posright=this.bodyright.position;
        push()
        translate(posleft.x, posleft.y);
        rectMode(CENTER);
        angleMode(RADIANS);
        fill("white");
        stroke(255);
        strokeWeight(4);
        rotate(this.angle);
        rect(0,0,this.thickness,this.height);
        pop()

        push()
        translate(posright.x, posright.y);
        rectMode(CENTER);
        angleMode(RADIANS);
        fill("white");
        stroke(255);
        strokeWeight(4);
        rotate(this.angle*-1);
        rect(0,0,this.thickness,this.height);
        pop()

        push()
        translate(posbottom.x, posbottom.y);
        rectMode(CENTER);
        angleMode(RADIANS);
        fill("white");
        stroke(255);
        strokeWeight(4);
        rect(0,0,this.width,this.thickness);
        pop()
        
    }

}
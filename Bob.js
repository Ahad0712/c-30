class Bob {
    constructor (x,y,r){
        var options = {
            'restitution':1.4,
            'friction':1,
            'density':1
        }
        this.x=x;
        this.y=y;
        this.r=r;
        this.body=Bodies.circle(this.x,this.y,(this.r-20)/2,option)
        World.add(world,this.body);
    }
    display(){
        var bobposition=this.body.position;
        push()
        traslate(bobposition.x,bobposition.y);
        rectMode(CENTER)
        fill("black")
        ellipse(0,0,this.r,this.r);
        pop()
    }
}
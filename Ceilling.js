class Ceilling {
    constructor(x,y,width,height) {
      var options = {
          isStatic: true
      }
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
    }
    display(){
      var position =this.body.position;
      rectMode(CENTER);
      fill(rgb(217, 171, 54));
      rect(position.x, position.y, this.width, this.height);
    }
  };
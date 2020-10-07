class Pig extends BaseClass {
  constructor(x, y){
    super(x,y,50,50);
    this.image = loadImage("sprites/enemy.png");
    this.alpha = 255;
  }

  display(){
  if(this.body.speed > 2.5){
    World.remove(world,this.body);
    this.alpha = this.alpha-3;
    push();
    tint(255,this.alpha);
    image (this.image,this.body.position.x,this.body.position.y,50,50);
    pop();
  }
  else{
    super.display();
  }

 
  }

};
class stone{
constructor(x,y,r){
var options={
restitution:0,
friction:1,
density:1
}
this.r=r;
this.body=Bodies.circle(x,y,r,options);
this.image=loadImage("images/stone.png");
World.add(world,this.body);
}





display(){
imageMode(CENTER);
image(this.image, this.body.position.x, this.body.position.y, 50, 50);


}
}
















class constraint {
constructor(bodyA, pointB){

    var options={
    bodyA:bodyA,
    pointB:pointB,
    length:10,
    stiffness:0.04,
    }
this.Constraint=Constraint.create(options)
World.add(world,this.Constraint);
}

fly(){
this.Constraint.bodyA=null


}

attacher(bodyA){
    this.Constraint.bodyA=bodyA
}

display(){
if(this.Constraint.bodyA){
line(this.Constraint.bodyA.position.x, this.Constraint.bodyA.position.y, this.Constraint.pointB.position.x, this.Constraint.pointB.position.y)

}
}











}
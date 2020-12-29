class P2{
    constructor(x,y,radius){
    var    poptions={
        isStatic:false,
		restitution : 0.3,
		friction:0.5,
		density:1.2

        }
        this.body=Bodies.circle(x,y,radius,poptions);

        this.x=x
        this.y=y
        this.radius=radius

        
 }
 display(){
        rectMode(CENTER);
        World.add(world, this.body);
   circle(this.body.position.x,this.body.position.y,this.radius);
    }
};
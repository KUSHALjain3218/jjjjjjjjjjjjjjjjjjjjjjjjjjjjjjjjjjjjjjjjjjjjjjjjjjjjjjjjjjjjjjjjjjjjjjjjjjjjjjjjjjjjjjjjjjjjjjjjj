class ground{
    constructor(x,y,width,height){
    var    poptions={
                isStatic:true,
                density:2
        }
        this.body=Bodies.rectangle(x,y,width,height,poptions);

        this.x=x
        this.y=y
        this.width=width
        this.height=height
        
 }
 display(){
        rectMode(CENTER);
        World.add(world, this.body);
   rect(this.body.position.x,this.body.position.y,this.width,this.height);
    }
};
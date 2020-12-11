class Ground{
constructor(x,y,w,h){
//declaring options for the body in JSON format
 var groundOptions={
    isStatic:true        
}

//adding ground to the Physics Engine
this.body = Bodies.rectangle(x,y,w,h,groundOptions);
World.add(myWorld, this.body);
this.w=w;
this.h=h

}
display(){
    rectMode(CENTER)
rect(this.body.position.x,this.body.position.y,this.w,this.h)
}}
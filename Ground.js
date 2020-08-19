class Ground{
   constructor(x,y){
     var options = {
         isStatic: true,
         friction: 0.1
       }
       this.x=x
       this.y=y
       this.width= 700
       this.height=50
       this.body = Bodies.rectangle(this.x,this.y,this.width,this.height,options)
   }
   display() {
       rect(this.x,this.y,this.width,this.height)
   }
}
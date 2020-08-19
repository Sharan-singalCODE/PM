class Tree{
      constructor(x,y){
      var options ={
          isStatic:true
        }
    this.x=x
    this.y=y
    this.height=500
    this.width=250
    this.body =Bodies.rectangle(this.x,this.y,this.width,this.height,options)
    this.image = loadImage('Plucking mangoes/tree.png')
}
    display(){
        
        
        image(this.image,this.x,this.y,this.width,this.height)
    }
} 
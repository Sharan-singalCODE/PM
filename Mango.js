class Mango{
    constructor(x,y){
        var options ={
            isStatic: true,
            restitution:0,
            friction:1,
        }
    this.x=x
    this.y=y
    this.r=50
    this.image=loadImage('Plucking mangoes/mango.png')
    this.body= Bodies.circle(this.x,this.y,this.r,options)

    }
    display() {
        image(this.image,this.x,this.y,this.r,this.r)
    }
}
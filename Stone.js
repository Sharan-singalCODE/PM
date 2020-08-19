class Stone{
    constructor(x,y){
        var options ={
            isStatic:false,
            restitution:0,
            friction:1,
            density:1.2
        }
        this.x=x
        this.y=y
        this.height=50
        this.width=50
        this.body=Bodies.rectangle(this.x,this.y,this.width,this.height,options)
        this.image=loadImage('Plucking mangoes/stone.png')
           
    }
    display() {

        image(this.image,this.x,this.y,this.width,this.height)

    }
}
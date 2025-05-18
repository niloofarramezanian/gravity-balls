let canvas = document.querySelector("canvas")
canvas.width = window.innerWidth
canvas.height = window.innerHeight

let c = canvas.getContext("2d")

this.screen = {
    width : innerWidth ,
    height : innerHeight
}

this.mouse = {
    x : screen.width/2 ,
    y : screen.height/2
}

class Ball{
    constructor(x, y, dx, dy, r, color ){
        this.gravity = 1
        this.friction = 0.7
        this.r = r || 20
        this.x = x || randomNumber( 0+this.r, window.innerWidth-this.r)
        this.y = y || randomNumber( 0+this.r, window.innerHeight-this.r)
        this.dx = dx || (Math.random() - 0.5) * 5
        this.dy = dy || Math.random()  * 5
        this.color = "black"
        this.draw()

    }
    draw(){
        c.beginPath()
        c.arc(this.x, this.y,this.r, 0, 2* Math.PI)
        c.fillStyle = this.color
        c.fill()
    }
    update(){
        this.y += this.dy
        if(this.y + this.r + this.dy > screen.height){
            this.dy = -this.dy*this.friction

        }
        else{
            this.dy += this.gravity

        }
        this.draw()
     
    }
}
class Canvas{
    constructor(){
        this.balls = []
        for(let i =0 ; i<50 ; i++)
        {
            this.balls.push(new Ball())
        }
    }
    animate(){
        c.clearRect(0,0,window.innerWidth,window.innerHeight)
        this.balls.forEach(ball=>{
            ball.update()
        })
        requestAnimationFrame(this.animate.bind(this))
    }
}
let mycan = new Canvas();
mycan.animate();

window.addEventListener("mousemove",function(e){
mouse.x = e.clientX
mouse.y = e.clientY
})

function randomNumber(min,max){
    return Math.floor(Math.random() * (max - min +1) + min)
}
const canvas = document.getElementById("cnv");
const context = canvas.getContext("2d");
canvas.height = window.innerHeight;
canvas.width = window.innerWidth;
const colors = ["red", "teal", "green", "orange", "purple", "white", "skyblue", "lavender", "grey", "blueviolet", "brown", "gold"];

class Ball{
    constructor(xPos, yPos, xSpeed, ySpeed, radius, color){
        this.xPos = xPos;
        this.yPos = yPos;
        this.xSpeed = xSpeed;
        this.ySpeed = ySpeed;
        this.radius = radius;
        this.color = color;
    }
        draw() {
            context.fillStyle = `${this.color}`;
            context.beginPath();
            context.arc(this.xPos, this.yPos, this.radius, 0 , Math.PI * 2);
            context.fill();
        }
        move(){
            if (this.xPos + this.radius > innerWidth || this.xPos - this.radius < 0){
                this.xSpeed = -this.xSpeed;
            }
            if (this.yPos + this.radius > innerHeight || this.yPos - this.radius < 0){
                this.ySpeed = -this.ySpeed;
            }
            this.xPos += this.xSpeed;
            this.yPos += this.ySpeed;
            this.draw();
        }
}
var ballAmount = Number(window.prompt("Number of balls to juggle??"));
var balls = [];

for (let i = 0; i < ballAmount; i++){
    var ball = new Ball(Math.random() * innerWidth, Math.random() * innerHeight, 4, 4, 40, colors[Math.ceil(Math.random() * colors.length)]);
    balls.push(ball);
}

function animate(){
    requestAnimationFrame(animate);
    context.clearRect(0, 0, innerWidth, innerHeight);
    for (let i = 0;  i < balls.length; i++) {
        balls[i].move();
    }
}

animate();
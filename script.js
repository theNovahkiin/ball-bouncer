const canvas = document.getElementById("cnv");
const context = canvas.getContext("2d");
canvas.height = window.innerHeight;
canvas.width = window.innerWidth;

let xPos = Math.random() * window.innerWidth;
let yPos = Math.random() * window.innerHeight;
let xSpeed = 5;
let ySpeed = 5;
let radius = 30;

function ball(){
    context.clearRect(0, 0, canvas.width, canvas.height);
    requestAnimationFrame(ball);
    context.fillStyle = 'teal';
    context.beginPath();
    context.arc(xPos, yPos, radius, 0, Math.PI * 2);
    context.fill();
    xPos += xSpeed;
    yPos += ySpeed;
    if (xPos + radius > window.innerWidth || xPos - radius < 0){
        xSpeed = -xSpeed;
    }
    if (yPos + radius > window.innerHeight || yPos - radius < 0){
        ySpeed = -ySpeed;
    }
}
ball();

const canvas = document.getElementById("canvas1");
const ctx = canvas.getContext("2d");
// console.log(ctx)

const CANVAS_WIDTH = canvas.width = 400;
const CANVAS_HEIGTH = canvas.heigth = 120;

const playerImage = new Image();
playerImage.src = "shadow_dog.png";
const spriteWidth = 573;
const spriteHeigth = 523;
let frameX = 0;
let frameY = 0;


function animate() {
    ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGTH)
    // ctx.fillRect(x, 50, 100, 100)
    // ctx.drawImage(image, sx, sy, sw, sh, dx, dy, dw, dh)
    ctx.drawImage(playerImage, frameX * spriteWidth, frameY * spriteHeigth, spriteWidth, spriteHeigth, 0, 0, CANVAS_WIDTH, CANVAS_HEIGTH)
    requestAnimationFrame(animate)
};

animate();
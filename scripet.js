let playerState = "idle"
const dropdwon = document.getElementById("animation");
dropdwon.addEventListener("change", function (e) {
    playerState = e.target.value;
})

const canvas = document.getElementById("canvas1");
const ctx = canvas.getContext("2d");
// console.log(ctx)

const CANVAS_WIDTH = canvas.width = 400;
const CANVAS_HEIGTH = canvas.heigth = 120;

const playerImage = new Image();
playerImage.src = "shadow_dog.png";
const spriteWidth = 573;
const spriteHeigth = 523;


let gameFrame = 0;
const staggerFrames = 5;
const spriteAnimations = [];
const animationStates = [
    {
        name: "idle",
        frames: 1,
    },
    {
        name: "jump",
        frames: 7,
    },
    {
        name: "fail",
        frames: 7,
    },
    {
        name: "run",
        frames: 9,
    },
    {
        name: "dizzy",
        frames: 11,
    },
    {
        name: "sit",
        frames: 5,
    },
    {
        name: "roll",
        frames: 7,
    },
    {
        name: "bite",
        frames: 7,
    },
    {
        name: "ko",
        frames: 12,
    },
    {
        name: "getHit",
        frames: 4,
    },


]

animationStates.forEach((state, index,) => {
    let frames = {
        loc: [],
    };
    for (let j = 0; j < state.frames; j++) {
        let positionX = j * spriteWidth;
        let positionY = index * spriteHeigth;
        frames.loc.push({ x: positionX, y: positionY })
    };
    spriteAnimations[state.name] = frames;

})
// console.log(spriteAnimations)
function animate() {
    ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGTH);
    let position = Math.floor(gameFrame / staggerFrames) % spriteAnimations[playerState].loc.length;
    let frameX = spriteHeigth * position;
    let frameY = spriteAnimations[playerState].loc[position].y

    ctx.drawImage(playerImage, frameX, frameY, spriteWidth, spriteHeigth, 0, 0, CANVAS_WIDTH, CANVAS_HEIGTH);
    gameFrame++;
    requestAnimationFrame(animate);
};

animate();
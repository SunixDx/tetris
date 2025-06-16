import {Game} from '/scripts/game.js'

const canvasTetris = document.getElementById("canvas-tetris");
const canvasNext = document.getElementById("canvas-next");
const canvasHold = document.getElementById("canvas-hold");
const score = document.getElementById("score");
const menu = document.getElementById("menu");
const btnMenu = document.getElementById("btn-start");

//audio
const music = document.getElementById("tetris-music");
const muteBtn = document.getElementById("speaker");

const rows = 20;
const cols = 10;
const cellSize = 26;
const space = 2;

const game = new Game(canvasTetris,rows,cols,cellSize,space,canvasNext,canvasHold)

function update(){
    setTimeout(() => {
        music.volume = 0.2;
        music.play();
    }, 500);
    if (game.gameOver){
        menu.style.display = "flex";
    }
    else{
        game.update()
        score.innerHTML = game.score;
    }
    requestAnimationFrame(update);
}
speaker.addEventListener('click', () => {
    music.muted = !music.muted;
    speaker.classList.toggle('mute', music.muted);
  });
btnMenu.addEventListener("click",()=>{
    setTimeout(() => {
        menu.style.display = "none";
        game.reset();
    }, 200);
    
})
update()
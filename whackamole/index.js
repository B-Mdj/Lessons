const holes = document.querySelectorAll(".hole");
const scoreBoard = document.getElementById("score");
const startBtn = document.getElementById("startBtn");
let lastHole;
let timeUp = false;
let score = 0;
let gameRunning = false;

function randomTime(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}

function randomHole(holes) {
  const idx = Math.floor(Math.random() * holes.length);
  const hole = holes[idx];
  if (hole === lastHole) {
    return randomHole(holes);
  }
  lastHole = hole;
  return hole;
}

function peep() {
  const time = randomTime(500, 1200);
  const hole = randomHole(holes);
  const mole = document.createElement("div");
  mole.classList.add("mole");
  hole.appendChild(mole);
  mole.addEventListener("click", bonk);
  setTimeout(() => {
    mole.remove();
    if (!timeUp) peep();
  }, time);
}

function startGame() {
  if (gameRunning) return;
  gameRunning = true;
  score = 0;
  scoreBoard.textContent = score;
  timeUp = false;
  startBtn.textContent = "Playing...";
  startBtn.disabled = true;
  peep();
  setTimeout(() => {
    timeUp = true;
    gameRunning = false;
    startBtn.textContent = "Play Again";
    startBtn.disabled = false;
  }, 15000);
}

function bonk() {
  score++;
  this.remove();
  scoreBoard.textContent = score;
}

startBtn.addEventListener("click", startGame);

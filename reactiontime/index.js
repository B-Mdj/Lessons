const game = document.getElementById("game");
const message = document.getElementById("message");
const timeDisplay = document.getElementById("time");
const restartBtn = document.getElementById("restartBtn");

let startTime, endTime, timeoutId;
let waitingForGreen = false;
let testRunning = false;

function startGame() {
  message.textContent = "Wait for green...";
  timeDisplay.textContent = "";
  restartBtn.style.display = "none";
  game.style.backgroundColor = "#e74c3c";
  waitingForGreen = true;
  testRunning = true;

  const delay = Math.random() * 2000 + 1000;
  timeoutId = setTimeout(() => {
    game.style.backgroundColor = "#27ae60";
    message.textContent = "CLICK!";
    startTime = Date.now();
    waitingForGreen = false;
  }, delay);
}

function stopGame() {
  if (waitingForGreen) {
    clearTimeout(timeoutId);
    message.textContent = "Too soon! Click to try again.";
    game.style.backgroundColor = "#c0392b";
    testRunning = false;
  } else if (testRunning) {
    endTime = Date.now();
    const reaction = endTime - startTime;
    message.textContent = "Your Reaction Time:";
    timeDisplay.textContent = `${reaction} ms`;
    game.style.backgroundColor = "#2980b9";
    restartBtn.style.display = "inline-block";
    testRunning = false;
  }
}

game.addEventListener("click", () => {
  if (!testRunning) {
    startGame();
  } else {
    stopGame();
  }
});

restartBtn.addEventListener("click", startGame);

const squares = document.querySelectorAll(".square");
const statusText = document.getElementById("status");
const resetBtn = document.getElementById("reset");
const scoreX = document.getElementById("scoreX");
const scoreO = document.getElementById("scoreO");

let currentPlayer = "X";
let board = ["", "", "", "", "", "", "", "", ""];
let gameActive = true;
let scores = { X: 0, O: 0 };

const winPatterns = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

function handleSquareClick(e) {
  const index = [...squares].indexOf(e.target);
  if (board[index] !== "" || !gameActive) return;
  board[index] = currentPlayer;
  e.target.textContent = currentPlayer;
  const winPattern = checkWin();
  if (winPattern) {
    highlightWin(winPattern);
    statusText.textContent = `${currentPlayer} wins! 🎉`;
    scores[currentPlayer]++;
    updateScores();
    gameActive = false;
  } else if (!board.includes("")) {
    statusText.textContent = "It's a draw!";
    gameActive = false;
  } else {
    currentPlayer = currentPlayer === "X" ? "O" : "X";
    statusText.textContent = `${currentPlayer}'s turn`;
  }
}

function checkWin() {
  for (let pattern of winPatterns) {
    const [a, b, c] = pattern;
    if (board[a] && board[a] === board[b] && board[a] === board[c]) {
      return pattern;
    }
  }
  return null;
}

function highlightWin(pattern) {
  pattern.forEach((index) => squares[index].classList.add("win"));
}

function updateScores() {
  scoreX.textContent = scores.X;
  scoreO.textContent = scores.O;
}

function resetGame() {
  board = ["", "", "", "", "", "", "", "", ""];
  squares.forEach((square) => {
    square.textContent = "";
    square.classList.remove("win");
  });
  currentPlayer = "X";
  statusText.textContent = "X's turn";
  gameActive = true;
}

squares.forEach((square) =>
  square.addEventListener("click", handleSquareClick)
);
resetBtn.addEventListener("click", resetGame);

resetGame();

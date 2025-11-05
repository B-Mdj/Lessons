(() => {
  const canvas = document.getElementById("field");
  const ctx = canvas.getContext("2d");
  const scoreEl = document.getElementById("score");
  const highEl = document.getElementById("highscore");
  const CELL = 50;
  const COLS = canvas.width / CELL;
  const ROWS = canvas.height / CELL;
  const TICK_MS = 120;

  let gameInterval = null;
  let running = false;
  let gameOverState = false;
  let direction = { x: 1, y: 0 };
  let nextDirection = { x: 1, y: 0 };
  let snake = [];
  let food = null;
  let score = 0;
  let highscore = parseInt(localStorage.getItem("snake_high") || "0", 10) || 0;
  let grayscaleLevel = 0;
  highEl.textContent = highscore;

  function resetGame() {
    const startX = Math.floor(COLS / 2);
    const startY = Math.floor(ROWS / 2);
    snake = [
      { x: startX - 1, y: startY },
      { x: startX - 2, y: startY },
      { x: startX - 3, y: startY },
      { x: startX - 4, y: startY },
    ];
    direction = { x: 1, y: 0 };
    nextDirection = { x: 1, y: 0 };
    score = 0;
    scoreEl.textContent = score;
    grayscaleLevel = 0;
    placeFood();
    draw();
    running = false;
    gameOverState = false;
    if (gameInterval) {
      clearInterval(gameInterval);
      gameInterval = null;
    }
  }

  function placeFood() {
    const occupied = new Set(snake.map((s) => s.x + "," + s.y));
    let fx,
      fy,
      tries = 0;
    do {
      fx = Math.floor(Math.random() * COLS);
      fy = Math.floor(Math.random() * ROWS);
      tries++;
      if (tries > 10000) break;
    } while (occupied.has(fx + "," + fy));
    food = { x: fx, y: fy };
  }

  function drawGridBackground() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    const darkGreen = "#aad751";
    const lightGreen = "#a2d149";
    for (let x = 0; x < COLS; x++) {
      for (let y = 0; y < ROWS; y++) {
        ctx.fillStyle = (x + y) % 2 === 0 ? lightGreen : darkGreen;
        ctx.fillRect(x * CELL, y * CELL, CELL, CELL);
      }
    }
  }

  function draw() {
    drawGridBackground();
    const filterValue = Math.round(grayscaleLevel * 100);
    ctx.filter = `grayscale(${filterValue}%)`;
    if (snake.length > 0) {
      ctx.save();
      ctx.lineJoin = "round";
      ctx.lineCap = "round";
      ctx.shadowColor = "rgba(0,0,0,0.2)";
      ctx.shadowBlur = 6;
      ctx.lineWidth = CELL - 4;
      ctx.strokeStyle = gameOverState ? "#666" : "#4572e7";
      ctx.beginPath();
      ctx.moveTo(snake[0].x * CELL + CELL / 2, snake[0].y * CELL + CELL / 2);
      for (let i = 1; i < snake.length; i++) {
        ctx.lineTo(snake[i].x * CELL + CELL / 2, snake[i].y * CELL + CELL / 2);
      }
      ctx.stroke();
      ctx.restore();

      const head = snake[0];
      const hx = head.x * CELL + CELL / 2;
      const hy = head.y * CELL + CELL / 2;
      const eyeOffset = CELL / 4;
      const eyeRadius = 2;
      let dx = direction.x;
      let dy = direction.y;
      let leftEyeX, leftEyeY, rightEyeX, rightEyeY;
      if (dx === 1) {
        leftEyeX = hx + CELL / 4;
        rightEyeX = hx + CELL / 4;
        leftEyeY = hy - eyeOffset;
        rightEyeY = hy + eyeOffset;
      } else if (dx === -1) {
        leftEyeX = hx - CELL / 4;
        rightEyeX = hx - CELL / 4;
        leftEyeY = hy - eyeOffset;
        rightEyeY = hy + eyeOffset;
      } else if (dy === 1) {
        leftEyeY = hy + CELL / 4;
        rightEyeY = hy + CELL / 4;
        leftEyeX = hx - eyeOffset;
        rightEyeX = hx + eyeOffset;
      } else if (dy === -1) {
        leftEyeY = hy - CELL / 4;
        rightEyeY = hy - CELL / 4;
        leftEyeX = hx - eyeOffset;
        rightEyeX = hx + eyeOffset;
      }
      ctx.fillStyle = "#fff";
      ctx.beginPath();
      ctx.arc(leftEyeX, leftEyeY, eyeRadius, 0, 2 * Math.PI);
      ctx.arc(rightEyeX, rightEyeY, eyeRadius, 0, 2 * Math.PI);
      ctx.fill();
    }

    if (food) {
      ctx.fillStyle = gameOverState ? "#888" : "#d62828";
      ctx.beginPath();
      ctx.arc(
        food.x * CELL + CELL / 2,
        food.y * CELL + CELL / 2,
        CELL / 2 - 2,
        0,
        2 * Math.PI
      );
      ctx.fill();
    }
    ctx.filter = "none";
  }

  function step() {
    if (!running) return;
    if (nextDirection.x !== -direction.x || nextDirection.y !== -direction.y) {
      direction = nextDirection;
    }
    const head = {
      x: snake[0].x + direction.x,
      y: snake[0].y + direction.y,
    };
    if (head.x < 0 || head.x >= COLS || head.y < 0 || head.y >= ROWS) {
      gameOver();
      return;
    }
    for (let i = 0; i < snake.length; i++) {
      if (snake[i].x === head.x && snake[i].y === head.y) {
        gameOver();
        return;
      }
    }
    snake.unshift(head);
    if (food && head.x === food.x && head.y === food.y) {
      score += 1;
      scoreEl.textContent = score;
      placeFood();
    } else {
      snake.pop();
    }
    if (snake.length === COLS * ROWS) {
      winGame();
      return;
    }
    draw();
  }

  function gameOver() {
    if (gameInterval) {
      clearInterval(gameInterval);
      gameInterval = null;
    }
    running = false;
    gameOverState = true;
    const fadeDuration = 600;
    const start = performance.now();
    function animateFade(timestamp) {
      const elapsed = timestamp - start;
      grayscaleLevel = Math.min(1, elapsed / fadeDuration);
      draw();
      if (grayscaleLevel < 1) {
        requestAnimationFrame(animateFade);
      }
    }
    requestAnimationFrame(animateFade);
    if (score > highscore) {
      highscore = score;
      localStorage.setItem("snake_high", String(highscore));
      highEl.textContent = highscore;
    }
  }

  function winGame() {
    if (gameInterval) {
      clearInterval(gameInterval);
      gameInterval = null;
    }
    running = false;
    gameOverState = true;

    let hue = 0;
    function animateWin() {
      drawGridBackground();
      ctx.save();
      ctx.globalAlpha = 0.5;
      ctx.fillStyle = `hsl(${hue}, 100%, 60%)`;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.restore();
      draw();
      hue = (hue + 10) % 360;
      if (!running && gameOverState) {
        requestAnimationFrame(animateWin);
      }
    }
    requestAnimationFrame(animateWin);
    if (score > highscore) {
      highscore = score;
      localStorage.setItem("snake_high", String(highscore));
      highEl.textContent = highscore;
    }
    setTimeout(() => {
      alert("🎉 YOU WIIIIN");
    }, 500);
  }

  function startGame() {
    if (running) return;
    running = true;
    if (!snake || snake.length === 0) {
      resetGame();
    }
    if (gameInterval) {
      clearInterval(gameInterval);
    }
    gameInterval = setInterval(step, TICK_MS);
  }

  window.addEventListener("keydown", (e) => {
    const k = e.key.toLowerCase();
    let dir = null;
    if (k === "arrowup" || k === "w") dir = { x: 0, y: -1 };
    if (k === "arrowdown" || k === "s") dir = { x: 0, y: 1 };
    if (k === "arrowleft" || k === "a") dir = { x: -1, y: 0 };
    if (k === "arrowright" || k === "d") dir = { x: 1, y: 0 };
    if (dir) {
      if (gameOverState) {
        resetGame();
        nextDirection = dir;
        startGame();
      } else {
        if (!running) {
          nextDirection = dir;
          startGame();
        } else {
          if (!(dir.x === -direction.x && dir.y === -direction.y)) {
            nextDirection = dir;
          }
        }
      }
      e.preventDefault();
    }
  });
  resetGame();
})();

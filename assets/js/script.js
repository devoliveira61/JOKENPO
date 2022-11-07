/* Score Gaming */
const scorePlayer = document.getElementById("youScore");
const scoreCpu = document.getElementById("cpuScore");
const winsRound = document.getElementById("winsRound");
let playerScore = 0;

/* Options Player */
const playerRock = document.getElementById("playerRock");
const playerPaper = document.getElementById("playerPaper");
const playerScissors = document.getElementById("playerScissors");

/* Options CPU */
const cpuRock = document.getElementById("cpuRock");
const cpuPaper = document.getElementById("cpuPaper");
const cpuScissors = document.getElementById("cpuScissors");

const game = () => {
  playerRock.addEventListener("click", () => {
    playerRock.classList.add("active");
    playerPaper.classList.remove("active");
    playerScissors.classList.remove("active");
    cpuOptions();
  });
  playerPaper.addEventListener("click", () => {
    playerRock.classList.remove("active");
    playerPaper.classList.add("active");
    playerScissors.classList.remove("active");
    cpuOptions();
  });
  playerScissors.addEventListener("click", () => {
    playerRock.classList.remove("active");
    playerPaper.classList.remove("active");
    playerScissors.classList.add("active");
    cpuOptions();
  });
};

/* Opções da CPU */
const cpuOptions = () => {
  const options = ["rock", "paper", "scissors"];
  const cpuOption = options[Math.floor(Math.random() * options.length)]; 
  const cpuNumber = Math.floor(Math.random() * (3 - 1 + 1)) + 1;
  const cpuChoice = options[cpuNumber];
  switch (cpuChoice) {
    case "rock":
      cpuRock.classList.add("active");
      cpuPaper.classList.remove("active");
      cpuScissors.classList.remove("active");
      break;
    case "paper":
      cpuRock.classList.remove("active");
      cpuPaper.classList.add("active");
      cpuScissors.classList.remove("active");
      break;
    case "scissors":
      cpuRock.classList.remove("active");
      cpuPaper.classList.remove("active");
      cpuScissors.classList.add("active");
      break;
  }
  checkWinner();
};

const checkWinner = () => {
  if (
    playerRock.classList.contains("active") &&
    cpuRock.classList.contains("active")
  ) {
    winsRound.innerHTML = "Game Tied";
  } else if (
    playerRock.classList.contains("active") &&
    cpuPaper.classList.contains("active")
  ) {
    winsRound.innerHTML = "CPU Wins!";
    playerScore--;
    scoreCpu.innerHTML = `CPU Score!: ${playerScore}`;
  } else if (
    playerRock.classList.contains("active") &&
    cpuScissors.classList.contains("active")
  ) {
    winsRound.innerHTML = "You Wins!";
    playerScore++;
    scorePlayer.innerHTML = `Your Score: ${playerScore}`;
  } else if (
    playerPaper.classList.contains("active") &&
    cpuRock.classList.contains("active")
  ) {
    winsRound.innerHTML = "You Wins!";
    playerScore++;
    scorePlayer.innerHTML = `Your Score: ${playerScore}`;
  } else if (
    playerPaper.classList.contains("active") &&
    cpuPaper.classList.contains("active")
  ) {
    winsRound.innerHTML = "Game Tied";
  } else if (
    playerPaper.classList.contains("active") &&
    cpuScissors.classList.contains("active")
  ) {
    winsRound.innerHTML = "CPU Wins!";
    playerScore--;
    scoreCpu.innerHTML = `CPU Score: ${playerScore}`;
  } else if (
    playerScissors.classList.contains("active") &&
    cpuRock.classList.contains("active")
  ) {
    winsRound.innerHTML = "CPU Wins!";
    playerScore--;
    scoreCpu.innerHTML = `CPU Score: ${playerScore}`;
  } else if (
    playerScissors.classList.contains("active") &&
    cpuPaper.classList.contains("active")
  ) {
    winsRound.innerHTML = "You Wins!";
    playerScore++;
    scorePlayer.innerHTML = `Your Score: ${playerScore}`;
  } else if (
    playerScissors.classList.contains("active") &&
    cpuScissors.classList.contains("active")
  ) {
    winsRound.innerHTML = "Game Tied";
  }
};

game();

/* Theme */
const latterTheme = document.getElementById("latterTheme");
const proxTheme = document.getElementById("nextTheme");
const containerScreen = document.getElementById("screen");

/* Theme */
proxTheme.addEventListener("click", () => {
  containerScreen.style.backgroundImage = "url(assets/img/background-1.png)";
  proxTheme.style.cursor = "not-allowed";
  latterTheme.style.cursor = "pointer";
});

/* Theme */
latterTheme.addEventListener("click", () => {
  containerScreen.style.backgroundImage = "url(assets/img/background-2.png)";
  latterTheme.style.cursor = "not-allowed";
  proxTheme.style.cursor = "pointer";
});

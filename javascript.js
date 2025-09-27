//computer choice

function computer() {
  const options = ["rock", "paper", "scissors"];
  const randomIndex = Math.floor(Math.random() * 3);
  return options[randomIndex];
}

//attach buttons

const rockbtn = document.getElementById("rock");
const paperbtn = document.getElementById("paper");
const scissorsbtn = document.getElementById("scissors");

const humanScore = document.getElementById("humanScore");
const computerScore = document.getElementById("computerScore");
const title = document.getElementById("title");
const instructions = document.getElementById("instructions");

rockbtn.addEventListener("click", () => {
  humanChoice = "rock";
  const computerChoice = computer();

  title.textContent =
    "User plays " + humanChoice + " - Computer plays " + computerChoice;

  if (computerChoice === "rock") {
    instructions.textContent = "Rock ties with rock";
  } else if (computerChoice === "paper") {
    computerScore.textContent++;
    instructions.textContent = "Rock loses to paper";
  } else if (computerChoice === "scissors") {
    humanScore.textContent++;
    instructions.textContent = "Rock beats paper";
  }

  if (humanScore.textContent > 4 || computerScore.textContent > 4) {
    disableButton();
  }
});

paperbtn.addEventListener("click", () => {
  humanChoice = "paper";
  const computerChoice = computer();
  title.textContent =
    "User plays " + humanChoice + " - Computer plays " + computerChoice;

  if (computerChoice === "rock") {
    humanScore.textContent++;
    instructions.textContent = "Paper beats rock";
  } else if (computerChoice === "paper") {
    instructions.textContent = "Paper ties with paper";
  } else if (computerChoice === "scissors") {
    computerScore.textContent++;
    instructions.textContent = "Paper loses to scissors";
  }

  if (humanScore.textContent > 4 || computerScore.textContent > 4) {
    disableButton();
  }
});

scissorsbtn.addEventListener("click", () => {
  humanChoice = "scissors";
  const computerChoice = computer();

  title.textContent =
    "User plays " + humanChoice + " - Computer plays " + computerChoice;

  if (computerChoice === "rock") {
    computerScore.textContent++;
    instructions.textContent = "Scissors loses to rock";
  } else if (computerChoice === "paper") {
    humanScore.textContent++;
    instructions.textContent = "Scissors beats paper";
  } else if (computerChoice === "scissors") {
    instructions.textContent = "Scissors ties with scissors";
  }

  if (humanScore.textContent > 4 || computerScore.textContent > 4) {
    disableButton();
  }
});

function disableButton() {
  rockbtn.classList.add("disabled-img");
  paperbtn.classList.add("disabled-img");
  scissorsbtn.classList.add("disabled-img");

  if (humanScore.textContent > computerScore.textContent) {
    document.getElementById("game-over").textContent = "You win!";
    update();
  } else {
    document.getElementById("game-over").textContent = "You lose!";
    update();
  }
}

function update() {
  document.getElementById("instructions").textContent =
    "To play again press here.";
  instructions.style.cursor = "pointer";
}

instructions.addEventListener("click", () => {
  restartGame();
  document.getElementById("game-over").textContent = "";
  document.getElementById("instructions").textContent =
    "Press the button to choose your hand, first to 5 points wins.";
});

function restartGame() {
  humanScore.textContent = 0;
  computerScore.textContent = 0;
  rockbtn.classList.remove("disabled-img");
  paperbtn.classList.remove("disabled-img");
  scissorsbtn.classList.remove("disabled-img");
  instructions.style.cursor = "auto";
  title.textContent = "JavaScript Rock Paper Scissors";
}

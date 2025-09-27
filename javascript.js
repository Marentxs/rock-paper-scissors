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

rockbtn.addEventListener("click", () => {
  humanChoice = "rock";
  console.log("User plays " + humanChoice);

  const computerChoice = computer();
  console.log("Computer plays " + computerChoice);

  if (computerChoice === "rock") {
    console.log("It's a tie");
  } else if (computerChoice === "paper") {
    computerScore.textContent++;
    console.log("You lose");
  } else if (computerChoice === "scissors") {
    humanScore.textContent++;
    console.log("You win!");
  }

  if (humanScore.textContent > 4 || computerScore.textContent > 4) {
    disableButton();
  }
});

paperbtn.addEventListener("click", () => {
  humanChoice = "paper";
  console.log("User plays " + humanChoice);

  const computerChoice = computer();
  console.log("Computer plays " + computerChoice);

  if (computerChoice === "rock") {
    humanScore.textContent++;
    console.log("You win!");
  } else if (computerChoice === "paper") {
    console.log("It's a tie");
  } else if (computerChoice === "scissors") {
    computerScore.textContent++;
    console.log("You lose");
  }

  if (humanScore.textContent > 4 || computerScore.textContent > 4) {
    disableButton();
  }
});

scissorsbtn.addEventListener("click", () => {
  humanChoice = "scissors";
  console.log("User plays " + humanChoice);

  const computerChoice = computer();
  console.log("Computer plays " + computerChoice);

  if (computerChoice === "rock") {
    computerScore.textContent++;
    console.log("You lose");
  } else if (computerChoice === "paper") {
    humanScore.textContent++;
    console.log("You win!");
  } else if (computerChoice === "scissors") {
    console.log("It's a tie");
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
  } else {
    document.getElementById("game-over").textContent = "You lose!";
  }
}

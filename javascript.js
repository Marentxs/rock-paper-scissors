function getComputerChoice() {
  //Assign each option with a random number between 0-1 with decimals//
  let random1 = Math.random();
  let random2 = Math.random();
  let random3 = Math.random();

  //Check which one is the biggest number//
  let computer;
  if (random1 > random2 && random1 > random3) {
    computer = "Computer plays rock";
  } else if (random2 > random3 && random2 > random1) {
    computer = "Computer plays paper";
  } else {
    computer = "Computer plays scissors";
  }

  return computer;
}

function playRound(humanChoice, computerChoice) {
  if (
    humanChoice === "User plays rock" &&
    computerChoice === "Computer plays scissors"
  ) {
    return "You win! rock wins against scissors";
  } else if (
    humanChoice === "User plays rock" &&
    computerChoice === "Computer plays paper"
  ) {
    return "The computer wins, rock loses against paper";
  } else if (
    humanChoice === "User plays paper" &&
    computerChoice === "Computer plays rock"
  ) {
    return "You win! paper wins against rock";
  } else if (
    humanChoice === "User plays paper" &&
    computerChoice === "Computer plays scissors"
  ) {
    return "The computer wins, paper loses against scissors";
  } else if (
    humanChoice === "User plays scissors" &&
    computerChoice === "Computer plays paper"
  ) {
    return "You win! scissors wins against paper";
  } else if (
    humanChoice === "User plays scissors" &&
    computerChoice === "Computer plays rock"
  ) {
    return "The computer wins, scissors loses against rock";
  } else {
    return "It's a tie!";
  }
}

let choice = "";
function getHumanChoice() {
  return `User plays ${choice}`;
}

//Event listeners, trigger everything

const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");

rock.addEventListener("click", (event) => {
  choice = "rock";
  const human = getHumanChoice();
  const comp = getComputerChoice();
  console.log(human, comp);
  playRound(human, comp);
});

paper.addEventListener("click", (event) => {
  choice = "paper";
  const human = getHumanChoice();
  const comp = getComputerChoice();
  console.log(human, comp);
  playRound(human, comp);
});

scissors.addEventListener("click", (event) => {
  choice = "scissors";
  const human = getHumanChoice();
  const comp = getComputerChoice();
  console.log(human, comp);
  playRound(human, comp);
});

function playGame() {
  let humanScore = 0;
  let computerScore = 0;

  //Makes 1 round get played//

  let result = playRound(getHumanChoice(), getComputerChoice());

  console.log(result);
  if (result.includes("You win")) {
    humanScore += 100;
  } else if (result.includes("The computer wins")) {
    computerScore += 100;
  }
  console.log(`Score: Human ${humanScore} - Computer ${computerScore}`);

  //GameOver message//

  function endMessage() {
    if (humanScore > computerScore) {
      console.log("You win, congratulations!");
    } else if (humanScore < computerScore) {
      console.log("You lose, better luck next time!");
    } else {
      console.log("It is an unlikely tie!");
    }
  }
  endMessage();
}

playGame();

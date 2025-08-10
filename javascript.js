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

  //Print in the console the winner of the random choice//
  console.log(computer);
  return computer;
}

function getHumanChoice() {
  //Asks hand to user//
  let choice = prompt("What hand will you play");

  //Converts answer to lowerCase, to avoid issues with uppercase letters//
  choice = choice.toLowerCase();

  if (choice === "rock") {
    user = "User plays rock";
  } else if (choice === "paper") {
    user = "User plays paper";
  } else {
    user = "User plays scissors";
  }

  //Prints selection in the console//
  console.log(user);
  return user;
}

//Logic to play 1 round//

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

//Logic to play full game (5 rounds round)//

function playGame() {
  let humanScore = 0;
  let computerScore = 0;

  //Makes 1 round get played//

  let result = playRound(getHumanChoice(), getComputerChoice());

  if (result.includes("You win")) {
    humanScore += 100;
  } else if (result.includes("The computer wins")) {
    computerScore += 100;
  }
  console.log(`Score: Human ${humanScore} - Computer ${computerScore}`);

  result = playRound(getHumanChoice(), getComputerChoice());
  console.log(result);
  if (result.includes("You win")) {
    humanScore += 100;
  } else if (result.includes("The computer wins")) {
    computerScore += 100;
  }
  console.log(`Score: Human ${humanScore} - Computer ${computerScore}`);

  result = playRound(getHumanChoice(), getComputerChoice());
  console.log(result);
  if (result.includes("You win")) {
    humanScore += 100;
  } else if (result.includes("The computer wins")) {
    computerScore += 100;
  }
  console.log(`Score: Human ${humanScore} - Computer ${computerScore}`);

  result = playRound(getHumanChoice(), getComputerChoice());
  console.log(result);
  if (result.includes("You win")) {
    humanScore += 100;
  } else if (result.includes("The computer wins")) {
    computerScore += 100;
  }
  console.log(`Score: Human ${humanScore} - Computer ${computerScore}`);

  result = playRound(getHumanChoice(), getComputerChoice());
  console.log(result);
  if (result.includes("You win")) {
    humanScore += 100;
  } else if (result.includes("The computer wins")) {
    computerScore += 100;
  }
  console.log(`Score: Human ${humanScore} - Computer ${computerScore}`);

  function endMessage() {
    if (humanScore > computerScore) {
      console.log("You win, congratulations!");
    } else {
      console.log("You lose, better luck next time");
    }
  }
  endMessage();
}

playGame();

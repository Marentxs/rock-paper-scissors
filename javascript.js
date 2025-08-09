console.log("JavaScript file linked successfully!");

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
}

//Call function so that it runs//
getComputerChoice();

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

  //Saves answer in the console//
  console.log(user);
}

//Call function so that it runs//
getHumanChoice();

"use strict";

let humanScore = 0;
let computerScore = 0;

let GetComputerChoice = function () {
  let choice = Math.floor(Math.random() * 3);

  switch (choice) {
    case 0:
      return "rock";
      break;

    case 1:
      return "paper";
      break;

    case 2:
      return "scissors";
      break;
  }
};

let getHumanChoice = function () {
  const humanChoice = prompt(
    "Choose one between rock, paper or scissors: ",
  ).toLowerCase();
  return humanChoice;
};

let computerChoice = GetComputerChoice();
let humanChoice = getHumanChoice();

function playRound(humanChoice, computerChoice) {
  if (humanChoice === computerChoice) {
    console.log("It's tie");
    console.log(
      `you chose ${humanChoice} and computer chose ${computerChoice}.`,
    );
  } else if (humanChoice === "paper" && computerChoice === "rock") {
    console.log("you won! Paper beats Rock.");
    console.log(
      `you chose ${humanChoice} and computer chose ${computerChoice}.`,
    );
    humanScore++;
  } else if (humanChoice === "rock" && computerChoice === "paper") {
    console.log("you lose! Paper beats Rock.");
    console.log(
      `you chose ${humanChoice} and computer chose ${computerChoice}.`,
    );
    computerScore++;
  } else if (humanChoice === "paper" && computerChoice === "scissors") {
    console.log("you lose! Scissors beats Paper.");
    console.log(
      `you chose ${humanChoice} and computer chose ${computerChoice}.`,
    );
    computerScore++;
  } else if (humanChoice === "scissors" && computerChoice === "paper") {
    console.log("you won! Scissors beats Paper.");
    console.log(
      `you chose ${humanChoice} and computer chose ${computerChoice}.`,
    );
    humanScore++;
  } else if (humanChoice === "rock" && computerChoice === "scissors") {
    console.log("you won! Rock beats Scissors.");
    console.log(
      `you chose ${humanChoice} and computer chose ${computerChoice}.`,
    );
    humanScore++;
  } else if (humanChoice === "scissors" && computerChoice === "rock") {
    console.log("you lose! Rock bears Scissors.");
    console.log(
      `you chose ${humanChoice} and computer chose ${computerChoice}.`,
    );
    computerScore++;
  } else if (humanChoice === "rock" && computerChoice === "paper") {
    console.log("you lose! Paper beats Rock.");
    console.log(
      `you chose ${humanChoice} and computer chose ${computerChoice}.`,
    );
    computerScore++;
  } else if (humanChoice === "paper" && computerChoice === "rock") {
    console.log("you won! Paper beats Rock.");
    console.log(
      `you chose ${humanChoice} and computer chose ${computerChoice}.`,
    );
    humanScore++;
  } else if (humanChoice === "scissors" && computerChoice === "paper") {
    console.log("you won! Scissors beats Paper.");
    console.log(
      `you chose ${humanChoice} and computer chose ${computerChoice}.`,
    );
    humanScore++;
  } else if (humanChoice === "paper" && computerChoice === "scissors") {
    console.log("you lose! Scissors beat Paper.");
    console.log(
      `you chose ${humanChoice} and computer chose ${computerChoice}.`,
    );
    computerScore++;
  } else if (humanChoice === "scissors" && computerChoice === "rock") {
    console.log("you lose! Rock beats Scissors");
    console.log(
      `you chose ${humanChoice} and computer chose ${computerChoice}.`,
    );
    computerScore++;
  } else if (humanChoice === "rock" && computerChoice === "scissors") {
    console.log("you won! Rock beats Scissors.");
    console.log(
      `you chose ${humanChoice} and computer chose ${computerChoice}.`,
    );
    humanScore++;
  }
}

function playGame() {
  playRound(humanChoice, computerChoice);
  computerChoice = GetComputerChoice();
  humanChoice = getHumanChoice();
}

for (let i = 1; i <= 5; i++) {
  console.log(`----- ROUND ${i} -----`);
  playGame();
}

function winnerScore() {
  console.log("---- IT'S RESULT TIME -----");
  if (humanScore === computerScore) {
    console.log(
      `It's Tie: your score is ${humanScore} and computer score is ${computerScore}.`,
    );
  } else if (humanScore > computerScore) {
    console.log(
      `You won!: your score is ${humanScore} and computer score is ${computerScore}.`,
    );
  } else if (humanScore < computerScore) {
    console.log(
      `YOU Lose!: your score is ${humanScore} and computer score is ${computerScore}.`,
    );
  }
}

winnerScore();

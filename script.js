"use strict";

let humanScore = 0;
let computerScore = 0;

function GetComputerChoice() {
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
}

const computerChoice = GetComputerChoice();
console.log(computerChoice);

function getHumanChoice() {
  const humanChoice = prompt(
    "Choose one between rock, paper or scissors: ",
  ).toLowerCase();
  return humanChoice;
}

const humanChoice = getHumanChoice();
// console.log(humanChoice);

function playRound(humanChoice, computerChoice) {
  if (humanChoice === computerChoice) {
    console.log("It's tie");
  } else if (humanChoice === "paper" && computerChoice === "rock") {
    console.log("you won! Paper beats Rock.");
    humanScore++;
  } else if (humanChoice === "rock" && computerChoice === "paper") {
    console.log("you lose! Paper beats Rock.");
    computerScore++;
  } else if (humanChoice === "paper" && computerChoice === "scissors") {
    console.log("you lose! Scissors beats Paper.");
    computerScore++;
  } else if (humanChoice === "scissors" && computerChoice === "paper") {
    console.log("you won! Scissors beats Paper.");
    humanScore++;
  } else if (humanChoice === "rock" && computerChoice === "scissors") {
    console.log("you won! Rock beats Scissors.");
    humanScore++;
  } else if (humanChoice === "scissors" && computerChoice === "rock") {
    console.log("you lose! Rock bears Scissors.");
    computerScore++;
  } else if (humanChoice === "rock" && computerChoice === "paper") {
    console.log("you lose! Paper beats Rock.");
    computerScore++;
  } else if (humanChoice === "paper" && computerChoice === "rock") {
    console.log("you won! Paper beats Rock.");
    humanScore++;
  } else if (humanChoice === "scissors" && computerChoice === "paper") {
    console.log("you won! Scissors beats Paper.");
    humanScore++;
  } else if (humanChoice === "paper" && computerChoice === "scissors") {
    console.log("you lose! Scissors beat Paper.");
    computerScore++;
  } else if (humanChoice === "scissors" && computerChoice === "rock") {
    console.log("you lose! Rock beats Scissors");
    computerScore++;
  } else if (humanChoice === "rock" && computerChoice === "scissors") {
    console.log("you won! Rock beats Scissors.");
    humanScore++;
  }
}

playRound(humanChoice, computerChoice);

console.log(humanScore, computerScore);

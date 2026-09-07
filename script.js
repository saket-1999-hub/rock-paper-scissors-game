"use strict";

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

    default:
      console.log("Inavalid choice");
  }
}

const computerChoice = GetComputerChoice();
console.log(computerChoice);

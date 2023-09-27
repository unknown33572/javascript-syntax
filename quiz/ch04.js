function getRandomInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function rpsGame(userChoice) {
  const choices = ["rock", "paper", "scissors"];
  const computerChoice = choices[getRandomInteger(0, 2)];

  if(userChoice == computerChoice) {
    return {
      userChoice: userChoice,
      computerChoice: computerChoice,
      result: "draw"
    };
  } else if(userChoice == "scissors") {
    if(computerChoice == "paper") {
      return {
        userChoice: userChoice,
        computerChoice: computerChoice,
        result: "win"
      };
    } else {
      return {
        userChoice: userChoice,
        computerChoice: computerChoice,
        result: "lose"
      };
    }
  } else if(userChoice == "rock") {
    if(computerChoice == "scissors") {
      return {
        userChoice: userChoice,
        computerChoice: computerChoice,
        result: "win"
      };
    } else {
      return {
        userChoice: userChoice,
        computerChoice: computerChoice,
        result: "lose"
      };
    }
  } else if(userChoice == "paper") {
    if(computerChoice == "rock") {
      return {
        userChoice: userChoice,
        computerChoice: computerChoice,
        result: "win"
      };
    } else {
      return {
        userChoice: userChoice,
        computerChoice: computerChoice,
        result: "lose"
      };
    }
  }
}

function rpsGameTwo(userChoice) {
  const rps = ["rock", "paper", "scissors"];
  const computerChoice = rps[getRandomInteger(0, 2)];
  const winValue = {
    rock: "scissors",
    paper: "rock",
    scissors: "paper"
  };

  return {
    userChoice: userChoice,
    computerChoice: computerChoice,
    result: userChoice == computerChoice ? "draw" : winValue[userChoice] == computerChoice ? 1 : -1
  };
}

console.log(rpsGame("rock"));

// console.log(rpsGameTwo("scissors"));
// Helper function to log messages to the console
function logMessage(message) {
  console.log(message);
}

// Get computer choice
const getComputerChoice = () => {
  const choices = ["rock", "paper", "scissors"];
  return choices[Math.floor(Math.random() * choices.length)];
};

// Get human choice
const getHumanChoice = () => {
  const validChoices = ["rock", "paper", "scissors"];
  let choice;
  do {
    choice = prompt(
      "Enter your choice: rock, paper, or scissors to watch the course of the game enter the browser console"
    )
      .toLowerCase()
      .trim();
  } while (!validChoices.includes(choice));
  return choice;
};

// Play a single round
const playRound = (humanChoice, computerChoice) => {
  const winConditions = {
    rock: "scissors",
    paper: "rock",
    scissors: "paper",
  };

  if (humanChoice === computerChoice) return "tie";
  return winConditions[humanChoice] === computerChoice ? "human" : "computer";
};

// Play the entire game
const playGame = () => {
  let humanScore = 0;
  let computerScore = 0;
  const rounds = 5;

  logMessage("Game started!");

  for (let i = 1; i <= rounds; i++) {
    const humanChoice = getHumanChoice();
    const computerChoice = getComputerChoice();
    const result = playRound(humanChoice, computerChoice);

    let roundMessage;
    if (result === "tie") {
      roundMessage = `Round ${i}: It's a tie! Both chose ${humanChoice}.`;
    } else if (result === "human") {
      humanScore++;
      roundMessage = `Round ${i}: You win! ${humanChoice} beats ${computerChoice}.`;
    } else {
      computerScore++;
      roundMessage = `Round ${i}: You lose! ${computerChoice} beats ${humanChoice}.`;
    }

    logMessage(roundMessage);
    logMessage(
      `Current Score - You: ${humanScore}, Computer: ${computerScore}`
    );
  }

  const finalMessage =
    humanScore > computerScore
      ? "You win the game!"
      : humanScore < computerScore
      ? "You lose the game!"
      : "It's a tie game!";

  logMessage(
    `Game Over!\n${finalMessage}\nFinal Score - You: ${humanScore}, Computer: ${computerScore}`
  );
};

// Start the game
playGame();

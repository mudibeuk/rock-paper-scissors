let humanScore = 0;
let computerScore = 0;

const beats = {
    rock: "scissors",
    paper: "rock",
    scissors: "paper",
};

playGame();

function playGame() {
    let rounds = 0;
    while (rounds < 5) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();

        playRound(humanSelection, computerSelection);
        rounds++;
    }

    if (humanScore === computerScore) {
        console.log("It's a tie");
    } else if (humanScore > computerScore) {
        console.log("You win");
    } else {
        console.log("You lost");
    }
}

function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    return choices[Math.floor(Math.random() * 3)];
}

function getHumanChoice() {
    const validChoices = ["rock", "paper", "scissors"];
    let choice;

    do {
        choice = prompt("What is your choice? rock, paper or scissors")?.toLowerCase();
    } while (!validChoices.includes(choice));

    return choice;
}

function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        console.log("It's a tie.");
    } else if (beats[humanChoice] === computerChoice) {
        humanScore++;
        console.log(`You win! ${humanChoice} beats ${computerChoice}.`);
    } else {
        computerScore++;
        console.log(`You lose! ${computerChoice} beats ${humanChoice}.`);
    }
}
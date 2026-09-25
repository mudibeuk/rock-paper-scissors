let humanScore = 0;
let computerScore = 0;

let rock = document.querySelector(".rock");
let paper = document.querySelector(".paper");
let scissors = document.querySelector(".scissors");

rock.addEventListener("click", playRound);
paper.addEventListener("click", playRound);
scissors.addEventListener("click", playRound);

const beats = {
    rock: "scissors",
    paper: "rock",
    scissors: "paper",
};

function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    return choices[Math.floor(Math.random() * 3)];
}

function playRound(event) {

    let humanChoice = event.target.className;
    let computerChoice = getComputerChoice();

    let result = document.querySelector(".result");
    let score = document.querySelector(".score");

    if (humanChoice === computerChoice) {
        result.textContent = "It's a tie.";
    } else if (beats[humanChoice] === computerChoice) {
        humanScore++;
        result.textContent =`You win! ${humanChoice} beats ${computerChoice}.`;
    } else {
        computerScore++;
        result.textContent = `You lose! ${computerChoice} beats ${humanChoice}.`;
    }

    if(humanScore < 5 && computerScore < 5){
        score.textContent = `You have ${humanScore} points and the computer has ${computerScore} points.`;

    }else{
        score.textContent = humanScore> computerScore? "You reached 5 points and win!" : "the computer reached 5 points and win!";
    }
}
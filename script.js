function getComputerChoice() {
    let choices = ["ROCK", "PAPER", "SCISSORS"];
    let randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

const stats = document.querySelector('#stats');

function playRound(playerSelection, computerSelection) {
    if(playerSelection === "ROCK") {
        if(computerSelection === "ROCK") {
            stats.textContent = 'Egal';
            return 0;
        } else if(computerSelection === "PAPER") {
            stats.textContent = 'Ai pierdut! Hartia bate Piatra!';
            return 1;
        } else if(computerSelection === "SCISSORS") {
            stats.textContent = 'Ai castigat! Piatra bate Foarfecele!';
            return 2;
        }
    } else if(playerSelection === "PAPER") {
        if(computerSelection === "PAPER") {
            stats.textContent = 'Egal';
            return 0;
        } else if(computerSelection === "SCISSORS") {
            stats.textContent = 'Ai pierdut! Foarfecele bate Hartia!'
            return 1;
        } else if(computerSelection === "ROCK") {
            stats.textContent = 'Ai castigat! Hartia bate Piatra!'
            return 2;
        }
    } else if(playerSelection === "SCISSORS") {
        if(computerSelection === "SCISSORS") {
            stats.textContent = 'Egal';
            return 0;
        } else if(computerSelection === "ROCK") {
            stats.textContent = 'Ai pierdut! Piatra bate Foarfecele!';
            return 1;
        } else if(computerSelection === "PAPER") {
            stats.textContent = 'Ai castigat! Foarfecele bate Piatra!';
            return 2;
        }
    }
}

let computerScore = 0;
let playerScore = 0;
let rounds = 0;
score.textContent = `Score: Computer ${computerScore} - Player ${playerScore}`;

const choices = document.querySelector('.choices');

const retry = document.querySelector('#retry');
retry.style.display = 'none';

function tryAgain() {
    computerScore = 0;
    playerScore = 0;
    rounds = -1;
    score.textContent = `Score: Computer ${computerScore} - Player ${playerScore}`;
    choices.style.display = 'block';
    stats.textContent = "";
    retry.style.display = 'none';
}

retry.addEventListener('click', tryAgain);

function playerChoice(e) {
    let choice = this.id.toUpperCase();
    let winner = playRound(choice, getComputerChoice());
    
    if(winner === 1) computerScore ++;
    else if (winner === 2) playerScore ++;

    score.textContent = `Score: Computer ${computerScore} - Player ${playerScore}`;
    rounds++;
    if(rounds === 5) {
        choices.style.display = 'none'; // make buttons dissapear
        retry.style.display = 'inline-block'; //retry button appears
        if(computerScore > playerScore) {
            score.textContent = `You Lose! Score: Computer ${computerScore} - Player ${playerScore}`;
        } else if (computerScore < playerScore) {
            score.textContent = `You Win! Score: Computer ${computerScore} - Player ${playerScore}`;
        } else {
            score.textContent = `It's a tie! Score: Computer ${computerScore} - Player ${playerScore}`;
        }
    }
    console.log(rounds);
}

const buttons = document.querySelectorAll('button');

buttons.forEach((button) => {
    button.addEventListener('click', playerChoice);
});
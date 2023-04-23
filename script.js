let choices = ["ROCK", "PAPER", "SCISSORS"];

function getComputerChoice() {
    let randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

// function getPlayerChoice() {
//     let choice = prompt("Choice: Rock, Paper, Scissors?");
//     choice = choice.toUpperCase();
//     return choice;
// }

function playRound(playerSelection, computerSelection) {
    if(!choices.includes(playerSelection)) {
        alert("Nu ai introdus datele corecte");
        return 3;
    }
    
    if(playerSelection === "ROCK") {
        if(computerSelection === "ROCK") {
            alert("Egal");
            return 0;
        } else if(computerSelection === "PAPER") {
            alert("Ai pierdut! Hartia bate Piatra");
            return 1;
        } else if(computerSelection === "SCISSORS") {
            alert("Ai castigat! Piatra bate Foarfecele!");
            return 2;
        }
    } else if(playerSelection === "PAPER") {
        if(computerSelection === "PAPER") {
            alert("Egal");
            return 0;
        } else if(computerSelection === "SCISSORS") {
            alert("Ai pierdut! Foarfecele bate Hartia");
            return 1;
        } else if(computerSelection === "ROCK") {
            alert("Ai castigat! Hartia bate Piatra!");
            return 2;
        }
    } else if(playerSelection === "SCISSORS") {
        if(computerSelection === "SCISSORS") {
            alert("Egal");
            return 0;
        } else if(computerSelection === "ROCK") {
            alert("Ai pierdut! Piatra bate Foarfecele");
            return 1;
        } else if(computerSelection === "PAPER") {
            alert("Ai castigat! Foarfecele bate Piatra!");
            return 2;
        }
    }
}

// function game() {
//     let computerScore = 0;
//     let playerScore = 0;
//     let winner = 0;

//     for(let i = 0; i < 5; i++){
//         winner = playRound(getPlayerChoice(), getComputerChoice());

//         if(winner === 1){
//             computerScore++;
//         } else if (winner === 2) {
//             playerScore++;
//         }

//         alert(`Calulator - Player: ${computerScore} - ${playerScore}`);
//     }

//     alert(`Meciul s-a terminat! Scor final:\nCalculator - Player: ${computerScore} - ${playerScore}`)
// }

let computerScore = 0;
let playerScore = 0;
let rounds = 0;
score.textContent = `Score: Computer ${computerScore} - Player ${playerScore}`;

function playerChoice(e) {
    let choice = this.id.toUpperCase();
    let winner = playRound(choice, getComputerChoice());
    
    if(winner === 1) computerScore ++;
    else if (winner === 2) playerScore ++;

    score.textContent = `Score: Computer ${computerScore} - Player ${playerScore}`;
    rounds++;
    if(rounds === 5) {
        document.querySelector('.choices').style.display = 'none'; // make buttons dissapear
        if(computerScore > playerScore) {
            score.textContent = `Computer Won!\nScore: Computer ${computerScore} - Player ${playerScore}`;
        } else if (computerScore < playerScore) {
            score.textContent = `Player Won!\nScore: Computer ${computerScore} - Player ${playerScore}`;
        } else {
            score.textContent = `It's a tie!\nScore: Computer ${computerScore} - Player ${playerScore}`;
        }
    }
}

const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
    button.addEventListener('click', playerChoice);
});
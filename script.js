let choices = ["ROCK", "PAPER", "SCISSORS"];

function getComputerChoice() {
    let randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

function getPlayerChoice() {
    let choice = prompt("Choice: Rock, Paper, Scissors?");
    choice = choice.toUpperCase();
    return choice;
}

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
            alert("Ai pierdut! Piatra bate Hartia");
            return 1;
        } else if(computerSelection === "PAPER") {
            alert("Ai castigat! Foarfecele bate Piatra!");
            return 2;
        }
    }
}

function game() {
    let computerScore = 0;
    let playerScore = 0;
    let winner = 0;

    for(let i = 0; i < 5; i++){
        winner = playRound(getPlayerChoice(), getComputerChoice());

        if(winner === 1){
            computerScore++;
            alert(`Calulator - Player: ${computerScore} - ${playerScore}`);
        } else if (winner === 2) {
            playerScore++;
        }

        alert(`Calulator - Player: ${computerScore} - ${playerScore}`);
    }

    alert(`Meciul s-a terminat! Scor final:\nCalculator - Player: ${computerScore} - ${playerScore}`)
}

game();
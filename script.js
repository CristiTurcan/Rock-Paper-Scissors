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
        return;
    }
    
    if(playerSelection === "ROCK") {
        if(computerSelection === "ROCK") {
            alert("Egal");
            return;
        } else if(computerSelection === "PAPER") {
            alert("Ai pierdut! Hartia bate Piatra");
            return;
        } else if(computerSelection === "SCISSORS") {
            alert("Ai castigat! Piatra bate Foarfecele!");
            return;
        }
    } else if(playerSelection === "PAPER") {
        if(computerSelection === "PAPER") {
            alert("Egal");
            return;
        } else if(computerSelection === "SCISSORS") {
            alert("Ai pierdut! Foarfecele bate Hartia");
            return;
        } else if(computerSelection === "ROCK") {
            alert("Ai castigat! Hartia bate Piatra!");
            return;
        }
    } else if(playerSelection === "SCISSORS") {
        if(computerSelection === "SCISSORS") {
            alert("Egal");
            return;
        } else if(computerSelection === "ROCK") {
            alert("Ai pierdut! Piatra bate Hartia");
            return;
        } else if(computerSelection === "PAPER") {
            alert("Ai castigat! Foarfecele bate Piatra!");
            return;
        }
    }
}

playRound(getPlayerChoice(), getComputerChoice());
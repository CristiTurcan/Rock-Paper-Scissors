let choices = ["ROCK", "PAPER", "SCISSORS"];

function getComputerChoice() {
    let choices = ["ROCK", "PAPER", "SCISSORS"];
    let randomIndex = Math.floor(Math.random() * choices.length);
    alert(choices[randomIndex]);
}

function playerSelection() {
    let choice = prompt("Choice: Rock, Paper, Scissors?");
    choice = choice.toUpperCase();

    if(choices.includes(choice)) {
        alert(choice);
        return;
    }
    
    alert("Input is not good");
}

playerSelection();
// getComputerChoice();
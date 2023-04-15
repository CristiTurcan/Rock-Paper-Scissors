function getComputerChoice() {
    let choices = ["Rock", "Paper", "Scrissors"];
    let randomIndex = Math.floor(Math.random() * choices.length);
    alert(choices[randomIndex]);
}

getComputerChoice();
function getComputerChoice(){
    const choices = ["rock","paper", "scissors"];
    const randomIndex = Math.floor(Math.random()*choices.length);

    return choices[randomIndex];
}

/*
function that takes two parameters, player selection, and computer selection (the computer choice), this function returns a string that declares the winner. or tie of the round like so: You lose! Paper beats rock!. Also make it case insensitive so that your function can recieve any input variation.
*/

function playRound(playerselection,computerSelection){
    if(playerselection.toLowerCase()=="rock" && computerSelection.toLowerCase()=="rock"){
        return "It's a tie";
    } else if(playerselection.toLowerCase()=="rock" && computerSelection.toLowerCase()=="paper"){
        return "You lose! Paper beats rock!";
    } else if (playerselection.toLowerCase()=="rock" && computerSelection.toLowerCase()=="scissors"){
        return "You win! Rock beats scissors!";
    } else if (playerselection.toLowerCase()=="paper" && computerSelection.toLowerCase()=="paper"){
        return "It's a tie!";
    } else if (playerselection.toLowerCase()=="paper" && computerSelection.toLowerCase()=="scissors"){
        return "You lose! Scissors beat paper!";
    } else if (playerselection.toLowerCase()=="paper" && computerSelection.toLowerCase()=="rock"){
        return "You win! Paper beats rock!";
    } else if (playerselection.toLowerCase()=="scissors" && computerSelection.toLowerCase()=="scissors"){
        return "It's a tie!";
    } else if (playerselection.toLowerCase()=="scissors" && computerSelection.toLowerCase()=="rock"){
        return "You lose! Rock beats scissors!";
    } else if (playerselection.toLowerCase()=="scissors" && computerSelection.toLowerCase()=="paper"){
        return "You win! Scissors beat paper!";
    } else {
        return "Invalid input.";
    }
}

const playerselection = "what";
console.log(playerselection);
const computerSelection = getComputerChoice();
console.log(computerSelection);
console.log(playRound(playerselection,computerSelection));

function playGame(){

}
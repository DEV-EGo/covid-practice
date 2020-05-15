var GamerChoices = ["r", "p", "s"];

var wins = 0;
var losses = 0;
var ties = 0;

var DirectionText = document.getElementById("direction-text");
var UserChoiceText = document.getElementById("Userchoice-text");
var computerChoiceText = document.getElementById("ComputerChoice-text");
var WinsText = document.getElementById("Wins-text");
var LossesText = document.getElementById("Losses-text");
var TiesText = document.getElementById("Ties-text");


document.onkeyup = function (event) {
    var PlayerChoice = event.key;

    var AiGuess = GamerChoices[Math.floor(Math.random() * GamerChoices.length)];

    if ((PlayerChoice === "r") || (PlayerChoice === "p") || (PlayerChoice === "s")) {

        if ((PlayerChoice === "r" && AiGuess === "s") ||
            (PlayerChoice === "s" && AiGuess === "p") ||
            (PlayerChoice === "p" && PlayerChoice === "r")) {
            wins++;
        } else if (PlayerChoice === AiGuess) {
            ties++;
        } else {
            losses++;
        }
        DirectionText.textContent = "";

        UserChoiceText.textContent = " you chose: " + PlayerChoice;
        computerChoiceText.textContent = " The computer chose " + AiGuess;
        WinsText.textContent = "wins : " + wins;
        LossesText.textContent = "Losses : " + losses;
        TiesText.textContent = "Ties :" + ties;
    }
};
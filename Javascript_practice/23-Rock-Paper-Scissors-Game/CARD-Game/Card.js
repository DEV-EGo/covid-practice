var YouChose = ["A", "J", "K"];

var Wins = 0;
var losses = 0;
var ties = 0;

var InstructionsText = document.getElementById("instruction-text");
var ChoiceText = document.getElementById("Choice");
var ComputerText = document.getElementById("ComputerChoice");
var WinsText = document.getElementById("Wins-Display");
var LossessText = document.getElementById("Losses-Display");
var TiesText = document.getElementById("Ties-Display");

document.onkeyup = function (event) {

    var PlayerGuess = event.key;

    var AiGuess = YouChose[Math.floor(Math.random() * YouChose.length)];

    if ((PlayerGuess === "A") || (PlayerGuess === "J") || (PlayerGuess === "K")) {
        if ((PlayerGuess === "A" && AiGuess === "K") ||
            (PlayerGuess === "J" && AiGuess === "A") ||
            (PlayerGuess === "K" && AiGuess === "J")) {
            Wins++;
        } else if (PlayerGuess === AiGuess) {
            ties++;
        } else {
            losses++;
        }
        InstructionsText.textContent = "";

        ChoiceText.textContent = " You Picked :" + PlayerGuess;
        ComputerText.textContent = " AI Chose :" + AiGuess;
        WinsText.textContent = " Wins :" + Wins;
        LossessText.textContent = " Losses :" + losses;
        TiesText.textContent = "Tied :" + ties;
    }
};
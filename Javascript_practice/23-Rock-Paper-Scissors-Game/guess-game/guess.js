var PCchoice = ["r", "p", "s"];

var wins = 0;
var losses = 0;
var ties = 0;

var Instructionstext = document.getElementById("Instructions-text");
var PlayersChoiceText = document.getElementById("PlayersChoice-text");
var ComputerChoiceText = document.getElementById("ComputerChoice-text");
var WinsText = document.getElementById("wins-text");
var LossesText = document.getElementById("losses-text");
var TiesText = document.getElementById("ties-text");

document.onkeyup = function (event) {

    var Uguess = event.key;

    var AiGuess = PCchoice[Math.floor(Math.random() * PCchoice.length)];

    if ((Uguess === "I") || (Uguess === "D") || (Uguess === "K")) {

        if ((Uguess === "I" && AiGuess === "K") ||
            (Uguess === "K" && AiGuess === "D") ||
            (Uguess === "D" && AiGuess === "I")) {
            wins++;
        } else if (Uguess === AiGuess) {
            ties++;
        } else {
            losses++
        }

        Instructionstext.textContent = "";

        PlayersChoiceText.textContent = " Chosen:" + Uguess;
        ComputerChoiceText.textContent = " AI chose:" + AiGuess;
        WinsText.textContent = " wins:" + wins;
        LossesText.textContent = "losses:" + losses;
        TiesText.textContent = " tied :" + ties;

    }
};
var GamerChoices = ["r", "p", "s"];

document.onkeyup = function (event) {

    var keyGuess = event.key;

    var UserGuess = GamerChoices[Math.floor(Math.random() * GamerChoices.length)];

    alert(" User Guesse: " + keyGuess);

    alert(" computer Guessed " + UserGuess);

};
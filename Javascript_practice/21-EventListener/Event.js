var userText = document.getElementById("user-text");

document.onkeyup = function (event) {
    userText.textContent = event.key;
};

var secondText = document.getElementById("second-text");

document.onkeyup = function (event) {
    secondText.textContent = event.key;
};
$(document).ready(function () {

    var letters = [
        "E",
        "D",
        "W",
        "I",
        "N",
        "_"
    ];

    for (var i = 0; i < letters.length; i++) {

        var buttonsLetter = $("<button>");

        buttonsLetter.addclass("letter-button letter letter-button-color");

        buttonsLetter.attr("data-letter", letters[i]);

        buttonsLetter.text(letters[i]);

        $("#buttons").append(buttonsLetter);
    }

    $("letter-button").on("click", function () {
        var magnet = $("<div>");

        magnet.addclass("letter fridge-color");

        magnet.text($(this).attr("data-letter"));

        $("#display").append(magnet);
    });

    $("#clear").on("click", function () {
        $("#display").empty();
    });
});
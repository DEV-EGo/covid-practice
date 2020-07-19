$(document).ready(function () {
    $("#random-button").on("click", function () {
        var random = Math.floor(Math.random() * 1000) + 1;
        $("#random-button").text(random);
    });

    $("#randy-button").on("click", function () {
        var randomize = Math.floor(Math.random() * 1000) + 1;
        $("#randy-button").text(randomize);
    });

});
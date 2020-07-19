$(document).ready(function () {
    $("#random-button").on("click", function () {
        var random = Math.floor(Math.random() * 1000) + 1;

        $("#random-number").text(random);
    });
});
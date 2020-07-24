$(document).ready(function () {
    var captainPlanet = $(".captain-planet");

    // links to audio files

    var audiofiles = document.createElement("audio");

    audiofiles.setAttribute("src", "assets/captainplanet24.mp3");

    // theme song button

    $(".theme-button").on("click", function () {
        audiofiles.play();
    });
    $(".pause-button").on("click", function () {
        audiofiles.pause();
    });

    // button sizes

    $(".normal-button").on("click", function () {
        captainPlanet.animate({ height: "300px" });
    });

    $(".grow-button").on("click", function () {
        captainPlanet.animate({ height: "500px" });
    });

    $(".shrink-button").on("click", function () {
        captainPlanet.animate({ height: "100px" });
    });

    // visibility buttons

    $(".vis-button").on("click", function () {
        captainPlanet.animate({ opacity: "1" });
    });

    $(".invis-button").on("click", function () {
        captainPlanet.animate({ opacity: "0.05" });
    });

    // stretch buttons

    $(".stretch-btn").on("click", function () {
        captainPlanet.animate({ height: "1000px", width: "200px" });
    });
})
var targetScore = 53;

$("#number-limit").text(targetScore);

var counter = 0;

// creating multiple images of sonic with their own unique number value
// starting by creating an array that includes four options

var numberOptions = [3, 10, 7, 8];

// creating for-loop to create the sonic's for each numberOption

for (var i = 0; i < numberOption.length; i++) {

    // each iteration creates an image

    var SonicTheHedgeHog = $("<img>");

    // each sonic will be given its own class "sonic_image"

    SonicTheHedgeHog.addClass("Sonic_image");

    // each image will be given a src link 

    SonicTheHedgeHog.attr("src", "https://media.giphy.com/media/1r8SIOmTZxzsOqB0us/giphy.gi");

    // each image will be given a data attribute called "data-sonic"
    // the data attribute will be set to equal the value of the array

    SonicTheHedgeHog.attr("data-sonic", numberOption[i]);

    // each image will be added to the page including its "class & attribute"

    $("#sonic").append(SonicTheHedgeHog);
}

// this click event applies to every single sonic image not just one
$("Sonic_image").on("click", function () {

    // determining & extracting the values from the data attribute
    // using $(this) key words to specify that we should be extracting the sonic value of the clicks
    // using the .attr (data-sonic)allows us to grab the value out tof the "data-sonic" attribute
    // attributes on html are strings in HTML i will be converting them to integers before adding to the counter

    var Sonic_value = ($(this).attr("data-sonic"));
    Sonic_value = parseInt(Sonic_value);

    // adding sonic value to the users "counter"

})
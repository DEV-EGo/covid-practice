$(document).ready(function () {

    // variables that will track the number of sandwiches eaten
    var PBJCounter = 0;
    var GrilledCheese = 0;
    var RoastBeef = 0;

    $("PBJ").on("click", function () {
        alert(" ITS PEANUT BUTTA JELLY TIME");
        PBJCounter++;
        alert(" You ate" + PBJCounter + "PBJ sandwiches");
    });

    $("grilledCheese").on("click", function () {
        alert("you want something that will hit the spot")
        GrilledCheese++;
        alert("you ate" + GrilledCheese + "GrilledCheese Sandwiches");
    });

    $("RoastBeef").on("click", function () {
        alert("you want some cheese with it");
        RoastBeef++;
        alert("you ate" + RoastBeef + "Roast Beef Sandwiches");
    });
});
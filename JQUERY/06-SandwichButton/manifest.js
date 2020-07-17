$(document).ready(function () {

    // variables that will track the number of sandwiches eaten
    var PBJCounter = 0;
    var GrilledCheese = 0;
    var RoastBeef = 0;

    // ====================================

    var Ferrari = 0;
    var GTR = 0;
    var Supra = 0;

    $("#PBJ").on("click", function () {
        alert(" ITS PEANUT BUTTA JELLY TIME");
        PBJCounter++;
        alert(" You ate " + PBJCounter + " PBJ sandwiches");
    });

    $("#grilledCheese ").on("click", function () {
        alert("you want something that will hit the spot")
        GrilledCheese++;
        alert("you ate" + GrilledCheese + " GrilledCheese Sandwiches");
    });

    $("#RoastBeef").on("click", function () {
        alert("you want some cheese with it");
        RoastBeef++;
        alert("you ate " + RoastBeef + " Roast Beef Sandwiches");
    });

    $("#ferrari").on("click", function () {
        alert("Italian Classic");
        Ferrari++;
        alert(" you chose " + Ferrari + " fine piece of italian machinery");
    });

    $("#GTR").on("click", function () {
        alert(" GODZILLA");
        GTR++;
        alert("you have awoken " + GTR + " japanese monster on wheels");
    })

    $("#Supra").on("click", function () {
        alert("Ready for take off? ");
        Supra++;
        alert("you purchased " + Supra + " turbo monster");
    })
});
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

        $("#image-div").html("<img src='https://i1.wp.com/snotapwi.com/wp-content/uploads/2017/03/PBJ-Sandwiches.jpg?resize=590%2C368&ssl=1' />")
    });

    $("#grilledCheese ").on("click", function () {
        alert("you want something that will hit the spot")
        GrilledCheese++;
        alert("you ate" + GrilledCheese + " GrilledCheese Sandwiches");

        $("#image-div").html("<img src='http://cdn.funcheap.com/wp-content/uploads/2014/04/The-Perfect-Grilled-Cheese-Sandwich-800-158111.jpg' />")

    });

    $("#RoastBeef").on("click", function () {
        alert("you want some cheese with it");
        RoastBeef++;
        alert("you ate " + RoastBeef + " Roast Beef Sandwiches");

        $("#image-div").html("<img src='https://www.cscassets.com/recipes/wide_cknew/wide_25336.jpg'/>")

    });

    $("#ferrari").on("click", function () {
        alert("Italian Classic");
        Ferrari++;
        alert(" you chose " + Ferrari + " fine piece of italian machinery");

        $("#image-div").html("<img src= https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRRiZ7ZMfi1murVWNtBuMN03lxRw6anU5QODw&usqp=CAU' />");
    });

    $("#GTR").on("click", function () {
        alert(" GODZILLA");
        GTR++;
        alert("you have awoken " + GTR + " japanese monster on wheels");

        $("#image-div").html("<img src='https://cars.usnews.com/static/images/Auto/custom/13302/2017_Nissan_GT-R_1.jpg' />")

    })

    $("#Supra").on("click", function () {
        alert("Ready for take off? ");
        Supra++;
        alert("you purchased " + Supra + " turbo monster");

        $("#image-div").html("<img src='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTX0O-_WAYWrnZmI6vtGf3EP7rVDpjTUY8mVg&usqp=CAU' />");
    })
});
var shoes = [
    "jordans",
    "Puma",
    "NIKE",
    "YEEZY",
    "Timberland"
];

var ClosetDiv = $("#bonus");

$.each(shoes, function (i, kicks) {
    ClosetDiv.append("<div>" + kicks + "</div>");
});

var clothes = [
    "BAPE",
    "SUPREME",
    "KITH",
    "BALENCIAGA",
    "VLONE"
];

var clothing = $("#clothing");

for (var i = 0; i < clothes.length; i++) {
    var clothesStorage = ("<div>" + clothes[i] + "</div>");
    clothing.append(clothesStorage);
}

var fortunefive = [
    "Apple",
    "Microsoft",
    "bmw",
    "TESLA",
    "NIKE"
];

var millions = $("#million");

for (var i = 0; i < fortunefive.length; i++) {
    var bucks = ("<div>" + fortunefive[i] + "</div");
    millions.append(bucks);
}

var food = [
    "tacos",
    "burritos",
    "burgers",
    "hot dogs",
    "rice",
    "soup"
];

var DigIn = $("#Grub");

for (var i = 0; i < food.length; i++) {

    var comida = ("<div>" + food[i] + "</div>");
    DigIn.append(comida);
}


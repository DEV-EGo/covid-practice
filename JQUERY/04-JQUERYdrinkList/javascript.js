var drinklist = [
    "soda: $5",
    "espresso: $7",
    "latte: $8",
    "ice coffee: $2",
    "ice latter: $4"
];

var drinkDiv = $("#drink-options");

for (var i = 0; i < drinklist.length; i++) {

    var newdrink = $("<div>") + drinklist[i] + ("</div>");

    drinkDiv.append(newdrink);
}

var cartoon = [
    "avatar",
    "DBZ",
    "NARUTO",
    "GUNDAM",
    "Samurai jack"
];

var cartoonList = $("#anime");

for (var i = 0; i < cartoon.length; i++) {

    var cartoons = $("<div>") + cartoon[i] + ("</div>");
    cartoonList.append(cartoons);

}
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
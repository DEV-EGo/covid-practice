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
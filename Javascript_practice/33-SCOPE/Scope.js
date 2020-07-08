var Gspoke = "Global spoke";
var myName = "edwin";

function DoesSomething(firstname) {
    myName = "EGO";

    console.log(firstname);

}
DoesSomething(Gspoke);
DoesSomething("Not Edwin");

// loop through something

function loopThroughSomething() {
    console.log("in function")
    for (var i = 0; i < [].length; i++) {

    }
    console.log(i);
}

var exposed = "this is a visible string";

function veryFirstFunction(message) {

    console.log(message + exposed);

}
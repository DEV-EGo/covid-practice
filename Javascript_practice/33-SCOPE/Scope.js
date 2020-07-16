var Gspoke = "Global spoke";
var myName = "edwin";

function DoesSomething(firstname) {
    myName = "EGO";

    console.log(firstname);

}

DoesSomething(Gspoke);

console.log("============================");

DoesSomething("Not Edwin");

// loop through something

function loopThroughSomething() {

    console.log("in function")

    for (var i = 0; i < [].length; i++) {

    }
    console.log(i);
}

console.log("============================");

var exposed = " this is a visible string";

// Inside of firstFunction, I can see both exposed and
// message.

function veryFirstFunction(message) {

    console.log(message + exposed);

}
veryFirstFunction("first function,");

console.log("============================");

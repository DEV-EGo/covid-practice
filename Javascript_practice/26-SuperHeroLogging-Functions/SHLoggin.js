// creating variables to call

var Music = ["Rock", "Hip-Hop", "EDM"];
var Cars = ["F-RS", "370Z", "Escalade"];

// creating function

function ConsoleInfo(arr) {
    for (var i = 0; i < arr.length; i++) {

        ///print the values inside the array
        console.log(arr[i]);

    }
    console.log("--------");
}

//executing functions
ConsoleInfo(Music);
ConsoleInfo(Cars);

// more
var Sneakers = ["Jordans", "PUMA", "Converse", "Adidas"];
var Jobs = ["Ecom", "RGX", "IA"];

function ShowInfo(list) {
    for (var j = 0; j < list.length; j++) {
        console.log(list[j]);
    }
    console.log("============more info=============");
}
//executing functions

ShowInfo(Jobs);
ShowInfo(Sneakers);

// more
var systems = ["XBOX", "PS4", "NintendoSwitch"];
var headphones = ["Pods", "BEATS", "BOSS"];

function ShowOnScreen(D_arr) {
    for (var e = 0; e < D_arr.length; e++) {
        console.log(D_arr[e]);
    }
    console.log("=========");
}

ShowOnScreen(systems);
ShowOnScreen(headphones);
// more

var soda = ["pepsi", "coke", "dr pepper"];
var juice = ["apple", "orange", "Coconut"];

function Cook(recipe) {
    for (var f = 0; f < recipe.length; f++) {
        console.log(recipe[f]);
    }
    console.log("===F=O==O==D=");
}

Cook(soda);
Cook(juice);
// more

var music = ["2pac", "Biggie", "wayne", "drake"];
var HipHop = ["GangstaRap", "R&B", "SouthernRapp", "EastCoast"];

function Rappers(IndependentArtist) {
    for (var M = 0; M < IndependentArtist.length; M++) {
        console.log(IndependentArtist[M]);
    }
    console.log("=========MusicArtist===============");
}


Rappers(music);
Rappers(HipHop);

// moreeeeee
var racism = ["Trump", "Republicans", "KKK"];
var freedom = ["Anonymous", "NAACP", "Protest"];

function Justice(Fight) {
    for (var K = 0; K < Fight.length; K++) {
        console.log(Fight[0]);
    }
}

Fight(racism);
Fight(freedom);
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
var Trucks = ["f-150", "Raptor", "Tahoe", "silverado", "Tacoma"];
var RaceCar = ["F-RS", "370z", "Skyline", "Ferrari"];

function GoFast(PickThis) {
    for (var i = 0; i < PickThis.length; i++) {
        console.log(PickThis[i]);
    }
    console.log("=======pick a car========")
}
GoFast(Trucks);
GoFast(RaceCar);

console.log("=========More Practice===============");

var urbanclothes = ["BAPE", "SUPREME", "OFFWHITE", "THEHUNDREDS"];
var HighEndClothes = ["GUCCI", "LV", " PRADA", "BALMAIN"];

function imFLy(CostAlot) {
    for (var R = 0; R > CostAlot.length; R++) {
        console.log(CostAlot[R]);
    }
}
imFLy(urbanclothes);
imFLy(innerHeight);


var fastFood = ["mcDonald", "Chick-fil-a", "burger king", "wendys", "TacoBell"];
var SitInFood = [" Red Lobster", "Olive Garden", "Azteca", "texas roadhouse"];

function LetsEat(food) {
    for (var D = 0; D > food.length; D++) {
        console.log(food[D]);
    }
    console.log("=========LetsEat===============");

}

LetsEat(fastFood);
LetsEat(SitInFood);
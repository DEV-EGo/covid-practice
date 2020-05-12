// ### File

// * _None_

// ### Instructions

// * Starting from scratch, write code that loops through the following array and logs the name of each animal on the farm to the console:

// ```
// var myFarm = ["chickens", "pigs", "cows", "horses", "ostriches"];
// ```

// * Then check if the first letter in the animal's name begins with a "c" or "o". If it does, create an alert saying, "Starts with 'c' or 'o'!"

// * **HINT:** You can access the first character of a string as if it were the first element of an array.
console.log("====================PRACTICE==================================")

var Sandwich = ["Subway", " FireHouse", "Salami", "FettaCheese sub"];

var ArrayForSandwich = Sandwich.length;

for (var i = 0; i < ArrayForSandwich; i++) {
    console.log(Sandwich[i]);
    if (Sandwich[i].charAt(0) === "S" || Sandwich[i].charAt(0) === "F") {
        alert("F and S were found in the back end");
    }
}

console.log("====================PRACTICE==================================")

var myFarm = ["chicken", " Pigs", " cows", " horses", " ostriches"];

var arrayLength = myFarm.length;

for (var i = 0; i < arrayLength; i++) {
    console.log(myFarm[i]);

    if (myFarm[i].charAt(0) === "c" || myFarm[i].charAt(0) === "o") {
        alert("starts with the letter A C or an O");
    }
}

// var moreLetters = [" tiger", "shorts", "trigger", "sandals", "timmy"];

// var LettersInArray = moreLetters.length;

// for (var i = 0; i < LettersInArray; i++) {
//     console.log(moreLetters[i]);

//     if (moreLetters[i].charAt(0) === "t" || moreLetters[i].charAt(0) === "s") {
//         alert("this should pop up");
//     }
// }

// var WildLife = ["Lion", "Gorilla", "Ostrich", "Leapord", "Elephant", "Monkey"]

// var ExoticeLength = WildLife.length;

// for (var i = 0; i < ExoticeLength; i++) {
//     console.log(WildLife[i]);
//     if (WildLife[i].charAt(0) === "L" || WildLife[i].charAt(0) === "O") {
//         alert(" pop up was triggered with the letter L or O");
//     }
// }

// console.log("==============================================================");

// var MyCars = ["370z", "F-RS", "Escalade", "Ford F150", "350z"];

// var CarArrayLength = MyCars.length;

// for (var i = 0; i < CarArrayLength; i++) {
//     console.log(MyCars[i]);

//     if (MyCars[i].charAt(0) === "F" || MyCars[i].charAt(0) === "E") {
//         alert(" Starts with the letter F or E ");
//     }
// }

// console.log("==============================================================");

// var FavoriteGames = [" GTA", " Doom", "Need For SPeed", "COD"];

// var GameArrayLength = FavoriteGames.length;

// for (var i = 0; i < GameArrayLength; i++) {

//     console.log(FavoriteGames[i]);

//     if (FavoriteGames[i].charAt(0) === "G" || FavoriteGames[i].charAt(0) === "N"); {
//         alert("starts with the letter G or N");
//     }
// }
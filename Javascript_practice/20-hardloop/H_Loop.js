// ### File

// * _None_

// ### Instructions

// * Starting from scratch, write code that loops through the following array and logs the name of each animal on the farm to the console:

// ```
// var myFarm = ["chickens", "pigs", "cows", "horses", "ostriches"];
// ```

// * Then check if the first letter in the animal's name begins with a "c" or "o". If it does, create an alert saying, "Starts with 'c' or 'o'!"

// * **HINT:** You can access the first character of a string as if it were the first element of an array.


var myFarm = ["chicken", " Pigs", " cows", " horses", " ostriches"];

var arrayLength = myFarm.length;

for (var i = 0; i < arrayLength; i++) {
    console.log(myFarm[i]);

    if (myFarm[i].charAt(0) === "c" || myFarm[i].charAt(0) === "o") {
        alert("starts with the letter A C or an O");
    }
}
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
ShowInfo(Jobs);
ShowInfo(Sneakers);
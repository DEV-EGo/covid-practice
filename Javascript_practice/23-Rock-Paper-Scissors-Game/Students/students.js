// create a row of students

var StudentRow1 = ["Ego", "Eppy", "Noel", "Miguel", "Juju"];
var studentRow2 = ["Jose", "Jordan", "Kike", "Greg"];
var studentRow3 = ["Yisenia", "Alicia", "Lupe", "Evelyn"];


////////////

var StudentRow1 = document.getElementById("student-row-1");
var StudentRow1 = document.getElementById("student-row-2");
var StudentRow1 = document.getElementById("student-row-3");

var Chose = [studentRow2, studentRow3, studentRow1];

document.onkeydup = function (event) {
    var UserGuess = event.key;
    var IAGuess = UserGuess[Math.floor(Math.random() * UserGuess.length)];

    if ((UserGuess === "E") || (UserGuess === "L") || (UserGuess === "J")) {
        if ((UserGuess === "E" && IAGuess == "J") ||
            (UserGuess === "J" && IAGuess == "L") ||
            (UserGuess === "L" && IAGuess == "E") {

        } 

        )
    }
}

// 


// Create an entire classroom

var EntireClass = [StudentRow1, studentRow2, studentRow3];

// print out every student in  row 1,2,3 

console.log("<=================Students in row 1============================>");

for (var i = 0; i < StudentRow1.length; i++) {
    console.log(StudentRow1[i]);
}


console.log("<==================students in Row 2==========================>");

for (var i = 0; i < studentRow2.length; i++) {
    console.log(studentRow2[i]);
}



console.log("<==================students in Row 3==========================>");

for (var i = 0; i < studentRow3.length; i++) {
    console.log(studentRow3[i]);
}

// print out every student in row2 that begins with the letter J

console.log("<==================students with the letter y==========================>");

for (var i = 0; i < studentRow3.length; i++) {
    if (studentRow3[i].charAt(0) === "Y") {
        console.log(" name starts with the letter y:" + studentRow3[i]);
    }
}
// how to acess second students name in row3

console.log("===============second student in row 3===============");

console.log("second student in row 3 is : " + studentRow3[2]);

// how do we acess the third student in a row2?

console.log("<===================3rd student in row3===============================>>");

console.log("third student in row 2 is:" + studentRow2[2]);

// how do we acess the third student in a row1?

console.log("<===================3rd student in row1===============================>>");

console.log("third student in row3 is : " + studentRow3[3]);
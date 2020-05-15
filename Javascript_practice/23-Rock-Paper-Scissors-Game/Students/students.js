// create a row of students
var StudentRow1 = ["Ego", "Eppy", "Noel", "Miguel", "Juju"];
var studentRow2 = ["Jose", "Jordan", "Kike", "Greg"];
var studentRow3 = ["Yisenia", "Alicia", "Lupe", "Evelyn"];

// Create an entire classroom

var EntireClass = [StudentRow1, studentRow2, studentRow3];

// print out every student in  row 1

for (var i = 0; i < StudentRow1.length; i++) {
    console.log(StudentRow1[i]);
}

// print out every student in row2 that begins with the letter J

for (var i = 0; i < studentRow2.length; i++) {
    if (studentRow2[i].charAt(0) === "j") {
        console.log(" name starts with the letter :" + studentRow2[i]);
    }
}
// how to acess second students name in row3

// how do we acess the third student in a row2?
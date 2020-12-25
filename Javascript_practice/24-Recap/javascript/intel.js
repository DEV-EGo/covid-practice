// Instructions:
// Using the given arrays, complete the questions below!

// Rows of Students
var StudentsRow1 = [ "test","test2","test3","test4"];
var StudentsRow2 = ["billy","bobby","timmy","harry"];
var StudentsRow3 = ["Noel","eppy","Juju","Tanner"]

// Entire Class
var EntireClass = [ StudentsRow1.StudentsRow2, StudentsRow3];

// How do we print out every single student in Row 1?
for (var i = 0; i < StudentsRow1; i++) {
    console.log(StudentsRow1[i]);
};
// How do we print out every student in Row 2 whose first name begins with b?
for(var b =0;  b < StudentsRow2; b++){
    if(StudentsRow2[b].charAt(0) === "b"){
        console.log(" names that start with b :" + StudentsRow2[b]);
    }
}
// Using the entireClass array, how do we access the second student in row 3?
console.log(" second students in row 3 with in the class is");
console.log(StudentsRow3[1]);
// Using the entireClass array, how do we access the third student in row 2?
console.log(" the 3rd student in row 2 ...");
console.log(StudentsRow3[2]);
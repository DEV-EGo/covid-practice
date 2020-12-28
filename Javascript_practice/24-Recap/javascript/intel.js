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
console.log(StudentsRow3[1][2]);
// Using the entireClass array, how do we access the third student in row 2?
console.log(" the 3rd student in row 2 ...");
console.log(StudentsRow3[1][2]);

      /////////////////////// second example created by me //////////////////////////////
var spaceX =["Mars","Moon","New Earth"];
var NASA =["Rockets","Moon","Russia"];

var USAspaceMission = [spaceX, NASA];

for (var s = 0; s < USAspaceMission.length;s++){
    console.log(spaceX[s]);
}

for(var d = 0; d < spaceX.length;d++){
    if(
    spaceX[d].charAt(0) === "R") {
    console.log(" first letter starts with R" + spaceX[d]);
    }
}

console.log("2nd mission");
console.log(USAspaceMission[1]);

console.log("entire mission catalog");
console.log(NASA[1]);

      /////////////////////// second example created by me //////////////////////////////
var jobs = [
    "Cash Flow",
    "RGX",
    "Infinite Auto",
    "Jhonnys Auto"
];

var Ecom = [
    "Cash Flow",
    "E's Bodega"
];

var GetMoney = [Ecom, jobs];

for(var r = 0; r< jobs.length;r){
    if (jobs[r].charAt(0) === "C"){
        console.log(" first letter of this item is "+ jobs[r])
    }
}
// Creating an empty array for our favorite TV shows.

var favMovies = [];
var Movies;

// FOR-Loop will repat 3x

for (var i = 1; i < 3; i++) {


    Movies = prompt("what's your # " + i + " favorite movie ?"); // asking user what is there 1,2,3 fav movie


    favMovies.push(Movies);// adding (PUSH) the variable aka answer into favmovie array

}

// looping into the favMOvie array 

for (var i = 0; i < favMovies.length; i++) {

    alert(favMovies[i]);// create an alert that will list out each new movie tyoed in by user

}
// ======================MORE PRACTICE============================================================
var favCar = [];
var RaceCar;

for (var i = 1; i < 3; i++) {
    RaceCar = prompt(" if you can choose " + " a car what would it be : " + i);
    favCar.push(RaceCar);
}

// ======================MORE PRACTICE============================================================

var favTVShow = [];
var TVshowSucks;

for (var i = 2; i < 4; i++) {
    TVshowSucks = prompt(" what is your fav tv show " + i + " ?");

    favTVShow.push(TVshowSucks);
}

for (var i = 0; i < favTVShow.length; i++) {
    alert(favTVShow[i]);
}

var Jordans = [];
var sneakerHead;

for (var i = 5; i < 10; i++) {
    sneakerHead = prompt(`what are you're  ${i} favorite jordans ?`);
    Jordans.push(sneakerHead);
}
for (var i = 0; i < Jordans.length; i++) {
    alert(sneakerHead[i]);
}
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

for (var J = 1; j < 3; J++) {
RaceCar = prompt(" if you can choose " + " a car what would it be : " + j);
favCar.push(RaceCar);
}

for (var j = 0; j < favCar.length; j++) {
    alert(favCar[j]);
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

for (var N = 5; N < 10; N++) {
    sneakerHead = prompt(`what are you're  ${N} favorite jordans ?`);
    Jordans.push(sneakerHead);
}
for (var N = 0; N < Jordans.length; N++) {
    alert(sneakerHead[N]);
}


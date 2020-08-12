// EXAMPLE ONE:
// --------------------------------------------------
// What is "this" going to print? window were not in an object
console.log(this);
// --------------------------------------------------

// EXAMPLE TWO:
// --------------------------------------------------
// What is "this" going to print? window we are not in an object

function myFirstFunction() {

    console.log(this);

}

myFirstFunction();

// --------------------------------------------------

// important example 3 second try
var newCharacter = {

    name: " newCharacterFunction",

    cometoLife: function () {

        console.log(this.name);

    }
};

newCharacter.cometoLife();

// --------------------------------------------------

var computerBrand = {
    brandName: ["apple", "Sony"],

    buyitnow: function () {

        console.log(this.brandName);

    }
};

computerBrand.buyitnow();

// --------------------------------------------------

var marvel = {

    hero: [
        "punisher",
        "HULK",
        "SpiderMan",
        "Venom"
    ],

    ListOfHeros: function () {

        console.log(this.hero);

    }
};

marvel.ListOfHeros();

// --------------------------------------------------

var infinite = {
    jobs: ["ford", "Ram", "masserati"],

    payday: function () {
        console.log(this.jobs);
    }
};

infinite.payday();

// --------------------------------------------------
var frontEndDev = {
    fullstack: ["js", "react", "angular", "mongo", "node"],

    getaJob: function () {
        console.log(this.fullstack);
    }
};

frontEndDev.getaJob();

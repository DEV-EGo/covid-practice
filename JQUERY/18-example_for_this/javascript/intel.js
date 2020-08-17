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

// --------------------------------------------------

var afterwork = {
    todoList: ["finish jobs", "getFood", "meet mom"],

    letsride: function () {
        console.log(this.todoList);
    }
};

afterwork.letsride();


// EXAMPLE FOUR (BONUS, TRICKY!):
// --------------------------------------------------
// What is "myObj.yell()" going to print? Why? Power up.  


var newthing = {
    typeofName: "",
    yell: function () {

        this.typeofName = " this should be the first name to appear";

        var changingtypeofName = function (newName) {

            this.typeofName = newName;

        };

        changingtypeofName("new second name who this");

        console.log(this);

    }
};

newthing.yell();

// ------------------EXAMPLE FOUR --------------------------------

var nextry = {
    tryingNewname: "",

    bachata: function () {

        this.tryingNewname = " new try";

        var switchingItUP = function (letsDance) {

            this.tryingNewname = letsDance;

        };

        switchingItUP(" bachateame");
        console.log(this);

    }
};

nextry.bachata();

// ------------------EXAMPLE FOUR --------------------------------

var musica = {
    tunes: "",
    blast: function () {

        var music = this;

        this.tunes = " apple music";

        var newSong = function (spotify) {
            music.tunes = spotify;
        };

        newSong(" trap tunes");
        console.log(music);

    }
};

musica.blast();
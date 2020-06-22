var Car = {
    Make: "Nissan",
    Model: "Skyline",
    Miles: 100,
    Color: "silver",
    IsDriving: true

    GoToWork: function () {

        alert("old miles" + this.Miles);

        this.Miles = this.Miles + 9;

        alert("New miles" + this.Miles);

    },

    DriveAroundTheWorld: function () {
        alert(" old miles" + this.Miles);
        this.Miles = this.Miles + 100;

        alert("new miles" + this.Miles);
        alert("Your car is breaking down ! you need a tune up");

        this.IsDriving = false;
    },

    TuneUp: function () {
        alert(" Youre ready to hit the road");
        this.IsDriving = true;
    },

    Move: function () {
        alert("HONK! HONK!");
    },
    FullSend: function () {
        alert(" Ready! ..... Set!... GO!");
    }
};

// functions
// log all of the car's current stats

function StatsReWrite() {
    console.log("Make: " + Car.Make);
    console.log("Model: " + Car.Model);
    console.log("Miles:" + Car.Miles);
    console.log("color: " + Car.Color);
    console.log(" is driving: " + Car.IsDriving);
    console.log("================================");
}

// main process 
// capturing the keyboard input depending on the letter that was hit

document.onkeyup = function (event) {

    // captures the keys that are being hit
    var LettersBeingHit = event.key.toLowerCase();

    // if they hit the letter "h", this function/method code will run

    if (LettersBeingHit === "h") {
        Car.Move();
        StatsReWrite();
    }

    // if they hit the letter "d", this function/method code will run

    if (LettersBeingHit === "d") {
        Car.GoToWork();
        StatsReWrite();
    }

    // if they hit the letter "w", this function/method code will run

    if (LettersBeingHit === "w") {
        Car.DriveAroundTheWorld();
        StatsReWrite();
    }

    // if they hit the letter "t", this function/method code will run
    if (LettersBeingHit === "t") {
        Car.TuneUp();
        StatsReWrite();
    }
}
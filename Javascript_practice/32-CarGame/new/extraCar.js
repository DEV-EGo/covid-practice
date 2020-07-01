var NewCar = {
    Make: " Ferrari",
    Model: " f50",
    Color: " Red",
    Miles: 1000,
    IsRaceAble: true,

    StartEngine: function () {
        alert(" Start Your Engine" + this.Miles);
        this.Miles = this.Miles;

        alert(" You ran this many miles " + this.Miles);
    },

    LapAroundTheTrack: function () {
        alert(" you ran these many miles around the track" + this.Miles);

        this.Miles = this.Miles + 3000;

        alert(" Engine is hot you ran" + this.Miles + " Miles Per hour");

        alert(" Pull into the Pit Stop your engine is running hot");
    },

    PitStop: function () {
        alert(" You're good to go Win this race");
        this.IsRaceAble = true;
    },

    Turbo: function () {
        alert(" TURBO KICKIN IN! PSSSHHHHHHHHHH!!! ");
    }
};

Function clearUpStats() {

    console.log("Make" + NewCar.Make);
    console.log("Model" + NewCar.Model);
    console.log("Color" + NewCar.Color);
    console.log("Miles" + NewCar.Miles);
    console.log("Ready to race" + NewCar.IsRaceAble);

    console.log("===============lets ride =================");

}

document.onkeyup = function (event) {
    var UserClicked = event.key.toLowerCase();

    if (UserClicked === "r") {
        NewCar.Turbo();
        clearUpStats();
    }

    if (UserClicked === "r") {
        NewCar.StartEngine();
        clearUpStats();
    }

    if (UserClicked === "l") {
        NewCar.LapAroundTheTrack();
        clearUpStats();
    }

    if (UserClicked === "p") {
        NewCar.PitStop();
        clearUpStats();
    }
};
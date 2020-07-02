var NewCar = {
    Make: " Ferrari",
    Model: " f50",
    Color: " Red",
    Miles: 1000,
    IsRaceAble: true,

    StartEngine: function () {
        alert(" Start Your Engine " + this.Miles);
        this.Miles = this.Miles;

        alert(" You ran this many miles " + this.Miles);
    },

    LapAroundTheTrack: function () {
        alert(" you ran these many miles around the track " + this.Miles);

        this.Miles = this.Miles + 3000;

        alert(" Engine is hot you ran " + this.Miles + " Miles Per hour ");

        alert(" Pull into the Pit Stop before the engine blows ");
    },

    PitStop: function () {
        alert(" You're good to go, Go Win this race! ");
        this.IsRaceAble = true;
    },

    Turbo: function () {
        alert(" TURBO KICKIN IN! PSSSHHHHHHHHHH!!! ");
    }
};

function clearUpStats() {
    console.log("Make" + NewCar.Make);
    console.log("Model" + NewCar.Model);
    console.log("Color" + NewCar.Color);
    console.log("Miles" + NewCar.Miles);
    console.log("Race" + NewCar.IsRaceAble);
}

document.onkeyup = function (event) {
    var UserClicked = event.key.toLowerCase();

    if (UserClicked === "t") {
        NewCar.Turbo();
        clearUpStats();
    }

    if (UserClicked === "s") {
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
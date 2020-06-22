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
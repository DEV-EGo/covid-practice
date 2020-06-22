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
var Vehicle = {
    Make: "NISSAN",
    Mode: "GTR",
    Color: "Silver",
    Miles: 10000,
    IsDriving: true,

    DriveToWork: function () {
        alert(" you have this many miles" + this.Miles);

        this.Miles = this.Miles;

        alert(" new miles" + this.Miles);
    },

    DriveAroundTheBlock: function () {
        alert(" You put these many miles" + this.Miles);

        this.Miles = this.Miles + 30000;

        alert("new miles" + this.Miles);
        alert(" your car needs a tune up!");

        this.IsDriving = false;
    },

    TuneUpTheCar: function () {
        alert(" Dump the clutch and let it roll! ");
        this.IsDriving = true;
    }
}
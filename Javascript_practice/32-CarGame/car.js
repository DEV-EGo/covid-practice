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
    },

    honk: function () {
        alert(" skirrrrrt skiiirrrrrt!");
    }
};


// log all of the cars currrent stats in the console

function DoOverStats() {
    console.log("Make" + Vehicle.Make);
    console.log("Model" + Vehicle.Mode);
    console.log("Color" + Vehicle.Color);
    console.log("Miles" + Vehicle.Miles);
    console.log("is driveable" + Vehicle.IsDriving);
    console.log(" ============================ ");

}
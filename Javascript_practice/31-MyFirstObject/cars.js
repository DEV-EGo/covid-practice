var Car = {
    make: " GT86",
    Color: "Khaki",
    Miles: "56000",
    IsWorking: true,

    DriveToWork: function () {

        alert(" Old Miles: " + this.Miles);

        this.Miles = this.Miles + 5;

        alert(" after the test drive it gained " + this.Miles);

    },

    DriveAroundTheWorld: function () {

        alert(" old miles : " + this.Miles);

        this.Miles = this.Miles + 24000;
        alert(" New Miles: " + this.Miles);
        alert(" Your car needs a tune up! ");

        this.IsWorking = false;
    }

}


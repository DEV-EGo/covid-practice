var NewCar = {
    Make: " Ferrari",
    Model: " f50",
    Color: " Red",
    Miles: 1000,
    IsRaceAbel: true,

    StartEngine = function () {
        alert(" Start Your Engine" + this.Miles);
        this.Miles = this.Miles;

        alert(" You ran this many miles " + this.Miles);
    },

    LapAroundTheTrack = function () {
        alert(" you ran these many miles around the track" + this.Miles);

        this.Miles = this.Miles + 3000;

        alert(" Engine is hot you ran" + this.Miles + " Miles Per hour");

        alert(" Pull into the Pit Stop your engine is running hot");
    }
}
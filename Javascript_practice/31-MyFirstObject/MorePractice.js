var Tuner = {
    Vehicle: " Toyota",
    Model: "Supra",
    color: "Orange",
    Miles: 20000,
    Drives: true,

    // creating drive to work method
    // methods are functions associated with the object

    Race: function () {

        // "this" reffering to (this.miles) refers to the object the method is a part of

        alert(" Current miles " + this.Miles);

        // adding 8 to the car miles
        this.Miles = this.Miles + 8;

        // alert the new cars miles

        alert(" new miles " + this.Miles);
    },

    // DriveAroundtheblock method adds 20000 miles to the car, sets "Drives" to false and makes alerts
    DriveAroundTheBlock: function () {
        alert(" old miles " + this.Miles);

        this.Miles = this.Miles + 20000;

        alert(" new Miles " + this.Miles);

        alert(" your car needs to hit the shop ");

        this.Drives = false;
    },

    // tuneUp method is used to set "Driving" to true and also alerts nessege

    Tuneup: function () {
        alert(" your car is running slow");
        this.Drives = true;
    },

    honk: function () {
        alert("honk!");
    }
};

console.log(Tuner.Vehicle);
console.log(Tuner.color);
console.log(Tuner.Model);
console.log(Tuner.Miles);

Tuner.Race();
Tuner.DriveAroundTheBlock();
Tuner.Tuneup();
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
    },
    TakeOff: function () {
        alert("TAKE OFF!");
    }
};

// log the vehicle in the console
console.log(Tuner.Vehicle);

// log the color into the console
console.log(Tuner.color);

// log the Model 
console.log(Tuner.Model);

// log the miles
console.log(Tuner.Miles);

// log the Race Method
Tuner.Race();

// log the Drive around the block method
Tuner.DriveAroundTheBlock();

// log the tuneup method
Tuner.Tuneup();

// how to make the onkey functions work "H" "T"

document.onkeyup = function (event) {
    var LettersToHit = event.key.toLowerCase();

    if (LettersToHit === "h") {
        Tuner.honk();
    }
    else if (LettersToHit === "d") {
        Tuner.TakeOff();
    }
}
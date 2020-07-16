var Vehicle = {
    make: "Toyota",
    model: "GT86 ",
    color: "dessert khaki",
    mileage: 50000,
    IsDriveable: true,

    DriveToWork: function () {

        alert(" old mileage:" + this.mileage);

        this.mileage = this.mileage + 20;

        alert(" New Miles" + this.mileage);
    },

    DriveAroundTheWorld: function () {
        alert("old miles" + this.mileage);
        this.mileage = this.mileage + 1000;

        alert("new miles are" + this.mileage);
        alert(" your car needs a tune up");
        this.IsDriveable = false;
    },

    GetAtuneUp: function () {
        alert("car is ready to race");
        this.IsDriveable = true;
    },

    Honk: function () {
        alert(" HONK ! HONK!");
    },

    Race: function () {
        alert(" READY SET GO!");
    }
};

// console log the functions

// log the car's make
console.log(Vehicle.make);

// log the car model
console.log(Vehicle.model);

// log the mileage
console.log(Vehicle.mileage);

// log the drive to work method
Vehicle.DriveToWork();

// log drive around the world
Vehicle.DriveAroundTheWorld();

//log the tune up method
Vehicle.GetAtuneUp();


// how to run the get tune up method by typing "H", "T"

document, onkeyup = function (event) {
    var LetterChosen = event.key.toLowerCase();

    if (LetterChosen === "h") {
        Vehicle.Honk();
    }
    else if (LetterChosen === "w") {
        Vehicle.Race();
    }
}

function logCarDetails() {
    console.log("make" + Vehicle.make);
    console.log("make" + Vehicle.mileage);
    console.log("make" + Vehicle.model);
}
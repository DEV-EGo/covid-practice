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
    }
};
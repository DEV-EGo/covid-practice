var cat = {
    name: "Garfield",
    color: "Orange",
    Age: 10,

    DisplayCatInfo: function () {
        console.log(" inside the displayCatInfo function ");

        console.log(this);

        console.log("Name", this.name, "Color:", this.color, "Age", this.Age);

        var NestedFunctionInside = function () {
            console.log("this is the nested function inside 1st function");

            console.log(this);

            console.log("name", this.name, "color", this.color, "Age", this.Age);

        };
        NestedFunctionInside();

    }
};
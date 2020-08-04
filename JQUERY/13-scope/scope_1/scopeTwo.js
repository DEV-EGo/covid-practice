var cat = {
    name: "Garfield",
    color: "Orange",
    Age: 10,

    DisplayCatInfo: function () {

        console.log(" inside the displayCatInfo function ");

        console.log(this);

        console.log("Name:", this.name, "Color:", this.color, "Age:", this.Age);

        var NestedFunctionInside = function () {

            console.log("this is the nested function inside 1st function");

            console.log(this);

            console.log("name:", this.name, "color:", this.color, "Age:", this.Age);

        };
        NestedFunctionInside();
    }
};

cat.DisplayCatInfo();

console.log("===========more practice==============");

var ReadyPlayerOne = {
    Alias: "Draco",
    gender: "Male",
    color: "unknown",
    age: 200,

    CharactersIntel: function () {

        console.log("this is the info for character");

        console.log(this);

        console.log("Alias:", this.Alias,
            "Gender:" + this.gender,
            "Color:", this.color,
            "Age:", this.age);

        var insideMainCharacter = function () {
            console.log(this);

            console.log("Alias:", this.Alias,
                "Gender:" + this.gender,
                "Color:", this.color,
                "Age:", this.age);
        };

        insideMainCharacter();
    }
};

ReadyPlayerOne.CharactersIntel();

console.log("===========more practice==============");

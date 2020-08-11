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

var gt86 = {
    Brand: "Toyota",
    Type: "Race Car",
    style: "Coupe",

    carInfo: function () {
        console.log("this is the top of the car info function");

        console.log(
            "Brand", this.Brand,
            "Type", this.Type,
            "Style", this.style
        );

        var coPilotNest = function () {

            console.log(this);

            console.log(
                "Brand", this.Brand,
                "Type", this.Type,
                "Style", this.Type
            );
        };
        coPilotNest();
    }
};

gt86.carInfo();

console.log("===========more practice==============");

var work = {
    Hustle: ["cashFlow", "Infinite", "DevOp"],
    type: "Fiat",
    style: "HardWork NO days off",

    Networking: function () {

        console.log("side hustle info");

        console.log(
            "Hustle:", this.Hustle,
            "type:", this.type,
            "style:", this.style
        );

        var letsmakeCash = function () {

            console.log(this);

            console.log(
                "Hustle:", this.Hustle,
                "type:", this.type,
                "style:", this.style
            );
        };
        letsmakeCash();
    }
};

work.Networking();

var zone = {
    hobby: ["code", "draw", "infinite"],
    source: "exploring my skills",
    LoveIt: true,

    mylifebelike: function () {
        console.log("stuff i love");
        console.log(
            "hobby", this.hobby,
            "source", this.source,
            "loveIt:", this.LoveIt,
        );

        var insidemylifebelike = function () {

            console.log(this);

            console.log(
                "hobby", this.hobby,
                "source", this.source,
                "loveIt", this.LoveIt
            );
        };
        insidemylifebelike();
    }

};

zone.mylifebelike();

console.log("===========more practice==============");

var theHood = {
    places: ['thebronx', 'charlotte', 'compton', 'batton rouge'],
    state: ['NYC', 'NC', 'LA', 'NOLA'],
    crime: ['murder', 'theft', 'larceny'],

    ghetto: function () {
        console.log("this is living in the hood");
        console.log("Places:", this.places,
            "states:", this.state,
            "crime:", this.crime);

        var escape = function () {
            console.log(this);
            console.log("places", this.places,
                "State", this.state,
                "crime", this.crime
            );
        };
        escape();
    }
};

theHood.ghetto();

console.log("===========more practice==============");

var jordan = {
    shoes: ["13's", "11's", "5's", "6's"],
    store: ["footlocker", "Champs", "footaction"],
    color: "black",

    sneakerHead: function () {

        console.log("sneaker list");
        console.log(
            "shoes", this.shoes,
            "store", this.store,
            "color", this.color);

        var hypebeast = function () {

            console.log(this);
            console.log(
                "shoes", this.shoes,
                "store", this.store,
                "color", this.color
            );

        };
        hypebeast();
    }
};

jordan.sneakerHead();

var outerFunction = function () {
    var x = 5;

    var functionNested = function () {

        var y = 7;

        // this will print (x = 5)
        console.log("X:" + x);

        // this print out (y=7)
        console.log("Y:" + 7);

        var z = 10

        // this will print out (Z=10)
        console.log("z(inside):" + z);

    };
    return functionNested;
};

var firstfunction = outerFunction();

firstfunction();

// this will print out (z is undefined)
// console.log("Z (outside of function):" + z);

// new practice 

var newfunction = function () {
    var f = 6;
    var nestedinside = function () {
        var g = 7;

        console.log("f" + f);
        console.log("g" + 6);

        var h = 8;

        console.log("h(inside):" + h);
    }

    return nestedinside;
};

var secondtry = newfunction();
secondtry();

// new practice 

var thirdfunc = function () {
    var t = 1;

    var insidefunc = function () {
        var y = 2;

        console.log("t:" + t);

        console.log("y:" + y);

        var u = 3;

        console.log("u: inside function" + u);
    };

    return insidefunc;
};

var thirdtry = thirdfunc();

thirdtry();
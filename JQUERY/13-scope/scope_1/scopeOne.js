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

// more practice
var player = function () {
    var draco = [' dragon'];

    var secondP = function () {
        var wolf = [' lobo'];

        console.log("fly" + draco);

        console.log("run" + wolf);
    };
    return secondP;
};

var hopethisworks = player();
hopethisworks();

// more

var latino = function () {
    var name = ['rico'];

    var lastname = function () {
        var lName = ['dinero'];

        console.log("my name is " + name);

        console.log("my last name is " + lName);

    };
    return lastname;
};

var credentials = latino()
credentials();

// more functions

var wallet = function () {
    var brand = ['supreme'];
    var hype = function () {
        var soldout = ['BOGO'];

        console.log("la cartera es " + brand);
        console.log("i bought the last " + soldout);


    };
    return hype;
};

var consumer = wallet();
consumer();

// more
var elPadre = function () {
    var primero = ["this is the parent function"];
    var segundo = function () {
        var adentro = ["this is the child function inside the parent"];
        console.log("parent function is? " + primero);
        console.log("child function is? " + adentro);
    };
    return segundo;
};

var explanation = elPadre();
explanation();

// more 

var laptops = function () {
    var whatkind = ['mac', 'alien ware'];

    var expensive = function () {
        var techGiants = [' idk'];

        console.log(" i need a new ?" + whatkind);
        console.log("whats going on? " + techGiants);

    };

    return expensive;
};

var runthis = laptops();
runthis();

// MORE
var gulag = function () {
    var COD = ["infinite", "BX", "clt"];

    var warzone = function () {
        var survive = ["battle royale"];

        console.log(" where we landing boys ?" + COD);

        console.log(" final teams in the? " + survive);

    };

    return warzone;
};

var deployteam = gulag();
deployteam();

// moreeee

var food = function () {
    var chicken = 'chich fil a';

    var burger = function () {
        var patty = 'five guys';

        console.log(" eat more beef , less " + chicken);
        console.log(" eat more chicken , less " + patty);
    }

    return burger;
}

var letseat = food();
letseat();
// functions used to create addition elements
function add(x, y, z) {
    console.log(x + y + z);
}

function addReturn(x, y, z) {
    return x + y + z;
}


// functions used to multiply

function multiply(x, y, z) {
    console.log(x * y * z);
}

function multiplyReturn(x, y, z) {
    return x * y * z
}

// Returning a String that takes in 3 arguments

function isString(x, y, z) {
    if (
        typeof x === "string"
        && typeof y === "string"
        && typeof z === "string"
    ) {
        console.log(" yeah they all strings");
    }
    else {
        console.log(" na famm");
    }
}

// returning a vowel checker that takes in one single argument

function vowelChecker(x) {

    var firstChar = x.toLowerCase().charAt(0); ///will grab the first leter in the character

    if (firstChar === "a" || firstChar === "e" ||
        firstChar === "i" || firstChar === "o" ||
        firstChar === "u") //checking to see if the first letter is a vowel
    {
        console.log("WOWZERS the first letter is a vowel"); // if so this message will show in the console

    }
    else {
        console.log(" the first letter was not a vowel") // if not this will appear
    }
}
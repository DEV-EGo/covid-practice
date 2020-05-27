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

// Function execution - each line of code below will make a "call" that "runs" the function
//with out the "call" the function will not be executed

console.log("------add function being called------");

add(5, 3, 4);

console.log("------calling addReturn below-------");

var SneakerTotal = addReturn(220, 5, 10);
{ /// when using the "return" call we need to create a variable that calls the return
    console.log(SneakerTotal);
}

console.log("------add multiply being called------");

multiply(20, 33, 40);

console.log("------calling multiplyReturn below-------");

var usingReturnMultiply = multiplyReturn(20, 33, 40);
{
    console.log(usingReturnMultiply);
}

console.log("------calling isString function checking for vowels below-------");

isString("habibi", "monkey", "frs"); // if they have a vowel the IF statement will pop
isString(3, "hello", "mars"); //if they have vowels the else statement will pop

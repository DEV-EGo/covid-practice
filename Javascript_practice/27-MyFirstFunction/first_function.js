function Add(x, y, z) {
    console.log(x + y + z);
}

function AddReturn(x, y, z) {
    return x + y + z;
}

// multiplier

function Multiply(x, y, z) {
    console.log(x * y * z);
}

function MultiplyReturn(x, y, z) {
    return x * y * z;
}

// calling a string
function isString(x, y, z) {
    if (typeof x === "string" && typeof y === "string" && typeof z === "string") {
        console.log("This is a string");
    } else {
        console.log("this is not  a string");
    }
}

// calling a Vowel checker
function VowelChecker(x) {
    var firstChar = x.toLowerCase().charAt(0);
    if (firstChar == "a" || firstChar === "e" ||
        firstChar === "i" || firstChar === "o" ||
        firstChar === "u") {
        console.log("OMG the first letter is a vowel");
    } else {
        console.log("the first letter is not a vowel");
    }
}

// CALLING ALL THE FUNCTIONS MADE ABOVE

Add(2, 4, 6);
console.log("========add=======");

var Answer = AddReturn(2, 4, 6);
console.log(Answer);

console.log("========^^^AddReturn function^^^=========");

Multiply(2, 4, 6);
console.log("=========^^multiply^^============");

var MultiplyAnswer = MultiplyReturn(2, 4, 6);
console.log(MultiplyAnswer);
console.log("=========^^multiplyReturn call^^============");

isString("edwin", "eppy", "ian");
isString(27, "Ashley", "internet");

console.log("=========^^calling our isString function^^=========");

VowelChecker("edwin");
VowelChecker("ian");

console.log("========^^^calling the vowel checker^^==============");



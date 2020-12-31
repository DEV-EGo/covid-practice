// functions

// The "adder" function will take in 3 arguments 
// then add them together and display within the console

function adding( x,y,z)
{
    console.log(x+y+z);
}
// creating a version of "adding" that returns its result
function ReturningAdding(x,y,z)
{
    return x+y+z;
}

// creating a "multiplies" that takes in 3 arguments (x,y,z)
// function should multiply and log the results

function multiplier(x,y,z) 
{
    console.log(x*y*z);
}

// creating a "multiplier" that returns the result

function ReturningMultiplier( x,y,z){
    return x*y*z;
}

// "iString" will create 3 arguments that determine that they are strings
// will display them in the console

function isString( x,y,z) {
    if(typeof x === "string" && typeof y === "string" && typeof z === "string") {
        console.log("yep, they are all strings");
    }

    // if they are not strings we will note that
    else {
        console.log(" this is not a string");
    }
}

// vowel checker function
// will log  wether or not the input is a vowel

function vowelChecker (x) {
    var FirstCharacter = x.toLowerCase().charAt(0);
        if(FirstCharacter === "a" || FirstCharacter === "e" ||
        FirstCharacter === "i" || FirstCharacter === "o" ||
        FirstCharacter === "u") {
            
            // if this works the console will show
            console.log("wow the 1st letter is a vowel")
        }else{
            // if not this will show
            console.log("1st letter is not a vowel")
        }
}
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

// Returning a String

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
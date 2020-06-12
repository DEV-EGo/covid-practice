// var Gandalf = {
//     "real name": "gandalf",
//     "age (est)": 11000,
//     "race": "Maia",
//     "haveRetirementPlan": true,
//     "aliases": [
//         "Greyhammer",
//         "stormcrow",
//         "Mithrandir",
//         "Gnadalf the grey",
//         "Gandalf the white"
//     ]
// };

// alert("my name is " + Gandalf["real name"]);

// if (Gandalf.haveRetirementPlan) {
//     var age = "age (est)";
//     var years = Gandalf[age];

//     alert(" my 401k has been steady stacking for " + years + "years");
// }

// alert("i have more than " + Gandalf.aliases.length + " aliases ");

// alert(" my designation " + Gandalf["designation"]);

// more practice

var anonymous = {
    "real name": " anonymous",
    "age": 0,
    "race": "multiRacial",
    "retire": false,
    "aliases": [
        "The people",
        "Antifa",
        "Terrorist group",
        "ANON"
    ]
};

alert("we are" + anonymous["real name"]);
if (anonymous.retire) {
    var age = "age";
    var years = anonymous["age"];

    alert("my 401k IS NOT STACKING" + years + "age");
}
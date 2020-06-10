var Gandalf = {
    "real name": "gandalf",
    "age (est)": 11000,
    "race": "Maia",
    "haveRetirementPlan": true,
    "aliases": [
        "Greyhammer",
        "stormcrow",
        "Mithrandir",
        "Gnadalf the grey",
        "Gandalf the white"
    ]
};

alert("my name is " + Gandalf["real name"]);

if (Gandalf.haveRetirementPlan) {
    var age = "age (est)";
    var years = Gandalf[age];

    alert(" my 401k has been steady stacking for " + years + "years");
}

alert("i have more than " + Gandalf.aliases.length + " aliases ");

alert(" my designation " + Gandalf["designation"]);
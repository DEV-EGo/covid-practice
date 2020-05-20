var Tuner = ["FRS", "BRZ", "240", "WRX", "STi", "ACURATL"];
var Muscle = ["Chevelle", "NovaSS", "Charger", "Challenger"];
var Exotic = ["Pagani", "McClaren", "GTR", "Ferrari", "Lamborghini"];

for (var i = 0; i < Tuner.length; i++) {
    console.log(Tuner[i]);
}
console.log("===========Tuner============");

for (var M = 0; M < Muscle.length; M++) {
    console.log(Muscle[M]);
}
console.log("===========Muscle============");

for (var E = 0; E < Exotic.length; E++) {
    console.log(Exotic[E]);
}

console.log("===========Exotic============");

function FastnFurious(whips) {
    for (var z = 0; z < whips.length; z++) {
        console.log(whips[z]);
    }
    console.log("=========fastNfurious===========");
}
FastnFurious(Exotic);
FastnFurious(Tuner);
FastnFurious(Muscle);

/////////////

var dog = ["tyson", "Duke", "Yoko"];

for (var D = 0; D < dog.length; D++) {
    console.log(dog[D]);
}
console.log("=========== dogs animals ============");

var otracosa = ["hamster", "bunny", "goldfish"];

for (var x = 0; x < otracosa.length; x++) {
    console.log(otracosa[x]);
}

console.log("===========other animals============");


function pets(listOfAnimals) {
    for (var f = 0; f < listOfAnimals.length; f++) {
        console.log(listOfAnimals[f]);
    }
    console.log("===========calling function for animals============");

}

pets(dog);
pets(otracosa);

// //////////////////////

var Whitefood = ["MacNCheese", "Steak", "Shrimp", "Burgers", "Fries"];
var Mexicanfood = ["tacos", "rice", "beans", "salsa verde", "enchiladas"];

for (var cracka = 0; cracka < Whitefood.length; cracka++) {
    console.log(Whitefood[cracka]);
}

console.log("===========^^white food only^^============");

for (var beaner = 0; beaner < Mexicanfood.length; beaner++) {
    console.log(Mexicanfood[beaner]);
}
console.log("===========^^Mexican food only^^============");

function AllFoods(Comida) {
    for (var y = 0; y < Comida.length; y++) {
        console.log(Comida[y]);
    }
    console.log("=========all food in both the arrays==============");
}

AllFoods(Whitefood);
AllFoods(Mexicanfood);
console.log("===========^^^^============");

var SoftwareTech = ["Code", "photoshop", "IT"];
var Autotech = ["collision", "GeneralMech", "Welder"];
var Contractor = ["landscape", "Carpet", "concrete"];

console.log(" ========softwaretech====");

for (var s = 0; s < SoftwareTech.length; s++) {
    console.log(SoftwareTech[s]);
}
console.log(" ========autotech====");

for (var A = 0; A < Autotech.length; A++) {
    console.log(Autotech[A]);
}

console.log(" ======contractor====");

for (var C = 0; C < Contractor.length; C++) {
    console.log(Contractor[C]);
}

console.log(" ======Calling all techs in a function====");

function EssentialWorkers(Jobs) {
    for (var J = 0; J < Jobs.length; J++) {
        console.log(Jobs[J]);
    }
    console.log(" ======Calling all techs in a function====");

}

EssentialWorkers(Autotech);
EssentialWorkers(Contractor);
EssentialWorkers(SoftwareTech);


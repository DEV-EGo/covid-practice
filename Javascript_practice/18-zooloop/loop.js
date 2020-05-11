var vehicles = [" bugatti", " lambo", " ferrari", " maserrati"];

function logarray(list) {
    for (var i = 0; i < list.length; i++) {
        console.log(list[i]);
    }
}
logarray(vehicles);

console.log("==========================");

var animals = ["lion", "gorilla", "snake", "hippo"];
function listOfArray(stock) {
    for (var i = 0; i < stock.length; i++) {
        console.log(stock[i]);
    }
}

listOfArray(animals);

console.log("==========================");

var cars = ["nova SS", "FRS", "370z", "f150"];

function CarArray(log) {
    for (var i = 0; i < log.length; i++) {
        console.log(log[i]);
    }
}

CarArray(cars);

console.log("==========================");

var tunerParts = ["headers", "testpipe", "exhaust", "turbo"];
function CarParts(TuneUpList) {
    for (var i = 0; i < TuneUpList.length; i++) {
        console.log(TuneUpList[i]);
    }
}

CarParts(tunerParts);

console.log("==========================");

var country = ["USA", "MEXICO", "CUBA", "UK", "GERMANY"];

function WorldMap(WorldGrid) {
    for (var i = 0; i < WorldGrid.length; i++) {
        console.log(WorldGrid[i]);
    }
}

WorldMap(country);

console.log("==========================");

var RPG = ["TUROK", "RESIDENTEVIL", "HALO", "DOOM", "GEARS OF WAR", "GRAND THEFT AUTO"];

function ShootingGames(GameLibrary) {
    for (var i = 0; i < GameLibrary.length; i++) {
        console.log(GameLibrary[i] + " is the winner of this years award");
    }
}

ShootingGames(RPG);

console.log("==========================");

var planets = [" earth", " Mars", " Pluto", " Venus"];

function SolarSystem(MilkyWay) {
    for (var i = 0; i < MilkyWay.length; i++) {
        console.log(MilkyWay[i]);
    }
}
SolarSystem(planets);

var states = ["NY", "NC", "LA", "WA", "Texas"];
function liberals(states) {
    for (var i = 0; i < states.length; i++) {
        console.log(states[i]);
    }
}
liberals(states);

var MusicGroups = ["BadBoy", "DeathRow", "CashMoney", "RocAFella"];
function Label(MusicGroups) {
    for (var i = 0; i < MusicGroups.length; i++) {
        console.log(MusicGroups[i] + " Is taking Over the 2000's");
    }
}
Label(MusicGroups)
var joanOfarc = {
    realName: "Jehanne de la pulle",
    homeTown: "Domremy",
    knownFor: " Peasant Girl , Daughter of a farmer",
    Scars: ["arrow on shoulder", " Crossbow bolt to thigh"],
    death: 1431,
    isALive: false,
    birthplace: {
        cityName: "remy",
        population: {
            midCentury: 15000
        }
    }
}

console.log(joanOfarc.realName);
console.log(joanOfarc.Scars[0].location);

for (var i = 0; i < joanOfarc.Scars.length; i++) {
    console.log(joanOfarc.Scars[i]);
}
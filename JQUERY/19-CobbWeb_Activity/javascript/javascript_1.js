var HypeBeast = {

    GeneralRelease: {
        item: " NOT HEAT",

        NoResell: {
            item:
                [
                    "Wolf Grey 5's",
                    "Flint 7's",
                    "Thunder 17's"
                ],

            Flip: {
                item:
                    "Travis Scott 4's",
                brick: [
                    "Black Cat 4's",
                    "Satin 1's",
                    "Pine Green 1's"
                ]
            }
        },
        HEATALERT:
        {
            item: " Chicago 1's"

        }
    }
};

console.log("There is light resell " + "in " + HypeBeast.GeneralRelease.NoResell.item[0]);
console.log("There is resell" + " in " + HypeBeast.GeneralRelease.NoResell.Flip.item + "!");
console.log("Get Rich by finding and selling" + HypeBeast.GeneralRelease.NoResell.Flip.HEATALERT.item[0]);
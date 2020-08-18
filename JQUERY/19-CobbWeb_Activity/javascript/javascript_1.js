var hypebeast = {

    GeneralRelease: {

        items: " JORDANS",

        SemiRelease: {
            items: [
                " Airforce ones",
                " Converse",
                " Bapestas"
            ],

            Smallrelease: {
                items: " VLONE Merch"
                ,

                TinyRelease: {
                    items: [
                        " Team Jordans",
                        " Reeboks",
                        " AirMax 270's"
                    ]
                }
            },
            restock: {
                items: " Supreme Air Force Ones"
            }
        }
    }
};

console.log(" Flip of The Day" + hypebeast.GeneralRelease.SemiRelease.items[0]);
console.log(" Second chance at making money" + hypebeast.GeneralRelease.SemiRelease.Smallrelease.items + "!");
console.log(" Do not buy these bricks" + hypebeast.GeneralRelease.SemiRelease.Smallrelease.TinyRelease.items + " you will loose money");
console.log(" MAJOR RESTOCK COMING SOON" + hypebeast.GeneralRelease.SemiRelease.Smallrelease.TinyRelease.restock.items + " dont sleep!");
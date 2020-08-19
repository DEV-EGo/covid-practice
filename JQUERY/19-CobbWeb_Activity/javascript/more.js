var resell = {

    HighSeller: {

        stock: "supreme",

        MediumSeller: {

            stock: [
                "Hasbro",
                "James Charles",
                "Nintendo Switch"
            ],

            LowResell: {
                stock: "Panini Cards"
                ,
                Brick: {
                    stock: [
                        "pokemon cards",
                        "fridges",
                        "pools"
                    ]
                }
            },

            restock: {
                stock: "Jordan 11's"
            }
        }
    }



};

console.log("flip of the week " + resell.HighSeller.stock);
console.log("low risk flips of the week " + resell.HighSeller.MediumSeller.stock);
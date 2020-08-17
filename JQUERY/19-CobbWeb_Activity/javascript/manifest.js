var CobbWeb = {

    MajorWeb: {

        items: " sneakers ",

        BigWebInsideMajorWeb: {

            items:
                [
                    " Supreme BOGO ",
                    " BAPE Hoodie ",
                    " OFF-WHITE "
                ],

            SmallWebInsideMajorWeb: {

                items:
                    " NewEraCap "
                ,

                tinywebinMajorWeb: {

                    items: [
                        " BOGO Beanie ",
                        " BAPESTA ",
                        " RayBans "
                    ]
                }

            },

            OtherBigweb:
            {
                items: " headphones "
            }
        }
    }
};

console.log("i found my" + CobbWeb.MajorWeb.BigWebInsideMajorWeb.items[0]);
console.log("i found my" + CobbWeb.MajorWeb.BigWebInsideMajorWeb.SmallWebInsideMajorWeb.items + "!");
console.log("i found my" + CobbWeb.MajorWeb.BigWebInsideMajorWeb.SmallWebInsideMajorWeb.tinywebinMajorWeb.items + "!");
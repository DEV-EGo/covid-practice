// creating a click function to respong to the amount of times the image was clicked by
// user

// $(".Sonic_ring").on("click", function () {
//     alert("clicked");
// });

// creating a counter that keeps track of how many times you aquire a ring
// every time the user clicks on the image it goes up by 1
// messege being output showing how many rings you aquired

// var counter = 0;
// $(".Sonic_ring").on("click", function () {
//     counter += 1;
//     alert(" you got a ring! " + counter + " up!");
// });

// this new counter below will increase by *10* every time the image is clicked
// then the display will show the value of the new score

var ringcounter = 0;
$(".Sonic_ring").on("click", function () {
    ringcounter += 10;
    alert(" Double XP points " + ringcounter + " UP! ");
});
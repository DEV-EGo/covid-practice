// targeting the empty-div "ID" and selecting it by using "getelementBYid"
var targetID = document.getElementById("empty-div");

var newTarget = document.getElementById("second-div");

var thirdTarget = document.getElementById("new-element");

// use the JS method ".textcontent" to change the content on screen and out put "hello world"
targetID.textContent = " hello world";
newTarget.textContent = " new target who this";
thirdTarget.textContent = "hey";

// If we try to add to the div using the same .textContent method... it just replaces the old content.

targetID.textContent = " replacing old content first go";
newTarget.textContent = " new saying who this";
thirdTarget.textContent = " new new new";

// CREATING A NEW DIV ELEMENT called "div"

var newElementDiv = document.createElement("div");

// giving the new DIV created text "a pleasure to meet you"

newElementDiv.textContent = " new element who this";

// using the "appenchild" method to combine the 2 new divs together

thirdTarget.appendChild(newElementDiv);



// targeting the empty-div "ID" and selecting it by using "getelementBYid"
var targetID = document.getElementById("empty-div");

var newTarget = document.getElementById("second-div");

var thirdTarget = document.getElementById("new-element");

var fourthTarget = document.getElementById("4th-trial");

var FifthTarget = document.getElementById("5th-trial");

var sixthTarget = document.getElementById("6th-trial");

var sevenTarget = document.getElementById("7th-trial");

var eightTarget = document.getElementById("8th-trial");

// ========use the JS method ".textcontent" to change the content on screen and out put "hello world"

// targetID.textContent = " hello world";

// newTarget.textContent = " new target who this";

// thirdTarget.textContent = "hey";

// FifthTarget.textContent = "5thtrial";

// =======If we try to add to the div using the same .textContent method... it just replaces the old content.

// targetID.textContent = " replacing old content first go";

// newTarget.textContent = " new saying who this";

// thirdTarget.textContent = " new new new";

// FifthTarget.textContent = "fifth 5";

// ========CREATING A NEW DIV ELEMENT called "div"

var newElementDiv = document.createElement("div");

var elementCuatro = document.createElement("cuatro-div");

var FifthElement = document.createElement("cinco");

var sixElement = document.createElement("seis");

var SeventhElement = document.createElement("LUCKY7");

var OchoElement = document.createElement("OCHO");

// =========giving the new DIV created text "a pleasure to meet you"

newElementDiv.textContent = " new element who this";
elementCuatro.textContent = " practice boy";
FifthElement.textContent = " C I N C O";
sixElement.textContent = "S I X";
SeventhElement.textContent = " S I E T E";
OchoElement.textContent = " E I G H T BALL";
// =========using the "appenchild" method to combine the 2 new divs together

thirdTarget.appendChild(newElementDiv);
fourthTarget.appendChild(elementCuatro);
FifthTarget.appendChild(FifthElement);
sixthTarget.appendChild(sixElement);
sevenTarget.appendChild(SeventhElement);
eightTarget.appendChild(OchoElement);

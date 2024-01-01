var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");

var button = document.createElement("button");
body.appendChild(button);
button.appendChild(document.createTextNode("Generate"));

function setGradient() {
	body.style.background = 
	"linear-gradient(to right, " 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")";

	css.textContent = body.style.background + ";";
}

function getRndInteger() {
	var list1 = [];
	var list2 = [];
	for (var i = 0; i < 3; i++){
		list1.push(Math.floor(Math.random() * (255 - 0 + 1) ) + 0);
		list2.push(Math.floor(Math.random() * (255 - 0 + 1) ) + 0);
	}
   	console.log(list1);
   	console.log(list2);
}

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

document.addEventListener("DOMContentLoaded", setGradient);

button.addEventListener("click", getRndInteger);
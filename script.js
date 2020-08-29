var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var btn = document.getElementById("btn");

function randNum1() {
	return "#" + Math.floor(Math.random()*16777215).toString(16);
};

function randNum2() {
	return "#" + Math.floor(Math.random()*16777215).toString(16);
};
console.log (randNum1(), randNum2());
function setGradient() {
	body.style.background = 
		"linear-gradient(to right, " + color1.value + ", " + color2.value + ")";
		css.textContent = body.style.background + ";";
}

function setRandomGradient() {
	body.style.background = "linear-gradient(to right, " + randNum1() + ", " + randNum2() + ")";
		css.textContent = body.style.background + ";";

}


body.style.background = "linear-gradient(to right, "+ color1.value + ", " + color2.value + ")";
css.textContent = body.style.background + ";";
color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);
btn.addEventListener("click", setRandomGradient);


  
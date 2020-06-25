var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var btn_rand =document.querySelector(".btn_rand");

function setGradient() {
	body.style.background = 
	"linear-gradient(to right, " 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")";

	css.textContent = body.style.background + ";";
}

// var randomColor = Math.floor(Math.random()*16777215).toString(16);
// function setGradient_rand() {
// 	body.style.background = 
// 	"linear-gradient(to right, " 
// 	+ randomColor
// 	+ ", " 
// 	+ randomColor
// 	+ ")";

// 	css.textContent = body.style.background + ";";
// }
// btn_rand.addEventListener("click" , function(){
// 	var t =true;
// });




color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);






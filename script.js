
//Get components of webpage using DOM selectors
var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var button = document.querySelector(".btn");
var dir = document.getElementById("direction");

//Gets gradient css, displays it and sets it to css page
function updateGradient(){
    var bi = "background-image: "
    var gradientString = 
        "linear-gradient("
        + dir.value
        + ", " 
        + color1.value 
        + ", " 
        + color2.value
        + ")";

    css.textContent = gradientString;
    body.style.background = gradientString;
}

//Generates random gradient
function randomGradient(){
    color1.value = '#'+(0x1000000+(Math.random())*0xffffff).toString(16).substr(1,6);
    color2.value = '#'+(0x1000000+(Math.random())*0xffffff).toString(16).substr(1,6);
    updateGradient();            
}

//Set random gradient on load
randomGradient();

//Events
color1.addEventListener("input", updateGradient);
color2.addEventListener("input", updateGradient);
dir.addEventListener("change", updateGradient);
button.addEventListener("click", randomGradient);

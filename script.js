

let container = document.getElementById("container");
let colors = ["#341ba3", "#251e44", "#765bee", "#ae00ff", "#541c6e", "#2b043d"];
let SQUARES = 600;

for(let i = 0; i < SQUARES; i++){
    let square = document.createElement("div");
    square.classList.add("square");


    square.addEventListener("mouseover", ()=> setColor(square));

    square.addEventListener("mouseout", ()=> removeColor(square));

    container.append(square);
}

function setColor(element){
    let color = getRandomColor()
    console.log(color);
    element.style.background = color;
    element.style.boxShadow = `0 0 200px ${color}, 0 0 100px ${color}`
}

function removeColor(element){
    element.style.background = "#313131";
    element.style.boxShadow = "0 0 2px black";

}

function getRandomColor(){
    return colors[Math.floor(Math.random() * colors.length)];
}
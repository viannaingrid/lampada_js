const turOn = document.getElementById("turnOn");
const turOff = document.getElementById("turnOff");
const lamp = document.getElementById("lamp");

function lampOn(){
    lamp.src = "/assets/img/ligada.jpg";
}

function lampOff(){
    lamp.src = "/assets/img/desligada.jpg";
}

function lampBroken(){
    lamp.src = "/assets/img/quebrada.jpg";
}

turOn.addEventListener("click", lampOn);
turOff.addEventListener("click", lampOff);

lamp.addEventListener("mouseover", lampOn);
lamp.addEventListener("mouseleave", lampOff);

lamp.addEventListener("dblclick", lampBroken);


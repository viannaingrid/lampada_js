const turOn = document.getElementById("turnOn");
const turOff = document.getElementById("turnOff");
const lamp = document.getElementById("lamp");

function isLampBroken () {
    return lamp.src.indexOf ( 'quebrada' ) > -1
}

function lampOn () {
    if ( !isLampBroken () ) {
        lamp.src = './assets/img/ligada.jpg';
    }
}

function lampOff () {
    if ( !isLampBroken () ) {
        lamp.src = './assets/img/desligada.jpg';
    }
}

function lampBroken(){
    lamp.src = "/assets/img/quebrada.jpg";
}

turOn.addEventListener("click", lampOn);
turOff.addEventListener("click", lampOff);

lamp.addEventListener("mouseover", lampOn);
lamp.addEventListener("mouseleave", lampOff);

lamp.addEventListener("dblclick", lampBroken);


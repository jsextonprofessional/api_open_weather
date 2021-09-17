// cookies:

var banner = document.querySelector(".cookies");

function dismiss() {
    banner.remove();
}
// Unit converter

var unit = document.querySelector('#unit-choice').value
var temps = document.getElementsByClassName('temp-num')
for (var i = 0; i < temps.length; i++) {
    console.log(temps[i].innerHTML)
}

function changeUnit(element) {
    unit = element.value
    convertToFahrenheit(unit)
}

function convertToFahrenheit(unit) {
    if (unit == 'F'){
        for (var i = 0; i < temps.length; i++) {
            temps[i].innerHTML = Math.round((temps[i].innerHTML * 1.8 + 32) * 10) / 10
        }
    } else {
        for (var i = 0; i < temps.length; i++) {
            temps[i].innerHTML = Math.round(((temps[i].innerHTML - 32) * .5556) * 10) / 10
        }
    }
}
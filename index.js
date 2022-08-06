/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/
let num1 = document.getElementById("box")
let button = document.getElementById("convert")
let pushP = document.getElementById("shortP")
let pushP2 = document.getElementById("shortP2")
let pushP3 = document.getElementById("shortP3")

function meTOfe(x, y){
    if(y){
        let meter = x * y
       return meter.toFixed(3)
    }
    else{
        return meter.toFixed(3)
    }
}
function feTOme(x, y){
    if(y){
        let feet = x / y
        return feet.toFixed(3)
    }
}
button.addEventListener("click", function connvert(){
    //console.log(num1.value)
    pushP.textContent = `${num1.value} meters = ${meTOfe(num1.value, 3.281)} feet | ${num1.value} feet = ${feTOme(num1.value, 3.281)} meters`
    //console.log(meter)
     pushP2.textContent = `${num1.value} Liters = ${meTOfe(num1.value, 0.264)} Gallons | ${num1.value} Gallons = ${feTOme(num1.value, 0.264)} Liters`
     
      pushP3.textContent = `${num1.value} Kilograms = ${meTOfe(num1.value, 2.204)} Pounds | ${num1.value} Pounds = ${feTOme(num1.value, 2.204)} Kilograms`
})


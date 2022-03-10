//Write your pseduo code first! 
document.querySelector('#cToF').addEventListener('click', convertToCelsius)
document.querySelector('#fToC').addEventListener('click', convertToFarenheit)

function convertToCelsius(){
    let degreesCelsius = document.querySelector('#fTemp').value
    degreesCelsius = degreesCelsius * 9/5 + 32
    console.log(degreesCelsius)
    document.querySelector('#placeForCelsius').innerHTML = degreesCelsius
}

function convertToFarenheit(){
    let degreesFarenheit = document.querySelector('#cTemp').value
    degreesFarenheit = (degreesFarenheit - 32)/1.8
    console.log(degreesFarenheit)
    document.querySelector('#placeForFarenheit').innerHTML = degreesFarenheit
}
//Write your pseduo code first! 
document.querySelector('#fCheck').addEventListener('click', convertToCelsius)
document.querySelector('#cCheck').addEventListener('click', convertToFarenheit)

function convertToCelsius(){
    let degreesCelsius = document.querySelector('fTemp').value
    degreesCelsius = degreesCelsius * 9/5 + 32
    document.querySelector('#placeForCelsius').innerHTML = degreesCelsius
}

function convertToFarenheit(){
    let degreesFarenheit = document.querySelector('cTemp').value
    degreesFarenheit = (degreesFarenheit - 32)/1.8
    document.querySelector('#placeForFarenheit').innerHTML = degreesFarenheit
}
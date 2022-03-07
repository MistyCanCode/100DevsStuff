//Write your pseduo code first! 
document.querySelector('#fCheck').addEventListener('click', convertToCelsius)
document.querySelector('#cCheck').addEventListener('click', convertToFarenheit)

function convertToCelsius(){
    let degreesCelsius = document.querySelector('fTemp').value
    degreesCelsius = degreesCelsius - 32 * 5 / 9
    document.querySelector('#placeForCelsius').innerHTML = degreesCelsius
}

function convertToFarenheit(){
    let degreesFarenheit = document.querySelector('cTemp').value
    degreesFarenheit = degreesFarenheit * 1.8 + 32
    document.querySelector('#placeForFarenheit').innerHTML = degreesFarenheit
}
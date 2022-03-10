//Write your pseduo code first! 
document.querySelector('#cToF').addEventListener('click', convertToF)
document.querySelector('#fToC').addEventListener('click', convertToC)

function convertToF(){
    let cVal = document.querySelector('#cel').value
    cVal = cVal * 9/5 + 32
    console.log(cVal)
    document.querySelector('#convertedToF').innerHTML = cVal
}
function convertToC(){
    let fVal = document.querySelector('#far').value
    fVal = (fVal -32)/1.8
    console.log(fVal)
    document.querySelector('#convertedToC').innerHTML = fVal
}
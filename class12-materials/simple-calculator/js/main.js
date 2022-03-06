let total = 0

document.querySelector('#pumpkin').addEventListener('click', makeZero)
document.querySelector('#plusOne').addEventListener('click', oneUp)
document.querySelector('#plusTwo').addEventListener('click', twiceAsNice)
document.querySelector('#dominosPizza').addEventListener('click', jumanji)
document.querySelector('#plusFour').addEventListener('click', fourthTimesACharm)
document.querySelector('#plusFive').addEventListener('click', fiveByFive)
document.querySelector('#zebra').addEventListener('click', add9)
document.querySelector('#cantThinkOfAnything').addEventListener('click', sub2)
document.querySelector('#minusThree').addEventListener('click', thirdBase)
document.querySelector('#minusFour').addEventListener('click', fourLeafLower)
document.querySelector('#minusFive').addEventListener('click', fifthWheel)

function makeZero() {
  total = 0
  document.querySelector('#placeToPutResult').innerText = total
}
function oneUp(){
  total = total +1
  document.querySelector('#placeToPutResult').innerText = total
}
function twiceAsNice(){
  total = total + 2
  document.querySelector('#placeToPutResult').innerText = total
}
function jumanji() {
  total = total + 3
  document.querySelector('#placeToPutResult').innerText = total
}
function fourthTimesACharm() {
  total = total + 4
  document.querySelector('#placeToPutResult').innerText = total
}
function fiveByFive() {
  total = total + 5
  document.querySelector('#placeToPutResult').innerText = total
}
function add9() {
  total = total -1
  document.querySelector('#placeToPutResult').innerHTML = total
}
function sub2() {
  total = total - 2
  document.querySelector('#placeToPutResult').innerHTML = total
}
function thirdBase() {
  total = total - 3
  document.querySelector('#placeToPutResult').innerHTML = total
}
function fourLeafLower() {
  total = total - 4
  document.querySelector('#placeToPutResult').innerHTML = total
}
function fifthWheel() {
  total = total - 5
  document.querySelector('#placeToPutResult').innerHTML = total
}

document.getElementById('purple').onclick = partyPurple
document.getElementById('green').onclick = partyGreen
document.getElementById('blue').onclick = partyBlue
document.getElementById('yellow').onclick = partyYellow
document.getElementById('pink').onclick = partyPink

function partyPurple() {
  document.querySelector('body').style.backgroundColor = 'rgba(128,53,168,1)'
  document.querySelector('body').style.color = 'white'
  document.querySelector('body').style.fontWeight = 'bolder'
}

function partyGreen() {
  document.querySelector('body').style.backgroundColor = 'rgba(60,202,141,1),1)'
  document.querySelector('body').style.color = 'white'
  document.querySelector('body').style.fontWeight = 'bolder'
}

function partyBlue() {
  document.querySelector('body').style.backgroundColor = 'rgba(0,169,243,1)'
  document.querySelector('body').style.color = 'white'
  document.querySelector('body').style.fontWeight = 'bolder'
}
function partyYellow() {
  document.querySelector('body').style.backgroundColor = 'rgba(255,255,1,1)'
  document.querySelector('body').style.color = 'white'
  document.querySelector('body').style.fontWeight = 'bolder'
}
function partyPink() {
  document.querySelector('body').style.backgroundColor = 'rgba(254,16,146,1)'
  document.querySelector('body').style.color = 'white'
  document.querySelector('body').style.fontWeight = 'bolder'
}


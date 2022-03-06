document.querySelector('#check').addEventListener('click', check)

function check() {

  const day = document.querySelector('#day').value.toLowerCase();

  //Conditionals go here
if(day === 'tuesday' || day ==='thursday'){
  console.log("Class Day!")
  document.querySelector('#placeToSee').innerHTML = 'Class Day!';
}else if (day === 'saturday' || day ==='sunday'){
  console.log('Its the WEEKEND!')
  document.querySelector('#placeToSee').innerHTML = 'Its the WEEKEND!';
}else{
  console.log('BOOORING!')
  document.querySelector('#placeToSee').innerHTML = 'BOOOORING!';
}

}

//Handle Capital Letters, Place result in DOM, add a check for humpday (Wed)

document.querySelector('#check').addEventListener('click', check)

function check() {

  const day = document.querySelector('#day').value.toLowerCase()

  if(day === "tuesday" || day === "thursday"){
    console.log("YOU HAVE CLASS")
    document.querySelector('#placeToSee').innerHTML = "YOU HAVE CLASS"
  }else if( day === "saturday" || day === "sunday"){
    console.log("ITS THE WEEKEND")
    document.querySelector('#placeToSee').innerHTML = "ITS THE WEEKEND"
  }else if( day === "wednesday" ){
    console.log("HUMP DAY")
    document.querySelector('#placeToSee').innerHTML = "HUMP DAY"
  }else if(day === 'friday'){
    console.log("FRI-YAY")
    document.querySelector('#placeToSee').innerHTML = "FRI-YAY"
  }else{
    console.log("BORING")
    document.querySelector('#placeToSee').innerHTML = "BORING"
  }

}

//Handle Capital Letters, Place result in DOM, add a check for humpday (Wed)

document.querySelector('#check').addEventListener('click', check)

function check() {

  const day = document.querySelector('#day').value.toLowerCase()

  if(day === "tuesday" || day === "thursday"){
    console.log("YOU HAVE CLASS")
    document.querySelector('#placeToSee').innerHTML = "YOU HAVE CLASS"
  }else if( day === "saturday" || day === "sunday"){
    console.log("Its The Weekend")
    document.querySelector('#placeToSee').innerHTML = "Its The Weekend"
  }else if(day === "wednesday"){
    console.log("HUMP DAAAAY")
    document.querySelector('#placeToSee').innerHTML = "HUMP DAAAAY"
  }else{
    console.log("BORING")
    document.querySelector('#placeToSee').innerHTML = "BORING"
  }

}

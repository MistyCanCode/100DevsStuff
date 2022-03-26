//Create a conditonal that checks their age
//If under 16, tell them they can not drive
//If under 18, tell them they can't hate from outside the club, because they can't even get in
//If under 21, tell them they can not drink
//If under 25, tell them they can not rent cars affordably
//If under 30, tell them they can not rent fancy cars affordably
//If under over 30, tell them there is nothing left to look forward too
let holder = document.querySelector('h1')
let age = document.querySelector('input').value
holder.addEventListener('click', ageCheck)

function ageCheck(){
let age = document.querySelector('input').value
if(age < 16){
    //document.querySelector('yell').innerHTML = "You can not drive";
    console.log("You can not drive");
}else if(age >= 16 && age < 18){
    //document.querySelector('yell').innerHTML = "You can't hate from outside the club, because you can't even get in";
    console.log("You can't hate from outside the club, because you can't even get in");
}else if(age >= 18 && age < 21){
    //document.querySelector('yell').innerHTML = "You can not drink";
    console.log("You can not drink");
}else if(age >= 21 && age < 25){
   // document.querySelector('yell').innerHTML = "You can not rent cars affordably";
    console.log("You can not rent cars affordably");
}else if(age >= 25 && age < 30){
    //document.querySelector('yell').innerHTML = "You can not rent FANCY cars affordably";
    console.log("You can not rent a fancy car");
}else{
    //document.querySelector('yell').innerHTML = "Well, you could be president. But that's about it buddy. Wamp waaaa";
    console.log("You can be president");
}
}

//--- Harder
//On click of the h1
//Take the value from the input
//Place the result of the conditional in the paragraph

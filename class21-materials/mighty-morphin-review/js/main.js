// *Variables*
// Declare a variable, reassign it to your fav holiday, make sure it is in all caps, and print the value to the console
let favHoliday = "CHRISTMAS"
console.log(favHoliday)
//Declare a variable, assign it a string, alert the last three characters in the string (Use your google-fu and the MDN)
let lastThree = "characters"
console.log(lastThree.charAt(lastThree.length - 3) + lastThree.charAt(lastThree.length - 2) + lastThree.charAt(lastThree.length - 1))
let lastFew = "oigna;lsei"
alert(lastFew.slice(-3))
// *Functions*
// Create a function that takes in 5 numbers. Subtract all five from 100. Alert the absolute value of the difference. Call the function.
function takesInFive(n1, n2, n3, n4, n5){
let difference = 100 - n1 -n2 - n3 - n4 - n5
console.log("100" + " " + n1 + "- " + n2 + "- " + n3 + "- " + n4 + "- " + n5 + "= " + difference)
console.log(Math.abs(difference))
}
takesInFive(16, 34, -190, 52, 88)
// Create a function that takes in 3 numbers. Console log lowest and highest values. Call the function.
function takesInThree(n1, n2, n3){
    let highest = Math.max(n1, n2, n3);
    let lowest = Math.min(n1, n2, n3);
    console.log(`The lowest num is ${lowest} and the highest num is ${highest}`)
}
takesInThree(100, 25, 50)
// *Conditionals*
//Create a function that returns heads or tails randomly and as fairly as possible. Call the function.
// function headsOrTails(){
//     let result = Math.random();
//     if(result < .5){
//         return 'heads'
//     }else{
//         return 'tails'
//     }
// }
// console.log(headsOrTails())
// alert(headsOrTails())
const headsOrTails = _ => Math.random() < .5 ? 'heads' : 'tails'
//*Loops*
//Create a function that takes in a number. Console log the result of heads or tails using the previous function x times where x is the number passed into the function. Call the function.
function takesANumber(num){
    for(let i = 1; i <= num; i++){
        let result = headsOrTails()
        console.log(result)
    }
}
takesANumber(5)

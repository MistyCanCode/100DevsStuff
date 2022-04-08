//Arrays

//Create and array of tv shows. Loop through and print each show to the console
const shows = ["Buffy", "Angel", "Lost", "Fringe", "The Big Bang Theory"]
// for(let i = 0; i < shows.length; i++){
//     console.log(shows[i])
// }
shows.forEach(show => console.log(show))


//Create and array of numbers
//Return a new array of numbers that includes every even number from the previous Arrays
const numbers = [34, 83, 65, 90, 21, 4, 9, 76,1]
// for(let i = 0; i < shows.length; i++){
//     if(numbers[i] % 2 == 0){
//         console.log(numbers[i])
//         let newNumbers = numbers[i]
//         console.log(newNumbers)
//     }
// }
//this is an arrow function that will do the same thing that the above will do
let onlyEvens = arr => arr.filter(n => n% 2 === 0)
console.log(onlyEvens(numbers))


//Create a function that takes in an array of numbers
//Alert the sum of the second lowest and the second highest number
function secondHighestAndLowest(arr){
    //this is just sorting, from low to high
  let sorted = arr.sort((a,b) => a-b)
  //lowest is going to be index 0 and highest is arr.length
  console.log(sorted)
  alert(sorted[1] + sorted[sorted.length - 2])
}

secondHighestAndLowest([73, 91, 48, 34, 67, 14, 2, 9, 12])
//Create a function that takes in a number. The function should return an array that contains every number from 1 to that number as seperate elements
function takesANumber(n){
    let numArray = []
    for(let i = 1; i <= n; i++){
        numArray.push(i)
    }
    return numArray
}
console.log(takesANumber(9))
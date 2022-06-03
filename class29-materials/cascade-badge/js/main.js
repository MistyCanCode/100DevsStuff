//Arrays
//Your pokemon party order which is a list of pokemon has been leaked to Misty. Please create a function that reverses your list and prints it to the console. 
let pokemonparty = ['bulbasour','caterpie','weedle', 'pika','char']

function reverseParty(partyList){
    console.log(partyList.reverse())
}
reverseParty(pokemonparty)


//Given two integer arrays a, b, both of length >= 1, create a program that returns true if the sum of the squares of each element in a is strictly greater than the sum of the cubes of each element in b.
let a = [2,4,6,8]
let b = [1,3,5,7]
function compareSquareAndCube(array1, array2){
    return array1.reduce((acc, c) => acc + c*c, 0) > b.reduce((acc,c) => acc + c**3, 0)
}
console.log(compareSquareAndCube(a,b))

//Return a new array consisting of elements which are multiple of their own index in input array (length > 1).
// Some cases:
// [22, -6, 32, 82, 9, 25] =>  [-6, 32, 25]
// [68, -1, 1, -7, 10, 10] => [-1, 10]
function isMultiple(arr){
    return arr.filter((e,i) => e%i === 0)
}
console.log(isMultiple([22, -6, 32, 82, 9, 25]))
console.log(isMultiple([68, -1, 1, -7, 10, 10]))

//Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.Return your answer as a number.
function sumOfArrayValues(arr){
    return arr.reduce((acc, cur) => acc + Number(cur), 0)
}
console.log(sumOfArrayValues(['6', 4, '9', 1]))
//Arrays

//Create and array of numbers. Sum all of the numbers. Alert the sum.
let myArray = [1,2,3,4,5]
let sum = myArray.reduce((a,c) => a + c, 0)
alert(sum)
//Create a function that takes in an array of numbers
//Return a new array of numbers that is every original number squared
function squared(arr){
    let newArr = []
     arr.forEach((item) => {
        newArr.push(item * item)
    })
    console.log(`Original array was ${arr} and new array is ${newArr}`)
    }
squared([1,2,3,4,5])

//Create a function that takes string
//Print the reverse of that string to the console
function reverseArray(str){
    let strArray = []
    strArray = str.split('').join('')
    console.log(str)
    let newStrArray = [...strArray].reverse()
    let reversedString = newStrArray.join('')
    console.log(reversedString)
}
reverseArray('walgreens')
//Create a function that takes in a string
//Alert if the string is a palindrome or not
function palindrome(str){
    str = str.toLowerCase()
    let strArray = str.split('').join('')
    let reversedArray = [...strArray].reverse()
    console.log(reversedArray.join(''))
    let newStr = reversedArray.join('')
    if(str === newStr){
        console.log(`${str} and ${newStr} is a palindrome.`)
    }else{
        console.log(`${str} and ${newStr} is not a palindrome.`)
    }
}
palindrome('Hannah')
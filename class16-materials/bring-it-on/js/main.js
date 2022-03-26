// *Variables*
// Create a variable and console log the value
let variable = 'Pugs'
console.log(variable)
// Create a variable, add 10 to it, and alert the value
let created = 15
created += 10
console.log(created)
// *Functions*
// Create a function that subtracts 4 numbers and alerts the difference
function subTwo(n1, n2, n3, n4){
    let difference = n1 - n2 - n3 - n4
    alert(difference)
}
subTwo(78, 190, 21, 45)
// Create a function that divides one number by another and returns the remainder
function divideOne(n1, n2){
    let remainder = n1 % n2
    return remainder
}
console.log(divideOne(49, 4))
// *Conditionals*
// Create a function that adds two numbers and if the sum is greater than 50 alert Jumanji
function addTwo(n1, n2){
    let sum = n1 + n2
    if(sum > 50){
        alert('Jumanji')
    }
    return sum
}
console.log(addTwo(49, 3))
// Create a function that multiplys three numbers and if the product is divisible by 3 alert ZEBRA
function multiplyThree(n1, n2, n3){
    let product = n1 * n2 * n3
    if(product % 3 == 0){
        alert('ZEBRA')
    }
    return product
}
console.log(multiplyThree(21, 9, 30))
//*Loops*
//Create a function that takes in a word and a number. Console log the word x times where x was the number passed in
function wordAndNumber(word, num){
    for(let i = 1; i <= num; i++){
        console.log(word)
    }
}
wordAndNumber("Pugs", 3)
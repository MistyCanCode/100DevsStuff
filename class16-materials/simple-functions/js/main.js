//---Easy
//create a function that subtracts two numbers and alerts the difference
function subTwo(n1, n2){
    let difference = n1 - n2
    console.log(difference)
}
subTwo(847,376)
//create a function that divides three numbers and console logs the quotient
function divideThree(n1, n2, n3){
    let quotient = n1 / n2 / n3
    console.log(quotient)
}
divideThree(34,17,58)
//create a function that multiplys three numbers and returns the product
function multiplyThree(n1, n2, n3){
    let product = n1 * n2 * n3
    console.log(product)
}
multiplyThree(478,22,109)
//---Medium
//create a function that takes in three numbers. Add the first two numbers and return the remainder of dividing the sum of the first two numbers by the third number
function takesInThree(n1, n2, n3){
    let answer = n1 + n2
    answer = answer % n3
    console.log(answer)
}
takesInThree(3,6,9)
//---Hard
//create a function that takes in 4 numbers. Multiply the first two numbers. If the product is greater than 100 add the sum of the last two numbers and console log the value. If the product is less that 100, subtract the difference of the last two numbers and console log the value. If the product is 100, multiply the first three numbers together and alert the remainder of dividing the fourth number
function takesInFour(n1, n2, n3, n4){
let product = n1 * n2
if(product > 100){
    product = product + n3 + n4
    return product
}else if(product < 100){
    product = n3 - n4
    return product
}else{
    product = (n1 * n2 * n3) % n4
    return product
}
}
console.log(takesInFour(12,67,91,5))
// *Variables*
// Create a variable and console log the value
const dog = "pug"
console.log(dog)
// Create a variable, add 10 to it, and alert the value
const num = 3
const newNum = num + 10
console.log(newNum)
// *Functions*
// Create a function that subtracts 4 numbers and alerts the difference
function subtract4nums(one, two, three, four){
    let difference = one - two - three - four
    console.log(difference)
}
subtract4nums(7,34, -64, 12)
// Create a function that divides one number by another and returns the remainder
function divideTwoNums(first, second){
    const remainder = first % second
    console.log(remainder)
}
divideTwoNums(789, 69)
// *Conditionals*
// Create a function that adds two numbers and if the sum is greater than 50 alert Jumanji
function addTwoNums(cat, ferret){
    const sum = cat + ferret
    if(sum > 50){
        alert("Jumanji")
    }else{
        alert("You lost Jumanji")
    }
}
addTwoNums(90, 44)
// Create a function that multiplys three numbers and if the product is divisible by 3 alert ZEBRA
function multiplySomeNums(num1, num2, num3){
    const product = num1 * num2 * num3
    if(product % 3 === 0){
        alert("ZEBRA")
    }else{
        alert("buffalo")
    }
}

// *Variables*
// Create a variable and console log the value
const num1 = 5
console.log(num1)

// Create a variable, add 10 to it, and alert the value
let num2 = num1
num2 = num2 + 10
alert(num2)

// *Functions*
// Create a function that subtracts 4 numbers and alerts the difference
let num3 = 1
let num4 = 10
function sub4nums(){
    let difference = num1 - num2 - num3 - num4
    alert(difference)
}

// Create a function that divides one number by another and returns the remainder
const num5 = 3
function divs1num(){
    let remainder = num4 % num5
    console.log(remainder)
}

// *Conditionals*
// Create a function that adds two numbers and if the sum is greater than 50 alert Jumanji
const num6 = 26
const num7 = 37
function addTwo(){
    let sum = num6 + num7
    if(sum > 50){
        alert('Jumanji')
    }else{
        alert("GOTCHA")
    }
}

// Create a function that multiplys three numbers and if the product is divisible by 3 alert ZEBRA
const num8 = 2
const num9 = 49
const num10 = 2
function multiplyThree(){
    let product = num8 * num9 * num10
    if(product % 3 == 0){
        alert('ZEBRA')
    }else{
        alert('GOTCHA')
    }
}
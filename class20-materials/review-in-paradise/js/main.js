// *Variables*
// Declare a variable, reassign it to your favorite food, and alert the value
let favFood = "Coffee"
alert(favFood)
//Declare a variable, assign it a string, alert the second character in the string (Use your google-fu and the MDN)
let newVar = "PUGS"
alert(newVar.charAt(1))

// *Functions*
// Create a function that takes in 3 numbers. Divide the first two numbers and multiply the last. Alert the product. Call the function.
function takesInThree(n1, n2, n3){
let product = (n1/n2)*n3
alert(product)
}
takesInThree(5,6,7)

// Create a function that takes in 1 number. Console log the cube root of the number. Call the function.
function takesInOne(n1){
    let cubeRoot = (Math.cbrt(n1))
    console.log(cubeRoot)
    console.log(cubeRoot.toFixed(2))
}
takesInOne(81)

// *Conditionals*
//Create a function that takes in a month. If it is a summer month alert "YAY". If another other month, alert "Booo"
function takesInMonth(month){
    month = month.toLowerCase()
    if(month === "june" || month === "july" || month === "august"){
        alert("YAY")
    }else{
        alert("BOOOOO")
    }
}
takesInMonth("January")
takesInMonth("July")

//*Loops*
//Create a function that takes in a number. Console log every number from 1 to that number while skipping multiples of 5.
function takesInNumber(n1){
    for(let i = 1; i <= n1; i++){
        if(i % 5 !== 0){
            console.log(i)
        }
    }
}
takesInNumber(25)
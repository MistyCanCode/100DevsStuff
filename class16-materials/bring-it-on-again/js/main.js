// *Variables*
// Declare a variable, assign it a value, and alert the value
let dog = "Pug"
alert(dog)
// Create a variable, divide it by 10, and console log the value
let num = 25
num = num /10
console.log(num)
// *Functions*
// Create a function that multiplys 3 numbers and alerts the product
function multiplyThree(n1, n2, n3){
    let product = n1 * n2 * n3
    alert(product)
}
multiplyThree(9, 9, 1)
// Create a function that takes in 4 numbers. Add the first two numbers and subtract the next two. Console log the result
function takeInFour(n1, n2, n3, n4){
    let add = n1 + n2
    let diff = n3 - n4
    console.log(add + " " + diff)
}
takeInFour(16, 4, 50, 25)
// *Conditionals*
// Create a function that takes in 3 numbers. Starting with 100 add the first number, subtract the second, and divide the third. If the value is greater then 25, console log "WE HAVE A WINNNA"
function takeInThree(n1, n2, n3){
    let answer = 100
    answer += n1
    answer -= n2
    answer = answer / n3
    if(answer > 25){
        alert('WE HAVE A WINNER!')
    }
    return answer
}
console.log(takeInThree(100, 50, 6))
// Create a function that takes in a day of the week. If it is a weekend alert, "weekend" and if not alert "week day". Handle capitilization and if the user does not enter a day of the week alert "Try again!"
function dayOfTheWeek(day){
    day = day.toLowerCase()
    if(day == "saturday" || day == "sunday"){
        alert("Its the WEEKEND!")
    }else if(day == 'monday' || day == 'tuesday' || day == 'wednesday' || day == 'thursday' || day == 'friday'){
        alert("week day")
    }else{
        alert("Try again!")
    }
    return day
}
dayOfTheWeek("friday")
dayOfTheWeek("Saturday")
dayOfTheWeek("pug")
//*Loops*
//Create a function that takes in a number. Console log all values from 1 to that number or greater, but count by 3
function numberValues(n1){
    for(let i = 1; i <= n1; i++){
        if(i % 3 == 0){
        console.log(i)
        }
    }
}
numberValues(100)
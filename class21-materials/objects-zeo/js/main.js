//Create a stopwatch object that has four properties and three methods

//object declaration
const stopwatch = {}

//object properties
stopwatch.color = "black"
stopwatch.shape = "round"
stopwatch.brand = "Nike"
stopwatch.size = "shmalll"
stopwatch.batteries = true;
stopwatch.currentTime = 12

//object methods
stopwatch.start = function(){
    console.log(`AAAANNNDD A One, and a two, and a three, four, five`)
}
stopwatch.stop = function(){
    console.log(`STOPPPPINNGG`)
}
stopwatch.sayBrand = function(){
    console.log(stopwatch.brand)
}
stopwatch.telltime = function(){
    console.log(`The current time is ${stopwatch.currentTime}`)
}
stopwatch.getColor = function(){
    console.log(`The color of the stopwatch is ${stopwatch.color}`)
}

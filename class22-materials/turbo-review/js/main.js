// *Variables*
// Declare a variable and assign it to your fav drink as a string. Make sure there is no whitespace on either side of the string, and print the value to the console
let favDrink = "  Mocha Cappuchino "
favDrink = favDrink.trim()
console.log(favDrink)
//Declare a variable, assign it a string of multiple words, and check to see if one of the words is "apple".
let multipleWords = "check to see if one of the words is apple"
if(multipleWords.includes("apple")){
    console.log("Apple")
}else{
    console.log("No Apple")
}
let moreMultipleWords = "check to see if one of the words is not orange"
if(moreMultipleWords.includes("apple")){
    console.log("Apple")
}else{
    console.log("No Apple")
}

// *Functions*
// Create a function that returns rock, paper, or scissors as randomly as possible
function rockPaperScissors(){
    let random = Math.random();
    if(random < .33){
        console.log('bot choice is rock')
        return 'rock';
    }else if(random < .66){
        console.log('bot choice is paper')
        return 'paper';
    }else{
        console.log('bot choice is scissors')
        return 'scissors';
    }
}
// *Conditionals*
//Create a function that takes in a choice (rock, paper, or scissors) and determines if they won a game of rock paper scissors against a bot using the above function
function whoWins(playerChoice){
    let botChoice = rockPaperScissors()
    console.log(`Your choice is ${playerChoice}`)
    if((playerChoice === 'rock' && botChoice === 'scissors') || (playerChoice === 'paper' && botChoice === 'rock') || (playerChoice === 'scissors' && botChoice === 'paper')){
        console.log("You WIN")
    }else if(playerChoice === botChoice){
        console.log("You've TIED")
    }else{
        console.log("You LOST")
    }
}
//whoWins('rock')
//*Loops*
//Create a function that takes an array of choices. Play the game x times where x is the number of choices in the array. Print the results of each game to the console.
function playGameXTimes(arr){
    arr.forEach(choice => whoWins(choice))
}
playGameXTimes(['rock', 'paper', 'scissors'])
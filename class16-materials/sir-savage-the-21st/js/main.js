//Create a function that has a loop that prints '21' 21 times to the console and then call that function
function twentyOne(){
    for(let i = 1; i <= 21; i++){
      console.log('21')
    }
}
twentyOne()
//Bonus can you make it print '21' 21 times to the dom?
function lessThanTwentyTwo(){
    for(let i = 1; i < 22; i++){
        document.querySelector('#savageSays').innerText += "21 "
    }
}
lessThanTwentyTwo()
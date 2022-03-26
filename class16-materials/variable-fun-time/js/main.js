//--- Easy
//create a variable and assign it a number
let num1 = 7;
//minus 10 from that number
let num2 = num1 - 10;
//print that number to the console
console.log(num2);
//--- Medium
//create a variable that holds a value from the input
let dance = document.querySelector("#danceDanceRevolution").value;
//add 25 to that number
let num3 = dance + 25;
//alert that number
alert(num3);
//--- Hard
//create a variable that holds the h1
let h = document.querySelector("h1");
//add an event listener to that element that console logs the sum of the two previous variables
h.addEventListener('click', sum)

function sum(){
    console.log(num2 + Number(dance))
}
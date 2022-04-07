//Create a function that takes in an array of numbers. Multiply each number together and alert the product. 
function multAnArray(arr){
    let sum = 1
    arr.forEach(element => {
        sum *= element
    });
    alert(sum)
}
multAnArray([1,2,3,4,5])
multAnArray([6,5,4,3])
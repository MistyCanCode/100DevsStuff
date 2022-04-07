// Create a function that takes in an array. If the first number, is less than the last number, alert "Hi". If the first number is greater than the last number, alert "Bye". If they are equal, alert "We close in an hour".
function takesInArray(arr){
if(arr[0] < arr[arr.length - 1]){
    alert("HIEEE")
}else if(arr[0] > arr[arr.length - 1]){
    alert("BYEEE")
}else{
    alert("We close in an hour")
}
}
takesInArray([17, 1, 6, 9, 90])
takesInArray([99, 98, 97,96,95])
takesInArray([1,2,3,4,1])
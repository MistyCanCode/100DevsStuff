//Create an array of movie titles. Loop through the array and each element to the h2.
let movieTitles = ["In it to win it", "All or Nothing", "Fight to the Finish", "Wordwide Cheersmack", "Bring it On"]
//movieTitles.foreach((x, i) => document.querySelector('h1').innerText += movies[i])
for(let i = 0; i < movieTitles.length; i++){
    document.querySelector('h2').innerText += movieTitles[i] + "\n"
}

//Create an array of numbers. Loop through the array and three to each number and replace the old number.
let numbers = [10, 20, 30, 40, 50]
// numbers.foreach((item, i) => {
//     numbers[i] = item + 3
//     console.log(numbers[item])
// })
numbers.forEach((item, i) => {
    numbers[i] = item + 3
})
console.log(numbers)

//Find the average of all the numbers from question three
    let sum = 0
    numbers.forEach((num) => sum += num)
    sum = sum / numbers.length
    console.log(sum)

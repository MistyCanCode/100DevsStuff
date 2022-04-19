//Create a pizza object that has four properties and three methods
let pizza = {}

pizza.size = 'large'
pizza.toppings = ['mushrooms', 'onions', 'green peppers', 'roma tomatoes']
pizza.crust = 'thin'
pizza.sauce = 'creamy garlic'
pizza.cheeze = 'regular'

pizza.estimatedDeliveryTime = function(){
    console.log('Calculating...')
}
pizza.burnMouth = function(){
    console.log("AAAARRRGGGHHHHH!!!!!")
}
pizza.frisbee = function(){
    console.log('YEEeeeettt')
}

let pizza2 = {}

pizza2.size = 'small'
pizza2.toppings = ['pepperoni', 'bacon']
pizza2.crust = 'thin'
pizza2.sauce = 'marinara'
pizza2.cheeze = 'extra'

pizza2.estimatedDeliveryTime = function(){
    console.log('Calculating...')
}
pizza2.burnMouth = function(){
    console.log("AAAARRRGGGHHHHH!!!!!")
}
pizza2.frisbee = function(){
    console.log('YEEeeeettt')
}
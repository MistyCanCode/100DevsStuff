//Create a constructor with 4 properties and 3 methods
function PizzaMachine(size, toppings, crust, sauce, cheese){
    this.size = size
    this.toppings = toppings
    this.crust = crust
    this.sauce = sauce
    this.cheese = cheese
    this.estimatedDeliveryTime = function(){
        console.log('Calculating.....')
    }
    this.burnMouth = function(){
        console.log('AAAARRRRGGGGHHHH!!!!!')
    }
    this.frisbee = function(){
        console.log('YYYEEEeeeeet')
    }
}
let myPizza = new PizzaMachine('large', ['spinach', 'roma tomatoes', 'mushroom', 'green peppers', 'red onion'], 'thin', 'white', 'regular')

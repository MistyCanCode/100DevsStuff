//Create an espresso machine constructor that makes machines with 4 properties and 3 methods

class EspressoMachine{
    constructor(){
        this.color = color
        this.make = make
        this.model = model
        this.price = price
    }
    turnOn(){
        console.log('Good day, I am now on!')
    }
    steam(){
        console.log('ITS SUMMMER SALEEE')
    }
    brew(){
        console.log('Good stuff coming your way!')
    }
}
let gaggia = new EspressoMachine('red', 'Gaggia', 'Classic Pro', 400)
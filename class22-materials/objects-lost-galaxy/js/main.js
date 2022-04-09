//Create a mouse object that has four properties and three methods
let mouse = {}

mouse.brand = 'Logitech'
mouse.color = 'black'
mouse.model = 'MX Ergo'
mouse.wireless = true

mouse.leftClick = function(){
    console.log('LEFT CLIIICCKK')
}
mouse.rightClick = function(){
    console.log('RIGHT CLIIICCCCKK')
}
mouse.scroll = function(){
    console.log('JUMP JUMP JUMP')
}

//car factory
function MakeCar(carMake, carModel, carColor, numOfDoors){
    this.make = carMake;
    this.model = carModel;
    this.color = carColor;
    this.doors = numOfDoors;
    this.honk = function(){
        alert('BEEP BEEP MOTHERFUCKER')
    }
    this.lock = function(){
        alert(`Locked ${this.doors} doors!`)
    }
}
let hondaCivic = new MakeCar('Honda', 'Civic', 'Silver', 4)
let teslaRoadster = new MakeCar('Tesla', 'Roadster', 'Red', 2)
let toyotaPrius = new MakeCar('Toyota', 'Prius', 'Black', 5)

console.log(teslaRoadster.bluetooth) //undefined
//A prototype is another object that is used as a fallback source of properties

MakeCar.prototype.bluetooth = true

console.log(teslaRoadster.bluetooth) //true
console.log(toyotaPrius.bluetooth) //true?? --> YEESS!!
//Example fetch using DnD5eAPI 
document.querySelector('button').addEventListener('click', getFetch)

function getFetch(){
//   const choice = document.querySelector('input').value
    const race = ["dragonborn", "dwarf", "elf", "gnome", "half-elf", "half-orc", "halfling", "human", "tiefling"]
    const charClass = ["barbarian", "bard", "cleric", "druid", "fighter", "monk", "paladin", "ranger", "rogue", "sorcerer", "warlock", "wizard"]

   const raceList = Promise.all(
       race.map(el =>
        fetch(`https://www.dnd5eapi.co/api/races/${el}`).then(res => res.json())
        )
   ).then(races => races.forEach(element => {
       let name = element.name
       let entry = element.traits
       let start = element.starting_proficiencies
       let list = []
       let profList = []
       if(start.length >= 1){let anotherValue = start.forEach(element => { profList.push(element.name)})}
       if(entry.length >= 1){let values = entry.forEach(element => { list.push(element.name)})}
       
        console.log(`race: ${element.name}, age: ${element.age}, alignment: ${element.alignment}, language: ${element.language_desc} speed: ${element.speed}, starting proficiencies: ${profList}, size: ${element.size}, ${element.size_description}, traits: ${list}`)
        let selector = element.name.toLowerCase()
        const p = document.createElement('p')
        if(profList.length < 1){
            p.textContent = `${element.age} ${element.alignment} ${element.language_desc} Speed is ${element.speed}. ${element.size_description} ${name} traits include ${list.toString()}`
        }else if(list.length < 1){
            p.textContent = `${element.age} ${element.alignment} ${element.language_desc} Speed is ${element.speed}. Starting proficiencies include ${profList.toString()}. ${element.size_description}. }`
        }else{
            p.textContent = `${element.age} ${element.alignment} ${element.language_desc} Speed is ${element.speed}. Starting proficiencies include ${profList.toString()}. ${element.size_description} ${name} traits include ${list.toString()}`
        }
        
        document.querySelector(`.${selector}`).appendChild(p)
    }))
   
   const chClassList = Promise.all(
       charClass.map(elem =>
        fetch(`https://www.dnd5eapi.co/api/classes/${elem}`).then(res => res.json())
        )
   ).then(classes => classes.forEach(piece => {
       console.log(piece)
       let valOne = piece.proficiency_choices[0]
       console.log(valOne.from)
       let pickFrom = []
       valOne.from.forEach(element => pickFrom.push(element.name + " "))
       console.log(pickFrom)
       let valTwo = piece.proficiencies
       console.log(valTwo)
       let proficiences = []
       valTwo.forEach(element => proficiences.push(element.name))
       console.log(proficiences)
       let valThree = piece.saving_throws
       console.log(valThree)
       let saving = []
       valThree.forEach(element => saving.push(element.name + " "))
       console.log(saving)
       let valFour = piece.starting_equipment
       console.log(valFour)
       let startingArray = []
       valFour.forEach(element => startingArray.push(element.equipment))
       console.log(startingArray)
       let equipQuantity = []
       valFour.forEach(element => equipQuantity.push(element.quantity))
       console.log(equipQuantity)
       let starting = []
       startingArray.forEach(element => starting.push(element.name))
       console.log(starting)
       let choseFrom = []
       choseFrom = equipQuantity.map((e, i) => e + " " + starting[i])
       console.log(choseFrom)
       let valFive = piece.starting_equipment_options
       console.log(valFive)
       let equipOptions = []
       valFive.forEach(element => equipOptions.push(element.from))
       console.log(equipOptions)
       let from = []
       equipOptions.forEach(element => from.push(element.equipment))
       console.log(from)
       let numOfOptions = []
       valFive.forEach(element => numOfOptions.push(element.choose))
       console.log(numOfOptions)
       let newOptions = []
       equipOptions.forEach(element => newOptions.push(element.name))
       console.log(newOptions)
       let valSix = piece.subclasses
       console.log(valSix)
       let optionNum = piece.starting_equipment_options
       console.log(optionNum)
       let choseNum = piece.proficiency_choices[0].choose
       console.log(choseNum)
       let fromArray = piece.proficiency_choices[0].from
       console.log(fromArray)
       var choices = []
       var profs = []
       var throws = []
       var equipment =[]
       var options = []
       var subclasses = []
       //if(valOne >= 1){let valueOne = valOne.forEach(element => {choices.push(element.choose, element.from)})}
       //console.log(choices)
       
       let valueTwo = valTwo.forEach(element => {profs.push(element.name)})
       let valueThree = valThree.forEach(element => {throws.push(element.name)})
       let valueFour = valFour.forEach(element => {equipment.push(element.name, element.quantity)})
       let valueFive = valFive.forEach(element => {options.push(element.name)})
       let valueSix = valSix.forEach(element => {subclasses.push(element.name)})
       console.log(`name: ${piece.name}, hit die: ${piece.hit_die}, choose -${choseNum}- from: ${pickFrom}, proficiences: ${profs}. Saving throws: ${throws}. Starting Equipment: ${equipment}, starting equipment options: choose -${optionNum}- : ${options}. Subclasses, if any: ${subclasses}`)

       let selection = piece.index
       console.log(selection)
       const p = document.createElement('p')
       p.textContent = `name: ${piece.name}, hit die: ${piece.hit_die}, choose -${choseNum}- from: ${pickFrom}, proficiences: ${profs}. Saving throws: ${throws}. Starting Equipment: ${equipment}, starting equipment options: choose -${optionNum}- : ${options}. Subclasses, if any: ${subclasses}`
       document.querySelector(`.${selection}`).appendChild(p)
   }))

       raceList.catch(err => console.log(`error: ${err}`))
       chClassList.catch(err => console.log(`error: ${err}`))
   
}
//    races.array.forEach(element => {
//        console.log(`age: ${element.age}, alignment: ${element.alignment}, language: ${element.language_desc}, size: ${element.size}, ${element.size_description}, traits: ${element.traits}`)
//        if(element.name.toLowerCase() === document.querySelector('dragonborn').className){
//            const p = document.createElement('p')
//            p.innerHTML = `age: ${element.age}, alignment: ${element.alignment}, language: ${element.language_desc}, size: ${element.size}, ${element.size_description}, traits: ${element.traits}`
//            document.querySelector('dragonborn').appendChild(p)
//        }else if(element.name.toLowerCase() === document.querySelector('dwarf').className){
//         const p = document.createElement('p')
//         p.innerHTML = `age: ${element.age}, alignment: ${element.alignment}, language: ${element.language_desc}, size: ${element.size}, ${element.size_description}, traits: ${element.traits}`
//         document.querySelector('dwarf').appendChild(p)
//        }else if(element.name.toLowerCase() === document.querySelector('elf').className){
//         const p = document.createElement('p')
//         p.innerHTML = `age: ${element.age}, alignment: ${element.alignment}, language: ${element.language_desc}, size: ${element.size}, ${element.size_description}, traits: ${element.traits}`
//         document.querySelector('elf').appendChild(p)
//        }else if(element.name.toLowerCase() === document.querySelector('gnome').className){
//         const p = document.createElement('p')
//         p.innerHTML = `age: ${element.age}, alignment: ${element.alignment}, language: ${element.language_desc}, size: ${element.size}, ${element.size_description}, traits: ${element.traits}`
//         document.querySelector('gnome').appendChild(p)
//        }else if(element.name.toLowerCase() === document.querySelector('half-elf').className){
//         const p = document.createElement('p')
//         p.innerHTML = `age: ${element.age}, alignment: ${element.alignment}, language: ${element.language_desc}, size: ${element.size}, ${element.size_description}, traits: ${element.traits}`
//         document.querySelector('half-elf').appendChild(p)
//        }else if(element.name.toLowerCase() === document.querySelector('half-orc').className){
//         const p = document.createElement('p')
//         p.innerHTML = `age: ${element.age}, alignment: ${element.alignment}, language: ${element.language_desc}, size: ${element.size}, ${element.size_description}, traits: ${element.traits}`
//         document.querySelector('half-orc').appendChild(p)
//        }else if(element.name.toLowerCase() === document.querySelector('halfling').className){
//         const p = document.createElement('p')
//         p.innerHTML = `age: ${element.age}, alignment: ${element.alignment}, language: ${element.language_desc}, size: ${element.size}, ${element.size_description}, traits: ${element.traits}`
//         document.querySelector('halfling').appendChild(p)
//        }else if(element.name.toLowerCase() === document.querySelector('human').className){
//         const p = document.createElement('p')
//         p.innerHTML = `age: ${element.age}, alignment: ${element.alignment}, language: ${element.language_desc}, size: ${element.size}, ${element.size_description}, traits: ${element.traits}`
//         document.querySelector('human').appendChild
//        }else{
//         const p = document.createElement('p')
//         p.innerHTML = `age: ${element.age}, alignment: ${element.alignment}, language: ${element.language_desc}, size: ${element.size}, ${element.size_description}, traits: ${element.traits}`
//         document.querySelector('tiefling').appendChild(p)
//        }
//    })
//   fetch(url)
//       .then(res => res.json()) // parse response as JSON
//       .then(data => {
//        console.log(data)
//        data.subclasses.array.forEach(element => {
//            console.log(element.name)
//            //ceate an li
//            const li = document.createElement('li')
//            //add test to li
//            li.textContent = obj.name 
//            //append the li to the ul
//             document.querySelector('ul').appendChild(li)
//         })
//     })



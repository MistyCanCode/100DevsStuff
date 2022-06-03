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
       //console.log(valOne.from)
       let pickFrom = []
       valOne.from.forEach(element => pickFrom.push(element.name.replace('Skill:', '')))
       let valTwo = piece.proficiencies
       let proficiences = []
       valTwo.forEach(element => proficiences.push(element.name))
       let valThree = piece.saving_throws
       let saving = []
       valThree.forEach(element => saving.push(element.name + " "))
       let valFour = piece.starting_equipment
       let startingArray = []
       valFour.forEach(element => startingArray.push(element.equipment))
       let equipQuantity = []
       valFour.forEach(element => equipQuantity.push(element.quantity))
       let starting = []
       startingArray.forEach(element => starting.push(element.name))
       let startingEquipment = []
       startingEquipment = equipQuantity.map((e, i) => e + " " + starting[i] + " ")
       let valFive = piece.starting_equipment_options
       let howMany = []
       valFive.forEach(element => howMany.push(element.choose))
       console.log(howMany)
       let equipOptions = []
       valFive.forEach(element => (equipOptions.push(element.from.forEach(el =>equipOptions.push(el)))))
       let newEquipOptions = []
       for(let i = 0; i < equipOptions.length; i++){
           if(equipOptions[i] !== undefined){
                newEquipOptions.push(equipOptions[i])
           }
       }
       console.log(newEquipOptions)
       let eOptions = []
       newEquipOptions.forEach(element => eOptions.push(element.equipment_option))
       let newEOptions = []
       for(let i = 0; i < eOptions.length; i++){
           if(eOptions[i] !== undefined){
               newEOptions.push(eOptions[i])
           }
       }
       console.log(newEOptions)
       let newEOptionsNum = []
       newEOptions.forEach(el => newEOptionsNum.push(el.choose))
       console.log(newEOptionsNum)
       let newoptionsfrom = []
       newEOptions.forEach(element => (newoptionsfrom.push(element.from)))
       console.log(newoptionsfrom)
       let optionnames = []
       for(let i = 0; i < newoptionsfrom.length; i++){
           if(newoptionsfrom[i] !== undefined){
               optionnames.push(newoptionsfrom[i].equipment_category)
           }
       }
       console.log(optionnames)
       let newoptionnames = []
       optionnames.forEach(el => newoptionnames.push(el.name))
       console.log(newoptionnames)
       let anotherOption = []
       anotherOption = newEOptionsNum.map((e,i) => e + " " + newoptionnames[i] + " ") 
       console.log(anotherOption)
       let from = []
       newEquipOptions.forEach(element => (from.push(element.equipment)))
       let fromEquip = []
       for(let i = 0; i < from.length; i++){
           if(from[i] !== undefined){
               fromEquip.push(from[i])
           }
       }
       console.log(fromEquip)
       let equipName = []
       fromEquip.forEach(element => (equipName.push(element.name)))
       console.log(equipName)
       let numOfOptions = []
       valFive.forEach(element => numOfOptions.push(element.choose))
       console.log(numOfOptions)
       let newOptions = []
       equipOptions.forEach(element => newOptions.push(element))//.name
       console.log(newOptions)
       let startingOptions = []
       startingOptions = numOfOptions.map((e,i) => e + " " + equipName[i] + " ")
       console.log(startingOptions)
       let valSix = piece.subclasses
       console.log(valSix)
       let optionNum = piece.starting_equipment_options
       console.log(optionNum)
       let choseNum = piece.proficiency_choices[0].choose
       console.log(choseNum)
       var profs = []
       var throws = []
       var options = []
       var subclasses = []
       //if(valOne >= 1){let valueOne = valOne.forEach(element => {choices.push(element.choose, element.from)})}
       console.log(choices)
       
       valTwo.forEach(element => {profs.push(element.name)})
       valThree.forEach(element => {throws.push(element.name)})
       valFive.forEach(element => {options.push(element.name)})
       valSix.forEach(element => {subclasses.push(element.name)})
       console.log(`name: ${piece.name}, hit die: ${piece.hit_die}, choose -${choseNum}- from Skills: ${pickFrom}. Proficiences: ${profs} Saving throws: ${throws} Starting Equipment: ${startingEquipment}, starting equipment options, choose: ${startingOptions}, ${anotherOption} Subclasses, if any: ${subclasses}`)

       let selection = piece.index
       console.log(selection)
       const p = document.createElement('p')
       p.textContent = `Hit die: ${piece.hit_die}`
       const p2 = document.createElement('p')
       p2.textContent = `Choose -${choseNum}- from: ${pickFrom}` 
       const p3 = document.createElement('p')
       p3.textContent = `Proficiences: ${profs}`
       const p4 = document.createElement('p')
       p4.textContent = `Saving throws: ${throws}`
       const p5 = document.createElement('p')
       p5.textContent = `Starting Equipment: ${startingEquipment}`
       const p6 = document.createElement('p')
       p6.textContent = `Starting equipment options, choose: ${startingOptions}, ${anotherOption}`
       const p7 = document.createElement('p')
       if(subclasses.length < 1){
           p7.textContent = `Subclasses, if any: none`
       }else{
           p7.textContent = `Subclasses, if any: ${subclasses}`
       }
       document.querySelector(`.${selection}`).appendChild(p)
       document.querySelector(`.${selection}`).appendChild(p2)
       document.querySelector(`.${selection}`).appendChild(p3)
       document.querySelector(`.${selection}`).appendChild(p4)
       document.querySelector(`.${selection}`).appendChild(p5)
       document.querySelector(`.${selection}`).appendChild(p6)
       document.querySelector(`.${selection}`).appendChild(p7)
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



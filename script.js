const radii = [2,3,5,6]

function calculateArea(){
    for(let i = 0;i<radii.length;i++){
        const area = radii[i] * radii[i] * Math.PI
        console.log(`my radius is ${radii[i]} and my area is ${area}`)
    }
}calculateArea();


let names = ['jane','alice','blue']

function greet(){
    for(let i = 0;i<names.length;i++){
      const namesB= names[i]
      console.log(`hello ${namesB}`)
        
    }
}greet();

let people = ['tom','hassan','jerry']

function payPeople(){
    for(let i = 0;i<people.length;i++){
        const paying = people[i]
        console.log(`pay ${paying}`)
    }
    setTimeout(function(){
        console.log('paid')
    },10000)
}payPeople();


const numbers = [9,8,7,6,5]
function displayNumbers(){
    const numbers = [1,5,6,7,9]
    console.log(`the flow ${numbers}`)
}displayNumbers();

// console.log(`the flow ${numbers}`)

const pets = ['dog','cat','hen']

function displayPets(){
    const pets = ['sheep','goat']
    console.log(`My ${pets}`)
}displayPets();
// console.log(`My ${pets}`)
 function greet (){
const name = ['alice']
    console.log(`hello ${name}`)
 setTimeout(function(){
    console.log('timer')
 },5000)
 }greet()

 
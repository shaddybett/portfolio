const radii = [3,4,5,6,8]

function calculateArea(){
    for(let i = 0;i<radii.length;i++){
        const area = Math.PI *radii[i] *radii[i]
        console.log(`The radius is ${radii[i]} and the area is ${area}`)
    }
}calculateArea();

const areaCircle = function(){
    const radiuses = [6,8,9,10]
    for(let i = 0;i<radiuses.length;i++){
        const theArea = Math.PI * radiuses[i] *radiuses[i]
        console.log(`radius is ${radiuses[i]} and area is ${theArea}`)
    }
};console.log(areaCircle())

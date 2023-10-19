const radii = [2,5,7,6]

function calculateCircumference(){
    for(let i = 0;i<radii.length;i++){
        const circleCircumference = radii[i]*2 * Math.PI;
        console.log(`the radii is ${radii[i]} and the circumference is ${circleCircumference}`)
    }
}calculateCircumference();

function calculateArea(){
    
}

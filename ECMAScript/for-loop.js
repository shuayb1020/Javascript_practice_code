'use strict';

let teachers =[
    {name:"ken", comment:"Amazing",rating:4},
    {name:"james", comment:"Astounding",rating:3},
    {name:"Dave", comment:"Astonishing",rating:3},
    {name:"John", comment:"Accelerating",rating:2},
    {name:"Andrew", comment:"Arm-chair-ing",rating:3},
    {name:" Elizabeth", comment:"Accepting",rating:5},
    {name:"Nick", comment:"Automating",rating:6},
    {name:"Sarah", comment:"Aplifying",rating:7},
    {name:"Alena", comment:"Appending",rating:8},
];

// using forEach loop(introduced in ES5)
// forEach does not allow break

teachers.forEach(teacher=>{
    console.log(teacher.name)
    if (teacher.name === 'Nick'){
        console.log(teacher.rating)
        
    }
    
});

// using for...of

for (const teacher of teachers) {
    console.log(teacher.name)
    if (teacher.name === 'Nick'){
        console.log(teacher.rating)
        break
    }
    
}
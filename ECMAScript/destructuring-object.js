'use strict';

let toybox = {item1:"car", item2:"ball", item3:"frisbee"};

let { item1,item2}=toybox;



console.log(item1)
// another example
let thingsTodo={
    morning: "Exercise",
    afternoon: "work",
    evening: "code",
    night: ["sleep","dream"]
}

let{morning,afternoon} = thingsTodo;
// the value can be changed
morning = 'eat'
console.log(morning,'-', afternoon)

// normal way of writing
// let uniStudent = student =>{
//     console.log(`${student.name} from ${student.university}`)
// }




// improving using destructuring as a function argument
// let uniStudent = student =>{
//     let {name,university}=student
//     console.log(`${name} from ${university}`) 
// }

// destructuring can also be done while taking an argument

let uniStudent = ( {name,university}) =>{
    
    console.log(`${name} from ${university}`) 
}
uniStudent({
    name:'Shuayb',
    university: 'TECH-U'
});
'use strict';

let classroom = new Map();



    let stevenJ ={ name:'Steven', age: 22},
        sarah = {name: 'Sarah', age: 23},
        stevenS ={ name:'Steven', age: 22};

// adding item to the map using set method that takes two argumrnts(a key and a value)

classroom.set('stevenJ', stevenJ);
classroom.set('sarah', sarah);
classroom.set('stevenS', stevenS);

// checking the size of the map

console.log('classroom size:', classroom.size)

if (classroom.has('stevenJ')) console.log('stevenJ is in the classroom')
if (classroom.has('sarah')) console.log('sarah is in the classroom')
if (classroom.has('stevenS')) console.log('stevenS is in the classroom')

// using get() method to get the properties and values of item

console.log('sarah:', classroom.get('sarah'));

// to empty object without destroying the memory

// classroom.clear();
// console.log('classroom size after empty:', classroom.size)
// it return in the from of array where the key is index 0 and value is 1.

for(let student of classroom){
    console.log(`${student[0]}:${student[1].name} is ${student[1].age} years old`)
}
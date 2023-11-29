'use strict';

let classroom = new Set();

let stevenJ ={ name:'Steven', age: 22},
    sarah = {name: 'Sarah', age: 23},
    stevenS ={ name:'Steven', age: 22}
//adding items to the set ussing add() method; 

classroom.add(stevenJ);
classroom.add(sarah);
classroom.add(stevenS);

// checking if the items are present in the set 
if (classroom.has(stevenJ)) console.log('stevenJ is in the classroom')
if (classroom.has(sarah)) console.log('sarah is in the classroom')
if (classroom.has(stevenS)) console.log('stevenS is in the classroom')

// checking the size of the set using '.size' method
console.log(' classroom size: ',classroom.size);

// removing item from the list using ".delete"

console.log(classroom.delete(sarah));
console.log(' classroom size after removing one item: ',classroom.size);

// creating array from an exsiting set:

let arrayOfStudents = Array.from(classroom);
console.log(arrayOfStudents)
// creating  set from an exsiting array:

let set =new Set(arrayOfStudents);
console.log(set.size)

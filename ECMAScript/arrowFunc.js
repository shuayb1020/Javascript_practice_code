'use strict';


var person = function (data) {
    for (const key in data) {
        this[key] = data[key];
    }
    this.getKeys = () => {
        return Object.keys(this);
    }
}
var Alena = new person ({name: 'Alena', role: 'Teacher'});
console.log('Alena\'s Keys:' ,Alena.getKeys()); // "this" refer to Alena object

var getKeys = Alena.getKeys;
console.log(getKeys()); // "this" refer to Alena object


// using default value

function greet(name = 'Guil', timeOfDay = 'Day'){
    console.log(`Good ${timeOfDay}, ${name}!`)
}
greet(undefined,'Morning')
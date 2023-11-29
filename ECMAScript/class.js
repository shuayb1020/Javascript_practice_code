class Student{
    constructor({name,age, interestLevel=5}={}){
        this.name = name;
        this.age = age;
        this.interestLevel= interestLevel;
        // addding grade suing defaut map
        this.grades = new Map();
    }
}

let joey = new Student({name:'Joey', age: 25,interestLevel:3});
// joey.grades.set('History','C');
// joey.grades.set('Math','A');

  
let Jgrades = {History: 'D', Math:'F'}
joey.grades.set('Jgrades', Jgrades);
console.log(Array.from(joey.grades))

class Person{
    dance(){
        const dances = [
            'waltz',
            'tango',
            'mambo',
            'foxtrot'
        ];
        console.log(`${this.name} is doing the ${dances[Math.floor(Math.random()*dances.length)]}!`)
    }
    constructor({name, age, eyeColor='brown'}={}){
        this.name = name;
        this.age = age;
        this.eyeColor= eyeColor;
    }
}

class Student extends Person{
    dance(traditional){
        if (traditional){
            super.dance();
            return;
        }
    const dances = [
        'lyrical',
        'tab',
        'ballet',
        'jazz'
    ];
    console.log(`${this.name} is doing the ${dances[Math.floor(Math.random()*dances.length)]}!`)
    }
    constructor({name,age, interestLevel=5}={}){
        super(name,age);
        this.name = name;
        this.age = age;
        this.interestLevel= interestLevel;
        // addding grade suing defaut map
        this.grades = new Map();
    }
}


let stevenJ = new Student ({name:'Steven', age:25})
console.log(stevenJ)
stevenJ.dance(false)
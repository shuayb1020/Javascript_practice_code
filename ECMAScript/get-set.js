class Student{

    get name(){
        return `${this.firstName} ${this.lastName}`
    }

    set changeName(input){
        let Name = input.split(' ');
        this.firstName =Name[0];
        this.lastName = Name[1];
    }


    constructor({firstName, lastName,age, interestLevel =  5}){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.interestLevel = interestLevel;
    }
    
}
let shuayb = new Student({firstName:"Shuayb", lastName:"Opeyemi", age:22})
console.log(shuayb.name)
shuayb.changeName = 'Shuayb Yakeen'
console.log(shuayb.name)
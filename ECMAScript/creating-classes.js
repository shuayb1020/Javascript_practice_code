// super class

class Holiday{
    constructor(destination,days){
        this.destination = destination;
        this.days = days;
    }
    info(){
        console.log(`${this.destination} will take ${this.days} days.`)
    }
}


// sub class
// creating the subclass that extend the properties of the super class 
class Expedition extends Holiday{
    constructor(destination,days,gear){
        // usin the defined features of the super class
        super(destination, days)
        this.gear = gear;
    }
    // creating a new method of the sub class usin the method of the super class
    info() {
        super.info();
        console.log(`Bring your ${this.gear.join(" and your ")}`)
    }
};
// defining a new object as an instance of the sub class.
const newTrip = new Expedition("Everest", 30,['sunglasses','Flags','camera']);
newTrip.info()


class Addition{
    constructor(fNum,lNum,sum){
        this.fNum = fNum;
        this.lNum = lNum;
        this.sum = sum;
    }
    operate(){
        this.sum = this.fNum + this.lNum;
        console.log(` the sum of ${this.fNum} and ${this.lNum} is ${this.sum}`)
    }
}

class Average extends Addition{
    constructor(fNum,lNum,sum,avg,a){
        super(fNum,lNum,sum);
        this.avg= avg;
        this.a = 2;
        
    }
    average(){
        super.operate()
        this.avg = this.sum / this.a;
        console.log(`The average of ${this.fNum} and ${this.lNum} is ${this.avg}`)
        console.log(isNaN(this.sum))
    }
}

const num = new Average(4,3);
num.average()
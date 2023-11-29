class Bird {
    static changeColor(color){
        this.color = color;
    }
    constructor({ color = 'red'} = {}){
        this.color = color;
    }
}


let redBird = new Bird;
console.log(redBird.color);
Bird.changeColor.call(redBird,'blue')
console.log(redBird.color);
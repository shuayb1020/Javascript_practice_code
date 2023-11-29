function alertRandom() {
    var randomNumber = Math.floor(Math.random()*6) + 1;
    alert(randomNumber);   
}
alertRandom();
// function expression. It is also called and anonymous function
var alertRandom = function() {
    var randomNumber = Math.floor(Math.random()*6) + 1;
    alert(randomNumber); 
};
// alertRandom()
// creating using the reurn keyword
function getRandom() {
    var randomNumber = Math.floor(Math.random()*6) + 1;
    return randomNumber;   
}
// document.write(getRandom())
console.log(getRandom());
// fucntion with parametre
function getRandomNumber(upper) {
    var randomNumber = Math.floor(Math.random()* upper) + 1;
    return randomNumber; 
}
var brake =  "<br/>"
// document.write(getRandomNumber(3))
// function to calcuate the area of a rectangle
function area(lenght, breadth, unit) {
    var Area = lenght * breadth;
    return Area + unit;
    
}
document.write(area(2,3," ft"));
function getRandomValue(lower, upper) {
    if (isNaN(lower) || isNaN( upper)) {
       throw new Error ('Both must be numbers') 
    
    }
    var randomNumber = Math.floor(Math.random()*upper) + lower
    return randomNumber;
}

console.log(getRandomValue(1,3));
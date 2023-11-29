// var dice = {
//     side:6,
//     roll:function() {
        // var side =6;
//         var randomNumber = Math.floor(Math.random()* this.side) + 1;
//         return (randomNumber);
//     }
// }

// changing to constructor form
function Dice (side){
    this.side = side;
}

// using prototype function

Dice.prototype.roll=function() {
    var randomNumber = Math.floor(Math.random()* this.side) + 1;
    return randomNumber;
}
var dice1 = new Dice(6);
var dice = new Dice(10);
console.log(dice1.roll===dice.roll);



function printNumber(number) {
    var placeholder = document.getElementById("placeholder");
    placeholder.innerHTML = number;
}
var button = document.getElementById("button");
button.onclick = function(){
    var result =dice.roll();
    printNumber(result);
}  
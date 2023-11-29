// var answer = prompt('What programming language is the name of a gem? ');
// if (answer.toLocaleUpperCase() == 'RUBY') {
//     document.write("<p> That's right</p>");
// }else{
//     document.write("<p> That's wrong</p>");
    
// }
// random number guess
// var correctGuess = False;
var randomNumber = Math.floor(Math.random()*6) + 1;
alert(randomNumber)
var guess = prompt("I am thinking of a number between 1 and 6. What is the number?");
var correctGuess = false;

if (randomNumber===parseInt(guess)) {
    correctGuess = true;
} 
if (correctGuess) {
    document.write("You are right!");
} else if (parseInt(guess) < randomNumber) {
    document.write("The guessednumber is smaller than the number")
}else if (parseInt(guess) > randomNumber) {
    document.write("The guessed number is bigger than the  number ")
    
}else {
    document.write('<p>You are wrong!. The number was ' + randomNumber + '</p>');
}

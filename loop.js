function randomNumber(upper) {
    return Math.floor(Math.random()* upper) + 1;
}
var counter = 0;
while (counter < 3) {
    var randomNum = randomNumber(6);
    document.write(randomNum + ' '); 
    counter += 1;
    
}

// guessing 

var upper = 10000;
var randomNumber = getRandomNumber(upper);
var guess;
var attempts = 0;
function getRandomNumber(upper) {
    return Math.floor(Math.random()* upper) + 1; 
}

while (guess !== randomNumber ) {
    guess = getRandomNumber(upper)
    attempts += 1;
}
document.write("<p>The random number was: " + randomNumber + "<p>");
document.write("<p> It took the computer "+ attempts + "attempts to get it riht.</p>")
// do while loop
var randomNumber = getRandomNumber(10);
var guess;
var guessCount  = 0;
var correctGuess = false;
function getRandomNumber(upper) {
    return Math.floor(Math.random()* upper) + 1; 
}
// do {
//     guess = prompt('I am thinking of a number between 1 and 10');
//     guessCount += 1;
//     if (parseInt(guess) === randomNumber) {
//         correctGuess = true;

//     }
// } while (!correctGuess)
// document.write("<h1> You guessed the number!!!")
// document.write("It took you" + guessCount + "to guess the number" + randomNumber)

// while loop verssion of the guessing game!!!!

while (guessCount < 3) {
    guess = prompt('guess number ');
    guessCount += 1;
    if (parseInt(guess) === randomNumber) {
            correctGuess = true; 
            break;
    }
    
}
if (correctGuess) {
    document.write("<h1> You guessed the number!!!")
    document.write("It took you" + guessCount + "to guess the number" + randomNumber)    
}else{
    document.write("you reached the limit");

}


// for loop
html =' '
for (var i = 1; i <= 10; i++){
    html += '<div>' + i + '</div>';
    
}
document.write(html)
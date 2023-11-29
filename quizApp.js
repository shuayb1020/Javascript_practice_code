var  num_of_question = 0;
var one = prompt("What is hypertext markup language?");
if (one.toLocaleUpperCase() === 'HTML') {
    num_of_question += 1
    alert("you have answred "+ num_of_question + 'correctly');
}
var two = prompt("what is cascading atyle sheet?");
if (two.toLocaleUpperCase()==='CSS') {
    num_of_question +=1
    alert("you have answred "+ num_of_question + 'correctly');
}
var three = prompt("what is javascript?");
if (three.toLocaleUpperCase()==='JS') {
    num_of_question +=1
    alert("you have answred "+ num_of_question + 'correctly');
}
var four = prompt("what is the common backend language for web?");
if (four.toLocaleUpperCase()==='PHP') {
    num_of_question +=1
    alert("you have answred "+ num_of_question + 'correctly');
}
var five = prompt("mouse is used for what?")
if (five.toLocaleUpperCase()==='POINTING') {
    num_of_question +=1
    alert("you have answred "+ num_of_question + 'correctly');
}
if (num_of_question === 5) {
    document.write("you got a  gold crown")
}else if (num_of_question === 4){
    document.write("you got a silver crown ")
}else if (num_of_question ===3 || num_of_question === 2 || num_of_question ===1){
    document.write("you got a bronze crown")
}else{
    document.write("<h2> You answered no question. You got nothing</h2>")
}
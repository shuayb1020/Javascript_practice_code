var playList  = [
    ['I did it my way','Frank Sinatra'],
    ['Respect','Aretha Franklin'],
    ['Imagine','John Lennon'],
    ['Born to run','Bruce Springsteen']
];

function print(message){
    document.write(message);
}
function printList(lists) {
    var listHTML = '<ol>';
   for(var i = 0; i < lists.length;i++) {
    listHTML +='<li>'+ lists[i][0] +' by '+ lists[i][1] +  '</li>';
   }
   listHTML += '</ol>';
   print(listHTML);
}
printList(playList);

// quiz using two dimensional array



var questions = [
    ['How many states are in Nigeria?', 36],
    ['How many continents in the world?', 7],
    ['How many months are in a year?', 12]
];
var correctQuestion =[];
var wrongQuestion = [];
var Correct = 0;
var question;
var answer;
var response;
var html;
function print(message){
    document.write(message);
}
function printResult(quest) {
    var listHTML = '<ol>';
   for(var i = 0; i < quest.length;i++) {
    listHTML +='<li>'+ quest[i]+  '</li>';
   }
   listHTML += '</ol>';
   print(listHTML);
}

for(var i =0; i < questions.length;i++) {
    question = questions[i][0];
    answer = questions[i][1];
    response = parseInt(prompt(question));
    if (response === answer) {
        Correct ++;
        correctQuestion.push(question);
    }else{
        wrongQuestion.push(question);
    }

    }
    html = "You got " + Correct + " right!"

    
    print('<h3>'+ 'correctly answered questions are:' + '</h3>');
    printResult(correctQuestion);
    print('<h3>'+'wrongly answered questions are:' + '</h3>');
    printResult(wrongQuestion)
    
    

 


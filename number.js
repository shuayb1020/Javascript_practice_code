document.write("<h1> <b> Time Calculator </b> </h1>")
var secondsPerMin = 60;
var minsPerHour = 60;
var hoursPerDay = 24;
var daysPerweek = 7;
var weekPerYear = 52;
// var monthsPerYear = 12;
var secondsPerDay = secondsPerMin * minsPerHour *hoursPerDay;
document.write('There are ' + secondsPerDay + ' seconds per day');
var yearsAlive = secondsPerDay * daysPerweek * weekPerYear * 10;
document.write('I have been alive for '+ yearsAlive + 'seconds')


var HTMlBadges = prompt ('How many number of HTML badges do you have? ')
var CSSBadges = prompt ('How many number of CSS badges do you have?')
var totalBadges = parseInt( HTMlBadges) + parseInt(CSSBadges);
document.write('you have ' + totalBadges + 'total badges')


var dieRoll = Math.floor(Math.random()*6) + 1
alert(dieRoll)
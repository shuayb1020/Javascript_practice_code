var shoppingList = ['carrots','egg', 'eggs' ];
// alert (shoppingList[1]);
document.write(shoppingList.length);
shoppingList[shoppingList.length]='book';
document.write(shoppingList[3]); 
document.write("<br>")
// adding elements to the array using push method
var number = [1, 2, 3, 4, 5, 6,];
var total = number.push(7)
document.write(number[5])
// adding items to the begining of an array  
number.unshift(-2,-1,0);
document.getElementById('root').innerHTML="My Music Playlist";
var playList= [ ];
playList.push ('Na me do am', 'imagine');
document.write (playList);

// removing last items from Array using pop
var last = number.pop();
document.write(number);
document.write("<br>");
document.write(last);
document.write("<br>");
// removing first items from Array using shift
number.shift();
document.write(number);
document.write("<br>");
// iterating throgh array
for ( var i = 0; i < number.length; i++) {
    // number = number[i];
    document.write(number[i]);
    
}

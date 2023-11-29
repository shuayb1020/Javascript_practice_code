'use strict';

let widgets = ['widget1','widget2','widget3','widget4','widget5'];

// using destructuring to apply the 1st 3 items to new variable
//and using spread operator to keep others in another array
let [a,b,c,...d]= widgets;
console.log(b)

// anoother example

let [,firstMountain] = ['Everest', 'Fish Tail', 'Annapurna']
console.log(firstMountain)
 
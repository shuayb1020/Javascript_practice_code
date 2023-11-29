// using start with to search string

'use strict';
let strToSearch = 'a-really-long-hyphenated-string';
// using regular expression to  check the string in the first position 
console.log(/^a-really/.test(strToSearch));

// using indexOf to check for the position of a string
console.log(strToSearch.indexOf('a-really')===0);

// using start
console.log(strToSearch.startsWith('a-really'));

/* ends with */


// using regular expression to test for the last string
console.log(/hyphenated-string$/.test(strToSearch));

// using indexOf

console.log(strToSearch.indexOf('hyphenated-string')=== strToSearch.length - 'hyphenated-string'.length);
//  ends with

console.log(strToSearch.endsWith('hyphenated-string'))

/* include method*/

// regular expression to check whether a string is included in the string:

console.log(/long/.test(strToSearch));

// indexof
console.log(strToSearch.indexOf('long'))

//using incudes
console.log(strToSearch.includes('long'))
/* NB:
    adding a 2nd parameter to the start with method to specify the index to start the search from 
    but the ends with method specify the maximum number of characters to use for the search*/
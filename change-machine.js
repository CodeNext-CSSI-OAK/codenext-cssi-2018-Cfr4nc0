// Author: Carmen Franco


let readline = require('readline-sync');

console.log('-------------------------------------------------- ');
console.log('I am a change machine :) ');
let cents = readline.question('Please enter cents as a positive integer:');

let x = cents;

let a = Math.floor((x/25));
console.log(a + " quarters ");

let b = (x % 25);
// console.log(b);

let c = Math.floor(b/10);
console.log(c + " dimes ");

let d = (b % 10);
// console.log(d);

let e = Math.floor(d/5);
console.log(e + " nickels ");

let f = (d%5);
// console.log(f);

let g = (f/1);
console.log(g + " pennies");
console.log('-------------------------------------------------- ');

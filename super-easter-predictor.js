
let readline = require('readline-sync');

let year = Number(readline.question('Please enter a year bigger than 1582:'));

let y = year;

let a = (y % 19);
let b = Math.floor (y/100);
let c = (y % 100);
let d = Math.floor(b/4);
let e = (b % 4);
let f = Math.floor ((b+8)/25);
let g = Math.floor ((b - f + 1) / 3);
let h = Math.floor ((19 * a + b - d - g + 15)% 30);
let i = Math.floor(c / 4);
let k = Math.floor(c % 4);
let r = Math.floor((32 + 2 * e + 2 * i - h - k )% 7);
let m = Math.floor(( a + 11 * h + 22 * r)/ 451);
let n = Math.floor((h + r - 7 * m + 114)/ 31);
let p = Math.floor((h + r - 7 * m + 114)% 31);

console.log("Easter will be on/was " + n + "/" + (p+1));
console.log("Have a nice day!");

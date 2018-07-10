// Author: Carmen Franco

let y = 2003;
console.log("the value of y is" + y);

let a= (y % 19);
console.log("the value of a is" + a);

let b= Math.floor (y/100);
console.log("the value of b is" + b);

let c = (y % 100);
console.log("the value of c is" + c);

let d = Math.floor(b/4);
console.log("the value of d is" + d);

let e = (b % 4);
console.log("the value of e is" + e);

let f = Math.floor ((b+8)/25);
console.log("the value of f is" + f);

let g = Math.floor ((b - f + 1) / 3);
console.log("the value of g is" + g);

let h = Math.floor ((19 * a + b - d - g + 15)% 30);
console.log("the value of h is" + h);

let i = Math.floor(c / 4);
console.log("the value of i is" + i);

let k = Math.floor(c % 4);
console.log("the value of k is" + k);

let r = Math.floor((32 + 2 * e + 2 * i - h - k )% 7);
console.log("the value of r is" + r);

let m = Math.floor(( a + 11 * h + 22 * r)% 451);
console.log("the value of m is" + m);

let n = Math.floor((h + r - 7 * m + 114)/ 31);
console.log("the value of n is" + n);

let p = Math.floor((h + r - 7 * m + 114)% 31);
console.log("the value of p is" + p);

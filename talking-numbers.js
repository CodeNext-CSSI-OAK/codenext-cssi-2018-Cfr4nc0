// Author: Carmen Franco
var readline = require("readline-sync");

/******************************************************************************
                                  printGreeting()

  Prints a simple greeting. Be as creative as you want here. Be sure to include
  your name as the author!
*******************************************************************************/

function printGreeting() {
console.log('***********Hello! Welcome to talking numbers.*************');
//let num = readline.question('     ***********A number from 1 - 9 ***********');
}
printGreeting();

/******************************************************************************
  This function takes a number between 1 and 9 (inclusive) as input and returns
  that same number in word form. If the number is not between 1 and 9, the
  function returns an empty string, which is just "".

  Examples:
  sayZeroNine(5) → "five"
  sayZeroNine(8) → "eight"
  sayZeroNine(13) → ""
*******************************************************************************/
  //let num = readline.question('     ***********A number from 1 - 9 ***********');
function sayZeroNine(num) {
//  let num = readline.question('     ***********A number from 1 - 9 ***********');


  if(num === 9){
    return "nine";
  } else if( num === 8) {
    return "eight";
  } else if( num === 7) {
    return "seven";
  } else if( num === 6) {
    return "six";
  } else if( num === 5) {
    return "five";
  } else if( num === 4) {
    return "four";
  } else if( num === 3) {
    return "three";
  } else if( num === 2) {
    return "two";
  }else if( num === 1) {
      return "one";
}
else {
  return "error";
}
}

/******************************************************************************
  This function takes a number between 10 and 19 (inclusive) as input and returns
  that same number in word form. If the number is not between 10 and 19, the
  function returns an empty string, which is just "".

  Examples:
  sayTenNineteen(11) → "eleven"
  sayTenNineteen(15) → "fifteeen"
  sayTenNineteen(25) → ""
*******************************************************************************/
function sayTenNineteen(num) {

  if(num === 19){
    return "nineteen";
  } else if( num === 18) {
    return "eightteen";
  } else if( num === 17) {
    return "seventeen";
  } else if( num === 16) {
    return "sixteen";
  } else if( num === 15) {
    return "fifteen";
  } else if( num === 14) {
    return "fourteen";
  } else if( num === 13) {
    return "thirteen";
  } else if( num === 12) {
    return "twelve";
  }else if( num === 11) {
      return "eleven";
  }else if( num === 10) {
      return "ten";
  } else {
  return "error";
  }
  }


/******************************************************************************
  This function takes a number between 2 and 9 (inclusive) as input and returns
  that same number in word form, but in the tens place. If the number is not
  between 2 and 9, the function returns an empty string, which is just "".

  Examples:
  sayTwentyNinety(5) → "fifty"
  sayTwentyNinety(8) → "eighty"
  sayTwentyNinety(1) → ""
*******************************************************************************/
function sayTwentyNinety(num) {

  if(num === 90){
    return "ninety";
  } else if( num === 80 ) {
    return "eighty";
  } else if( num === 70) {
    return "seventy";
  } else if( num === 60) {
    return "sixty";
  } else if( num === 50) {
    return "fifty";
  } else if( num === 40) {
    return "fourty";
  } else if( num === 30) {
    return "thirty";
  } else if( num === 20) {
    return "twenty";
  } else {
  return "error";
  }
  }


/******************************************************************************
  This function calls the three functions above to convert an entire number (num)
  into word form, then returns that word. This function should be able to handle
  numbers from 0 to 9999 (inclusive).

  To do this, first declare a variable named wordForm at the top of the
  function. This will be the string you will return at the end of the function,
  so initialize it to an empty string at the start: var wordForm = "";

  Your first conditional statement should check if num is equal to 0. If so,
  set wordForm to the string "zero".

  Otherwise, build the word form of num by chopping num into thousands,
  hundreds, tens, and ones. Convert each place value number to a word by calling
  the three functions above, and concatenate each word with the wordForm variable.

  At the very end of your function it should simply return wordForm.

  Examples:
  sayNumber(0) → "zero"
  sayNumber(9999) → "nine-thousand nine-hundred ninety-nine"
  sayNumber(75) → "seventy-five"
*******************************************************************************/
function sayNumber(num) {
  if(num === 0){
    let wordForm = "Zero";
  } else {
    let ones = num % 10;
    let tens = Math.floor(num / 10) % 10;
    let hundreds = Math.floor(num /100) % 10;
    let thousands = Math.floor(num /1000) % 10;
    if(thousands > 0) {
      wordForm += sayOneNine(thousands) + "-thousand";
    }
    if (hundreds > 0) {
      wordForm += sayOneNine(hundreds) + "-hundred";
    }
    if (tens === 1){
      wordForm += sayTenNineteen(10 + ones);
    } else {
      wordForm += sayTwentyNinety(tens);
    }
    if(ones > 0 && tens !== 1){
      if(tens >= 2){
        wordForm += "-";
      }
      wordForm += sayOneNine(ones);
    }
  }
  return wordForm;
}

/******************************************************************************
  This function simply runs your program. At the very least it should greet the
  user, ask the user to enter a number between 0 and 9999, then print that
  number in word form.
*******************************************************************************/
function run() {
 let num = readline.question('     *********** Type in a number ***********');
console.log(sayZeroNine(6));
console.log(sayTenNineteen(10));
console.log(sayTwentyNinety(80));
//printGreeting();
}

// Run the program!
run();

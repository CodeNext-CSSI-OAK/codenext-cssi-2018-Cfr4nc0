// Author: FirstName LastName
let readline = require("readline-sync");

console.log();
console.log("*****************************************************************");
console.log("                          HAUNTED HOUSE");
console.log("                 A game by FirstName LastName");
console.log("*****************************************************************");
console.log("You are standing in front of a spooky haunted house.");
console.log("You hear what sounds like screaming coming from inside the house.");
let enterHouse = readline.question("Will you enter the house? (yes or no) ");
if(enterHouse === "y" || enterHouse === "yes") {
  let playDoge = readline.question(" You see a doge. Will you play with it or leave the house?");
  if(playDoge === "y" || playDoge === "yes") {
    let bffDoge = readline.question(" You guys become BFFs! Would you like to take it home?");
    if(bffDoge === "y" || bffDoge === "yes"){
    }
  }
} else {
  console.log("OK.");

}
console.log("Thanks for playing!");

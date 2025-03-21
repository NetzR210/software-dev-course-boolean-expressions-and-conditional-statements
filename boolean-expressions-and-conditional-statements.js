/*

Objective:
You will practice creating and combining boolean expressions
to drive logic and outcomes in you program.

Instructions:
If you are not familiar with the concept of a text-based adventure game,
let's set the scene...
Example: "You wake up in a dark forest. There are two paths ahead of you:
one leading to the mountains and one to a village.
Your choices will determine your fate!"

Define the Requirements: You must:
  - Write conditional statements to handle player choices.
  - Use boolean expressions to combine multiple conditions.
  - Include at least one use of logical operators (&&, ||, !).

Starter Code:
  - Run the following command in your terminal to install the readline-sync module:
    npm install readline-sync

Paste the following code into your editor:

*/

const readline = require('readline-sync');

const hasTorch = true;
const hasMap = false;
const hasSword = true;
const hasCompass = false;

console.log("You see two paths: one leads to the mountains, the other to the village.");
const choice = readline.question("Do you go to the 'mountains' or the 'village'?");

if (choice === "mountains") {
  if (hasTorch) {
    console.log("You safely navigate through the dark mountains.");
    if (hasSword) {
      console.log("You fend off a wild beast with your sword and discover treasure!");
    } else {
      console.log("A wild beast attacks you! You barely escape.");
    }
  } else {
    console.log("It's too dark to proceed. You decide to turn back.");
  }
} else if (choice === "village") {
  if (hasMap || hasCompass) {
    console.log("You find your way to the village easily.");
    if (hasTorch) {
      console.log("You use your torch to help the villagers find a lost child. They reward you with food.");
    } else {
      console.log("You enjoy a peaceful evening in the village.");
    }
  } else {
    console.log("You get lost on the way to the village.");
  }
} else {
  console.log("You hesitate and end up wandering aimlessly.");
}


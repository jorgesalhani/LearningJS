'use strict';

const MY_BIRTHDAY = '1996.10.24'; // UPPER FOR HARD-CODED VARIABLES
const pageLoadTime = 10; // Camel-case for non hard-coded variables

let admin, name;
name = 'Jorge';
admin = name;

const bigInt = 451351684632165461321611321651651n; // add -n to big int

// Embed variables to a string: BACKTICKS
let surname = 'Salhani';
let fullName = `Full name: ${name} ${surname}`;
alert(fullName);


// INTERACTIONS: alert, prompt, confirm
let favoriteNumber = prompt('What is your favorite number?', 100);
alert(`Your number is ${favoriteNumber}`);

let isBoss = confirm('Are you the boss?');
alert( isBoss );

// PREFIX and POSTFIX
let counter = 0;
alert(counter++); // 0
alert(counter);   // 1
alert(++counter); // 2
alert(counter);   // 2

// STRICT EQUALITY operator
alert(0==false);  // true
alert(0===false); // false, because it ALSO compare the type
alert(0!==false); // true

// QUESTION MARK operator
// syntex => let result = condition ? value1 : value2;
let accessAllowed;
let age = prompt('How old are you?', '');

// This block ...
if (age > 18) {
  accessAllowed = true;
} else {
  accessAllowed = false;
}
alert(accessAllowed);

// ... is the same as:
accessAllowed = age > 18 ? true : false;

// and also the same as:
accessAllowed = age > 18;

// Several if... else if... else... statements
if (age < 3) {
  message = 'Hi, baby!';
} else if (age < 18) {
  message = 'Hello!';
} else if (age < 100) {
  message = 'Greetings!';
} else {
  message = 'What an unusual age!';
}

// is the same as
let age = prompt('age?', 18);

let message = (age < 3) ? 'Hi, baby!' :
  (age < 18) ? 'Hello!' :
  (age < 100) ? 'Greetings!' :
  'What an unusual age!';

alert( message );

// NULLISH COALESCING operator
/* Returns the first argument if it's not null/undefined. Otherwise,
   the second */

let user;
alert(user ?? 'Anonymous'); // Anonymous only if user not defined

let firstName = null;
let lastName = null;
let nickName = "Supercoder";

// shows the first truthy value:
alert(firstName || lastName || nickName || "Anonymous"); // Supercoder
// Is the same as ??

// LOOP LABELING
outer: for (let i = 0; i < 3; i++) {
  for (let j = 0; j < 3; j++) {
    let input = prompt(`Value at coords (${i}, ${j})`, '');

    if (!input) break outer;
  }
}

// FUNCTIONS
function showMessage() {
  alert('Hello guys!');
}

// Function expression
let sayHi = function showMessage() {
  alert('Hello guys!');
}

sayHi();        // Both have the same
showMessage();  // behaviour

// ARROW FUNCTION

let sum = (a, b) => a + b;

/* This arrow function is a shorter form of:

let sum = function(a, b) {
  return a + b;
};
*/

alert( sum(1, 2) ); // 3

// Or without arguments
let sayHi = () => alert("Hello!");
sayHi();

let sum = (a, b) => {  // the curly brace opens a multiline function
  let result = a + b;
  return result; // if we use curly braces, then we need an explicit "return"
};

alert( sum(1, 2) ); // 3

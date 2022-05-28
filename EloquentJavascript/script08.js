// "use strict"

// -- ERROR IF STRICT
// for (count = 0; count < 10; count++) {
//   console.log('A');
// }


// -- ERROR IF STRICT
// function Person(name) {
//   this.name = name;
// }

// let ferdinand = Person('Ferdinand');
// console.log(name);

// function numberToString(n, base = 10) {
//   let result = '', sign = '';

//   if (n < 0) {
//     sign = '-';
//     n = -n;
//   } do {
//     debugger;
//     result = String(n % base) + result;
//     n = Math.floor(n/base);
//   } while (n > 0);

//   return sign + result;
// }
// console.log(3012, 2);

// BROWSER MAGIC DEBUGGER
// for (let i = 0; i < 10; i++) {
//   console.log(i);
//   debugger;
// }


// function promptNumber(question) {
//   let result = Number(prompt(question));
//   if (Number.isNaN(result)) return null;
//   return result;
// }

// console.log(promptNumber("How many lovers do you have?"));

// function promptDirection(question) {
//   let result = prompt(question);
//   if (result.toLowerCase() == 'left') return 'L';
//   if (result.toLowerCase() = 'right') return 'R';
//   throw new Error('Invalid direction: '+ result);
// }

// function look() {
//   if (promptDirection('Which way?') == 'L') {
//     return 'a house';
//   } else {
//     return 'two angry bears';
//   }
// }

// try {
//   console.log('You see', look());
// } catch (error) {
//   console.log('Something went wrong: ' + error);
// }

const accounts = {
  a: 100,
  b: 0,
  c: 20
};

function getAccount() {
  let accountName = prompt('Enter an account name');
  if (!accounts.hasOwnProperty(accountName)) {
    throw new Error(`No such account: ${accountName}`);
  }
  return accountName;
}

function transfer(from, amount) {
  if (accounts[from] < amount) return;

  let progress = 0;
  try {
    accounts[from] -= amount;
    progress = 1;
    accounts[getAccount()] += amount;
    progress = 2;
  } finally {
    if (progress == 1) {
      accounts[from] += amount;
    }
  }

  accounts[from] -= amount;
  accounts[getAccount()] += amount;
}

class InputError extends Error {}

function promptDirection(question) {
  let result = prompt(question);
  if (result.toLowerCase() == 'left') return 'L';
  if (result.toLowerCase() == 'right') return 'R';
  throw new InputError('Invalid direction: ' + result);
}

for (;;) {
  try {
    let dir = promptDirection('Where?');
    console.log('You chose ', dir);
    break;
  } catch (e) {
    if (e instanceof InputError) {
      console.log('Not a valid direction. Try again.');
    } else {
      throw e;
    }
  }
}

function firstElement(array) {
  if (array.length == 0) {
    throw new Error('FirstElement called with []');
  }
  return array[0];
}

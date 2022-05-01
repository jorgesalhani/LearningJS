
function speak(line) {
  console.log(`The rabbit says '${line}'`);
};

let whiteRabbit = {type: 'white', speak};
let hungryRabbit = {type: 'hungry', speak};

// rabbit.speak('I\'m alive');
// whiteRabbit.speak('God!');
// speak.call(hungryRabbit, 'OhNo!');


function normalize() {
  console.log(this.coords.map(n => n / this.length));
}

// normalize.call({coords: [0,2,3], length: 5});
// console.log(Object.getPrototypeOf(normalize.prototype));

let protoRabbit = {
  speak(line) {
    console.log(`The ${this.type} rabbit says '${line}'`);
  }
}

let killerRabbit = Object.create(protoRabbit);
// killerRabbit.type = 'killer';
// killerRabbit.speak('DIE!');

// console.log(killerRabbit);

function makeRabbit(type) {
  let rabbit = Object.create(protoRabbit);
  rabbit.type = type;
  return rabbit;
};

// function Rabbit(type) {
//   this.type = type;
// };

// Rabbit.prototype.speak = function(line) {
//   console.log(`The ${this.type} rabbit says '${line}'`);
// };

// let weirdRabbit = new Rabbit('weird');


class Rabbit {
  constructor(type) {
    this.type = type;
  };
  speak(line) {
    console.log(`The ${this.type} rabbit says '${line}'`);
  }
};

let bornRabbit = new Rabbit('born');
let blackRabbit = new Rabbit('black');

Rabbit.prototype.teeth = 'small';

// console.log(bornRabbit);

let ages = new Map();
ages.set('Boris', 30);
ages.set('Kora', 20);

// console.log(`Boris is ${ages.get('Boris')}`);
// console.log(ages.has('Boris'));
// console.log(ages.has('toString'));

// console.log({x:1}.hasOwnProperty('x'));
// console.log({x:1}.hasOwnProperty('toString'));


// let sym = Symbol('name');
// console.log(sym == Symbol('name'));
// console.log(sym);
// console.log(Symbol('name'));



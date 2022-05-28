let re1 = new RegExp('abc');
let re2 = /abc/;

// console.log(re2.test('abcde'));   // TRUE
// console.log(re2.test('eabcde'));  // Also TRUE

// console.log(/[0-9]/.test('in 1990')); // TRUE if constains a number

let dateTime = /\d\d-\d\d-\d\d\d\d \d\d:\d\d/;
// console.log(dateTime.test('01-30-1990 15:30')); // TRUE
// console.log(dateTime.test('30-jan-1990 15:30')); // FALSE

let notBinary = /[^01]/;
// console.log(notBinary.test('010011')); //FALSE
// console.log(notBinary.test('00201102')); //TRUE

// console.log(/'\d+'/.test("'123'")); // TRUE
// console.log(/'\d+'/.test("''")); // FALSE 
// console.log(/'\d*'/.test("'123'")); // TRUE
// console.log(/'\d*'/.test("''")); // TRUE

let neighborExp = /neighbou?r/;
// console.log(neighborExp.test('neighbour')); // TRUE
// console.log(neighborExp.test('neighbor')); // TRUE

// let dateTimeNew = /\d{1,2}-\d{1,2}-\d{4} \d{1,2}:\d{2}/; // TRUE 
// console.log(dateTimeNew.test('1-30-2000 8:20')); // TRUE

let matchExec = /\d+/.exec('one 100 two 100');
// console.log(matchExec);
// console.log(matchExec.index);
// console.log('one 100 two 100'.match(/\d+/));

let quotedText = /'([^']*)'/;
// console.log(quotedText.exec("she 'said' 'hello' "))

// console.log(new Date(2020, 10, 10));
// console.log(new Date(1604977200000));

let digitStartEnd = /(^\d+$)/;
// console.log(digitStartEnd.test('10a')); // FALSE
// console.log(digitStartEnd.test('10')); // TRUE

let boundary = /\bcat\b/;
// console.log(boundary.test('concat')); // FALSE
// console.log(boundary.test('concat cat')); // TRUE

let animalCount = /\b\d+ (pig|cow|chicken)s?\b/;
// console.log(animalCount.test('15 pigs')); // TRUE
// console.log(animalCount.test('15 pigchickens')); // FALSE
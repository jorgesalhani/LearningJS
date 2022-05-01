SCRIPTS = [{
  name: "Coptic",
  ranges: [[994, 1008], [11392, 11508], [11513, 11520]],
  direction: "ltr",
  year: -200,
  living: true,
  link: "https://en.wikipedia.org/wiki/Coptic_alphabet"
}];

// CHAPTER 05
// ==========

function filter(array, test) {
  let passed = [];
  for (let element of array) {
    if (test(element)) {
      passed.push(element);
    }
  }
  return passed;
}

// console.log(filter(SCRIPTS, script => script.living));

// console.log(SCRIPTS.filter(s => s.direction == 'ltr'));

function map(array, transform) {
  let mapped = [];
  for (let element of array) {
    mapped.push(transform(element));
  }
  return mapped;
}

// console.log(map(SCRIPTS, s => s.name));

function reduce(array, combine, start) {
  let current = start;
  for (let element of array) {
    current = combine(current, element);
  }
  return current;
}

// console.log(reduce([1,2,3,4], (a,b) => a+b, 0));

// console.log([1,2,3,4].reduce((a,b) => a+b));

function countBy(items, groupName) {
  let counts = [];
  for (let item of items) {
    let name = groupName(item);
    let known = counts.findIndex(c => c.name == name);
    if (known == -1) {
      counts.push({name, count: 1});
    } else {
      counts[known].count++;
    }
  }
  return counts;
}

console.log(countBy([1,2,3,4,5], n => n > 2));
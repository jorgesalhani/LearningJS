
// BASICS

// let user = {
//   name: 'John',
//   age: 30
// };
//
// user.isAdmin = true;
//
// delete user.age;
//
// let key = prompt("What do you want to know about the user", "name");
//
// alert( user[key] );
//
// let fruit = prompt('Which fruit to buy?', 'apple');
// let bag = {
//   [fruit]: 5,
// };
//
// alert( bag.apple );

// function makeUser(name, age, isAdmin) {
//   return {
//     name: name,
//     age: age,
//     isAdmin: isAdmin,
//   };
// }
//
// let user = makeUser('Jorge', 25, false);
// alert(user.name);
//
// for (let key in user) {
//   alert( key );
//   alert( user[key] );
// }

// OBJECT COPY

// let user = { name: 'Jorge' };
// let admin = user; // Copy only the reference.
//
// admin.name = 'Pedro';
//
// let newUser = Object.assign({}, user); // Copy all the content

// OBJECT METHODS: THIS

// let user = {
//   name: 'Jorge',
//   age: 30,
// };
//
// user.sayHi = function() {
//   alert('Hello!');
// }
//
// user.sayHi();


// user = {
//   sayHi: function() {
//     alert("Hello!");
//   }
// };
//
// user = {
//   sayHi() {
//     alert("Gello!");
//   }
// };

// let user = {
//   name: 'Jorge',
//   age: 24,
//
//   sayHi() {
//     alert(this.name);
//   }
// };
//
// user.sayHi();

// CONSTRUCTOR OPERATOR: NEW

// function User(name) {
//   this.name = name;
//   this.isAdmin = false;
// }
//
// let user = new User("Jorge");
// alert(user.name);
// alert(user.isAdmin);


// function User() {
//   alert(new.target);
// }
//
// User();
// new User();

// function User(name) {
//   if (!new.target) {
//       return new User(name);
//   }
//
//   this.name = name;
// }
//
// let john = User('John');
// alert(john.name);

// function User(name) {
//   this.name = name;
//
//   this.sayHi = function() {
//     alert('My name is: ' + this.name);
//   };
// }
//
// let john = new User('John');
// john.sayHi();

// OPTIONAL CHAINING ?

let user = {};
alert(user?.address?.street);

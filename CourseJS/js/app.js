// LESSON 04 - console.log

// window.console.log(
//   window.screen.width
// );
//
// window.console.log(
//   window
// );

// ===== BOM =======

// LESSON 05 - BOM (pt1)

// console.log(
//   screen.width,
//   screen.height,
//   screen.orientation
// );

// console.log(
//   navigator.appName,
//   navigator.appCodeName,
//   navigator.language
// );

// LESSON 06 - BOM (pt2)

// console.log(
//   location.href
// );
//
// location.href = 'https://www.google.com';

// function previous() {
//   history.back();
// };
//
// function next() {
//   history.forward();
// }

// ====== DOM =======

// LESSON 07 - getElements ID and CLASS

// console.log(
//   document.getElementById('fruits')
// );
//
// console.log(
//   document.getElementsByClassName('zodiac')[0].innerHTML
// );

// LESSON 08 - getElements TAGNAME and QUERYSELECTOR

// console.log(
//   document.getElementsByTagName('div')[1].innerHTML
// );
//
// console.log(
//   document.getElementsByTagName('p')
// );
//
// console.log(
//   document.querySelector('#fruits')
// );

// LESSON 09 - querySelectorAll

// console.log(
//   document.querySelectorAll('.water')
// );
//
// console.log(
//   document.getElementById('symbol').querySelectorAll('.water')[0].innerHTML
// );

// LESSON 10 - INNERHTML STYLE ATTRIBUTES

// console.log(
//   document.getElementById('t1').innerHTML
// );
//
// document.getElementById('t1').innerHTML = 'HASKED!';

// var title1 = document.getElementById('t1');
// title1.innerHTML = 'HASKED!!!';
//
// title1.style.color = 'red';
// title1.style.backgroundColor= '#c3c3c3';
//
// var image = document.getElementById('image');
// image.src = 'img/img2.jpg';
// image.height = '200';
// image.width = '300';


//LESSON 11 - CREATEELEMENT

// var image = document.createElement('img');
// image.src = 'img/img2.jpg';
// image.height = '200';
// image.width = '300';
//
// var paragraph = document.createElement('p');
// paragraph.innerHTML = 'ELEMENT FROM JS';
// console.log(
//   image,
//   paragraph
// );

// LESSON 12 - appendChild removeChild

// var p = document.createElement('p');
// p.innerHTML = 'Hello kids!';
//
// var img = document.createElement('img');
// img.src = 'img/img2.jpg';
// img.height = '200';
// img.width = '300';
//
// document.getElementById('content').appendChild(p);
// document.getElementById('content').appendChild(img);

// LESSON 13, 14 - childNodes

// console.log(
//   document.body.childNodes
// );
//
// var list = document.body.childNodes;
// alert(list.length);
// alert(list[1].childNodes[0].nodeValue);

// LESSON 15 - parentNode

// console.log(
//   document.getElementById('Manduri').parentNode
// );

// LESSON 16 - getAttribute, setAttribute

// document.getElementById('button-set').addEventListener(
//   'click',
//   function() {
//     document.getElementById('title').setAttribute('class', 'red')
//   }
// );
//
// document.getElementById('button-remove').addEventListener(
//   'click',
//   function() {
//     document.getElementById('title').removeAttribute('class')
//   }
// )
//
// document.getElementById('button-get').addEventListener(
//   'click',
//   function() {
//     var value = document.getElementById('title').getAttribute('class')
//     document.getElementById('class').innerHTML = value
//   }
// )

// LESSON 17 - creaTextNode, textContent

// var title = document.querySelector('h1')
// var text = document.createTextNode('COOOOCKROACH')
//
// title.appendChild(text)

// LESSON 18 - insertBefore

// var list = document.getElementsByTagName('ul')[0]
// var items = list.children
//
// var newItem = document.createElement('li')
// newItem.textContent = 'Juice'
//
// list.insertBefore(newItem, items[2])
//
// console.log(items)

// LESSON 19 - replaceChild

// var list = document.getElementsByTagName('ul')[0]
// var items = list.children
//
// var newItem = document.createElement('li')
// newItem.textContent = 'Juice'
//
// list.insertBefore(newItem, items[1])
//
// var list2 = document.getElementsByTagName('ul')[1]
// var items2 = list2.children
// var newItem2 = document.createElement('li')
// newItem2.textContent = 'Cake'
//
// list2.replaceChild(newItem2, items2[2])

// LESSON 20 - data types
//
// // string
// var name = 'Jorge Augusto'
// alert(typeof(name))
//
// // number
// var age = 20
// alert(typeof(age))
//
// // boolean
// var isSingle = true
// alert(typeof(isSingle))
//
// // array == object
// var fruits = ['apple', 'strawberry', 'banana']
// alert(typeof(fruits))
//
// // objects
// var drinks = new Object()
// drinks.juice = 'avocato'
// drinks.alcool = 'LoveDrink'
// alert(typeof(drinks))
//
//
// // function
// var sum = function(a,b) {return a+b}
// alert(typeof(sum))
// alert(sum(6,5))

// LESSON 21 - variables

// const name = 'Patricia'
// if (true) {
//
//   name = 'Jorge'
// }
//
// console.log(name)

// LESSON 22 - arrays

// let array1 = [
//   'name',
//   'age',
//   1092.2,
//   {patience:'none'},
//   ['inner', 'array']
// ]
// console.log(array1)
// console.log(array1[3].patience)

// LESSON 23 - objects

// let person = {
//   name: 'Joge',
//   age: 24,
//   tired: true,
//   pets: ['dog', 'cat', 'cattle'],
//   walk: function(km){
//     alert(person.name + ' walked ' + km + ' km')
//   }
// }
//
// person.pets[0] = 'crow'
// console.log(person.pets)
// person.walk(10)

// LESSON 24 - Arithmetic operators

// let x = 10
// let y = 20
// let result = x-y
//
// console.log(result)

// LESSON 25 - Attribution operators

// let x = 5
// x = ++x
//
// console.log(x)

// LESSON 26 - Logic operators

// let x = 5
// let y = 10
// console.log(x != '5')
// console.log(x < 10 && y < 11)

// let election = (age >= 18) ? 'Allowed' : 'Not allowed'

// LESSON 27 - Conditionals

// let drink = 'cachaça'
// let food = 'cake'
//
// switch (drink) {
//   case 'cachaça':
//     console.log('Yes, cachaça')
//     break
//   case 'garapa':
//     console.log('Yes, garapa')
//     break
//   default:
//     console.log('Standard')
//     break
// }

// drink = 'garapa'
// if (drink == 'cachaça') {
//   console.log('Cachaça, please!')
// } else if (food == 'cake') {
//   console.log('Cake, please!')
// } else {
//   console.log('Sad!')
// }

// LESSON 28 - Loops

// let drinks = document.getElementsByClassName('drink')
// let foods = document.getElementsByClassName('food')
//
// for (let i = 0; i < drinks.length; ++i) {
//   console.log(drinks[i].innerHTML)
// }
//
// let i = 0
// while (i < foods.length) {
//   console.log(foods[i].innerHTML)
//   ++i
// }

// LESSON 29 - Loops For in For of

// let fruit = {
//   name: 'Damascus',
//   price: 10.00,
//   quantity: 2
// }
//
// for (let value in fruit) {
//   console.log(fruit[value])
// }
//
// let friends = ['Ana', 'Banana', 'Bianca']
// for (let value of friends) {
//   console.log(value)
// }

// LESSON 30 - Functions

// function showAlert() {
//   alert('Hello!')
// }
// showAlert()
//
// function toSum(a,b) {
//   return a + b
// }
//
// console.log(toSum(10,20))
//
// document.getElementById('result').innerHTML = toSum(10,20)

// LESSON 31 - prompt confirm

// alert('Alert')
// let name = prompt('Insert name:')
// console.log(name)
// let conf = confirm('Are you sure?')
//
// if (conf) {
//   console.log(conf)
// } else {
//   console.log(conf)
// }

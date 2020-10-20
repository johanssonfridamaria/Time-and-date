//BOM & DOM

//Window - global object

//properties
// document
// location
// console
// innerHeight
// innerWidth
// pageXOffset
// pageYOffset

// Methods

// alert()
// back()
// confirm()

// Event:
// not common


//import {Car} from './Models/car';

//year=1956;

// console.log(innerWidth);

//TIMERS

//setTimeout()

// let timeoutId=setTimeout(function(){
//   console.log('1 second passed');
// },1000); // number of milliseconds to wait before executing the function

// clearTimeout(timeoutId);

// //setInterval()

// let intervalId=setInterval(function(){
//   console.log('1 second passed');
// },1000); // number of milliseconds to wait before executing the function

// clearTimeout(intervalId);


//LOCATION OBJECT

// Properties: href, hostname,port, pathname, search
// Methods: assign(), reload()

// The document Object 

// Properties: body, forms, links
// Methods: createElement(), createEvent(), getElementById(), getElementByClassName()
// Events: onload, onclick, onkeypress

//Selecting Dom elements

// document.getElementById('elementId');
// document.getElementsByClassName('className'); //Skapar en array
// document.getElementsByTagName('tagName'); //Skapar en array

let element=document.getElementById('first');

// element.textContent='new content';
// element.setAttribute('foo', 'fooValue');
// element.classList.add('p2');
// element.style.color='blue';


console.log(element);
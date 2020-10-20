

let doNotUse = "Frida";
let useThis = 'Frida'
let number = 29;

// console.log(useThis);
// console.log(doNotUse);
// console.log(number);

let withoutPlaceholders = 'Mitt namn är ' + useThis + ' och jag är ' + number + ' år gammal.'
let withPlaceholders = `Mitt namn är ${useThis} och jag är ${number} år gammal`;

// console.log(withoutPlaceholders);
// console.log(withPlaceholders)

var varName = 'var Frida';
let letName = 'let Frida';
const constName= 'const Frida';

// console.log(varName);
// console.log(letName);
// console.log(constName);

varName='Maria';
letName='Maria';
// constName='Maria';
// Kan inte skrivas över

// console.log(varName);
// console.log(letName);

// let firstName = 'Frida';
// let lastName = 'Johanson';
// let fullName = firstName + ' ' + lastName;

// console.log(fullName);

let datatype;
// let datatype1, datatype2, datatype3;
console.log(typeof datatype);

datatype='en text';
console.log(typeof datatype);

datatype=3;
console.log(typeof datatype);

datatype=null;
console.log(typeof datatype);

datatype=true;
console.log(typeof datatype);

datatype=false;
console.log(typeof datatype);

datatype={};
console.log(typeof datatype);

datatype=[];
console.log(typeof datatype);

let myName='Frida Johansson'

console.log(myName.length);
console.log(myName[0]);
console.log(myName.indexOf('a'));

console.log(myName.toUpperCase());
console.log(myName.toLowerCase());

console.log(myName.split(' '));

let names = myName.split(' ');
let firstName= names[0];
let lastName= names[1];

// console.log(`Mitt förnamn är ${firstName} och efternamnet är ${lastName}.`);

// NUMBERS
// --------------------------------

let nr1=10;
let nr2=2.5;

// Math operators

console.log(nr1, nr2);

console.log(nr1 + nr2);
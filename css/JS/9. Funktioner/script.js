let age = 29;

if (true) {
    let age = 55;
    let name = 'Frida';
    // console.log('inne i 1a kodblocket', age);
    // console.log('inne i 1a kodblocket', name);

    if (true) {
        let age = 100;
        let name = 'Pia';
        // console.log('inne i 1.2 kodblocket', age);
        // console.log('inne i 1.2 kodblocket', name);
        var globalt = 'var'
    }
}

// console.log('utanför något block', age);
// console.log('utanför något block', name);
// console.log('utanför något block', globalt);


//FUNCTIONS

// Deklarera en funktion

// function hej() {
//     console.log('hej på dig');
// }

// const great = function () {
//     console.log('Hur är läget?')
// }

//Köra en funktion

// hej();
// great();


//hoisting, kan flytta en funktion efter den anropats. 
//Kan ej flytta en funktion som delarerat i en variabel. tex. const Great
// function hej() {
// console.log('hej på dig');
// }

let letname = 'Frida';

// const great = function (name) {
//     console.log(`Hej ${name} hur är läget?`)
// }

// great('Frida');
// great(letname);


// const calc = function(num1 = 0, num2 = 0){
//     console.log(num1 + num2);
// }

// calc(10,5);
// calc(210,655);
// calc();

// const calc = function(num1 = 0, num2 = 0){
//     return num1 + num2;
// }

// let sum= calc(10,15);

// console.log(sum);

//parantes om vi har flera parametrar
// const great = () => {
//     console.log(`Hej ${name} hur är läget`)
// }

// en parameter, arrow function
const great = name => {
    console.log(`Hej ${name} hur är läget`)
}
great();

// const calc =(num1=0, num2=0)=>{
// return num1 +num2;
// }

//korta ner om det endast är en rad
const calc = (num1 = 0, num2 = 0) => num1 + num2;

let sum = calc(10, 15);
console.log(sum);


//Callback functions

const minFunktion = (callbackFunction) => {
    let val = 25;
    callbackFunction(val);
}

minFunktion(värdet => {
    console.log(värdet);
})

//samma
minFunktion(function (värdet) {
    console.log(värdet);
})


let names=['Kenth', 'Pia', 'Frida', 'Arvid', 'Klara'];

names.forEach(name =>{
    // console.log(name);
})
//METODER

//ÄR FUNKTIONER INBYGGDA I ETT OBJEKT


let myName=names[0];
console.log(myName);

//funktionen är knuten till objektet myName

let upper= myName.toUpperCase();
console.log(upper);


//this
let user={
    firstName:'Frida',
    lastName:'Johansson',
    fullName: function(){
        console.log(this)
        // return this.firstName + ' '+ this.lastName;
    }
}

// let fullName= user.fullName();
// console.log(fullName);
user.fullName();
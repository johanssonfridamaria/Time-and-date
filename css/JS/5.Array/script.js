const array =[0,1,2,3,4,] //Håll samma datatyp

const users=[
    {firstName:'Frida', lastName:'Johansson', age:29},
    {firstName:'Pia', lastName:'Johansson', age:63},
    {firstName:'Klara', lastName:'Johansson', age:25}
];

const names=['Frida', 'Pia', 'Klara'];

console.log(names);

console.log(names[0]);
console.log(names[1]);
console.log(names[2]);

console.log(users[0]);
console.log(users[0].firstName);

//Lägg till i början av en array

names.unshift('Kenth');
console.log('med unshift: ' + names);

//Ta bort i början på en array

names.shift();
console.log('med shift: ' + names);

//Lägga till i slutet av en array
names.push('Kenth');
console.log('med push: ' + names);

//ta bort i slutet av en array
names.pop('Kenth');
console.log('med pop: ' + names);

//Ändra på en specifik plats i en array
names[1] = 'nytt namn';
console.log('Ändrat: '+ names);

//Vi vill få ut vilken plats 

console.log(names.indexOf('Klara'));

console.log(names.length);

//sätta ihop 2 arrayer

const enTillArray = names.concat(['Kenth', 'Pia']);
console.log(enTillArray);
console.log(names.concat(['Kenth', 'Pia']));




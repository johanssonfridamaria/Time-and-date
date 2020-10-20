//Primitive vs reference variables

let scoreOne = 50;

let scoreTwo = scoreOne;

console.log(`scoreOne: ${scoreOne}, scoreTwo: ${scoreTwo}`);

scoreOne=100;

console.log(`scoreOne: ${scoreOne}, scoreTwo: ${scoreTwo}`);

const userOne= {name:'Frida', age: 29};
const userTwo= userOne;

console.log(userOne, userTwo);

userOne.name='Klara';
userOne.age=25;

console.log(userOne, userTwo);

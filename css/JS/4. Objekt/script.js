const user ={
    firstName:'Frida',
    lastName: 'Johansson',
    age:29,
    address:{
        street: 'en gata',
        nr:123,
        zipcode: 12345,
        city:'Stockholm'
    },
    // Array/Lista i objektet
    phoneNumbers:[
        '0730727909',
        '070-123546'
    ],
    isActive: true
}

let key= 'age';

console.log(user);
console.log(user.firstName);
console.log(user['lastName']); //Används sällan
console.log(user[key]); 


console.log(`Användaren heter ${user.firstName} och bor i ${user.address.city}.`);

user.firstName= 'maria'; //Går att ändra värden i ett obejkt även om det är en const.

console.log(user.firstName);

user.email = 'johanssonfridamaria@gmail.com';
console.log(user);

const {firstName, lastName, address: {city}} = user; //plockar ut värden i objektet och skapar nya variabler

console.log(firstName);
console.log(lastName);
console.log(city);
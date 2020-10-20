//For loopar

for (let i = 0; i < 5; i++) {
    // console.log(i);
}


const namesArray = ['Kenth', 'Pia', 'Frida', 'Arvid', 'Klara'];
const usersArray = [
    { name: 'Frida', email: 'frida@johansson.se', age: 29, status: true },
    { name: 'Kenth', email: 'kenth@johansson.se', age: 65, status: false },
    { name: 'Pia', email: 'pia@johansson.se', age: 63, status: false },
    { name: 'Arvid', email: 'klara@johansson.se', age: 25, status: true },
    { name: 'Klara', email: 'arvid@johansson.se', age: 27, status: true }
]

let numberOfUsers = 0;

for (let i = 0; i < 5; i++) {
    // console.log(i,namesArray[i]);
}


for (let i = 0; i < namesArray.length; i++) {
    // console.log(i,namesArray[i]);
}

//FOR OF loop

for (name of namesArray) {
    // console.log(name);
}

for (user of usersArray) {
    // console.log(user);
}
for (user of usersArray) {
    // console.log(user.name);
}


//WHILE LOOPAR
let i = 1;

while (i < 5) {
    // console.log('while:' + i);
    i++;
}

// console.log('i är '+ i);

//DO WHILE

do {
    // console.log('do while:' + i);
    // i++;
} while (i < 5)

// console.log('i är '+ i);

//HIGH ORDER ARRAY METHODS

//FOR EACH

namesArray.forEach(function (name) {
    // console.log(name);
})

// Arrow function, viktigt senare när koden jobbar i bakgrunden

namesArray.forEach(name => {
    // console.log(name);
})

usersArray.forEach(function (user) {
    // console.log(user);
})

usersArray.forEach(user => {
    // console.log(user.name, user.age, user.email);
    numberOfUsers++;

})
// console.log(numberOfUsers);


//MAP -skapar ne ny array utifrån en befintlig array.
//för varje användare vill jag skicka tillbaka emails

const userEmails = usersArray.map(user => {
return user.email;
})

// console.log(userEmails);


//FILTER

const loggedIn= usersArray.filter(user=>{
return user.status === true;
})

console.log(loggedIn);
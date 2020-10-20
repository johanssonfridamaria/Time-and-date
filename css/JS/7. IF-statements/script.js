//Boleans, True, False
let email = 'frida.johansson@gmail.com';
// console.log(email.includes('@'));
// console.log(email.includes('2'));

let name = ['frida', 'pia', 'kenth'];
// console.log(email.includes('frida'));
// console.log(email.includes('klara'));


let number=13;
let string ='13';

// console.log(number === 13);
// console.log(number === 130);
// console.log(number != 13);
// console.log(number != 20);

// console.log(number>10);
// console.log(number>=13);
// console.log(number<10);
// console.log(number<=13);

// // == jämnför bra värdet
// console.log(number==string);
// console.log(number!=string);
// // === jämför värdet OCH datatyp
// console.log(number===string);
// console.log(number!==string);


//IF SATS

if (string == number){
    // console.log('Påståendet är sant: string == number');
}
if (string === number){
    // console.log('Påståendet är sant: string === number');
}


if (string != number){
    // console.log('Påståendet är sant: string != number');
}
if (string !== number){
    // console.log('Påståendet är sant: string !== number');    
}

let name = Frida;

if (name.toLowerCase()== 'Frida'){
console.log('Namnet är' + namn);
}

else if (name.toLowerCase()== 'Pia'){
console.log('Namnet är' + namn);
}

else if (name.toLowerCase()== 'Frida'){
console.log('Namnet är' + namn);
}

else{
    console.log('Okänd person')
}

// Rest parameter

// function sendCars(...carIds){
//   carIds.forEach(id=> console.log(id));    
// }

// sendCars('Monday', 1,2,3);


// Destructing Arrays. 
// Quick way to assign array values to variabler

//Skapas nya variabeler
// let carIds = [100,200,300];
// let [car1, car2,]= carIds;

// console.log(car1, car2);


// let carIds = [100,200,300];
// let [car1, car2,...theRest]= carIds;

// console.log(car1, car2, theRest);


// let carIds = [100,200,300];
// let car1, car2,theRest; //Deklarerar på en rad
// [car1, car2,...theRest]= carIds; //Destructing på nästa

// console.log(car1, car2, theRest); //samma resultat som ovan

// let carIds = [100,200,300];
// let car1, car2,theRest; //Deklarerar på en rad

// [, car2,...theRest]= carIds; //Ett komma tecken på första, tar bort det första värdet =100

// console.log(car1, car2, theRest); //samma resultat som ovan

// //DESTRUCTURING OBJECTS

// let car= {id: 5000, style: 'convertible'};
// let {id, style}= car; //destructing to new variables.

// console.log(id, style);


// let car= {id: 5000, style: 'convertible'};
// let id, style; 
// ({id, style})= car; //måste lägga till () när man destructing objekts

// console.log(id, style);


//SPREAD SYNTAX

//function som tar emot 3 parametrar
// function startCars(car1, car2, car3) {
//   console.log(car1, car2, car3);
// }

// //arrray carIds
// let carIds = [1, 2, 3];

// //the spread syntax takes the array and break it appart and save the elements in
// startCars(...carIds);

//function som tar emot 3 parametrar
// function startCars(car1, car2, car3, ...rest) {
//   console.log(rest);
// }

// //arrray carIds
// let carIds = [1, 2, 3, 4, 5, 6];

// //the spread syntax takes the array and break it appart and save the elements in
// startCars(...carIds);


//TYPE OF()

// console.log(typeof(1));
// console.log(typeof(true));
// console.log(typeof('Hello'));
// console.log(typeof(function(){}));
// console.log(typeof({}));
// console.log(typeof(null));
// console.log(typeof(undefined));
// console.log(typeof(NaN));


//Type conversion

// console.log(Number.parseInt('55'));
// console.log(typeof(Number.parseInt('55')));

// console.log(Number.parseInt('55ABC')); //only parse the number 55, if it doesn't start with string ABC

//CONTROLLING LOOPS

// let i =0;

// for(; i<12;i++){
//   if(i===8){
//     break; //stops before 8
//   }
//   console.log(i)
// }


// for(let i =0; i<5;i++){
//   console.log(i);

//   if(i===3)
//     break; //stops at 3
//   }

// for(let i =0; i<5;i++){
//   if(i===3)
//     continue; //skips 3

//     console.log(i);
//   }


// let i =0;

// for(; i<12;i++){
//   if(i===2){
//     continue; //skips 2
//   }
//   // console.log(i)
// }


//Equality operators

// if(var1== var2){} //tries to convert the type if they are not the same

// console.log(1==1); 
// console.log(1===true); 


//UNARY OPERATORS

// ++var1 
// var1++

// --var1
// var1--

// +var1 
// -var1 

// let year =1967;
// // console.log(++year);
// console.log(year++);
// console.log(year); 


// let year ='1967';

// console.log(typeof(year)); 
// console.log(typeof(+year)); 

// let year ='-1967';

// console.log(typeof(year)); 
// console.log((+year));

// let year ='-1967';

// // console.log(typeof(year)); 
// console.log((-year)); //-1967

// let year ='1967';

// console.log((-year)); //1967


//LOGICAL OPERATORS

// &&- HIGHER PRECENS THEN ||


// if(5 === 5 && 6 ===7){
//   console.log(true);
// }
// else{
//   console.log(false);
// }


// let userSettings = null;
// let defaultSettings ={name:'Default'};

// console.log(userSettings || defaultSettings); //Chooses the truthly answer

// let userSettings = {name:'Frida'};
// let defaultSettings ={name:'Default'};

// console.log(userSettings || defaultSettings); //Chooses the truthly answer

// let userSettings = {name:'Frida'};
// let defaultSettings ={name:'Default'};

// console.log(userSettings && defaultSettings); //vanligast att se || sign


// let car=null;
// console.log(!car);

// let car=null;
// if (!car){
//   car={};
// }

// console.log(car);



//REALTIONAL OPERATORS

//capatilise come before lowercase


// let s1='Zoo';
// let s2='alphabet';

// if(s1<s2){
//   console.log(true);
// }
// else{
//   console.log(false);
// }

// let s1='Zoo';
// let s2='alphabet';

// if(s1.toUpperCase()<s2.toUpperCase()){
//   console.log(true);
// }
// else{
//   console.log(false);
// }


//CONDITIONAL OPERATOR

// var result = (foo > 5) ? true : false;

// console.log( (5 > 4) ? 'yes' : 'no');

// console.log( 5 > 44 ? 'yes' : 'no');

//ASIGNMENT OPERATORS

// let year=1964;

// // year>>=1; //dividing with 2
// year <<=1; // multiplying with 2
// console.log(year);




//FUNCTION SCOPE

// function startCar(carId){
//   let message='Starting...';
// }

// startCar(123); 
// //error because message is out of scope
// console.log(message);


// function startCar(carId) {
//   let message = 'Starting...';
//   let startFn = function turKey() {
//     console.log(message);
//   };
//   startFn();
// }

// startCar(123);


// function startCar(carId) {
//   let message = 'Starting...';
//   let startFn = function turKey() {
//     let message = 'Override';
//   };
//   startFn();
//   console.log(message);
// }

// startCar(123); 


//BLOCK SCOPE

//IIFE iMMEDIATLEY INVOKED FUNCTION EXPRESSION

//loggar inte ut något eftersom functionen ej har ett namn eller blivit kallad på

// function(){
//   console.log('in function');
// };


// //Skriver ut funktionen med iife metoden
// (function(){
//   console.log('in function');
// })();

//vanligt att använda iife för appar
// let app= (function(){
//   let carId=123;
//   console.log('in function');
//   return {};
// })();

// console.log(app);

// CLOSURE


// let app= (function(){
//   let carId=123;
//   let getId=function(){
//     return carId;
//   };
//   return {
//     getId:getId
//   };
// })();

// console.log(app.getId());

//THIS KEYWORD

// let o={
//   carId:123,
//   getId:function(){
//     console.log(this);
//     return this.carId;
//   }
// };

// console.log(o.getId());

//CALL & APPLY - change the value of this.

// let o={
//   carId:123,
//   getId:function(){
//     return this.carId;
//   }
// };

// let newCar={carId:456};
// console.log(o.getId.call(newCar));

//APLLY

// let o={
//   carId:123,
//   getId:function(prefix){
//     return prefix + this.carId;
//   }
// };

// let newCar={carId:456};
// console.log(o.getId.apply(newCar, ['ID:']));

//BIND - copies the function

// let o={
//   carId:123,
//   getId:function(){
//     return this.carId;
//   }
// };

// let newCar={carId:456};
// let newFn= o.getId.bind(newCar);

// console.log(newFn());


//ARROW FUNCTIONS


// let getId=()=>123;

// console.log(getId());

// let getId=prefix=>prefix+123;
// console.log(getId('ID: '));

// let getId=(prefix, suffix)=>prefix+123+suffix;

// console.log(getId('ID: ', '!'));

// let getId = (prefix, suffix) => {
//   return prefix + 123 + suffix;
// };

// console.log(getId('ID: ', '!'));

//underscore
// let getId=_=>123;

// console.log(getId());



//DEFAULT PARAMETERS

let trackCar= function(carId, city='NY'){
    console.log(`Tracking ${carId} in ${city}.`);
  };
  
  console.log(trackCar(123));
  console.log(123,'Chicago');
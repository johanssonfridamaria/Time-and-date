//OBJECTS AND ARRAYS


//constructor function

//Stor bokstav på Car

// function Car(){
// console.log(this);
// }

// let vehicle = new Car();


// function Car(id){
// this.carId=id;
// this.start= function(){
//   console.log('start: ' + this.carId);
// };
// }

// let vehicle = new Car(123);

// vehicle.start();

//PROTOTYPES


// function Car(id){
// this.carId=id;
// }

// Car.prototype.start= function(){
//   console.log('start: ' + this.carId);
// };

// let vehicle = new Car(123);

// vehicle.start();

//EXPANDING OBJECTS USING PROTOTYPES. 

// String.prototype.hello=function(){
//   return this.toString()+' Hello';
// };

// console.log('foo'.hello());

//JSON JAVA SCRIPT OBJECT NOTATION

// //Javascript format
// let car = {
//   id: 123,
//   style: 'convertible'
// };

// // gör om t json och kan skicka till API
// console.log(JSON.stringify(car));

//parse json to javascript
// let jsonIn =
//   `[
//     {"carId":123},
//     {"carId":456},
//     {"carId":789}
// ]
// `;

// let carIds = JSON.parse(jsonIn);
// console.log(carIds);

//ARRAY ITERATION

// let carIds=[
//   {carId:123, style: 'sedan'},
//   {carId:456, style: 'convertible'},
//   {carId:789, style: 'sedan'},
// ];

// carIds.forEach(car=>console.log(car));
// carIds.forEach((car,index) => console.log(car,index));


// let carIds=[
//   {carId:123, style: 'sedan'},
//   {carId:456, style: 'convertible'},
//   {carId:789, style: 'sedan'},
// ];

// let convertibles=carIds.filter(car=> car.style === 'convertible');

// console.log(convertibles);

//if method
// let carIds=[
//   {carId:123, style: 'sedan'},
//   {carId:456, style: 'convertible'},
//   {carId:789, style: 'sedan'},
// ];

// let result=carIds.every(car=> car.Id > 0);

// console.log(result);

let carIds=[
  {carId:123, style: 'sedan'},
  {carId:456, style: 'convertible'},
  {carId:789, style: 'sedan'},
];

let result=carIds.find(car=> car.carId > 500);

console.log(result);
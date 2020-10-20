
//Classes and Modules
// class Car{

// }

// let car = new Car();
// console.log(car);

//Constructor

// class Car{
// constructor(id){
//   this.id=id; //måste använda this i constructorn
// }
// }

// let car = new Car(123);
// console.log(car.id);


//Methods

// class Car {
//   constructor(id) {
//     this.id = id; //måste använda this i constructorn
//   }
//   identify() {
//     return `Car id:${this.id}`;
//   }
// }

// let car = new Car(123);
// console.log(car.identify());

// class Car {
//   constructor(id) {
//     this.id = id; //måste använda this i constructorn
//   }
//   identify(suffix) {
//     return `Car id:${this.id}${suffix}`;
//   }
// }

// let car = new Car(123);
// console.log(car.identify('!!!'));


//INHERITANCE

// class Vehicle {
//   constructor() {
//     this.type = 'car';
//   }
//   start() {
//     return `Starting: ${this.type}`;
//   }
// }

// class Car extends Vehicle {
// }
// let car = new Car();
// console.log(car.type);

// class Vehicle {
//   constructor() {
//     this.type = 'car';
//   }
//   start() {
//     return `Starting: ${this.type}`;
//   }
// }

// class Car extends Vehicle {
//   constructor() {
//     super();// refererar tillbaka till Vehicle klassen
//   }
// }
// let car = new Car();
// console.log(car.type);

// class Vehicle {
//   constructor() {
//     this.type = 'car';
//   }
//   start() {
//     return `Starting: ${this.type}`;
//   }
// }

// class Car extends Vehicle {
//     start(){
//       return 'in Car start '+super.start();
//     }
// }
// let car = new Car();
// console.log(car.start());


//MODULES - helps us organizing our code

// import{Car} from './Models/car.js';

// let car = new Car(123);
// console.log(car.id);

//CreatE modules
//create a new folder - Models
// create a file for the class tex: car.js 
//Write export and the class

// export class Car{
//   constructor(id){
//     this.id=id; //måste använda this i constructorn
//   }
//   }

// Write import in the index.js file
// import{Car} from './Models/car.js';
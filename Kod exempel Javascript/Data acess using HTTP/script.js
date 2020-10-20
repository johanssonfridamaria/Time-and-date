//Error handling

// let car= newCar;

// console.log('continues...');


//Try & Catch

// try{
//   let car= newCar;
// }
// catch(error){
//   console.log('error: ', error);
// }
// //programmet fortsätter efter det tagit hand om error
// console.log('continuing');

// try{
//   let car= newCar;
// }
// catch(error){
//   console.log('error: ', error);
// }
// finally{
//   console.log('this always executes');
// }

//Developer defined errors

//Throw keyword

// try{
//   //code here
//   throw new Error('my custom error');
// }
// catch(error){
// console.log('Error: ', error);
// }
// finally{
//   console.log('this always executes');
// }

// Creating a Promises 

//temporary holder, promise to get a value back to you

// let promise= new Promise(function(resolve, reject){
//   setTimeout(reject,100, 'someValue');
// }
// );

// console.log(promise);

//Settling a promise

// let promise= new Promise(function(resolve, reject){
//   setTimeout(resolve,100, 'someValue');
// }
// );

// promise.then(
//   value => console.log('fullfilles: ' +value),
//   error => console.log('rejected: '+error)
// );


//Data access using HTTP

//HTTP Requests using XHR

//xml

// let xhttp = new XMLHttpRequest();

// xhttp.onreadystatechange=function(){
//   if(this.readyState==4 && this.status==200){
//     console.log(this.responseText);
//   }
// };

// xhttp.open('GET', 'http://myid.mockapi.io/api/v1/users', 'true');

// xhttp.send();


//JQUREY and http get

// import $ from 'jquery';

// let promise= $.get(webbsida till api);

// promise.then(
// data=> console.log('sucess:', data),
// error=> console.log('sucess:', error),
// );

//http post using jquery. posting forms etc
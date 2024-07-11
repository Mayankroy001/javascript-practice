let myDate = new Date()
console.log(myDate);

console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleString());
console.log(typeof myDate)

let myCreatedDate = new Date(2023, 0, 23) //all javascript started month from zero
console.log(myCreatedDate);
console.log(myCreatedDate.toDateString());
                                
let myTimeStamp = Date.now();
console.log(myTimeStamp);
                      
let myCreatedDateOne = new Date();
console.log(myCreatedDateOne.getTime());
console.log(myTimeStamp.toString());
console.log(Date.now()); ///it will show milliseconds
// Assuming myCreatedDate is not a function, remove the incorrect call
// console.log(myCreatedDate(Math.floor(Date.now()/1000)));

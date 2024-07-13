const user ={
  name : "Mayank Roy",
  age : 18,
  location : "Kharibari",
  isLoggedin : false,
  email : "Mayank@gmail.com",
  //we can declare arrays by giving [] brackets
  loggedInDays : ["Saturday", "Sunday"]
}
console.log(user);

//sometimes interviewer ask add symbol as a key in obj========
const mySym = Symbol("key")
const user2 ={
    nmae : "Myank Roy",
    Age : 18,
    Location : "Kharibari",
    mySym : "myKey", //its the wrong process to use symbol in a key as obj, its situated now as a string..
    isloggedin : false,
    email : "Mayank@gmail.com",
    loggedInDays : ["Monday", "Sunday"]
}
    console.log(user2);
    console.log(typeof user2.mySym);
    console.log(user2["email"]);
    
     //Actual process

     const mySym1 = Symbol('key'); // Defining the symbol

const myUser3 = {
  name: "Mayank Roy",
  [mySym1]: "Key", // Assigning a string value to the symbol property
  age: 18,
  Location: "Kharibari",
  isLoggedin: false,
  email: "Myank@gmail.com",
  LoggedinDays: ["Monday", "Sunday"] // Fixed the spelling of "Sunday"
};

console.log(myUser3);
console.log(myUser3[mySym1]);

// How to update object ====
myUser3.email ="Myank@gmail.com"
Object.freeze(myUser3); /// it helps to stop further update
myUser3.email = "Toy2005roy@gmail.com" // here this email will not print in terminal..
console.log(myUser3);

//Object.freeze(myUser3[email])
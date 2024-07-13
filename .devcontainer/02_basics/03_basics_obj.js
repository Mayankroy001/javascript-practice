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
    
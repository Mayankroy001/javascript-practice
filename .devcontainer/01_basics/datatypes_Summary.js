// DATA TYPES are 2 types =
//1) Premitive DataType = nuber, string, boolean, BigInt, symbol, undefined;

// 2)Reference(Non Premitive Datatypes) = Array, OBject,Functions;

const score = 100
const scoreValue = 100.4

const outsideTemp = null
let isLoggedIn = false
const id = Symbol('1234')
let eamil ;
const anotherId = Symbol('1234')
console.log(id === anotherId);


// Non prmitive=

 const heroes = ["IronMan", "Hulk", "Deadpool", "Shaktiman"];
 let Obj={
  nanme : "Mayank Roy",
  RollNo : 119001230760,
  semster :"1st",
 }

   // stack(premitive), heap(non premitive)
    let youTubename = "Mayank Roy official"
    youTubename ="mayankvlogger";
    let anothername = youTubename
    console.log(youTubename);
    console.log(anothername);
    console.log(youTubename);

    // Another example of heap===

    let userOne = {
        name :"mayank Roy",
        rollNo : 2,
        phoneNumber : "8436889864"
    }

    let userTwo = userOne;
    console.log(userOne);
    console.log(userTwo);
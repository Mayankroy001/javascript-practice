 //////////////////////NUMBERS//////////////////////////////

const score = 400
console.log(score);

const balance = new Number(100)
console.log(balance);

console.log(balance.toString());
console.log(balance.toString().length);

//if we want to add how much 0 we wnt after point(.) we are goint to use "toFixed(how many nuber you want)"

console.log(balance.toFixed(3)); //1,2,3,4,5,6,7.............n

//if we want to do rounding of figure then we have to use (".toPrecision")========
const anotheNumber = 123.88
console.log(anotheNumber.toPrecision(1));

//sometimes we have find some diffculties to count zeroes for these reason we going to (".toLocalString")

const hundreds = 100000
console.log(hundreds.toLocaleString());
console.log(hundreds.toLocaleString('en-IN')); ///it is another process





///////////////////////////MATHS/////////////////////////////



console.log(Math); // Display the Math object
console.log(Math.abs(-4)); // For getting the absolute value, we use ".abs"
console.log(Math.round(4.2)); // For rounding a value, we use ".round"
console.log(Math.ceil(4.2)); // It will round up the value, we use ".ceil"
console.log(Math.floor(4.2)); // It will round down the value, we use ".floor"
console.log(Math.max(4, 3, 7)); // For getting the maximum value, we use ".max"
console.log(Math.min(4, 3, 7)); // For getting the minimum value, we use ".min"
console.log(Math.random());  // it is generate random value
console.log(Math.random()*10); // it is shift values to left [0.12345 convert into 1.2345]

//////////////////////////PLAYING WITH RANDOM MATH====================================================


const anotherValue = (Math.random());
console.log(anotherValue);
console.log(Math.abs(anotherValue));




///////////////// PLAYING WITH RANDOM MATH=============================================================


const anotherValueOne= (Math.random()*10);
console.log(anotherValueOne.toFixed(3));
console.log(Math.random());
console.log(Math.ceil(anotherValueOne));
console.log(Math.floor(Math.abs(anotherValueOne)));
console.log(anotherValueOne.toPrecision(4));
 
///// ANOTHRT EXAMPLE==============

const min = 10
const max = 20

console.log(Math.floor(Math.random())*(max - min+1)+min);
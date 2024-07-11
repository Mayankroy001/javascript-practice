const myArr = [0,1,2,3,4,5]
//console.log(myArr);
//console.log(myArr[1]);

   ////////  ARRAY USE =========================

myArr.push(6) //for add
myArr.push(7) // for add
myArr.pop(6,7) // for remove
myArr.pop(7)
myArr.unshift(9) //for replace number
myArr.shift(9)   //to remove the replaced number
console.log(myArr);
console.log(myArr.includes(9));   /// (.includes) is used for is the given value is exist or not

const randomArr =[0,1,2,3,4,5,6,"Mayank"] //array can be string, numbers, etc
console.log(randomArr);


  // we cam operate with two arrays together. to do this we use (.join())


 const newArr = myArr.join()  //it can print 2arrays together but converts one of the arrays to string
 console.log(newArr);
 console.log(myArr);
console.log(typeof myArr);
console.log(typeof newArr);  // here this array is string......


//////////   uses of SLICE and SPLICE=================
const myn = myArr
console.log("A",myArr);

const myn1 = myArr.slice(1,3)
console.log("B",myArr);

console.log(myn1);

   const myn2 = myArr.splice(1,3)
   console.log("C",myn);
   console.log(myn2);
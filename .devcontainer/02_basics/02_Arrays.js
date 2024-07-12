const marvelHeroes = ["Thor", "Ironman", "Deadpool", "Hulk"]
const dcHeroes = ["Superman","Flash","Green Lantern", "Batman"]

console.log(marvelHeroes);
console.log(dcHeroes);
console.log(typeof marvelHeroes);

marvelHeroes.push(dcHeroes) //here push actually not add the two arrays it's actually merge the array of arrays
//console.log(marvelHeroes);
 const allHEROES = [marvelHeroes, dcHeroes];
  const allHEROES1 = allHEROES.flat(Infinity);

////////To solve this problem we are going to use(.concat)

const marvelHeroes_1= marvelHeroes.concat(dcHeroes)
console.log(marvelHeroes_1);

// same another module avaiolable in js known as (...spread)

const allHeroes = [...dcHeroes,...marvelHeroes]
console.log(allHeroes);


///

console.log(Array.isArray("Mayank"));// but you can convert this string into array
console.log(Array.from("Mayank"));    //(.from) is a funtion that convert any object to array.


let object ={
 score1 : 100,
 score2 : 200,
 score3 : 300,
}

let object2 ={
    Nmae : "M",
    cgpa : 8,
    roll : 3
}
const allObject = [object,object2];
console.log(Array.from(allObject));
console.log(Array.of(object));
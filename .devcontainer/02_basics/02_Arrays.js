const marvelHeroes = ["Thor", "Ironman", "Deadpool", "Hulk"]
const dcHeroes = ["Superman","Flash","Green Lantern", "Batman"]

console.log(marvelHeroes);
console.log(dcHeroes);
console.log(typeof marvelHeroes);

marvelHeroes.push(dcHeroes) //here push actually not add the two arrays it's actually merge the array of arrays
//console.log(marvelHeroes);
 marvelHeroes.flat(i)
  

////////To solve this problem we are going to use(.concat)

const marvelHeroes_1= marvelHeroes.concat(dcHeroes)
console.log(marvelHeroes_1);

// same another module avaiolable in js known as (...spread)

const allHeroes = [...dcHeroes,...marvelHeroes]
console.log(allHeroes);
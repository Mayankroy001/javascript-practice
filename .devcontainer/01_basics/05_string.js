const name ='mayank Roy'
const Repocount = 50
 

console.log(name + Repocount +"value"); // it is vbery old process we dont use in modern days
console.log(`Hello my name is ${name} and my repocount is ${Repocount}`); //it is kmown as string interpolation

// also we can do many works this [ ${} ]
console.log(`hello my name is ${name.toUpperCase()}`);

// another example is 
 const gameName = new String('mayank')

 console.log(gameName[4]);
 console.log(gameName.toUpperCase());
 console.log(gameName.length);
 console.log(gameName.charAt(2));
 console.log(gameName.indexOf('k'));

 const newString = gameName.substring(0,4)
 console.log(newString);
  
 const anotherString = name.substring(0,3)
  console.log(anotherString);


  //we can use also negative value (slice)

  const anotherStringOne = gameName.slice(-4,0)
  console.log(anotherStringOne);


  //for arrangingPassword========


   const anotherStringTwo =  "   Mayank   "
   console.log(anotherStringTwo);
   console.log(anotherStringTwo.trim());

   //Uses of replace ======

    let url = "https//Mayank%20.com"
    console.log(url.replace('%20', '-'));
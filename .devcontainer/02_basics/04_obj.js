// const tinderUser = new Object()  it is konown as singleton object

//Another process of declare object===
const tinderUser = {}

   tinderUser.id = "123mayank"
   tinderUser.name = "Mayank"
   tinderUser.isLoggedIn = false

   console.log(tinderUser);

   //we can add object under object ;;;;;

   const anotherUser ={
     email : "Mayank@gmail.com",
     userId : "123@Mayank",
     ///here we are add object under object===
      userFullDetails : {
        name :"Mayank Roy",
        age : 18 ,
        weight : 78,
        height : 5.9,
        ///we can add more object==============
        Education :{
            school : "Kharibari High School(H.S)",
            Board : "Goverment Board of West Bengal",
            Stream : "science",
            Percentage : 79,
        }
     }

   }

    console.log(anotherUser);
    console.log(anotherUser.email);
    console.log(anotherUser.userFullDetails);
    console.log(anotherUser.Education);
 console.log(anotherUser.userFullDetails.Education);


 //Also we can write it array form========

 const obj1 ={1: "Mayank", 2 : "Rahul", 3 : "Bani"};
const obj2 = {age1 : 19, age2: 24, age3 : 44};
const obj3 = {work1 :"student", work2 : "Private job", Wor3k : "Goverment job"};

const obj4 = {obj1,obj2,obj3};
console.log(obj4);

//console.log(...obj1,...obj2,...obj3);
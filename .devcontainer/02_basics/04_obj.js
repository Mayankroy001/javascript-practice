// const tinderUser = new Object()  it is konown as singleton object

//Another process of declare object===
const tinderUser = {}

   tinderUser.id = "123mayank"
   tinderUser.name = "Mayank"
   tinderUser.isLoggedIn = false

   console.log(tinderUser);
console.log(Object.keys(tinderUser));
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
 console.log(Object.keys(anotherUser));

 //Also we can write it array form========

 const obj1 ={1: "Mayank", 2 : "Rahul", 3 : "Bani"};
const obj2 = {age1 : 19, age2: 24, age3 : 44};
const obj3 = {work1 :"student", work2 : "Private job", Wor3k : "Goverment job"};

//const obj4 = {obj1,obj2,obj3};
//console.log(obj4);

//console.log(...obj1,...obj2,...obj3);
const obj4 =Object.assign({},obj1,obj2,obj3)

const course = {
   courseName : "Javascript",
   price : 899,
courseInstructor: "Mayank Roy"
}

 console.log(course.courseInstructor);
 console.log(course);

 ///============we can declare object in array methode==============
 /////    we can also use this for databse ==============(Very important topic)
 const user =[
  {
  id : 1,
  email : "Mayank@gmail.com"  
   },
   {
    id : 2,
    email : "rayank@gmail.com"  
     },
     {
      id : 3,
      email : "tayank@gmail.com"  
       },
 ]
 user[1].email
 console.log(user);
console.log(Object.keys(user));

const whatsAppUSer ={
   Name : "Mayank Roy",
   Email: "Mayank2005Roy@gmail.com",
   Password : 123456,
   isLoggedIn : false
}
     console.log(Object.keys(whatsAppUSer));
     console.log(Object.values(whatsAppUSer));
     console.log(Object.entries(whatsAppUSer));//its add array under array
    // console.log(whatsAppUSer.hasOwProperty('Userid')); // we  can check the object is available oer not

    const newCourse = {
      courseName: "Javascript",
      Price: 999,
      CouseInstructer: "Mayank"
   }; 
   
   console.log(newCourse);
    newCourse.CouseInstructer
   
    // in this process we dom't need to write again and again Course.instructor, this process is known as Destructure========== 
   const { CouseInstructer: instructor } = newCourse;
   console.log(instructor);  // This will be the output: "Mayank"  

//Destructure basically used in react js example

//const navBar = ({company}) => {

//}
// navBar(company = "Mayank")
    

///////// in json all keys and values are in String format always. example



  //{
   //"Name" : "Mayank",
   //"CourseName" : "Js in Hindi",
   //"isloggedin" : false,  [it's not string cause it's an another datatype ]   
// "Password" : 122346     [it's not an string becausew it's an another datatypes]
//}


///////////we can add object array in arrays
 
  [

    {},
    {},
    {}

   ] 
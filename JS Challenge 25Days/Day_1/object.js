// Singleton

// Object Literals

// const jsUser={
//   name:"Megha",
//   "full_name":"Megha De",
//   age:22,
//   location:"Bankura",
//   email:"megha123@gmail.com",
//   isloggedin:false,
//   lastLoginDays:["Moday","Tuesday"]
// }

// console.log(jsUser.email);
// console.log(jsUser["email"]);  // **It write within "" because object take all this as string
// console.log(jsUser["full_name"]);
// console.log(jsUser.lastLoginDays);

// *how to declare symbol datatype
const mysym = Symbol("key1");
const jsUser = {
  name: "Megha",
  full_name: "Megha De",
  age: 22,
  email: "megha123@gmail.com",
  lastLoginDays: ["Moday", "Tuesday"],
 [mysym]: "symbol1",
};
// console.log(jsUser[mysym]);
// console.log(typeof  mysym);// ** how to know which datatype  types 

// **Modify obj value

jsUser.name="Suradip"
// how to know which datatype  types 
// console.log(jsUser.name);


// **If you want to make an object’s value unchangeable, you can use methods like Object.freeze()

// Object.freeze(jsUser)
// jsUser.name="Sneha";
// jsUser.age=90;

// console.log(jsUser.age);
// console.log(jsUser);

//  * Function
// jsUser.greetting=function(){
//   console.log("Hello JS users");
// }
// console.log(jsUser.greetting());

// jsUser.greetting2=function(){
//   console.log(`Hello js user, ${this.name}`);
// }
// console.log(jsUser.greetting2());

// part =>2

// const tinderuser=new Object();  // *singleton obj

const tinderuser = {}; // * not singleton obj
tinderuser.name = "Megha";
tinderuser.id = 1;
tinderuser.age = 22;
console.log(tinderuser);

// const userinfo = {
//   userfullname: {
//     FN: "Megha",
//     LN: "De",
//     MN: "Kumari",
//   },
//   address: {
//     vill: "Pirirchak",
//     post: "Deshara",
//     dist: "Bankura",
//   },
// };
// console.log(userinfo.userfullname.MN);

// ** many ties we use ? if we are not sure about that var exist or not
// console.log(userinfo.userfullname?.FN);

const obj1 = { 1: "a", 2: "b" };
const obj2 = { 3: "c", 4: "d" };
// ** if you want to assign
// const obj3=Object.assign(obj1,obj2)  // * here store all obj value at obj1 var
// console.log(obj3);

// or
const obj3=Object.assign({},obj1,obj2)

// ** actually we always use sprade operator (use 90% time alternate of assisgn )
// const obj3 = { ...obj1, ...obj2 };
// console.log(obj3);

// ** how to data come from Database
const user = [{}, {}, {}];

user[1].email;
// console.log(tinderuser);

// **how print value keys within array and we can also run loop which will give good idea about project

// console.log(Object.keys(tinderuser));
// console.log(Object.values(tinderuser));
console.log(Object.entries(tinderuser));

// console.log(Object.keys(tinderuser).length);

// **check is this obj present in defined obj
// console.log(tinderuser.hasOwnProperty('ispresent'));









// **Destructuring

const course = {
  C_name: "CSE",
  C_id: 1,
  C_strenth: 500,
};
const { C_name } = course;
// console.log(C_name);

// how to rename
const { C_name: n } = course;
// console.log(n);

// other way for destructurwe

// const navbar=({XYZ})=>{

// }
// navbar(company="XYZ")

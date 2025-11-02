// for of loop

const arr1=[1,2,3,4];

for (const num of arr1){
// console.log(num);

}

// ** We can also use in string
// const greetting="Good morning"
// for(const i of greetting){
//   console.log(i);
  
// }

// **MAps 
// const map=new Map()
// map.set("In","India")
// map.set("USA","Uited States of America")
// map.set("Fr","France")
// map.set("In","India")
// // console.log(map);
// for (const [key,value] of map){
//   // console.log(both);
  
//   console.log(key,"->",value); // ** how to destructure array 
  
// }


const myobj={
'game1':'NFS',
'game2':'spaiderman'
}

// for (const [key,value] of myobj){
 
// console.log(key,":-",value);  // **this shows error **myobj is not iterable
// }


// so how to show o/p without error
// for(const key in myobj){
//   console.log(`${key} sortcut is for ${myobj[key]}`);
  
// }

// **id for in loop work for array
// const str1=["js","c","C++","python"];
// for(const key in str1){
//   console.log(` ${str1[key]}`);
  
// }

// Map is not iteratable 
// const map=new Map()
// map.set("In","India")
// map.set("USA","Uited States of America")
// map.set("Fr","France")
// map.set("In","India")

// for (const key in map){
//   console.log(`${map[key]}`);  // * does not display anything
  
// }


// const coding=["js","c","C++","python"];
// coding.forEach(function (val){
//   console.log(val);
  
// }) //  **in callback there is no fuction name  thats why i am passing only parameters

// **USing  ARROWFUNC


// ** how to print array using pass function as parameter  
// const coding=["js","c","C++","python"];

// function printMe(item){
//   console.log(item);
  
// }
// coding.forEach(printMe) // 


// **USing  ARROWFUNC
// const coding=["js","c","C++","python"];
// coding.forEach((item)=>{
// console.log(item);

// })
// const coding=["js","c","C++","python"];
// coding.forEach((item,index,arr)=>{
//  console.log(item,index,arr);
 // })

// real time use of coding.forEach((item,index,arr) on project 
// try letter




const near_by_vill = [
  {
    village_name: "Rampur",
    district: "Hooghly",
    state: "West Bengal",
    population: 3200,
    distance_from_city_km: 8.5,
    facilities: ["Primary School", "Health Centre", "Bus Stand"],
    famous_for: "Sweet jaggery (gur)",
  },
  {
    village_name: "Sundarpur",
    district: "Nadia",
    state: "West Bengal",
    population: 2500,
    distance_from_city_km: 12,
    facilities: ["High School", "Market", "Temple"],
    famous_for: "Handmade pottery",
  },
  {
    village_name: "Chandipur",
    district: "Howrah",
    state: "West Bengal",
    population: 4100,
    distance_from_city_km: 6,
    facilities: ["Electricity", "Panchayat Office", "Playground"],
    famous_for: "Festival of Durga Puja",
  }
];

near_by_vill.forEach((item)=>{
  // console.log(item);
  
  console.log(item.population);
  
  

})
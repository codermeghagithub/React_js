// const num=[2,4,6,8,10,9,12,14];

// const newarr=num.filter((nums)=>nums>5)
// console.log(newarr);

// * if i do like this in which way i have to follo [filter method use arraow func]
// const new_arr=num.filter((val)=>{
// return val>7  // *here i have to write return 
// })
// console.log(new_arr);


////* same Q through foreach
// const num=[2,4,6,8,10,9,12,14];
// const num2=[];
// num.forEach((val)=>{
//   if(val>8){
//     num2.push(val)
//   }
//   })
// console.log(num2);

const books = [
  {
    title: "To Kill a Mockingbird",
    genre: "Fiction",
    edition: "50th Anniversary Edition",
    publishYear: 2010
  },
  {
    title: "1984",
    genre: "Dystopian Fiction",
    edition: "Centennial Edition",
    publishYear: 2003
  },
  {
    title: "The Great Gatsby",
    genre: "Classic Literature",
    edition: "Scribner Trade Paperback Edition",
    publishYear: 2004
  },
  {
    title: "Pride and Prejudice",
    genre: "Romance",
    edition: "Penguin Classics Edition",
    publishYear: 2002
  },
  {
    title: "The Hobbit",
    genre: "Fantasy",
    edition: "Illustrated Edition",
    publishYear: 2013
  },
  {
    title: "Harry Potter and the Sorcerer's Stone",
    genre: "Fantasy",
    edition: "Scholastic Edition",
    publishYear: 1998
  },
  {
    title: "The Catcher in the Rye",
    genre: "Coming-of-age Fiction",
    edition: "Back Bay Books Edition",
    publishYear: 2001
  },
  {
    title: "Sapiens: A Brief History of Humankind",
    genre: "Non-fiction",
    edition: "First Edition",
    publishYear: 2015
  }
];


// let res=books.filter((bk)=>bk.genre==="Fiction"
// )
// console.log(res);

// let res=books.filter((bk)=>{
//   return  bk.publishYear>2013? true:false
// })
// console.log(res.length>0 ? "i like":"not like")
// console.log(res);


// console.log(r);



// let res=  books.filter((bk)=>{
// return bk.publishYear>=2002 && bk.genre==="Classic Literature"
//   })
// console.log(res);


// *chaining of map, filter 



// *Reducemethod 
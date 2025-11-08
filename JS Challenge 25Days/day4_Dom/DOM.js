// *follow code snippet
// const classN=document.getElementsByClassName('desc')
// console.log(classN);


// let hi=document.getElementById("h1")
// hi.textContent
// hi.innerText
// h1.innerHTML

// document.addEventListener("DOMContentLoaded", () => {
//   const btn1 = document.getElementById("mybutton");
//   btn1.classList.add("active");
//   btn1.classList.remove("active");
//   btn1.classList.toggle("active")
// });



// 


// const Img=document.images
// const allImages=document.getElementsByTagName('img')



// document.getElementById("heading")
// document.getElementById("para")
// ** output
{
  /* <p class=​"desc" id=​"para">​Today we will understand DOM Manupulation​</p>​ */
}

// document.getElementsByTagName(h1)
//**QUERYSELECTOR */
// document.querySelector("p")

// document.querySelectorAll("p").forEach(el)=>
// {console.log(el)

// h1.innerText
// let h1=document.getElementById("heading")
// h1.style.backgroundColor="yellow"
// h1.style.color="green"

// let btn=document.getElementById("mybutton");
// btn.classList.add("active")

// ** EVENTS in JS
// const btn=document.getElementById("btn")

// ** secOND WAY OF ADDING EVENTS
// btn.onclick=()=>{
//   alert("Button has clicked ✅")
// }

// ** batter way of ADDING EVENTS THAT ABOVE ONE

// btn.addEventListener("click",()=>{
//   console.log("i am VERY HAPPY THAT NOW I AM LEARNING EVENTS")
// })

//** Adding Event Listeners =>COMMON EVENTLISTENER
// const container=document.getElementById("container")
// const button=document.getElementById("btn");

// container.addEventListener("mouseover",()=>{
//   container.style.backgroundColor="green"
// })
// container.addEventListener("mouseleave",()=>{
//   container.style.backgroundColor="brown"
// })

// button.addEventListener("click",(event)=>{
//   console.log(event)
//   container.style.color="brown";
//   container.style.backgroundColor="yellow"
//   console.log("changing  color...")
// })

//** EVENT BUBBLING AND Capturing */

// const parent=document.getElementById("container");
// const child=document.getElementById("child");
// const body=document.getElementsByTagName("body")[0]
// const html=document.getElementsByTagName("html")[1]

// body.addEventListener("click",()=>{
//   console.log("HTML clicked🖱️")
// },true)

// body.addEventListener("click",()=>{
//   console.log("body clicked🖱️")
// },true);

// parent.addEventListener("click",()=>{
//   console.log("Parent clicked🖱️")
// },true)

// child.addEventListener("click",()=>{
//   console.log("child clicked 🖱️")
// },true)

// * `event.stopPropagation()`:  Stops event from bubbling up

const parent = document.getElementById("container");
const child = document.getElementById("child");
// const body=document.getElementsByTagName("body")[0]
// const html=document.getElementsByTagName("html")[0];
const form = document.getElementsByTagName("form")[0];

// html.addEventListener("click",()=>{
//   console.log("HTML clicked🖱️")
// })

// body.addEventListener("click",()=>{
//   console.log("body clicked🖱️")
// });

// parent.addEventListener("click", (e) => {
//   e.stopPropagation();
//   console.log("Parent clicked🖱️");
// });

// child.addEventListener("click", (e) => {
//   e.stopPropagation();
//   console.log("child clicked 🖱️");
// });

// form.addEventListener("submit", (e) => {
//   e.preventDefault();
//   console.log("Form submitted")}, { once: true });


// learn DOM selectors on chai aur code

// window.onload=function(){
// document.getElementsByClassName('heading')[0].setAttribute('class','meg');
// // ** this 2 line code are same 
// document.getElementById('head').setAttribute('class','heal'); //** it s overwite the 1st meg */
// }

const head=document.getElementsByTagName('h1')
const coll=Array.from(head);
coll.forEach((f)=>{
f.style.color='yellow'
})
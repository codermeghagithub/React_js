// ** both firstElementChild and lastElementChild are properties
const parent = document.querySelector(".parent");
// console.log(parent);
// console.log(parent.children);

// const p2 = document.getElementsByTagName("div");
// console.log(p2);
// for (i = 0; i < parent.children.length; i++) {
//   console.log(parent.children[i]);

// }

const class1 = document.getElementsByClassName("c1");
// const ch_col = Array.from(class1);
// ch_col.forEach((f) => {
//   f.style.color = "orange";
// });
// console.log(parent.children[1]); // *idex[1]
// console.log(parent.firstElementChild); // *index[0]
// console.log(parent.lastElementChild);

// const print = document.querySelector(".c1");  //* o/p idx[0]
// console.log(print);
// console.log(print.parentElement);
// console.log(print.nextElementSibling); // *idx[0]

// console.log(parent.childNodes);

// ** upto this we have done how to fetch all peopertices & dom related

// *Start - create element😎
//  *All this it display only console of the browser
// const div = document.createElement("div");
// console.log(div);
// div.className = "c1";
// div.id = Math.round(Math.random() * 10 + 1);
// div.style.padding="12px"
// div.style.backgroundColor="skyblue";
// const n1=document.createTextNode('Hi goog Morning ☀️')
// div.appendChild(n1)
//  *All this it display only console of the browser

// *How to display on the screen as output which i did apply previous code
// document.body.appendChild(div)

// *upto this We have done How to create a new element in DOM | chai aur😎



// ** Note 
// Navigating Between Nodes
// You can use the following node properties to navigate between nodes with JavaScript:

// parentNode
// childNodes[nodenumber]
// firstChild
// lastChild
// nextSibling
// previousSibling

// **
// * Satrt- Edit and remove elements in DOM | chai aur👨🏻‍💻
// Q- add list element through create ele
//its not optimize approach
function addList(langname) {
  const li = document.createElement("li");
  li.innerHTML = `${langname}`;
  document.querySelector(".language").appendChild(li);
}
addList("Python");
addList("Java");

// Optimize approch is -
function addoptlist(langname) {
  const li = document.createElement("li");
  li.appendChild(document.createTextNode(langname));
  document.querySelector(".language").appendChild(li);
}
addoptlist("Math");
addoptlist("Next JS");

// * Edit
// ** what is nth-Children(2)
// const secondlanguage=document.querySelector("li:nth-child(2)")  // *SYNTAX:  *(li:-which element what to select))
// secondlanguage.innerHTML="Mojo"

// Optimize way
const secondlanguage = document.querySelector("li:nth-child(2)");
console.log(secondlanguage);

const newlist = document.createElement("li");
newlist.textContent = "Mojo";
secondlanguage.replaceWith(newlist);


// How to remove ele
// Q- edit 3rd list ele  through outer html

// How to remove ele
const lastlang=document.querySelector("li:last-child")
lastlang.remove()

// *upto this Edit and remove elements in DOM | chai aur👨🏻‍💻

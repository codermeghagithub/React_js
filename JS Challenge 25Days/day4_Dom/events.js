// document.getElementById('photo1').onclick=function(){
//   alert("This is beautiful photo")
// }

// optimize
// document.getElementById("photo1").addEventListener("click", function () {
//   alert("This is beautiful photo");
// });

// document.getElementById("photo1").addEventListener(
//   "click",
//   function (e) {
//     console.log("click inside the ul");
//   },
//   true
// ); // *default also false

//  *TYPE ,TIMESTAMP,DEFAULTPREVENTED
// TARGET,TOELEMENT ,srcElement, currentTarget,
// clinttX,clinttY,screenX,screenY
// altkey,ctrlkey

// Event Propogation
// How to prevent Event Propogation
// Eventbubbling
// event capturing

// **Event Propogation

// *Eventbubbling - inside to outside meand bitton to top
// document.getElementById('images').addEventListener('click',function (e) {
//   console.log("click inside the ul");
// },false)

// document.getElementById('photo2').addEventListener('click',function(){
//   console.log("Click 2nd li image");

// })

//  *event capturing  - outside to inside

// document.getElementById('images').addEventListener('click',function (e) {
//   console.log("click inside the ul");
// },true)

// document.getElementById('photo2').addEventListener('click',function(){
//   console.log("Click 2nd li image");

// },true)

// ** Stoppropogation
// document.getElementById('images').addEventListener('click',function(e){
//   console.log("click inside the ul");
// })

// document.getElementById("photo2").addEventListener("click", function (e) {
//   console.log("Click 2nd li image");
//   e.stopPropagation();
// });

// document.getElementById("link").addEventListener("click", function (e) {
//   e.preventDefault();
//   e.stopPropagation();
//   console.log("Google link is clicked");
// });

// How to remove all images

document.querySelector("#images").addEventListener("click", function (e) {
  console.log(e.target.tagName);

  // problem was if i clicked on li icon it remove all img and links how to prevent this problem
  if(e.target.tagName==='IMG'){
    console.log(e.target.id);
    
    let pleaseremove=e.target.parentNode
    pleaseremove.remove()
  }

  // *simple remove
  // let removeIt=e.target.parentNode
  // removeIt.remove()
  // or we can use
// removeIt.parentNode.removeChild(removeIt)
});




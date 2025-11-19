// Theme toggle function
function toggleTheme() {
  const body = document.body;
  const themeBtn = document.getElementById("theme-switch");

  body.classList.toggle("dark-mode");

  // Change icon based on theme
  if (body.classList.contains("dark-mode")) {
    themeBtn.textContent = "☀️";
  } else {
    themeBtn.textContent = "🌙";
  }
}

let addbtn = document.getElementById("add-btn");
let input = document.getElementById("taskInput");
let error = document.getElementById("err_msg");
let todoContainer = document.querySelector(".todo");

addbtn.addEventListener("click", addTask);

function addTask() {
  let task = input.value.trim();

  if (task === "") {
    error.innerHTML = "You have to enter at least one task";
    console.log("clicked");
    
    return;
  }

  error.innerHTML = "";

  // Create a wrapper div for one task
  let wrapper = document.createElement("div");
  wrapper.innerHTML = `
        <p>${task}</p>
        <span class="btn">
          <i onClick="update_task(this)"class="fa-solid fa-file-pen"></i>
          <i onClick="del_task(this)"class="fa-solid fa-trash-can"></i>
        </span>
  `;

  // Add new task to the list
  todoContainer.appendChild(wrapper);

  console.log("Task added:", task);

  input.value = ""; // clear the textbox
}

let update_task=(e)=>{
input.value=e.parentElement.previousElementSibling.innerHTML;
e.parentElement.parentElement.remove();
}

let del_task=(e)=>{
e.parentElement.parentElement.remove();  //means div of that task 
}
 




// function addTask() {
//   let li = document.createElement("li");
//   let inputfield = document.getElementById("taskInput").value;
//   let task = document.createTextNode(inputfield);
//   li.appendChild(task);
//   if (inputfield === "") {
//     alert("You must write your tast for your consistency");
//   } else {
//     document.getElementById("todoList").appendChild(li);
//   }
//   document.getElementById("taskInput").value = "";
//   let button = document.createElement("button");
//   let txt = document.createTextNode("\u00D7");
//   button.className = "close";
//   button.appendChild(txt);
// }

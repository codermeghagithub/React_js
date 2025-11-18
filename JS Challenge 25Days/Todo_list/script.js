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

function addTask() {
  let li = document.createElement("li");
  let inputfield = document.getElementById("taskInput").value;
  let task = document.createTextNode(inputfield);
  li.appendChild(task);
  if (inputfield === "") {
    alert("You must write your tast for your consistency");
  } else {
    document.getElementById("todoList").appendChild(li);
  }
  document.getElementById("taskInput").value = "";
  let button = document.createElement("button");
  let txt = document.createTextNode("\u00D7");
  button.className = "close";
  button.appendChild(txt);
}

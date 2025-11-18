let form = document.getElementById("form");
let input = document.getElementById("input");
let err_msg = document.getElementById("msg");
let all_order = document.getElementById("order");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log("button clicked");
  formValidation();
});
let formValidation = () => {
  if (input.value === "") {
    err_msg.innerHTML = "You have to order something";
    console.log("failure");
  } else {
    console.log("Successful");
    err_msg.innerHTML = "";
    accessData();
  }
};

let data = {};

let accessData = () => {
  data["text"] = input.value;
  console.log("data pushed");
  createorder();
};

let createorder = () => {
  
  all_order.innerHTML += 
    ` <div>
      <p>${data.text}</p>
      <span class="btn">
        <i onClick="update_f(this)" class="fa-solid fa-file-pen"></i>
        <i onClick="delete_f(this)" class="fa-solid fa-trash-can"></i>
      </span>
    </div>
    `;
    input.value="";

};

let update_f = (e) => {
  input.value=e.parentElement.previousElementSibling.innerHTML;
  e.parentElement.parentElement.remove();
};

let delete_f = (e) => {
  e.parentElement.parentElement.remove();
};

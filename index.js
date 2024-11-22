const fieldest = document.querySelector(".nameInput");
const input = document.querySelector(".form .nameInput");
const nameLabel = document.querySelector(".nameLabel");
const validator = document.querySelector(".ckeckOk");
const userLabel = document.querySelector(".nameUsername");
const userInput = document.querySelector(".usernameInput");
const inputPassword = document.querySelector(".paswordInput");
const inputPasswordC = document.querySelector(".paswordInputConfirm");
const labelPassword = document.querySelector(".namePassword");


// cklick on label get focus on the input 

nameLabel.addEventListener("click", (event) =>{
    console.log("it is working");
    fieldest.focus();
})

userLabel.addEventListener("click", (event) =>{
    console.log("working")
    userInput.focus();
})

// get Password checked min 8 characters

const valid8Letters = (value) => value.length >= 8;

inputPassword.addEventListener("input", (event) => {
  const value = event.target.value;

  if (valid8Letters(value)) {
    console.log("value is valid");
    validator.classList.add("valid");
    validator.classList.remove("error");
  } else {
    console.log("value is NOT valid");
    validator.classList.remove("valid");
    validator.classList.add("error");
  }
});

// confirm the password

inputPasswordC.addEventListener("input", (event) =>{
   
})
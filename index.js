const fieldest = document.querySelector(".nameInput");
const input = document.querySelector(".form .nameInput");
const nameLabel = document.querySelector(".nameLabel");
const validator = document.querySelector(".ckeckOk");
const userLabel = document.querySelector(".nameUsername");
const userInput = document.querySelector(".usernameInput");
const inputPassword = document.querySelector(".paswordInput");
const inputPasswordC = document.querySelector(".paswordInputConfirm");
const borderValidator = document.querySelector(".paswordInputConfirm");
const labelPassword = document.querySelector(".namePassword");
const validatePassword = document.querySelector(".ckeckOkPassword");
const button = document.querySelector(".btn");
const labelemail = document.querySelector(".email");
const inputemail = document.querySelector(".emailInput");
const submit = document.querySelector(".btn")
const formImputs = document.querySelector(".formInputs");




// cklick on label get focus on the input 

nameLabel.addEventListener("click", (event) =>{
    fieldest.focus();
})

userLabel.addEventListener("click", (event) =>{
    userInput.focus();
})

labelPassword.addEventListener("click", (event) =>{
    inputPassword.focus();
})

labelemail.addEventListener("click", (event) =>{
    inputemail.focus();
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
   const values = event.target.value;

   if(values.length && values != inputPassword.value){
    console.log("not the same");
    validatePassword.classList.add("not");
    validatePassword.classList.remove("correct");

   }else{
    console.log("It is the same");
    validatePassword.classList.remove("not");
    validatePassword.classList.add("correct");
   }
})

// submit momentet


formImputs.addEventListener("submit", (event) =>{
    event.preventDefault();

    const RegistrationData = {
      name: fieldest.value,
      username: userInput.value,
      password: inputPasswordC.value,
      email: inputemail.value,
    };
    console.log(RegistrationData);
})
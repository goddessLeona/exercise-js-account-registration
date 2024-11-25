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
    
    inputPassword.classList.add("valid");
    inputPassword.classList.remove("error");
  } else {
    
    inputPassword.classList.remove("valid")
    inputPassword.classList.add("error");
  }
});

// confirm the password

inputPasswordC.addEventListener("input", (event) =>{
   const values = event.target.value;

   if(values.length && values != inputPassword.value){
    
    inputPasswordC.classList.add("not");
    inputPasswordC.classList.remove("correct");
    button.classList.remove("knapp");

   }else{
    
    inputPasswordC.classList.remove("not");
    inputPasswordC.classList.add("correct");
    button.classList.add("knapp");
   }
})

// submit momentet


formImputs.addEventListener("submit",(event) =>{
    event.preventDefault();

    const RegistrationData = {
      name: fieldest.value,
      username: userInput.value,
      password: inputPasswordC.value,
      email: inputemail.value,
    };
    formImputs.reset();
    for(const data in RegistrationData){
        const info = RegistrationData[data];
        console.log(data +": "+ info);
    }
})
const fieldest = document.querySelector(".nameInput");
const input = document.querySelector(".form .nameInput");

const valid7Letters = (value) => value.length >= 7;

input.addEventListener("input", (event) => {
  const value = event.target.value;

  if (valid7Letters(value)) {
    console.log("value is valid");
    fieldest.classList.add("valid");
    fieldest.classList.remove("error");
  } else {
    console.log("value is NOT valid");
    fieldest.classList.remove("valid");
    fieldest.classList.add("error");
  }
});

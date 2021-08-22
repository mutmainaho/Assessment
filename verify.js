let sendForm = document.getElementById("btn");
let mail = document.getElementById("verification");
let errorMessage = document.querySelector(".error-message");

let valide = (event) => {
  const emailRegex = /([a-z\d.-]+)@([a-z\d-]+)\.([a-z]{2,8})$/i;
  if (mail.value === "") {
    errorMessage.innerHTML = "This is required to verify your identity";
    event.preventDefault();
    return false;
  } else if (!mail.value.match(emailRegex)) {
    errorMessage.innerHTML = "Please enter a valid email";
    event.preventDefault();
    return false;
  } else {
    errorMessage.innerHTML = "";
    return true;
  }
};

sendForm.addEventListener("click", valide);
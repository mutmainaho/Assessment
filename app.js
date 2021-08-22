let sendForm = document.getElementById('btn');
let email = document.getElementById('email');
let password = document.getElementById('password');


let validate = (field, event, regEx, result, output) => {
  if (field.value === "") {
    field.nextElementSibling.nextElementSibling.innerHTML = result;
    event.preventDefault();
    return false;
  } else if (!field.value.match(regEx)) {
    field.nextElementSibling.nextElementSibling.innerHTML = output;
    event.preventDefault();
    return false;
  } else {
    field.nextElementSibling.nextElementSibling.innerHTML = "";
    return true;
  }
};


const valide= (event) => {
  const emailAddressRegex = /^w+([.-]?w+)*@w+([.-]?w+)*(.w{2,10})+$/;
  const passwordRegex = /(?=.*d)(?=.*[a-z])(?=.*[a-zA-Z]).{6,}$/;
    validate(
      email,
      event,
      emailAddressRegex,
      "This is required to verify your identity",
      "Please enter a valid email"
    );
    validate(
      password,
      event,
      passwordRegex,
      "This is required to verify your identity",
      "Please enter a valid password"
    );
     return true;
    
}

sendForm.addEventListener("click", valide)






























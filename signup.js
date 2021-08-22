
let sendForm = document.getElementById ('btn');
let fullName = document.getElementById ('fullname');
let password = document.getElementById ('password');
let email = document.getElementById ('email');
let verifyPassword = document.getElementById ('verifypassword');



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
    const nameRegex = /^[a-zA-Z]/;
    const emailAddressRegex = /^w+([.-]?w+)*@w+([.-]?w+)*(.w{2,10})+$/;
    const passwordRegex = /(?=.*d)(?=.*[a-z])(?=.*[a-zA-Z]).{6,}$/;

    validate(
        fullName,
        event,
        nameRegex,
        "This is required to verify your identity",
        "Please enter a valid Full Name"
      );

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

      validate(
        verifyPassword,
        event,
        passwordRegex,
        "This is required to verify your identity",
        "Please enter a valid email"
      ); return true;
      
  }

  sendForm.addEventListener("click", valide)





  

  
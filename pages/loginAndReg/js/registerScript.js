//Import all the required modules/functions.

import {
  uNameCheck,
  emailCheck,
  pswdCheck,
  confirmPasswordCheck,
} from "./controller.js";

//Check for the username
let uName = document.getElementById("uName");
//let unameError = document.getElementById("unameError");
let err = document.querySelectorAll(".msg");
//unameError.style.display = "block";
uName.addEventListener("keypress", (event) => {
  let text = uName.value + `${event.key}`;
  let error = uNameCheck(text);
  if (error[0] === false) {
    err[0].style.display = "block";
    err[0].classList.add("errMsg");
    uName.classList.add("error");
    err[0].classList.remove("succMsg");
    uName.classList.remove("success");
    err[0].innerHTML = error[1];
  } else {
    err[0].classList.add("succMsg");
    uName.classList.add("success");
    err[0].classList.remove("errMsg");
    uName.classList.remove("error");
    err[0].innerHTML = error[1];
  }
});

//Check for the password
let password = document.getElementById("pswd");
//let passwordError = document.getElementById("pswdError");
//passwordError.style.display = "none";
password.addEventListener("keypress", (event) => {
  let text = password.value + `${event.key}`;
  let msg = pswdCheck(text);
  if (msg[0] === false) {
    err[2].style.display = "block";
    err[2].classList.add("errMsg");
    password.classList.add("error");
    err[2].classList.remove("succMsg");
    password.classList.remove("success");
    err[2].innerHTML = msg[1];
  } else {
    err[2].classList.add("succMsg");
    password.classList.add("success");
    err[2].classList.remove("errMsg");
    password.classList.remove("error");
    err[2].innerHTML = msg[1];
  }
});

//Check for the email.

let email = document.getElementById("email");
// let emailError = document.getElementById("emailError");
// emailError.style.display = "none";
email.addEventListener("keypress", (event) => {
  let text = email.value + `${event.key}`;
  let msg = emailCheck(text, emailError);
  if (msg[0] === false) {
    err[1].style.display = "block";
    err[1].classList.add("errMsg");
    email.classList.add("error");
    err[1].classList.remove("succMsg");
    email.classList.remove("success");
    err[1].innerHTML = msg[1];
  } else {
    err[1].classList.add("succMsg");
    email.classList.add("success");
    err[1].classList.remove("errMsg");
    email.classList.remove("error");
    err[1].innerHTML = msg[1];
  }
});

//Confirm if password is correct

let confPassword = document.getElementById("confirmPswd");
//let confPasswordError = document.getElementById("confirmPswdError");
//confPasswordError.style.display = "none";
confPassword.addEventListener("keypress", (event) => {
  let text = confPassword.value + `${event.key}`;
  let initPasswrd = password.value;
  let msg = confirmPasswordCheck(text, initPasswrd);
  if (msg[0] === false) {
    err[3].style.display = "block";
    err[3].classList.add("errMsg");
    confPassword.classList.add("error");
    err[3].classList.remove("succMsg");
    confPassword.classList.remove("success");
    err[3].innerHTML = msg[1];
  } else {
    err[3].classList.add("succMsg");
    confPassword.classList.add("success");
    err[3].classList.remove("errMsg");
    confPassword.classList.remove("error");
    err[3].innerHTML = msg[1];
  }
});

form.addEventListener("submit", (e) => {
  e.preventDefault();

  let isFormValid =
    uNameCheck(uName.value)[0] &&
    pswdCheck(password.value)[0] &&
    emailCheck(email.value)[0] &&
    confirmPasswordCheck(confPassword.value)[0];

  if (isFormValid) {
    sessionStorage.setItem("userName", uName.value);
    window.location.href = "./../../../home.html";
  }
});
//Classname approach. returns as collection treated as an array.
//document.querySelector(".error").innerHTML =

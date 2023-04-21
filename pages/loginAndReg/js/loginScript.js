//Import all the required modules/functions.

import {
  uNameCheck,
  emailCheck,
  pswdCheck,
  confirmPasswordCheck,
} from "./controller.js";

let form = document.querySelector("#loginForm");

//Check for the username
let uName = document.getElementById("uname");
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
let password = document.getElementById("psw");
//let passwordError = document.getElementById("pswdError");
//passwordError.style.display = "none";
password.addEventListener("keypress", (event) => {
  let text = password.value + `${event.key}`;
  let msg = pswdCheck(text);
  if (msg[0] === false) {
    err[1].style.display = "block";
    err[1].classList.add("errMsg");
    password.classList.add("error");
    err[1].classList.remove("succMsg");
    password.classList.remove("success");
    err[1].innerHTML = msg[1];
  } else {
    err[1].classList.add("succMsg");
    password.classList.add("success");
    err[1].classList.remove("errMsg");
    password.classList.remove("error");
    err[1].innerHTML = msg[1];
  }
});

//Final Submit

form.addEventListener("submit", (e) => {
  e.preventDefault();

  let isFormValid = uNameCheck(uName.value)[0] && pswdCheck(password.value)[0];

  if (isFormValid) {
    sessionStorage.setItem("userName", uName.value);
    window.location.href = "./../../../home.html"; //Regirect to home page
  }
});
//Classname approach. returns as collection treated as an array.
//document.querySelector(".error").innerHTML =
